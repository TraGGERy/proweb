// Database schema definitions for the PROWEB application

// News Article schema
export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  featured: boolean;
  created_at?: Date;
  updated_at?: Date;
}

// Gallery Image schema
export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
  created_at?: Date;
  updated_at?: Date;
}

// Membership Tier schema
export interface MembershipTier {
  id: number;
  name: string;
  price: number;
  duration: string;
  description: string;
  benefits: string[];
  created_at?: Date;
  updated_at?: Date;
}