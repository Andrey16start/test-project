import React, { Component } from 'react'

import Spinner from '../Spinner/Spinner';
import './LazyLoadImage.scss'


// Use for images that are already on the page
// 
// Example: 
//     <LazyLoadImage
//       src=""                   :str 
//      />
class LazyLoadImage extends Component {
  state = {
    imageLoaded: false
  };

  handleImageLoaded = () => {
    this.setState({
      imageLoaded: true,
      error: ''
    })
  }

  handleImageErrored = () => {
    this.setState({
      error: "Failed to load image...",
      imageLoaded: true
    });
  }

  renderSpinner = () => (
    this.state.imageLoaded
      ? null
      : <Spinner spinnerSize={this.props.spinnerSize || '30px'} />
  )

  renderError = (props) => (
    this.state.error
      ? <img
        {...props}
        className="lazy-load__error"
        alt="error"
        title={this.state.error}
        data-image
        src="/media/error.png" />
      : null
  )

  render() {
    const { alt, className, onClick, spinnerSize, ...restProps } = this.props;

    const activeClass = !this.state.error && this.state.imageLoaded
      ? "lazy-load__image"
      : "lazy-load__image--hidden";
    const propsClass = className
      ? className
      : '';

    return (
      <div className="lazy-load__container">
        {this.renderSpinner()}
        {this.renderError(restProps)}

        <img
          {...restProps}
          alt={alt ? alt : "lazy"}
          className={`${activeClass} ${propsClass}`}
          onClick={onClick}
          onLoad={this.handleImageLoaded}
          data-image
          onError={this.handleImageErrored} />
      </div>
    );
  }
}

export default LazyLoadImage;