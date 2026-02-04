// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://help.extinction-minijeux.fr',
	integrations: [
		starlight({
			title: 'Extinction-MiniJeux',
			logo: {
				src: './src/assets/extinction-logo-nega.png',
				replacesTitle: true
			},
			social: [
				{ icon: 'external', label: 'Homepage', href: 'https://extinction-minijeux.fr' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/2Ebe5C7czE' }
			],
			defaultLocale: 'fr',
			locales: {
				root: {
					label: 'Français',
					lang: 'fr-FR',
				}
			}
		}),
	],
});
