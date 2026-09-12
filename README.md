# Decision Brief

Decision Brief is a static, local-first web app for making a bounded choice you can explain. It supports 2-8 options, 3-6 weighted criteria, evidence notes and source URLs, a transparent weighted result, unknowns, a next action, and portable exports.

## Run locally

No build step or package installation is required:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/ in a browser. Use a local HTTP server rather than opening `index.html` directly so file import/export and relative documentation links behave consistently.

## Product boundaries

- Browser-local only. The app uses `localStorage`; it has no backend, account, analytics, external API, or third-party runtime asset.
- The score is a weighted summary of user-entered 1-5 scores. Missing scores remain visible as incomplete evidence.
- This is not objective truth and not professional advice. Do not use it as a sole basis for medical, legal, financial, employment, safety, or other high-stakes decisions.
- Browser storage is not encryption. Exported Markdown and JSON may contain sensitive decision notes.

## Maintenance

The runtime is intentionally small:

- `index.html`: semantic page structure and controls.
- `styles.css`: responsive light theme, focus states, print stylesheet, reduced-motion fallback.
- `app.js`: state, validation, local persistence, rendering, scoring, import/export.
- `tests/smoke-test.js`: deterministic source and scoring contract checks.
- `docs/decision-record.md`: preserved product decision record.

Keep the import format at `version: 1` unless adding a migration. Validate the full shape before replacing current state. Keep user text rendered through escaping or `textContent` equivalents. If adding a feature, preserve the no-network/local-first boundary and run the smoke test plus a fresh browser journey.

## QA checklist

1. Load empty page and confirm the first action is obvious.
2. Click **Load starter**, review the result, and edit an option. Confirm the result updates.
3. Add/remove options and criteria within the 2-8 and 3-6 limits.
4. Download Markdown and JSON, then import the JSON into a clean browser profile.
5. Try malformed JSON and confirm the current brief remains unchanged.
6. Use Print / save PDF and check that navigation and controls are omitted.
7. Test keyboard focus, narrow viewport, and `prefers-reduced-motion`.

## License

MIT. See `LICENSE` if added by the distributor.
