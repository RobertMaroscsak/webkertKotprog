import { FormControl, FormGroup } from "@angular/forms";

export function getProductTerm(): FormGroup {
    return new FormGroup ({
        description: new FormControl(), 
        duration: new FormControl(), 
        name : new FormControl(), 
        validFor : new FormControl(), 
    })
}