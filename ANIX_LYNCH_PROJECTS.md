# ANIX LYNCH
**AI Data Engineer, Gen AI Architect**  
Los Angeles, CA | anixlynch@gmail.com | [LinkedIn](https://linkedin.com/in/anixlynch) | [GitHub](https://github.com/anix-lynch) | [Portfolio](https://gozeroshot.dev)

---

## PROFESSIONAL SUMMARY
AI Data Engineer specializing in **multi-cloud ETL pipelines** (AWS, Azure, GCP) and **LLM-powered applications**. Expert in building production-grade **RAG systems**, **vector databases**, and **serverless architectures**. Proven track record deploying scalable data solutions with **Python**, **dbt**, **Docker**, and modern AI frameworks (**LangChain**, **OpenAI**, **Gemini**).

---

## TECHNICAL SKILLS
**Languages & Core:** Python, SQL, JavaScript, TypeScript, Pandas, NumPy, SciPy, Jupyter  
**Deep Learning & ML:** PyTorch, Scikit-learn, LightGBM, XGBoost, Random Forest, Transformers, HuggingFace, GPU Computing, Multi-modal AI
**LLMs & Agents:** OpenAI, Anthropic Claude, DeepSeek, Gemini, LangChain, RAG, Agent Framework, Embeddings, Prompt Engineering
**Vector Databases:** Pinecone, Qdrant, ChromaDB, FAISS, Semantic Search
**AWS:** S3, Lambda, Glue, DynamoDB, CloudFormation
**GCP:** BigQuery, Cloud Run, Cloud Storage
**Azure:** Data Factory, Functions, Cosmos DB, Blob Storage, Bicep
**Data Engineering:** dbt, Apache Airflow, DuckDB, ETL Pipelines, Data Modeling, Data Quality, Data Lineage, API Integration
**MLOps & DevOps:** Docker, Git, GitHub, CI/CD, Model Serving, Real-time Inference, Model Versioning, Container Registry
**Visualization & BI:** Streamlit, Gradio, Plotly, Folium, Matplotlib, ECharts, BI Dashboard, Data Analytics
**Data Tools:** JSON, CSV, YAML, openpyxl, FastAPI, Pydantic, Sentence Transformers, HuggingFace Datasets
**ML Engineering:** Feature Engineering, Model Deployment, Model Training, Cross-validation, Hyperparameter Tuning, Predictive Modeling

---

## KEY PROJECTS

### 1. Mocktailverse: Enterprise GenAI Platform | [Live Demo](https://dgco3hhxo94y8.cloudfront.net) | [Code](https://github.com/anix-lynch/mocktailverse-bedrock)
**Purpose:** Production-ready GenAI data engineering platform demonstrating enterprise-grade AWS Bedrock integration for real-world AI applications.

**What It Does:** A full-stack GenAI platform that enables users to search and interact with cocktail recipes using natural language. The system uses AWS Bedrock's Titan Embeddings for semantic vector search, Claude 3 for AI reasoning, and displays real-time AI decision-making processes. Built with serverless architecture (AWS Lambda) and modern Next.js 14 frontend with TypeScript.

**Key Features:**
- **RAG Pipeline:** Retrieval-Augmented Generation system that searches vector embeddings to find relevant cocktail recipes
- **Semantic Vector Search:** Uses AWS Titan Embeddings to convert queries and recipes into vectors for similarity matching
- **AI Reasoning Visualization:** Shows real-time AI thought process and decision-making steps
- **Serverless Architecture:** Fully serverless backend using AWS Lambda functions
- **Production Deployment:** Deployed on AWS CloudFront with Next.js 14, TypeScript, and modern React patterns

---

### 2. AI Agent Job Intelligence | [Live Demo](https://ai-agent-job-intelligence-phase-2-tr8fm4dzvgzjmpd2mo63a3.streamlit.app/) | [Code](https://github.com/anix-lynch/ai-agent-job-intelligence-phase-2)
**Purpose:** AI-powered job matching platform that helps job seekers find relevant positions by intelligently matching resumes to job descriptions using advanced AI techniques.

**What It Does:** An autonomous job matching system that uses multiple AI agents to analyze resumes, extract skills and experience, and match them to job postings from Silicon Beach tech companies. The system uses semantic search across three vector databases (Pinecone, Qdrant, FAISS) to find the best matches, then uses LangChain agents to provide detailed matching analysis and ATS (Applicant Tracking System) optimization recommendations.

**Key Features:**
- **Multi-Agent RAG System:** Uses LangChain agents to autonomously analyze and match resumes to jobs
- **Triple Vector Database Architecture:** Implements semantic search across Pinecone, Qdrant, and FAISS for redundancy and performance
- **ATS Optimization:** Provides keyword suggestions and resume improvements to pass Applicant Tracking Systems
- **MCP Integration:** Model Context Protocol integration for enhanced AI reasoning
- **Real-time Job Intelligence:** Live analysis of job postings with match scores and detailed explanations

---

### 3. Coffeeverse: Azure Cloud ETL Pipeline | [Live Demo](https://coffeeverse-jhmtq3zhd49jjr5aixnfgl.streamlit.app/) | [Code](https://github.com/anix-lynch/coffeeverse)
**Purpose:** Demonstrates enterprise Azure cloud architecture with a complete ETL pipeline for coffee recipe data, showcasing Microsoft's cloud stack capabilities.

**What It Does:** A production-grade ETL pipeline that extracts coffee recipe data from APIs, transforms it using dbt (data build tool), and loads it into Azure Cosmos DB. The system uses Azure Data Factory for orchestration, Azure Functions for serverless processing, Azure Blob Storage for data lake storage, and Bicep for Infrastructure as Code. The dashboard visualizes coffee recipes with filtering and search capabilities.

**Key Features:**
- **Serverless Data Lake:** Azure Blob Storage stores raw and processed data in Parquet format
- **dbt Transformations:** Data quality validation and data lineage tracking using dbt
- **Azure Cosmos DB:** NoSQL database for fast querying of recipe data
- **Bicep IaC:** Infrastructure as Code for reproducible deployments
- **Docker Deployment:** Containerized application with CI/CD pipeline
- **Cost-Effective:** Runs on Azure Free Tier ($0/month) demonstrating cost optimization

---

### 4. Cocktailverse: GCP BigQuery ETL Pipeline | [Live Demo](https://cocktailverse-835005185815.us-central1.run.app) | [Code](https://github.com/anix-lynch/cocktailverse)
**Purpose:** Production-grade data pipeline on Google Cloud Platform showcasing BigQuery data warehousing, Cloud Run serverless deployment, and real-time analytics.

**What It Does:** An ETL pipeline that extracts cocktail recipe data from external APIs, transforms it using Python data processing, and loads it into Google BigQuery data warehouse. The system uses Google Cloud Storage (GCS) for Parquet file storage, Cloud Run for serverless container deployment, and Apache Beam for real-time data processing. The Streamlit dashboard provides interactive analytics and visualization of cocktail recipes.

**Key Features:**
- **BigQuery Data Warehouse:** Scalable data warehouse for analytics and querying
- **GCS Parquet Storage:** Efficient columnar storage format for data lake
- **Cloud Run Deployment:** Serverless container platform for scalable API and dashboard hosting
- **Real-time Data Modeling:** Apache Beam for streaming data transformations
- **Interactive Analytics:** Streamlit dashboard with filtering, search, and visualization capabilities

---

### 5. Pied Piper Legal Simulator | [Live Demo](https://public-ndx6vbur4-anix-lynchs-projects.vercel.app) | [Code](https://github.com/anix-lynch/pied-piper-legal-simulator)
**Purpose:** Educational AI-powered tool that teaches VC (Venture Capital) negotiation dynamics through interactive scenarios inspired by the Silicon Valley TV show.

**What It Does:** An interactive legal simulator that walks users through 19+ episode-based scenarios from the Silicon Valley TV show, teaching term-sheet negotiation dynamics. Users can see how different deal structures (equity percentages, board seats, liquidation preferences) affect outcomes for VCs, founders, and employees. The system uses Claude AI to generate realistic negotiation scenarios and outcomes.

**Key Features:**
- **VC Negotiation Education:** Teaches term-sheet dynamics through interactive scenarios
- **Outcome Analysis:** Shows VC Win, Founder Win, and Win-Win scenarios based on deal structure
- **AI-Generated Scenarios:** Uses Claude AI to create realistic negotiation situations
- **FastAPI Backend:** RESTful API for scenario generation and analysis
- **React Frontend:** Modern web interface with interactive deal structure builder
- **DuckDB Analytics:** Fast in-memory database for scenario analysis

---

### 6. End-to-End Churn ML Pipeline | [Live Demo](https://churn-ml-pipeline-mwvbz4fzdvmd8yvjvz9jak.streamlit.app) | [Code](https://github.com/anix-lynch/churn-ml-pipeline)
**Purpose:** Complete machine learning pipeline for predicting customer churn, demonstrating end-to-end ML engineering from data preparation to model deployment.

**What It Does:** A comprehensive ML system that predicts which customers are likely to churn (cancel subscriptions). The pipeline includes RFM (Recency, Frequency, Monetary) analysis for customer segmentation, time-aware data splitting to prevent data leakage, feature engineering, and ensemble model training using LightGBM, XGBoost, and Random Forest. The system includes model evaluation, hyperparameter tuning, and a production-ready FastAPI endpoint for real-time predictions.

**Key Features:**
- **RFM Analysis:** Customer segmentation using Recency, Frequency, Monetary value analysis
- **Time-Aware Splitting:** Prevents data leakage by splitting data chronologically
- **Ensemble Models:** Combines LightGBM, XGBoost, and Random Forest for robust predictions
- **Feature Engineering:** Automated feature creation and selection
- **Model Serving:** FastAPI endpoint for real-time churn predictions
- **Interactive Dashboard:** Streamlit dashboard for model exploration and prediction visualization

---

### 7. Real-time Fraud Detection | [Live Demo](https://realtime-fraud-detection-x4uqwkrfnk8g2p567i596x.streamlit.app) | [Code](https://github.com/anix-lynch/realtime-fraud-detection)
**Purpose:** Real-time fraud detection system that identifies suspicious transactions using behavioral analysis and anomaly detection techniques.

**What It Does:** A fraud detection system that analyzes transaction patterns in real-time to identify potentially fraudulent activities. The system uses advanced feature engineering to create behavioral profiles (transaction frequency, amounts, locations, time patterns) and applies statistical analysis and anomaly detection algorithms to score transactions. The dashboard provides real-time fraud scoring, transaction analysis, and visualization of fraud patterns.

**Key Features:**
- **Real-time Processing:** Processes transactions as they occur for immediate fraud detection
- **Behavioral Feature Engineering:** Creates features based on user behavior patterns
- **Anomaly Detection:** Uses statistical methods to identify unusual transaction patterns
- **Fraud Scoring:** Provides risk scores for each transaction
- **Model Serving:** Real-time inference pipeline for production use
- **Interactive Analytics:** Dashboard for exploring fraud patterns and model performance

---

### 8. Multimodal GenAI Studio | [Live Demo](https://multimodal-genai-studio.streamlit.app) | [Code](https://github.com/anix-lynch/multimodal-genai-studio)
**Purpose:** Comprehensive multimodal AI application demonstrating text, image, and audio generation capabilities using multiple AI models and frameworks.

**What It Does:** A creative AI studio that allows users to generate content across multiple modalities - text, images, and audio. Users can generate text using Gemini or Claude, create images using DALL-E, transcribe audio using Whisper, and generate speech using text-to-speech models. The application showcases IBM's "Build Multimodal Generative AI Applications" certification and demonstrates integration of multiple AI services.

**Key Features:**
- **Text Generation:** Multiple LLM options (Gemini, Claude) for various text generation tasks
- **Image Generation:** DALL-E integration for AI image creation
- **Audio Processing:** Whisper for speech-to-text transcription
- **Text-to-Speech:** Audio generation from text
- **Multi-modal Pipelines:** Combines different AI models for complex creative workflows
- **GPU Computing:** Leverages GPU acceleration for faster inference

---

### 9. AI Business Intelligence Agent | [Live Demo](https://ai-bi-agent.streamlit.app) | [Code](https://github.com/anix-lynch/ai-bi-agent)
**Purpose:** Intelligent data analytics assistant that allows users to ask questions in natural language and receive automated data analysis, visualizations, and insights.

**What It Does:** A RAG-powered analytics assistant that connects to datasets and allows users to ask questions in plain English. The system uses ChromaDB for vector storage, LangChain for agent orchestration, and Gemini for natural language understanding. It automatically performs exploratory data analysis (EDA), statistical analysis, creates visualizations, and provides insights based on the data. Showcases IBM & Meta Coursera certifications in data analytics.

**Key Features:**
- **Natural Language Queries:** Ask questions about data in plain English
- **Automated EDA:** Automatically performs exploratory data analysis
- **RAG System:** Retrieval-Augmented Generation for context-aware responses
- **Vector Database:** ChromaDB for semantic search across data documentation
- **Statistical Analysis:** Uses SciPy for advanced statistical computations
- **Auto-Visualization:** Automatically creates appropriate charts and graphs
- **BI Dashboard:** Professional business intelligence interface

---

### 10. Financial Modeling Automation | [Live Demo](https://huggingface.co/spaces/anixlynch/financial-modeling-automation) | [Code](https://github.com/anix-lynch/financial-modeling-automation)
**Purpose:** PE/VC (Private Equity/Venture Capital) financial modeling platform that automates cap table analysis, fund economics, and Excel report generation.

**What It Does:** A financial modeling tool designed for venture capital and private equity professionals. The system automates cap table analysis from Seed to Series B rounds, calculates LP/GP (Limited Partner/General Partner) fund economics, and generates dynamic Excel spreadsheets with scenario modeling. Users can input funding rounds, equity percentages, and valuation changes to see how ownership dilutes across rounds and calculate returns for investors and founders.

**Key Features:**
- **Cap Table Analysis:** Tracks equity ownership from Seed through Series B funding rounds
- **LP/GP Fund Economics:** Calculates returns for limited partners and general partners
- **Excel Automation:** Uses openpyxl to generate professional Excel financial models
- **Scenario Modeling:** Compare multiple funding scenarios side-by-side
- **Dilution Tracking:** Visualizes how founder and investor ownership changes across rounds
- **Deployed on Hugging Face Spaces:** Accessible web application for financial professionals

---

### 11. Network Intelligence Map | [Live Demo](https://github.com/anix-lynch/silicon-beach-ai-jobs) | [Code](https://github.com/anix-lynch/silicon-beach-ai-jobs)
**Purpose:** Geospatial network analysis platform that maps and visualizes the Silicon Beach tech ecosystem, showing company relationships, commute patterns, and network connections.

**What It Does:** A knowledge graph analytics platform that analyzes and visualizes the Silicon Beach (Los Angeles) tech ecosystem. The system uses Snowflake Cortex AI for intelligent data processing, creates network graphs showing company relationships, visualizes commute patterns on interactive maps, and provides insights into the tech job market. Built with Snowflake for data warehousing, Streamlit for the interface, and Folium for interactive map visualizations.

**Key Features:**
- **Geospatial Intelligence:** Interactive maps showing company locations and commute patterns
- **Network Analysis:** Graph analytics showing relationships between companies and people
- **Snowflake Cortex AI:** Uses Snowflake's AI capabilities for intelligent data processing
- **Knowledge Graph:** Represents tech ecosystem as a graph for relationship analysis
- **Interactive Maps:** Folium-based maps with filtering and exploration capabilities
- **Data Engineering:** Full-stack data pipeline from data collection to visualization

---

### 12. Marketing Analytics Visualization | [Live Demo](https://marketing-analytics-etl.streamlit.app/) | [Code](https://github.com/anix-lynch/marketing-analytics-etl)
**Purpose:** Professional marketing analytics dashboard providing real-time KPIs, campaign performance tracking, and cross-platform attribution insights for marketing teams.

**What It Does:** A unified marketing data lake and analytics platform that aggregates marketing data from multiple channels (social media, email, web, paid ads) and provides real-time dashboards. The system uses DuckDB for fast analytical queries on Parquet files, enabling sub-second query performance on large datasets. The dashboard shows campaign performance, ROI analysis, cross-platform attribution, and predictive modeling for campaign optimization.

**Key Features:**
- **Unified Data Lake:** Aggregates marketing data from multiple platforms into a single source
- **Real-time KPIs:** Live dashboard showing key performance indicators
- **Cross-platform Attribution:** Tracks customer journey across multiple marketing channels
- **Campaign Performance Tracking:** Detailed analysis of marketing campaign effectiveness
- **Predictive Modeling:** ML models for predicting campaign ROI
- **Fast Analytics:** DuckDB enables sub-second queries on large Parquet datasets
- **Professional BI Dashboard:** ECharts and Plotly visualizations for executive reporting

---

## CERTIFICATIONS
IBM: Build Multimodal Generative AI Applications
