---
title: stream.PassThrough usage
position: Fullstack
file: src/helpers/proxyfile.ts
difficulty: easy
---

# `stream.PassThrough` usage

---

Difficulty: **Easy**

Tags: **Backend**, **Stream**

---

For this challenge, what you have to do is to setup a kind of proxy by leveraging on `stream.PassThrough` API provided by `node`. We have an internal storage in `storages/data` which is not exposed over the HTTP server by default.

But we want it to be accessible through an API call like `/api/storages/<filename>`.

Example when calling [/api/storages/working.json](/api/storages/working.json) we should be pointed to content stored in `./storages/data/working.json`. We already prepared a function for such implementation, what you have to do is to complete the function to do what it is intended for.

**Put your changes on `src/lib/passthrough.ts`**

### @todo

> 1. implement the function `passthrough`, use `stream.PassThrough` API to pipe the file content to the response. Explain what `PassThrough` stream is and why it is used here, could you tell another way to do this?
> 2. add headers:
>  * `Cache-Control: max-age=3600, public`
>  * `X-Metadata: technical-test`

To see result, check [/api/storages/working.json](/api/storages/working.json)
