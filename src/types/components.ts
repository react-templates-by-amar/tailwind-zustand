import type { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ButtonSize;
}

// Add more component prop types here as your project grows
