import React ,{Component} from 'react';
import CardList from './components/card-list/card-list'
import './App.css';

 class  App extends Component {
   constructor(props){
     super(props);
     this.state = {
       monsters : []
       
     }
   }

   handleClick = (event) => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({monsters:users}));
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(users => this.setState({monsters:users}));
   }
  render() {

  return (
    <div className="App">
     <CardList monsters = {this.state.monsters} />  
      <button onClick = {this.handleClick}> ClickMe </button>
    </div>
  );
  }
}

export default App;
