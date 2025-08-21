---
title: B2B register error
---

En la siguiente ruta:

> packages/poc/backend/commerce-commercetools/actionControllers/AccountController.ts

```ts
if (!(error instanceof ExternalError && error.statusCode === 404)) {
  throw error;
}
```

```ts
const isNotFoundError =
  error instanceof ExternalError &&
  (error.statusCode === 404 || (error.statusCode === 503 && error.message?.includes('URI not found')));

if (!isNotFoundError) {
  throw error;
}
```


