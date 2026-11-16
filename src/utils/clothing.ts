import { defineAsyncComponent } from 'vue';
import type { Component } from 'vue';

// Module scope: survives CharacterDisplay being unmounted and remounted
const clothingCache = new Map<string, Component>();

// Lazy loads a clothing component by file name, only once per page load
export function loadClothing(name: string): Component {
    if (!clothingCache.has(name)) {
        clothingCache.set(name, defineAsyncComponent(() => {
            return import(`@/components/icons/clothing/${name}.vue`);
        }));
    }

    return clothingCache.get(name) as Component;
}
