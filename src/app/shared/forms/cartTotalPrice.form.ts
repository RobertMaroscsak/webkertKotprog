import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { getPriceAlteration } from "./priceAlteration.form";
import { getProductOfferingPrice } from "./productOfferingPrice-form";

export function getCartTotalPrice(param: string): FormGroup {
    return new FormGroup ({
        description: new FormControl(param),
        name : new FormControl(param),
        price: new FormControl(param),
        priceAlteration: new FormArray([
            getPriceAlteration()
        ]),
        priceType: new FormControl(),
        productOfferingPrice: new FormArray([
            getProductOfferingPrice()
        ]),
        recurringChargePeriod : new FormControl(),
        unitOfMeasure : new FormControl()
    })
}