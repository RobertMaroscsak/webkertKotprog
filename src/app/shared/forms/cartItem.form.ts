import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { getCartItemRelationship } from "./cartItemRelationship.form";
import { getAgreement } from "./agreement.form";
import { getBillingAccount } from "./billingAccount.form";
import { getCharacteristic } from "./characteristic.form";
import { getProductOffering } from "./productOffering.form";
import { getProductOrderItem } from "./productOrderItem.form";
import { getProductRelationship } from "./productRelationship.form";
import { getProductSpecification } from "./productSpecification.form";
import { getProductTerm } from "./productTerm.form";
import { getRealizingResource } from "./realizingResource.form";
import { getRealizingService } from "./realizingService.form";

export function getCartItem(): FormGroup {
    return new FormGroup({
        itemPrice: new FormControl(),
        action: new FormControl(),
        cartItemRelationship: new FormArray([
            getCartItemRelationship()
        ]),
        id: new FormControl(),
        ProductRefOrValue: new FormGroup({
            referredType: new FormControl(),
            id: new FormControl(),
            name: new FormControl(),
            description: new FormControl(),
            isBundle: new FormControl(),
            isCustomerVisible: new FormControl(),
            orderDate: new FormControl(),
            productSerialNumber: new FormControl(),
            startDate: new FormControl(),
            terminationDate: new FormControl(),
            agreement: new FormArray([
                getAgreement()
            ]),
            billingAccount: new FormArray([
                getBillingAccount()
            ]),
            characteristic: new FormArray([
                getCharacteristic()
            ]),
            productOffering: new FormArray([
                getProductOffering()
            ]),
            productOrderItem: new FormArray([
                getProductOrderItem()
            ]),
            productRelationship: new FormArray([
                getProductRelationship()
            ]),
            productSpecification: new FormArray([
                getProductSpecification()
            ]),
            productTerm: new FormArray([
                getProductTerm()
            ]),
            realizingResource: new FormArray([
                getRealizingResource()
            ]),
            realizingService: new FormArray([
                getRealizingService()
            ]),
            status: new FormControl()
        }),
        productOffering: new FormControl(),
        quality: new FormControl(),
        status: new FormControl()
    })
}