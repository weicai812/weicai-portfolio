import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gan Wei Cai | Software Developer Portfolio',
  name: 'Gan Wei Cai',
  description: 'Showcasing the projects, skills, and achievements of Gan Wei Cai, a proficient full stack developer.',
  url: 'https://weicai-portfolio.vercel.app/',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.name} />
        <link rel="canonical" href={metadata.url} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/app/favicon.ico" />

      </Head>
      <body className={inter.className}>
        <div className="page-container">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
