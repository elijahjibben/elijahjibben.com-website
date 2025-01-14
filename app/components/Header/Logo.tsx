// components/Header/Logo.tsx
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ActionIcon, Image } from '@mantine/core';

const Logo: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <ActionIcon
      onClick={handleLogoClick}
      style={{ cursor: 'pointer' }}
      variant="transparent"
      size="xl"
    >
      <Image src="/turtle_icon_transparent.png" alt="Logo" width={40} height={40} />
    </ActionIcon>
  );
};

export default Logo;
