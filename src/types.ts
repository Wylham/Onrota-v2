import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface SectionProps extends BaseProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

export interface NavItem {
  label: string;
  href: string;
}