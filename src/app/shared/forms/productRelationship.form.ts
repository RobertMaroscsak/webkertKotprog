import { FormControl, FormGroup } from "@angular/forms";

export function getProductRelationship(): FormGroup {
    return new FormGroup ({
        relationshipType: new FormControl()
    })
}