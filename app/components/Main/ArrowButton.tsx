// components/Main/ArrowButton.tsx
import React from 'react';
import { Button, Transition } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';

interface ArrowButtonProps {
  show: boolean;
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ show, onClick }) => {
  return (
    <Transition
      mounted={show}
      transition="fade-down"
      duration={1000}
      timingFunction="ease"
    >
      {(styles) => (
        <Button
          variant="subtle"
          style={styles}
          onClick={onClick}
        >
          <IconArrowDown size={32} />
        </Button>
      )}
    </Transition>
  );
};

export default ArrowButton;
