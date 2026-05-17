export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Waqas Khan',
    url: 'https://waqaskhan.dev',
    email: 'waqas.khan.40004@gmail.com',
    telephone: '+923045454166',
    jobTitle: 'Frontend Developer',
    description:
      'Frontend Developer with 2+ years of experience specializing in React.js, Next.js, and modern UI development. Based in Islamabad, Pakistan.',
    image: 'https://waqaskhan.dev/og-image.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://www.linkedin.com/in/waqaskhan123/',
      'https://github.com/Waqaskhan404',
      'https://web.facebook.com/innocentwaqas.khan',
    ],
    knowsAbout: [
      'React.js', 'Next.js', 'JavaScript', 'TypeScript',
      'Tailwind CSS', 'Material UI', 'Redux', 'TanStack Query',
      'HTML5', 'CSS3', 'Git', 'JWT Authentication',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Comsats University Islamabad',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Islamabad',
        addressCountry: 'PK',
      },
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Open to Opportunities',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Waqas Khan Portfolio',
    url: 'https://waqaskhan.dev',
    description: 'Personal portfolio of Waqas Khan, Frontend Developer.',
    author: {
      '@type': 'Person',
      name: 'Waqas Khan',
    },
  }

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntity: {
      '@type': 'Person',
      name: 'Waqas Khan',
      identifier: 'waqaskhan123',
      description: 'Frontend Developer specializing in React.js and Next.js',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  )
}
