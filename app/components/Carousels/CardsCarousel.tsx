import { useRouter } from 'next/navigation';
import { Carousel } from '@mantine/carousel';
import { Button, Paper, rem, Text, Title } from '@mantine/core';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
  route: string;
}

function Card({ image, title, category, route }: CardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

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
      <Button variant="filled" onClick={handleClick}>
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: './projects/website-creation/images/website-creation-thumbnail.png',
    title: 'Creating a Portfolio Website',
    category: 'Project',
    route: '/projects/website-creation',
  },
  {
    image: './projects/capsaicin-extraction/images/capsaicin-project-thumbnail.png',
    title: 'Extraction of capsaicin from ghost peppers',
    category: 'Project',
    route: '/projects/capsaicin-extraction',
  },
  {
    image: './blog-articles/capsaicin/images/capsaicin-thumbnail.png',
    title: 'Is capsaicin the spiciest substance?',
    category: 'Blog',
    route: '/blog/capsaicin',
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
