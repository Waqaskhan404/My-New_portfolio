import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Waqas Khan — Frontend Developer',
    short_name: 'Waqas Khan',
    description: 'Frontend Developer specializing in React.js and Next.js. Based in Islamabad, Pakistan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#00f5ff',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
