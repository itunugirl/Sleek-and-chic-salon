import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  ariaLabel?: string; // Optional aria-label for accessibility
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className, ariaLabel }) => {
  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {label}
    </Link>
  );
};

export default NavLink;
