import type React from 'react';

import type { IcxnProps } from './types';

export type IcxnVariant = 'test' | 'vhs-close' | 'menu';

export const Icxn = ({ variant, ...props }: IcxnProps) => {
  if (variant === 'test') {
    return (
      <>
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5301 4.53032C20.823 4.23743 20.823 3.76256 20.5301 3.46966C20.2372 3.17677 19.7623 3.17677 19.4694 3.46966L11.9998 10.9393L4.53009 3.46967C4.23719 3.17677 3.76232 3.17677 3.46943 3.46967C3.17653 3.76256 3.17653 4.23743 3.46943 4.53033L10.9391 12L3.46943 19.4697C3.17653 19.7626 3.17653 20.2374 3.46943 20.5303C3.76232 20.8232 4.23719 20.8232 4.53009 20.5303L11.9998 13.0607L19.4694 20.5303C19.7623 20.8232 20.2372 20.8232 20.5301 20.5303C20.823 20.2374 20.823 19.7626 20.5301 19.4697L13.0604 12L20.5301 4.53032Z"
          />
        </svg>
      </>
    );
  }

  return null;
};