﻿// AutoGenerated File

/** Transfer object for inventory summary */
export class InventoryProductSummaryDto {

    /** Gets or sets the product identifier. */
    productId: number;

    /** Gets or sets the name of the product. */
    productName: string;

    /** Gets or sets the product image URL. */
    productImageUrl: string;

    /** Gets or sets the amount. */
    amount: number;

    /** Initializes a new instance of the InventoryProductSummaryDto class **/
    public constructor(init?: Partial<InventoryProductSummaryDto>) {
        Object.assign(this, init);
    }
}
