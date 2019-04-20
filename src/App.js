import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Button, ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: "ALL",
      level: 0,
      contents: [],
      headerText: "All bands",
      subHeaderText: "All Albums",
      band: "",
      bandCount: 0,
      albumCount: 0,
      album: "",
    };

  }
  
  componentDidMount() {
    this.getMusicData();
  }

  getMusicData() {
    axios.get('http://localhost:3001/contents')
    .then(response => {
      const contents = response.data;
      this.countAlbums(contents, "ALL");
      this.setState({contents: contents, bandCount: response.data.length});
    })
  }

  getUpdateData() {
    axios.get('http://localhost:3001/update')
    .then(response => {
      const contents = response.data;
      this.countAlbums(contents, "ALL");
      this.setState({contents: contents, bandCount: response.data.length});
    })
  }

  countAlbums(contents, letter) {
    console.log("countAlbums: Bands:", contents.length);
    let albumCount = 0;
    let bands = (letter === "ALL" ? contents : contents.filter(item => item.bandName.startsWith(letter)));
    console.log("countAlbums:", bands.length, letter);
    bands.forEach(band => {
      console.log("countAlbums: band =", band);
      albumCount += band.albums.length;
    })
    console.log("countAlbums: album count =", albumCount);
    this.setState({albumCount: albumCount, bandCount: bands.length});
  }

  compare(a,b) {
	if (a.bandName < b.bandName)
	  return -1;
	if (a.bandName > b.bandName)
	  return 1;
	return 0;
  };
  
  render() {
	const {band, letter, contents, headerText, subHeaderText} = this.state;
  let filteredBands = undefined;
  let selectedBand = undefined
	if (letter && letter !== 'ALL') {
		filteredBands = contents.filter(item => item.bandName.startsWith(letter));
		filteredBands.sort(this.compare);
	}
	contents.sort(this.compare);
   
  if (band && band !== "") {
    selectedBand = contents.filter(item => item.bandName === band);
    //console.log("render:", selectedBand[0].albums);
  }

  const handleLetterClick = (letter) => {
    if (band !== "") return;
    console.log('letter:', letter);
    if (letter !== "ALL") this.countAlbums(contents.filter(item => item.bandName.startsWith(letter)), letter);
    else {
      this.countAlbums(contents, "ALL");
      this.setState({band: ""});
    }
		this.setState({ letter: letter });
  };
  
  const handleBandClick = (item) => {
    console.log('handleBandClick: band:', item.bandName);
    const bandAlbums = contents.filter(band => band.bandName === item.bandName);
    console.log("handleBandClick: Albums:", bandAlbums[0].albums.length);
		this.setState({ band: item.bandName });
  };

  const handleBackClick = () => {
    console.log('handleBackClick: back clicked');
    this.setState({band: "", album: ""});
  }

  const handleAlbumClick = (item) => {
    console.log('handleAlbumClick:', item.albumName, item.songs.length);
    item.songs.forEach((song, index) => console.log(index, song.songName));
    this.setState({album: item.albumName});
  }

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
        {(letter === "ALL" ? headerText + "(" + this.state.bandCount + ")" : headerText + ' - ' + letter)} <small>{subHeaderText + "(" + this.state.albumCount + ")"}</small>
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
      {this.state.band !== "" ?           
          <Button
            style={{ marginLeft: 5, marginBottom: 5 }}
            onClick={() => handleBackClick()}
          >
            {<i className="fas fa-arrow-circle-left"></i>}
          </Button> : null}
      
      {/* Update server button */}
      <Button
        style={{ marginLeft: 5, marginBottom: 5 }}
        onClick={() => this.getMusicData()}
      >
        {<i className="fas fa-sync-alt"></i>}
      </Button>
      
      {(letter && letter !== 'ALL' && band === "") ? <ListGroup>
        {filteredBands.map(item => (
          <ListGroupItem
            header={item.bandName}
            key={item.bandName}
            onClick={() => handleBandClick(item)}
          >
            {item.albums.length} albums
          </ListGroupItem>
        ))}
      </ListGroup> : <ListGroup>
        {band === "" ? contents.map(item => (
          <ListGroupItem
            header={item.bandName}
            key={item.bandName}
            onClick={() => handleBandClick(item)}
          >
            {item.albums.length} albums
          </ListGroupItem>
        )) : contents.filter(item => item.bandName === band).map(item => (
          <ListGroupItem
            header={item.bandName}
            key={item.bandName}
            onClick={() => handleBandClick(item)}
          >
            {item.albums.length} albums
          </ListGroupItem>
        ))}
      </ListGroup>}
      {band !== "" ? <div><ListGroup>
        {selectedBand[0].albums.map(album => (
          <ListGroupItem
            header={album.albumName}
            key={album.albumName}
            onClick={() => handleAlbumClick(album)}
          >
          {album.songs.length} songs
          </ListGroupItem>
        ))}
        </ListGroup></div> : null}
    </div>
    );
  }
}

export default App;
