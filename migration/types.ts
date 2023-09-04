export type Article = {
  title: string
  href: string
  icon?: string
  en_title?: string
  description?: string
  tags?: string[]
  date?: Date
}

export interface State {
  articles: {
    philology: Article[]
    engineering: Article[]
  }
}
