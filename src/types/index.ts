export interface TeamMember {
  id: string;
  name: string;
  title: string;
  organization: string;
  image: string;
  isFounder?: boolean;
  isHighlighted?: boolean;
  quote: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}
