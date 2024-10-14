"use client";

import React, { useEffect, useState } from 'react';
import { Container, Flex, Title, Text, Box } from '@mantine/core';
import './animatedLine.css';
import { CardsCarousel } from '@/app/components/Carousels/CardsCarousel';

function ThirdPage() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects-blog-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container id="projects-blog-section" size="md" style={{ padding: '125px 0' }}>
      {/* Title with extending line animation */}
      <Flex direction="column" align="flex-start" mb="xl">
        <Flex align="center">
          <Title order={1} style={{ marginRight: '20px' }}>
            Projects & Blog
          </Title>
          <div className={`line ${inView ? 'animate-line-long' : ''}`} />
        </Flex>
      </Flex>

      {/* Two Paragraphs side by side */}
      <Flex align="center" justify="space-between" mb="xl">
        <Box w="48%">
          <Text>
          Project pages showcase either tangible web applications or concise documentation about a project. They explain the purpose of the project, highlight the skills used and learned, discuss any challenges encountered, and include images and/or links to the project.
          </Text>
        </Box>
        <Box w="48%">
          <Text>
          Blog posts typically provide deeper insights related to a specific project. They detail the motivations behind pursuing the project, elaborate on problem-solving steps, and give a thorough explanation of the methods and processes involved.
          </Text>
        </Box>
      </Flex>

      {/* Smaller title below the paragraphs */}
      <Flex direction="column" align="flex-start">
        <Flex align="center">
          <Title order={3} style={{ marginBottom: '10px' }}>
            Featured
          </Title>
        </Flex>
      </Flex>

      <CardsCarousel />
    </Container>
  );
}

export default ThirdPage;
