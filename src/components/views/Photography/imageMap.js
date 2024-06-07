const images = require.context('./images', true);
const texts = require.context('./descriptions', true);
export const PLACES = 'PLACES';
export const PEOPLE = 'PEOPLE';
export const NONE = 'NONE';

const imageListObj = images.keys().reduce((a, c)=>{
  return ({
    ...a,
    [parseInt(c.replace(/[^0-9]/g, ''))]: images(c),
  });
}, {});

export const textListObj = texts.keys().reduce((a, c)=>{
  return ({
    ...a,
    [parseInt(c.replace(/[^0-9]/g, ''))]: texts(c),
  });
}, {});

export const imageMap = [
  {
    image: imageListObj[1],
    subject: [PLACES],
  },
  {
    image: imageListObj[2],
    subject: [PLACES],
  },
  {
    image: imageListObj[3],
    subject: [PLACES],
  },
  {
    image: imageListObj[4],
    subject: [PLACES],
  },
  {
    image: imageListObj[5],
    subject: [PEOPLE],
    vertical: true,
  },
  {
    image: imageListObj[6],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[7],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[8],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[9],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[10],
    subject: [PLACES],
  },
  {
    image: imageListObj[11],
    subject: [PLACES],
  },
  {
    image: imageListObj[12],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[13],
    subject: [PLACES],
  },
  {
    image: imageListObj[14],
    subject: [PLACES],
  },
  {
    image: imageListObj[15],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[16],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[17],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[18],
    subject: [PLACES],
  },
  {
    image: imageListObj[19],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[20],
    subject: [PLACES],
  },
  {
    image: imageListObj[21],
    subject: [PLACES],
  },
  {
    image: imageListObj[22],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[23],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[24],
    subject: [PLACES],
  },
  {
    image: imageListObj[25],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[26],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[27],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[28],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[29],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[30],
    subject: [PLACES],
  },
  {
    image: imageListObj[31],
    subject: [PLACES],
  },
  {
    image: imageListObj[32],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[33],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[34],
    subject: [PLACES],
  },
  {
    image: imageListObj[35],
    subject: [PEOPLE],
    vertical: true,
  },
  {
    image: imageListObj[36],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[37],
    subject: [PEOPLE],
  },
  {
    image: imageListObj[38],
    subject: [PLACES],
  },
  {
    image: imageListObj[39],
    subject: [PLACES],
  },
  {
    image: imageListObj[40],
    subject: [PLACES],
    vertical: true,
  },
  {
    image: imageListObj[41],
    subject: [PLACES],
  },
];
