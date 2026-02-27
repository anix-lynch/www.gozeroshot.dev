# Portfolio Repo Cleanup Instructions

## ⚠️ Important: Archived Repos are Read-Only

GitHub archived repos are **read-only** and cannot be pushed to directly. We need to unarchive them first via GitHub web UI.

## 🔄 Complete Workflow

### Step 1: Archive Files (Backup First)
```bash
./scripts/archive-before-cleanup.sh <repo-name>
```
This saves files locally AND pushes to recovery repo (private).

### Step 2: Unarchive Repo (GitHub Web UI)
1. Go to: https://github.com/anix-lynch/<repo-name>/settings
2. Scroll to "Danger Zone"
3. Click "Unarchive this repository"
4. Confirm

### Step 3: Clean Up Locally
```bash
./scripts/fix-repo-issues.sh <repo-name>
```

### Step 4: Commit & Push
The script creates changes in `/tmp/repo-fix-<repo-name>/`. After unarchiving:
```bash
cd /tmp/repo-fix-<repo-name>
git add -A
git commit -m "Clean: Remove unprofessional files"
git push origin main
```

### Step 5: Re-archive (GitHub Web UI)
1. Go to: https://github.com/anix-lynch/<repo-name>/settings
2. Scroll to "Danger Zone"
3. Click "Archive this repository"
4. Confirm

## 🚀 Automated Alternative (Using GitHub API)

Or use the automated script that handles unarchive/archive:
```bash
./scripts/cleanup-with-unarchive.sh <repo-name>
```

This uses GitHub API to unarchive → cleanup → re-archive automatically.

## 📋 Repos to Clean

1. ✅ coffeeverse - Files archived, ready to clean
2. cocktailverse - 3 files (QUICK_SECRET_TEST.md, SANDBOX_FIX.md, DEPLOY_CHECKLIST.md)
3. ai-agent-job-intelligence-phase-2 - Update description
4. silicon-beach-ai-jobs - Clean structure
5. realtime-fraud-detection - Remove placeholder
6. mocktailverse-bedrock - Clean README
7. multimodal-genai-studio - Clean README
8. ai-bi-agent - Clean README
9. pied-piper-legal-simulator - Clean README
10. churn-ml-pipeline - Clean README

## ✅ Safety Guarantees

- ✅ All files backed up locally
- ✅ All files backed up to recovery repo (private)
- ✅ Only documentation files removed (not code)
- ✅ Code reference check before removal
- ✅ Can recover from backup anytime






