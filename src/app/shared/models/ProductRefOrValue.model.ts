import { agreement } from "./agreement.model";
import { billingAccount } from "./billingAccount.model";
import { characteristic } from "./characteristic.model";
import { productOffering } from "./productOffering.model";
import { productOrderItem } from "./productOrderItem.model";
import { productRelationship } from "./productRelationship.model";
import { productSpecification } from "./productSpecification.model";
import { productTerm } from "./productTerm.model";
import { realizingResource } from "./realizingResource.model";
import { realizingService } from "./realizingService.model";

export interface ProductRefOrValue {
    referredType?: string,
    href?: string,
    id?: string,
    name?: string,
    description?: string,
    isBundle?: boolean,
    isCustomerVisible?: boolean,
    orderDate?: Date,
    productSerialNumber?: string,
    startDate?: Date,
    terminationDate?: Date,
    agreement?: agreement[],
    billingAccount?: billingAccount[],
    characteristic?: characteristic[],
    productOffering?: productOffering[],
    productOrderItem?: productOrderItem[],
    productRelationship?: productRelationship[],
    productSpecification?: productSpecification[],
    productTerm?: productTerm[],
    realizingResource?: realizingResource[],
    realizingService?: realizingService[],
    quantity?: string,
    status?: string
}