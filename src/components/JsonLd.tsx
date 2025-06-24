'use client';

import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Component for adding structured data (JSON-LD) to pages
 * This helps search engines better understand the content
 */
export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Only add the script on the client side
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Clean up when component unmounts
      document.head.removeChild(script);
    };
  }, [data]);

  // This component doesn't render anything visible
  return null;
}