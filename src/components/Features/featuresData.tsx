import React from 'react';
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" className="fill-current" width="40" height="40">
        <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13z"/>
        <path opacity="0.5" d="M4 8h6v2H4zm0 4h6v2H4zm14.3-2.5c-1.2 0-2.3.9-2.3 2.1 0 .9.5 1.6 1.3 2V15c0 .6.4 1 1 1s1-.4 1-1v-1.4c.8-.4 1.3-1.1 1.3-2 0-1.2-1-2.1-2.3-2.1z"/>
      </svg>
    ),
    title: "Elite Hacking Courses",
    paragraph:
      "Learn practical hacking techniques you won't find in public tutorials. Get real-world experience in cybersecurity, penetration testing, and ethical hacking.",
  },
 {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" className="fill-current" width="40" height="40">
        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
        <path opacity="0.5" d="M8.52 13.91c.59 0 1.07-.48 1.07-1.12s-.48-1.12-1.07-1.12c-.59 0-1.07.48-1.07 1.12s.48 1.12 1.07 1.12zm6.97 0c.59 0 1.07-.48 1.07-1.12s-.48-1.12-1.07-1.12c-.59 0-1.07.48-1.07 1.12s.48 1.12 1.07 1.12z"/>
      </svg>
    ),
    title: "Private Community & Direct Support",
    paragraph:
      "Gain access to an exclusive Discord server where you can ask me anything, get help, and collaborate with fellow hackers.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" className="fill-current" width="40" height="40">
        <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        <path opacity="0.5" d="M6 8h2v2H6zm4 0h8v2h-8z"/>
      </svg>
    ),
    title: "Hands-On Labs & Real-World Projects",
    paragraph:
      "Forget theory-heavy courses—Cyberflow's Academy focuses on real-world hacking scenarios and labs to sharpen your skills.",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="fill-current" width="40" height="40">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
        <path opacity="0.5" d="M10 6h8v2h-8zm0 3h8v2h-8zm0 3h4v2h-4z"/>
      </svg>
    ),
    title: "Comprehensive & Updated Content",
    paragraph:
      "Stay ahead of the curve with continuously updated courses covering the latest exploits, vulnerabilities, and hacking techniques.",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" className="fill-current" width="40" height="40">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 9.07-7 10.24-3.87-1.17-7-5.57-7-10.24V6.3l7-3.12z"/>
        <path opacity="0.5" d="M11 14.49V7h2v7.49h-2zm0 3.51v-2h2v2h-2z"/>
      </svg>
    ),
    title: "In-Depth Vulnerability Analysis",
    paragraph:
      "Master the art of vulnerability research with exclusive lessons on identifying, exploiting, and patching real-world security flaws.",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" className="fill-current" width="40" height="40">
        <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>
        <path opacity="0.5" d="M14 9h4v2h-4z"/>
      </svg>
    ),
    title: "Hackathon-Style Challenges",
    paragraph:
      "Put your skills to the test with regular, challenging hackathons designed to simulate high-pressure, real-world situations.",
  },
];

export default featuresData;