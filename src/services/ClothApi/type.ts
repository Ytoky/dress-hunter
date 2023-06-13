export interface ClothResponse {
    id: number
    name: string
    collectionName: string
    price: number
    isFavourite: boolean
    imageUrl: string
    isNew?: boolean
    isSale?: boolean
    salePercent?: number
    isCart: boolean
}