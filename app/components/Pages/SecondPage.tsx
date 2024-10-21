// app/components/Pages/SecondPage
import React, { useEffect, useState } from 'react';
import { Box, Container, Flex, Image, Title, TypographyStylesProvider } from '@mantine/core';

import './animatedLine.css';

function SecondPage() {
  const [inView, setInView] = useState(false);
  const html =
    '<p>Hello, my name is Elijah! I am currently a junior chemistry and computer science student at Grand Canyon University.</p><p>My biggest interests are in particle simulations and quantum chemistry. I also have a deep interest in organic chemistry and how it can be modeled through computational techniques. In computer science, I am particularly drawn to machine learning and platform design. In my free time, I enjoy modding video games and exploring the applications of virtual reality.</p><p>After graduation, I plan to pursue a PhD in Chemistry, focusing on computational or quantum chemistry, and build a career in research. I am incredibly passionate about chemistry, and I am driven by the opportunity to apply computer science to the field.</p>';

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('about-me-section');
      if (aboutMeSection) {
        const rect = aboutMeSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container id="about-me-section" size="md" style={{ padding: '125px 0' }}>
      {/* Title centered with lines */}
      <Flex direction="column" align="center" mb="xl">
        <Flex align="center" justify="center">
          <div className={`line ${inView ? 'animate-line' : ''}`} />
          <Title order={1} style={{ margin: '0 20px' }}>
            About Me
          </Title>
          <div className={`line ${inView ? 'animate-line' : ''}`} />
        </Flex>
      </Flex>

      {/* Image and Paragraph centered as a group */}
      <Flex align="center" justify="center">
        <Image
          src="./ejibben_headshot.png"
          fallbackSrc="https://placehold.co/350x350?text=Placeholder"
          alt="Profile photo"
          radius="xl"
          width={350}
          height={350}
          style={{ flexShrink: 0, marginRight: '20px' }} // Ensures the image does not shrink and has space to the right
        />
        <Box w={450}>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </TypographyStylesProvider>
        </Box>
      </Flex>
    </Container>
  );
}

export default SecondPage;
