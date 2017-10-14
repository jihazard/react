import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

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
function Movie({title,poster,genres,summary}){
    return(
        <div className='Movie'>
            <div className='Movie_Column'>
            <Poster poster={poster} alt={title}/>
            </div>
            <div className='Movie_Column'>
            <h1>{title}</h1>
             <div className='Movie_Genres'>
                {genres.map(genres=> <MovieGenre genres={genres}  />)}
             </div>
                <p className='Movie_summary'> 
                    <LinesEllipsis
                        text={summary}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                     />

                </p>
            </div>
        
        </div>
   
    )
}
Movie.prototype={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired
}

function Poster({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className='Movie_Poster'/>
    )
}
function MovieGenre({genres}){ 
    return (
        <span className='Movie_Genres'>{genres}</span>

    )}

Poster.PropTypes={
    poster:PropTypes.string.isRequired
}
export default Movie