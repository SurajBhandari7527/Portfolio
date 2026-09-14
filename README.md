# 🚀 Suraj Bhandari — Data Science & Analytics Portfolio

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.x-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Neon_Dark-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A responsive, high-performance portfolio website presenting end-to-end machine learning pipelines, statistical research, relational database systems, and Generative AI applications. 

Powered by a lightweight **Flask backend** and styled with a custom **cyberpunk/neon dark-mode design system**, the portfolio features client-side project filtering, animated transitions, and an interactive **learning roadmap** backed by a custom REST API.

---

## ✨ Key Features

- **🎯 Specialized Project Hub & Filtering:**
  - Dynamic filtering across 4 domains: **Data Analytics**, **Data Science**, **GenAI & Speech AI**, and **Hobby Builds**.
  - Dual routing support: dynamic Flask slug routing (`/projects/<category>`) and animated client-side filtering with URL state synchronization (`window.history.pushState`).
- **🗺️ Interactive Learning Roadmap:**
  - Multi-tier timeline dynamically parsed from `roadmap.json` via the `/api/roadmap` endpoint.
  - Expandable milestone nodes with interactive slide-over details drawer for deeply nested concepts.
  - Direct links to project repositories and live notebooks embedded within the roadmap.
- **⚡ Modern Dark Glassmorphism UI:**
  - Custom design tokens using CSS variables (`--neon-blue`, `--neon-purple`, `--card-bg`).
  - Backdrop filters, subtle glow gradients, and zero bloated external UI frameworks.
- **📱 Fully Responsive Layout:**
  - Fixed sidebar navigation with auto-highlighting active states and smooth scroll anchors.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Backend & Routing** | Python, Flask, Jinja2 Templates |
| **Frontend Core** | HTML5, Modern CSS3 (Grid & Flexbox), Vanilla JavaScript (ES6+) |
| **Icons & Typography** | Font Awesome 6, Google Fonts (`Inter`) |
| **Data & APIs** | Custom REST API (`/api/roadmap`), JSON-driven timeline schema |

---

## 📂 Project Structure

```text
portfolio/
├── app.py                     # Flask application entry point & routes
├── roadmap.json               # Structured milestones & roadmap data
├── requirements.txt           # Python dependencies
│
├── templates/                 # Jinja2 HTML templates
│   ├── home.html              # Landing page (Hero, About, Skills, Hub, Contact)
│   ├── projects.html          # Vertical card showcase with live filter bar
│   ├── roadmap.html           # Interactive learning roadmap container
│   └── sidebar.html           # Persistent modular sidebar component
│
└── static/
    ├── css/
    │   └── style.css          # Design system, glassmorphism & responsive styles
    ├── js/
    │   ├── main.js            # Sidebar logic & active link handlers
    │   └── roadmap.js         # Timeline rendering & drawer overlay controls
    └── images/
        └── profile.jpg        # Profile portrait
```

---

## 🌟 Featured Projects Showcased

### 1. 📊 Data Analytics
- **Global Cancer Risk & Statistical Modeling:** Audited 50k clinical records; applied Kruskal-Wallis hypothesis testing proving hospital costs operate independently of survival time ($p = 0.923$). Built Random Forest severity regressor ($R^2 = 0.775$).
- **Hospital Database Migration & Security:** Migrated 10k+ spreadsheet rows into a 3NF relational MySQL schema with 0% data redundancy, stored procedures, and RBAC security.
- **World Bank Automated ETL & Power BI:** End-to-end data pipeline fetching indicator data via REST APIs, modeled in Power BI using custom DAX measures.

### 2. 🧠 Data Science & Machine Learning
- **Student Mental Health Predictor:** Leakage-proof ML pipeline reducing cardinality by 90% across 111 countries; improved $R^2$ to 0.88 and served predictions via **FastAPI**.
- **NLP Sentiment Analysis:** Text preprocessing pipeline (regex, stopword removal, emoji parsing, TF-IDF vectorization) paired with Logistic Regression.

### 3. 🤖 Generative AI & Speech AI
- **Aero — Voice AI Mock Interview & Revision Platform:** Desktop revision platform using Gemini Vision & PyMuPDF to convert handwritten notes into question banks; features real-time voice interviews using Whisper STT and Kokoro-ONNX TTS.
- **AI Movie Recommendation & Context Chatbot Engine:** Multi-modal recommendation engine computing Cosine Similarity matrix with async Gemini LLM contextual filtering.

---



## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Portfolio landing page (Hero, About, Skills, Contacts) |
| `GET` | `/projects` | All project cards |
| `GET` | `/projects/<category>` | Filter projects by `analytics`, `datascience`, `genai`, or `hobby` |
| `GET` | `/roadmap` | Visual learning timeline |
| `GET` | `/api/roadmap` | JSON endpoint returning structured learning milestones from `roadmap.json` |

---

## 📬 Contact & Connect

- **Author:** Suraj Bhandari
- **Email:** [surajbhandari6731@gmail.com](mailto:surajbhandari6731@gmail.com)
- **LinkedIn:** [Suraj Bhandari](https://www.linkedin.com/in/suraj-bhandari-ba7366356)
- **GitHub:** [@SurajBhandari7527](https://github.com/SurajBhandari7527)
- **Location:** Patiala, Punjab / Kapilvastu, Nepal

---

```
