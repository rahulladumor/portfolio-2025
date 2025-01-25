"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
  icon?: IconType;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  iconPosition?: 'left' | 'right';
};

const Button: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  children,
  className,
  disabled = false,
  variant = 'primary',
  size = 'md',
  iconPosition = 'right',
  icon: Icon = BiLinkExternal,
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-base',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white',
    secondary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700',
    outline: 'bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-blue-500 dark:hover:border-blue-400',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={clsx(
        'relative group inline-flex items-center justify-center gap-2 rounded-xl font-medium',
        'transition-all duration-300 shadow-sm hover:shadow-md',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {/* Background Glow Effect */}
      <div className={clsx(
        'absolute inset-0 rounded-xl transition-opacity duration-300 blur-xl opacity-50 group-hover:opacity-75',
        {
          'bg-gradient-to-r from-blue-500/50 to-purple-500/50': variant === 'primary',
          'bg-white/50 dark:bg-gray-800/50': variant === 'secondary',
          'bg-transparent': variant === 'outline',
        }
      )} />

      {/* Content */}
      <div className="relative flex items-center gap-2">
        {Icon && iconPosition === 'left' && (
          <Icon className={clsx(
            'w-4 h-4 transition-transform duration-300',
            'group-hover:-translate-x-0.5',
            {
              'opacity-90': variant === 'primary',
              'text-gray-700 dark:text-gray-300': variant !== 'primary',
            }
          )} />
        )}
        
        <span>{children}</span>

        {Icon && iconPosition === 'right' && (
          <Icon className={clsx(
            'w-4 h-4 transition-transform duration-300',
            'group-hover:translate-x-0.5',
            {
              'opacity-90': variant === 'primary',
              'text-gray-700 dark:text-gray-300': variant !== 'primary',
            }
          )} />
        )}
      </div>

      {/* Hover Border Effect */}
      <div className={clsx(
        'absolute inset-0 rounded-xl border transition-opacity duration-300',
        'opacity-0 group-hover:opacity-100',
        {
          'border-white/25': variant === 'primary',
          'border-gray-200 dark:border-gray-700': variant === 'secondary',
          'border-blue-500/50 dark:border-blue-400/50': variant === 'outline',
        }
      )} />
    </motion.button>
  );
};

export default Button;
