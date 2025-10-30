import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Images } from "lucide-react";
import { Smartphone } from 'lucide-react';

export const DATA = {
  name: "Fahad",
  initials: "",
  url: "https://syedfahad.tech",
  location: "Hyderabad, India ",
  locationLink: "https://www.google.com/maps/place/Hyderabad",
  description:
    "Engineer by Day Coder by Night 🧑🏻‍💻. I love building things and helping people.",
  summary: "I started my coding journey more than two years ago, and I immediately fell in love with it. I was super excited to build products & over time I worked with a lot of startups and organizations, and most importantly, help people get into tech, use tech to improve lives, and bring it into businesses. I'm also into Developer Relations — building communities, creating content, and connecting developers through events and talks to share cool products and what I’ve learned.",
  avatarUrl: "/me.jpg",
  skills: [
    "Developer Relations",
    "Advocacy",
    "Community Building",
    "Flutter",
    "React Native",
    "Backend Development",
    "AWS Services",
    "Docker",
    "Next.js",
    "Framer",
    "Shopify",
    "WordPress",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/gallery", icon: Images, label: "Gallery" },
  ],
  contact: {
    email: "syedfahad.dev@gmail.com",
    tel: "+919908664284",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/syedfahad7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sfahad-dev",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/fahad_developer",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Trikaya",
      href: "https://trikaya.io",
      badges: [],
      logoUrl: "/trikaya2.png",
      title: "Developer Relations Intern",
      location: "Hybrid-Bangalore",
      start: "Sept 2025",
      end: "Present-2 Months",
      description: "Building and engaging AI & Blockchain developer communities through events, sessions, and hackathons.\n Promoting Trikaya’s vision of verified, AI-driven career pathways across colleges and tech ecosystems.\n Creating technical content and improving developer experience across platform and community touchpoints.",
    },
    {
      company: "Xunoia",
      href: "https://xunoia.com",
      badges: [],
      logoUrl: "/xunoia.png",
      title: "Growth Manager Intern",
      location: "Hybrid",
      start: "Jun 2025",
      end: "Oct 2025",
      description: "Secured clients, partnerships, and investor leads for new SaaS and AI-driven projects, fueling company growth and product expansion. Building & maintaining investor and client relations through performance tracking, and transparent reporting.",
    },
    {
      company: "Noyi Networks ",
      href: "https://appreciated-calendar-213762.framer.app",
      badges: [],
      logoUrl: "/noyi.png",
      title: "Project Manager & Web Developer",
      location: "United Kingdom · Remote · Part-time",
      start: "May 2025",
      end: "Aug 2025",
      description: "Managed multiple client projects (websites, Shopify stores, software systems, and internal tools) from planning to delivery using Notion for streamlined project management and communication.  Developing Internal Tools and software solutions deployed on client-owned VMs/cloud (AWS & Azure), utilizing Docker for containerization to ensure consistent environments with GitHub Actions automating CI/CD pipelines.",
    },
    {
      company: "CycleSync",
      href: "https://cyclesync.in",
      badges: [],
      location: "Hybrid",
      title: "Web Developer",
      logoUrl: "/CYCLESYNC.png",
      start: "December 2024",
      end: "Current",
      description:
        "Leading the development of CycleSync's website and app, using Next.js, Flutter, and Firebase to create user-friendly solutions for women's health and productivity.",
    },
    {
      "company": "WissionAxis",
      "href": "https://www.linkedin.com/company/wissionaxis",
      "badges": [],
      "location": "Hybrid",
      "title": "Web Developer",
      "logoUrl": "/wissionaxis.jpg",
      "start": "May 2025",
      "end": "Current",
      "description": " I build and maintain SaaS products, company websites, and partner sites, ensuring smooth functionality and a great user experience across platforms.",    
    },
    {
      "company": "Wavexcel",
      "href": "https://wavexcel.in",
      "badges": [],
      "location": "Remote",
      "title": "Frontend Developer Intern",
      "logoUrl": "/wavexcel.jpeg",
      "start": "March 2025",
      "end": "June 2025",
      "description": "Building a dynamic  websites where content is intelligently generated using AI. Optimizing performance, implementing SEO best practices, and ensuring a seamless user experience with responsive and modern UI components."
    }, 
    {
      "company": "MadQuick",
      "href": "https://madquick.in",
      "badges": [],
      "location": "Remote",
      "title": "Web Developer + Android Developer Intern",
      "logoUrl": "/madquick.jpeg",
      "start": "March 2025",
      "end": "June 2025",
      "description": "Working on a multi-platform grocery delivery system with a customer app, delivery agent app, and admin panel. Contributed to building features like real-time tracking and order management",    
    },   
    {
      company: "ZapStyle",
      href: "https://www.zyve.in/",
      badges: [],
      location:"Hybrid",
      title: "Flutter App Developer",
      logoUrl: "/zapstyle.png",
      start: "Jan 2025",
      end: "March 2025",
      description:"Developing a fashion app that enables vendors to showcase their products and customers to shop with ease. The platform offers a seamless shopping experience with under 60-minute delivery, ensuring fast and convenient access to the latest styles and trends."    },
    {
      company: "Xunoia",
      badges: [],
      href: "",
      location: "Remote",
      title: "Flutter & Web Developer Intern",
      logoUrl: "/xunoia.png",
      start: "November 2024",
      end: "Current",
      description:
        "Worked on Rinze Laundry, a laundry servicing app for customers and delivery agents. The app streamlines pick-up and drop-off services across multiple locations in India, providing a seamless user experience. Also, worked on a Next.js website for Admin panel and landing page with WordPress.",
    },
    {
      company: "DryCode",
      href: "",
      badges: [],
      location: "Remote",
      title: "Java Developer Intern",
      logoUrl: "/drycode.png",
      start: "Febuary 2024",
      end: "March 2024",
      description:"Collaborated with senior developers to implement new features in Java-based systems, enhancing user experience and overall functionality. Optimized existing code, resulting in improved performance and reduced load times. Contributed to the development and testing of new modules, ensuring seamless integration. Worked on bug fixes and system updates, leading to a smoother and more reliable user experience."    },
  ],
  advocacies: [
    {
      company: "Cloud Computing Navtive Foundation",
      href: "https://community.cncf.io/cloud-native-hyderabad/",
      badges: [],
      location: "Hybrid",
      title: "Design Architect",
      logoUrl: "/cncf.jpeg",
      start: "January 2025",
      end: "Current",
      description: "Creating visually engaging designs for community events, meetups, and initiatives using Canva and Figma to enhance outreach and engagement."
    },
    {
      company: "HackPrix Community",
      href: "https://hackprix.in",
      badges: [],
      location: "Hybrid",
      title: "Lead Organiser & Developer",
      logoUrl: "/hp.jpg",
      start: "March 2024",
      end: "Current",
      description:"Leading the end-to-end organization and technical execution of HackPrix — India’s most vibrant student-led hackathon ecosystem. With two successful seasons empowering 500+ participants each, HackPrix has grown into a thriving community of 2000+ students, developers, and professionals across the country. I’m responsible for building and maintaining the official website, managing the overall developer experience, collaborating with partners and mentors, and ensuring seamless operations — all driven by our mission of Building for Better 💙."
    },
    {
      company: "BitcoinWala",
      href: "https://www.bitcoinwala.ai/",
      badges: [],
      location: "Hybrid",
      title: "Community DevRel",
      logoUrl: "/bitcoinwala.jpg",
      start: "October 2025",
      end: "Current",
      description: "Building and nurturing a community of crypto enthusiasts, developers, and users around BitcoinWala. Organizing Bitcoin Conference India 2026, fostering engagement through events, discussions, and educational initiatives to promote the adoption and understanding of Bitcoin and blockchain technology."
    },
    {
      company: "Pieces for Developers",
      href: "https://pieces.app/",
      badges: [],
      location: "Remote",
      title: "AI Ambassador",
      logoUrl: "/pieces.png",
      start: "Jan 2025",
      end: "Current",
      description:"Advocating AI adoption, supporting developer communities, and promoting Pieces tools through events, content, and outreach."
    },
    {
      company: "theDevArmy",
      href: "https://thedevarmy.vercel.app",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/thedevarmy.png",
      start: "December 2024",
      end: "April 2025",
      description: "Developing the official website for the theDevArmy community using Next.js. The site features the renowned HackCalendar, showcasing ongoing hackathons across India, a dedicated events page, and a dynamic landing page."
    },
    {
      company: "CodeWaveHub",
      href: "https://codewavehub.in/",
      badges: [],
      location: "Hybrid",
      title: "Community Lead",
      logoUrl: "/cwh.png",
      start: "June 2024",
      end: "November 2024",
      description: "Led the community by organizing events, meetups, and hackathons while delivering talks and workshops. Focused on fostering a collaborative environment to help others grow in tech."
    }, 
    {
      company: "Swecha",
      href: "https://swecha.org/",
      badges: [],
      location: "Hybrid",
      title: "Web Developer & Mentor",
      logoUrl: "/swecha.png",
      start: "January 2025",
      end: "April 2025",
      description: "Building the website for one of Swecha's flagship events, AIDays, using Next.js."
    },
    {
      company: "EdVenture Park",
      href: "http://edventurepark.com/",
      badges: [],
      location: "Hybrid",
      title: "Apprenticeship/Incubatee",
      logoUrl: "/edventurepark.jpeg",
      start: "Febuary 2024",
      end: "May 2024",
      description:"Launching a tech-focused startup with 'CareCompass,' an AI-driven app for skin and hair analysis. Features include personalized nutrition tracking, tailored suggestions, comprehensive analysis, and seamless booking for dermatologist consultations, available both online and offline."
    },
  ],
  education: [
    {
      school: "Lords Institute of Engineering and Technology",
      href: "https://lords.ac.in",
      degree: "B.E/B.Tech",
      location: "Hyderabad, India",
      logoUrl: "https://imgs.search.brave.com/3F4L7JWrvwyiHlB7MGwZeByMlFgBF4vo1zi34ZYsR8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWR1c2thLmNvbS9h/c3NldHMvdXNlcl9s/b2dvL2Y1NWIwZWI5/N2UyYjM0ZjI2MDY1/OTI2NTI1YTE2Mzcz/LmpwZw",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Amoral",
      href: "https://amoral.life",
      active: true,
      kind:"website",
      description:"Amoral, a skin care brand that combines science and nature to create effective, clean, and sustainable products for healthy skin. Built using Framer for a sleek, modern design and seamless user experience.",
      technologies: [
        "Framer",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://amoral.life",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:"https://syedfahad7.github.io/Portfolio_project_vids/videos/amoral.mp4" ,
    },
    {
      title: "theHotelbeds",
      href: "https://thehotelbeds.xunoia.com",
      active: true,
      kind:"website",
      description:'TheHotelBeds is a US-based hotel booking platform, making it easy to find and book top-rated stays across the country and beyond. Enjoy seamless reservations tailored to your style, budget, and comfort.',
        technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Node.js"      
      ],
      links: [
        {
          type: "Website",
          href: "https://thehotelbeds.xunoia.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:"https://syedfahad7.github.io/Portfolio_project_vids/videos/hotelbeds.mp4" ,
      },
    {
      title: "Rinze Laundry",
      href: "https://rinzelaundry.com",
      kind:"app",
      active: true,
      description:
        "Building Rinze, a seamless laundry service app that simplifies pick-up, cleaning, and delivery—making fresh, clean clothes just a tap away.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Express",
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://rinzelaundry.com",
          icon: <Smartphone className="size-3"/>,
        },
      ],
      image: "",
      video:"https://syedfahad7.github.io/Portfolio_project_vids/videos/rinze.mp4",
    },
    {
      "title": "CycleSync",
      "href": "https://www.cyclesync.in",
      "active": true,
      "kind": "website",
      "description": "CycleSync is a menstrual health and wellness platform designed to help women track their cycles, gain AI-driven insights, and sync wellness tips with their body's natural rhythm. With features like cycle tracking, AI insights, partner connect, and personalized nutrition plans, CycleSync empowers women to take charge of their health effortlessly.",
      "technologies": [
        "Next.js",
        "Framer Motion",
        "TailwindCSS",
        'MongoDB',
        'Express',
        'Node.js',
      ],
      "links": [
        {
          "type": "Website",
          "href": "https://www.cyclesync.in",
          "icon": <Icons.globe className='size-3' />
        }
      ],
      "image": "",
      "video": "https://syedfahad7.github.io/Portfolio_project_vids/videos/cyclesync.mp4"
    },
    {
      "title": "Sanketikat",
      "href": "https://sanketikafest.in",
      "active": true,
      "kind": "website",
      "description": "Designed and developed the official website for Sanketika Fest 2025, an annual technical and cultural fest hosted in Hyderabad, India. Built with Next.js, the site features beautiful UI components, seamless navigation, and light/dark theme control. It provides complete details about event schedules, activities, and registration.",
      "technologies": [
        "Next.js",
        "Framer Motion",
        "TailwindCSS",
        "Typescript",
        "Shadcn UI",
      ],
      "links": [
        {
          "type": "Website",
          href: "https://sanketikafest.in",
          icon: <Icons.globe className='size-3' />,   
        },
      ],
      "image": "",
      "video": "https://syedfahad7.github.io/Portfolio_project_vids/videos/sanketika.mp4"
    },
    {
      title: "HackPrix Community",
      href: "https://hackprix.in",
      kind:"website",
      active: false,
      description:
        "Building the official website for HackPrix Community, an annual hackathon organized by the HackPrix community. The website is built with Next.js, TailwindCSS, and TypeScript.",
      technologies: [
        "Next.js",
        "Framer Motion",
        "TailwindCSS",
        "Typescript",
        "MongoDB",
        "Express",
        "Node.js",
        "Storyblok",
      ],
      links: [
        {
          type: "Website",
          href: "https://hackprix.in",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "",
      video:"https://syedfahad7.github.io/Portfolio_project_vids/videos/hackprix.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "HackEnvision 2.0",
      dates: "January 21st - 22nd, 2024",
      location: "Hyderabad, India",
      description:
        "Developed a Python script that detects coins in live video, calculate their total value in rupees, and display the result using OpenCV and CVZone libraries.",
      image:
        "https://i.ibb.co/Qvp7PVCF/hackenvision-removebg-preview.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [        {
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/SyedFahad7/CoinVision--Coin-Counter",
      },],
    },
    {
      title: "Global Hack Week: Season Launch",
      dates: "July 5th - 11th, 2024",
      location: "Online",
      description:
        "The Bootstrap Website Template I made is all about showing off a modern design that works well on phones, tablets, and computers. It has a slick navigation bar, a cool image slider, and even fun emoji gifs you can click on.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/942/640/datas/medium.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [ {

        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/SyedFahad7/Bootstrap-MLH-GHW"
      }        
      ],
    },
    {
      title: "HackOn Blocks 2024",
      dates: "July 20th - 24th, 2024",
      location: "Delhi, India",
      description:
        "Developed a mobile application- a crypto wallet based on eth chain",
      icon: "public",
      image:
        "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/34c9a260fe0a454797599945f919e2aa/assets/logo/545.png",
      links: [],
    },
    {
      title: "HackFrost Winter Hackathon",
      dates: "November 29th - 2nd Dec 2024",
      location: "Online",
      description:
      "builded Kestrix is a powerful app that integrates with Kestra to manage and visualize workflows effortlessly. 🚀 It allows users to view, update, and delete workflows, making it easy to monitor and control processes. 🔄 With seamless namespace and workflow management, Kestrix streamlines the orchestration of complex tasks.",
      icon: "public",
      image:
      "https://www.wemakedevs.org/_next/static/media/logo.b39bc0f0.svg",
      links: [],
    }
  ],
} as const;
