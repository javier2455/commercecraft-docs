---
title: Ajustes finales
---

1. Eliminar el atributo suffix en las imagenes.
2. Navbar: Ajustar o eliminar texto en el banner.
3. Título en la pestaña del navegador.
4. Icono en la pestaña del navegador.
5. Font family.
6. Quitar slider en el cart overlay.
7. Agregar el logo en todas las secciones de la cuenta en las páginas dinámicas(Login, Register, etc.).
8. Agregar el Logo en el Header (headers and headers checkout).
9. GA (Google Analytics).
10. Ajustar el límite para las categorías.
11. Ajustar auth layout.
12. Ajustar quick order.
13. Ajustar clear cart.


### Eliminar el atributo suffix en las imagenes.

Buscar en el proyecto los "suffix=" y eliminarlos, debido a que por problemas con dicho atributo no cargan las imágenes

### Navbar: Ajustar o eliminar texto en el banner.

A partir de la definición visual, si el banner que se encuentra arriba del header lleva texto, modificarlo, en caso de no llevarlo eliminar dicho texto.

Ir a el path:

> organisms/announcement-bar/index.tsx 

y eliminar la línea 22 que con tiene:

```ts
  <p className="text-14 text-white">{textBar}</p>
```

### Título en la pestaña del navegador.

Buscar en la sitio oficial, dentro del inspeccionar elementos, el contenido de la etiqueta <title>, copiarlo y dentro del studio, en el site builder y dinamics pages, cambiar en el SEO todos los títulos.

### Icono en la pestaña del navegador.
### Font family.
### Quitar slider en el cart overlay.
### Agregar el logo en todas las secciones de la cuenta en las páginas dinámicas(Login, Register, etc.).
### Agregar el Logo en el Header (headers and headers checkout).
### GA (Google Analytics).
### Ajustar el límite para las categorías.
### Ajustar auth layout.
### Ajustar quick order.
### Ajustar clear cart.