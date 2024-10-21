// src/app/projects/capsaicin-extraction/page.tsx

'use client'

import HeaderComponent from "@/app/components/Header/Header";
import { TypographyStylesProvider } from "@mantine/core";
import '../../styles/articleStyles.css';

const html = '<h1 id="title">Title</h1> <p>Hello world! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <h2 id="secondary-title">Secondary Title</h2> <p>This is a subsection. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p><strong>And some bold text!</strong></p> <ul> <li>This</li> <li>is</li> <li>a</li> <li>list</li> </ul>';

export default function capsaicinPage() {
    return (
      <>
        <div>
          <HeaderComponent />
        </div>
        <div style={{ margin: '0 auto', padding: '20px', paddingTop: '80px', maxWidth: '1000px' }}>
          <TypographyStylesProvider>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: html }} />
          </TypographyStylesProvider>
        </div>
      </>
    );
  }
