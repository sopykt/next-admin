import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      gender: {
        male: 'border-blue-200 bg-blue-100 hover:bg-blue-300 text-blue-800',
        female: 'border-pink-200 bg-pink-100 hover:bg-pink-300 text-pink-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  gender?: 'male' | 'female';
}

function Badge({ className, variant, gender, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, gender }), className)} {...props} />;
}

export { Badge, badgeVariants };
