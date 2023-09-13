import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  //output: 'server' // si quieres que sea un servidor
  output: "hybrid", // para que sae server tienes que poner export const prerender = false;
});
