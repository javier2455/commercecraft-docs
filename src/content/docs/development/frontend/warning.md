---
title: Warnings
---
### B2B

* Error: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

> packages/poc/frontend/src/app/[locale]/layout.tsx

```ts
  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body>
        <CookiesProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </CookiesProvider>
      </body>
    </html>
  );
```