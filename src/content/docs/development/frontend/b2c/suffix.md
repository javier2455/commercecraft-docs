---
title: Atributo suffix en imágenes dentro del proyecto
---

Durante el desarrollo del proyecto, se trabajan con imágenes para mostrar el(los) producto(s):

- PLP (Product List Page)
- PDP (Product Details Page)
- Product Slider
- Product List
- Algolia Search
- Otras secciones y componentes del Proyecto

Por defecto las imágenes no cargan por lo que se debe eliminar el atributo "suffix" de todos los componentes que lo utilicen para visualizar las imágenes.

Podemos utilizar varias vías:

- Desde nuestro editor de código: VSCode, Cursor, etc. Ir a la sección del buscador dentro de los archivos del proyecto y buscar por la siguiente instrucción: "suffix=" y eliminar todas las instancias del mismo dentro de los archivos del proyecto.

Esta es una tarea importante dentro de los [Ajustes Finales del Proyecto](/development/frontend/b2c/final-adjusment).

Nota: Actualmente se trabaja en una solución para evitar este paso, cuando este lista, se actualizará el artículo con la nueva forma de trabajar este atributo.
