export interface TeamMember {
  id: string;
  name: string;
  title: string;
  organization?: string;
  image: string;
  isFounder?: boolean;
  isHighlighted?: boolean;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}
