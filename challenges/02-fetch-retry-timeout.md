---
title: Fetch, Retry, Timeout
position: Frontend, Fullstack
file: src/helpers/fetch.ts
difficulty: medium
---

# Fetch, Retry, Timeout

---

Difficulty: **Medium**

Tags: **Pure**, **Async**, **Frontend**, **Fullstack**

---

For this challenge you are asked to fill the function `fetchEnhanced` located at `src/lib/http.ts`. You don't have to carry about how it is used in react side.

You have to:

- implement retries flow: when the request fails, the retry flow is executed. When attempts are exhausted, the entire process should result into failure by keeping the original error
- timeout flow: when the response is not received within the timeout, the request is aborted, and the retry flow is executed
- `console.log` each call attempt with the number of left retries

To see the function in action, go to [`"<host>/fetch"`](/fetch), related file: `src/app/fetch/page.tsx`
