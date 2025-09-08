// app/components/Pages/SecondPage
import React, { useEffect, useState } from 'react';
import { Box, Container, Flex, Image, Title, TypographyStylesProvider } from '@mantine/core';

import './animatedLine.css';

function SecondPage() {
  const [inView, setInView] = useState(false);
  const html =
    '<p>Hey, I'm Elijah. I'm a senior chemistry and computer science student at Grand Canyon University.</p><p>I am interested in the fields of computational chemistry and quantum chemistry. In particular I am drawn to excited state systems and electron dynamics as well as the potential future application of quantum computing to the field of computational chemsitry. In my free time I build websites and platforms, mod video games, and continue to explore the world of chemistry.</p><p>After graduation I plan to pursue a PhD in Chemistry focusing on theoretical chemistry, and build a career in research. I am incredibly passionate about chemistry, research, and contributing ethically to the field of science.</p>';

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
