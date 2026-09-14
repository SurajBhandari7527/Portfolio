const timelineContainer = document.getElementById('timeline-container');
const mainRoadmap = document.getElementById('main-roadmap');
const detailsPanel = document.getElementById('details-panel');
const panelHeader = document.getElementById('panel-header');
const detailsContent = document.getElementById('details-content');

// --- Fetch Data ---
async function fetchRoadmapData() {
    try {
        const response = await fetch('/api/roadmap');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        
        const allLevels = [];
        if (data.portfolio_roadmap && data.portfolio_roadmap.level_0) {
            allLevels.push(data.portfolio_roadmap.level_0);
        }
        if (data.portfolio_roadmap && data.portfolio_roadmap.levels) {
            allLevels.push(...data.portfolio_roadmap.levels);
        }
        
        renderRoadmap(allLevels);
    } catch (error) {
        console.error("Error loading roadmap:", error);
        timelineContainer.innerHTML = `<div style="color: #ef4444; text-align:center;">Failed to load roadmap data.<br>${error.message}</div>`;
    }
}

// --- Parsing Logic ---
function parseItem(item) {
    if (typeof item === 'object' && item !== null) {
        return { type: 'project', title: item["Project Name"] || 'Unknown Project', link: item["Code Link"] || '#' };
    }
    
    const match = item.match(/^(.*?)\s*\((.*)\)$/);
    if (match) {
        return { type: 'nested', title: match[1].trim(), subItems: match[2].split(',').map(s => s.trim()) };
    }

    return { type: 'topic', title: item.trim() };
}

// --- Render Main Timeline ---
function renderRoadmap(levels) {
    timelineContainer.innerHTML = '';

    levels.forEach((level, index) => {
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.id = `node-${index}`;

        let categoriesHtml = '';
        if (level.content) {
            for (const [categoryName, items] of Object.entries(level.content)) {
                let itemsListHtml = '';
                items.forEach(rawItem => {
                    const parsed = parseItem(rawItem);
                    
                    if (parsed.type === 'project') {
                        itemsListHtml += `
                            <div class="category-item project-link" onclick="window.open('${parsed.link}', '_blank')">
                                <span><i class="fa-solid fa-rocket icon-color" style="color:var(--accent-blue)"></i> ${parsed.title}</span>
                                <i class="fa-solid fa-arrow-up-right-from-square arrow" style="color:var(--accent-blue)"></i>
                            </div>
                        `;
                    } else if (parsed.type === 'nested') {
                        const subJson = encodeURIComponent(JSON.stringify(parsed.subItems));
                        const escapedTitle = parsed.title.replace(/'/g, "\\'"); 
                        itemsListHtml += `
                            <div class="category-item clickable" onclick="openSubCategory('${escapedTitle}', '${subJson}')">
                                <span><i class="fa-solid fa-layer-group icon-color" style="color:var(--neon-purple)"></i> ${parsed.title}</span>
                                <i class="fa-solid fa-chevron-right arrow" style="color:var(--neon-purple)"></i>
                            </div>
                        `;
                    } else {
                        itemsListHtml += `
                            <div class="category-item">
                                <span><i class="fa-solid fa-cube icon-color"></i> ${parsed.title}</span>
                            </div>
                        `;
                    }
                });

                categoriesHtml += `
                    <div class="category-box">
                        <h3>${categoryName}</h3>
                        <div class="items-container">
                            ${itemsListHtml}
                        </div>
                    </div>
                `;
            }
        }

        node.innerHTML = `
            <div class="node-dot"></div>
            <div class="collapsed-card" onclick="toggleNode(${index})">
                ${level.id === "0" || level.id === undefined ? level.title : `Level ${level.id}: ${level.title}`}
            </div>
            <div class="expanded-card">
                <div class="expanded-header" onclick="toggleNode(${index})">
                    <div class="level-badge">${level.id ? 'Level ' + level.id : 'Foundation'}</div>
                    <h2>${level.title}</h2>
                    <p>${level.description || ''}</p>
                </div>
                <div class="category-grid">
                    ${categoriesHtml}
                </div>
            </div>
        `;
        timelineContainer.appendChild(node);
    });
}

window.toggleNode = function(index) {
    const nodes = document.querySelectorAll('.timeline-node');
    if (nodes[index].classList.contains('active')) {
        nodes[index].classList.remove('active');
    } else {
        nodes.forEach(n => n.classList.remove('active'));
        nodes[index].classList.add('active');
    }
};

window.openSubCategory = function(title, subItemsJson) {
    const subItems = JSON.parse(decodeURIComponent(subItemsJson));
    
    panelHeader.innerHTML = `
        <h2>${title}</h2>
        <p>Detailed sub-topics</p>
    `;
    
    let html = '';
    subItems.forEach(item => {
        html += `
            <div class="detail-row">
                <div class="detail-left">
                    <i class="fa-solid fa-cube"></i>
                    <span>${item}</span>
                </div>
            </div>
        `;
    });
    detailsContent.innerHTML = html;
    
    mainRoadmap.classList.add('blurred');
    detailsPanel.classList.add('open');
};

window.closeDetails = function() {
    mainRoadmap.classList.remove('blurred');
    detailsPanel.classList.remove('open');
};

mainRoadmap.addEventListener('click', (e) => {
    if (mainRoadmap.classList.contains('blurred') && !e.target.closest('.category-item')) {
        closeDetails();
    }
});

// Initialize on page load
fetchRoadmapData();