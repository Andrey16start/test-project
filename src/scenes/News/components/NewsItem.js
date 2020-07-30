import React from 'react';
import { connect } from 'react-redux';

import getDateByTimezoneOffset from '../../../utils/getDateByTimezoneOffset';

import LazyLoadImage from '../../../components/LazyLoadImage/LazyLoadImage';


const NewsItem = (props) => {
  const {
    title,
    text,
    dateCreated,
    photo,
    userTimezone,
  } = props;

  const renderDate = () => {
    const dateByTimezone = getDateByTimezoneOffset(userTimezone, dateCreated);

    const year = dateByTimezone.getFullYear();
    let day = dateByTimezone.getDate();
    let month = new Date(dateByTimezone).getMonth();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="news-item">
      <div className="news-item__photo">
        <LazyLoadImage src={photo} spinnerSize='70px' />
      </div>

      <div className="news-item__info">
        <h3 className="news-item__title">{title}</h3>

        {text.map(paragraph =>
          <p
            key={paragraph}
            className='news-item__text'
          >
            {paragraph}
          </p>
        )}

        <div className="news-item__footer">
          <div className="news-item__logo">
            <LazyLoadImage src='/media/mini-logo.png' />
          </div>

          <div className="news-item__footer-text">
            <div className="news-item__logo-text">SincereSystems</div>
            <time>{renderDate()}</time>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userTimezone: state.user.timezone,
});

export default connect(mapStateToProps)(NewsItem);