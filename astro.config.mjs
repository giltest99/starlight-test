import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Dev Code Tools',
      social: {
        github: 'https://github.com/giltest99',
      },
      sidebar: [
        /* {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        }, */
        {
          label: 'Get started',
          autogenerate: { directory: 'started' },
        },
        {
          label: 'Javascript',
          autogenerate: { directory: 'js' },
        },
        {
          label: 'Astro',
          autogenerate: { directory: 'astro' },
        },
        {
          label: 'Next',
          autogenerate: { directory: 'next' },
        },
        {
          label: 'React',
          autogenerate: { directory: 'react' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
