// src/app/components/ArticlesCardsGrid/ArticlesCardsGrid.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from './BlogArticlesCardsGrid.module.css';

// Data for each of the article cards
const articleData = [
  {
    title: 'Is Capsaicin the Spiciest Substance?',
    image: './blog-articles/capsaicin/images/capsaicin-thumbnail-16-9.png',
    date: 'To Be Written',
    route: '/blog/capsaicin',
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
        <Image src={article.image} alt={article.title} radius="xl" />
      </AspectRatio>
      <Text color="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl" size="85%">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {cards}
      </SimpleGrid>
    </Container>
  );
}
