// src/data/projects-detailed.js
// One entry = one beautiful project page at /projects/[slug]
// Add { slug, title, ... } here → page auto-generates. That's it.

export const projects = [
  // ── NORTHSTAR ──────────────────────────────────────────────
  {
    slug: "healthcare-ai-platform-signals",
    title: "From Reactive AI to Signal-First Intelligence",
    tagline: "Signals reduce noise. AI focuses on what matters. Doctors act with confidence.",
    lane: "AI Platform",
    tags: ["AI Platform", "Cloud"],
    cloud: "Vertex",
    laneColor: "#1e6b38",
    status: "Proof of Work",
    github: "https://github.com/anix-lynch/healthcare-signal-platform",
    live: null,
    gif: "/signal-console.png",
    icon: "activity",
    description: null,
    highlight: null,
    stats: [
      { value: "📊 5,000", label: "Real openFDA reports evaluated" },
      { value: "🎯 0.877", label: "Serious-report F1 (TF-IDF + numeric)" },
      { value: "✂️ 30%", label: "LLM calls cut @ ≥95% serious recall" },
      { value: "🟢 WIN", label: "Beats route-everything baseline" }
    ],
    stack: ["Python", "scikit-learn", "IsolationForest", "KMeans", "RandomForest", "TF-IDF", "NumPy", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "Cloud Run", "Docker"],
    beforeAfter: {
      before: {
        title: "LLM Reads Everything",
        badge: "No measured tradeoff",
        flow: ["~5,000 openFDA reports", "Every report reaches the LLM", "Full token bill", "More noise", "Reviewer reads too much"],
        problems: [
          "Expensive reasoning is spent equally on useful and low-value adverse-event reports.",
          "Nobody knows what quality is lost when calls are reduced.",
          "Models exist separately without a shared routing decision.",
          "Cost reduction is a hope, not an evaluated result."
        ]
      },
      after: {
        title: "Signals Decide What Deserves Attention",
        badge: "Evidence before optimization",
        flow: ["~5,000 openFDA reports", "5 signals (+ text) score each", "Router cuts 30% at ≥95% recall", "Beats route-everything", "Serious coverage held"],
        built: [
          {
            title: "Smoke Detector / Anomaly",
            desc: "IsolationForest flags the unusual reports first — the 30 it flags carry 4.8 reactions on average vs 2.3 for the rest, so the LLM investigates outliers instead of scanning everything."
          },
          {
            title: "Treasure Map / Clustering",
            desc: "KMeans groups reports into cohorts (silhouette 0.61 at k=4 — modest structure on n=300, reported honestly) so patterns are analyzed, not individual reports."
          },
          {
            title: "Traffic Light / Classification",
            desc: "A classifier over TF-IDF reaction-text + numeric features predicts whether a report is serious — F1 0.877 in 5-fold CV (text features lifted it past the no-text 0.846), sorting NOW / WAIT before the LLM spends a token."
          },
          {
            title: "Ranking Engine",
            desc: "Reports are ranked by P(serious): precision@200 is 1.0 vs 0.55 for a random queue, so the highest-impact reports reach the LLM first."
          },
          {
            title: "Similar Cases / Lookalike",
            desc: "TF-IDF over reaction text retrieves comparable reports (Recall@5 0.34 for same-drug siblings), so the LLM reasons with examples instead of from scratch."
          },
          {
            title: "The Router Earns Its Cut — Honestly",
            desc: "Scaling to ~5,000 real reports and adding TF-IDF features over the reaction text turned a measured tradeoff into a real win: the router cuts 30% of LLM calls while holding serious-report recall at 0.954 (≥95%), beating the route-everything baseline. The full cost-recall curve is shown — deeper cuts trade recall, and that's stated, not hidden."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "$0 at portfolio traffic — Cloud Run scales to zero, Gemini draws the GCP GenAI credit.",
    phase: null
  },

  {
    slug: "healthcare-genai-engineer",
    title: "Baymax ER Nurse Assistant",
    tagline: "Starts with an ordinary symptom, discovers what nobody mentioned, then changes course or stops safely.",
    lane: "GenAI",
    tags: ["GenAI", "Cloud"],
    cloud: "Vertex",
    laneColor: "#7bb3d9",
    status: "Simulation",
    github: "https://github.com/anix-lynch/baymax",
    live: "https://baymax-bice.vercel.app",
    gif: "/baymax.gif",
    icon: "shield",
    description: null,
    highlight: null,
    stats: [
      { value: "🎬 4", label: "Patient-to-action stories" },
      { value: "✅ 100%", label: "Action safety floors" },
      { value: "🧪 50/50", label: "Agent scenarios passed" },
      { value: "🛡 5/5", label: "Rollout gates passed" }
    ],
    stack: ["Python", "Agent Workflows", "Evidence Arbitration", "Decision Safety Envelope", "Durable Actions", "Outcome Verification", "openFDA", "pytest", "GitHub Actions", "Vercel"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Answer-only AI",
        flow: ["Incoming case", "Search records", "AI answer", "Work stops at recommendation"],
        problems: [
          "Every case spends the same expensive evidence budget.",
          "Another evidence domain can appear without changing the action.",
          "A recommendation can look finished even when no durable state changed.",
          "Unsafe uncertainty has no explicit brake, owner, or verified handoff."
        ]
      },
      after: {
        title: "After",
        badge: "Evidence-to-action AI",
        flow: ["Nose allocates attention", "Two eyes change perspective", "Brain acts or brakes", "Outcome receipt"],
        built: [
          {
            title: "Opens Expensive Eyes Only When Needed",
            desc: "A served, versioned attention signal routes patient cases before retrieval while protecting at least 95% serious-case recall."
          },
          {
            title: "Changes Action When Perspective Changes",
            desc: "The same patient receives assign_bed or divert when capacity changes; drug-safety evidence can turn discharge_plan into human_review."
          },
          {
            title: "Stops Before Unsafe Action",
            desc: "Cross-domain uncertainty applies the brake, blocks autonomous disposition, and hands the case to a human review owner."
          },
          {
            title: "Acts Until Durable Outcome",
            desc: "Allowed actions change bounded operational state, record receiver ACK, and re-read the result instead of trusting a success message."
          },
          {
            title: "Rehearses Failure Before Rollout",
            desc: "A simulated deployment contract checks five gates, injects false success, and requires rollback when outcome verification disappears."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Closed-loop ER simulation using synthetic encounters and real openFDA population safety signals. No hospital deployment, clinical validation, or adoption claim.",
    phase: null
  },

  {
    slug: "mocktailverse-bedrock",
    title: "MocktailVerse Bedrock",
    tagline: "Ask for a vibe, not an ingredient — AWS Bedrock RAG finds the drink that matches what you meant.",
    lane: "GenAI",
    tags: ["GenAI", "Cloud"],
    cloud: "AWS",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/mocktailverse-bedrock",
    live: "https://dgco3hhxo94y8.cloudfront.net",
    gif: "/mocktailverse_bedrock.gif",
    icon: "layers",
    description: null,
    highlight: null,
    stats: [
      { value: "🧠 AWS", label: "Bedrock Claude + Titan" },
      { value: "🔍 pgvector", label: "Postgres vector search" },
      { value: "🔁 RAG", label: "Chunk → retrieve → answer" },
      { value: "🏭 E2E", label: "Ingest to generation" }
    ],
    stack: ["Python", "AWS Bedrock", "pgvector", "RAG", "PostgreSQL", "LangChain", "boto3", "Docker", "FastAPI"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Keyword cocktail search",
        flow: ["Question", "SQL LIKE search", "Exact-name match", "Misses the vibe"],
        problems: [
          "Ask for 'something smoky and bitter' and a keyword search shrugs.",
          "Needs the exact ingredient or drink name to find anything.",
          "No semantic understanding — it matches letters, not meaning.",
          "Real vector search usually means a managed vector DB bill."
        ]
      },
      after: {
        title: "After",
        badge: "Bedrock RAG platform",
        flow: ["Question", "Semantic retrieve", "Bedrock grounds", "Real answer"],
        built: [
          {
            title: "Vibe Search",
            desc: "Ask for 'smoky and bitter' and pgvector surfaces the mezcal negroni — even when those exact words aren't in the recipe."
          },
          {
            title: "Model Swap",
            desc: "Claude or Titan behind one Bedrock API. Change the brain without touching the application code."
          },
          {
            title: "No-VendorDB Vectors",
            desc: "Production semantic search on plain Postgres + pgvector — no managed vector DB to pay for."
          },
          {
            title: "Cost Receipts",
            desc: "Retry logic, observability hooks, and per-query cost tracking — it behaves like prod, not a notebook."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "AWS Bedrock pay-per-token. pgvector runs on any Postgres instance.",
    phase: null
  },

  {
    slug: "healthcare-analytics-fabric",
    title: "Healthcare Analytics on Microsoft Fabric",
    tagline: "Power BI you can code-review — openFDA drug-safety on Microsoft Fabric, deployed through the API with sub-1.3s DAX and counts that reconcile against GCP.",
    lane: "Data Eng",
    tags: ["Data Eng", "Cloud", "AI Platform"],
    cloud: "Azure",
    laneColor: "#c4a8d8",
    status: "Proof of Work",
    github: "https://github.com/anix-lynch/healthcare-da",
    live: null,
    gif: "/healthcare-fabric-star.png",
    icon: "layers",
    description: null,
    highlight: null,
    stats: [
      { value: "💊 3,000", label: "Real openFDA reports" },
      { value: "⚡ 1.15s", label: "DAX p50 (all < 5s)" },
      { value: "🧱 Direct Lake", label: "Semantic model as code" },
      { value: "🔗 GCP=Fabric", label: "Counts reconcile" }
    ],
    stack: ["Microsoft Fabric", "OneLake", "Power BI", "Direct Lake", "DAX", "Delta Lake", "Python", "Fabric REST API"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Dashboard-only BI",
        flow: ["Data", "Manual Power BI", "Pretty chart", "No lineage"],
        problems: [
          "Measures live inside a .pbix binary nobody can review.",
          "No tests run before the data reaches a chart.",
          "No API layer — the numbers can't be reused downstream.",
          "'Trust me it's right' instead of 'here's the file that proves it'."
        ]
      },
      after: {
        title: "After",
        badge: "Code-first Fabric stack",
        flow: ["openFDA → OneLake", "Direct Lake model", "API-deployed report", "DAX < 5s + reconcile"],
        built: [
          {
            title: "Power BI Ships From Code",
            desc: "The Direct Lake semantic model and the report (openFDA Drug Safety Report, id ef468dc5, 3 visuals) deploy through the Fabric REST API — not by clicking through Power BI Desktop."
          },
          {
            title: "Questions Return In Seconds",
            desc: "Real DAX runs through the Power BI engine: drug leaderboard p50 1.15s, KPI card p50 0.66s — every query under 5s, measured (proofs/powerbi_dax_latency.json)."
          },
          {
            status: "MEASURED",
            title: "Fabric Can't Quietly Change The Truth",
            desc: "fact + dim_drug/reaction + mart counts reconcile GCP ↔ Fabric exactly (3,000 = 3,000); the openFDA fact contract is the same one GCP and AWS load."
          },
          {
            status: "BOUNDARY",
            title: "Rendered Screenshot Has A Cap",
            desc: "ExportToFile (report → PNG via API) is blocked on the free FTL trial, so the native screenshot needs a logged-in browser; the published chart is generated from the same DAX data."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Free Fabric trial — no PHI; 3,000 real openFDA FAERS reports, public data.",
    phase: null
  },

  {
    slug: "healthcare-multicloud-portability",
    title: "Multicloud Portability — One Contract, Three Clouds",
    tagline: "The same openFDA fact runs on GCP BigQuery, Microsoft Fabric, and AWS serverless — and the counts, business metrics, and schema reconcile exactly. Moving the platform can't change the truth.",
    lane: "Data Eng",
    tags: ["Data Eng", "Cloud", "AI Platform"],
    cloud: "Multi",
    laneColor: "#2a9d8f",
    status: "Proof of Work",
    github: "https://github.com/anix-lynch/healthcare-de-AWS",
    live: null,
    gif: "/healthcare-3cloud-reconcile.png",
    icon: "layers",
    description: null,
    highlight: null,
    stats: [
      { value: "🟰 3,000", label: "Records match GCP=Fabric=AWS" },
      { value: "🚨 51.27%", label: "Serious rate — identical" },
      { value: "🔗 fingerprint", label: "Schema reconciles" },
      { value: "💸 <$0.0001", label: "AWS cost (serverless)" }
    ],
    stack: ["GCP BigQuery", "Microsoft Fabric", "OneLake", "AWS S3", "AWS DynamoDB", "Terraform", "Python", "Delta Lake", "PyArrow"],
    beforeAfter: {
      before: {
        title: "Three Clouds, Three Truths",
        badge: "Vendor lock-in risk",
        flow: ["GCP result", "≠ Fabric result", "≠ AWS result", "Nobody reconciles"],
        problems: [
          "Each cloud computes its own numbers, and a silent drift between them is nobody's job to catch.",
          "Logic is copied per cloud, so a fix on one is a bug on the others.",
          "\"Portable\" is a slide, not a proven property.",
          "Migrating means hoping the KPIs survive the move."
        ]
      },
      after: {
        title: "One Contract, Three Native Implementations",
        badge: "Moving can't change the truth",
        flow: ["Shared openFDA contract", "BigQuery · Fabric · S3+DynamoDB", "Each cloud-native", "Reconciled exactly"],
        built: [
          {
            title: "The Same Numbers, Everywhere",
            desc: "record_count, serious_count, serious_rate (51.27%), distinct_drugs, and total_reactions (8,269) reconcile EXACTLY across GCP, Fabric, and AWS — each computed independently on its own cloud's copy."
          },
          {
            title: "Schema Is Enforced, Not Asserted",
            desc: "Each cloud's ACTUAL schema is fingerprinted from real data and validated against one shared versioned contract — not a constant copied three times."
          },
          {
            title: "AWS Serverless, Not A Server Farm",
            desc: "openFDA lands in S3 (typed Parquet) and serves from DynamoDB (on-demand) — two serverless services, no RDS/OpenSearch/always-on."
          },
          {
            title: "Cheap And Reversible",
            desc: "The whole AWS slice costs under $0.0001 with a documented teardown (--teardown / terraform destroy) and a 30-day S3 expiry."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "< $0.0001 on AWS (on-demand DynamoDB + tiny S3); GCP free tier; Fabric free trial. Public openFDA data, no PHI.",
    phase: null
  },

  {
    slug: "realtime-fraud-detection",
    title: "Realtime Fraud Detection",
    tagline: "Catch fraud while it happens, not in tomorrow's batch — streaming features with zero data leakage.",
    lane: "ML",
    tags: ["AI Platform"],
    laneColor: "#a8d8a8",
    status: "Production",
    github: "https://github.com/anix-lynch/realtime-fraud-detection",
    // live: hidden — Streamlit Cloud runtime error, code is on GitHub
    gif: "/realtime-fraud-detection.gif",
    icon: "shield",
    description: null,
    highlight: null,
    stats: [
      { value: "⚡ <100ms", label: "Score per transaction" },
      { value: "🧮 0", label: "Data leakage" },
      { value: "📡 Real-time", label: "Feature engineering" },
      { value: "📈 Streamlit", label: "Live monitor" }
    ],
    stack: ["Python", "Streamlit", "scikit-learn", "Pandas", "FastAPI", "DuckDB", "Plotly"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Batch fraud scoring",
        flow: ["Transactions", "Nightly batch", "Stale features", "Fraud already happened"],
        problems: [
          "Features get computed after the fact, so the score is always late.",
          "Training quietly leaks future data — the model looks great until prod.",
          "No live monitor to watch fraud patterns form.",
          "By the time the batch flags it, the money is gone."
        ]
      },
      after: {
        title: "After",
        badge: "Streaming fraud engine",
        flow: ["Transaction", "Live features", "Score <100ms", "Catch in the act"],
        built: [
          {
            title: "Time Machine Guard",
            desc: "Point-in-time correctness means features only ever see the past — zero future-data leakage into training."
          },
          {
            title: "Catch-in-the-Act Scoring",
            desc: "Each transaction scored in under 100ms, with the feature contributions that flagged it."
          },
          {
            title: "Pattern Radar",
            desc: "Streamlit dashboard surfaces fraud clusters, score drift, and detection rate as they form."
          },
          {
            title: "Streaming Features",
            desc: "Velocity + behavioral signals computed live on the event stream, not in last night's job."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Free to run locally.",
    phase: null
  },

  {
    slug: "pied-piper-legal",
    title: "Pied Piper Legal Simulator",
    tagline: "Read a term sheet like a senior analyst — Gemini cites the clause, scores who it favors, and names the Silicon Valley episode it mirrors.",
    lane: "GenAI",
    tags: ["GenAI", "Cloud"],
    cloud: "Vertex",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/pied-piper-legal-simulator",
    live: "https://pied-piper-advisor-819957310168.us-west1.run.app",
    gif: "/piedpiper.gif",
    icon: "file-text",
    description: null,
    highlight: null,
    stats: [
      { value: "📜 57", label: "Clauses grounded" },
      { value: "🎬 19", label: "Silicon Valley episodes" },
      { value: "🔖 [id]", label: "Every answer cited" },
      { value: "🤖 2.5 Flash", label: "Gemini on Vertex" }
    ],
    stack: ["Python", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "RAG", "Cloud Run", "Docker"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Google the term sheet",
        flow: ["Term sheet", "Google the clause", "Generic blog post", "Still unsure who wins"],
        problems: [
          "A blog post about 'liquidation preference' isn't YOUR clause.",
          "No read on who the term actually favors — founder or VC.",
          "No citation, so you can't trust or check the answer.",
          "Intimidating for a new analyst staring at unfamiliar legalese."
        ]
      },
      after: {
        title: "After",
        badge: "Grounded clause advisor",
        flow: ["Ask a term", "Retrieve the clause", "Gemini grounds + cites", "Know who it favors"],
        built: [
          {
            title: "Who Wins?",
            desc: "Every clause gets a founder-vs-VC risk read and the direction it pushes fund returns — not just a definition."
          },
          {
            title: "Cite or Shut Up",
            desc: "Each answer points to a real [clause_id] from the 57-clause library. No hand-waving, every claim traceable."
          },
          {
            title: "TV Translator",
            desc: "Links each conflict to the Silicon Valley episode it mirrors, so the legal drama actually sticks."
          },
          {
            title: "Right-Sized Retrieval",
            desc: "DIY retrieval matched to a 57-clause corpus — no managed index. Same grounded-RAG pattern as the healthcare service, retargeted to legal/VC."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Vertex Gemini draws the GCP GenAI credit. Cloud Run scales to zero.",
    phase: null
  },

  {
    slug: "healthcare-ai-data-engineer",
    title: "Healthcare AI Data Engineer",
    tagline: "The part of healthcare AI nobody sees until it breaks — a trusted BigQuery backbone where bad rows stop early, every number has a receipt, and the agent reads the clean layer.",
    lane: "Data Eng",
    tags: ["Data Eng", "Cloud"],
    cloud: "Vertex",
    laneColor: "#c4a8d8",
    status: "Proof of Work",
    github: "https://github.com/anix-lynch/healthcare-ai-data-engineer",
    live: null,
    dataDocs: "/dashboards/ge/",
    gif: "/healthcare-ai-data-engineer.gif",
    icon: "database",
    description: null,
    highlight: null,
    stats: [
      { value: "🗄️ 3,000", label: "Real openFDA FAERS reports" },
      { value: "💊 156", label: "Drugs tracked" },
      { value: "🚨 51.27%", label: "Serious adverse events" },
      { value: "🔖 [doc N]", label: "Grounded citations + refusal" }
    ],
    stack: ["Python", "dbt", "BigQuery", "Great Expectations", "Feast", "Cloud Scheduler", "Cloud Monitoring", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "BM25", "Pandas", "pytest", "Docker", "GCP Cloud Run", "GitHub Actions"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Hope-Based Data",
        flow: ["openFDA pull", "Cleanup scripts", "Tables look fine", "Dashboard + AI eat the mess"],
        problems: [
          "The data looks clean because nobody has shaken it hard enough. Duplicate report IDs and weird received-dates slide into the dashboard smiling.",
          "Nobody can tell if the data is actually fresh. A table can be stale while the page still looks freshly baked.",
          "Failures go quiet. The pipeline can die in the back room while the dashboard keeps serving confident numbers.",
          "The metrics look polished, but there is no receipt. A manager asks where a number came from and everyone turns to a script like it is a fortune teller.",
          "The agent sees more raw adverse-event detail than it should — free-text narrative and unredacted fields. That is not a feature; it is a privacy incident waiting for better lighting.",
          "The team finds out after users complain. There is no real gate, just a well-dressed README and hope."
        ]
      },
      after: {
        title: "After",
        badge: "Data With Receipts",
        flow: ["BigQuery load", "dbt medallion", "Quality gates", "Grounded answer"],
        built: [
          {
            title: "Bad Rows Stop At The Door",
            desc: "Duplicates, broken received-dates, missing fields, and drug-name drift are caught and quarantined before they can poison the dashboard or the agent."
          },
          {
            title: "Self-Healing — Detect → Recover → Verify",
            desc: "An independent watchdog reads the durable BigQuery run-ledger, detects a stale end-to-end run, runs a bounded recovery (re-ingest → quarantine → gates → GE → dbt → freshness) against BigQuery, and advances the ledger watermark ONLY after verification passes — proven: a forced-stale run recovered + verified in ~134s and moved the watermark, while a failed recovery escalates and leaves it untouched."
          },
          {
            title: "Failures Get Loud Early",
            desc: "Great Expectations, custom checks, and CI make breakage show up before a user trusts the wrong number."
          },
          {
            title: "Every Metric Has A Receipt",
            desc: "Cockpit numbers trace back to committed files, BigQuery tables, quality reports, or live API payloads. Not trust-me math."
          },
          {
            title: "The Agent Reads The Clean Layer",
            desc: "/api/ask retrieves the redacted corpus (BM25), answers with [doc N] citations, and refuses when the evidence isn't there — verified: a grounded run cites a real report and an out-of-evidence question is declined, instead of crawling raw adverse-event narratives."
          },
          {
            title: "Features Are Discoverable + Leak-Free (Feast)",
            desc: "A Feast feature view (openfda_drug_features, 4 features) over the openFDA fact — discoverable in the registry, with point-in-time-correct historical retrieval and online serving, so the model and any downstream consumer pull the same governed features without future leakage."
          },
          {
            title: "BigQuery Does More Than Store Boxes",
            desc: "Partitioning and clustering cut scan size, materialized views pre-compute the hot path, and idempotent MERGE proves reruns do not duplicate the mart."
          },
          {
            status: "MEASURED",
            title: "Batch + Event-Driven Ingestion",
            desc: "openFDA's source is batch; a native Pub/Sub→BigQuery path ingests records as an event-driven feed (replay), proving the streaming architecture without a live-stream claim or a money leak."
          },
          {
            title: "Governed + Least-Privilege, Proven",
            desc: "Row counts reconcile source → BigQuery on every load; a versioned data contract, audit ledger, column masking, and retention/deletion cover the lifecycle. Least-privilege is proven empirically: a restricted identity reads the reduced 5-column authorized view (300 rows) but is DENIED 403 on the full base table."
          },
          {
            title: "Releases Face A Gate",
            desc: "If quality, retrieval, grounding, or cost discipline regresses, the release should fail before a human has to smell smoke."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "$0 at portfolio traffic — Cloud Run scales to zero, BigQuery stays in free tier, Vertex draws the GCP GenAI credit.",
    phase: "Phase 1-6 audit trail in ROADMAP.md — each phase has the commit hash that shipped it."
  },

    {
    slug: "healthcare-forward-deployed-engineer",
    title: "Healthcare Forward Deployed Engineer",
    tagline: "Built the forward-deployed handoff layer for hospital-safe AI triage — 21 acceptance tests, forced human review on high-risk cases, and a deployment package built to hand off.",
    lane: "Forward Deployed",
    tags: ["Solutions", "Cloud"],
    cloud: "Vertex",
    laneColor: "#e8a87c",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-forward-deployed-engineer",
    live: "https://healthcare-fde-2ihyeqmb6q-uw.a.run.app/",
    gif: "/healthcare-fde.png",
    icon: "shield",
    description: null,
    highlight: null,
    stats: [
      { value: "🛡️ 21", label: "Contract tests — all pass" },
      { value: "⚡ 39 ms", label: "/v1/ask p50" },
      { value: "🛑 HITL gate", label: "Stop before harm" },
      { value: "📦 Handoff ready", label: "Runbook + deploy plan" }
    ],
    stack: ["Python", "FastAPI", "LangGraph", "BM25", "Pydantic", "pytest", "OpenTelemetry", "Docker", "Cloud Run", "GitHub Actions", "Epic FHIR (mock)", "OAuth", "asciinema"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Code with no handoff",
        flow: ["Case arrives", "AI predicts ESI", "Nurse carries risk alone", "No proof loop"],
        problems: [
          "Model can predict the triage level, but there is no proof dangerous cases were blocked.",
          "Nurse has no clean moment to sign off or override — she just gets a number.",
          "Hospital cannot easily review who approved what decision, or when.",
          "Customer gets a model and a README, not an adoption package."
        ]
      },
      after: {
        title: "After",
        badge: "Hospital-ready handoff",
        flow: ["Case arrives", "AI checks safety", "Nurse signs or overrides", "Audit proves it", "Hospital can hand off"],
        built: [
          {
            title: "Safety Gate",
            desc: "21 contract tests: pediatric floor, chest-pain routing, suicidal ideation forced-review, sepsis SIRS shape, weak-evidence override, p95 latency cap. All 21 must pass — or the deployment is not ready."
          },
          {
            title: "Human Decision",
            desc: "High-risk cases pause. The AI does not just flag — it stops and waits for a nurse to sign or override before anything is written back to the patient record."
          },
          {
            title: "Audit Proof",
            desc: "Each decision stamps what the model decided, confidence score, and latency. PHI goes to a restricted archive, metadata to the cloud index. If the archive write fails, the system screams."
          },
          {
            title: "Handoff Package",
            desc: "Runbook, deployment plan, smoke-test suite, ownership guide. What the hospital actually needs to keep this running without the engineer on call."
          },
          {
            title: "Business Target (90-day)",
            desc: "Target, not achieved outcome: reduce triage-to-first-clinician contact by 15 minutes. Keep down-triage rate below 2%. These are the acceptance criteria in the customer contract — not measured results from a live deployment."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Free. Cloud Run scale-to-zero, well under monthly free tier at portfolio traffic.",
    phase: "Phase 1-8 audit trail in ROADMAP.md — each phase has the commit hash that shipped it."
  },
  {
    slug: "healthcare-ai-data-engineer",
    title: "Healthcare AI Data Platform",
    tagline: "B1→B5 trust layer: ingest, validate, reason, survive, govern. Every number traces to a file.",
    lane: "AI Data Eng",
    laneColor: "#5FA978",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-ai-data-engineer",
    live: "https://healthcare-ai-data-819957310168.us-west1.run.app/app",
    storyboard: "https://healthcare-ai-data-819957310168.us-west1.run.app/storyboard",
    gif: "/healthcare-ai-data-storyboard.gif",
    icon: "layers",
    description: "Production AI data platform for healthcare — 55,500+ encounter records through a 5-layer trust stack: ingestion (B1), truth contracts (B2), semantic knowledge products (B3), self-healing reliability (B4), and AI spend governance with Vertex Context Caching (B5). Zero data-quality violations reached AI-facing endpoints across 1,000 fault-injection runs. 59.3% AI inference cost reduction via novelty-driven attention routing.",
    highlight: "B1→B5: every record earns its way to Baymax. Bad data is quarantined before AI sees it. Good data gets the right compute budget. Fully auditable.",
    stats: [
      { value: "55.5K", label: "Records Ingested" },
      { value: "0", label: "Violations to AI Layer" },
      { value: "59.3%", label: "AI Cost Reduction" },
      { value: "99.0%", label: "Pipeline Success Rate" }
    ],
    stack: ["Python", "BigQuery", "dbt", "Feast", "FastAPI", "Vertex AI", "Gemini", "GCP", "Cloud Run", "Great Expectations"],
    features: [
      { icon: "layers", title: "B1: Trusted Ingestion", desc: "55.5K records, 100% source-to-warehouse reconciliation. Entity resolution to 40,235 canonical patients. Domain-specific plausibility contracts (CLINICAL-002) quarantine impossible records before they reach AI." },
      { icon: "shield", title: "B2: Truth Contracts", desc: "7 named truth contracts (6 BLOCKING), 48/48 GE checks, 52/52 dbt tests. Zero data-quality violations reached AI-facing endpoints across 1,000 fault-injection runs." },
      { icon: "cpu", title: "B3: Semantic Knowledge Products", desc: "4 versioned semantic profiles (PatientProfile, RiskProfile, MedicationProfile, EncounterSummary). BM25 RAG retrieval: Hit@5=0.95, MRR=0.90, NDCG@10=0.89. Grounded answers verified by Vertex Gen AI Eval." },
      { icon: "zap", title: "B4: Self-Healing Reliability", desc: "99.0% pipeline success, 90% auto-recovery rate, 99.9% SLA compliance. 9-class failure taxonomy. Stale data incidents = 0 across 1,000 seeded fault-injection runs." },
      { icon: "target", title: "B5: AI Spend Governance", desc: "novelty_score (text-embedding-004 kNN) drives 89% of PRO-tier routing decisions. Vertex Context Caching: 61.7% per-call cost reduction (measured via count_tokens API). 59.3% cost savings vs naive all-Pro routing across 401 encounters." }
    ],
    architecture: [
      { step: "01", label: "B1 Capture", desc: "Batch + stream + API ingestion → idempotent BigQuery merge → entity resolution → plausibility contracts quarantine impossible records" },
      { step: "02", label: "B2 Trust", desc: "7 named truth contracts → 48 GE checks → 52 dbt tests → promotion gate blocks every CRITICAL fault before the agent layer" },
      { step: "03", label: "B3 Understand", desc: "4 semantic knowledge products → Feast PIT-correct feature store → BM25 retrieval → Vertex Gemini grounded answers" },
      { step: "04", label: "B4+B5 Govern", desc: "Self-healing orchestration + novelty_score attention routing + Vertex Context Caching → fully auditable inference budget decisions" }
    ],
    cost: "GCP credit (Cloud Run + BigQuery + Vertex AI). Scale-to-zero = $0 idle.",
    phase: null
  }

];
