

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

export default Object.freeze({
    baseStockXUrl: process.env.REACT_APP_BASE_STOCKX_URL,
    jsonServerUrl: process.env.REACT_APP_BASE_JSON_SERVER_URL,
    brands: ['all','jordan', 'adidas', 'nike', 'puma', 'reebok', 'new balance', 'asics', 'saucony'],
    paginationFirstIndexPerPage: 0,
    paginationLastIndexPerPage: 5,
});