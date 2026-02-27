# GitHub Repository Cleanup Summary

## ✅ Protected Portfolio Repos (17)
These repos are archived and protected from deletion:

1. www.gozeroshot.dev
2. www.anixlynch.com
3. gozeroshot.dev
4. mocktailverse-bedrock
5. ai-agent-job-intelligence-phase-2
6. coffeeverse
7. cocktailverse
8. pied-piper-legal-simulator
9. churn-ml-pipeline
10. realtime-fraud-detection
11. multimodal-genai-studio
12. ai-bi-agent
13. financial-modeling-automation
14. silicon-beach-ai-jobs
15. marketing-analytics-etl
16. Certification
17. anix-lynch (HuggingFace portfolio)

---

## ❓ Repos for Deletion Review (48)

### Likely Safe to Delete (Old/Test/Redundant):
- **ai-agent-job-intelligence** (old version, phase-2 is the current one)
- **mocktailverse** (old version, mocktailverse-bedrock is current)
- **silicon-beach-jobs-clean** (duplicate of silicon-beach-ai-jobs)
- **marketing-etl** (duplicate of marketing-analytics-etl)
- **anixlynch.github.io** (old portfolio)
- **anix-lynch.github.io** (old portfolio)
- **anixlynch-site** (old portfolio)
- **anixlynch** (old/duplicate)
- **portfolio-2025** (old portfolio)
- **astro-resume-01** (old resume)
- **astro-theme-resume** (old resume)
- **resume-app** (old resume)
- **resume-mcp** (old resume)
- **anix.ngrok.app** (test/ngrok)
- **Replitgittest** (test repo)
- **websites** (unclear purpose)

### Automation/Utility Scripts (Review):
- **onedrive-automation**
- **google-drive-organizer-supreme**
- **microsoft-graph-mailmerge**
- **job-application-autofill-magic**
- **pdf-reader-ai-qa**
- **retrieval-qa-transformer**

### MCP Servers (Review):
- **boss-baby-mcp** ⚠️ **KEEP** - Public MCP server, might be in use
- **boss-baby** [PRIVATE] - Safe to delete (HuggingFace Spaces don't depend on GitHub repos)
- **boss-baby-v1** [PRIVATE] - Safe to delete (old version)
- **himalayas-mcp-docker**
- **powerbi-mcp-servers**

**Note:** HuggingFace Spaces (boss-baby-emotion, boss-baby-voice-clone, bossbaby-decaf-space) are **self-contained** and don't depend on GitHub repos. They have their own code repository on HuggingFace.

### Data Science Projects (Made Private - Uncertain if Duplicates):
- ✅ **GCP-ETL-Pipeline-Dataflow-BigQuery** [NOW PRIVATE] (might be duplicate of cocktailverse)
- ✅ **Global-Superstore-Data-Modeling-Analysis** [NOW PRIVATE]
- ✅ **demand-forecast-pyspark** [NOW PRIVATE]
- ✅ **data-quality-monitor** [NOW PRIVATE]
- ✅ **takehome3-data-quality** [NOW PRIVATE]
- ✅ **metabase-marketing-analytics** [NOW PRIVATE]
- ✅ **ai-bi-dashboard** [NOW PRIVATE] (might be duplicate of ai-bi-agent)
- **nvidia-rapids-gpu-data-science**
- **nvidia-gpu-accelerated-data-science**

### Other Projects (Made Private - Uncertain if Duplicates):
- ✅ **kalasin-map** [NOW PRIVATE]
- ✅ **SQL-Interview-Portfolio** [NOW PRIVATE]
- **audio-dna-web**
- **jobtracker_duckdb**
- **knowledge-vault-setup**

### Private Repos (Review - might want to keep private):
- **recovery** [PRIVATE]
- **boss-baby-v1** [PRIVATE]
- **boss-baby** [PRIVATE]
- **ai-conversation-library** [PRIVATE]
- **Smoothieverse_Before_TickTick** [PRIVATE]
- **smoothieverse** [PRIVATE]
- **llm-dbt-kaggle** [PRIVATE]
- **fatherfigure** [PRIVATE]
- **the-91-walk-of-fame** [PRIVATE]

---

## 🛠️ How to Delete Repos

### Single Repo:
```bash
./scripts/delete-repo.sh <repo-name>
```

### Batch Delete (Example):
```bash
# Review first, then delete
./scripts/delete-repo.sh ai-agent-job-intelligence
./scripts/delete-repo.sh mocktailverse
./scripts/delete-repo.sh silicon-beach-jobs-clean
# ... etc
```

### List All Repos for Review:
```bash
./scripts/list-repos-for-deletion.sh
```

---

## 📊 Summary
- **Total Repos:** 65
- **Protected:** 17 (archived)
- **For Review:** 48
- **Recommended to Delete:** ~30-35 (old/duplicate/test repos)

