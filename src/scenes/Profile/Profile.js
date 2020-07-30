import React from 'react';
import { connect } from 'react-redux';

import './Profile.scss';
import LazyLoadImage from '../../components/LazyLoadImage/LazyLoadImage';


const Profile = ({ user }) => {
  const {
    fn,
    photo,
    tel,
  } = user;

  return (
    <section className="profile">
      <div className="profile__avatar">
        <LazyLoadImage src={photo} />
      </div>

      <ul className="profile__info card">
        <li className="profile__info-key">Имя:</li>
        <li className="profile__info-key">Email:</li>
        <li className="profile__info-key">Телефон:</li>
      </ul>

      <ul className="profile__info card">
        <li className="profile__info-value">{user.fn}</li>
        <li className="profile__info-value">{user.email}</li>
        <li className="profile__info-value">{user.tel}</li>
      </ul>
    </section>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);