export interface GlobalFeedInDTO {
   articles: FeedArticle[]
   articlesCount: number
 }
 
export interface FeedArticle {
   slug: string
   title: string
   description: string
   body: string
   tagList: string[]
   publishedAt: string
   updatedAt: string
   favorited: boolean
   favoritesCount: number
   author: Author
 }
 
export interface Author {
   username: string
   bio?: string
   image: string
   following: boolean
 }
 