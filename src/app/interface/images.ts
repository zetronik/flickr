export interface Images {
  canblog: number
  candownload: number
  canprint: number
  size: ImageSize[]
}

export interface ImageSize {
  height: number
  label: string
  media: string
  source: string
  url: string
  width: number
}

export interface Sizes {
  sizes: Images
  state: string
}
