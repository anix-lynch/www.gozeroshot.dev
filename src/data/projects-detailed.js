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
      { value: "📊 5", label: "Evaluated signals · real metrics" },
      { value: "🎯 0.846", label: "Serious-report F1 (n=300 openFDA)" },
      { value: "📈 0.833", label: "Ranking P@30 vs 0.53 random" },
      { value: "◐ MEASURED", label: "Cost-quality tradeoff — no free lunch" }
    ],
    stack: ["Python", "scikit-learn", "IsolationForest", "KMeans", "RandomForest", "TF-IDF", "NumPy", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "Cloud Run", "Docker"],
    beforeAfter: {
      before: {
        title: "LLM Reads Everything",
        badge: "No measured tradeoff",
        flow: ["300 openFDA reports", "Every report reaches the LLM", "Full token bill", "More noise", "Reviewer reads too much"],
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
        flow: ["300 openFDA reports", "5 cheap signals score each", "Router measures cost vs quality", "Tradeoff made explicit", "Serious coverage protected"],
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
            desc: "A RandomForest predicts whether a report is serious — F1 0.846 on a held-out test (no text features yet), sorting NOW / WAIT before the LLM spends a token."
          },
          {
            title: "Ranking Engine",
            desc: "Reports are ranked by P(serious): precision@30 is 0.833 vs 0.53 for a random queue, so the highest-impact reports reach the LLM first."
          },
          {
            title: "Similar Cases / Lookalike",
            desc: "TF-IDF over reaction text retrieves comparable reports (Recall@5 0.34 for same-drug siblings), so the LLM reasons with examples instead of from scratch."
          },
          {
            status: "MEASURED",
            title: "The Router Has A Speedometer",
            desc: "Every reduction in LLM calls shows the serious-report recall it costs. On this small dataset, holding ≥95% serious recall currently requires routing every report — the cost-quality curve is measured and shown, not a free-lunch claim."
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
    title: "Healthcare GenAI Evidence Engine",
    tagline: "Answers clinical questions with records, citations, privacy checks, and a release gate.",
    lane: "GenAI",
    tags: ["GenAI", "Cloud"],
    cloud: "Vertex",
    laneColor: "#7bb3d9",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-genai-engineer",
    live: "https://healthcare-genai-2ihyeqmb6q-uw.a.run.app",
    gif: "/healthcare-genai-engineer.gif",
    icon: "shield",
    description: null,
    highlight: null,
    stats: [
      { value: "⚡ 50 ms", label: "Hybrid p95 latency" },
      { value: "✅ 100%", label: "Hybrid hit@5" },
      { value: "🚦 3", label: "NOW / SOON / WAIT paths" },
      { value: "🧪 20", label: "Golden test queries" }
    ],
    stack: ["Python", "FastAPI", "BM25", "Sentence Transformers", "RRF", "Anthropic", "OpenAI", "Docker", "Pydantic", "pytest", "GitHub Actions"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Answer-only AI",
        flow: ["Patient question", "Search records", "AI answer", "Staff still decides"],
        problems: [
          "It can find similar notes, but the words have to line up too neatly.",
          "The answer may be cited, but it does not say whether this is NOW, SOON, or WAIT.",
          "It explains the past case, not what is likely to happen next: longer stay, bed pressure, or deterioration risk.",
          "If the next step fails, there is no owner, retry limit, stop rule, or clean handoff."
        ]
      },
      after: {
        title: "After",
        badge: "Evidence-to-action AI",
        flow: ["Patient question", "Evidence + risk", "Acknowledged handoff", "Real action + receipt"],
        built: [
          {
            title: "Finds What You Meant",
            desc: "Uses exact match plus intent match, so the case can still surface when the wording is different."
          },
          {
            title: "Shows Its Receipts",
            desc: "Answers with supporting records, source IDs, and privacy checks instead of asking the reader to trust a black box."
          },
          {
            title: "Says How Urgent It Is",
            desc: "Turns evidence into a NOW / SOON / WAIT path, with safety overrides when the clinical red flags are louder than the model."
          },
          {
            title: "Looks Ahead",
            desc: "Adds future-risk signals like predicted length of stay, deterioration risk, and bed pressure, so the answer is not trapped in the past."
          },
          {
            title: "Hands Off the Work",
            desc: "Routes the case from ER Triage to Bed Ops, and the receiver signs for it, so ownership is a real handoff instead of a note left in the air."
          },
          {
            title: "Actually Changes the State",
            desc: "Commits the bed decision to durable state for real and emits a before/after receipt, so it acts on the case instead of returning a recommendation no one applied."
          },
          {
            title: "Won't Fake Success",
            desc: "Re-reads the state after acting to confirm it truly changed, so a tool that claims it finished but did not gets caught instead of trusted."
          },
          {
            title: "Doesn't Spin Forever",
            desc: "Each agent has a retry budget, stop conditions, and a human escalation path, so a stuck handoff becomes visible instead of looping."
          },
          {
            title: "Blocks Bad Releases",
            desc: "Golden tests check retrieval, citations, safety, prediction, and agent handoff behavior before a change goes live."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Template path = $0 (zero LLM calls). LLM path = pay-per-token via Anthropic or OpenAI. Service runs in-memory; ~$1–2/month serverless when deployed.",
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
    tagline: "Power BI you can code-review — dbt + Fabric lakehouse + TMDL in git, where every claim maps to a file.",
    lane: "Data Eng",
    tags: ["Data Eng", "Cloud", "AI Platform"],
    cloud: "Azure",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-da",
    live: null,
    gif: "/healthcare-fabric-proof.png",
    icon: "layers",
    description: null,
    highlight: null,
    stats: [
      { value: "🏥 55.5K", label: "Encounters modeled" },
      { value: "🧱 TMDL", label: "Power BI as code" },
      { value: "🔌 11", label: "API routes" },
      { value: "📊 Fabric", label: "Lakehouse proof" }
    ],
    stack: ["Microsoft Fabric", "Power BI", "dbt", "FastAPI", "Python", "TMDL", "DAX", "MLflow", "Azure AD"],
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
        badge: "Git-reviewed Fabric stack",
        flow: ["dbt star schema", "TMDL in git", "Fabric validate", "Traceable BI"],
        built: [
          {
            title: "BI as Code",
            desc: "Certified Power BI measures + relationships live in git as TMDL — reviewed like application code, not buried in a binary."
          },
          {
            title: "Tested Before Pretty",
            desc: "dbt star schema with clinical data-quality tests runs before anything reaches a chart."
          },
          {
            title: "Fabric Receipts",
            desc: "Lakehouse + semantic-model validation captured as markdown proof — not a screenshot you have to trust."
          },
          {
            title: "Honest AUC",
            desc: "XGBoost baseline logged in MLflow with real metrics, honest about the limits of synthetic demo data."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Dev Fabric trial / local API — no PHI; demo dataset only.",
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
    slug: "financial-modeling-automation",
    title: "Financial Modeling Automation",
    tagline: "Fund economics that don't break at 2am — VC cap tables + LP/GP waterfalls in version-controlled Python, not a fragile spreadsheet.",
    lane: "Data Eng",
    tags: ["Automation"],
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/financial-modeling-automation",
    live: "https://huggingface.co/spaces/anixlynch/financial-modeling-automation",
    gif: "/excel-automation.gif",
    icon: "trending-up",
    description: null,
    highlight: null,
    stats: [
      { value: "⚡ 100×", label: "Faster than Excel" },
      { value: "🧾 VC", label: "Cap tables" },
      { value: "💧 Carry", label: "Waterfall calc" },
      { value: "🔁 100+", label: "Scenarios in seconds" }
    ],
    stack: ["Python", "Pandas", "NumPy", "openpyxl", "Plotly", "Jupyter", "DuckDB"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Excel by hand",
        flow: ["Fund terms", "Manual Excel", "Copy-paste cells", "Breaks at 2am"],
        problems: [
          "One wrong cell silently breaks the whole carry waterfall.",
          "Not version-controlled — no diff, no review, no audit trail.",
          "Can't rerun 100 exit scenarios without rebuilding the sheet.",
          "The model lives in one person's head and one fragile file."
        ]
      },
      after: {
        title: "After",
        badge: "Python fund engine",
        flow: ["Fund terms", "Python model", "Scenario matrix", "LP-ready report"],
        built: [
          {
            title: "Cap Table Engine",
            desc: "Pre/post-money, pro-rata, anti-dilution, option-pool shuffle — all automated, no fragile linked cells."
          },
          {
            title: "Waterfall Calc",
            desc: "Carried-interest distribution for European vs American waterfalls, reproducible on every run."
          },
          {
            title: "100 Scenarios, Seconds",
            desc: "Run 100+ exit scenarios in seconds, with Plotly charts ready for the LP report or IC deck."
          },
          {
            title: "Version-Controlled Math",
            desc: "Every assumption lives in git — diff it, review it, trust it. Not a mystery spreadsheet."
          }
        ]
      }
    },
    features: [],
    architecture: [],
    cost: "Free. Pure Python.",
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
      { value: "🗄️ 300", label: "Real openFDA FAERS reports" },
      { value: "💊 156", label: "Drugs tracked" },
      { value: "🚨 68.3%", label: "Serious adverse events" },
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
            status: "BOUNDARY",
            title: "Freshness Is Watched — scheduled detection",
            desc: "An independently scheduled Cloud Scheduler watchdog records when truth last moved. Recovery and escalation paths are exercised under controlled fault-injection tests — not yet a production cloud recovery (boundary stated, not green-washed)."
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
            desc: "/api/ask returns grounded answers from the redacted corpus with [doc N] citations and refuses when the evidence isn't there — instead of crawling raw adverse-event narratives."
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
            status: "BOUNDARY",
            title: "Governed, Reconciled — with stated boundaries",
            desc: "Row counts reconcile source → BigQuery on every load; a versioned data contract, audit ledger, column masking, and retention/deletion cover the lifecycle. Access control is a reduced-column authorized view — the restricted-identity denial test is a documented boundary, not yet proven."
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
  }
];
