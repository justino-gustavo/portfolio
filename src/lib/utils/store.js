import { PUBLIC_GH_USER } from '$env/static/public';
import { writable, readable } from 'svelte/store';

export const github = readable({ profile: JSON.parse(PUBLIC_GH_USER) });

export const desktopMenu = writable(false);
