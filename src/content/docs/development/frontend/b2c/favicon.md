---
title: Extracción y configuración del favicon.ico
---

### Extracción del favicon.ico de la web original

1. Abrir la página a la que se desea extraer el favicon.ico.
2. Hacer clic derecho en cualquier parte de la página web que estés viendo.
3. Seleccionar la opción **"Inspeccionar"** o **"Inspeccionar elemento"** del menú contextual, o usar  un atajo de teclado: Ctrl + Shift + I o F12.
4. Ir a la opción Network:
    <img src="/faviconExample/networkRoute.png" alt="Network Route" />
5. Dar F5 en la web para cargar todas los archivos nuevamente y buscar entre ellos el favicon.ico, tener en cuenta que no siempre se llama exactamente así:
    <img src="/faviconExample/network.png" alt="Network" />
6. Seleccionamos el elemento, y en la parte derecha en la opción Headers, vamos a Request URL.

7. Abrimos la URL y descargamos el favicon.ico.

### Configuración en nuestro proyecto:
1. En nuestro proyecto vamos a la carpeta:
    /frontend/public/
2. Eliminamos el favicon.ico que viene por defecto y agregamos el que descargamos.
3. Debe tener el mismo nombre que el que viene por defecto, asegurarnos de esto.
