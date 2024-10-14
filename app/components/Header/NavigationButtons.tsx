// components/Header/NavigationButtons.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Group } from '@mantine/core';
import ContactMenu from './ContactMenu';

const NavigationButtons = () => {
  const router = useRouter();

  const goToBlog = () => {
    router.push('/blog');
  };

  const goToProjects = () => {
    router.push('/projects');
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <Group>
      <Button variant="light" onClick={goToBlog}>
        Blog
      </Button>
      <Button variant="light" onClick={goToProjects}>
        Projects
      </Button>
      <Button variant="light" onClick={openResume}>
        Resume
      </Button>
      <ContactMenu />
    </Group>
  );
};

export default NavigationButtons;
