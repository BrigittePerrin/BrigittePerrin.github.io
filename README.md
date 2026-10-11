# Brigitte Perrin — Portfolio Concept v1

An initial **editorial-modernist** portfolio prototype for Brigitte Perrin, positioning her as a **Service & Experience Designer + Researcher**.

## What is included
- `index.html` — homepage
- `work.html` — selected work overview
- `projects/*.html` — case studies based on the original portfolio content
- `about.html` — positioning and professional introduction
- `writing.html` — research writing and essay PDF
- `assets/styles.css` — design tokens, responsive layout, and accessibility styles
- `assets/main.js` — lightweight enhancements
- `assets/favicon.svg` — geometric favicon

## Preview locally
Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080/.

## Publish with GitHub Pages (when ready)
1. Create a **public** repository on GitHub named `BrigittePerrin.github.io` for a root user site, or choose another repository name for a project site.
2. Upload the contents of this folder to the repository root.
3. Navigate to repository **Settings → Pages → Build and deployment** and select **Deploy from a branch**, `main`, `/(root)`.
4. Wait for the deployment. Your user site will be `https://BrigittePerrin.github.io/` (or `https://BrigittePerrin.github.io/<repo>/` for a project site).

GitHub Pages is public, so review the included essay PDF and project information before publishing. No custom domain is required.

## Things to review before launch
- Confirm final homepage and About copy reflects your current role and exact professional positioning.
- Replace image links from `framerusercontent.com` with exported local case study images so the portfolio doesn't depend on Framer long-term.
- Review all case study descriptions for project confidentiality, approvals and accurate contribution attribution. No impact metrics have been fabricated.
- Add approved professional work at Elevations, if appropriate for public disclosure.
- Add preferred contact channel and résumé only when you want those public.

## Design rationale
Uses semantic HTML, high-contrast text, clear keyboard focus, skip-to-content, reduced-motion support, and responsive layouts. No framework, build tool, tracking, or paid subscription needed.
