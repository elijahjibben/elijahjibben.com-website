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
import classes from './BlogArticlesCardsGrid.module.css';

// Data for each of the article cards
const articleData = [
  {
    title: 'Top 10 Places to Visit in Norway This Summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
    route: '/blog/blog-1',
  },
  {
    title: 'Best Forests to Visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    date: 'August 27, 2022',
    route: '/blog/blog-2',
  },
  {
    title: 'Hawaii Beaches Review: Better Than You Think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    date: 'September 9, 2022',
    route: '/blog/blog-3',
  },
  {
    title: 'Mountains at Night: 12 Best Locations to Enjoy the View',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
    date: 'September 12, 2022',
    route: '/blog/blog-4',
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
