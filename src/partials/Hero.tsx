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
          In the realm of {' '}<a className="text-cyan-400 hover:underline" href="/">cloud</a> systems administration and team leadership, 
          I thrive on the dynamic interplay of learning, automation, and collaboration.<br></br>
          I advocate for the enriching process of not just learning but actively <a className="text-cyan-400 hover:underline" href="/">sharing</a> and elucidating concepts with fellow team members.
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
          <a href="https://tinyurl.com/eddimas-linkedin">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://tinyurl.com/github-eddimas">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
