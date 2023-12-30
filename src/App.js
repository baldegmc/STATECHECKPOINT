


import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom/client';

class App extends React.Component {
  state = {
    Person: {
      fullName: "Naruto Uzumaki",
      bio: "I just love ramen",
      imgSrc: "./naruto.jpeg",
      profession: "7th Hokage"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}
/*const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);*/
export default App;
