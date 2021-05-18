import { cartItem } from "./cartItem.model";
import { cartTotalPrise } from "./cartTotalPrise.model";
import { contactMedium } from "./contactMedium.model";
import { relatedParty } from "./relatedParty.model";

export interface ShoppingCart {
    [x: string]: any;
    id?: any,
    name: string,
    href?: string,
    description?: string,
    prise?: number,
    heart?: boolean,
    cart?: boolean,
    cartItem?: cartItem[],
    cartTotalPrise?: cartTotalPrise[],
    contactMedium?: contactMedium[],
    relatedParty?: relatedParty[],
    validFor?: string
}