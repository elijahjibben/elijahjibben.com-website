import '@mantine/core/styles.css';
import './globals.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Elijah Jibben',
  description: 'I am making a website!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript/>
        <link rel="shortcut icon" href="https://github.com/elijahjibben/elijahjibben.com-website/blob/master/images/turtle_icon_transparent.png?raw=true" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
