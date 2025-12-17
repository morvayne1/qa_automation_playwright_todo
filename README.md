## Playwright E2E Test Suite for React To-Do App

- Positive tests: CRUD, reordering, UX
- Negative/Edge cases: empty input, long text, spaces, rapid clicks
- Run: npx playwright test

### Known Issues & QA Findings

- **State persistence after page reload is not implemented**
  - Tasks, completion status, and order are lost on refresh.
  - Dedicated failing test: `tests/state/persistence.spec.ts` intentionally fails to highlight this missing production-ready feature.
  - Suggested improvement: Implement localStorage (or IndexedDB) for saving tasks on change and loading on mount.