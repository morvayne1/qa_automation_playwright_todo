# QA Automation Project — Playwright E2E Tests

This repository contains an end-to-end QA automation test suite for a production-like React To-Do application.

The main goal of this project is to demonstrate real-world QA Automation skills:
not just “happy path” testing, but also edge cases, UX validation, state consistency,
and interaction between different features.

## 🛠 Tech Stack

- Playwright (E2E testing)
- TypeScript / JavaScript
- Git & GitHub
- self-created React application under test (deployed on GitHub Pages)

## 📦 Application Under Test

- URL: https://morvayne1.github.io/react-to-do-app/
- Features:
  - Create / delete tasks
  - Reorder tasks (Up / Down)
  - UX validations (disabled buttons, empty states)

## 🧪 Test Coverage

### ✅ Functional / E2E Testing
- CRUD operations (create, delete)
- Task reordering (Up / Down)
- Completion state (checkbox, line-through)
- Interaction between features (reorder + completion)

### ⚠️ Negative & Edge Case Testing
- Empty input submission
- Input with spaces only
- Very long task text
- Rapid repeated clicks
- Disabled controls behavior

### 🎨 UX & UI Validations
- Disabled buttons on edge positions
- Text decoration for completed tasks
- Layout behavior with long text (no horizontal scroll)

## 📂 Project Structure
tests/
├─ Completion/
├─ Crud/
├─ Reorder/
├─ State/
├─ UX/

- Tests are grouped by feature and responsibility, following scalable QA structure

## 🚨 Known Issues & QA Findings
- Task list, order, and completion status are lost after refresh.
- Covered by a dedicated test:
  `tests/state/persistence.spec.ts`

This test is intentionally included to highlight a missing production-ready feature.

**Suggested improvement:**
Implement state persistence using `localStorage` or IndexedDB
(save on change, load on application mount).

---

## ▶️ How to Run Tests

```bash
npm install
npx playwright install
npx playwright test
