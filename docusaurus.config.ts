import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Data Flow Wiki",
  tagline: "Data Flow and Workflow Automation Platform",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dataflow.wiki",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dataflowops", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: { light: "default", dark: "forest" },
      options: {
        // maxTextSize: 500,
        // maxWidth: 500,
      },
    },
    image: "img/dataflow-social-card.png",
    navbar: {
      title: "Data Flow Platform",
      logo: {
        alt: "Data Flow Platform",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog posts", position: "left" },
        {
          href: "https://github.com/dataflowops",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs",
            },
            {
              label: "Blog posts",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/dataflowops",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "AppBaza.com",
              href: "https://appbaza.com",
            },
            {
              label: "X",
              href: "https://twitter.com/AppBazaCOM",
            },
            {
              label: "CoderVlogger.com",
              href: "https://codervlogger.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Documentation and wiki page for Data Flow Platform`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
