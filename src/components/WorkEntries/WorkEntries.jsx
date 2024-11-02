import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import { keyboard_cats, mountain, raptor, faces } from "../../lib/Scenes";
import WorkEntry from "./WorkEntry";
import useIsMobile from "../../hooks/useIsMobile";
import { debounce } from "../../lib/Helpers";

const WorkEntries = () => {
  const containerRef = useRef(null);
  const lenis = useLenis();
  const entryScrollPositionsRef = useRef({});
  const [canvasClicked, setCanvasClicked] = useState(false);
  const isMobile = useIsMobile();
  const animationsRef = useRef([]);
  const previousHeight = useRef(window.innerHeight);

  const handleEntryClick = () => {
    setCanvasClicked(true);
  };

  // #region __________ ENTRIES __________
  const entries = [
    {
      date: "2006 - 2014",
      label: "Army National Guard",
      title: "25U - Signal Support Systems Specialist",
      description:
        "As a Signal Support Systems Specialist in the Washington Army National Guard, I maintained and troubleshooted communication systems, including radios, satellites, and networks. I ensured secure, reliable connections and trained others to use the equipment, keeping operations running smoothly.",
      cameraPosition: [],
      showIndicator: canvasClicked,
      skills: [],
    },
    {
      date: "2017 - 2020",
      label: "Zapproved",
      title: "Software Engineer",
      description:
        "Zapproved is a Portland-based SaaS company that specializes in cloud-based e-discovery software. During my time there, Zapproved was recognized as one of the fastest growing and most admired companies in Oregon, according to Portland Business Journal.",
      description2:
        "One of the major projects I worked on at Zapproved was Digital Discovery Pro, a cloud-based e-discovery software. My role included integrating cutting-edge cloud solutions and collaborating with other engineers to ensure the platform was scalable and robust.",
      description3:
        "As a part of this project, I was responsible for both frontend and backend development, ensuring smooth integration between the components. I worked closely with the product team to build features that addressed real customer pain points, including managing vast amounts of litigation data and streamlining the data review process.",
      link: "https://zapproved.com/about-us/recognition/",
      cameraPosition: isMobile ? [] : mountain,
      showIndicator: canvasClicked,
      skills: [
        "AngularJS",
        "Angular",
        "Full-Stack Development",
        "Component Libraries",
        "Platform Architecture",
        "Cloud Integration",
        "Design Patterns",
        "Scrum/Agile",
        "C#",
        ".NET",
      ],
    },
    {
      date: "2020 - 2021",
      label: "Serverless Guru",
      title: "Senior Serverless Engineer",
      description:
        "Serverless Guru is a cloud consulting company specializing in AWS serverless architecture. My role involved working closely with enterprise clients, including Air Canada, to architect, build, and deploy scalable serverless applications, as well as providing consulting services to enhance cloud adoption strategies.",
      description2:
        "Additionally, I oversaw the use of SonarQube, leading an effort to eliminate code smells and mitigate security risks across their services. My work had a direct impact on improving code quality, security, and best practices.",
      link: "https://www.serverlessguru.com/",
      cameraPosition: isMobile ? [] : raptor,
      showIndicator: canvasClicked,
      skills: [
        "AWS",
        "Serverless Architecture",
        "CloudFormation",
        "Lambda",
        "SonarQube",
        "CI/CD",
        "Cloud Security",
        "Code Reviews",
        "DevOps",
        "Infrastructure as Code",
      ],
    },
    {
      date: "2021 - 2023",
      label: "Ruby",
      title: "Senior Fullstack Engineer",
      description:
        "Ruby is a leading provider of virtual receptionist and live chat services. I contributed to the development of internal applications used by receptionists for efficiently handling calls, scheduling appointments, and performing essential customer service tasks.",
      description2:
        "I worked on the internal applications team. One major task I worked on was to redesign and restructure a large part of the monolithic frontend application that was causing production delays. The existing codebase suffered from poor state management and implicit types, which hindered feature development. My work modernized the application, significantly improving developer productivity.",
      link: "https://www.ruby.com",
      cameraPosition: isMobile ? [] : faces,
      showIndicator: canvasClicked,
      skills: [
        "Frontend Architecture",
        "State Management",
        "TypeScript",
        ".NET",
        "Backend Development",
        "Cloud Migration",
        "CI/CD",
        "Cloud Security",
        "Angular",
        "C#",
        "Dotnet",
      ],
    },
    {
      date: "2022 - 2023",
      label: "Pure Chat",
      title: "Senior Fullstack Engineer",
      description:
        "After Ruby acquired Pure Chat, I took the lead on maintaining the product, ensuring its seamless integration into Ruby’s internal applications. I managed both the integration and continued support for Pure Chat’s existing customers, overseeing its functionality while maintaining its core features for real-time customer engagement and live chat service.",
      description2:
        "I worked with several departments, including finance, legal, product, marketing, and engineering management. This wide-ranging responsibility gave me a comprehensive understanding of the product and its impact on Ruby’s broader ecosystem. I wrote thorough documentation outlining all maintenance tasks, as well as onboarding materials, which I used to rapidly onboard three developers to the project.",
      description3:
        "I managed the production environment, including Google Analytics, monitoring production logs, and handling outages with 24-hour on-call support. Whether it was day or night, I ensured that PureChat was stable and functioning correctly.",
      link: "https://www.purechat.com",
      cameraPosition: keyboard_cats,
      showIndicator: canvasClicked,
      skills: [
        "React",
        "Javascript/Typescript",
        "Google Analytics",
        "Team lead / Mentorship",
        "Cross-departmental Collaboration",
        "Monitoring and Prodcution support",
      ],
    },
  ];
  // #endregion END ENTRIES  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦

  const setupScrollTriggers = () => {
    animationsRef.current.forEach((animation) =>
      animation.scrollTrigger?.kill()
    );
    animationsRef.current = [];

    const container = containerRef.current;
    const entryElements = gsap.utils.toArray(".entry");

    let disableScrollTriggers = false;

    entryElements.forEach((entry, index) => {
      if (index === entryElements.length - 1) return;
      const offset = index * 70 + 15;
      const entryHeight = entry.offsetHeight;

      if (entryHeight > window.innerHeight - offset) {
        disableScrollTriggers = true;
      }
    });

    if (disableScrollTriggers) return;

    entryElements.forEach((entry, index) => {
      const entryId = `entry-${index}`;
      const offset = index * 70;

      const animation = gsap.to(entry, {
        scrollTrigger: {
          trigger: entry,
          start: `top top+=${offset}`,
          endTrigger: container,
          end: `bottom 50%`,
          pin: true,
          pinSpacing: index === entryElements.length - 1 ? true : false,
          scrub: true,
          onEnter: () => {
            const scrollY = window.scrollY;
            entryScrollPositionsRef.current[entryId] = scrollY;
          },
          onLeaveBack: () => {
            entryScrollPositionsRef.current[entryId] = null;
          },
        },
      });

      animationsRef.current.push(animation);
    });
  };

  useEffect(() => {
    setupScrollTriggers();

    const handleResize = debounce(() => {
      const currentHeight = window.innerHeight;
      const heightChange = Math.abs(currentHeight - previousHeight.current);

      if (heightChange > 100) {
        setupScrollTriggers();
      }

      previousHeight.current = currentHeight;
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      animationsRef.current.forEach((animation) =>
        animation.scrollTrigger?.kill()
      );
      animationsRef.current = [];
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const handleTabClick = (e) => {
      if (!container || !lenis) return;

      const clickX = e.clientX;
      const clickY = e.clientY;
      let foundTab = null;
      const tabs = document.querySelectorAll(".tab");
      const entryElements = gsap.utils.toArray(".entry");

      tabs.forEach((tab) => {
        const rect = tab.getBoundingClientRect();

        if (
          clickX >= rect.left &&
          clickX <= rect.right &&
          clickY >= rect.top &&
          clickY <= rect.bottom
        ) {
          foundTab = tab;
        }
      });

      if (foundTab) {
        const entry = foundTab.closest(".entry");
        if (entry) {
          const entryIndex = entryElements.indexOf(entry);
          const entryId = `entry-${entryIndex}`;

          const savedScrollY = entryScrollPositionsRef.current[entryId];

          if (savedScrollY !== null && savedScrollY !== undefined) {
            lenis.scrollTo(savedScrollY, { duration: 0.3 });
          }
        }
      }
    };

    container.addEventListener("click", handleTabClick);
    return () => {
      container.removeEventListener("click", handleTabClick);
    };
  }, [lenis]);

  return (
    <div id="work" ref={containerRef} style={{ background: "#E2E4D0" }}>
      {entries.map((entry, index) => (
        <WorkEntry key={index} {...entry} onClick={() => handleEntryClick()} />
      ))}
    </div>
  );
};

export default WorkEntries;
