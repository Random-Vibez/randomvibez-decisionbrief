# RandomVibez idea-gate decision record

**Date:** 2026-09-12  
**Scope:** New small independent web app; local-first/public/no-account preferred. Excluded canonical repos: randomvibez-site, balanceahead, clearnext, beforesend, openvoice, hearthplan.

## 1. Leading problem

People making a bounded choice (purchase, software/tool, provider, trip, household option) often have 2–8 candidate links and vague criteria, but end up with browser tabs, a spreadsheet, or an overbuilt project tool. The consequence is delayed decisions, forgotten assumptions, and poor explainability to a partner/teammate. Target user: a non-technical individual or tiny team who needs a defensible choice in one sitting, without creating an account or adopting a project-management system.

**Verified evidence:** choice-overload literature remains an active research area; a 2024 review identifies cognitive-resource limits and moderators rather than claiming every large assortment harms decisions: [Frontiers review](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1290359/full). This supports the problem direction, not demand for this particular app.  
**Inference:** a simple, bounded decision artifact could be useful where a full spreadsheet/project tool is disproportionate. Demand for the exact wedge is unproven.

## 2. Candidates

1. **Decision Brief** — local-first, no-account comparison for 2–8 options: criteria, weights, evidence URLs/notes, scores, assumptions, confidence, and a shareable Markdown/HTML brief with “what would change my mind.”
2. **Renewal Radar** — local-first tracker for subscriptions, warranties, licenses, documents, and recurring household deadlines; calendar/ICS export and simple reminders.
3. **Read-Later Triage** — local-first URL inbox that asks “read / reference / discard,” captures a short reason and next action, and exports a portable list; intentionally not a full reader.
4. **FileDrop Lite** — a one-purpose public upload request page for collecting a small set of files without requiring the uploader to create an account; recipient downloads a ZIP or receives a local manifest. (Operational/security burden is the concern.)
5. **Three-Step Starter** — turns a user-entered intimidating task into a tiny first action, a 15-minute checkpoint, and a stopping rule; no account and no AI required. Simpler alternative to task managers and AI decomposition tools.

## 3. Evidence and alternatives

| Area | Current source-backed facts (verified) | Implication |
|---|---|---|
| Existing task managers | Todoist supports recurring dates, reminders, templates, and free/premium tiers: [recurring dates](https://www.todoist.com/help/todoist/features/introduction-to-recurring-dates-YUYVJJAV), [reminders](https://www.todoist.com/help/todoist/features/introduction-to-reminders-9PezfU). Google Tasks supports repeating tasks, subtasks, Calendar integration, and reminders: [Tasks](https://workspace.google.com/products/tasks/), [repeating tasks](https://support.google.com/calendar/answer/12132599?hl=en). | Renewal Radar and Three-Step Starter must not become generic task apps; incumbents already win persistence and notifications. |
| Task decomposition | Goblin Tools’ free Magic ToDo already breaks complex tasks into smaller steps, with adjustable granularity: [Magic ToDo](https://goblin.tools/ToDo), [About](https://goblin.tools/About). | A generic “AI breaks down tasks” clone is low-distinctiveness and has quality/safety risk. |
| Notes/lists | Google Keep supports shared notes/lists, labels, reminders, offline support, and real-time collaboration: [Keep](https://workspace.google.com/products/keep/). | Renewal Radar needs a sharper recurring-deadline workflow, not notes with dates. |
| Read later | Readwise Reader handles articles, newsletters, RSS, PDFs, EPUBs, YouTube, highlighting, and sync: [Reader](https://docs.readwise.io/reader). Mozilla’s Pocket shut down July 8, 2025, with export ending October 8, 2025: [Mozilla](https://blog.mozilla.org/en/mozilla/building-whats-next/), [support](https://support.mozilla.org/en-US/kb/future-of-pocket). | There is a transition/opportunity signal, but Readwise and browser features are formidable; avoid fetching/hosting content in v1. |
| Bookmarking | Raindrop.io supports collections, tags, notes, and extracted full text; full-text search of saved pages/PDFs/EPUBs/YouTube transcripts is Pro: [bookmarks](https://help.raindrop.io/bookmarks), [search](https://help.raindrop.io/using-search). | Read-Later Triage must win on fast disposition and next action, not archiving/search. |
| Decision matrices | Free no-signup direct alternatives already exist: Decidit ([site](https://www.decidit.de/)), Argumentree ([tool](https://argumentree.com/tools/decision-matrix)), SnapDecider ([tool](https://snapdecider.com/decision-matrix-tool-compare-options-decide/)); Creately offers templates, weighted scoring, collaboration, and export ([template](https://creately.com/usage/decision-matrix-template/)). Google Sheets can be used for collaborative 2x2 matrices ([Google Workspace post](https://workspace.google.com/blog/product-announcements/turn-your-data-into-action-6-mini-apps-you-can-create-with-sheets-canvas)); Notion offers database properties and multiple views ([database intro](https://www.notion.com/help/intro-to-databases)). | Decision Brief is not novel as a matrix. Differentiation must be the smallest useful evidence-linked narrative artifact, not another grid. |
| File collection | Dropbox file requests let anyone upload without a Dropbox account ([create](https://help.dropbox.com/share/create-file-request), [respond](https://help.dropbox.com/share/received-file-request)); Google Forms file-upload questions require sign-in ([Google support](https://support.google.com/docs/community-guide/395355672/google-forms-why-your-respondents-are-being-forced-to-login)). | Need exists, but storing untrusted uploads securely, abuse controls, quotas, retention, and privacy make FileDrop Lite operationally unsuitable for a small independent v1. |
| Local-first feasibility | IndexedDB supports client-side structured storage and offline web apps: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API); local-first principles emphasize user ownership/privacy/offline use: [Ink & Switch](https://www.inkandswitch.com/essay/local-first/). | A local-first decision artifact can be genuinely private and low-maintenance, with explicit export/import rather than accounts. |

Sources were checked on 2026-09-12. Descriptions above separate verified product capabilities from the inferences in the final column.

## 4. Comparative score

Scale: 1 (poor)–5 (strong). Weighted judgment, not measured market demand. Dimensions: severity, reach, evidence of demand, distinctiveness, first-session usefulness, buildability, low maintenance, low safety/legal risk, RandomVibez fit. Total is /45.

| Candidate | Sev. | Reach | Demand evidence | Distinct. | First session | Build | Low maint. | Low risk | Fit | Total | Rationale |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Decision Brief | 4 | 5 | 3 | 3 | 5 | 5 | 5 | 4 | 5 | **39** | Broad recurring problem and immediate artifact; direct matrix competition keeps demand/distinctiveness uncertain. |
| Renewal Radar | 4 | 5 | 4 | 2 | 4 | 4 | 3 | 4 | 4 | **34** | Real recurring pain, but reminders/calendar sync and trust are maintenance-heavy; crowded by Google Tasks/Todoist. |
| Read-Later Triage | 3 | 5 | 4 | 3 | 4 | 3 | 4 | 4 | 4 | **34** | Pocket shutdown is a real transition signal, but reader/bookmark incumbents are strong and URL ingestion is tricky. |
| FileDrop Lite | 4 | 4 | 4 | 3 | 5 | 2 | 1 | 1 | 3 | **27** | Clear first-session value, but security, storage, abuse, and retention burden violate the modest-ops preference. |
| Three-Step Starter | 3 | 5 | 4 | 2 | 4 | 5 | 5 | 4 | 3 | **35** | Very easy and private, but Goblin Tools already owns the simple decomposition wedge; likely a toy without a sharper context. |

## 5. Leader and attempted disproof

**Leader: Decision Brief.** Strongest arguments against it:

- A spreadsheet already solves weighted comparison; Decidit, Argumentree, and SnapDecider offer free no-account matrices. Users may not switch.
- Scoring creates false precision. The “winner” can be misleading when evidence is incomplete or criteria are subjective.
- A shareable artifact may be unnecessary for low-stakes choices and insufficient for high-stakes medical, financial, legal, employment, or safety choices.
- The input burden can exceed the benefit: adding options, criteria, weights, evidence, and notes is work.
- Without synchronized collaboration, a partner/team may still use Google Sheets/Notion.
- No direct demand metric was found in this gate; the research only establishes adjacent behavior/products and a plausible problem.

**Response / narrowing:** do not market it as an objective optimizer or AI recommendation engine. The product should produce a transparent “decision brief”: side-by-side facts, user-entered scores, source links, confidence/unknowns, and a reversible next step. No domain advice, no scraping, no accounts, no cloud data. This is a meaningful wedge only if users value the explanation and uncertainty record more than raw ranking.

## 6. Smallest useful product

A single local-first page with:

- decision question and deadline (optional);
- 2–8 options;
- 3–6 user-defined criteria with optional weights;
- per-option score plus a short evidence/note field and source URL;
- transparent weighted result plus “unknowns / what would change my mind”;
- export to Markdown/printable HTML and import/export JSON; share via copied file/text, not a server database;
- a starter template for purchase/provider/tool choice.

**First-session outcome:** in under 5 minutes, a visitor creates a readable one-page brief that names the current leading option, shows the trade-offs and missing evidence, and states the next action (buy/test/ask/compare one more fact). If it only displays a pretty matrix, it fails the usefulness gate.

## 7. Validation experiment before/alongside build

Recruit 8–10 people who recently made a purchase, tool, provider, or household choice. Give them the same raw scenario and ask them to use a clickable/static flow, then compare against their usual spreadsheet/search process. Measure:

- at least 6/8 complete a brief without explanation in 7 minutes;
- at least 5/8 can accurately explain why the leader won and name one uncertainty;
- at least 5/8 say they would reuse it for another bounded decision;
- median self-reported usefulness ≥4/5, with no critical trust/safety complaint;
- at least 3 participants voluntarily export/share the brief.

Cheap acquisition: post the scenario and no-account URL in relevant public communities or ask 10 friends/colleagues for one recent decision; do not infer success from page views alone.

## 8. Kill / redirect criteria

Kill or redirect if any of the following holds:

- fewer than 6/10 can complete the outcome in 7 minutes;
- fewer than half prefer it to their existing spreadsheet/notes flow;
- users ask for automated recommendations, live price data, collaboration, or reminders before they value the core brief (scope/ops explosion);
- users treat the score as authoritative or cannot distinguish evidence from opinion;
- no participant shares/exports and fewer than 3/10 describe a concrete next use;
- security/privacy review finds the local export or URL handling likely to expose sensitive decision data;
- validation finds a single incumbent workflow is clearly “good enough” and the proposed brief does not save time or improve clarity.

## 9. Decision

**BUILD — conditional on the validation thresholds above, with the narrowed “evidence-linked decision brief” scope.** Do not build a generic decision matrix, AI recommender, account system, scraper, or collaboration backend. If validation misses thresholds, **KILL** this concept rather than adding features; the surviving fallback is Renewal Radar only after a separate gate, not an automatic pivot.

**Risks:** privacy (decision notes may be sensitive), accessibility (keyboard-first table, labels, non-color status, print readability), safety/legal (prominent “organizing your inputs, not professional advice”; exclude high-stakes recommendation language), maintenance (no server, no external API, versioned import/export), and data loss (clear local-storage/export warning and downloadable backup).
