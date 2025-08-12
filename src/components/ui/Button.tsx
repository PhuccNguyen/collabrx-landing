import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 rounded-full";
    
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary", 
      outline: "border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
    };
    
    const sizes = {
      sm: "py-2 px-6 text-sm",
      md: "py-3 px-8 text-base", 
      lg: "py-4 px-10 text-lg"
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
