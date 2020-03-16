

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
    baseUrl: process.env.REACT_APP_BASE_URL
});