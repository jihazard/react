import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

/*
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
*/
/*
class Poster extends Component {
    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}
*/

//stateless = 라이플 사이클이 없음 그냥 1개의 return 값이 존재함
function Movie({title,poster}){
    return(
        <div>
        <Poster poster={poster}/>
        <h1>{title}</h1>
        </div>
   
    )
}
Movie.prototype={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired

}

function Poster({poster}){
    return(
        <img src={poster} />
    )
}

Poster.PropTypes={
    poster:PropTypes.string.isRequired
}
export default Movie