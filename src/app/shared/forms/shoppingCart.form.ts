import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { getCartItem } from "./cartItem.form";
import { getCartTotalPrice } from "./cartTotalPrice.form";
import { getContactMedium } from "./contactMedium.form";
import { getRelatedParty } from "./relatedParty.form";

export function getShoppingCartForm(): FormGroup {
    return new FormGroup({
        id: new FormControl(),
        href: new FormControl(),
        name: new FormControl(),
        description: new FormControl(),
        prise: new FormControl(),
        heart: new FormControl(),
        cartItem: new FormArray([
            getCartItem()
        ]),
        cartTotalPrice: new FormArray([
            getCartTotalPrice('descripton'),
            getCartTotalPrice('name'),
            getCartTotalPrice('prise')
        ]),
        contactMedium: new FormArray([
            getContactMedium()
        ]),
        relatedParty: new FormArray([
            getRelatedParty()
        ]),
        validFor: new FormControl()
    });
}