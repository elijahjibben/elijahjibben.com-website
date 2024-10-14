'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],

    orange: [
      '#c57b57',
      '#b16f4e',
      '#9e6246',
      '#8a563d',
      '#764a34',
      '#633e2c',
      '#cb8868',
      '#d19579',
      '#e2bdab',
      '#d6a389',
    ],
  },

  primaryColor: 'orange',
  primaryShade: 1,

  white: 'rgb(222, 219, 210)',
  black: 'rgb(30, 45, 47)',
});
