
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
  FlameKindling,
  Home,
  Info,
  LayoutGrid,
  Image as ImageIcon,
  PhoneCall
} from 'lucide-react';
import { NavItem, Amenity, Space } from './types';

export const COLORS = {
  primary: '#F59E0B',
  secondary: '#FDFCF0',
  text: '#1F2937',
  accent: '#0F172A',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: 'Home' },
  { label: 'About', path: '/about', icon: 'Info' },
  { label: 'Spaces', path: '/spaces', icon: 'LayoutGrid' },
  { label: 'Gallery', path: '/gallery', icon: 'ImageIcon' },
  { label: 'Contact', path: '/contact', icon: 'PhoneCall' },
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
    image: '/images/exterior.jpg',
    status: 'Limited'
  },
  {
    id: 'office',
    type: 'Office',
    title: 'Modern Office Suites',
    size: 'Professional Layouts',
    priceRange: 'Competitive Rates',
    features: ['NGOs & Institutions', 'Law & IT Firms', 'Consultancies', 'Well-lit rooms'],
    image: '/images/interior3.jpg',
    status: 'Available'
  }
];

export const GALLERY_VIDEOS = [
  { id: 'v1', src: '/Videos/overview.mp4', title: 'Property Overview', category: 'Virtual Tour' },
  { id: 'v2', src: '/Videos/interior_short.mp4', title: 'Interior Highlights', category: 'Interior' },
  { id: 'v3', src: '/Videos/vid.mp4', title: 'Business Hub Lifestyle', category: 'Community' },
  { id: 'v4', src: '/Videos/interior.mp4', title: 'Interior Tour', category: 'Interior' },
  { id: 'v5', src: '/Videos/video2.mp4', title: 'Feature Walkthrough', category: 'Features' },
];

export const GALLERY_IMAGES = [
  // Exterior
  { id: 'i1', src: '/images/hero.jpg', title: 'Main Entry', category: 'Exterior' },
  { id: 'i2', src: '/images/exterior.jpg', title: 'Building Front', category: 'Exterior' },
  { id: 'i3', src: '/images/exterior_overview.jpg', title: 'Full Exterior View', category: 'Exterior' },
  { id: 'i4', src: '/images/exterior1.jpg', title: 'Facade Detail', category: 'Exterior' },
  { id: 'i5', src: '/images/exterior2.jpg', title: 'Side View', category: 'Exterior' },
  { id: 'i6', src: '/images/exterior3.jpg', title: 'Street View', category: 'Exterior' },
  { id: 'i7', src: '/images/exterior4.jpg', title: 'Building Angle', category: 'Exterior' },
  { id: 'i8', src: '/images/exterior5.jpg', title: 'Exterior Perspective', category: 'Exterior' },

  // Compound
  { id: 'c1', src: '/images/compound.jpg', title: 'Main Compound', category: 'Compound' },
  { id: 'c2', src: '/images/compound1.jpg', title: 'Parking Area', category: 'Compound' },
  { id: 'c3', src: '/images/compound2.jpg', title: 'Driveway', category: 'Compound' },

  // Interior
  { id: 'in1', src: '/images/interior.jpg', title: 'Lobby Area', category: 'Interior' },
  { id: 'in2', src: '/images/interior1.jpg', title: 'Office Space', category: 'Interior' },
  { id: 'in3', src: '/images/interior2.jpg', title: 'Meeting Room', category: 'Interior' },
  { id: 'in4', src: '/images/interior3.jpg', title: 'Executive Suite', category: 'Interior' },
  { id: 'in5', src: '/images/interior4.jpg', title: 'Work Area', category: 'Interior' },
  { id: 'in6', src: '/images/interior5.jpg', title: 'Lounge', category: 'Interior' },
  { id: 'in7', src: '/images/corridor.jpg', title: 'Main Corridor', category: 'Interior' },
  { id: 'in8', src: '/images/corridor1.jpg', title: 'Hallway', category: 'Interior' },
  { id: 'in9', src: '/images/staircase.jpg', title: 'Main Staircase', category: 'Interior' },
  { id: 'in10', src: '/images/staircase1.jpg', title: 'Stairwell', category: 'Interior' },
  { id: 'in11', src: '/images/staircase2.jpg', title: 'Upper Floor Access', category: 'Interior' },

  // Facilities
  { id: 'f1', src: '/images/generator.jpg', title: 'Backup Generator', category: 'Facilities' },
  { id: 'f2', src: '/images/backup_generator.jpg', title: 'Power Backup Unit', category: 'Facilities' },
  { id: 'f3', src: '/images/power_control_interior.jpg', title: 'Control Room', category: 'Facilities' },
  { id: 'f4', src: '/images/power_control_interior1.jpg', title: 'Power Systems', category: 'Facilities' },
  { id: 'f5', src: '/images/fire_extinguishers.jpg', title: 'Fire Safety', category: 'Facilities' },
  { id: 'f6', src: '/images/sinks.jpg', title: 'Washroom Facilities', category: 'Facilities' },
  { id: 'f7', src: '/images/sinks1.jpg', title: 'Modern Amenities', category: 'Facilities' },
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
    case 'Home': return <Home className={className} />;
    case 'Info': return <Info className={className} />;
    case 'LayoutGrid': return <LayoutGrid className={className} />;
    case 'ImageIcon': return <ImageIcon className={className} />;
    case 'PhoneCall': return <PhoneCall className={className} />;
    default: return <Building2 className={className} />;
  }
};
