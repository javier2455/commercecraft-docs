// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Commercecraft",
      customCss: ["./src/styles/global.css"],
      components: {
        Hero: "./src/components/hero.astro",
      },
      // social: [
      //   {
      //     icon: "github",
      //     label: "GitHub",
      //     href: "https://github.com/withastro/starlight",
      //   },
      // ],
      sidebar: [
        {
          label: "Development",
          items: [
            {
              label: "Backend",
              autogenerate: { directory: "backend" },
            },
            {
              label: "Frontend",
              items: [
                {
                  label: "Entorno de desarrollo",
                  link: "/development/frontend/development-environment",
                },
                {
                  label: "Iniciando un proyecto",
                  link: "/development/frontend/new-project",
                },
                {
                  label: "Ajustes al proyecto cuando hay más de 250 categorías",
                  link: "/development/frontend/more-categories",
                },
                {
                  label: "Google Analytics",
                  link: "/development/frontend/google-analytics",
                },
                {
                  label: "Migrando a la versión 4.4.1 de yarn",
                  link: "/development/frontend/migrating-yarn",
                },
                {
                  label: "Warnings",
                  link: "/development/frontend/warning",
                },
                {
                  label: "B2C",
                  items: [
                    {
                      label: "Iconos",
                      link: "/development/frontend/b2c/iconos",
                    },
                    {
                      label: "Proyectos con varios productTypes",
                      link: "/development/frontend/b2c/many-product-types",
                    },
                    {
                      label: "Atributo suffix en imágenes",
                      link: "/development/frontend/b2c/suffix",
                    },
                    {
                      label: "Extracción y configuración del favicon.ico",
                      link: "/development/frontend/b2c/favicon",
                    },
                    {
                      label: "Extracción y configuración del Title",
                      link: "/development/frontend/b2c/title",
                    },
                    {
                      label: "Ajustes al footer",
                      link: "/development/frontend/b2c/footer",
                    },
                    {
                      label: "Ajustes al header",
                      link: "/development/frontend/b2c/header",
                    },
                    {
                      label: "Ajustes de enlaces en el Empty cart y el Empty Wishlist",
                      link: "/development/frontend/b2c/wishlist-cart",
                    },
                    {
                      label: "Añadir un nuevo componente al proyecto",
                      link: "/development/frontend/b2c/new-component-to-studio",
                    },
                    {
                      label: "Configurar el componente Slider",
                      link: "/development/frontend/b2c/slider",
                    },
                    {
                      label: "Ajustes Finales",
                      link: "/development/frontend/b2c/final-adjusment",
                    },
                  ],
                },
                {
                  label: "B2B",
                  items: [
                    {
                      label: "Ajustes al header",
                      link: "/development/frontend/b2b/header",
                    },
                    {
                      label: "Ajustes finales",
                      link: "/development/frontend/b2b/final-adjusment",
                    },
                    {
                      label: "Varias variantes dependientes de otro atributo",
                      link: "/development/frontend/b2b/multivariant",
                    },
                    {
                      label: "Limpiar el carrito de compras",
                      link: "/development/frontend/b2b/clean-cart",
                    },
                    {
                      label: "Register error",
                      link: "/development/frontend/b2b/register-error",
                    },
                  ],
                },  
              ],
              // autogenerate: { directory: 'frontend' },
            },
          ],
          //   autogenerate: { directory: 'development' },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
