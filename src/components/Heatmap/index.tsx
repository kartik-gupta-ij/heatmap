import { useEffect, useState } from 'react';
import { Box, Text } from '@mantine/core';

const noVlaue = [
  {
    id: '9b9f376e-202f-4754-a72d-f28a88f64c2b',
    name: 'Tim Herzog',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 3,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 3,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 3,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 2,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '90e6b75c-ad10-4183-8240-9be8fb91d7fd',
    name: 'Ira Kshlerin',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 1,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 4,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 4,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 0,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 0,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: 'bdb60841-d7d6-41d6-be88-cbecee3621a1',
    name: 'Carlton Schaefer',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 0,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 2,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 4,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 1,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 3,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: 'd4d5438d-1dfc-4dd7-a750-5057ed980538',
    name: 'Raymond Koch-Beier',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 3,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 3,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 3,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 2,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '2ed988b2-edbf-4635-9631-e6aa8b83ab51',
    name: 'Robyn Bernhard',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 0,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 2,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 4,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 1,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 3,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '7ca9fb13-1005-47e0-bfd7-acef1c1294a3',
    name: 'Nick Daugherty V',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 1,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 4,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 4,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 0,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 0,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '81efa640-c377-4a85-9f08-72d4baa585b3',
    name: 'Rodolfo Nolan',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 0,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 2,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 4,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 1,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 3,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: 'acc6267a-a703-46ca-a14a-2a8342742ea5',
    name: 'Tyrone Collier-Kerluke',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 1,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 4,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 4,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 0,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 0,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '2a272dd1-014e-44a4-bf6b-68aba000aace',
    name: 'Marie Hegmann',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 3,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 3,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 3,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 2,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '1ea040b0-eddd-4fdb-ab90-8827a0aa64ec',
    name: 'Lois Bechtelar MD',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 0,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 2,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 4,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 1,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 3,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: 'e2f36f44-0eb7-4307-bb6d-08b0cd3f71e8',
    name: 'Bennie Howe',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 3,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 3,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 3,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 2,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '6b5fde19-f26f-46d3-9f46-59108e50a951',
    name: 'Jorge Mertz',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 1,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 4,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 4,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 0,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 0,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '1ac49d9e-1aa9-47bc-8889-298925d172ea',
    name: 'Rex Beer',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 1,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 4,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 4,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 0,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 0,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '34ec05c9-cde7-405a-9e20-69bf440ef9bf',
    name: 'Brett Mertz',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 3,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 2,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 3,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 3,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 2,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
  {
    id: '3f86b104-7456-4747-8fa4-f8b778916022',
    name: 'Bernice Cole',
    skillset: [
      {
        name: 'Application of Typography',
        consensus_score: 0,
      },
      {
        name: 'Applying Color Theory',
        consensus_score: 2,
      },
      {
        name: 'Creation of Brands',
        consensus_score: 4,
      },
      {
        name: 'Creating User Personas',
        consensus_score: 2,
      },
      {
        name: 'Creating Effective Icons',
        consensus_score: 3,
      },
      {
        name: 'Conducting Usability Tests',
        consensus_score: 4,
      },
      {
        name: 'Gathering User Feedback',
        consensus_score: 3,
      },
      {
        name: 'Creating Effective Surveys',
        consensus_score: 0,
      },
      {
        name: 'Crafting Effective Questions',
        consensus_score: 3,
      },
      {
        name: 'Conducting Market Research',
        consensus_score: 3,
      },
      {
        name: 'Using Figma for Design',
        consensus_score: 3,
      },
      {
        name: 'Designing Responsive Interactions',
        consensus_score: 1,
      },
      {
        name: 'Designing Functional Micro-Interactions',
        consensus_score: 2,
      },
      {
        name: 'Designing User Flows',
        consensus_score: 3,
      },
      {
        name: 'Creating Sitemaps',
        consensus_score: 3,
      },
      {
        name: 'Creating Basic Prototypes',
        consensus_score: 3,
      },
      {
        name: 'Creating Wireframes',
        consensus_score: 2,
      },
    ],
  },
];

interface HeatmapProps {
  selectedUsers: any[];
}


async function fetchUsers(
  selectedUsers: any[],
  setUsersParsed: (data: any[]) => void,
  setIsNoValue: (data: boolean) => void,
  isNoValue: boolean
): Promise<void> {
  try {
    const promises = selectedUsers.map((user) =>
      fetch(`https://forinterview.onrender.com/people/${user.id}`)
    );

    const responses = await Promise.all(promises);
    const data: any[] = await Promise.all(responses.map((response) => response.json()));

    const newParsedUsers = data.map((user) => ({
      id: user.id,
      name: user.name,

      skillset: user.data.data.skillset.map((userSkillset: any) => ({
        skills: userSkillset.skills.map((skill: any) => ({
          name: skill.name,
          consensus_score: skill.pos[0].consensus_score,
        })),
      })),
    }));
    const mergedSkillset = newParsedUsers.map((user: any) => ({
      id: user.id,
      name: user.name,

      skillset: user.skillset.flatMap((userSkillset: any) =>
        userSkillset.skills.map((skill: any) => ({
          name: skill.name,
          consensus_score: skill.consensus_score,
        }))
      ),
    }));

    if (isNoValue && mergedSkillset.length > 0) {
      setIsNoValue(false);
      setUsersParsed(mergedSkillset);
    } else if (mergedSkillset.length == 0 ) {
      setIsNoValue(true);
      setUsersParsed(noVlaue);
    } else {
      setUsersParsed(mergedSkillset);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export default function Heatmap({ selectedUsers }: HeatmapProps) {
  const [usersParsed, setUsersParsed] = useState<any>(noVlaue);
  const [isNoValue, setIsNoValue] = useState<boolean>(true);

  useEffect(() => {
      
        
      fetchUsers(selectedUsers, setUsersParsed, setIsNoValue, isNoValue);
    
  }, [selectedUsers]);

  const getColor = (score: any) => {
    if (score === 0) return '#ECFEF1';
    if (score <= 1) return '#F8F8A6';
    if (score <= 3) return '#A6D96A';
    return '#003F0B';
  };

  return (
    <Box p={40}>
      <Box>
        <Box p={40} style={{ filter: isNoValue ? 'blur(2px)' : 'none' }}>
          <Box display="flex" style={{ flexDirection: 'column' }}>
            <Box
              display="flex"
              // isNoValue ? display in blur :display in normal
            >
              <Box w={300}></Box>
              <Box />
              {usersParsed.map((user: any) => (
                <Box key={user.id} w={50} m={2} style={{ textAlign: 'center' }}>
                  <Text>
                    {user.name.split(' ')[0][0]} {user.name.split(' ')[1][0]}
                  </Text>
                </Box>
              ))}
            </Box>

            {usersParsed[0]?.skillset.map((skillset: any) => (
              <Box display="flex" key={skillset.name}>
                <Box w={300} pr={10}>
                  <Text>{skillset.name}</Text>
                </Box>
                {usersParsed.map((user: any) => {
                  const skill = user.skillset.find((skill: any) => skill.name === skillset.name);
                  const consensus_score = skill ? skill.consensus_score : 0;

                  return (
                    <Box
                      key={user.id}
                      w={50}
                      h={30}
                      display="flex"
                      style={{
                        backgroundColor: getColor(consensus_score),
                        margin: '2px',
                      }}
                    ></Box>
                  );
                })}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
