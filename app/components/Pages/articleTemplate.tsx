// src/app/components/Pages/articleTemplate.tsx

'use client'

import HeaderComponent from "@/app/components/Header/Header";
import { Paper, TypographyStylesProvider } from "@mantine/core";
import { marked } from "marked";
import { useEffect, useState } from "react";
import '../../styles/articleStyles.css';
import FooterComponent from "../common/Footer";

interface ArticleTemplateProps {
  markdownPath: string; // Accept the markdown file path as a prop
}

export default function ArticleTemplate({ markdownPath }: ArticleTemplateProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    // Fetch the Markdown file based on the provided path
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(markdownPath);
        const markdown = await response.text();
        // Convert markdown to HTML
        const convertedHtml = marked(markdown) as string;
        setHtml(convertedHtml);
      } catch (error) {
        console.error("Error fetching the markdown file:", error);
      }
    };

    fetchMarkdown();
  }, [markdownPath]);

  return (
    <>
      <div>
        <HeaderComponent />
      </div>
      <div style={{ margin: '0 auto', padding: '20px', paddingTop: '80px', maxWidth: '1500px' }}>
      <Paper shadow="xl" radius="lg" p="lg" withBorder style={{ backgroundColor: '#DBD6C7' }}>
        <TypographyStylesProvider>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: html }} />
        </TypographyStylesProvider>
        </Paper>
      </div>
      <div><FooterComponent /></div>
    </>
  );
}
