#!/bin/bash

cd /workspaces/tednoob17.github.io/content

# Déplacer tous les fichiers/dossiers existants vers en/
for item in _index.md 42 about achievements art blogs book-reviews contact friends music posts; do
  if [ -e "$item" ] && [ ! -e "en/$item" ]; then
    echo "Déplacement de $item vers en/"
    mv "$item" "en/$item" 2>/dev/null || cp -r "$item" "en/$item" 2>/dev/null
  fi
done

echo "✅ Déplacement terminé!"
echo "Contenu de content/:"
ls -la
echo ""
echo "Contenu de content/en/:"
ls -la en/
