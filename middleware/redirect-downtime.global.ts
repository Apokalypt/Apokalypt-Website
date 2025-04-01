import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware( to => {
    if (to.path === "/discord") {
        return navigateTo('https://discord.gg/MA5bUnWNnv', { external: true });
    }

    if (to.matched.length !== 0) {
        return undefined;
    }

    return navigateTo('/downtime');
})

