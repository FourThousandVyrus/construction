#!/usr/bin/env bash
# Run lint + build for a Node/Next.js project and print a clear pass/fail summary.
# Usage: scripts/verify.sh [path-to-project]

set -uo pipefail

PROJECT_DIR="${1:-.}"
cd "$PROJECT_DIR" || { echo "Cannot cd into $PROJECT_DIR"; exit 1; }

echo "=== Project: $(pwd) ==="

if [ ! -d node_modules ]; then
  echo "--- node_modules missing, running npm install ---"
  npm install
fi

OVERALL=0

echo ""
echo "--- npm run lint ---"
if npm run lint; then
  echo "[PASS] lint"
else
  echo "[FAIL] lint"
  OVERALL=1
fi

if [ -f tsconfig.json ]; then
  echo ""
  echo "--- tsc --noEmit ---"
  if npx tsc --noEmit; then
    echo "[PASS] typecheck"
  else
    echo "[FAIL] typecheck"
    OVERALL=1
  fi
fi

echo ""
echo "--- npm run build ---"
if npm run build; then
  echo "[PASS] build"
else
  echo "[FAIL] build"
  OVERALL=1
fi

echo ""
if [ "$OVERALL" -eq 0 ]; then
  echo "=== ALL CHECKS PASSED ==="
else
  echo "=== ONE OR MORE CHECKS FAILED — fix and rerun ==="
fi

exit $OVERALL
