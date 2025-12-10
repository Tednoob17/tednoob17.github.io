+++
title = 'Security Tags Guide - Understanding Vulnerability Categories'
date = 2025-12-10T01:00:00+01:00
draft = false
tags = ['documentation']
+++

# Security Vulnerability Tags Reference

This document provides a comprehensive overview of all available security tags in this blog, explaining what each vulnerability type represents and how the tagging system works.

## How the Tagging System Works

### Frontend Implementation

Tags are rendered using CSS classes defined in `/assets/css/custom.css`. Each tag has:
- A base class `.tag-pin` with default styling
- A specific class `.tag-[tagname]` for custom colors
- Automatic page generation by Hugo

```css
.tag-pin {
    display: inline-block;
    padding: 0.1em 0.6em;
    margin-left: 0.5em;
    font-size: 0.6em;
    background-color: #3498db; /* Default blue */
    color: #ffffff;
    border-radius: 1em;
    /* ... */
}

/* Specific tag override */
.tag-pin.tag-xss { 
    background-color: #e74c3c; /* Red for XSS */
}
```

### Backend Implementation

Hugo processes tags from the front matter:

```toml
+++
title = 'Your Article Title'
tags = ['websec', 'xss', 'sqli']
+++
```

When Hugo builds the site:
1. **Parses front matter** - Extracts the `tags` array
2. **Generates tag pages** - Creates `/tags/[tagname]/` for each unique tag
3. **Creates indexes** - Builds `/tags/` listing all tags
4. **Links posts** - Associates all posts with the same tag
5. **Generates RSS** - Creates feeds for each tag

The template in `/layouts/_default/list.html` renders tags:

```html
{{ range .Params.tags }}
    <span class="tag-pin tag-{{ . }}">{{ . }}</span>
{{ end }}
```

This generates HTML like:
```html
<span class="tag-pin tag-xss">xss</span>
<span class="tag-pin tag-sqli">sqli</span>
```

## Available Vulnerability Tags

### Injection Vulnerabilities

#### `xss` - Cross-Site Scripting
**Color:** Red (#e74c3c)  
**Description:** Injection of malicious scripts into web pages viewed by other users. Allows attackers to bypass access controls and steal sensitive data.

**Example scenarios:**
- Stored XSS in user comments
- Reflected XSS in search parameters
- DOM-based XSS in client-side JavaScript

---

#### `sqli` - SQL Injection
**Color:** Red (#e74c3c)  
**Description:** Injection of malicious SQL queries to manipulate database operations, potentially exposing, modifying, or deleting data.

**Example scenarios:**
- Authentication bypass
- Data exfiltration via UNION queries
- Blind SQL injection with boolean/time-based techniques

---

#### `xxe` - XML External Entity
**Color:** Dark Red (#c0392b)  
**Description:** Exploitation of XML parsers to read local files, perform SSRF attacks, or cause denial of service.

**Example scenarios:**
- Local file disclosure via external entities
- SSRF through XML parsing
- Billion laughs attack (XML bomb)

---

#### `os-command-injection` - OS Command Injection
**Color:** Dark Red (#c0392b)  
**Description:** Injection of operating system commands through application inputs, leading to arbitrary command execution.

**Example scenarios:**
- Shell command injection in file operations
- Command chaining with semicolons or pipes
- Blind command injection with time delays

---

#### `ssti` - Server-Side Template Injection
**Color:** Red (#c0392b)  
**Description:** Injection into template engines allowing arbitrary code execution on the server.

**Example scenarios:**
- Jinja2 template injection in Python
- Twig injection in PHP
- FreeMarker injection in Java

---

#### `nosql` - NoSQL Injection
**Color:** Orange (#e67e22)  
**Description:** Injection attacks targeting NoSQL databases like MongoDB, allowing query manipulation and authentication bypass.

**Example scenarios:**
- MongoDB query injection with `$ne`, `$gt` operators
- Authentication bypass with operator injection
- Data extraction through regex injection

---

### Authentication & Authorization

#### `authentication` - Authentication Vulnerabilities
**Color:** Green (#2ecc71)  
**Description:** Flaws in how applications verify user identity.

**Example scenarios:**
- Weak password policies
- Broken password reset mechanisms
- Session fixation attacks
- Credential stuffing vulnerabilities

---

#### `oauth-authentication` - OAuth Authentication Issues
**Color:** Midnight Blue (#2c3e50)  
**Description:** Vulnerabilities in OAuth implementation allowing account takeover or unauthorized access.

**Example scenarios:**
- Missing state parameter validation
- Open redirect in redirect_uri
- Client secret exposure

---

#### `jwt` - JSON Web Token Vulnerabilities
**Color:** Purple (#8e44ad)  
**Description:** Security issues in JWT implementation and validation.

**Example scenarios:**
- Algorithm confusion (HS256 vs RS256)
- Missing signature verification
- Weak secret keys

---

#### `access-control` - Access Control Vulnerabilities
**Color:** Green Sea (#16a085)  
**Description:** Failures in enforcing proper authorization, allowing users to access unauthorized resources.

**Example scenarios:**
- Insecure Direct Object References (IDOR)
- Horizontal/vertical privilege escalation
- Missing function-level access control

---

### Web-Specific Vulnerabilities

#### `cors` - Cross-Origin Resource Sharing
**Color:** Blue (#3498db)  
**Description:** Misconfigurations allowing unauthorized cross-origin access to sensitive resources.

**Example scenarios:**
- Wildcard origin with credentials
- Null origin acceptance
- Regex bypass in origin validation

---

#### `dom-based` - DOM-Based Vulnerabilities
**Color:** Purple (#9b59b6)  
**Description:** Client-side vulnerabilities where the attack payload is executed through DOM manipulation.

**Example scenarios:**
- DOM XSS via location.hash
- Client-side open redirect
- Unsafe use of innerHTML

---

#### `clickjacking` - Clickjacking
**Color:** Turquoise (#1abc9c)  
**Description:** UI redressing attacks tricking users into clicking on hidden elements.

**Example scenarios:**
- Missing X-Frame-Options header
- Insufficient Content-Security-Policy
- Transparent iframe overlay attacks

---

#### `websockets` - WebSocket Vulnerabilities
**Color:** Dark Gray (#34495e)  
**Description:** Security issues in WebSocket implementations.

**Example scenarios:**
- Missing origin validation
- Cross-Site WebSocket Hijacking (CSWSH)
- Message injection

---

### Advanced Exploitation

#### `prototype-pollution` - Prototype Pollution
**Color:** Orange (#e67e22)  
**Description:** JavaScript vulnerability allowing modification of Object prototypes, potentially leading to RCE or privilege escalation.

**Example scenarios:**
- Merging untrusted objects
- Pollution through `__proto__`
- Gadget chain exploitation

---

#### `insecure-deserialization` - Insecure Deserialization
**Color:** Pumpkin (#d35400)  
**Description:** Exploitation of deserialization processes to execute arbitrary code.

**Example scenarios:**
- Java deserialization with ysoserial
- Python pickle exploitation
- PHP unserialize vulnerabilities

---

#### `race-condition` - Race Condition
**Color:** Red (#e74c3c)  
**Description:** Time-of-check to time-of-use vulnerabilities exploiting timing windows.

**Example scenarios:**
- Concurrent requests bypassing rate limits
- Double spending in payment systems
- Parallel session exploitation

---

### Server-Side Attacks

#### `ssrf` - Server-Side Request Forgery
**Color:** Purple (#9b59b6)  
**Description:** Forcing the server to make requests to internal or external resources.

**Example scenarios:**
- Internal network scanning
- Cloud metadata access (AWS, Azure, GCP)
- Reading local files via file:// protocol

---

#### `http-request-smuggling` - HTTP Request Smuggling
**Color:** Wet Asphalt (#34495e)  
**Description:** Exploiting differences in HTTP parsing between frontend and backend servers.

**Example scenarios:**
- CL.TE desync attacks
- TE.CL desync attacks
- Cache poisoning via smuggling

---

#### `http-host-header-attack` - HTTP Host Header Attack
**Color:** Belize Hole (#2980b9)  
**Description:** Manipulation of the Host header to poison caches or bypass security controls.

**Example scenarios:**
- Password reset poisoning
- Web cache poisoning
- Virtual host confusion

---

### Caching & API Vulnerabilities

#### `web-cache-poisoning` - Web Cache Poisoning
**Color:** Turquoise (#1abc9c)  
**Description:** Injecting malicious content into web caches to serve to other users.

**Example scenarios:**
- Unkeyed header exploitation
- Cache key poisoning
- Stored XSS via cache

---

#### `web-cache-deception` - Web Cache Deception
**Color:** Green Sea (#16a085)  
**Description:** Tricking caches into storing private information as public content.

**Example scenarios:**
- Path confusion attacks
- Extension-based cache deception
- Static resource poisoning

---

#### `api-testing` - API Security Testing
**Color:** Peter River (#3498db)  
**Description:** Vulnerabilities specific to API implementations and endpoints.

**Example scenarios:**
- Mass assignment
- Excessive data exposure
- Lack of rate limiting

---

#### `graphql` - GraphQL Vulnerabilities
**Color:** Concrete (#95a5a6)  
**Description:** Security issues in GraphQL API implementations.

**Example scenarios:**
- Introspection abuse
- Deep nested queries (DoS)
- Batching attacks

---

### File & Path Vulnerabilities

#### `file-upload` - File Upload Vulnerabilities
**Color:** Green (#27ae60)  
**Description:** Insecure file upload mechanisms allowing malicious file execution.

**Example scenarios:**
- Bypassing file type validation
- Web shell upload
- Double extension exploitation

---

#### `path-traversal` - Path Traversal
**Color:** Sun Flower (#f1c40f)  
**Description:** Accessing files outside the intended directory structure.

**Example scenarios:**
- Directory traversal with ../
- Absolute path exploitation
- Null byte injection

---

### Business Logic & Modern Attacks

#### `business-logic` - Business Logic Vulnerabilities
**Color:** Orange (#f39c12)  
**Description:** Flaws in application workflow allowing unintended behaviors.

**Example scenarios:**
- Price manipulation
- Workflow bypass
- Negative quantity exploitation

---

#### `web-llm-attacks` - Web LLM Attacks
**Color:** Wisteria (#8e44ad)  
**Description:** Attacks targeting Large Language Models integrated into web applications.

**Example scenarios:**
- Prompt injection
- Training data extraction
- Jailbreaking AI models

---

## Using Tags in Your Posts

### Single Tag
```toml
tags = ['xss']
```

### Multiple Tags
```toml
tags = ['websec', 'xss', 'sqli', 'authentication']
```

### Best Practices
1. **Be specific** - Use the most accurate tags for the vulnerability
2. **Don't over-tag** - Use 2-5 relevant tags per article
3. **Use lowercase** - All tags should be lowercase with hyphens
4. **Maintain consistency** - Use the same tag for similar vulnerabilities across posts

## Tag Color Reference

| Tag | Color | Hex Code |
|-----|-------|----------|
| xss | Red | #e74c3c |
| sqli | Red | #e74c3c |
| xxe | Dark Red | #c0392b |
| ssti | Red | #c0392b |
| os-command-injection | Dark Red | #c0392b |
| cors | Blue | #3498db |
| api-testing | Blue | #3498db |
| dom-based | Purple | #9b59b6 |
| ssrf | Purple | #9b59b6 |
| jwt | Purple | #8e44ad |
| web-llm-attacks | Purple | #8e44ad |
| prototype-pollution | Orange | #e67e22 |
| nosql | Orange | #e67e22 |
| business-logic | Orange | #f39c12 |
| insecure-deserialization | Pumpkin | #d35400 |
| clickjacking | Turquoise | #1abc9c |
| web-cache-poisoning | Turquoise | #1abc9c |
| websockets | Dark Gray | #34495e |
| http-request-smuggling | Dark Gray | #34495e |
| access-control | Green Sea | #16a085 |
| web-cache-deception | Green Sea | #16a085 |
| file-upload | Green | #27ae60 |
| authentication | Green | #2ecc71 |
| http-host-header-attack | Blue | #2980b9 |
| oauth-authentication | Midnight Blue | #2c3e50 |
| race-condition | Red | #e74c3c |
| graphql | Gray | #95a5a6 |
| path-traversal | Yellow | #f1c40f |

## How Hugo Generates Tag Pages

When you build your site with `hugo`, the following happens automatically:

1. **Individual tag pages**: `/tags/xss/` lists all posts tagged with "xss"
2. **Tag index**: `/tags/` shows all available tags
3. **RSS feeds**: `/tags/xss/index.xml` provides an RSS feed for that tag
4. **Automatic linking**: Posts are cross-referenced by shared tags

No configuration needed - just add tags to your posts and Hugo does the rest!
