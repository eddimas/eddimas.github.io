import { Section } from 'astro-boilerplate-components';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
  Built with ♥ by{' '}<a href={AppConfig.websiteURL}>{AppConfig.author}</a>
  </Section>
);

export { Footer };
