# Decision record

This app preserves the source decision record supplied for the RandomVibez build.

See the full record at the project root source file:
`/home/tomf/randomvibez-research-decision-2026-09-12.md`

The selected decision was **BUILD**, conditional on validation thresholds. The product is deliberately narrowed to an evidence-linked local decision brief rather than a generic matrix, AI recommender, scraper, collaboration backend, or high-stakes advice tool.

## Implementation interpretation

- A useful first session should produce a readable one-page artifact in under five minutes.
- Scores are explicit and deterministic: each score is 1-5, each criterion weight is 1-5, and the displayed percentage is weighted points divided by the total possible points. Missing scores are not silently treated as zero; the UI shows how many criteria were scored.
- The app keeps the decision reversible by recording unknowns, what would change the user's mind, and a next action.
- Privacy and maintenance risks are addressed through no backend, no network calls, no account, local persistence, JSON backup, and clear export warnings.
