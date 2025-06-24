/**
 * Utility functions for generating structured data (JSON-LD)
 * for different page types to improve SEO
 */

// Organization structured data
export function getOrganizationData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PROWEB Zimbabwe',
    alternateName: 'Professional Women in Business Zimbabwe',
    url: 'https://prowebzimbabwe.org',
    logo: 'https://prowebzimbabwe.org/logo.png',
    sameAs: [
      'https://facebook.com/prowebzimbabwe',
      'https://twitter.com/prowebzimbabwe',
      'https://linkedin.com/company/prowebzimbabwe',
      'https://instagram.com/prowebzimbabwe'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+263-000-000000',
      contactType: 'customer service',
      email: 'info@prowebzimbabwe.org',
      availableLanguage: 'English'
    },
    description: 'PROWEB Zimbabwe empowers professional women in business through networking, mentorship, training, and advocacy for economic empowerment and leadership development.'
  };
}

// Website structured data
export function getWebsiteData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PROWEB Zimbabwe',
    url: 'https://prowebzimbabwe.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://prowebzimbabwe.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

// Event structured data
export function getEventData(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Harare',
        addressRegion: 'Harare',
        addressCountry: 'Zimbabwe'
      }
    },
    image: event.image,
    organizer: {
      '@type': 'Organization',
      name: 'PROWEB Zimbabwe',
      url: 'https://prowebzimbabwe.org'
    }
  };
}

// Article structured data for news
export function getArticleData(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'PROWEB Zimbabwe',
      logo: {
        '@type': 'ImageObject',
        url: 'https://prowebzimbabwe.org/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prowebzimbabwe.org/news'
    }
  };
}

// BreadcrumbList structured data
export function getBreadcrumbData(items: Array<{name: string; url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}