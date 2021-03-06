import React from 'react';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="movie-card-rating">
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

export default Rating;
