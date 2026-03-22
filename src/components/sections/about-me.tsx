import Image from 'next/image';

import TannuFullPose from '/public/images/TannuFullPose.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
//import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={TannuFullPose}
              alt="Fullpose of Tanisha"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I’m a passionate, self-driven Graphic Designer who loves turning complex ideas into clean, intuitive, and visually compelling experiences.
             My work lives at the intersection of creativity and functionality—where design is not just about aesthetics, but about solving real problems.
            I focus on creating designs that truly connect and communicate.
          </Typography>
          <Typography>
            I started my journey in design with a deep curiosity for visuals and storytelling, and over time, it has evolved into a strong expertise across digital and offline mediums.
             Today, I specialize in Adobe Suite, CorelDraw, Canva, and Figma for UI design—constantly exploring new trends, tools, and techniques to push my creative boundaries further.
          </Typography>
          <Typography>
            Currently, I’m working at Reborn in Pune, where I’ve had the opportunity to contribute to award-winning campaigns for regional clients. 
            My work is centered around creating engaging, result-driven designs that not only look good but also elevate brand experiences and drive meaningful impact.
          </Typography>
          <Typography>
            I’m someone who believes in thinking beyond the obvious. 
            I enjoy working on projects end-to-end—from ideation and concept building to execution and final delivery. 
            For me, every project is a chance to tell a story, simplify complexity, and create something memorable.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Graduation in B.Com
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Detail-Oriented Graphic Designer</Typography>
              <Typography component="li">Innovative Design Artist</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
