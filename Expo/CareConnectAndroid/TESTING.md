# CareConnect test suite

This test suite is based on repository commit `05d7263f89d96d573314423e135e7453902928ac`, which merged pull request #11 and the initial tests from commit `1f5b187baef52ba6581451dac482649861e1a795`.

## Commands

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run test:coverage
npm run test:ci
```

`test:ci` runs all tests, creates the reports, and fails if statements, branches, functions, or lines fall below 60%.

The human-readable report is `coverage/lcov-report/index.html`. LCOV and Cobertura reports are generated for automated reporting.

## Merged pull-request coverage

The merged work supplied:

- Login rendering, input, and navigation tests.
- Medication rendering and mark-as-taken tests.
- Unit tests for adding and removing medication names.

## Supplemental coverage

The additional tests supply:

- A real `App` and `AppNavigator` navigation workflow.
- Initial Login and Reset Password routing.
- Home quick-access navigation to every principal screen.
- New-message, doctor-conversation, and logout navigation.
- Medication search and completed-medication behavior.
- Medication context state and hook tests.
- Duplicate medication and absent-medication utility cases.
- Bottom-navigation rendering, selection state, and all destinations.
- Doctor message typing, sending, blank-message, attachment, and back behavior.
- Password visibility behavior.

Coverage collection explicitly includes `App.tsx` and every executable TypeScript/TSX file under `app/`, even when a source file is not imported by a test. Test files, the type-only navigation declaration, and the empty `AppointmentScreen.tsx` file are excluded from the executable-code denominator.

## Validated result

- 7 test suites passed.
- 32 tests passed.
- Statements: 96.29%.
- Branches: 90.90%.
- Functions: 87.50%.
- Lines: 96.15%.
