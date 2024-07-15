import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware( to => {
    if (to.matched.length !== 0) {
        return undefined;
    }

    return navigateTo('/downtime');
})

