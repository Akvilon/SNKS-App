

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
    media: Media
}

export type Media = {
    imageUrl: string,
    smallImageUrl: string,
}