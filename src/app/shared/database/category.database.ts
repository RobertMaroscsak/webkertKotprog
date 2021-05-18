import { Category } from "../models/category.model";

export const CATEGORIES: Category[] = [
    {
        id: '1',
        title: 'Vásárlás',
        icon: 'shopping_basket',
        value: 'buy',
        color: 'teal'
    }, 
    {
        id: '2',
        title: 'Kedvencek',
        icon: 'favorite_border',
        value: 'favorite',
        color: '#2185b'
    },
    {
        id: '3',
        title: 'Kosaram',
        icon: 'shopping_cart',
        value: 'cart',
        color: 'cyan'
    }
]