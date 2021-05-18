import { FormControl, FormGroup } from "@angular/forms";

export function getPriceAlteration(): FormGroup {
    return new FormGroup ({
        applicationDuration: new FormControl(),
        description: new FormControl(),
        name: new FormControl(),
        price: new FormControl(),
        priceType: new FormControl(),
        priority: new FormControl(),
        recurringChargePeriod: new FormControl(),
        unitOfMeasure: new FormControl(),
    })
}