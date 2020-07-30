import React, { useState } from 'react';

import './News.scss';
import NewsItem from './components/NewsItem';
import useDidMount from '../../hooks/useDidMount';
import Spinner from '../../components/Spinner/Spinner';


const mockData = [
  {
    title: 'Презентация компании Sincere Systems',
    text: [,
      'Приглашаем Вас на офлайн презентацию компании Sincere Systems.',
      'Уже 14.02.2020 в 15:00 состоится презентация компании в Казахстане, г. Темиртау, Мира 71/2, Сити Центр'
    ],
    dateCreated: 1586714400000,
    photo: '/media/girl.png',
    id: 1,
  },
  {
    title: 'Презентация компании Sincere Systems',
    text: [,
      'Приглашаем Вас на офлайн презентацию компании Sincere Systems.',
      'Уже 14.02.2020 в 15:00 состоится презентация компании в Казахстане, г. Темиртау, Мира 71/2, Сити Центр'
    ],
    dateCreated: 1586628000000,
    photo: '/media/girl.png',
    id: 2,
  },
  {
    title: 'Презентация компании Sincere Systems',
    text: [,
      'Приглашаем Вас на офлайн презентацию компании Sincere Systems.',
      'Уже 14.02.2020 в 15:00 состоится презентация компании в Казахстане, г. Темиртау, Мира 71/2, Сити Центр'
    ],
    dateCreated: 1586628000000,
    photo: '/media/girl.png',
    id: 3,
  },
  {
    title: 'Презентация компании Sincere Systems',
    text: [,
      'Приглашаем Вас на офлайн презентацию компании Sincere Systems.',
      'Уже 14.02.2020 в 15:00 состоится презентация компании в Казахстане, г. Темиртау, Мира 71/2, Сити Центр'
    ],
    dateCreated: 1586541600000,
    photo: '/media/girl.png',
    id: 4,
  },
]


const News = () => {
  const [news, setNews] = useState({
    pending: true,
    list: [],
  });

  useDidMount(() => {
    setTimeout(() => { // request imitation
      setNews({
        pending: false,
        list: mockData,
      });
    }, 700);
  });

  return (
    <section className="news">
      <h3 className="news__title">
        Новости <span className="green">SincereSystems</span>
      </h3>

      {news.pending
        ? <Spinner spinnerSize='100px' />
        : news.list.map(article =>
          <NewsItem
            key={article.id}
            {...article}
          />
        )
      }
    </section>
  )
}

export default News;