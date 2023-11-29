import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Most <GradientText>recent projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Find, monitoring and schedule the earliest drive licence appointment"
        description="This project aims to automate the often frustrating 
        process of finding and booking DMV appointments. I created a system 
        to continuously monitor the DMV appointment site for newly available slots. 
        Using a telegram bot users are able to subscribe the notifications 
        for specific locations and time slots.
        When an earlier appointment becomes available, the bot should instantly notify subscribed users, 
        enabling them to quickly secure the desired appointment."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.ZINC}>Python</Tags>
            <Tags color={ColorTags.LIME}>Selenium</Tags>
            <Tags color={ColorTags.EMERALD}>Telegram API</Tags>
            <Tags color={ColorTags.ORANGE}>AWS Lambda</Tags>
          </>
        }
      />
      <Project
        name="Static site terraform module"
        description="Terraform module that abstracts the AWS infrastructure provision 
        and all the backend deployment settings for static site deployments. 
        Users should be able to choose their preferred static site generator and be 
        able to use the caching policies using cloud front distribution as CDN.
        This module aims to provide a consistent and reproducible way to deploy static sites, 
        promoting flexibility and avoiding vendor lock-in."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.NEUTRAL}>Terraform</Tags>
            <Tags color={ColorTags.LIME}>AWS S3</Tags>
            <Tags color={ColorTags.EMERALD}>AWS Route53</Tags>
            <Tags color={ColorTags.YELLOW}>AWS Cloud front</Tags>
          </>
        }
      />
      <Project
        name="Home apps deploy automation"
        description="An open source home automation system that uses a set of 
        Raspberry Pis as a central hub for all the devices. Services like AdGuard Home, 
        NextCloud, Home Assistant, and WireGuard are deployed as containers using Podman."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.LIME}>Ansible</Tags>
            <Tags color={ColorTags.ZINC}>Containers</Tags>
            <Tags color={ColorTags.YELLOW}>Networking</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
