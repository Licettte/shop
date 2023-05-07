export interface CardItem {
    "id": number;
    "title": string;
    "img": string;
    "price": number;
    "discont": number;
    "rate": number;  
   }

export interface CardItemList {
    order: CardItem[];
}

export interface CardState {
    wiredHeadphones: CardItem[];
    wirelessHeadphones: CardItem[];   
    status: 'idle' | 'loading' | 'finished' | 'error';   
}
