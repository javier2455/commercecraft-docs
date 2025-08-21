---
title: Limpiar el carrito de compras
---

Se esta generando un problema que aún después de terminar el proceso de compra, no se limpia el carrito de la compra, para ello, vamos a ajustar lo siguiente:

Nos dirigimos a la siguiente ruta:

> packages\poc\frontend\src\lib\tastics\thank-you\components\thank-you-client-wrapper\index.tsx

Dentro agregamos el siguiente código:

```ts
const { selectedBusinessUnit, selectedStore } = useStoreAndBusinessUnits();

 const { clearCart } = useCart(selectedBusinessUnit?.key, selectedStore?.key);

importamos (useStoreAndBusinessUnits y useCart)

Luego agregamos el useEffect:

useEffect(() => {

    clearCart();

  }, []);
```

Quedando nuestro archivo como se muestra en la imagen:

<img src="/cart/clean-cart.png" alt="Limpiando el carrito de compras" />

 Con estos pasos garantizamos limpiar el carrito de compras.