import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';



class App extends Component {
   //컴포넌트 실행 순서 : render : compoentwillmount() -> render() -> componentdidmount();
  //                    update componentwillreceiveProps() =-> shouldComponentUpdate()-> componentwillupdate() -> render()
  

  state={}
  
  componentWillMount(){
    console.log("1.will mount)")
  }

  componentDidMount(){
     //promise 의 기능 1. 1번이 끝나기전에 2번을 사용할 수 있ㄱ데 해줌 2. 시나리오를 잘쓰게 해줌. .then.catchj
    
    
    this._makeMovies();
  
  }

   _makeMovies = async() => {
      const movies = await this._callApi() 
      this.setState({
        movies
      })
    
    }

  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)    
    .catch(err => console.log(err))
  
  }
 
  _renderMovies=() => {
    const movies = this.state.movies.map((movie , index)=>{
      console.log(movie)
      
      return <Movie 
        title={movie.title}
        poster={movie.medium_cover_image}  
        key={movie.id} 
        genres={movie.genres}
        summary={movie.summary}
        
          />
    })
    return movies
  }


  render() {
    console.log("2.render`")
    const {movies} = this.state;
    return (  
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : '로딩중s'}
      </div>
    );
  }
}

export default App;
