export type ImageLinks = {
  smallThumbnail?: string
  thumbnail?: string
  small?: string
  medium?: string
  large?: string
  extraLarge?: string
}

export type VolumeInfo = {
  title?: string
  authors?: string[]
  publisher?: string
  publishedDate?: string
  description?: string
  pageCount?: number
  mainCategory?: string
  categories?: string[]
  averageRating?: number
  ratingsCount?: number
  imageLinks?: ImageLinks
  language?: string
  infoLink?: string
  canonicalVolumeLink?: string
}

export type Book = {
  id: string
  selfLink: string
  volumeInfo: VolumeInfo
}

export type QueryBooksResponse = {
  totalItems: number;
  items: Book[];
}