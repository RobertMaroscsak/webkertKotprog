import { FormControl, FormGroup } from "@angular/forms";

export function getCharacteristic(): FormGroup {
    return new FormGroup({
        name: new FormControl(),
        value: new FormControl(),
        valueType: new FormControl(),
    })
}