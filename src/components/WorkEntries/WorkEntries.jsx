import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {useLenis} from "@studio-freight/react-lenis";
import {village, bridge, train, bookshelf, fullview} from "../../lib/MinecraftScenes";
import WorkEntry from "./WorkEntry";

const WorkEntries = () => {
  const containerRef = useRef(null);
  const lenis = useLenis();
  const entryScrollPositionsRef = useRef({});
  const [canvasClicked, setCanvasClicked] = useState(false);

  const handleEntryClick = () => {
    setCanvasClicked(true);
  };

  const entries = [
    {
      date: "2006 - 2014",
      label: "Army National Guard",
      title: "25U - Signal Support Systems Specialist",
      description: "As a Signal Support Systems Specialist in the Washington Army National Guard, I maintained and troubleshooted communication systems, including radios, satellites, and networks. I ensured secure, reliable connections and trained others to use the equipment, keeping operations running smoothly.",
      cameraPosition: fullview,
      showIndicator: canvasClicked,
    },
    {
      date: "2017 - 2020",
      label: "Zapproved",
      title: "Software Engineer",
      description: "Zapproved is a Portland-based SaaS company that specializes in cloud-based e-discovery software. I helped develop their flagship product, ZDiscovery, which is primarily used by corporate legal teams to help manage the entire litigation process, from data preservation to review.",
      link: "/zapproved",
      cameraPosition: bookshelf,
      showIndicator: canvasClicked,
    },
    {
      date: "2020 - 2021",
      label: "Serverless Guru",
      title: "Senior Serverless Engineer",
      description: "Serverless Guru is a cloud consulting company specializing in AWS serverless architecture. My role involved working closely with enterprise clients, including Air Canada, to architect, build, and deploy scalable serverless applications, as well as providing consulting services to enhance cloud adoption strategies.",
      link: "/serverlessguru",
      cameraPosition: bridge,
      showIndicator: canvasClicked,
    },
    {
      date: "2021 - 2023",
      label: "Ruby",
      title: "Senior Fullstack Engineer",
      description: "Ruby is a leading provider of virtual receptionist and live chat services. I contributed to the development of internal applications used by receptionists for efficiently handling calls, scheduling appointments, and performing essential customer service tasks.",
      link: "/ruby",
      cameraPosition: train,
      showIndicator: canvasClicked,
    },
    {
      date: "2022 - 2023",
      label: "Pure Chat",
      title: "Senior Fullstack Engineer",
      description: "After Ruby acquired Pure Chat, I took the lead on maintaining the product, ensuring its seamless integration into Ruby’s internal applications. I managed both the integration and continued support for Pure Chat’s existing customers, overseeing its functionality while maintaining its core features for real-time customer engagement and live chat service.",
      link: "/purechat",
      cameraPosition: village,
      showIndicator: canvasClicked,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const entryElements = gsap.utils.toArray(".entry");

    entryElements.forEach((entry, index) => {
      const entryId = `entry-${index}`;
      const offset = index * 70;

      gsap.to(entry, {
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
    });
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

        if (clickX >= rect.left && clickX <= rect.right && clickY >= rect.top && clickY <= rect.bottom) {
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
            lenis.scrollTo(savedScrollY, {duration: 0.3});
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
    <div id="work" ref={containerRef} style={{background: "#E2E4D0"}}>
      {entries.map((entry, index) => (
        <WorkEntry key={index} {...entry} onClick={() => handleEntryClick()} />
      ))}
    </div>
  );
};

export default WorkEntries;
