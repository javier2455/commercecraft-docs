---
title: Ajustes al proyecto para cuando hay más de 250 categorías.
---

### Para B2C

Cuando un proyecto tiene más de 250 categorías debemos entrar al fichero con la siguiente ruta:

> /backend/commerce-commercetools/apis/ProductApi.ts 

e ir a la línea 206 que tiene lo siguiente:

> this.queryCategories({ limit: 250, format: CategoryQueryFormat.TREE })

y ajustar la cantidad de categorías a lo que se necesita, teniendo en cuenta que no deben ser más de 500.

### Para B2B

Ademas es necesario en en caso de los B2B modificar el archivo:

> /frontend/src/lib/hooks/useCategories/index.ts

en ir a la linea 8 que tiene lo siguiente:

> sdk.composableCommerce.product.queryCategories({ format: 'tree', limit: 99 }),

y la linea 13 que tiene lo siguiente:

>  () => sdk.composableCommerce.product.queryCategories({ format: 'flat', limit: 9 }),

y modificar el limit a 500 en los dos o el numero necesario.