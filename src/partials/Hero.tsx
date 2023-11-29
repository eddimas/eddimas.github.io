import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Eduardo Dimas</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a passionate <a className="text-cyan-400 hover:underline" href="/">SRE</a> with SecDevOps mindset. Always looking to enrich process not just learning,
          but actively <a className="text-cyan-400 hover:underline" href="/">sharing</a> and demonstrating concepts with fellow team members.<br />
          <a className="text-cyan-400 hover:underline" href="/">AWS Solutions Architect Associate</a> certified, with a strong background in Linux, Cloud, Open Source and DevOps culture.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://tinyurl.com/eddimas-github">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
          <a href="https://tinyurl.com/eddimas-linkedin">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
