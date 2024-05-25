/* eslint-disable max-len */
import log from './images/log.png';

export const cards = [
  {
    id: '1',
    title: 'What\'s my story?',
    subtitle: 'short version',
    description: 'I am a creative individual who is striving to shine her light. Currently growing as a UX designer.',
  },
  {
    id: '2',
    title: 'What\'s my story?',
    subtitle: 'long version',
    img: log,
    bolded: {first: 'I learned to fit in.', second: 'I learned to be happy.', third: 'I am learning to be.'},
    description: `
Born and raised in Chengdu, I moved to ABQ at age 15. After spending 4 wonderful years with the desert and tumbleweeds, I ventured out to the east coast to be trained as an architectural designer. During these years, {first}

When I finished the 5-year professional program, I relocated to Seattle and began my fully remote career in architecture. Though I did well, my dissatisfaction grew heavier as I progressed down the path that seemed crystal clear to most of my peers but not me. I endured, reflected, and adjusted, yet I still felt lost and uninspired. My desire to live a full and vibrant life launched a soul-searching process that eventually led to a beautiful transformation. {second}
  
Since then, I’ve explored different avenues of interest, nurturing the growth of my creative skills. Currently, I am focused on growing as a UX designer, and {third}
    `,
  },
  {
    id: '3',
    title: 'How can I help you?',
    italics: {first: 'As a professional, I can help with:', second: 'As a human, I can help with:'},
    bolded: {bolded: 'UI + UX Design | Strategy | Branding | Visual design | Photography | Spatial Design'},
    description: `
I am made to create, and I love to help.

{first}
{bolded}

{second}
Life problems. | Vetting Chinese restaurants for non-Chinese friends. | Naming clouds. | 看八字
    `,
  },
  {
    id: '4',
    title: 'What inspires me?',
    bolded: {first: '人 / people', second: '事 / experiences', third: '物 / things'},
    description: `
{first} - individuals who are deeply connected to their authentic selves

{second} - nature, culture, personal growth of others and my own

{third} - the little things in life, especially clouds. Follow me on instagram to look at clouds :) 
    `,
  },
  {
    id: '5',
    title: '3 most $$$ things I own.',
    description: `
My high-maintenance self
My high-maintenance shiba-inu
My macbook pro which contains all of my ideas and creative projects. 
    `,
  },
];
