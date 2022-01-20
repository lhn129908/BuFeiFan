import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  // dev: true,
  meta: {
    title: "ElementPlus + Nuxt3",
  },
  buildModules: ["@vueuse/core/nuxt", "@pinia/nuxt"],
  css: ["assets/scss/index.scss"],
  components: [
    "~/components/",
    // {
    //   path: 'node_modules/element-plus/lib/components/*/index.js',
    // }
  ],
  privateRuntimeConfig: {
    API_BASE: "http://101.35.3.52",
  },
  vite: {
    logLevel: "info",
    server:{
      proxy:{
        "/api":{
          target:"http://101.35.3.52",
          changeOrigin:true,
        }
      }
    }
  },
});
