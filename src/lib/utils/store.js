import { writable } from 'svelte/store';

export const desktopMenu = writable(false);
export const showApps = writable(false);

desktopMenu.subscribe((value) => {
	if (!value) {
		showApps.set(false);
	}
});
