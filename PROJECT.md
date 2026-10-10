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
| 3 | Grid Investment and the Governance of Long-Duration Capital | Director | ✅ Published (reframed) | `articles/grid-investment-long-duration-capital.html` |

### What's Done

- [x] Three-lens framework established (Operator, Investor, Director)
- [x] Thinking page restructured with three-lens intro section and filter chips
- [x] Homepage article cards tagged with lens labels
- [x] Article 1 (Sovereign AI) — researched, written, tightened to ~1,500 words, reframed as Investor lens
- [x] Article 2 (Private Networks) — researched, written, reframed as Operator lens, Pilbara iron ore case study (no company named)
- [x] Article 3 (Grid Investment) — researched, written, reframed as Director lens (boardroom governance perspective: risk oversight, fiduciary duty, regulatory exposure, scenario planning); retitled "Grid Investment and the Governance of Long-Duration Capital"
- [x] Governance placeholder article removed from Thinking page
- [x] Domain references fixed (chrisupstone.com → chrisupstone.me)
- [x] Voice-consistency review across all three articles — Article 2 closing section added to match the two-paragraph closing pattern of Articles 1 and 3; stray empty paragraph removed
- [x] Article schema structured data (JSON-LD) added to all three article pages

### What's Remaining

#### Future Articles (not yet started)
- [ ] Article 4 — TBD (Director lens topic, to replace the deleted governance placeholder)
- [ ] **Recommended topic:** Board oversight of AI adoption in capital-intensive businesses — the governance counterpart to Article 1's investor lens on sovereign AI. A director needs to understand AI as infrastructure risk: dependency on hyperscaler compute, model access risk, the gap between "we use AI" and "we govern AI," and the board's role in ensuring technology adoption decisions are treated as strategic, not just operational. This would complete a natural pair with Article 1 (Investor: where the value sits → Director: how the board governs the risk) and reinforce Chris's NED positioning.
- [ ] Alternative topics: digital governance in capital-intensive businesses, technology risk as infrastructure risk

#### General
- [ ] Consider whether the Thinking page needs a second Director article before the lens feels complete (currently 1 Investor, 1 Operator, 1 Director)
- [ ] Consider adding author bio block to article pages
- [ ] Git: commit and push the Article 3 reframe, schema additions, and voice-consistency edits

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
