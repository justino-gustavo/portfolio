import { writable } from 'svelte/store';

export const github = {
	profile: writable(null),
	repos: writable(null)
};

export const desktopMenu = writable(false);