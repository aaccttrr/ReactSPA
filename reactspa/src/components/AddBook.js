import React, { Component } from 'react'
import BookList from './BookList'
import api from './StubAPI'
import App from '../App'

class AddBook extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             id: new Date(),
             title:'',
             pages:'',
             genre:'',
             
        }
    }

    handleTitleChange=(event)=>{
        this.setState({
            title: event.target.value
        })
    }

    handlePagesChange=(event)=>{
        this.setState({
            pages: event.target.value
        })
    }

    handleGenreChange=(event)=>{
        this.setState({
            genre: event.target.value
        })
    }

    createBook = (event) => {
        event.preventDefault();
        api.addBook(this.state.id,
                    this.state.title,
                    this.state.pages,
                    this.state.genre,
                    ()=> {
          console.log(this.state.id,this.state.title,this.state.pages,this.state.genre)
          this.props.refresh();
        });
      }

    render() {
        return (
            <div class="container">
                <div class="card col-sm bg-success">
                    <form onSubmit={this.createBook}>
                        <h2>Add a book</h2>
                        <label class="m-1">Title:  </label>
                        <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        />

                        <label class="m-1">Pages:  </label>
                        <input
                        type="number"
                        value={this.state.pages}
                        onChange={this.handlePagesChange}
                        />

                        <label class="m-1">Genre:  </label>
                        <input
                        type="text"
                        value={this.state.genre}
                        onChange={this.handleGenreChange}
                        />

                        <button type="submit" class="ml-3">Add Book</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddBook
