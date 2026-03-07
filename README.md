# Anix Lynch - AI Data Engineer & Architect

**Data engineer with multi-cloud experience. Specialized in machine learning, data visualization, and deploying scalable ML solutions across AWS, GCP, and Azure.**

[![Portfolio](https://img.shields.io/badge/Portfolio-gozeroshot.dev-blue?style=for-the-badge&logo=vercel)](https://gozeroshot.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anixlynch/)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-FFD21E?style=for-the-badge&logo=huggingface)](https://huggingface.co/spaces/anixlynch/anixlynch)

## 🚀 Technical Skills

*   **Core:** Python, SQL, Data Engineering, ML Pipelines, ETL Pipelines
*   **AI/ML:** GenAI & LLMs, AWS Bedrock, AI Agents, RAG Systems, Vector Databases, Snowflake Cortex, Vertex AI
*   **Cloud:** Multi-Cloud (AWS / GCP / Azure)

## 📂 Project Showcase & Sitemap

This repository hosts the portfolio website `gozeroshot.dev`, serving as a central hub for my engineering projects ("PortCo").

| Project | Description | Stack |
|---------|-------------|-------|
| **[Mocktailverse](https://github.com/anix-lynch/mocktailverse-bedrock)** | Enterprise GenAI Platform powered by AWS Bedrock with RAG pipeline and semantic search. | AWS Bedrock, Next.js, Vector Search |
| **[AI Agent Job Intelligence](https://github.com/anix-lynch/ai-agent-job-intelligence-phase-2)** | Autonomous resume-to-job matching using LangChain agents and MCP integration. | LangChain, Pinecone, OpenAI |
| **[Coffeeverse](https://github.com/anix-lynch/coffeeverse)** | Azure-native ETL pipeline with Cosmos DB and Data Factory orchestration. | Azure, dbt, Docker, Bicep |
| **[Cocktailverse](https://github.com/anix-lynch/cocktailverse)** | Production-grade GCP data pipeline with BigQuery and Cloud Run. | GCP, BigQuery, Cloud Run |
| **[Pied Piper Legal Simulator](https://github.com/anix-lynch/pied-piper-legal-simulator)** | AI-powered VC negotiation simulator teaching term-sheet dynamics. | FastAPI, React, Claude AI |
| **[End-to-End Churn ML Pipeline](https://github.com/anix-lynch/churn-ml-pipeline)** | Complete ML pipeline with RFM analysis, time-aware splitting, and ensemble model training. | Python, Scikit-learn, RFM Analysis |
| **[Real-time Fraud Detection](https://github.com/anix-lynch/realtime-fraud-detection)** | Real-time feature engineering for fraud detection with statistical analysis. | Python, Anomaly Detection |
| **[Multimodal GenAI Studio](https://github.com/anix-lynch/multimodal-genai-studio)** | Creative suite combining Gemini, DALL-E, and Whisper for content generation. | Gemini, DALL-E, Whisper |
| **[AI Business Intelligence Agent](https://github.com/anix-lynch/ai-bi-agent)** | RAG-powered analytics assistant for automated EDA and visualization. | LangChain, ChromaDB |
| **[Financial Modeling Automation](https://github.com/anix-lynch/financial-modeling-automation)** | PE/VC financial modeling platform with VC cap table analysis and Excel automation. | Python, Streamlit, openpyxl |
| **[Network Intelligence Map](https://github.com/anix-lynch/silicon-beach-ai-jobs)** | Geospatial network analysis of the Silicon Beach tech ecosystem. | Snowflake Cortex, Streamlit |
| **[Marketing Analytics Visualization](https://github.com/anix-lynch/marketing-analytics-etl)** | Professional marketing analytics dashboard with real-time KPIs and attribution insights. | Python, Streamlit, DuckDB |

## 🛠️ Website Architecture

This portfolio is built as a static site for maximum performance and SEO.

*   **Framework:** [Astro](https://astro.build)
*   **Hosting:** Vercel
*   **Styling:** Custom CSS (Responsive & Glassmorphism)
*   **Assets:** Optimized WebP/GIFs

## 📁 Repository Structure

```bash
├── src/
│   ├── components/
│   │   ├── Layout.astro        # Main site layout & SEO headers
│   │   ├── Sidebar.astro       # Left sidebar with profile & skills
│   │   └── ProjectCard.astro   # Reusable card component for projects
│   ├── pages/
│   │   ├── index.astro         # 🏠 Homepage (Portfolio Showcase)
│   │   ├── certifications.astro # 📜 Certifications Gallery
│   │   ├── leadership.astro    # 🎯 Leadership & Mentoring
│   │   ├── press.astro         # 📺 Press & Media Appearances
│   │   └── public-speaking.astro # 🎤 Public Speaking Events
│   └── styles/                 # Global CSS & Design System
├── public/                     # 🖼️ Static Assets (GIFs, Images, Resume)
├── hf-gallery-assets/          # 🎨 HuggingFace Gallery Mirror
│   ├── index.html              # Standalone HTML for HF Space
│   └── *.png                   # Gallery specific assets
├── (resume source)             # 📄 Resume content for site
└── astro.config.mjs            # Astro Configuration
```
