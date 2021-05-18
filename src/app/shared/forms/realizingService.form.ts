import { FormControl, FormGroup } from "@angular/forms";

export function getRealizingService(): FormGroup {
    return new FormGroup({
        referredType: new FormControl(),
        href: new FormControl(),
        id: new FormControl(),
        name: new FormControl(),
        role: new FormControl(),
    })
}