import { cartItemRelationship } from "./cartItemRelationship.model";
import { ProductRefOrValue } from "./ProductRefOrValue.model";

export interface cartItem {
    itemPrice?: number,
    action?: string,
    cartItemRelationship?: cartItemRelationship[],
    id?: string,
    ProductRefOrValue?: ProductRefOrValue,
    productOffering?: string,
    quantity?: string,
    status?: string
}