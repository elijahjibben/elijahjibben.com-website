// components/Footer/Footer.tsx
import React from 'react';
import { Container, Text, Box, Anchor } from '@mantine/core';

const FooterComponent: React.FC = () => {
  return (
    <Box component="footer" py="sm">
      <Container size="md">
        <Text size="xs" color="dimmed" ta="center">
          © Elijah Jibben 2024 | Designed and programmed in{' '}
          <Anchor href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
            VS Code
          </Anchor>{' '}
          with{' '}
          <Anchor href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js
          </Anchor>{' '}
          and{' '}
          <Anchor href="https://mantine.dev/" target="_blank" rel="noopener noreferrer">
            Mantine
          </Anchor>
        </Text>
      </Container>
    </Box>
  );
};

export default FooterComponent;
