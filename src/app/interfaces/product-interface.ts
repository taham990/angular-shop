export interface IProduct {
     id: number,
     productName: string,
     productMainCategory: string,
     productSubCategory: string,
     productMainCategoryPersian: string,
     productSubCategoryPersian: string,
     productImagesAddress: string[],
     productDescription: string,
     isMultiple: boolean,
     colors: string[],
     productPrice: string,
     hasDiscount: boolean,
     discountAmount: string,
     discountPrecent: string,
     isAvailable: boolean,
     availableAmount: number,
     productFeatures: object,
     searchItems: string[]
}