// 
import React, { Component } from 'react'

import MyModal from './MyModal';

export default class Books extends Component {
    constructor(props){
        super(props);
        this.state={
            books:[],
            search:""
        }
    }
    componentDidMount(){
        fetch("https://api.jsonbin.io/b/5ea833484c87c3359a632938")
        .then(response=>response.json())
        .then(res=>{
            
            this.setState({books:res.books})
        })
        .catch(err=>console.log(err.message))
        
        
    }
    handleSearch=(e)=>{
           
         this.setState({search:e.target.value})
         
        }
    
    render() {
        
        
        
        
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="link"><img id="image"src="https://i.pinimg.com/originals/70/bd/63/70bd630505578fffc4c873001f89a9e1.jpg" alt="logo"className="img-thumbnail"></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearch}/>
        
                        </form>
                    </div>
                </nav>
                
                <div id="bookdetail">
                    {this.state.books.filter(book=>book.title.toLowerCase().includes(this.state.search.toLowerCase()) ||book.description.toLowerCase().includes(this.state.search.toLowerCase())).map((book,index)=>{
                   

                    return (
                        
                            <div className="flip-card" key={book.title}>
                            <div className="flip-card-inner">
                            <div className="flip-card-front">
                            <img src={book.cover} alt="Avatar" width="300px" height="400px"/>
                            </div>
                            <div className="flip-card-back">
                            <h1>{book.title}</h1>
                            <p>{book.description}</p>
                            <p>{book.language}</p>
                            <MyModal book={book}/>
                            
                          </div>
                        </div>
                      </div>
                      
                    )
                })}
                </div>
                
               
            </div>
        )
    }
}
