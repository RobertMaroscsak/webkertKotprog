import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { getMediumCharacteristic } from "./mediumCharacteristic.form";

export function getContactMedium(): FormGroup {
    return new FormGroup ({
        mediumCharacteristic: new FormArray ([
            getMediumCharacteristic()
        ]),
        mediumType: new FormControl(),
        preferred: new FormControl(),
        validFor: new FormControl()
    })
}