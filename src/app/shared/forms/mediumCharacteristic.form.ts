import { FormControl, FormGroup } from "@angular/forms";

export function getMediumCharacteristic(): FormGroup {
    return new FormGroup ({
        city: new FormControl(),
        contactType : new FormControl(),
        country : new FormControl(),
        emailAddress : new FormControl(),
        faxNumber : new FormControl(),
        phoneNumber : new FormControl(),
        postCode : new FormControl(),
        socialNetworkId : new FormControl(),
        stateOrProvince  : new FormControl(),
        street1  : new FormControl(),
        street2  : new FormControl()
    })
}