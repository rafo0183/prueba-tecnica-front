import { IProductProperty } from "./subModels/iProductProperty";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
    sku: string;
    properties: IProductProperty;
    created_at: Date;
    updated_at: Date;
}
