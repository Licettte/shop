export interface BasketItem {
    img: string;
    title: string;
    price: number;
    rate: number;
    id: number;
    quantity: number;
}

export interface BasketList {
    order: BasketItem[];
}
