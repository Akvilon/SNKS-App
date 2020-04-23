

export enum PATHES {
    HOME='/',
    ABOUT='/about',
    SNEAKERS_MEN='/men',
    SNEAKERS_WOMEN='/women',
    CONTACTS='/contacts',
    CART='/cart',
    PROFILE='/profile',
    SIGNIN='/signin',
    NOT_FOUND='/404',
    REDIRECT='/*'
}

export enum BRANDS {
    JORDAN='Air Jordan',
    NIKE='Nike',
    PUMA='Puma',
    ADIDAS='Adidas',
    NEW_BALANCE='New Balance',
    REEBOK='Reebok'
}

export default Object.freeze({
    baseStockXUrl: process.env.REACT_APP_BASE_STOCKX_URL,
    jsonServerUrl: process.env.REACT_APP_BASE_JSON_SERVER_URL,
});