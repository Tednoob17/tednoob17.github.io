+++
title = "Exemple de Traduction - Article de Blog"
date = 2024-01-15
description = "Exemple de comment traduire des articles de blog techniques tout en préservant les termes techniques"
tags = ["exemple", "tutoriel"]
draft = false
+++

## Comment Traduire des Articles

Cet exemple montre les meilleures pratiques pour traduire des articles de blog techniques tout en conservant les termes techniques, les noms et le code inchangés.

### Règles de Préservation Clés

1. **Termes Techniques** - Conserver tels quels:
   - Numéros CVE (CVE-2022-25647)
   - Langages de programmation (Python, JavaScript, x86-64)
   - Noms d'OS (Windows, Linux, Ubuntu)
   - Noms d'outils

2. **Noms et Dates** - Ne jamais traduire:
   - Noms d'auteurs
   - Noms de produits (Google, Microsoft)
   - Noms de personnes
   - Dates et fuseaux horaires

3. **Code et Exemples** - Toujours préserver:
   - Fragments de code
   - Commandes
   - Chemins de fichiers
   - Valeurs de configuration

### Exemple de Code

```python
# Ce code reste le même dans toutes les langues
def analyze_vulnerability(CVE_ID):
    """
    Analyser la vulnérabilité de sécurité.
    Format CVE: CVE-YYYY-XXXXX
    """
    return process_security_data(CVE_ID)
```

### Lors de la Traduction

✅ **À TRADUIRE:**
- Titres et descriptions des pages
- Texte explicatif
- Commentaires
- Étiquettes de navigation
- Introductions et conclusions

❌ **NE PAS TRADUIRE:**
- URLs et chemins de fichiers
- Fragments de code
- Acronymes techniques (CVE, DNS, API, JSON, etc.)
- Noms de produits
- Noms de personnes/entreprises
- Noms de variables de code

## Structure des Fichiers

Pour chaque article nécessitant une traduction, créez deux fichiers:

**Anglais** → `content/en/posts/article-name.md`
**Français** → `content/fr/posts/article-name.md`

Le nom de fichier doit être le même, mais le contenu est traduit!

---

**Prêt à ajouter des traductions?** Consultez [MULTILANGUAGE_GUIDE.md](../../../MULTILANGUAGE_GUIDE.md) pour les instructions complètes!
