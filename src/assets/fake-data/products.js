// All images imported from the images directory
import product_01_image_01 from '../images/product_01.jpg';
import product_01_image_02 from '../images/product_01.1.jpg';
import product_01_image_03 from '../images/product_01.3.jpg';

import product_02_image_01 from '../images/product_2.1.jpg';
import product_02_image_02 from '../images/product_2.2.jpg';
import product_02_image_03 from '../images/product_2.3.jpg';

import product_03_image_01 from '../images/product_3.1.jpg';
import product_03_image_02 from '../images/product_3.2.jpg';
import product_03_image_03 from '../images/product_3.3.jpg';

import product_04_image_01 from '../images/product_4.1.jpg';
import product_04_image_02 from '../images/product_4.2.jpg';
import product_04_image_03 from '../images/product_4.3.png';

import product_05_image_01 from '../images/product_04.jpg';
import product_05_image_02 from '../images/product_08.jpg';
import product_05_image_03 from '../images/product_09.jpg';

import product_06_image_01 from '../images/bread(1).png';
import product_06_image_02 from '../images/bread(2).png';
import product_06_image_03 from '../images/bread(3).png';

const products = [
  {
    id: '01',
    title: 'Spicy Chicken Burger',
    price: 6.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',
  },

  {
    id: '02',
    title: 'Veggie Delight Pizza',
    price: 7.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Pizza',
  },

  {
    id: '03',
    title: 'Extra Cheesy Margherita',
    price: 8.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Pizza',
  },

  {
    id: '04',
    title: 'Macxicon Verdant Pizza',
    price: 12.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: 'Pizza',
  },

  {
    id: '05',
    title: 'Cheese Burger',
    price: 5.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: 'Burger',
  },

  {
    id: '06',
    title: 'Royal Cheese Burger',
    price: 7.0,
    image01: product_01_image_01, // Replace these with correct images
    image02: product_01_image_02, // Replace these with correct images
    image03: product_01_image_03, // Replace these with correct images
    category: 'Burger',
  },

  {
    id: '07',
    title: 'Seafood Pizza',
    price: 12.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Pizza',
  },

  {
    id: '08',
    title: 'Thin Cheese Pizza',
    price: 10.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Pizza',
  },

  {
    id: '09',
    title: 'Pizza With Mushroom',
    price: 10.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: 'Pizza',
  },

  {
    id: '10',
    title: 'Classic Hamburger',
    price: 9.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: 'Burger',
  },

  {
    id: '11',
    title: 'Crunch Bread',
    price: 4.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bread',
  },

  {
    id: '12',
    title: 'Delicious Bread',
    price: 5.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: 'Bread',
  },

  {
    id: '13',
    title: 'Loaf Bread',
    price: 5.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_01,
    category: 'Bread',
  },
];

export default products;
