import earlgreyimg from '../assets/earlgreyimg.png';
import chai from '../assets/chai.png';
import chamomile from '../assets/chamomile.png';
import english from '../assets/english.png';
import jasmine from '../assets/jasmine.png';
import matcha from '../assets/matcha.png';
import peppermint from '../assets/peppermint.png';
import rooibus from '../assets/rooibus.png';
import senchagreen from '../assets/senchagreen.png';
import turmeric from '../assets/turmeric.png';


const teaData = [
  {
    id: 1,
    title: "Sencha Green",
    flavor: "Grassy & smooth",
    price: 14,
    image: senchagreen,
    type: "Green",
    origin: "Japan",
    caffeineLevel: "Medium",
    format: "50g loose leaf", // or "20 tea bags"

  },
  {
    id: 2,
    title: "Chamomile Calm",
    flavor: "Floral & calming",
    price: 12,
    image: chamomile,
    type: "Herbal",
    origin: "Egypt",
    caffeineLevel: "Caffeine-Free",
  },
  {
    id: 3,
    title: "Masala Chai",
    flavor: "Spicy & bold",
    price: 16,
    image: chai,
    type: "Chai",
    origin: "India",
    caffeineLevel: "High",
  },
  {
    id: 4,
    title: "Peppermint Bliss",
    flavor: "Cool & refreshing",
    price: 11,
    image: peppermint,
    type: "Herbal",
    origin: "USA",
    caffeineLevel: "Caffeine-Free",
  },
  {
    id: 5,
    title: "Earl Grey",
    flavor: "Citrusy & fragrant",
    price: 15,
    image: earlgreyimg,
    type: "Black",
    origin: "England",
    caffeineLevel: "High",
  },
  {
    id: 6,
    title: "Matcha Boost",
    flavor: "Earthy & energizing",
    price: 18,
    image: matcha,
    type: "Green",
    origin: "Japan",
    caffeineLevel: "High",
  },
  {
    id: 7,
    title: "Rooibos Sunset",
    flavor: "Sweet & nutty",
    price: 13,
    image: rooibus,
    type: "Herbal",
    origin: "South Africa",
    caffeineLevel: "Caffeine-Free",
  },
  {
    id: 8,
    title: "Jasmine Delight",
    flavor: "Floral & gentle",
    price: 14,
    image: jasmine,
    type: "Green",
    origin: "China",
    caffeineLevel: "Medium",
  },
  {
    id: 9,
    title: "English Breakfast",
    flavor: "Robust & classic",
    price: 15,
    image: english,
    type: "Black",
    origin: "India",
    caffeineLevel: "High",
  },
  {
    id: 10,
    title: "Turmeric Glow",
    flavor: "Spiced & warming",
    price: 13,
    image: turmeric,
    type: "Herbal",
    origin: "India",
    caffeineLevel: "Caffeine-Free",
  },
];

export default teaData;
