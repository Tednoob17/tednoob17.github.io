#!/usr/bin/env bash
set -euo pipefail

DIR="/workspaces/tednoob17.github.io/static/images/Zushiboyz Merch"

if [[ ! -d "$DIR" ]]; then
  echo "Directory not found: $DIR" >&2
  exit 1
fi

cd "$DIR"

for f in *; do
  [[ -f "$f" ]] || continue

  ext="${f##*.}"
  base="${f%.*}"

  # Normalize hidden chars and spacing while preserving readable names.
  clean_base="$(printf '%s' "$base" \
    | tr '\r\n\t' '   ' \
    | sed -E 's/[[:cntrl:]]+/ /g; s/[[:space:]]+/ /g; s/^ +| +$//g')"

  clean_ext="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"
  new_name="${clean_base}.${clean_ext}"

  if [[ "$new_name" == "$f" ]]; then
    continue
  fi

  if [[ -e "$new_name" ]]; then
    i=2
    candidate="${clean_base}-${i}.${clean_ext}"
    while [[ -e "$candidate" ]]; do
      i=$((i + 1))
      candidate="${clean_base}-${i}.${clean_ext}"
    done
    new_name="$candidate"
  fi

  mv -- "$f" "$new_name"
  printf 'RENAMED: %q -> %q\n' "$f" "$new_name"
done

echo "Done. Filenames normalized in: $DIR"
