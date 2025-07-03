// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Materiales Constic',
  tagline: `Estrategia conjunta para mejora de competencias y acceso de la mujer a sectores TIC y construcción​`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://constic.es',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/materiales/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xxjcaxx', // Usually your GitHub org/user name.
  projectName: 'constic', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xxjcaxx/constic',
        },
        blog: false,
      
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logocompleto.png',
      navbar: {
        title: 'Constic',
        logo: {
          alt: 'Constic',
          src: 'img/CONSTIClogo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Materiales',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/xxjcaxx/constic',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Materiales',
                to: '/docs/intro',
              },
              {
                label: ' - Brecha de Género',
                to: '/docs/brecha_genero',
              },
              {
                label: ' - Extracción',
                to: '/docs/tema_1',
              },
              {
                label: ' - Transformación',
                to: '/docs/tema_2',
              },
              {
                label: ' - Mantenimiento',
                to: '/docs/tema_3',
              },
              {
                label: ' - Colocación',
                to: '/docs/colocacion',
              },
            ],
          },
          {
            title: 'Redes sociales',
            items: [
              {
                label: 'Instagram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Youtube',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'Proyecto',
            items: [
              {
                label: 'Página principal',
                to: 'https://constic.es',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xxjcaxx/constic',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Constic.`,
        logo: {
          alt: 'Financiado por la Unión Europea',
          src: 'img/logos.png', // Ruta relativa desde /static
         // href: '/', // opcional: a dónde lleva el logo al hacer clic
          width: 800, // puedes ajustar el tamaño
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
