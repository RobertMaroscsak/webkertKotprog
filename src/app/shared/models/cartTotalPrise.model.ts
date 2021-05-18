import { priceAlteration } from "./priceAlteration.model";
import { productOfferingPrice } from "./productOfferingPrice.model";

export interface cartTotalPrise {
    description?: string,
    name?: string,
    price?: number
    priceAlteration?: priceAlteration[],
    priceType?: string
    productOfferingPrice?: productOfferingPrice[],
    recurringChargePeriod?: string,
    unitOfMeasure?: string
}