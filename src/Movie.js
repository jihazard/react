import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


class Movie extends Component {
    static PropTypes= {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        console.log(this.props)
            return (
                <div>
                <Poster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
                </div>
            )


    }

}

class Poster extends Component {
    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie