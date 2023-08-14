import { Food } from "./Shared/model/food";
import { Tag } from "./Shared/tag";

export const sample_foods: Food[]=[
    {
        id:'1',
        name: 'Samosa',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Middle_east'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:'2',
        name: 'Kanda-Bhakar',
        price: 30,
        cookTime: '20-30',
        favorite: true,
        origins: ['Kolhapur','Chhatrapati Sambhaji nager'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id:'3',
        name: 'Pithla-Bhakari',
        price: 50,
        cookTime: '15-30',
        favorite: false,
        origins: ['Chhatrapati Sambhaji nager', 'Kokan'],
        stars: 4.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['SlowFood','Lunch'],
      },
      {
        id:'4',
        name: 'Vada-Pav',
        price: 10,
        cookTime: '5-10',
        favorite: true,
        origins: ['Mumbai'],
        stars: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:'5',
        name: 'Misal-Pav',
        price: 25,
        cookTime: '40-50',
        favorite: false,
        origins: [ 'Pune'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id:'6',
        name: 'Pooran-Poli',
        price: 60,
        cookTime: '40-50',
        favorite: false,
        origins: ['India'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['SlowFood',  'Lunch'],
      },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 2},
  
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 4 },
  
  { name: 'Fry', count: 2 },
  { name: 'Soup', count: 1 },
]