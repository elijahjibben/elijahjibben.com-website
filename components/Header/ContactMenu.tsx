// components/Header/ContactMenu.tsx
import React from 'react';
import { Menu, Button, rem } from '@mantine/core';
import { 
  IconChevronDown, 
  IconBrandGithub, 
  IconBrandLinkedin, 
  IconMail, 
  IconBrandYoutube, 
  IconBrandInstagram 
} from '@tabler/icons-react';

const ContactMenu: React.FC = () => {
  return (
    <Menu
      transitionProps={{ transition: 'pop-top-right' }}
      position="bottom-end"
      width={200}
    >
      <Menu.Target>
        <Button
          variant="light"
          rightSection={<IconChevronDown style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          pr={12}
        >
          Contact
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconBrandGithub size={16} />}
          component="a"
          href="https://github.com/elijahjibben"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Menu.Item>
        <Menu.Item
          leftSection={<IconBrandLinkedin size={16} />}
          component="a"
          href="https://linkedin.com/in/elijahjibben"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMail size={16} />}
          component="a"
          href="mailto:elijah.jibben@gmail.com"
        >
          Email
        </Menu.Item>
        <Menu.Item
          leftSection={<IconBrandYoutube size={16} />}
          component="a"
          href="https://youtube.com/@elijahjibben"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </Menu.Item>
        <Menu.Item
          leftSection={<IconBrandInstagram size={16} />}
          component="a"
          href="https://instagram.com/elijahjibben"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ContactMenu;
