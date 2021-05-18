import { FormControl, FormGroup } from "@angular/forms";

export function getAgreement(): FormGroup {
    return new FormGroup({
        referredType: new FormControl(),
        href: new FormControl(),
        id: new FormControl(),
        name: new FormControl(),
        agreementItemId: new FormControl(),
    })
}