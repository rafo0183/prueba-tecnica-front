import { ProductPropertyComents } from "./iProductPropertyComents";

export interface IProductProperty {
    description : string;
    coments:ProductPropertyComents[];
    images: String[];
    brand: String[];
}
