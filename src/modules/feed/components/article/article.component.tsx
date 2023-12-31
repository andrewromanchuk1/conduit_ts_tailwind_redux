import { FC } from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from '../favourite-button/favourite-button.component';
import TagList from '../tag-list/tag-list.component';
import { FeedArticle } from '../../api/dto/global-feed.in';
import ArticleAuthor from '../article-author/article-author.component';

interface ArticleProps extends FeedArticle {}

const Article: FC<ArticleProps> = ({ 
  author,
  publishedAt,
  favoritesCount,
  title,
  description,
  tagList,
  slug
 }) => {
  return <article>
    <div className='border-t border-black-10 py-6'>
      <div className='mb-4 font-light flex justify-between'>
        <ArticleAuthor author={author} publishedAt={publishedAt}/>
        <FavoriteButton count={favoritesCount}/>
      </div>
      <Link to={`/article/${encodeURIComponent(slug)}`} className='hover:no-underline'>
        <h2 className='mb-1 font-semibold text-2xl text-conduit-gray-1000'>
          {title}
        </h2>
        <p className='text-conduit-gray-700 font-light'>
          {description}
        </p>
        <div className='flex justify-between'>
          <span className='text-conduit-gray-500 text-date font-light'>Read more...</span>
          <TagList list={tagList}/>          
        </div>
      </Link>
    </div>
  </article>
}

export default Article; 