import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'AstroJournal - Your Cosmic Daily Journal',
  description = 'Track your daily journey with cosmic insights, moon phases, and astrological guidance. The perfect astrology journal for spiritual growth and self-reflection.',
  keywords = [
    'astrology journal',
    'moon phase tracker',
    'daily journal',
    'cosmic diary',
    'astrological insights',
    'mood tracking',
    'spiritual journal',
    'zodiac journal',
    'horoscope diary',
    'celestial journaling',
    'astrology app',
    'moon cycle',
    'star sign journal',
    'cosmic self-reflection',
    'astrological guidance'
  ],
  ogImage = '/og-image.jpg',
  ogUrl = 'https://astrojournal.vercel.app',
  canonical = 'https://astrojournal.vercel.app'
}) => {
  const formattedKeywords = keywords.join(', ');
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={formattedKeywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="AstroJournal" />
      
      {/* Structured Data for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            'name': 'AstroJournal',
            'description': description,
            'applicationCategory': 'LifestyleApplication',
            'operatingSystem': 'Web',
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'USD'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.8',
              'ratingCount': '256'
            }
          })
        }}
      />
    </Head>
  );
};
