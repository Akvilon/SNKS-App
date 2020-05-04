
export type Pagination = {
    currentPage: string,
    lastPage: string
    limit: number,
    nextPage: string | null
    order: [string]
    page: number
    previousPage: string | null
    sort: [string]
}

export type Sneaker = {
    id: string,
    brand: string,
    category: string,
    colorway: string,
    gender: string,
    retailPrice: number,
    shortDescription: string,
    title: string,
    year: number,
    shoeSize: number | null,
    media: Media
}

export type Media = {
    imageUrl: string,
    smallImageUrl: string,
}


export type SneackerListModel = {
    Pagination: Pagination,
    Products: Array<Sneaker>
}