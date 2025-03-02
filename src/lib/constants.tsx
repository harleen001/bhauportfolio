import { Section, SectionColors, Sections } from './types';
import Home from '@/components/home';
import Projects from "@/components/Projects";
import Contact from '@/components/contact';
import Description from '@/components/Description/Description';
export const ANIMATION_DURATION = {
  SHORT: 0.2,
  MEDIUM: 0.4,
  LONG: 0.8,
};

export const SECTIONS: Section[] = [
  {
    content: <Home />, title: 'Home',
    subsections: undefined
  },
  {
    content: <Description />, title: '',
    subsections: undefined
  },
  {
    content: <Projects />, title: '',
    subsections: undefined
  },
  {
    content: <Contact />, title: 'Contact',
    subsections: undefined
  },
];

// Set black background color for all themes
export const THEMES: Record<string, SectionColors> = {
  main: {
    background: 'black', // Set black background color
    primary: 'var(--theme-1-primary)',
    secondary: 'var(--theme-1-secondary)',
    accent: 'var(--theme-1-accent)',
  },
  mjolnir: {
    background: 'black', // Set black background color
    primary: 'var(--theme-2-primary)',
    secondary: 'var(--theme-2-secondary)',
    accent: 'var(--theme-2-accent)',
  },
  ainur: {
    background: 'black', // Set black background color
    primary: 'var(--theme-3-primary)',
    secondary: 'var(--theme-3-secondary)',
    accent: 'var(--theme-3-accent)',
  },
  jeton: {
    background: 'black', // Set black background color
    primary: 'var(--theme-4-primary)',
    secondary: 'var(--theme-4-secondary)',
    accent: 'var(--theme-4-accent)',
  },
  experiences: {
    background: 'black', // Set black background color
    primary: 'var(--theme-5-primary)',
    secondary: 'var(--theme-5-secondary)',
    accent: 'var(--theme-5-accent)',
  },
};

export const SECTION_THEME_MAP: {
  [key: number]: SectionColors | { [subKey: number]: SectionColors };
} = {
  [Sections.Home]: THEMES.main,
  [Sections.Description]:THEMES.mjolnir,
    
  [Sections.Project]: THEMES.experiences,
  [Sections.Contact]: THEMES.main,
};
export const WORKS_ITEMS = [
  {

   title: 'Mjolnir',
   subject: 'Design and Implementation',
   description:
    "Mjolnir is a platform forged in the spirit of Norse mythology, where the power of creation is placed in your hands. It's built with Svelte.",
   link: 'https://mjolnir.ainurhq.cloud',
   techStack: ['Svelte', 'TypeScript', 'Tailwind CSS'],
  },
  
 ];
export const WORK_SUBSECTIONS = WORKS_ITEMS.length;