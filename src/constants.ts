

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
    shoeSizes: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 16, 17, 18],
    paginationFirstIndexPerPage: 0,
    paginationItemsPerPage: 5,
});