import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import AddBook from './components/AddBook'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  refresh = () => {
		this.setState({});
	}

  render(){
    return (
      <div className="App">
        <h1 class="mb-5">Library App</h1>
        <div class="m-5">
          <AddBook refresh={this.refresh}/>
        </div>
        <BookList refresh={this.refresh}/>
      </div>
    );
  }
}

export default App;
