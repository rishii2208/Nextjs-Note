// types.ts
export enum Category {
    Restaurants = 'Restaurants',
    Gadgets = 'Gadgets',
    Company = 'Company',
    Trip = 'Trip',
    Others = 'Others'
  }
  
  export type Item = {
    name: string;
    category: Category | string;
  };
  