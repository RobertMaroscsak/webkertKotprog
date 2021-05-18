import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function getCartItemRelationship(): FormGroup {
    return new FormGroup ({
        id: new FormControl(),
        relationshipType : new FormControl()
    })
}