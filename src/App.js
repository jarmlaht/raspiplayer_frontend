import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Button, ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: undefined,
      level: 0,
      contents: [],
      headerText: "All bands",
      subHeaderText: "All Albums"
    };

    //this.handleLetterClick = this.handleLetterClick.bind(this);
  }

  showAlert() {
    alert("Im an alert");
  }
  
  componentDidMount() {
    axios.get('http://localhost:3001/contents')
      .then(response => {
        this.setState({contents: response.data});
      })
  }


  compare(a,b) {
	if (a.bandName < b.bandName)
	  return -1;
	if (a.bandName > b.bandName)
	  return 1;
	return 0;
  };

	handleLetterClick = (letter) => {
    console.log('letter:', letter);
		this.setState({ letter: letter });
  };
  
  render() {
	const {letter, contents, headerText, subHeaderText} = this.state;
	let filtered = undefined;
	if (letter && letter !== 'ALL') {
		filtered = contents.filter(item => item.bandName.startsWith(letter));
		filtered.sort(this.compare);
	}
	contents.sort(this.compare);
    
  const handleLetterClick = (letter) => {
		this.setState({ letter: letter });
  };
  
  const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "Ä",
      "Å",
      "Ö",
      "ALL"
    ];

  return (
    <div className="App">
      <PageHeader>
        {headerText} <small>{subHeaderText}</small>
      </PageHeader>
      {letters.map(function(item, index) {
        return (
          <Button
            style={{ marginLeft: 5, marginBottom: 5 }}
            key={item}
            onClick={() => handleLetterClick(item)}
          >
            {item}
          </Button>
        );
      })}
      {(letter && letter !== 'ALL') ? <ListGroup>
        {filtered.map(item => (
          <ListGroupItem
            header={item.bandName}
            key={item.bandName}
            onClick={() => console.log(item.bandName)}
          >
            {item.albums.length} albums
          </ListGroupItem>
        ))}
      </ListGroup> : <ListGroup>
        {contents.map(item => (
          <ListGroupItem
            header={item.bandName}
            key={item.bandName}
            onClick={() => console.log(item.bandName)}
          >
            {item.albums.length} albums
          </ListGroupItem>
        ))}
      </ListGroup>}
    </div>
    );
  }
}

export default App;
