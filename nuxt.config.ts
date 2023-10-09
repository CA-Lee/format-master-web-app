// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // <link rel="preconnect" href="https://fonts.googleapis.com">
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect",
        },
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: "anonymous",
        },
        // <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Roboto:wght@400;700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  css: ["@master/normal.css"],
});
