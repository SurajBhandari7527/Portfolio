async function loadSidebar() {
    try {
        const response = await fetch('/components/sidebar.html');
        if (!response.ok) throw new Error("Could not fetch sidebar");
        
        const sidebarHTML = await response.text();
        const placeholder = document.getElementById('sidebar-placeholder');
        if (placeholder) {
            placeholder.innerHTML = sidebarHTML;
        }

        // Auto-highlight active tab based on Flask URLs
        const path = window.location.pathname;
        
        if (path === "/" || path === "/roadmap" || path.endsWith("index.html")) {
            document.getElementById('nav-roadmap')?.classList.add('active');
        } else if (path.includes("projects")) {
            document.getElementById('nav-projects')?.classList.add('active');
        } else if (path.includes("about")) {
            document.getElementById('nav-about')?.classList.add('active');
        }

    } catch (error) {
        console.error("Error loading sidebar:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadSidebar);