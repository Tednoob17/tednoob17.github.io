+++
title = "Translation Example - Blog Article"
date = 2024-01-15
description = "Example of how to translate blog articles while preserving technical terms"
tags = ["example", "tutorial"]
draft = false
+++

## How to Translate Articles

This example shows the best practices for translating technical blog posts while keeping technical terms, names, and code unchanged.

### Key Preservation Rules

1. **Technical Terms** - Keep as-is:
   - CVE numbers (CVE-2022-25647)
   - Programming languages (Python, JavaScript, x86-64)
   - OS names (Windows, Linux, Ubuntu)
   - Tool names

2. **Names & Dates** - Never translate:
   - Author names
   - Product names (Google, Microsoft)
   - Person names
   - Dates and timezones

3. **Code & Examples** - Always preserve:
   - Code snippets
   - Commands
   - File paths
   - Configuration values

### Example Code

```python
# This code stays the same in all languages
def analyze_vulnerability(CVE_ID):
    """
    Analyze security vulnerability.
    CVE format: CVE-YYYY-XXXXX
    """
    return process_security_data(CVE_ID)
```

### When Translating

✅ **DO Translate:**
- Page titles and descriptions
- Explanatory text
- Commentary
- Navigation labels
- Introductions and conclusions

❌ **DON'T Translate:**
- URLs and file paths
- Code snippets
- Technical acronyms (CVE, DNS, API, JSON, etc.)
- Product names
- Person/company names
- Code variable names

## File Structure

For each article that needs translation, create two files:

**English** → `content/en/posts/article-name.md`
**French** → `content/fr/posts/article-name.md`

The filename should be the same, but the content is translated!

---

**Ready to add translations?** Check [MULTILANGUAGE_GUIDE.md](../../../MULTILANGUAGE_GUIDE.md) for complete instructions!
