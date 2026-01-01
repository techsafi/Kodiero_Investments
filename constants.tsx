
import React from 'react';
import { 
  ShieldCheck, 
  Wifi, 
  Zap, 
  Droplets, 
  Car, 
  Building2, 
  Briefcase, 
  Store,
  FlameKindling
} from 'lucide-react';
import { NavItem, Amenity, Space } from './types';

export const COLORS = {
  primary: '#F59E0B', 
  secondary: '#FDFCF0', 
  text: '#1F2937', 
  accent: '#0F172A', 
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Spaces', path: '/spaces' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'security',
    icon: 'ShieldCheck',
    title: 'Security & Safety',
    description: 'CCTV surveillance system with 24-hour guards and controlled access points.'
  },
  {
    id: 'power',
    icon: 'Zap',
    title: '24/7 Power Backup',
    description: 'Automatic backup generator ensures zero downtime for offices and retail businesses.'
  },
  {
    id: 'water',
    icon: 'Droplets',
    title: 'Water Reserves',
    description: 'Underground and overhead storage tanks for a reliable, constant water supply.'
  },
  {
    id: 'parking',
    icon: 'Car',
    title: 'Parking & Access',
    description: 'Ample parking for tenants and visitors with convenient loading access.'
  },
  {
    id: 'fiber',
    icon: 'Wifi',
    title: 'Connectivity',
    description: 'High-speed fiber internet ready for corporate and professional usage.'
  },
  {
    id: 'fire',
    icon: 'FlameKindling',
    title: 'Emergency Ready',
    description: 'Safety-conscious design with professional fire alarm systems installed throughout.'
  }
];

export const SPACES: Space[] = [
  {
    id: 'retail',
    type: 'Shop',
    title: 'Retail & Shop Spaces',
    size: 'High Visibility Units',
    priceRange: 'Strategic Frontage',
    features: ['Clinics & Salons', 'Fashion & Beauty', 'Electronics', 'Walk-in traffic'],
    image: '/images/exterior_overview.jpg',
    status: 'Limited'
  },
  {
    id: 'office',
    type: 'Office',
    title: 'Modern Office Suites',
    size: 'Professional Layouts',
    priceRange: 'Competitive Rates',
    features: ['NGOs & Institutions', 'Law & IT Firms', 'Consultancies', 'Well-lit rooms'],
    image: '/images/interior1.jpg',
    status: 'Available'
  }
];

export const GALLERY_VIDEOS = [
  { id: 'v1', src: '/images/video-1.mp4', title: 'Exterior Tour', category: 'Virtual Tour' },
  { id: 'v2', src: '/images/video-2.mp4', title: 'Office Walkthrough', category: 'Interior' },
  { id: 'v3', src: '/images/video-3.mp4', title: 'Business Hub Lifestyle', category: 'Community' },
];

export const CONTACT_INFO = {
  phone: '0716 680 433',
  email: 'kodieroinvestments@gmail.com',
  address: 'Kondele - Kibos Road, P.O. Box 786 - 40123, Kisumu, Kenya',
  whatsapp: '254716680433'
};

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'Car': return <Car className={className} />;
    case 'Wifi': return <Wifi className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Store': return <Store className={className} />;
    case 'FlameKindling': return <FlameKindling className={className} />;
    default: return <Building2 className={className} />;
  }
};
