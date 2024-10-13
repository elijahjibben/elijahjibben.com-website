// components/SecondPage/SecondPage.tsx
import React from 'react';
import { Center, Stack, Text } from '@mantine/core';

const SecondPage: React.FC = () => {
  return (
    <Center style={{ height: '100vh' }}>
      <Stack align="center">
        <Text size="xl">Sample Header</Text>
        <Text>This is a sample paragraph.</Text>
      </Stack>
    </Center>
  );
};

export default SecondPage;
