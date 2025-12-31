
import React from 'react';
import { 
  ShieldCheck, 
  Wifi, 
  Zap, 
  Droplets, 
  Car, 
  Building2, 
  Briefcase, 
  Store 
} from 'lucide-react';
import { NavItem, Amenity, Space } from './types';

export const COLORS = {
  primary: '#F59E0B', // Gold / Orange
  secondary: '#FDFCF0', // Light Grey / Beige
  text: '#1F2937', // Dark Grey
  accent: '#0F172A', // Navy
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
    title: '24/7 Security',
    description: 'CCTV surveillance and professional security guards onsite.'
  },
  {
    id: 'power',
    icon: 'Zap',
    title: 'Backup Generator',
    description: 'Automatic backup system ensuring zero downtime for your business.'
  },
  {
    id: 'water',
    icon: 'Droplets',
    title: 'Constant Water Supply',
    description: 'Reliable water connection with high-capacity storage tanks.'
  },
  {
    id: 'parking',
    icon: 'Car',
    title: 'Ample Parking',
    description: 'Dedicated parking spaces for tenants and visitors.'
  },
  {
    id: 'fiber',
    icon: 'Wifi',
    title: 'High-Speed Fiber',
    description: 'Multiple ISP options with high-speed internet capability.'
  },
  {
    id: 'location',
    icon: 'Building2',
    title: 'Strategic Hub',
    description: 'Located at the heart of Kondele, Kisumu\'s commercial nexus.'
  }
];

export const SPACES: Space[] = [
  {
    id: '1',
    type: 'Shop',
    title: 'Premium Ground Floor Shops',
    size: '150 - 500 sq ft',
    priceRange: 'Contact for Pricing',
    features: ['High foot traffic', 'Front glass display', 'Personal washroom'],
    image: 'https://picsum.photos/seed/kodiero-shop/800/600',
    status: 'Limited'
  },
  {
    id: '2',
    type: 'Office',
    title: 'Modern Executive Suites',
    size: '200 - 1200 sq ft',
    priceRange: 'Competitive Rates',
    features: ['Natural lighting', 'Soundproof walls', 'Kitchenette access'],
    image: 'https://picsum.photos/seed/kodiero-office/800/600',
    status: 'Available'
  },
  {
    id: '3',
    type: 'Storage',
    title: 'Secure Inventory Storage',
    size: '50 - 150 sq ft',
    priceRange: 'Affordable Monthly',
    features: ['Climate controlled', '24h access', 'Heavy duty doors'],
    image: 'https://picsum.photos/seed/kodiero-storage/800/600',
    status: 'Available'
  }
];

export const CONTACT_INFO = {
  phone: '+254 7XX XXX XXX',
  email: 'info@kodieroinvestments.com',
  address: 'Kondele - Kibos Road, Kisumu, Kenya',
  whatsapp: '2547XXXXXXXX'
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
    default: return <Building2 className={className} />;
  }
};
