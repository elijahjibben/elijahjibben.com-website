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
    image: 'https://placehold.co/400x600',
    title: 'Creation of this website',
    category: 'Project',
  },
  {
    image: 'https://placehold.co/400x600',
    title: 'Extraction of capsaicin from ghost peppers',
    category: 'Project',
  },
  {
    image: 'https://placehold.co/400x600',
    title: 'Is capsaicin the spiciest substance?',
    category: 'Blog',
  },
  {
    image: 'https://placehold.co/400x600',
    title: 'Sifting through Minecrafts source code to make mods',
    category: 'blog',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
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
      slidesToScroll={mobile ? 1 : 2}
      loop
      withIndicators
      classNames={{ control: classes.control, indicator: classes.indicator }}
    >
      {slides}
    </Carousel>
  );
}
