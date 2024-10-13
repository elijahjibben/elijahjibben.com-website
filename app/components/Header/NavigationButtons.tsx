// components/Header/NavigationButtons.tsx
import React from 'react';
import { Group, Button } from '@mantine/core';
import ContactMenu from './ContactMenu';

const NavigationButtons: React.FC = () => {
  return (
    <Group>
      <Button variant="light">Blog</Button>
      <Button variant="light">Projects</Button>
      <Button variant="light">Resume</Button>
      <ContactMenu />
    </Group>
  );
};

export default NavigationButtons;
