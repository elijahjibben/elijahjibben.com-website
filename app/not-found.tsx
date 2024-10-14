import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from './styles/NotFoundTitle.module.css';

export default function NotFoundTitle() {
  return (
    <Container className={classes.root}>
      <div className={classes.title}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text color="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group justify="center">
        <Button component="a" href="/" variant="filled" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
