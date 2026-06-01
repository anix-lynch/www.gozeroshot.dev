// src/data/projects-detailed.js
// One entry = one beautiful project page at /projects/[slug]
// Add { slug, title, ... } here → page auto-generates. That's it.

export const projects = [
  // ── NORTHSTAR ──────────────────────────────────────────────
  {
    slug: "healthcare-ai-platform-signals",
    title: "Healthcare AI Signal Engine",
    tagline: "Gives Gemini both trusted facts and computed signals, then shows how the decision changes.",
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
    description: null,
    highlight: null,
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
        badge: "Keyword-match AI",
        flow: ["Question", "Keyword search", "AI answer", "Limited insight"],
        problems: [
          "Can match words in past records, but it does not forecast LOS or read hidden risk.",
          "No Smoke Detector to catch arrival-rate anomaly.",
          "No Treasure Map to group the emergency-dominant cohort.",
          "No Traffic Light or Ranking to prioritize the action."
        ]
      },
      after: {
        title: "After",
        badge: "Truth + Signal AI",
        flow: ["Trusted facts", "5 signal services", "Gemini compares choices", "ACT NOW"],
        built: [
          {
            title: "Smoke Detector",
            desc: "Beds look fine, but arrivals are 1.8x baseline. The signal catches the cliff before the dashboard panics."
          },
          {
            title: "Treasure Map",
            desc: "Not just '4 ER arrivals' — it sees an emergency-dominant cohort forming in the waiting room."
          },
          {
            title: "Traffic Light",
            desc: "Turns vague risk into NOW / SOON / WAIT, so Gemini reasons with an urgency label instead of vibes."
          },
          {
            title: "Ranking",
            desc: "ICU-need cases rise to the top of the queue; the agent stops treating all arrivals as equal."
          },
          {
            title: "Find Similar Cases",
            desc: "Finds cases that match the chart's intent, even when the wording is different."
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
        flow: ["Patient question", "Evidence + risk", "Agent handoff", "Safer next step"],
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
            desc: "Routes the case from ER Triage to Bed Ops or Care Follow-up, so the next step has an owner instead of living in someone's head."
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
    tagline: "A data backbone that's actually deployed — dbt medallion on BigQuery (55 tests green), a quality gate that caught 5,500 bad rows, and an AI agent that only answers from the trusted marts.",
    lane: "Data Eng",
    tags: ["Data Eng", "Cloud"],
    cloud: "Vertex",
    laneColor: "#c4a8d8",
    status: "Production",
    github: "https://github.com/anix-lynch/healthcare-ai-data-engineer",
    live: "https://healthcare-ai-data-819957310168.us-west1.run.app/app",
    dataDocs: "/dashboards/ge/",
    gif: "/healthcare-ai-data-engineer.gif",
    icon: "database",
    description: null,
    highlight: null,
    stats: [
      { value: "🗄️ 55,500", label: "Rows live in BigQuery" },
      { value: "✅ 55/55", label: "dbt tests green" },
      { value: "🚨 5,500", label: "Dupes the gate caught" },
      { value: "🔖 [doc N]", label: "Grounded citations" }
    ],
    stack: ["Python", "dbt", "BigQuery", "BigQuery ML", "Pub/Sub", "Dataflow", "BigLake", "Cloud Monitoring", "FastAPI", "Vertex AI", "Gemini 2.5 Flash", "BM25", "Pandas", "pytest", "Docker", "GCP Cloud Run", "GitHub Actions"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "Scripts + a spreadsheet",
        flow: ["Raw data", "Ad-hoc scripts", "Untested tables", "Hope it's clean"],
        problems: [
          "Nothing catches the ~5,500 duplicate rows hiding in the raw feed.",
          "No quality gate before the AI agent reads the data.",
          "Dashboard numbers nobody can trace back to a file.",
          "Raw PII can leak straight into the narratives the model sees."
        ]
      },
      after: {
        title: "After",
        badge: "Tested warehouse + grounded agent",
        flow: ["BigQuery load", "dbt medallion", "7-check gate", "Grounded answer"],
        built: [
          {
            title: "Dupe Catcher",
            desc: "The unique test caught ~5,500 duplicate rows in the raw feed before they could poison anything downstream."
          },
          {
            title: "Green-or-Block CI",
            desc: "dbt build runs LIVE on BigQuery — 55/55 tests green (not_null, unique, FK, accepted_values) or the release fails. Not a local mock."
          },
          {
            title: "Every Number Traceable",
            desc: "A1–A6 cockpit where each displayed metric links to the repo file that proves it. The warehouse explorer reads live row counts from BigQuery."
          },
          {
            title: "Answers Only From Truth",
            desc: "/api/ask grounds Gemini on the redacted marts with [doc N] citations — never raw PII, and it refuses when the evidence is thin."
          },
          {
            title: "Senior Warehouse Moves",
            desc: "Partition + cluster cut a date-filtered scan 266x (1.76 MB → 6.6 KB). Incremental MERGE is idempotent (re-run = the same 50k rows, no dupes), a materialized view serves pre-aggregates, a BigLake external table reads straight from GCS, and a Cloud Monitoring log-metric watches the warehouse — the cost/perf discipline a senior warehouse is expected to show. All on free tier ($0)."
          },
          {
            title: "Real-Time + In-Warehouse ML",
            desc: "Native Pub/Sub→BigQuery streaming lands events on free tier ($0); a managed Dataflow Beam job was separately proven end-to-end and drained immediately (ephemeral, under $1). A BigQuery ML classifier trained next to the marts flags high-acuity encounters at ROC AUC 0.908 — no data export."
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
    tagline: "An ER triage assistant a customer can actually deploy — graded by acceptance contracts, not ML metrics. If a suicidal patient doesn't get human review, it isn't done.",
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
      { value: "🤝 21", label: "Tests — all green" },
      { value: "⚡ 39 ms", label: "/v1/ask p50" },
      { value: "🛑 HITL gate", label: "Stop before harm" },
      { value: "🔁 8-step agent", label: "Remembers where it left off" }
    ],
    stack: ["Python", "FastAPI", "LangGraph", "BM25", "Pydantic", "pytest", "OpenTelemetry", "Docker", "Cloud Run", "GitHub Actions", "Epic FHIR (mock)", "OAuth", "asciinema"],
    beforeAfter: {
      before: {
        title: "Before",
        badge: "ML metrics = done",
        flow: ["Model", "Good F1 score", "Ship it", "Customer breaks"],
        problems: [
          "A high F1 says nothing about whether a suicidal patient got human review.",
          "No runbook when it pages at 3am.",
          "No acceptance gate the customer can sign off on.",
          "No postmortem discipline when the integration drifts."
        ]
      },
      after: {
        title: "After",
        badge: "Customer-contract delivery",
        flow: ["Customer brief", "Acceptance gate", "Runbook + guardrails", "Deployed for real"],
        built: [
          {
            title: "Acceptance Gate, Not F1",
            desc: "21 tests as customer contracts — pediatric <1y floor, sepsis SIRS, suicidal-ideation human review, p95 < 800ms. Pass, or the deployment isn't done."
          },
          {
            title: "Agent That Remembers",
            desc: "8-step decision graph that saves its place. If the same case comes back mid-flow, it picks up where it left off — not from scratch."
          },
          {
            title: "Stop Button Before It's Too Late",
            desc: "High-risk decisions pause and wait for a human to approve or reject before anything goes back to the nurse. The AI doesn't just flag — it literally stops."
          },
          {
            title: "Tries Again Without Doubling Up",
            desc: "External calls fail all the time. The system retries automatically — and knows not to run the same call twice if the first one already went through."
          },
          {
            title: "Every Decision Leaves a Trail",
            desc: "Each triage call stamps what it decided, how confident it was, and how long it took — so on-call can see exactly what happened without digging through logs."
          },
          {
            title: "Fail-Loud Logging",
            desc: "Split-sink: metadata safe for cloud index, full PHI to a restricted archive — and it screams if the archive write fails."
          },
          {
            title: "Fail-Closed Auth",
            desc: "Admin endpoint needs a timing-safe bearer token. Token unset → 503. No accidental open door in production."
          },
          {
            title: "Runbook + Postmortem",
            desc: "P0–P3 alert ladder with exact curl commands, plus two real-shaped postmortems. Ops discipline, not vibes."
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
