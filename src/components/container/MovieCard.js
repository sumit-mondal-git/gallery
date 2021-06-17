import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
        <Link to={'/movie/' + movie.id}>
          <img className="card-img-top" src={movie.previewURL} alt="Card image cap"/>
          <div className="card-body">
            <p className="card-text">{movie.pageURL}</p>
          </div>
        </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
