# Anix Lynch — AI Platform / GenAI Engineer

**I build the trust-to-action stack: trusted data → features → evaluated signals → agent actions → accountable human decisions.** Live, evaluated systems on Cloud Run + Vertex AI — not demos.

[![Portfolio](https://img.shields.io/badge/Portfolio-gozeroshot.dev-blue?style=for-the-badge&logo=vercel)](https://gozeroshot.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/anixlynch/)

> This repo hosts the portfolio site `gozeroshot.dev`. The projects are organized by the **L1→L3 architecture** — each layer answers one question, and the strongest roles bridge layers.

## 📂 Showroom — by layer

| Layer | Question | Project (live) | Proof |
|-------|----------|----------------|-------|
| **L1 Truth + L1.25 Context** | Can we trust the data? How should machines see it? | [healthcare-ai-data-engineer](https://github.com/anix-lynch/healthcare-ai-data-engineer) | dbt medallion on BigQuery (55 tests) + **Feast** feature store · quality gate · PII masking |
| **L1.5 Signals** ★ | What might happen? | [healthcare-signal-platform](https://github.com/anix-lynch/healthcare-signal-platform) · [live console](https://signal-console-819957310168.us-west1.run.app) | 5 evaluated signals → agent · anomaly **F1 0.85** · ablation flips the call **WATCH→ACT NOW** · [W&B](https://wandb.ai/alynch-zeroshot/healthcare-l15-signals) |
| **L2 Action** | What should the system do? | [healthcare-genai-engineer](https://github.com/anix-lynch/healthcare-genai-engineer) · [pied-piper-legal](https://github.com/anix-lynch/pied-piper-legal-simulator) · [mocktailverse-bedrock](https://github.com/anix-lynch/mocktailverse-bedrock) | RAG · hybrid retrieval · PII guardrails · CI eval gate |
| **L3 Influence** | Will humans adopt it? | [healthcare-forward-deployed-engineer](https://github.com/anix-lynch/healthcare-forward-deployed-engineer) | VPC deploy · runbook · postmortems · human Approve/Override |
| **L1 / BI / Automation** | — | [healthcare-analytics-fabric](https://github.com/anix-lynch/healthcare-da) · [financial-modeling-automation](https://github.com/anix-lynch/financial-modeling-automation) · realtime-fraud-detection | Microsoft Fabric medallion + semantic model · PE/VC modeling · real-time risk signals |

**The flagship proves the thesis:** the live Signal Console runs an *ablation* — the same Gemini agent decides with vs without the signals; the recommendation visibly flips. Signals change the decision, they don't decorate it. Full story per layer at **[gozeroshot.dev](https://gozeroshot.dev)**.

## 🛠️ Website
Astro static site · Vercel · French Coastal design system · responsive.

```bash
src/
├── components/        # Layout, Sidebar, ProjectCard
├── data/              # projects-detailed.js  ← one entry = one project page
├── pages/             # index · projects/[slug] · certifications · leadership · press · speaking
└── styles/            # global CSS / design tokens
public/                # screenshots, gifs, resume
```

*MBA, University of Chicago Booth · JLPT N1 · Authorized to work in the US (Green Card)*
