import React, { Component } from 'react';

import { connect } from 'react-redux';

import MovieCard from './MovieCard';
import '../../css/movie_container.css'; 

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';
    content = 
      movies.hits !== undefined
        ? movies.hits.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">
      {content}
      <button class="openbtn" onclick={openNav()}>Open Sidebar</button> 
      <div id="mySidebar" class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onclick={closeNav}>×</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>;
  }
}

// const openNav =()=>{
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// const closeNav = ()=>{
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
