export interface Product {
    productID: number;
    name: string;
    productNumber: string;
    makeFlag: boolean;
    finishedGoodsFlag: boolean;
    color: string;
    safetyStockLevel: number;
    reorderPoint: number;
    standardCost: number;
    listPrice: number;
    size: string;
    sizeUnitMeasureCode: string;
    weightUnitMeasureCode: string;
    weight?: number;
    daysToManufacture: number;
    productLine: string;
    class: string;
    style: string;
    productSubcategoryID?: number;
    productModelID?: number;
    sellStartDate: Date;
    sellEndDate?: Date;
    discontinuedDate?: any;
    rowguid: string;
    modifiedDate: Date;
}

export interface Products {
    status: String;
	products: Product[];
}