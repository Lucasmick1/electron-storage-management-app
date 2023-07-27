export interface Product {
  id: string;
  name: string;
  amount?: number;
  createdAt: string;
  updatedAt: string;
}

export enum PRODUCT_HISTORY_TYPES {
  IN = 'input',
  OUT = 'output',
  CREATE = 'creation',
}

export interface ProductHistory {
  id: string;
  product: string;
  type: PRODUCT_HISTORY_TYPES;
  amount?: number;
  value?: number;
  createdAt: string;
}
