# Portfolio Repo Cleanup Workflow

## 📋 Overview

This workflow safely archives important files before cleaning up unprofessional content from portfolio repos.

## 🔄 Step-by-Step Process

### Step 1: Archive Files Locally

Archive all files that will be removed (so you can review them):

```bash
./scripts/archive-all-repos.sh
```

This creates a local archive at: `~/repo-cleanup-archive/`

Each repo gets its own folder with:
- All removed files
- README_BEFORE_CLEANUP.md (original README)
- MANIFEST.txt (list of archived files)

### Step 2: Review Archived Files

```bash
cd ~/repo-cleanup-archive
ls -la
# Review each repo's archived files
```

### Step 3: (Optional) Push Archive to Private GitHub Repo

If you want to backup the archive to GitHub:

```bash
./scripts/create-archive-repo.sh
```

This creates a private repo: `portfolio-cleanup-archive`

### Step 4: Clean Up Individual Repos

After reviewing archives, clean up each repo:

```bash
# Example: Clean coffeeverse
./scripts/fix-repo-issues.sh coffeeverse

# Then review changes and commit:
cd /tmp/repo-fix-coffeeverse
git status
git add .
git commit -m "Clean: Remove unprofessional files"
git push
```

Or clean all at once:

```bash
for repo in coffeeverse cocktailverse ai-agent-job-intelligence-phase-2; do
  ./scripts/fix-repo-issues.sh "$repo"
done
```

## 📁 Archive Structure

```
~/repo-cleanup-archive/
├── coffeeverse/
│   ├── AZURE_CREDENTIALS.md
│   ├── AZURE_AUTH_SETUP.md
│   ├── README_BEFORE_CLEANUP.md
│   └── MANIFEST.txt
├── cocktailverse/
│   ├── QUICK_SECRET_TEST.md
│   └── ...
└── ...
```

## ⚠️ Important Notes

- **Archives are local by default** - Review before pushing to GitHub
- **Cleanup script checks for archive** - Won't delete if archive doesn't exist
- **All files preserved** - Nothing is permanently lost
- **Review READMEs manually** - Script doesn't auto-edit READMEs

## 🎯 What Gets Removed

- `*CREDENTIALS*.md` - Credential setup files
- `*AUTH*.md` - Auth setup guides
- `*TEST*.md` - Test files
- `*FIX*.md` - Debug files
- `*CHECKLIST*.md` - Internal checklists
- `*STATUS*.md` - Status tracking
- `QUICKSTART.md` - Beginner guides
- `deploy_placeholder.sh` - Placeholder files
- `.DS_Store` - macOS system files

## ✅ After Cleanup

1. Review cleaned repos
2. Update READMEs to remove beginner language
3. Update repo descriptions
4. Commit and push changes

