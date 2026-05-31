// src/data/projects-detailed.js
// One entry = one beautiful project page at /projects/[slug]
// Add { slug, title, ... } here → page auto-generates. That's it.

export const projects = [
  // ── NORTHSTAR ──────────────────────────────────────────────
  {
    slug: "healthcare-ai-platform-signals",
    title: "Healthcare AI Evidence Engine",
    tagline: "Ask a healthcare question. It finds the records, cites the proof, and gives an answer you can check.",
    lane: "AI Platform",
    tags: ["AI Platform", "Cloud"],
    cloud: "Vertex",
    laneColor: "#1e6b38",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-signal-platform",
    live: "https://signal-console-819957310168.us-west1.run.app",
    wandb: "https://wandb.ai/alynch-zeroshot/healthcare-l15-signals",
    gif: "/signal-console.png",
    icon: "activity",
    description: "Most AI demos answer first and ask you to trust them. This one does the safer thing: it finds relevant healthcare records, shows the supporting evidence, cites the sources, protects sensitive data, then answers. A release gate checks the behavior before changes go live, so the demo is not just fast — it is traceable.",
    highlight: "Before: question -> AI answer -> trust me. After: question -> evidence -> sources -> answer.",
    stats: [
      { value: "⚡ 5 ms", label: "Near-instant answers" },
      { value: "🛡️ 100%", label: "Citation validity" },
      { value: "🧪 20", label: "Healthcare test cases" },
      { value: "📚 497", label: "Medical records indexed" }
    ],
    stack: ["Python", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "scikit-learn (K-Means)", "NumPy", "Weights & Biases", "Langfuse", "Cloud Run", "Docker"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Trust me AI",
        flow: ["Question", "AI answer", "\"trust me\""],
        problems: [
          "Where did this answer come from?",
          "Can we trust it?",
          "Can we prove it?",
          "What if the next release breaks it?"
        ]
      },
      after: {
        title: "After",
        badge: "Evidence-first AI",
        flow: ["Question", "Evidence", "Sources", "Answer"],
        built: [
          "Retrieves relevant records",
          "Cites supporting evidence",
          "Protects sensitive data",
          "Blocks bad releases"
        ]
      }
    },
    features: [
      { icon: "search", title: "Retrieves relevant records", desc: "Searches the indexed medical records first, so the answer starts from evidence instead of model memory." },
      { icon: "file-text", title: "Cites supporting evidence", desc: "Every answer points back to the records it used. No floating claims, no mystery source." },
      { icon: "shield", title: "Protects sensitive data", desc: "Sensitive patient details are masked before the answer flow runs." },
      { icon: "activity", title: "Blocks bad releases", desc: "Healthcare test cases act as a release gate. If citation quality slips, the change should not ship." }
    ],
    architecture: [
      { step: "01", label: "Question", desc: "A clinician asks something practical, like whether a pattern has appeared before." },
      { step: "02", label: "Evidence", desc: "The system retrieves the most relevant medical records before it answers." },
      { step: "03", label: "Sources", desc: "The answer includes source references so a human can check the reasoning." },
      { step: "04", label: "Answer", desc: "The response is fast, grounded, and test-gated before release." }
    ],
    cost: "$0 at portfolio traffic — Cloud Run scales to zero, Gemini draws the GCP GenAI credit.",
    phase: "Built as a trust-first healthcare AI demo: evidence before answer, citations before confidence."
  },

  {
    slug: "healthcare-genai-engineer",
    title: "Healthcare GenAI Engineer",
    tagline: "Healthcare AI that shows its work instead of asking for trust.",
    lane: "GenAI",
    tags: ["GenAI", "Cloud"],
    cloud: "Vertex",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-genai-engineer",
    live: "https://healthcare-genai-2ihyeqmb6q-uw.a.run.app",
    gif: "/healthcare-genai-engineer.gif",
    icon: "shield",
    description: "Ask a clinical question and it finds the right medical records first, then answers — citing every source it used. Patient information is masked before anything is processed, and a test gate blocks any release that gets less accurate. The point is trust: you can see exactly where each answer came from, not just take its word for it.",
    highlight: "Ask \"has this happened before?\" — instead of a vague \"probably…\", it pulls the matching records, shows the cases, and cites each source.",
    stats: [
      { value: "⚡ 5 ms", label: "Fast response" },
      { value: "🛡️ 100%", label: "Cited answers" },
      { value: "🧪 20", label: "Healthcare test cases" },
      { value: "📚 497", label: "Medical records indexed" }
    ],
    stack: ["Python", "FastAPI", "BM25", "Sentence Transformers", "RRF", "Anthropic", "OpenAI", "Docker", "Pydantic", "pytest", "GitHub Actions"],
    features: [
      { icon: "search", title: "Finds the evidence", desc: "Searches the medical records and pulls the cases most relevant to the question — before it answers anything." },
      { icon: "shield", title: "Protects patient info", desc: "Masks sensitive details (social security, phone, email, card, medical record number, date of birth) before anything is processed." },
      { icon: "file-text", title: "Cites every source", desc: "Each answer points back to the exact records it used. No unsourced claims, no guessing." },
      { icon: "activity", title: "Catches quality drops", desc: "Every release is tested against a set of healthcare cases. If accuracy slips, the release is blocked before it reaches production." }
    ],
    architecture: [
      { step: "01", label: "Medical records", desc: "Starts from the indexed patient records — not the model's memory." },
      { step: "02", label: "Relevant cases", desc: "Finds the records that actually match the question." },
      { step: "03", label: "Source citations", desc: "Attaches the exact records it used, so every claim is traceable." },
      { step: "04", label: "Answer", desc: "Returns a grounded answer a clinician can check and trust." }
    ],
    cost: "Template path = $0 (zero LLM calls). LLM path = pay-per-token via Anthropic or OpenAI. Service runs in-memory; ~$1–2/month serverless when deployed.",
    phase: "Phase 1–6 audit trail in ROADMAP.md — each phase has the commit hash that shipped it."
  },

  {
    slug: "mocktailverse-bedrock",
    title: "MocktailVerse Bedrock",
    tagline: "Enterprise GenAI data platform powered by AWS Bedrock, RAG, and Vector Search.",
    lane: "GenAI",
    tags: ["GenAI", "Cloud"],
    cloud: "AWS",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/mocktailverse-bedrock",
    live: "https://dgco3hhxo94y8.cloudfront.net",
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
    slug: "healthcare-analytics-fabric",
    title: "Healthcare Analytics on Microsoft Fabric",
    tagline: "FastAPI + dbt + Fabric lakehouse + TMDL semantic model + MLflow — every claim maps to a file.",
    lane: "Data Eng",
    tags: ["Data Eng", "Cloud", "AI Platform"],
    cloud: "Azure",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-da",
    live: null,
    gif: "/healthcare-fabric-proof.png",
    icon: "layers",
    description: "End-to-end healthcare analytics on Microsoft Fabric: synthetic 55.5k encounters, FastAPI read layer, dbt star schema, Power BI semantic model as TMDL in git, Fabric lakehouse validation, and MLflow-tracked XGBoost baseline. Every headline claim maps to a file in the repo.",
    highlight: "The Microsoft Fabric + Power BI story recruiters ask for — with dbt and API layers in the same public showroom repo.",
    stats: [
      { value: "55.5K", label: "Encounters" },
      { value: "11", label: "API Routes" },
      { value: "TMDL", label: "Semantic Model" },
      { value: "Fabric", label: "Lakehouse Proof" }
    ],
    stack: ["Microsoft Fabric", "Power BI", "dbt", "FastAPI", "Python", "TMDL", "DAX", "MLflow", "Azure AD"],
    features: [
      { icon: "database", title: "dbt Star Schema", desc: "Staging → intermediate → fact + dims with domain SQL tests before BI." },
      { icon: "layers", title: "TMDL in Git", desc: "Certified measures and relationships reviewed like application code." },
      { icon: "zap", title: "Fabric API Proof", desc: "Lakehouse + semantic validation captured as markdown + scripted screenshot summaries." },
      { icon: "cpu", title: "MLflow Lineage", desc: "Training runs logged with metrics — honest AUC for synthetic demo data." }
    ],
    architecture: [
      { step: "01", label: "Serve", desc: "FastAPI exposes curated metrics and encounter slices from the synthetic dataset." },
      { step: "02", label: "Transform", desc: "dbt builds the star schema and clinical DQ assertions." },
      { step: "03", label: "Model", desc: "Power BI semantic model (TMDL) defines certified DAX measures." },
      { step: "04", label: "Fabric", desc: "Workspace lakehouse + dataset checks via service principal automation." }
    ],
    cost: "Dev Fabric trial / local API — no PHI; demo dataset only.",
    phase: null
  },

  {
    slug: "realtime-fraud-detection",
    title: "Realtime Fraud Detection",
    tagline: "Real-time feature engineering for fraud detection with Streamlit monitoring UI.",
    lane: "ML",
    tags: ["AI Platform"],
    laneColor: "#a8d8a8",
    status: "Production",
    github: "https://github.com/anix-lynch/realtime-fraud-detection",
    // live: hidden — Streamlit Cloud runtime error, code is on GitHub
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
    slug: "pied-piper-legal",
    title: "Pied Piper Legal Simulator",
    tagline: "Grounded VC term-sheet advisor — Gemini on Vertex reads a clause, cites it, and explains who it favors + which Silicon Valley episode it mirrors.",
    lane: "GenAI",
    tags: ["GenAI", "Cloud"],
    cloud: "Vertex",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/pied-piper-legal-simulator",
    live: "https://pied-piper-advisor-819957310168.us-west1.run.app",
    gif: "/piedpiper.gif",
    icon: "file-text",
    description: "A grounded VC term-sheet advisor: ask any term and it retrieves the matching clause(s) from a 57-clause library, links the Silicon Valley episode by conflict_type, then grounds a Gemini 2.5 Flash answer (Vertex AI) with [clause_id] citations, founder/VC risk scores, and the direction the term pushes fund returns. DIY retrieval right-sized for the corpus (no managed index) — same grounded-RAG pattern as the healthcare service, retargeted to legal/VC.",
    highlight: "Read a term sheet the way a new analyst dreams of: instant grounded read of who it favors, the risk, and the real-world drama it mirrors — every claim cites a clause.",
    stats: [
      { value: "57", label: "clauses grounded" },
      { value: "19", label: "SV episodes" },
      { value: "[id]", label: "cited answers" },
      { value: "2.5 Flash", label: "Gemini / Vertex" }
    ],
    stack: ["Python", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "RAG", "Cloud Run", "Docker"],
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
    slug: "financial-modeling-automation",
    title: "Financial Modeling Automation",
    tagline: "PE/VC financial modeling automation — VC cap tables + LP/GP fund economics with Python.",
    lane: "Data Eng",
    tags: ["Automation"],
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
    slug: "healthcare-ai-data-engineer",
    title: "Healthcare AI Data Engineer",
    tagline: "L1 + L1.25 data backbone, deployed for real — dbt medallion warehouse on BigQuery (55 tests green) + a Feast feature store (point-in-time-correct patient features) + FastAPI cockpit + a Vertex-grounded RAG agent over 55K synthetic patient encounters.",
    lane: "Data Eng",
    tags: ["Data Eng", "Cloud"],
    cloud: "Vertex",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-ai-data-engineer",
    live: "https://healthcare-ai-data-819957310168.us-west1.run.app/app",
    gif: "/healthcare-ai-data-engineer.gif",
    icon: "database",
    description: "Healthcare data backbone deployed end-to-end on GCP: a dbt medallion star schema (staging → intermediate → marts) built and tested LIVE on BigQuery — 55,500 encounters loaded, dbt build green on all 55 tests. A 7-check L1 quality gate runs in CI. FastAPI serves the warehouse plus a human cockpit (A1–A6) where every number links to its proof file, and an L2 grounded-RAG agent (/api/ask): BM25 retrieves from the redacted enriched corpus, then Vertex Gemini answers with [doc N] citations — no raw PII indexed.",
    highlight: "The data-engineer layer is real, not a mockup: dbt actually runs on BigQuery with every test green, and the AI agent answers only from the trusted marts.",
    stats: [
      { value: "55,500", label: "rows in BigQuery" },
      { value: "55/55", label: "dbt tests green" },
      { value: "50,000", label: "fact-table rows" },
      { value: "[doc N]", label: "grounded citations" }
    ],
    stack: ["Python", "dbt", "BigQuery", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "BM25", "Pandas", "pytest", "Docker", "GCP Cloud Run", "GitHub Actions"],
    features: [
      { icon: "database", title: "dbt warehouse LIVE on BigQuery", desc: "Medallion star schema (staging → intermediate → marts): fact_patient_encounters + 7 dims. 55,500 rows loaded, dbt build green on all 55 tests — not_null, unique, relationships (FK), accepted_values, and a custom readmission-logic test." },
      { icon: "shield", title: "7-check L1 quality gate", desc: "schema_drift · critical_nulls · duplicate_encounters · temporal_sanity · pii_in_narrative · patient_identity · audit_lineage. Runs in CI, exits 1 on any critical failure. The unique tests caught ~5,500 duplicate rows in the raw feed." },
      { icon: "cpu", title: "Vertex-grounded RAG agent", desc: "/api/ask: BM25 retrieves top-K from the redacted enriched corpus, then Gemini 2.5 Flash answers with [doc N] citations and refuses when the evidence doesn't support it. Grounds only on redacted narratives — never raw PII." },
      { icon: "search", title: "Cockpit — every number traceable", desc: "A1–A6 cockpit at /app; each displayed metric links to the repo file that proves it. The A5 warehouse explorer reads live object + row counts straight from BigQuery." }
    ],
    architecture: [
      { step: "01", label: "Load", desc: "55,500 synthetic encounters → BigQuery raw table; dbt staging dedupes to one row per encounter (raw feed had ~5,500 exact dupes)." },
      { step: "02", label: "Model", desc: "dbt medallion on BigQuery: staging → intermediate → marts (fact + 7 dims). 55 tests green, including FK relationships + accepted_values." },
      { step: "03", label: "Gate", desc: "7-check L1 quality gate in CI blocks bad data before it reaches the API or the AI agent." },
      { step: "04", label: "Serve + ground", desc: "FastAPI serves the cockpit + warehouse rooms; /api/ask grounds Gemini on the trusted marts with citations. Live on Cloud Run." }
    ],
    cost: "$0 at portfolio traffic — Cloud Run scales to zero, BigQuery stays in free tier, Vertex draws the GCP GenAI credit.",
    phase: "Phase 1-6 audit trail in ROADMAP.md — each phase has the commit hash that shipped it."
  },

  {
    slug: "healthcare-forward-deployed-engineer",
    title: "Healthcare Forward Deployed Engineer",
    tagline: "Customer-deployable ER triage assistant — one workflow, one runbook, one postmortem, one acceptance gate.",
    lane: "Forward Deployed",
    tags: ["Solutions", "Cloud"],
    cloud: "Vertex",
    laneColor: "#e8a87c",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-forward-deployed-engineer",
    live: "https://healthcare-fde-2ihyeqmb6q-uw.a.run.app/",
    gif: "/healthcare-fde.png",
    icon: "shield",
    description: "End-to-end customer-deployment package for an ER triage assistant: customer brief + solution design + runbook + handoff guide + integrations (Epic FHIR adapter, OAuth, identity mapper), the one workflow (rule-based ESI + pediatric/suicidal/sepsis safety floors + retrieval + grounded rationale), guardrails (input + output + PII), observability (split-sink audit/PHI logging), deployment unit (Dockerfile + non-root + healthcheck), and a postmortem template populated with a real incident.",
    highlight: "Acceptance tests as customer-contract gates — NOT ML metrics. If a suicidal patient doesn't get human review, the deployment isn't done.",
    stats: [
      { value: "10", label: "customer-contract tests" },
      { value: "39 ms", label: "/v1/ask p50" },
      { value: "P0/P1/P2/P3", label: "alert ladder" },
      { value: "8/8", label: "FDE deliverables" }
    ],
    stack: ["Python", "FastAPI", "BM25", "Pydantic", "pytest", "Docker", "Cloud Run", "GitHub Actions", "Epic FHIR (mock)", "OAuth", "asciinema"],
    features: [
      { icon: "shield", title: "Customer-contract acceptance gate", desc: "8 tests: pediatric < 1y safety floor · chest-pain + diaphoresis · sepsis SIRS (qSOFA-shaped) · suicidal ideation · altered mental status · p95 < 800ms · p99 < 2000ms · response shape complete. Each maps to eval_dataset.json with a named customer owner." },
      { icon: "file-text", title: "Runbook + postmortem discipline", desc: "P0/P1/P2/P3 alert ladder with paging windows + exact curl commands. Two postmortems (one real-shaped integration failure + one brief↔code drift audit finding) using the same template." },
      { icon: "lock", title: "Split-sink HIPAA-aligned logging", desc: "audit.jsonl = metadata only (safe for cloud index + stdout). phi_archive.jsonl = full payload, restricted volume, NO stdout mirror. Fail-LOUD on archive write failure (compliance event)." },
      { icon: "key", title: "Fail-closed admin auth", desc: "POST /admin/mode requires bearer token (hmac.compare_digest, timing-safe). ADMIN_BEARER_TOKEN unset → 503. Explicit ADMIN_AUTH_DISABLED=1 escape hatch for dev only." }
    ],
    architecture: [
      { step: "01", label: "EHR intake", desc: "Epic FHIR adapter (mocked) → fhir_transform (Patient/Encounter/Observation with LOINC codes) → identity_mapper (MRN ↔ patient_id SHA256 short hash)." },
      { step: "02", label: "Guard + workflow", desc: "guardrails (input + output + PII mask on inbound) → workflows.triage_assistant (rule-based ESI + pediatric/suicidal/SIRS safety floors + retrieval + grounded rationale)." },
      { step: "03", label: "Fallback + audit", desc: "should_escalate routes low-confidence + safety-floor cases to human review. Split-sink audit: metadata to audit.jsonl + stdout; full payload to phi_archive.jsonl (restricted)." },
      { step: "04", label: "Deploy + smoke", desc: "Dockerfile (port $PORT, non-root) + smoke_test.sh (5 curl checks incl. 401 on missing bearer) + CI runs `make acceptance` on every PR." }
    ],
    cost: "Free. Cloud Run scale-to-zero, well under monthly free tier at portfolio traffic.",
    phase: "Phase 1-8 audit trail in ROADMAP.md — each phase has the commit hash that shipped it."
  }
];
