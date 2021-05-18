import { mediumCharacteristic } from "./mediumCharacteristic.model";

export interface contactMedium {
    mediumCharacteristic?: mediumCharacteristic[],
    mediumType?: string,
    prederred?: boolean,
    validFor?: string
}