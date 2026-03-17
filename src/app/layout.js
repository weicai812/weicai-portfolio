import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://weicai-portfolio.vercel.app'),

  title: {
    default: 'Gan Wei Cai | Software Developer & Data Analyst',
    template: '%s | Gan Wei Cai',
  },

  description:
    'Gan Wei Cai is a software developer and data analyst specializing in web development, data analytics, and modern JavaScript frameworks.',

  keywords: [
    'Gan Wei Cai',
    'Software Developer',
    'Data Analyst',
    'Full Stack Developer',
    'Next.js Portfolio',
    'React Developer',
    'Data Science',
    'Power BI',
    'SQL',
  ],

  authors: [{ name: 'Gan Wei Cai' }],
  creator: 'Gan Wei Cai',

  openGraph: {
    title: 'Gan Wei Cai | Software Developer & Data Analyst',
    description:
      'Explore projects, skills, and experience in software development, data analytics, and data science.',
    url: '/',
    siteName: 'Gan Wei Cai Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gan Wei Cai Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Gan Wei Cai | Software Developer & Data Analyst',
    description:
      'Projects and experience in software engineering, data analytics, and data science.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gan Wei Cai',
              url: 'https://weicai-portfolio.vercel.app',
              jobTitle: 'Software Developer & Data Analyst',
              sameAs: [
                'https://github.com/weicai812',
                'https://www.linkedin.com/in/YOUR_LINKEDIN',
              ],
            }),
          }}
        />

        {/* App Background Wrapper */}
        <div className="app-background">
          {/* Navbar on top */}
          <Navbar />

          {/* Particle canvas will be added in pages like about/page.js */}
          <main
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
            }}
          >
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
