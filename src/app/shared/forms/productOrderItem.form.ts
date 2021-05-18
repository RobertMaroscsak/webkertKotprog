import { FormControl, FormGroup } from "@angular/forms";

export function getProductOrderItem(): FormGroup {
    return new FormGroup({
        referredType: new FormControl(),
        orderItemAction: new FormControl(),
        orderItemId: new FormControl(),
        productOrderHref: new FormControl(),
        productOrderId: new FormControl(),
        role: new FormControl(),
    })
}