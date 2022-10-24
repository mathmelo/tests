# Mocks
> **Mocks are mostly used in unit tests. Imagine you need to check functionality from A to B, but after that, from B to C. You don't need to retest A to B to continue, just generate static data assuming that tests A to B were successful**

Best practices
- Use mocks to avoid calls to external services
- Avoid duplicate tests
- Use JSON file to save mocks
- Use mocks with different validations to test. (Example in mocks folder)