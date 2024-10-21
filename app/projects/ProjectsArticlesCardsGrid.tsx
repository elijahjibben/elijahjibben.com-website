// src/app/components/ArticlesCardsGrid/ArticlesCardsGrid.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from '@mantine/core';
import classes from './ProjectsArticlesCardsGrid.module.css';

// Data for each of the article cards
const articleData = [
  {
    title: 'Creating a Portfolio Website',
    image:
      './project-images/website-creation/website-creation-thumbnail-16-9.png',
    date: 'To Be Written',
    route: '/projects/website-creation',
  },
  {
    title: 'Extraction of Capsaicin from Ghost Peppers',
    image:
      './project-images/capsaicin-extraction/capsaicin-project-thumbnail-16-9.png',
    date: 'To Be Written',
    route: '/projects/capsaicin-extraction',
  },
];

export default function ArticlesCardsGrid() {
  const router = useRouter();

  const cards = articleData.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      className={classes.card}
      onClick={() => router.push(article.route)}
    >
      <AspectRatio ratio={16 / 9}>
        <Image src={article.image} alt={article.title} radius={"xl"} />
      </AspectRatio>
      <Text
        color="dimmed"
        size="xs"
        tt="uppercase"
        fw={700}
        mt="md"
      >
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" size="85%">
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3}}
        spacing="lg"
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}
