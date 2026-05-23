# RnzeCorporation App Store & Distribution Hub

A professional App Store & Distribution Hub built with React, Vite, and Tailwind CSS. Features a cinematic, premium dark-mode aesthetic with glassmorphism effects inspired by DreamWorks-style design.

---

## Cloudflare Integration Guide

This guide covers how to connect your domain to Cloudflare for full DDoS protection, WAF, Bot Management, and CDN acceleration.

---

### Step 1: Add Your Domain to Cloudflare

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **"Add a Site"** and enter your domain (e.g., `rnzecorporation.com`)
3. Select the **Free** or **Pro** plan (Pro recommended for WAF access)
4. Cloudflare will scan your existing DNS records — review and confirm them
5. Cloudflare will provide you with **two nameservers**, e.g.:
   ```
   alice.ns.cloudflare.com
   bob.ns.cloudflare.com
   ```
6. Go to your domain registrar (GoDaddy, Namecheap, etc.) and **replace** the existing nameservers with the Cloudflare ones
7. Wait up to 24 hours for DNS propagation (usually takes 15-30 minutes)

---

### Step 2: DNS Records Setup

Once your domain is on Cloudflare, configure your DNS records:

| Type  | Name  | Content              | Proxy Status | TTL  |
|-------|-------|----------------------|--------------|------|
| A     | @     | YOUR_SERVER_IP       | Proxied (orange cloud) | Auto |
| A     | www   | YOUR_SERVER_IP       | Proxied (orange cloud) | Auto |
| CNAME | cdn   | your-app.replit.app  | Proxied (orange cloud) | Auto |

> **Important:** Make sure the orange cloud icon is ON (proxied) for all records you want Cloudflare to protect. Gray cloud = DNS only, no protection.

---

### Step 3: SSL/TLS Configuration

**Recommended: Full (Strict) Mode**

1. In Cloudflare Dashboard → **SSL/TLS** → **Overview**
2. Set encryption mode to **"Full (strict)"**
   - `Flexible` — Cloudflare encrypts visitor ↔ Cloudflare, but NOT Cloudflare ↔ your server (avoid in production)
   - `Full` — Encrypts both legs but accepts self-signed certificates on origin
   - `Full (Strict)` — Requires a valid CA-signed certificate on your origin server (most secure)

**Enable additional SSL features:**
- SSL/TLS → **Edge Certificates** → Enable **Always Use HTTPS** (ON)
- SSL/TLS → **Edge Certificates** → Enable **HSTS** (HTTP Strict Transport Security)
  - Max Age: 6 months (15768000 seconds)
  - Include Subdomains: ON
  - Preload: ON (after testing)
- SSL/TLS → **Edge Certificates** → **Minimum TLS Version**: TLS 1.2

---

### Step 4: DDoS Protection

Cloudflare provides automatic DDoS protection on all plans. To configure:

1. **Security** → **DDoS** → Review **HTTP DDoS Attack Protection** ruleset
2. Set sensitivity to **High** for a distribution hub (downloads attract more bot traffic)
3. Under **Security** → **Settings**:
   - Security Level: **High** (challenges suspicious visitors)
   - Challenge Passage: **30 minutes** (how long a user stays verified)
   - Browser Integrity Check: **ON**

**For Layer 3/4 DDoS (network attacks):**
- Go to **Security** → **DDoS** → **Network-layer DDoS Attack Protection**
- Set action to **Block** for flagged traffic patterns
- This is enabled by default on all Cloudflare-proxied records

---

### Step 5: Web Application Firewall (WAF)

> WAF rules require **Cloudflare Pro plan or higher**.

1. Go to **Security** → **WAF**
2. Enable **Cloudflare Managed Ruleset** — protects against OWASP Top 10:
   - SQL Injection
   - Cross-Site Scripting (XSS)
   - Path Traversal
   - Remote Code Execution
3. Enable **Cloudflare OWASP Core Ruleset**
4. Set ruleset action to **Block** (not just Log) for production

**Custom WAF Rules for App Distribution:**

Create these custom rules under **Security → WAF → Custom Rules**:

```
Rule 1: Block Suspicious Download Bot Traffic
  Expression: (http.request.uri.path contains "/download") and (cf.threat_score gt 30)
  Action: Block

Rule 2: Allow Known Good Bots
  Expression: (cf.client.bot)
  Action: Skip → Skip WAF rules

Rule 3: Rate Limit Download Endpoint
  Expression: (http.request.uri.path contains "/download")
  Action: Rate Limit → 60 requests per minute per IP
```

---

### Step 6: Bot Management

1. **Security** → **Bots** → **Bot Fight Mode**: **ON** (available on Free plan)
2. For advanced bot management (Pro+): **Security** → **Bots** → **Bot Management**
   - Enable **Super Bot Fight Mode**
   - Set **Verified Bots** to Allow
   - Set **Likely Automated** to Challenge
   - Set **Definitely Automated** to Block

**Custom Bot Rule:**
```
If (cf.bot_management.score lt 30 AND NOT cf.bot_management.verified_bot)
Then: Block
```

---

### Step 7: Page Rules & Cache Configuration

Go to **Rules** → **Page Rules** and add these rules:

```
Rule 1: Cache Downloads
URL: rnzecorporation.com/downloads/*
Settings:
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 day
  - Browser Cache TTL: 4 hours

Rule 2: Security on API Routes  
URL: rnzecorporation.com/api/*
Settings:
  - Security Level: High
  - Cache Level: Bypass
  - Disable Apps

Rule 3: Force HTTPS
URL: http://*rnzecorporation.com/*
Settings:
  - Always Use HTTPS
```

**Alternatively use the newer Transform Rules:**
1. **Rules** → **Transform Rules** → **URL Rewrites** for path manipulation
2. **Rules** → **Cache Rules** for fine-grained caching control

---

### Step 8: Firewall Rules for Geographic Restrictions (Optional)

If you want to restrict access to certain regions:

```
Rule: Geo-block High-Risk Countries
Expression: (ip.geoip.country in {"CN" "RU" "KP"} AND NOT cf.client.bot)
Action: Challenge (JS Challenge)
```

> Adjust country codes based on your actual threat intelligence.

---

### Step 9: Speed Optimization

1. **Speed** → **Optimization** → Enable:
   - **Auto Minify**: HTML, CSS, JavaScript
   - **Brotli Compression**: ON
   - **Rocket Loader**: ON (async JS loading)
   - **Early Hints**: ON (103 responses)

2. **Caching** → **Configuration**:
   - Caching Level: **Standard**
   - Browser Cache TTL: **4 hours**

---

### Step 10: Monitoring & Alerts

1. **Analytics & Logs** → **Traffic**: Monitor requests, threats blocked, bandwidth saved
2. **Notifications** → Create alerts for:
   - DDoS Attack detected
   - Origin error rate > 5%
   - SSL certificate expiration (30 days warning)

---

## Cloudflare Security Checklist

Before going live, verify all items:

- [ ] Domain added to Cloudflare with orange cloud (proxied) enabled
- [ ] Nameservers updated at domain registrar
- [ ] SSL/TLS set to Full (Strict) mode
- [ ] Always Use HTTPS enabled
- [ ] HSTS enabled with 6-month max-age
- [ ] DDoS protection sensitivity set to High
- [ ] WAF Managed Ruleset enabled (Pro plan)
- [ ] Bot Fight Mode enabled
- [ ] Rate limiting configured for download endpoints
- [ ] Page Rules for caching set up
- [ ] Monitoring alerts configured

---

## Architecture Overview

```
User Browser
    |
    v
Cloudflare Edge (270+ PoPs worldwide)
    |-- DDoS Protection (Layer 3/4/7)
    |-- WAF (OWASP rules + custom)
    |-- Bot Management
    |-- CDN Cache (static assets)
    |
    v
Origin Server / Replit Deployment
    |
    v
RnzeCorporation App Hub (React + Vite)
```

---

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm --filter @workspace/rnze-hub run dev

# Build for production
pnpm --filter @workspace/rnze-hub run build

# Typecheck
pnpm run typecheck
```

---

## Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **Icons**: Lucide React
- **Routing**: Wouter
- **Security CDN**: Cloudflare (see guide above)

---

## License

© 2026 RnzeCorporation. All rights reserved.
