// components/Pages/FourthPage.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { ActionIcon, Box, Container, Flex, Text, Title } from '@mantine/core';

import './animatedLine.css';

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
} from '@tabler/icons-react';

const socialLinks = [
  {
    label: 'GitHub',
    icon: <IconBrandGithub size={24} />,
    href: 'https://github.com/elijahjibben',
  },
  {
    label: 'LinkedIn',
    icon: <IconBrandLinkedin size={24} />,
    href: 'https://linkedin.com/in/elijahjibben',
  },
  {
    label: 'Email',
    icon: <IconMail size={24} />,
    href: 'mailto:elijah.jibben@gmail.com',
  },
  {
    label: 'YouTube',
    icon: <IconBrandYoutube size={24} />,
    href: 'https://youtube.com/@elijahjibben',
  },
  {
    label: 'Instagram',
    icon: <IconBrandInstagram size={24} />,
    href: 'https://instagram.com/elijahjibben',
  },
];

function FourthPage() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('connect-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger the handler immediately in case the section is already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container id="connect-section" size="md" style={{ padding: '125px 0' }}>
      {/* Title with extending line animation aligned with the paragraph */}
      <Flex direction="column" align="center" mb="xl">
        <Box w="60%">
          <Flex align="center" justify="flex-end">
            <div className={`line ${inView ? 'animate-line-left' : ''}`} />
            <Title order={1} style={{ marginLeft: '20px', textAlign: 'right' }}>
              Connect
            </Title>
          </Flex>
        </Box>
      </Flex>

      {/* Sample Paragraph */}
      <Flex justify="center" mb="xl">
        <Box w="60%">
          <Text>
            I&apos;d love to hear from you! Whether you have a question, want to collaborate, or
            just want to say hi, feel free to reach out through any of the platforms below.
          </Text>
        </Box>
      </Flex>

      {/* Action Buttons */}
      <Flex justify="center" align="center" gap="md" wrap="wrap">
        {socialLinks.map((link) => (
          <ActionIcon
            key={link.label} // Add a key prop for list rendering
            variant="light"
            size="xl"
            radius="md"
            aria-label={link.label}
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </ActionIcon>
        ))}
      </Flex>
    </Container>
  );
}

export default FourthPage;
