import type { Metadata } from 'next'
import { Inter, Orbitron, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', weight: ['400','700','900'], display: 'swap' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira', weight: ['300','400','500'], display: 'swap' })

const BASE_URL = 'https://waqas-khan-frontend-dev.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Waqas Khan | Frontend Developer',
    template: '%s | Waqas Khan',
  },

  description:
    'Waqas Khan is a Frontend Developer with 2+ years of experience based in Islamabad, Pakistan. Specializing in React.js, Next.js, and modern UI development — building fast, responsive, and visually stunning web applications.',

  keywords: [
    'Waqas Khan',
    'Frontend Developer',
    'Frontend Developer Pakistan',
    'Frontend Developer Islamabad',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Material UI',
    'Redux',
    'Web Developer',
    'UI Developer',
    'Web Development Islamabad',
    'Web Development Pakistan',
    'Hire Frontend Developer',
    'Portfolio',
  ],

  authors: [{ name: 'Waqas Khan', url: BASE_URL }],
  creator: 'Waqas Khan',
  publisher: 'Waqas Khan',

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Waqas Khan — Frontend Developer',
    title: 'Waqas Khan | Frontend Developer',
    description:
      'Frontend Developer with 2+ years of experience. Specializing in React.js, Next.js, and modern web development. Based in Islamabad, Pakistan.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Waqas Khan | Frontend Developer',
    description:
      'Frontend Developer specializing in React.js and Next.js. Building modern, responsive web apps from Islamabad, Pakistan.',
  },

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },

  manifest: '/site.webmanifest',

  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${firaCode.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
