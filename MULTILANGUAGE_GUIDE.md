# Guide Multi-Langues / Multi-Language Guide

## English Version

### How to use the multi-language feature

Your site now supports multiple languages with a language switcher button in the header. The setup supports English and French.

#### File Structure

```
content/
├── en/          # English content
│   ├── _index.md
│   ├── posts/
│   ├── about/
│   └── ... (other sections in English)
└── fr/          # French content
    ├── _index.md
    ├── posts/
    ├── about/
    └── ... (other sections in French)
```

#### How to Add Content

1. **English Content**: Place files in `content/en/`
2. **French Content**: Place files in `content/fr/`

#### Example: Adding a Post

**English** (`content/en/posts/my-post.md`):
```markdown
---
title: "My Post Title"
date: 2024-01-15
draft: false
---

Content in English...
```

**French** (`content/fr/posts/my-post.md`):
```markdown
---
title: "Titre de Mon Article"
date: 2024-01-15
draft: false
---

Contenu en français...
```

#### Important Notes

- **Technical Terms**: Keep technical terms, product names, and code unchanged
- **Names & Dates**: These should match across translations
- **URLs**: Structure remains the same; French content is accessed via `/fr/`
- **Language Switcher**: Appears in the header as a globe icon with language name

---

## Version Française

### Comment utiliser la fonctionnalité multilingue

Votre site supporte maintenant plusieurs langues avec un bouton de sélection de langue dans l'en-tête. La configuration supporte l'anglais et le français.

#### Structure des Fichiers

```
content/
├── en/          # Contenu en anglais
│   ├── _index.md
│   ├── posts/
│   ├── about/
│   └── ... (autres sections en anglais)
└── fr/          # Contenu en français
    ├── _index.md
    ├── posts/
    ├── about/
    └── ... (autres sections en français)
```

#### Comment Ajouter du Contenu

1. **Contenu Anglais**: Placez les fichiers dans `content/en/`
2. **Contenu Français**: Placez les fichiers dans `content/fr/`

#### Exemple: Ajouter un Article

**Anglais** (`content/en/posts/my-post.md`):
```markdown
---
title: "My Post Title"
date: 2024-01-15
draft: false
---

Content in English...
```

**Français** (`content/fr/posts/my-post.md`):
```markdown
---
title: "Titre de Mon Article"
date: 2024-01-15
draft: false
---

Contenu en français...
```

#### Points Importants

- **Termes Techniques**: Conservez les termes techniques, noms de produits et code sans changement
- **Noms et Dates**: Doivent correspondre entre les traductions
- **URLs**: La structure reste la même ; le contenu français est accessible via `/fr/`
- **Sélecteur de Langue**: Apparaît dans l'en-tête comme une icône de globe avec le nom de la langue

---

## Migration Guide (Moving Existing Content)

If you want to migrate your existing English content to the new `content/en/` directory:

```bash
cd /workspaces/tednoob17.github.io

# Move current content to en/ subdirectory
mv content/_index.md content/en/_index.md
mv content/about content/en/about
mv content/posts content/en/posts
mv content/blogs content/en/blogs
# ... continue for all sections

# Then create French translations in content/fr/
```

### What Gets Generated

- **English**: `https://tednoob17.github.io/` and subdirectories
- **French**: `https://tednoob17.github.io/fr/` and subdirectories

The language switcher automatically handles redirects between these URLs.
