import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05, waves } from './imports';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <div className='greentech__blog section__padding'>
      <div className='greentech__blog-heading'>
        <h1 className='gradient__text'>{t('blog.heading')}</h1>
      </div>
      <div className='greentech__blog-container'>
        <div className="greentech__blog-container_groupA">
          <Article
            imgUrl={waves}
            date="15 November, 2024"
            title={t('blog.article1Title')}
          />
        </div>
        <div className="greentech__blog-container_groupB">
          <Article
            imgUrl={waves}
            date="15 November, 2024"
            title={t('blog.article2Title')}
          />
          <Article
            imgUrl={waves}
            date="15 November, 2024"
            title={t('blog.article3Title')}
          />
          <Article
            imgUrl={waves}
            date="15 November, 2024"
            title={t('blog.article4Title')}
          />
          <Article
            imgUrl={waves}
            date="15 November, 2024"
            title={t('blog.article5Title')}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
