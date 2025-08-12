import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, loading, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-full";
    
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary", 
      outline: "border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white hover:scale-105",
      ghost: "text-white hover:bg-white/10 hover:text-accent-400"
    };
    
    const sizes = {
      sm: "py-2 px-6 text-sm",
      md: "py-3 px-8 text-base", 
      lg: "py-4 px-10 text-lg",
      xl: "py-5 px-12 text-xl"
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
