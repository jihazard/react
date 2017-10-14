import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';



class App extends Component {
   //컴포넌트 실행 순서 : render : compoentwillmount() -> render() -> componentdidmount();
  //                    update componentwillreceiveProps() =-> shouldComponentUpdate()-> componentwillupdate() -> render()
  
  
  componentWillMount(){
    console.log("1.will mount)")
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
         movies:[
           ...this.state.movies,
           {title: "trainspotting", poster:"http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg"}
         ]
      })
      console.log('hello setTimeout')
    },3000)

    setTimeout(() =>{
     // 직접적으로 state 변경하면안도미 this.state.greeting= 'somethig'
     //5초 후에 바뀌게 하기
     /*
     this.setState({
         greeting: 'hello didmount'
       })
    }, 5000)
    */
    this.setState({
      greeting: 'hello didmount'
    })
    })
    console.log("3.did mount")
  }

  state={
    greeting : 'hello',
    movies : [
      {
      
      title:"Matrix",
      poster: "http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg"
      },
      {
      
        title:"oldboy",
        poster: "http://movie.phinf.naver.net/20131114_260/1384391087931T5Yx8_JPEG/movie_image.jpg"
        }
      ,{
      
        title:"starwars",
        poster: "http://movie.phinf.naver.net/20170915_299/1505458505658vbKcN_JPEG/movie_image.jpg"
        }
     ]   
  }


  render() {
    console.log("2.render`")
    return (  
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie , index)=>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
