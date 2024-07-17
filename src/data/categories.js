import seating from '../images/seating/X-Lounge-Chair-HM10-1.png';
import tables from '../images/tables/Pavilion-AV17-desk-3.jpg';
import lighting from '../images/lighting/Meridian-Lamp-cashmere-2.png';
import objects from '../images/objects/Momento-Vase-JH41-1.jpeg';

export const CATEGORIES = [
  {
    category: 'seating',
    type: ['sofa', 'lounge chair'],
    img: seating,
  },
  {
    category: 'table',
    type: ['desk', 'side table'],
    img: tables,
  },
  {
    category: 'lighting',
    type: ['table lamp', 'floor lamp', 'pendant lamp'],
    img: lighting,
  },
  {
    category: 'objects',
    type: ['tableware', 'vase', 'textile', 'clock'],
    img: objects,
  },
];
