import { FooterCopyright, Section } from 'astro-boilerplate-components';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
  Built with ♥ by{' '}<a href={AppConfig.authorWebsite}>{AppConfig.authorName}</a>
  </Section>
);

export { Footer };
