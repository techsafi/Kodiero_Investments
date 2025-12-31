
export interface Space {
  id: string;
  type: 'Shop' | 'Office' | 'Storage';
  title: string;
  size: string;
  priceRange: string;
  features: string[];
  image: string;
  status: 'Available' | 'Occupied' | 'Limited';
}

export interface Amenity {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}
