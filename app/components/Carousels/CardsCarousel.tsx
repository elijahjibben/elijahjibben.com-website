import { Carousel } from '@mantine/carousel';
import { Button, Paper, rem, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="filled">Read article</Button>
    </Paper>
  );
}

const data = [
  {
    image: './project-images/website-creation/website-creation-thumbnail.png',
    title: 'Creation of this website',
    category: 'Project',
  },
  {
    image: './project-images/capsaicin-extraction/capsaicin-project-thumbnail.png',
    title: 'Extraction of capsaicin from ghost peppers',
    category: 'Project',
  },
  {
    image: './blog-images/capsaicin/capsaicin-thumbnail.png',
    title: 'Is capsaicin the spiciest substance?',
    category: 'Blog',
  },
];

export function CardsCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '40%' }}
      slideGap={{ base: rem(2), sm: 'lg' }}
      align="start"
      slidesToScroll={1}
      loop
      withIndicators
      classNames={{ control: classes.control, indicator: classes.indicator }}
    >
      {slides}
    </Carousel>
  );
}
