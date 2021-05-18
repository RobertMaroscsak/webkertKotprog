import { FormControl, FormGroup } from "@angular/forms";

export function getProductSpecification(): FormGroup {
    return new FormGroup({
        referredType: new FormControl(),
        href: new FormControl(),
        id: new FormControl(),
        name: new FormControl(),
        targetProductSchema: new FormControl(),
        version: new FormControl(),
    })
}