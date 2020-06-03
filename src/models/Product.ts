import { Media } from "./SneakerListModel";


export type Product = {
    id: string,
    brand: string,
    colorway: string,
    gender: string,
    retailPrice: number,
    description: string,
    title: string,
    year: number,
    media: Media
}
