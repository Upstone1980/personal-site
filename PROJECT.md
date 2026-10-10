# chrisupstone.me — Thinking Articles Project

## Project Overview

Building a thought leadership content library for chrisupstone.me, structured around three lenses that reflect Chris's dual role as operator and investor:

| Lens | Audience | Framing |
|------|----------|--------|
| **Operator** | CEOs, CxOs | Operations thought leadership — decisions that shape production, capability, and cost |
| **Investor** | Investors, capital allocators | Where long-duration value is being created — the capital allocation thesis behind structural shifts |
| **Director** | Board directors, NEDs | Boardroom governance — risk, capital, and strategy in capital-intensive environments |

## Current State (as of October 2026)

### Published Articles

| # | Title | Lens | Status | File |
|---|-------|------|--------|------|
| 1 | AI Data Centres in Australia: The Sovereign Capability Imperative | Investor | ✅ Published | `articles/ai-data-centres-australia.html` |
| 2 | Private Networks and Industrial Infrastructure: A Capital Allocation Lens | Operator | ✅ Published | `articles/private-networks-capital-allocation.html` |
| 3 | Grid Investment and the Long-Duration Capital Opportunity | Director | ⚠️ Tagged but not yet reframed | `articles/grid-investment-long-duration-capital.html` |

### What's Done

- [x] Three-lens framework established (Operator, Investor, Director)
- [x] Thinking page restructured with three-lens intro section and filter chips
- [x] Homepage article cards tagged with lens labels
- [x] Article 1 (Sovereign AI) — researched, written, tightened to ~1,500 words, reframed as Investor lens
- [x] Article 2 (Private Networks) — researched, written, reframed as Operator lens, Pilbara iron ore case study (no company named)
- [x] Article 3 (Grid Investment) — researched, written, tagged as Director lens
- [x] Governance placeholder article removed from Thinking page
- [x] Domain references fixed (chrisupstone.com → chrisupstone.me)

### What's Remaining

#### Article 3 — Grid Investment (Director lens reframing)
- [ ] Reframe content from current investor/board hybrid to boardroom governance perspective
- [ ] Replace "What boards should be asking" with governance-focused questions (risk oversight, capital allocation approval, regulatory exposure, scenario planning)
- [ ] Ensure the article addresses what a NED needs to understand about energy transition risk and opportunity — not what an investor or operator needs
- [ ] Consider whether the superannuation gap section should be reframed as a governance risk (fiduciary duty to understand transition exposure) rather than an investment opportunity
- [ ] Review tone: should be governance-credible, not promotional

#### Future Articles (not yet started)
- [ ] Article 4 — TBD (Director lens topic, to replace the deleted governance placeholder)
- [ ] Potential topics: digital governance in capital-intensive businesses, technology risk as infrastructure risk, board oversight of AI adoption

#### General
- [ ] Review all three articles for consistency of voice and style once Article 3 is reframed
- [ ] Consider whether the Thinking page needs a "Director" article before the lens feels complete (currently 1 Investor, 1 Operator, 1 Director-tagged-but-not-reframed)
- [ ] SEO: add structured data (Article schema) to each article page
- [ ] Consider adding author bio block to article pages

## Style Guidelines (established)

- **Length**: ~1,500 words, 6 min read
- **Structure**: 5-6 sections, lede paragraph, clear section headers
- **Tone**: Direct, grounded, accessible to any CXO regardless of industry background
- **Voice**: First person, operator-investor perspective
- **Evidence**: Grounded in current sources (AEMO, McKinsey, BCG, CBRE, government policy documents)
- **No company names** in case studies unless explicitly approved
- **Closing**: End on the implication for the specific lens audience, not a generic call to action

## Technical Notes

- Article pages live in `/articles/` directory
- Each article uses the shared `components.js` (header/footer injection), `base.css`, and `style.css`
- Article view CSS classes defined in `style.css` (`.article-view`, `.article-view__body`, etc.)
- Article card link wrapper (`.article-card-link`) added to `style.css` for clickable cards on Thinking page
- Thinking page uses lens-based filter chips (Operator, Investor, Director) — not topic-based
- Homepage shows latest 3 articles in the "Thinking" section with lens tags

## Git History

```
3551656 Remove investor-focused closing section from private networks article
5f52edc Reframe articles around three lenses: Operator, Investor, Director
4a43e5f Remove managed service cost paragraph from private networks article
f4e48b3 Replace private networks case study: Newmont/gold → Pilbara iron ore autonomous haulage
e5bb01d Add two published articles + remove governance placeholder
28f48a3 Tighten article: cut from ~2800 to ~1500 words, 9 sections to 5
301c45e Add published article: AI Data Centres in Australia — The Sovereign Capability Imperative
baee40b Fix domain references: chrisupstone.com → chrisupstone.me
4935d05 Replace site with new design and content
```
