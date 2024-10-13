import React, { useEffect, useState } from 'react';
import { Container, Flex, Text, Image, Title, Box, TypographyStylesProvider } from '@mantine/core';
import './secondPage.css';

function SecondPage() {
  const [inView, setInView] = useState(false);
  const html = '<p>Hello, my name is Elijah! I am currently a junior chemistry and computer science student at Grand Canyon University.</p><p>My biggest interests are in particle simulations and quantum chemistry. I also have a deep interest in organic chemistry and how it can be modeled through computational techniques. In computer science, I am particularly drawn to machine learning and web design. In my free time, I enjoy modding video games and exploring the applications of virtual reality.</p><p>After graduation, I plan to pursue a PhD in Chemistry, focusing on computational or quantum chemistry, and build a career in research. I am incredibly passionate about chemistry, and I am driven by the opportunity to apply computer science to advance the field.</p>';


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

      {/* Image and Paragraph side by side */}
      <Flex align="center">
        <Image
          src="https://via.placeholder.com/250"
          alt="Profile photo"
          radius="md"
          width={250}
          height={250}
          style={{ flexShrink: 0, marginRight: '20px' }} // Ensures the image does not shrink
        />
        <Box w={450}>
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{__html: html}} />
            </TypographyStylesProvider>
          </Box>
      </Flex>
    </Container>
  );
}

export default SecondPage;
