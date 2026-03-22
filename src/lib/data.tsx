import { Instagram, Linkedin } from 'lucide-react';

// import LogoJavascript from '/public/images/logos/icon-javascript.svg';
// import LogoTypescript from '/public/images/logos/icon-typescript.svg';
// import LogoReact from '/public/images/logos/icon-react.svg';
// import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
// import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
// import LogoExpress from '/public/images/logos/icon-express.svg';
// import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
// import LogoNest from '/public/images/logos/icon-nest.svg';
// import LogoSocket from '/public/images/logos/icon-socket.svg';
// import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
// import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
// import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
// import LogoSass from '/public/images/logos/icon-sass.svg';
// import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoAdobePhotoshop from '/public/images/logos/icon-Photoshop.svg';
import LogoAdobeIllustrator from '/public/images/logos/icon-illustrator.svg';
import LogoCorelDraw from '/public/images/logos/icon-Cdr.svg';
import LogoAdobeAfterEffects from '/public/images/logos/icon-AE.svg';
import LogoAdobeInDesign from '/public/images/logos/icon-ID.svg';
import LogoAdobeXD from '/public/images/logos/icon-XD.svg';
import LogoCanva from '/public/images/logos/icon-canva.svg';
import LogoInobalWhite from '/public/images/logos/icon-inobalWhite.png';
// import LogoCypress from '/public/images/logos/icon-cypress.svg';
// import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
// import LogoStorybook from '/public/images/logos/icon-storybook.svg';
// import LogoGit from '/public/images/logos/icon-git.svg';

import LogoReborn from '/public/images/logos/icon-reborn.png';
import LogoRebornDark from '/public/images/logos/icon-rebornDark.png'
import LogoInobal from '/public/images/logos/icon-inobal.png';
// import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
// import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
// import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';
import LogoTGDark from '/public/images/logos/Logo-TGDark.png';
import LogoTGLight from '/public/images/logos/Logo-TGWhite.png';

// import ProjectFiskil from '/public/images/project-fiskil.png';
// import ProjectWingie from '/public/images/project-wingie.png';
// import ProjectPepehousing from '/public/images/project-pepehousing.png';
import ProjectVivo from '/public/images/project-vivo.png';
import ProjectCreateLogo from '/public/images/project-createLogo.png';
import ProjectWeddingCard from '/public/images/project-weddingCard.png';
import ProjectGOMBanner from '/public/images/project-GOM.png';
import ProjectNafedCoffee from '/public/images/project-nafedCoffee.png';

// import AvatarKrisztian from '/public/images/avatar-krisztian.png';
// import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/tanishagupta02/',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/designesbyt?igsh=MjZuZWppZnF5bDVw',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'PhotoShop',
    logo: LogoAdobePhotoshop,
    url: 'https://www.adobe.com/in/products/photoshop.html',
  },
  {
    label: 'Illustrator',
    logo: LogoAdobeIllustrator,
    url: 'https://www.adobe.com/in/products/illustrator/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'CorelDraw',
    logo: LogoCorelDraw,
    url: 'https://www.coreldraw.com/',
  },
  {
    label: 'AfterEffects',
    logo: LogoAdobeAfterEffects,
    url: 'https://www.adobe.com/in/products/aftereffects.html',
  },
  {
    label: 'InDesign',
    logo: LogoAdobeInDesign,
    url: 'https://www.adobe.com/in/products/indesign.html',
  },
  {
    label: 'AdobeXD',
    logo: LogoAdobeXD,
    url: 'https://www.adobe.com/',
  },
  {
    label: 'Canva',
    logo: LogoCanva,
    url: 'https://www.canva.in/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoReborn,
    darkModeLogo: LogoRebornDark,
    logoAlt: 'Reborn logo',
    position: 'Graphic Designer',
    startDate: new Date(2024, 12),
    currentlyWorkHere: true,
    summary: [
      'Designed 100+ social media creatives and ad assets using Photoshop, Illustrator, Canva & CorelDRAW, boosting engagement by 30%.',
      'Created website banners and executed a complete print design project for NAFED Tea.',
      'Shot and edited 20+ treatment and doctor videos for social media and ad campaigns.',
      'Collaborated with marketing and clinic teams to ensure consistent and impactful visual communication.',
    ],
  },
  {
    logo: LogoInobal,
    darkModeLogo: LogoInobalWhite,
    logoAlt: 'Inobal logo',
    position: 'Creative Graphic Designer',
    startDate: new Date(2024, 9),
    endDate: new Date(2024, 12),
    summary: [
      'Gained hands-on experience in Adobe Photoshop, Illustrator, and InDesign.',
      'Collaborated with team members to deliver high-impact visual solutions.',
      'Designed 50+ creative assets including brochures, certificates, badges, and banners.',
      'Created engaging magazines and social media creatives to enhance brand presence.',
    ],
  },
  {
    logo: LogoTGLight,
    darkModeLogo: LogoTGDark,
    logoAlt: 'Freelance logo',
    position: 'Freelance Based Projects',
    startDate: new Date(2024, 9),
    currentlyWorkHere: true,
    summary: [
      'Delivered 10+ freelance brand projects including tech logo design for Create Software Solutions, eco focused logo for Bhavishya Biofuels, and a wedding invitation E-card.',
      'Designed professional corporate identity materials such as letterheads for Shree Shakthi Developers, ensuring clean and cohesive branding.',
      'Designed banners and standees for Vivo in collaboration with KNM Studio, ensuring strong visual impact and brand consistency.',
      'Created posters for the Government of Maharashtra’s “Anantyam” article, delivering clear and engaging visual communication.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Promotional Banner Design',
    description:
      'Designed a premium promotional banner for Vivo’s X300 Series in collaboration with KNM Studio, focusing on a visually immersive and high-end aesthetic.Handled layout structuring, color balance, and typography using brand-provided fonts and content assets.',
    url: 'https://www.behance.net/gallery/246186915/Promotional-Banner-Design-Standee-Design',
    previewImage: ProjectVivo,
    technologies: [
      'CorelDRAW',
      'Adobe Photoshop',
    ],
  },
  {
    name: 'Logo Design',
    description:
      'Designed a modern and dynamic logo for Create Software Solutions, focusing on innovation and growth. The “A” in “CREATE” was creatively transformed into a rocket icon, doubling as a distinctive favicon for brand identity.',
    url: 'https://www.behance.net/gallery/246187943/Logo-Design',
    previewImage: ProjectCreateLogo,
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
    ],
  },
  {
    name: 'E-Card Design',
    description:
      'Designed an official poster for “ANANTYAM” under the Government of Maharashtra, highlighting the Global Economic Cooperation 2026 initiative. Focused on a structured layout, refined typography, and a premium visual hierarchy to convey authority and clarity.',
    url: 'https://www.behance.net/gallery/246190133/E-Card-Design',
    previewImage: ProjectWeddingCard,
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
    ],
  },
  {
    name: 'Banner Design',
    description:
      'Designed an elegant wedding e-invitation featuring intricate, culturally inspired illustrations and a refined visual composition. Focused on detailed elements, harmonious color palette, and sophisticated typography to create a luxurious and inviting aesthetic.',
    url: 'https://www.behance.net/gallery/246187435/Poster-Design',
    previewImage: ProjectGOMBanner,
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'CorelDRAW',
    ],
  },
  {
    name: 'Print & Packaging Design',
    description:
      'Designed packaging and cup branding for NAFED Organic Green Tea, focusing on a fresh, minimal, and nature-inspired visual identity. Created a custom lotus logo formed with leaf elements, symbolizing purity, growth, and the essence of organic wellness across its 12 flavors. Executed thoughtful color theming and typography.',
    url: 'https://www.behance.net/gallery/246189673/Print-Packaging-Design',
    previewImage: ProjectNafedCoffee,
    technologies: [
      'Adobe Illustrator',
      'CorelDRAW',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Aman',
    personAvatar: AvatarDummy,
    title: 'Founder - Create Software Solutions',
    testimonial:
      'Tanisha designed a clean and meaningful logo for Create Software Solutions that truly reflects our brand. She was creative, detail-oriented, and made the whole process smooth and easy.',
  },
  {
    personName: 'KNM Studio',
    personAvatar: AvatarDummy,
    title: 'KNM Studio',
    testimonial:
      'Tanisha created clean and impactful banner and standee designs for Vivo that matched the brand perfectly. She was easy to work with, detail-oriented, and delivered everything on time.',
  },
  {
    personName: 'Parag Rohira',
    personAvatar: AvatarDummy,
    title: 'Freelance Client',
    testimonial:
      'Tanisha designed a beautiful and well-crafted digital E-card that perfectly captured the essence of our occasion. She was professional, easy to work with, and delivered exactly what we had in mind.',
  },
];
