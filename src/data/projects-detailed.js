// src/data/projects-detailed.js
// One entry = one beautiful project page at /projects/[slug]
// Add { slug, title, ... } here → page auto-generates. That's it.

export const projects = [
  {
    slug: "ai-job-intelligence",
    title: "AI Job Intelligence",
    tagline: "Multi-agent job platform with resume-aware AI, ATS scoring, and commute analysis.",
    lane: "GenAI",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/ai-agent-job-intelligence-phase-2",
    live: "https://ai-agent-job-intelligence-phase-2-tr8fm4dzvgzjmpd2mo63a3.streamlit.app/",
    gif: "/ATS_phase2.gif",
    icon: "cpu",
    description: "A multi-agent job intelligence system that combines semantic vector search, ML-powered ATS scoring, and a LangChain ReAct agent to find and rank the best-fit roles for a specific resume. Built for the LA Silicon Beach market. Personalizes every search to your actual skills, salary targets, and commute tolerance — not just keywords.",
    highlight: "What if job search worked like a personal recruiter instead of a keyword filter? This is that.",
    stats: [
      { value: "93%", label: "Task Success Rate" },
      { value: "14", label: "Parallel MCP Tools" },
      { value: "96%+", label: "ATS Accuracy" },
      { value: "1,000+", label: "AI/ML Jobs" }
    ],
    stack: ["Python", "LangChain", "ChromaDB", "Streamlit", "FastAPI", "scikit-learn", "Sentence Transformers", "DuckDB", "DeepSeek", "Docker"],
    features: [
      { icon: "search", title: "Semantic Vector Search", desc: "SBERT sentence-transformer embeddings + ChromaDB. Finds roles by meaning, not keywords. Your resume becomes the query." },
      { icon: "target", title: "ATS Classifier", desc: "scikit-learn ML model trained on real posting data. Predicts pass rate with 96%+ accuracy and shows which keywords move the needle." },
      { icon: "bot", title: "ReAct Agent Orchestration", desc: "LangChain multi-agent with autonomous reasoning. Uses 14 parallel MCP tools to filter, rank, and compare jobs — no human loop." },
      { icon: "user", title: "Resume-Aware Personalization", desc: "Auto-loads resume.json. Every search pre-filled with your skills, target roles, and salary preference. One-click matching." },
      { icon: "map", title: "Commute-Aware Scoring", desc: "LA Silicon Beach geospatial focus. Commute distance is part of the ranking model — not filtered out after the fact." },
      { icon: "zap", title: "70× Cheaper Than GPT-4", desc: "DeepSeek as the reasoning backbone: $0.14/$0.28 per 1M tokens. Full agent intelligence at 1% of the typical LLM cost." }
    ],
    architecture: [
      { step: "01", label: "Resume Load", desc: "resume.json → resume_loader.py extracts skills, projects, salary targets" },
      { step: "02", label: "Vector Index", desc: "SBERT embeds 1,000+ postings → ChromaDB cosine similarity search" },
      { step: "03", label: "ATS Score", desc: "ML classifier predicts pass/fail for your specific resume vs each job" },
      { step: "04", label: "Agent Rank", desc: "LangChain ReAct agent orchestrates 14 tools → ranked shortlist with reasoning" }
    ],
    cost: "$0–2/month (DeepSeek API only). All infra on free tiers.",
    phase: "Phase 2 — adds personalized resume matching on top of Phase 1 job search engine."
  },

  {
    slug: "mocktailverse-bedrock",
    title: "MocktailVerse Bedrock",
    tagline: "Enterprise GenAI data platform powered by AWS Bedrock, RAG, and Vector Search.",
    lane: "GenAI",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/mocktailverse-bedrock",
    live: "https://dgco3hnxo94y8.cloudfront.net",
    gif: "/mocktailverse_bedrock.gif",
    icon: "layers",
    description: "Enterprise-grade GenAI data engineering platform using AWS Bedrock for LLM inference, pgvector for semantic search, and a full RAG pipeline over a cocktail knowledge base. Demonstrates the full AWS GenAI stack from ingestion to retrieval to generation.",
    highlight: "The full AWS Bedrock RAG stack — embeddings, vector store, retrieval, generation — in one production-ready platform.",
    stats: [
      { value: "AWS", label: "Bedrock LLMs" },
      { value: "RAG", label: "Retrieval Pipeline" },
      { value: "pgvector", label: "Vector Store" },
      { value: "E2E", label: "GenAI Platform" }
    ],
    stack: ["Python", "AWS Bedrock", "pgvector", "RAG", "PostgreSQL", "LangChain", "boto3", "Docker", "FastAPI"],
    features: [
      { icon: "database", title: "pgvector Store", desc: "PostgreSQL + pgvector for production semantic search. No managed vector DB required." },
      { icon: "cpu", title: "Bedrock LLM", desc: "Claude and Titan models via AWS Bedrock API. Swap models without changing application code." },
      { icon: "layers", title: "RAG Pipeline", desc: "Full retrieval-augmented generation: chunk → embed → store → retrieve → generate." },
      { icon: "zap", title: "Enterprise Stack", desc: "Production patterns: retry logic, observability hooks, cost tracking per query." }
    ],
    architecture: [
      { step: "01", label: "Ingest", desc: "Cocktail dataset → chunked documents → Bedrock embeddings" },
      { step: "02", label: "Store", desc: "Vectors → pgvector PostgreSQL with cosine similarity index" },
      { step: "03", label: "Retrieve", desc: "User query → embed → top-k semantic search" },
      { step: "04", label: "Generate", desc: "Retrieved context + query → Bedrock Claude → grounded response" }
    ],
    cost: "AWS Bedrock pay-per-token. pgvector runs on any Postgres instance.",
    phase: null
  },

  {
    slug: "n8n-automation-kit",
    title: "n8n Upwork Automation Kit",
    tagline: "3 production-ready n8n workflows — email to Airtable, lead enrichment, RE CRM with Claude AI.",
    lane: "n8n",
    laneColor: "#f5c842",
    status: "Production",
    github: "https://github.com/anix-lynch/n8n-upwork-automation-kit",
    live: null,
    gif: null,
    icon: "workflow",
    description: "Three production-grade n8n automation workflows built for Upwork clients. Connects Gmail, Airtable, Hunter.io, and Claude AI into hands-free pipelines. Each workflow is deployable from JSON — import, configure credentials, run.",
    highlight: "Production n8n JSON you can import, configure, and run in 10 minutes. Not demos — actual client deliverables.",
    stats: [
      { value: "3", label: "Production Workflows" },
      { value: "n8n", label: "Orchestration" },
      { value: "Claude", label: "AI Enrichment" },
      { value: "0", label: "Manual Steps" }
    ],
    stack: ["n8n", "Claude AI", "Airtable", "Gmail API", "Hunter.io", "Apollo", "Webhooks", "JSON"],
    features: [
      { icon: "mail", title: "Email → Airtable", desc: "Gmail trigger → parse → Airtable record. Zero manual data entry for inbound leads." },
      { icon: "user", title: "Lead Enrichment", desc: "Apollo + Hunter.io verification pipeline. Enriches contacts before they hit your CRM." },
      { icon: "building", title: "RE CRM Notifier", desc: "Real estate CRM with Claude AI for property description generation and automated follow-up routing." }
    ],
    architecture: [
      { step: "01", label: "Trigger", desc: "Gmail / Webhook / Schedule → n8n workflow starts" },
      { step: "02", label: "Enrich", desc: "Apollo + Hunter.io APIs pull company and contact data" },
      { step: "03", label: "AI Layer", desc: "Claude AI personalizes messages or generates descriptions" },
      { step: "04", label: "Store + Notify", desc: "Airtable record created → Slack/email notification sent" }
    ],
    cost: "$0 (n8n self-hosted). Claude API minimal per-workflow cost.",
    phase: null
  },

  {
    slug: "churn-ml-pipeline",
    title: "Churn ML Pipeline",
    tagline: "End-to-end customer churn prediction with FastAPI serving and Streamlit dashboard.",
    lane: "ML",
    laneColor: "#a8d8a8",
    status: "Production",
    github: "https://github.com/anix-lynch/churn-ml-pipeline",
    live: "https://churn-ml-pipeline-mwvbz4fzdvmd8yvjvz9jak.streamlit.app",
    gif: "/churn-ml-pipeline.gif",
    icon: "bar-chart",
    description: "Full ML lifecycle for customer churn prediction: feature engineering, model training with time-aware splitting, FastAPI model serving, and a Streamlit monitoring dashboard. Production patterns throughout — no notebook-only experiments.",
    highlight: "The ML pipeline gap most tutorials skip: training-serving parity, time-aware splits, drift detection, production API.",
    stats: [
      { value: "E2E", label: "ML Lifecycle" },
      { value: "FastAPI", label: "Model Serving" },
      { value: "Streamlit", label: "Monitoring UI" },
      { value: "RFM", label: "Feature Engineering" }
    ],
    stack: ["Python", "scikit-learn", "FastAPI", "Streamlit", "Pandas", "DuckDB", "Docker", "Pydantic"],
    features: [
      { icon: "layers", title: "Feature Engineering", desc: "RFM analysis, time-aware train/test splits, statistical feature selection." },
      { icon: "cpu", title: "Model Training", desc: "scikit-learn pipeline with hyperparameter tuning, cross-validation, SHAP explainability." },
      { icon: "zap", title: "FastAPI Serving", desc: "REST API with Pydantic validation, async endpoints, health checks, versioned models." },
      { icon: "bar-chart", title: "Drift Detection", desc: "Streamlit dashboard monitors prediction distribution shifts and feature drift in production." }
    ],
    architecture: [
      { step: "01", label: "Feature Store", desc: "Raw events → RFM features → DuckDB feature store" },
      { step: "02", label: "Train", desc: "Time-aware split → scikit-learn pipeline → SHAP explainability" },
      { step: "03", label: "Serve", desc: "FastAPI REST endpoint with Pydantic validation + versioned model registry" },
      { step: "04", label: "Monitor", desc: "Streamlit dashboard → drift detection → retraining trigger" }
    ],
    cost: "Free to run locally or on Streamlit Cloud.",
    phase: null
  },

  {
    slug: "healthcare-dbt-bigquery",
    title: "Healthcare dbt BigQuery",
    tagline: "Clinical data warehouse: 55K patient records → dbt staging + 3 analytics marts on BigQuery.",
    lane: "Data Eng",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-dbt-bigquery",
    live: null,
    gif: "/dbt_preview.png",
    icon: "database",
    description: "Production clinical data warehouse using dbt + BigQuery. Ingests 55,000 patient records through staging models into three analytics marts: condition KPIs, billing analysis, and monthly trend reporting. Full dbt docs, tests, and lineage graph included.",
    highlight: "55K patient records, 3 analytics marts, full dbt lineage. The data warehouse pattern healthcare teams actually need.",
    stats: [
      { value: "55K", label: "Patient Records" },
      { value: "3", label: "Analytics Marts" },
      { value: "dbt", label: "Transformation" },
      { value: "BigQuery", label: "Warehouse" }
    ],
    stack: ["dbt", "BigQuery", "SQL", "Python", "GCP", "dbt-tests", "Jinja", "YAML"],
    features: [
      { icon: "layers", title: "Staging Models", desc: "Raw clinical data → clean typed staging layer with dbt source tests and freshness checks." },
      { icon: "bar-chart", title: "Condition KPIs", desc: "Condition prevalence, readmission rates, LOS trends — analytics mart ready for BI tools." },
      { icon: "database", title: "Billing Analysis", desc: "Claim amounts, denial patterns, payer mix analysis across 55K patient encounters." },
      { icon: "calendar", title: "Monthly Trends", desc: "Time-series mart tracking month-over-month clinical and financial metrics." }
    ],
    architecture: [
      { step: "01", label: "Source", desc: "Raw clinical CSVs → BigQuery raw dataset with dbt source definitions" },
      { step: "02", label: "Stage", desc: "dbt staging models: type casting, null handling, PII deidentification" },
      { step: "03", label: "Marts", desc: "3 analytics marts: condition KPIs, billing, monthly trends" },
      { step: "04", label: "Docs", desc: "dbt docs site with full lineage graph, test coverage, column descriptions" }
    ],
    cost: "BigQuery free tier covers dev. GCP storage minimal for 55K records.",
    phase: null
  },

  {
    slug: "vc-dealflow-automation",
    title: "VC Dealflow Automation",
    tagline: "End-to-end VC deal flow: Apollo enrichment → Hunter verify → n8n → Claude → Airtable CRM.",
    lane: "n8n",
    laneColor: "#f5c842",
    status: "Production",
    github: "https://github.com/anix-lynch/vc-dealflow-automation",
    live: null,
    gif: null,
    icon: "trending-up",
    description: "Full VC deal flow automation pipeline that takes a raw company name and runs it through Apollo enrichment, Hunter.io email verification, n8n orchestration, Claude AI personalization, and into an Airtable CRM with outreach drafted and ready to send.",
    highlight: "From company name to personalized outreach in one n8n workflow. The full VC ops stack automated.",
    stats: [
      { value: "E2E", label: "Deal Flow Pipeline" },
      { value: "Apollo", label: "+ Hunter Enrichment" },
      { value: "Claude", label: "Personalization" },
      { value: "0", label: "Manual Steps" }
    ],
    stack: ["n8n", "Apollo API", "Hunter.io", "Claude AI", "Airtable", "Python", "Webhooks"],
    features: [
      { icon: "search", title: "Apollo Enrichment", desc: "Company → firmographics, funding stage, headcount, key contacts pulled automatically." },
      { icon: "mail", title: "Hunter Verification", desc: "Email addresses verified before any outreach. No bounces, no spam flags." },
      { icon: "bot", title: "Claude Personalization", desc: "Claude reads the company profile and drafts personalized outreach for each contact." },
      { icon: "database", title: "Airtable CRM", desc: "All deal data lands in Airtable: company, contacts, enrichment, outreach status, follow-up dates." }
    ],
    architecture: [
      { step: "01", label: "Trigger", desc: "Company name → n8n webhook or manual trigger" },
      { step: "02", label: "Enrich", desc: "Apollo API → firmographics, contacts, funding data" },
      { step: "03", label: "Verify", desc: "Hunter.io → email verification → deliverability score" },
      { step: "04", label: "Draft + Log", desc: "Claude → personalized outreach → Airtable CRM record" }
    ],
    cost: "Apollo free tier + Hunter.io free tier covers initial pipeline. Claude API minimal.",
    phase: null
  },

  {
    slug: "silicon-beach-ai-jobs",
    title: "Silicon Beach AI Jobs",
    tagline: "AI-powered job search with Snowflake Cortex + Vector Search, migrated to DuckDB.",
    lane: "Data Eng",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/silicon-beach-ai-jobs",
    live: null,
    gif: "/silicon-beach.gif",
    icon: "search",
    description: "ML-powered job search engine using Snowflake Cortex for LLM inference and Cortex Search for vector similarity, with a clean DuckDB migration path for local/portable deployment. Demonstrates the full Snowflake ML stack with a real-world dataset of LA AI/ML jobs.",
    highlight: "Snowflake Cortex end-to-end — LLM inference, vector search, and ML functions — with a DuckDB fallback for portability.",
    stats: [
      { value: "Cortex", label: "Snowflake LLM" },
      { value: "Vector", label: "Semantic Search" },
      { value: "DuckDB", label: "Local Migration" },
      { value: "LA", label: "Silicon Beach Focus" }
    ],
    stack: ["Snowflake Cortex", "DuckDB", "Python", "Streamlit", "SQL", "Vector Search", "Pandas"],
    features: [
      { icon: "cpu", title: "Snowflake Cortex", desc: "LLM inference and embedding generation natively in Snowflake — no external API calls." },
      { icon: "search", title: "Cortex Search", desc: "Vector similarity search over job postings using Snowflake's managed vector store." },
      { icon: "database", title: "DuckDB Migration", desc: "Full portability layer — same queries run locally in DuckDB without Snowflake credits." },
      { icon: "map", title: "LA Market Focus", desc: "Curated AI/ML job dataset from LA Silicon Beach companies. Real data, real market." }
    ],
    architecture: [
      { step: "01", label: "Ingest", desc: "LA AI/ML job dataset → Snowflake staging table" },
      { step: "02", label: "Embed", desc: "Cortex EMBED_TEXT_768 → vector column on each job posting" },
      { step: "03", label: "Search", desc: "User query → Cortex Search → top-k semantic results" },
      { step: "04", label: "Local", desc: "DuckDB migration for zero-cost local development and demos" }
    ],
    cost: "Snowflake free trial covers development. DuckDB path is free indefinitely.",
    phase: null
  },

  {
    slug: "realtime-fraud-detection",
    title: "Realtime Fraud Detection",
    tagline: "Real-time feature engineering for fraud detection with Streamlit monitoring UI.",
    lane: "ML",
    laneColor: "#a8d8a8",
    status: "Production",
    github: "https://github.com/anix-lynch/realtime-fraud-detection",
    live: "https://realtime-fraud-detection-x4uqwkrfnk8g2p567i596x.streamlit.app",
    gif: "/realtime-fraud-detection.gif",
    icon: "shield",
    description: "Real-time feature engineering pipeline for fraud detection, with a Streamlit dashboard for monitoring fraud scores and anomaly patterns. Demonstrates streaming feature computation, point-in-time correctness, and production fraud scoring patterns.",
    highlight: "Real-time feature engineering done right: point-in-time correctness, no data leakage, streaming patterns.",
    stats: [
      { value: "Real-time", label: "Feature Engineering" },
      { value: "Streamlit", label: "Monitoring UI" },
      { value: "Anomaly", label: "Detection" },
      { value: "0", label: "Data Leakage" }
    ],
    stack: ["Python", "Streamlit", "scikit-learn", "Pandas", "FastAPI", "DuckDB", "Plotly"],
    features: [
      { icon: "zap", title: "Streaming Features", desc: "Real-time feature computation with point-in-time correctness. No future data leakage into training." },
      { icon: "shield", title: "Fraud Scoring", desc: "ML model scores each transaction in real-time with interpretable feature contributions." },
      { icon: "bar-chart", title: "Anomaly Patterns", desc: "Streamlit dashboard visualizes fraud pattern clusters, score distributions, and detection rates." },
      { icon: "cpu", title: "FastAPI Serving", desc: "REST endpoint for real-time scoring with sub-100ms latency on standard hardware." }
    ],
    architecture: [
      { step: "01", label: "Stream", desc: "Transaction events → real-time feature computation engine" },
      { step: "02", label: "Features", desc: "Point-in-time correct features: velocity, pattern, behavioral signals" },
      { step: "03", label: "Score", desc: "FastAPI → ML model → fraud score + feature importance" },
      { step: "04", label: "Monitor", desc: "Streamlit dashboard → score drift, anomaly clusters, detection rate" }
    ],
    cost: "Free to run locally.",
    phase: null
  },

  {
    slug: "cocktailverse",
    title: "CocktailVerse",
    tagline: "GCP BigQuery ETL pipeline with Cloud Run deployment and TheCocktailDB as the data source.",
    lane: "Data Eng",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/cocktailverse",
    live: "https://cocktailverse-835005185815.us-central1.run.app",
    gif: "/cocktailverse.gif",
    icon: "database",
    description: "Production GCP data engineering pipeline using BigQuery as the warehouse and Cloud Run for containerized ETL execution. Pulls data from TheCocktailDB API, transforms it through a layered BigQuery schema, and deploys via Cloud Run with Terraform infrastructure.",
    highlight: "GCP production stack: Cloud Run + BigQuery + Terraform + CI/CD. Real infra, not a local notebook.",
    stats: [
      { value: "GCP", label: "Cloud Platform" },
      { value: "BigQuery", label: "Data Warehouse" },
      { value: "Cloud Run", label: "ETL Execution" },
      { value: "Terraform", label: "IaC" }
    ],
    stack: ["Python", "GCP", "BigQuery", "Cloud Run", "Terraform", "Docker", "Cloud Storage", "dbt"],
    features: [
      { icon: "layers", title: "Layered Schema", desc: "Raw → staging → marts BigQuery schema. dbt transformations with full lineage." },
      { icon: "cpu", title: "Cloud Run ETL", desc: "Containerized Python ETL jobs run on Cloud Run — serverless, scalable, zero idle cost." },
      { icon: "database", title: "BigQuery Warehouse", desc: "Partitioned and clustered BigQuery tables for cost-efficient analytics queries." },
      { icon: "code", title: "Terraform IaC", desc: "All GCP resources defined in Terraform. Reproducible infra from scratch in minutes." }
    ],
    architecture: [
      { step: "01", label: "Extract", desc: "TheCocktailDB API → Cloud Run job → Cloud Storage landing zone" },
      { step: "02", label: "Load", desc: "GCS → BigQuery raw tables with schema enforcement" },
      { step: "03", label: "Transform", desc: "dbt models: staging → intermediate → marts" },
      { step: "04", label: "Deploy", desc: "Terraform provisions all GCP resources. Cloud Run handles execution." }
    ],
    cost: "GCP free tier for dev. Cloud Run + BigQuery costs scale to $0 at low volume.",
    phase: null
  },

  {
    slug: "ai-bi-agent",
    title: "AI BI Agent",
    tagline: "BI automation with RAG, ChromaDB, and natural language queries over business data.",
    lane: "GenAI",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/ai-bi-agent",
    live: "https://ai-bi-agent.streamlit.app",
    gif: "/bi_agent.gif",
    icon: "bar-chart",
    description: "Business intelligence agent that lets you query your data in plain English using RAG over a ChromaDB vector store. Ask questions like 'which products drove Q3 growth?' and get SQL-backed answers with chart generation — no BI tool required.",
    highlight: "Skip the BI tool. Ask your data questions in English. Get SQL-backed answers with charts.",
    stats: [
      { value: "NL", label: "Natural Language" },
      { value: "RAG", label: "Retrieval" },
      { value: "ChromaDB", label: "Vector Store" },
      { value: "Auto", label: "Chart Gen" }
    ],
    stack: ["Python", "LangChain", "ChromaDB", "Streamlit", "Pandas", "DuckDB", "Plotly", "OpenAI"],
    features: [
      { icon: "search", title: "NL to SQL", desc: "Natural language query → RAG retrieval of schema context → SQL generation → execution." },
      { icon: "database", title: "ChromaDB Context", desc: "Business glossary, schema metadata, and query examples stored in ChromaDB for retrieval." },
      { icon: "bar-chart", title: "Auto Chart Gen", desc: "Results automatically visualized with Plotly. Picks chart type based on result shape." },
      { icon: "cpu", title: "LangChain Agent", desc: "ReAct agent handles multi-step queries: join, filter, aggregate — all from one natural language request." }
    ],
    architecture: [
      { step: "01", label: "Query", desc: "User question → LangChain agent + ChromaDB schema retrieval" },
      { step: "02", label: "Generate", desc: "LLM generates SQL using retrieved schema context" },
      { step: "03", label: "Execute", desc: "DuckDB executes SQL → structured result set" },
      { step: "04", label: "Visualize", desc: "Plotly auto-generates chart → Streamlit renders answer" }
    ],
    cost: "OpenAI API minimal per query. All other components free.",
    phase: null
  },

  {
    slug: "kpi-evidence",
    title: "KPI Evidence Store",
    tagline: "Hallucination rate, latency, task success and data quality dashboards for 13 production AI systems.",
    lane: "GenAI",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/kpi-evidence",
    live: null,
    gif: null,
    icon: "activity",
    description: "Centralized KPI evidence store tracking production metrics across 13 AI systems: hallucination rates, p50/p95 latency, task success rates, and data quality scores. Designed as a credibility layer — every claim in a resume bullet has a source record here.",
    highlight: "Every metric is sourced. This repo exists so 'I improved latency by 40%' has an audit trail.",
    stats: [
      { value: "13", label: "AI Systems Tracked" },
      { value: "Halluc.", label: "Rate Monitoring" },
      { value: "p95", label: "Latency Benchmarks" },
      { value: "Audit", label: "Trail for Claims" }
    ],
    stack: ["Python", "DuckDB", "Pandas", "Evidence.dev", "SQL", "Markdown", "GitHub Actions"],
    features: [
      { icon: "activity", title: "Hallucination Tracking", desc: "Per-system hallucination rates measured with Ragas + manual spot checks. Trend over time." },
      { icon: "zap", title: "Latency Benchmarks", desc: "p50/p95/p99 latency for each AI system. Before/after for every optimization." },
      { icon: "target", title: "Task Success Rates", desc: "Agent task completion rates, retry counts, fallback triggers per system." },
      { icon: "database", title: "Data Quality Scores", desc: "Great Expectations + custom validators tracking data quality across pipeline stages." }
    ],
    architecture: [
      { step: "01", label: "Capture", desc: "OpenTelemetry spans + custom metrics → DuckDB evidence store" },
      { step: "02", label: "Validate", desc: "Great Expectations assertions run on each metric batch" },
      { step: "03", label: "Report", desc: "Evidence.dev dashboard renders KPI trends from SQL queries" },
      { step: "04", label: "Audit", desc: "Each resume bullet links to a specific KPI record in this store" }
    ],
    cost: "Free. DuckDB + Evidence.dev + GitHub Actions all free tier.",
    phase: null
  },

  {
    slug: "pied-piper-legal",
    title: "Pied Piper Legal Simulator",
    tagline: "LLM-powered legal document simulator inspired by Silicon Valley's Pied Piper compression drama.",
    lane: "GenAI",
    laneColor: "#7bb3d9",
    status: "Experimental",
    github: "https://github.com/anix-lynch/pied-piper-legal-simulator",
    live: "https://public-ndx6vbur4-anix-lynchs-projects.vercel.app",
    gif: "/piedpiper.gif",
    icon: "file-text",
    description: "A GenAI simulator that generates legal documents, term sheets, and IP disputes in the style of the Silicon Valley TV show's Pied Piper storyline. Uses LLMs to draft fictional but structurally accurate VC term sheets, NDAs, and court filings for educational purposes.",
    highlight: "What if LLMs could simulate an entire startup legal drama? This tests the boundaries of structured legal document generation.",
    stats: [
      { value: "LLM", label: "Doc Generation" },
      { value: "VC", label: "Term Sheets" },
      { value: "NDA", label: "Legal Templates" },
      { value: "IP", label: "Dispute Simulation" }
    ],
    stack: ["Python", "LangChain", "OpenAI", "Streamlit", "Jinja2", "Pydantic"],
    features: [
      { icon: "file-text", title: "Term Sheet Generator", desc: "Structured VC term sheets with configurable valuation, liquidation prefs, and pro-rata rights." },
      { icon: "shield", title: "NDA Simulator", desc: "Mutual and one-way NDAs with jurisdiction-aware clause selection." },
      { icon: "cpu", title: "IP Dispute Engine", desc: "Simulates IP dispute scenarios with competing claims, prior art arguments, and settlement terms." },
      { icon: "bot", title: "LLM Grounding", desc: "All generated docs grounded with structured schemas — reduces hallucination in legal clause generation." }
    ],
    architecture: [
      { step: "01", label: "Template", desc: "Jinja2 legal templates define document structure and required fields" },
      { step: "02", label: "Generate", desc: "LLM fills clauses within schema constraints — structured output enforced" },
      { step: "03", label: "Validate", desc: "Pydantic models validate each generated document against expected structure" },
      { step: "04", label: "Export", desc: "Streamlit UI → download as formatted Markdown or plain text" }
    ],
    cost: "OpenAI API minimal per document. Free otherwise.",
    phase: null
  },

  {
    slug: "healthcare-analytics-portfolio",
    title: "Healthcare Analytics Portfolio",
    tagline: "Full-stack healthcare analytics: FastAPI, dbt-Fabric, semantic model, MLflow — interview-grade artifacts.",
    lane: "Data Eng",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-analytics-portfolio",
    live: null,
    gif: "/healthcare-da.png",
    icon: "heart",
    description: "Comprehensive healthcare analytics portfolio demonstrating the full modern data stack for healthcare: FastAPI data services, dbt models on Microsoft Fabric, a semantic model layer, and MLflow for experiment tracking. Built to interview-ready production standard.",
    highlight: "Every layer of the modern healthcare data stack — API, transformation, semantic model, ML tracking — in one portfolio.",
    stats: [
      { value: "FastAPI", label: "Data Services" },
      { value: "dbt", label: "Fabric Models" },
      { value: "MLflow", label: "Experiment Tracking" },
      { value: "Semantic", label: "Model Layer" }
    ],
    stack: ["Python", "FastAPI", "dbt", "Microsoft Fabric", "MLflow", "Pydantic", "SQL", "Azure"],
    features: [
      { icon: "zap", title: "FastAPI Services", desc: "REST APIs for clinical data access with Pydantic validation and OpenAPI docs." },
      { icon: "layers", title: "dbt on Fabric", desc: "dbt transformation models running on Microsoft Fabric — modern lakehouse pattern." },
      { icon: "cpu", title: "Semantic Model", desc: "Business-logic layer decoupling BI queries from raw SQL. Self-service analytics ready." },
      { icon: "activity", title: "MLflow Tracking", desc: "Experiment tracking for clinical ML models: params, metrics, artifacts, model registry." }
    ],
    architecture: [
      { step: "01", label: "Ingest", desc: "Clinical data → Microsoft Fabric lakehouse via Python pipelines" },
      { step: "02", label: "Transform", desc: "dbt models on Fabric: staging → marts → semantic layer" },
      { step: "03", label: "Serve", desc: "FastAPI services expose semantic model to downstream consumers" },
      { step: "04", label: "Track", desc: "MLflow logs all model experiments, metrics, and artifacts" }
    ],
    cost: "Microsoft Fabric trial + MLflow open source.",
    phase: null
  },

  {
    slug: "financial-modeling-automation",
    title: "Financial Modeling Automation",
    tagline: "PE/VC financial modeling automation — VC cap tables + LP/GP fund economics with Python.",
    lane: "Data Eng",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/financial-modeling-automation",
    live: "https://huggingface.co/spaces/anixlynch/financial-modeling-automation",
    gif: "/excel-automation.gif",
    icon: "trending-up",
    description: "Python automation for PE/VC financial modeling: VC cap table generation, LP/GP fund economics calculations, carried interest waterfalls, and scenario analysis. Replaces manual Excel modeling with reproducible, version-controlled Python that runs in seconds.",
    highlight: "VC cap tables and fund economics in Python. Reproducible, version-controlled, and 100× faster than Excel.",
    stats: [
      { value: "VC", label: "Cap Tables" },
      { value: "LP/GP", label: "Fund Economics" },
      { value: "Carry", label: "Waterfall Calc" },
      { value: "Python", label: "Not Excel" }
    ],
    stack: ["Python", "Pandas", "NumPy", "openpyxl", "Plotly", "Jupyter", "DuckDB"],
    features: [
      { icon: "trending-up", title: "Cap Table Engine", desc: "Full VC cap table: pre/post-money, pro-rata, anti-dilution, option pool shuffle — all automated." },
      { icon: "database", title: "Fund Economics", desc: "LP/GP economics: management fees, carried interest, hurdle rates, preferred return calculations." },
      { icon: "layers", title: "Waterfall Model", desc: "Carry distribution waterfall for multiple fund scenarios with European vs American waterfall options." },
      { icon: "bar-chart", title: "Scenario Analysis", desc: "Run 100+ exit scenarios in seconds. Plotly visualizations for LP reports and IC presentations." }
    ],
    architecture: [
      { step: "01", label: "Input", desc: "Fund terms + portfolio companies → structured Python dataclasses" },
      { step: "02", label: "Model", desc: "Cap table engine + economics calculator → scenario matrix" },
      { step: "03", label: "Waterfall", desc: "Carry distribution engine with configurable waterfall structure" },
      { step: "04", label: "Report", desc: "Plotly charts + openpyxl Excel export for LP/IC presentations" }
    ],
    cost: "Free. Pure Python.",
    phase: null
  },

  {
    slug: "marketing-analytics-etl",
    title: "Marketing Analytics ETL",
    tagline: "Marketing analytics dashboard with real-time KPIs, campaign tracking, and cross-platform attribution.",
    lane: "Data Eng",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/marketing-analytics-etl",
    live: "https://marketing-analytics-etl.streamlit.app/",
    gif: "/marketing_etl.gif",
    icon: "bar-chart",
    description: "Professional marketing analytics ETL pipeline with a live Streamlit dashboard. Ingests TheCocktailDB data as a proxy for marketing events, transforms via DuckDB, and renders KPIs, campaign performance, and cross-platform attribution in an ECharts-powered UI.",
    highlight: "The only project in this portfolio with a public live demo. Click the button.",
    stats: [
      { value: "Live", label: "Public Demo" },
      { value: "ECharts", label: "Visualizations" },
      { value: "DuckDB", label: "Analytics Engine" },
      { value: "Real-time", label: "KPI Dashboard" }
    ],
    stack: ["Python", "Streamlit", "ECharts", "Pandas", "DuckDB", "ETL"],
    features: [
      { icon: "zap", title: "Live Demo", desc: "Publicly deployed on Streamlit Cloud. See the full dashboard without any setup." },
      { icon: "bar-chart", title: "ECharts Viz", desc: "Apache ECharts for interactive charts — funnel, bar, line, scatter, all responsive." },
      { icon: "database", title: "DuckDB Analytics", desc: "In-process analytics engine. Sub-second aggregations over marketing event tables." },
      { icon: "layers", title: "Attribution Model", desc: "First-touch, last-touch, and linear attribution models computed in DuckDB SQL." }
    ],
    architecture: [
      { step: "01", label: "Extract", desc: "TheCocktailDB API → pandas raw DataFrames" },
      { step: "02", label: "Transform", desc: "DuckDB SQL → KPI aggregations, attribution calculations" },
      { step: "03", label: "Load", desc: "In-memory DuckDB → Streamlit session state" },
      { step: "04", label: "Visualize", desc: "ECharts components render live, interactive marketing dashboard" }
    ],
    cost: "Free. Streamlit Cloud free tier.",
    phase: null
  }
];
