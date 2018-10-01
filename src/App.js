import React, { Component } from "react";
import "./App.css";
import { Button, ListGroup, ListGroupItem, PageHeader } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  letter: undefined,
	  level: 0
    };
  }

  compare(a,b) {
	if (a.bandName < b.bandName)
	  return -1;
	if (a.bandName > b.bandName)
	  return 1;
	return 0;
  }

  render() {
	const {letter} = this.state
	let filtered = undefined
	if (letter && letter !== 'ALL') {
		filtered = contents.filter(item => item.bandName.startsWith(letter))
		filtered.sort(this.compare)
	}
	contents.sort(this.compare)
	  
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
	
	const handleLetterClick = (letter) => {
		this.setState({ letter: letter });
	};

	let headerText = "All bands";
    let subHeaderText = "All Albums";

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

const contents = [
  {
    bandId: 0,
    bandName: "Pendragon",
    albums: [
      {
        albumId: 0,
        albumName: "Pure",
        songs: [
          {
            songId: 0,
            songName: "01-Indigo.flac"
          },
          {
            songId: 1,
            songName: "02-Eraserhead.flac"
          },
          {
            songId: 2,
            songName: "03-Comatose I- View From the Seashore.flac"
          },
          {
            songId: 3,
            songName: "04-Comatose II- Space Cadet.flac"
          },
          {
            songId: 4,
            songName: "05-Comatose III- Home and Dry.flac"
          },
          {
            songId: 5,
            songName: "06-The Freak Show.flac"
          },
          {
            songId: 6,
            songName: "07-It's Only Me.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "The World",
        songs: [
          {
            songId: 0,
            songName: "01-Back in the Spotlight.flac"
          },
          {
            songId: 1,
            songName: "02-The Voyager.flac"
          },
          {
            songId: 2,
            songName: "03-Shane.flac"
          },
          {
            songId: 3,
            songName: "04-Prayer.flac"
          },
          {
            songId: 4,
            songName: "05-Queen of Hearts.flac"
          },
          {
            songId: 5,
            songName: "06-A Man Could Die Out Here.flac"
          },
          {
            songId: 6,
            songName: "07-The Last Waltz.flac"
          },
          {
            songId: 7,
            songName: "08-And We'll Go Hunting Together.flac"
          },
          {
            songId: 8,
            songName: "09-Sister Bluebird.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "Men Who Climb Mountains",
        songs: [
          {
            songId: 0,
            songName: "01-Belle Ame.flac"
          },
          {
            songId: 1,
            songName: "02-Beautiful Soul.flac"
          },
          {
            songId: 2,
            songName: "03-Come Home Jack.flac"
          },
          {
            songId: 3,
            songName: "04-In Bardo.flac"
          },
          {
            songId: 4,
            songName: "05-Faces of Light.flac"
          },
          {
            songId: 5,
            songName: "06-Faces of Darkness.flac"
          },
          {
            songId: 6,
            songName: "07-For When the Zombies Come.flac"
          },
          {
            songId: 7,
            songName: "08-Explorers of the Infinite.flac"
          },
          {
            songId: 8,
            songName: "09-Netherworld.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Not of This World",
        songs: [
          {
            songId: 0,
            songName: "01-If I Were the Wind (and You Were the Rain).flac"
          },
          {
            songId: 1,
            songName: "02-Dance of the Seven Veils- Faithless, Pt. 1.flac"
          },
          {
            songId: 2,
            songName: "03-Dance of the Seven Veils- All Over Now, Pt. 2.flac"
          },
          {
            songId: 3,
            songName: "04-Not of This World- Not of This World, Pt. 1.flac"
          },
          {
            songId: 4,
            songName: "05-Not of This World- Give It to Me, Pt. 2.flac"
          },
          {
            songId: 5,
            songName: "06-Not of This World- Green Eyed Angel, Pt. 3.flac"
          },
          {
            songId: 6,
            songName: "07-A Man of Nomadic Traits.flac"
          },
          {
            songId: 7,
            songName: "08-World's End- The Lost Children, Pt. 1.flac"
          },
          {
            songId: 8,
            songName: "09-World's End- And Finally..., Pt. 2.flac"
          },
          {
            songId: 9,
            songName: "10-Paintbox.flac"
          },
          {
            songId: 10,
            songName: "11-King of the Castle.flac"
          }
        ]
      },
      {
        albumId: 4,
        albumName: "Passion",
        songs: [
          {
            songId: 0,
            songName: "01-Passion.flac"
          },
          {
            songId: 1,
            songName: "02-Empathy.flac"
          },
          {
            songId: 2,
            songName: "03-Feeding Frenzy.flac"
          },
          {
            songId: 3,
            songName: "04-This Green and Pleasant Land.flac"
          },
          {
            songId: 4,
            songName: "05-It's Just a Matter of Not Getting Caught.flac"
          },
          {
            songId: 5,
            songName: "06-Skara Brae.flac"
          },
          {
            songId: 6,
            songName: "07-Your Black Heart.flac"
          }
        ]
      },
      {
        albumId: 5,
        albumName: "The Masquerade Overture",
        songs: [
          {
            songId: 0,
            songName: "01-The Masquerade Overture.flac"
          },
          {
            songId: 1,
            songName: "02-As Good as Gold.flac"
          },
          {
            songId: 2,
            songName: "03-Paintbox.flac"
          },
          {
            songId: 3,
            songName: "04-The Pursuit of Excellence.flac"
          },
          {
            songId: 4,
            songName: "05-Guardian of My Soul.flac"
          },
          {
            songId: 5,
            songName: "06-The Shadow.flac"
          },
          {
            songId: 6,
            songName: "07-Masters of Illusion.flac"
          },
          {
            songId: 7,
            songName: "08-The Last Man on Earth.flac"
          }
        ]
      },
      {
        albumId: 6,
        albumName: "The Window of Life",
        songs: [
          {
            songId: 0,
            songName: "01-The Walls of Babylon.flac"
          },
          {
            songId: 1,
            songName: "02-Ghosts.flac"
          },
          {
            songId: 2,
            songName: "03-Breaking the Spell.flac"
          },
          {
            songId: 3,
            songName: "04-The Last Man on Earth.flac"
          },
          {
            songId: 4,
            songName: "05-Nostradamus (Stardazing).flac"
          },
          {
            songId: 5,
            songName: "06-Am I Really Losing You.flac"
          },
          {
            songId: 6,
            songName: "07-The Third World in the UK.flac"
          },
          {
            songId: 7,
            songName: "08-Dune.flac"
          },
          {
            songId: 8,
            songName: "09-Sister Bluebird.flac"
          },
          {
            songId: 9,
            songName: "10-Fallen Dreams and Angels.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 1,
    bandName: "Absoluuttinen Nollapiste",
    albums: [
      {
        albumId: 0,
        albumName: "Pisara ja lammas 1",
        songs: [
          {
            songId: 0,
            songName: "01-Alkusoitto.flac"
          },
          {
            songId: 1,
            songName: "02-Planeetta Hyvä.flac"
          },
          {
            songId: 2,
            songName: "03-Juhlija.flac"
          },
          {
            songId: 3,
            songName: "04-Nainen lentää.flac"
          },
          {
            songId: 4,
            songName: "05-Kohtaaminen.flac"
          },
          {
            songId: 5,
            songName: "06-Pisara.flac"
          },
          {
            songId: 6,
            songName: "07-Paimenen uni.flac"
          },
          {
            songId: 7,
            songName: "08-Lampolan aamu.flac"
          },
          {
            songId: 8,
            songName: "09-Lammas näkee naisen.flac"
          },
          {
            songId: 9,
            songName: "10-Lampaan etsintä.flac"
          },
          {
            songId: 10,
            songName: "11-Lammas saa vainun.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Pisara ja lammas 2",
        songs: [
          {
            songId: 0,
            songName: "01-Äidin varoitus.flac"
          },
          {
            songId: 1,
            songName: "02-Taverna.flac"
          },
          {
            songId: 2,
            songName: "03-Sovinto.flac"
          },
          {
            songId: 3,
            songName: "04-Lammas matkustaa.flac"
          },
          {
            songId: 4,
            songName: "05-Heinäsirkka.flac"
          },
          {
            songId: 5,
            songName: "06-Saapuminen planeetalle.flac"
          },
          {
            songId: 6,
            songName: "07-Muodonmuutos heikentää.flac"
          },
          {
            songId: 7,
            songName: "08-Kirves tummuu.flac"
          },
          {
            songId: 8,
            songName: "09-Synnytys.flac"
          },
          {
            songId: 9,
            songName: "10-Paljastuminen.flac"
          },
          {
            songId: 10,
            songName: "11-Loppusoitto.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 2,
    bandName: "Glass Hammer",
    albums: [
      {
        albumId: 0,
        albumName: "Cor Cordium",
        songs: [
          {
            songId: 0,
            songName: "01-Nothing Box.flac"
          },
          {
            songId: 1,
            songName: "02-One Heart.flac"
          },
          {
            songId: 2,
            songName: "03-Salvation Station.flac"
          },
          {
            songId: 3,
            songName: "04-Dear Daddy.flac"
          },
          {
            songId: 4,
            songName: "05-To Someone.flac"
          },
          {
            songId: 5,
            songName: "06-She, a Lonely Tower.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Culture of Ascent",
        songs: [
          {
            songId: 0,
            songName: "01-South Side of the Sky.flac"
          },
          {
            songId: 1,
            songName: "02-Sun Song.flac"
          },
          {
            songId: 2,
            songName: "03-Life by Light.flac"
          },
          {
            songId: 3,
            songName: "04-Ember Without Name.flac"
          },
          {
            songId: 4,
            songName: "05-Into Thin Air.flac"
          },
          {
            songId: 5,
            songName: "06-Rest.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "If",
        songs: [
          {
            songId: 0,
            songName: "01-Beyond, Within.flac"
          },
          {
            songId: 1,
            songName: "02-Behold, the Ziddle.flac"
          },
          {
            songId: 2,
            songName: "03-Grace the Sky.flac"
          },
          {
            songId: 3,
            songName: "04-At Last We Are.flac"
          },
          {
            songId: 4,
            songName: "05-If the Stars.flac"
          },
          {
            songId: 5,
            songName: "06-If the Sun.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Lex Rex",
        songs: [
          {
            songId: 0,
            songName: "01-Good Evening.flac"
          },
          {
            songId: 1,
            songName: "02-Tales of the Great Wars.flac"
          },
          {
            songId: 2,
            songName: "03-One King.flac"
          },
          {
            songId: 3,
            songName: "04-Further Up & Further In.flac"
          },
          {
            songId: 4,
            songName: "05-Intermission.flac"
          },
          {
            songId: 5,
            songName: "06-Music for Four Hands (And Temporal Anomaly).flac"
          },
          {
            songId: 6,
            songName: "07-A Cup of Trembling.flac"
          },
          {
            songId: 7,
            songName: "08-Centurion.flac"
          },
          {
            songId: 8,
            songName: "09-When We Were Young.flac"
          },
          {
            songId: 9,
            songName: "10-Goodnight.flac"
          },
          {
            songId: 10,
            songName: "11-Heroes & Dragons.flac"
          }
        ]
      },
      {
        albumId: 4,
        albumName: "The Inconsolable Secret (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Long and Long Ago.flac"
          },
          {
            songId: 1,
            songName: "02-The Morning She Woke.flac"
          },
          {
            songId: 2,
            songName: "03-Lirazel.flac"
          },
          {
            songId: 3,
            songName: "04-The High Place.flac"
          },
          {
            songId: 4,
            songName: "05-Morrigan's Song.flac"
          },
          {
            songId: 5,
            songName: "06-Walking Toward Doom.flac"
          },
          {
            songId: 6,
            songName: "07-Mog Ruith.flac"
          },
          {
            songId: 7,
            songName: "08-Through a Glass Darkly.flac"
          },
          {
            songId: 8,
            songName: "09-The Lady Waits.flac"
          },
          {
            songId: 9,
            songName: "10-The Mirror Cracks.flac"
          },
          {
            songId: 10,
            songName: "11-Having Caught a Glimpse.flac"
          }
        ]
      },
      {
        albumId: 5,
        albumName: "Chronometree",
        songs: [
          {
            songId: 0,
            songName: "01-Empty Space-Revealer.flac"
          },
          {
            songId: 1,
            songName: "02-An Eldritch Wind.flac"
          },
          {
            songId: 2,
            songName: "03-Revelation-Chronometry.flac"
          },
          {
            songId: 3,
            songName: "04-Chronotheme.flac"
          },
          {
            songId: 4,
            songName: "05-A Perfect Carousel.flac"
          },
          {
            songId: 5,
            songName: "06-Chronos Deliver.flac"
          },
          {
            songId: 6,
            songName: "07-Shapes of the Morning.flac"
          },
          {
            songId: 7,
            songName: "08-Chronoverture.flac"
          },
          {
            songId: 8,
            songName: "09-The Waiting.flac"
          },
          {
            songId: 9,
            songName: "10-Watching the Sky.flac"
          }
        ]
      },
      {
        albumId: 6,
        albumName: "Perelandra",
        songs: [
          {
            songId: 0,
            songName: "01-Now Arriving.flac"
          },
          {
            songId: 1,
            songName: "02-Time Marches On.flac"
          },
          {
            songId: 2,
            songName: "03-Illusion.flac"
          },
          {
            songId: 3,
            songName: "04-The Way to Her Heart.flac"
          },
          {
            songId: 4,
            songName: "05-Felix the Cat.flac"
          },
          {
            songId: 5,
            songName: "06-Now Departing.flac"
          },
          {
            songId: 6,
            songName: "07-Perelandra.flac"
          },
          {
            songId: 7,
            songName: "08-Le Danse Final.flac"
          },
          {
            songId: 8,
            songName: "09-That Hideous Strength.flac"
          },
          {
            songId: 9,
            songName: "10-Enda the Lion.flac"
          },
          {
            songId: 10,
            songName: "11-Into the Night.flac"
          },
          {
            songId: 11,
            songName: "12-Heaven.flac"
          }
        ]
      },
      {
        albumId: 7,
        albumName: "Shadowlands",
        songs: [
          {
            songId: 0,
            songName: "01-So Close, So Far.flac"
          },
          {
            songId: 1,
            songName: "02-Run Lisette.flac"
          },
          {
            songId: 2,
            songName: "03-Farewell to Shadowlands.flac"
          },
          {
            songId: 3,
            songName: "04-Longer.flac"
          },
          {
            songId: 4,
            songName: "05-Behind the Great Beyond.flac"
          }
        ]
      },
      {
        albumId: 8,
        albumName: "The Inconsolable Secret (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-A Maker of Crowns.flac"
          },
          {
            songId: 1,
            songName: "02-The Knight of the North.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 3,
    bandName: "Porcupine Tree",
    albums: [
      {
        albumId: 0,
        albumName: "Anesthetize Live in Tilburg Oct. 2008 (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Intro.flac"
          },
          {
            songId: 1,
            songName: "02-Fear of a Blank Planet.flac"
          },
          {
            songId: 2,
            songName: "03-My Ashes.flac"
          },
          {
            songId: 3,
            songName: "04-Anesthetize.flac"
          },
          {
            songId: 4,
            songName: "05-Sentimental.flac"
          },
          {
            songId: 5,
            songName: "06-Way Out of Here.flac"
          },
          {
            songId: 6,
            songName: "07-Sleep Together.flac"
          },
          {
            songId: 7,
            songName: "08-Prodigal.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Anesthetize Live in Tilburg Oct. 2008 (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-What Happens Now.flac"
          },
          {
            songId: 1,
            songName: "02-Normal.flac"
          },
          {
            songId: 2,
            songName: "03-Dark Matter.flac"
          },
          {
            songId: 3,
            songName: "04-Drown With Me.flac"
          },
          {
            songId: 4,
            songName: "05-Cheating the Polygraph.flac"
          },
          {
            songId: 5,
            songName: "06-Half-Light.flac"
          },
          {
            songId: 6,
            songName: "07-Sever.flac"
          },
          {
            songId: 7,
            songName: "08-Wedding Nails.flac"
          },
          {
            songId: 8,
            songName: "09-Strip the SoulDot Three.flac"
          },
          {
            songId: 9,
            songName: "10-Sleep of No Dreaming.flac"
          },
          {
            songId: 10,
            songName: "11-Halo.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 4,
    bandName: "Spock's Beard",
    albums: [
      {
        albumId: 0,
        albumName: "Snow (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Made Alive-Overture.flac"
          },
          {
            songId: 1,
            songName: "02-Stranger in a Strange Land.flac"
          },
          {
            songId: 2,
            songName: "03-Long Time Suffering.flac"
          },
          {
            songId: 3,
            songName: "04-Welcome to NYC.flac"
          },
          {
            songId: 4,
            songName: "05-Love Beyond Words.flac"
          },
          {
            songId: 5,
            songName: "06-The 39th Street Blues (I'm Sick).flac"
          },
          {
            songId: 6,
            songName: "07-Devil's Got My Throat.flac"
          },
          {
            songId: 7,
            songName: "08-Open Wide the Flood Gates.flac"
          },
          {
            songId: 8,
            songName: "09-Open the Gates, Pt. 2.flac"
          },
          {
            songId: 9,
            songName: "10-Solitary Soul.flac"
          },
          {
            songId: 10,
            songName: "11-Wind at My Back.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Snow (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Second Overture.flac"
          },
          {
            songId: 1,
            songName: "02-4th of July.flac"
          },
          {
            songId: 2,
            songName: "03-I'm the Guy.flac"
          },
          {
            songId: 3,
            songName: "04-Reflection.flac"
          },
          {
            songId: 4,
            songName: "05-Carie.flac"
          },
          {
            songId: 5,
            songName: "06-Looking for Answers.flac"
          },
          {
            songId: 6,
            songName: "07-Freak Boy.flac"
          },
          {
            songId: 7,
            songName: "08-All Is Vanity.flac"
          },
          {
            songId: 8,
            songName: "09-I'm Dying.flac"
          },
          {
            songId: 9,
            songName: "10-Freak Boy Pt. 2.flac"
          },
          {
            songId: 10,
            songName: "11-Devil's Got My Throat Revisited.flac"
          },
          {
            songId: 11,
            songName: "12-Snow's Night Out.flac"
          },
          {
            songId: 12,
            songName:
              "13-Ladies and Gentleman, Mister Ryo Okumoto on the Keyboards.flac"
          },
          {
            songId: 13,
            songName: "14-I Will Go.flac"
          },
          {
            songId: 14,
            songName: "15-Made Alive Again-Wind at My Back.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "V",
        songs: [
          {
            songId: 0,
            songName: "01-Spock's Beard At The End Of The Day.flac"
          },
          {
            songId: 1,
            songName: "02-Revelation.flac"
          },
          {
            songId: 2,
            songName: "03-Thoughts (Part II).flac"
          },
          {
            songId: 3,
            songName: "04-All On A Sunday.flac"
          },
          {
            songId: 4,
            songName: "05-Goodbye To Yesterday.flac"
          },
          {
            songId: 5,
            songName: "06-The Great Nothing.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Brief Nocturnes and Dreamless Sleep",
        songs: [
          {
            songId: 0,
            songName: "01-Hiding Out.flac"
          },
          {
            songId: 1,
            songName: "02-I Know Your Secret.flac"
          },
          {
            songId: 2,
            songName: "03-A Treasure Abandoned.flac"
          },
          {
            songId: 3,
            songName: "04-Submerged.flac"
          },
          {
            songId: 4,
            songName: "05-Afterthoughts.flac"
          },
          {
            songId: 5,
            songName: "06-Something Very Strange.flac"
          },
          {
            songId: 6,
            songName: "07-Waiting for Me.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 5,
    bandName: "Transatlantic",
    albums: [
      {
        albumId: 0,
        albumName: "Bridge Across Forever",
        songs: [
          {
            songId: 0,
            songName: "01-Duel With The Devil.flac"
          },
          {
            songId: 1,
            songName: "02-Suite Charlotte Pike.flac"
          },
          {
            songId: 2,
            songName: "03-Bridge Across Forever.flac"
          },
          {
            songId: 3,
            songName: "04-Stranger In Your Soul.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Kaleidoscope",
        songs: [
          {
            songId: 0,
            songName:
              "01-Into the Blue Overture (Instrumental)The Dreamer and the HealerA New.flac"
          },
          {
            songId: 1,
            songName: "02-Shine.flac"
          },
          {
            songId: 2,
            songName: "03-Black As the Sky.flac"
          },
          {
            songId: 3,
            songName: "04-Beyond the Sun.flac"
          },
          {
            songId: 4,
            songName:
              "05-Kaleidoscope Overture (Instrumental)Ride the LightningBlack GoldWal.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "Kaleidoscope (Bonus disc)",
        songs: [
          {
            songId: 0,
            songName: "01-And You And I.flac"
          },
          {
            songId: 1,
            songName: "02-Can't Get It Out of My Head.flac"
          },
          {
            songId: 2,
            songName: "03-Conquistador.flac"
          },
          {
            songId: 3,
            songName: "04-Goodbye Yellow Brick Road.flac"
          },
          {
            songId: 4,
            songName: "05-Tin Soldier.flac"
          },
          {
            songId: 5,
            songName: "06-Sylvia.flac"
          },
          {
            songId: 6,
            songName: "07-Indiscipline.flac"
          },
          {
            songId: 7,
            songName: "08-Nights in White Satin.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Live In America (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-All Of The Above.flac"
          },
          {
            songId: 1,
            songName:
              "02-Mystery Train Magical Mystery Tour Strawberry Fields Forever.flac"
          },
          {
            songId: 2,
            songName: "03-We All Need Some Light.flac"
          }
        ]
      },
      {
        albumId: 4,
        albumName: "Live In America (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Watcher of the Skies-Firth of Fifth.flac"
          },
          {
            songId: 1,
            songName: "02-My New World.flac"
          },
          {
            songId: 2,
            songName:
              "03-Medley- There Is More to This World-Go the Way You Go-The Great Escape.flac"
          }
        ]
      },
      {
        albumId: 5,
        albumName: "SMPTe",
        songs: [
          {
            songId: 0,
            songName: "01-All Of The Above.flac"
          },
          {
            songId: 1,
            songName: "02-We All Need Some Light.flac"
          },
          {
            songId: 2,
            songName: "03-Mystery Train.flac"
          },
          {
            songId: 3,
            songName: "04-My New World.flac"
          },
          {
            songId: 4,
            songName: "05-In Held (Twas) In I.flac"
          }
        ]
      },
      {
        albumId: 6,
        albumName: "The Whirlwind (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-OvertureWhirlwind.flac"
          },
          {
            songId: 1,
            songName: "02-The Wind Blew Them All Away.flac"
          },
          {
            songId: 2,
            songName: "03-On the Prowl.flac"
          },
          {
            songId: 3,
            songName: "04-A Man Can Feel.flac"
          },
          {
            songId: 4,
            songName: "05-Out of the Night.flac"
          },
          {
            songId: 5,
            songName: "06-Rose Colored Glasses.flac"
          },
          {
            songId: 6,
            songName: "07-Evermore.flac"
          },
          {
            songId: 7,
            songName: "08-Set Us Free.flac"
          },
          {
            songId: 8,
            songName: "09-Lay Down Your Life.flac"
          },
          {
            songId: 9,
            songName: "10-Pieces of Heaven.flac"
          },
          {
            songId: 10,
            songName: "11-Is It Really Happening.flac"
          },
          {
            songId: 11,
            songName: "12-Dancing with Eternal GloryWhirlwind (Reprise).flac"
          }
        ]
      },
      {
        albumId: 7,
        albumName: "The Whirlwind (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Spinning.flac"
          },
          {
            songId: 1,
            songName: "02-Lenny Johnson.flac"
          },
          {
            songId: 2,
            songName: "03-For Such a Time.flac"
          },
          {
            songId: 3,
            songName: "04-Lending a Hand.flac"
          },
          {
            songId: 4,
            songName: "05-The Return of the Giant Hogweed.flac"
          },
          {
            songId: 5,
            songName: "06-A Salty Dog.flac"
          },
          {
            songId: 6,
            songName: "07-I Need You, Pts. 1-2.flac"
          },
          {
            songId: 7,
            songName: "08-Soul Sacrifice.flac"
          }
        ]
      },
      {
        albumId: 8,
        albumName: "KaLIVEoscope (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Into The Blue.flac"
          },
          {
            songId: 1,
            songName: "02-My New World.flac"
          },
          {
            songId: 2,
            songName: "03-Shine.flac"
          }
        ]
      },
      {
        albumId: 9,
        albumName: "KaLIVEoscope (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-The Whirlwind Medley.flac"
          },
          {
            songId: 1,
            songName: "02-Beyond The Sun.flac"
          },
          {
            songId: 2,
            songName: "03-Kaleidoscope.flac"
          }
        ]
      },
      {
        albumId: 10,
        albumName: "KaLIVEoscope (Disc 3)",
        songs: [
          {
            songId: 0,
            songName: "01-Neal & Roine (Duet).flac"
          },
          {
            songId: 1,
            songName: "02-We All Need Some Light.flac"
          },
          {
            songId: 2,
            songName: "03-Black As The Sky.flac"
          },
          {
            songId: 3,
            songName: "04-Nights In White Satin.flac"
          },
          {
            songId: 4,
            songName: "05-Sylvia.flac"
          },
          {
            songId: 5,
            songName: "06-Hocus Pocus.flac"
          },
          {
            songId: 6,
            songName: "07-Medley All Of The Above Stranger In Your Soul.flac"
          }
        ]
      },
      {
        albumId: 11,
        albumName: "Live In Europe (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Duel With The Devil.flac"
          },
          {
            songId: 1,
            songName: "02-My New World.flac"
          },
          {
            songId: 2,
            songName: "03-We All Need Some Light.flac"
          },
          {
            songId: 3,
            songName: "04-Suite Charlotte Pike Medley.flac"
          }
        ]
      },
      {
        albumId: 12,
        albumName: "Live In Europe (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Stranger In Your Soul.flac"
          },
          {
            songId: 1,
            songName: "02-All Of The Above.flac"
          }
        ]
      },
      {
        albumId: 13,
        albumName: "Whirld Tour 2010 (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-The Whirlwind.flac"
          }
        ]
      },
      {
        albumId: 14,
        albumName: "Whirld Tour 2010 (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-All Of The Above.flac"
          },
          {
            songId: 1,
            songName: "02-We All Need Some Light.flac"
          },
          {
            songId: 2,
            songName: "03-Duel With The Devil.flac"
          }
        ]
      },
      {
        albumId: 15,
        albumName: "Whirld Tour 2010 (Disc 3)",
        songs: [
          {
            songId: 0,
            songName: "01-Bridge Across Forever.flac"
          },
          {
            songId: 1,
            songName: "02-Stranger In Your Soul.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 6,
    bandName: "Yes",
    albums: [
      {
        albumId: 0,
        albumName: "Fly from Here",
        songs: [
          {
            songId: 0,
            songName: "01-Fly from Here- Overture.flac"
          },
          {
            songId: 1,
            songName: "02-Fly from Here, Pt. 1- We Can Fly.flac"
          },
          {
            songId: 2,
            songName: "03-Fly from Here, Pt. 2- Sad Night at the Airfield.flac"
          },
          {
            songId: 3,
            songName: "04-Fly from Here, Pt. 3- Madman at the Screens.flac"
          },
          {
            songId: 4,
            songName: "05-Fly from Here, Pt. 4- Bumpy Ride.flac"
          },
          {
            songId: 5,
            songName: "06-Fly from Here, Pt. 5- We Can Fly (Reprise).flac"
          },
          {
            songId: 6,
            songName: "07-The Man You Always Wanted Me to Be.flac"
          },
          {
            songId: 7,
            songName: "08-Life on a Film Set.flac"
          },
          {
            songId: 8,
            songName: "09-Hour of Need.flac"
          },
          {
            songId: 9,
            songName: "10-Solitaire.flac"
          },
          {
            songId: 10,
            songName: "11-Into the Storm.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Keys To Ascension (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Siberian Khatru.flac"
          },
          {
            songId: 1,
            songName: "02-The Revealing Science Of God.flac"
          },
          {
            songId: 2,
            songName: "03-America.flac"
          },
          {
            songId: 3,
            songName: "04-Onward.flac"
          },
          {
            songId: 4,
            songName: "05-Awaken.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "Keys To Ascension (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Roundabout.flac"
          },
          {
            songId: 1,
            songName: "02-Starship Trooper.flac"
          },
          {
            songId: 2,
            songName: "03-Be The One.flac"
          },
          {
            songId: 3,
            songName: "04-That, That Is.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Keys To Ascension 2 (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-I've Seen All Good People.flac"
          },
          {
            songId: 1,
            songName: "02-Going For The One.flac"
          },
          {
            songId: 2,
            songName: "03-Time And A Word.flac"
          },
          {
            songId: 3,
            songName: "04-Close To The Edge.flac"
          },
          {
            songId: 4,
            songName: "05-Turn Of The Century.flac"
          },
          {
            songId: 5,
            songName: "06-And You And I.flac"
          }
        ]
      },
      {
        albumId: 4,
        albumName: "Keys To Ascension 2 (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Mind Drive.flac"
          },
          {
            songId: 1,
            songName: "02-Foot Prints.flac"
          },
          {
            songId: 2,
            songName: "03-Bring Me To The Power.flac"
          },
          {
            songId: 3,
            songName: "04-Children Of Light.flac"
          },
          {
            songId: 4,
            songName: "05-Sign Language.flac"
          }
        ]
      },
      {
        albumId: 5,
        albumName: "In a Word (1969 - ) (Disc 5)",
        songs: [
          {
            songId: 0,
            songName: "01-Lift Me Up.flac"
          },
          {
            songId: 1,
            songName: "02-The Calling.flac"
          },
          {
            songId: 2,
            songName: "03-I Am Waiting.flac"
          },
          {
            songId: 3,
            songName: "04-Mind Drive.flac"
          },
          {
            songId: 4,
            songName: "05-Open Your Eyes.flac"
          },
          {
            songId: 5,
            songName: "06-Universal Garden.flac"
          },
          {
            songId: 6,
            songName: "07-Homeworld (The Ladder).flac"
          },
          {
            songId: 7,
            songName: "08-The Messenger.flac"
          },
          {
            songId: 8,
            songName: "09-Last Train.flac"
          },
          {
            songId: 9,
            songName:
              "10-In the Presence Of (I. Deeper - II. Death of Ego - III. True Beginner - IV. Turn Around and Remember).flac"
          }
        ]
      },
      {
        albumId: 6,
        albumName: "In a Word (1969 - ) (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Every Little Thing.flac"
          },
          {
            songId: 1,
            songName: "02-Sweetness.flac"
          },
          {
            songId: 2,
            songName: "03-Survival.flac"
          },
          {
            songId: 3,
            songName: "04-Then.flac"
          },
          {
            songId: 4,
            songName: "05-Sweet Dreams.flac"
          },
          {
            songId: 5,
            songName: "06-Astral Traveller.flac"
          },
          {
            songId: 6,
            songName: "07-Time and a Word.flac"
          },
          {
            songId: 7,
            songName: "08-Dear Father.flac"
          },
          {
            songId: 8,
            songName: "09-Yours Is No Disgrace.flac"
          },
          {
            songId: 9,
            songName: "10-Clap.flac"
          },
          {
            songId: 10,
            songName: "11-Perpetual Change.flac"
          },
          {
            songId: 11,
            songName:
              "12-Starship Trooper (a. Life Seeker - b. Disillusion - c. Würm).flac"
          },
          {
            songId: 12,
            songName:
              "13-I've Seen All Good People (a. Your Move - b. All Good People).flac"
          }
        ]
      },
      {
        albumId: 7,
        albumName: "In a Word (1969 - ) (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Roundabout.flac"
          },
          {
            songId: 1,
            songName: "02-South Side of the Sky.flac"
          },
          {
            songId: 2,
            songName: "03-Heart of the Sunrise.flac"
          },
          {
            songId: 3,
            songName: "04-America.flac"
          },
          {
            songId: 4,
            songName:
              "05-Close to the Edge (I. The Solid Time of Change - II. Total Mass Retain - III. I Get up I Get Down - IV. Seasons of Man).flac"
          },
          {
            songId: 5,
            songName: "06-The Revealing Science of God - Dance of the Dawn.flac"
          }
        ]
      },
      {
        albumId: 8,
        albumName: "In a Word (1969 - ) (Disc 3)",
        songs: [
          {
            songId: 0,
            songName: "01-Siberian Khatru.flac"
          },
          {
            songId: 1,
            songName: "02-Long Distance Runaround.flac"
          },
          {
            songId: 2,
            songName: "03-The Gates of Delirium.flac"
          },
          {
            songId: 3,
            songName: "04-To Be Over.flac"
          },
          {
            songId: 4,
            songName: "05-Going for the One.flac"
          },
          {
            songId: 5,
            songName: "06-Turn of the Century.flac"
          },
          {
            songId: 6,
            songName: "07-Wonderous Stories.flac"
          },
          {
            songId: 7,
            songName: "08-Don't Kill the Whale.flac"
          },
          {
            songId: 8,
            songName: "09-Release, Release.flac"
          },
          {
            songId: 9,
            songName: "10-Arriving UFO.flac"
          },
          {
            songId: 10,
            songName: "11-Richard.flac"
          }
        ]
      },
      {
        albumId: 9,
        albumName: "In a Word (1969 - ) (Disc 4)",
        songs: [
          {
            songId: 0,
            songName: "01-Tango.flac"
          },
          {
            songId: 1,
            songName: "02-Never Done Before.flac"
          },
          {
            songId: 2,
            songName: "03-Crossfire.flac"
          },
          {
            songId: 3,
            songName: "04-Machine Messiah.flac"
          },
          {
            songId: 4,
            songName: "05-Tempus Fugit.flac"
          },
          {
            songId: 5,
            songName: "06-Owner of a Lonely Heart.flac"
          },
          {
            songId: 6,
            songName: "07-It Can Happen.flac"
          },
          {
            songId: 7,
            songName: "08-Leave It.flac"
          },
          {
            songId: 8,
            songName: "09-Hold On.flac"
          },
          {
            songId: 9,
            songName: "10-Rhythm of Love.flac"
          },
          {
            songId: 10,
            songName: "11-Love Will Find a Way.flac"
          },
          {
            songId: 11,
            songName: "12-Holy Lamb (Song for Harmonic Convergence).flac"
          },
          {
            songId: 12,
            songName:
              "13-Brother of Mine (I. The Big Dream - II. Nothing Can Come Between Us - III. Long Lost Brother Of Mine).flac"
          },
          {
            songId: 13,
            songName: "14-Fist of Fire [Alternate Version].flac"
          },
          {
            songId: 14,
            songName: "15-I Would Have Waited Forever.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 7,
    bandName: "Genesis",
    albums: [
      {
        albumId: 0,
        albumName: "Genesis Archive 1967-1975 (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-The Lamb Lies Down On Broadway.flac"
          },
          {
            songId: 1,
            songName: "02-Fly On A Windshield.flac"
          },
          {
            songId: 2,
            songName: "03-Broadway Melody Of 1974.flac"
          },
          {
            songId: 3,
            songName: "04-Cuckoo Cocoon.flac"
          },
          {
            songId: 4,
            songName: "05-In The Cage.flac"
          },
          {
            songId: 5,
            songName: "06-The Grand Parade Of Lifeless Packaging.flac"
          },
          {
            songId: 6,
            songName: "07-Back In N.Y.C..flac"
          },
          {
            songId: 7,
            songName: "08-Hairless Heart.flac"
          },
          {
            songId: 8,
            songName: "09-Counting Out Time.flac"
          },
          {
            songId: 9,
            songName: "10-Carpet Crawlers.flac"
          },
          {
            songId: 10,
            songName: "11-The Chamber Of 32 Doors.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Genesis Archive 1967-1975 (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Lilywhite Lilith.flac"
          },
          {
            songId: 1,
            songName: "02-The Waiting Room.flac"
          },
          {
            songId: 2,
            songName: "03-Anyway.flac"
          },
          {
            songId: 3,
            songName: "04-Here Comes The Supernatural Anaesthetist.flac"
          },
          {
            songId: 4,
            songName: "05-The Lamia.flac"
          },
          {
            songId: 5,
            songName: "06-Silent Sorrow In Empty Boats.flac"
          },
          {
            songId: 6,
            songName: "07-The Colony Of Slippermen.flac"
          },
          {
            songId: 7,
            songName: "08-Ravine.flac"
          },
          {
            songId: 8,
            songName: "09-The Light Dies Down On Broadway.flac"
          },
          {
            songId: 9,
            songName: "10-Riding The Scree.flac"
          },
          {
            songId: 10,
            songName: "11-In The Rapids.flac"
          },
          {
            songId: 11,
            songName: "12-It.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "Genesis Archive 1967-1975 (Disc 3)",
        songs: [
          {
            songId: 0,
            songName: "01-Dancing with the Moonlit Knight.flac"
          },
          {
            songId: 1,
            songName: "02-Firth of Fifth.flac"
          },
          {
            songId: 2,
            songName: "03-More Fool Me.flac"
          },
          {
            songId: 3,
            songName: "04-Supper's Ready.flac"
          },
          {
            songId: 4,
            songName: "05-I Know What I Like.flac"
          },
          {
            songId: 5,
            songName: "06-Stagnation.flac"
          },
          {
            songId: 6,
            songName: "07-Twilight Alehouse.flac"
          },
          {
            songId: 7,
            songName: "08-Happy the Man.flac"
          },
          {
            songId: 8,
            songName: "09-Watcher of the Skies.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Genesis Archive 1967-1975 (Disc 4)",
        songs: [
          {
            songId: 0,
            songName: "01-In The Wilderness.flac"
          },
          {
            songId: 1,
            songName: "02-Shepherd.flac"
          },
          {
            songId: 2,
            songName: "03-Pacidy.flac"
          },
          {
            songId: 3,
            songName: "04-Let Us Now Make Love.flac"
          },
          {
            songId: 4,
            songName: "05-Going Out To Get You.flac"
          },
          {
            songId: 5,
            songName: "06-Dusk.flac"
          },
          {
            songId: 6,
            songName: "07-Build Me A Mountain.flac"
          },
          {
            songId: 7,
            songName: "08-Image Blown Out.flac"
          },
          {
            songId: 8,
            songName: "09-One Day.flac"
          },
          {
            songId: 9,
            songName: "10-Where The Sour Turns To Sweet.flac"
          },
          {
            songId: 10,
            songName: "11-In The Beginning.flac"
          },
          {
            songId: 11,
            songName: "12-The Magic Of Time.flac"
          },
          {
            songId: 12,
            songName: "13-Hey!.flac"
          },
          {
            songId: 13,
            songName: "14-Hidden In The World Of Dawn.flac"
          },
          {
            songId: 14,
            songName: "15-Sea Bee.flac"
          },
          {
            songId: 15,
            songName: "16-The Mystery Of The Flannan Isle Lighthouse.flac"
          },
          {
            songId: 16,
            songName: "17-Hair On The Arms And Legs.flac"
          },
          {
            songId: 17,
            songName: "18-She Is Beautiful.flac"
          },
          {
            songId: 18,
            songName: "19-Try A Little Sadness.flac"
          },
          {
            songId: 19,
            songName: "20-Patricia.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 8,
    bandName: "Emerson, Lake & Palmer",
    albums: [
      {
        albumId: 0,
        albumName: "From The Beginning (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Decline And Fall.flac"
          },
          {
            songId: 1,
            songName: "02-Fantasia Intermezzo Karelia Suite.flac"
          },
          {
            songId: 2,
            songName: "03-Lucky Man.flac"
          },
          {
            songId: 3,
            songName: "04-Tank.flac"
          },
          {
            songId: 4,
            songName: "05-Take A Pebble.flac"
          },
          {
            songId: 5,
            songName: "06-The Barbarian [live].flac"
          },
          {
            songId: 6,
            songName: "07-Knife Edge [live].flac"
          },
          {
            songId: 7,
            songName: "08-Rondo [live].flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "From The Beginning (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Tarkus.flac"
          },
          {
            songId: 1,
            songName: "02-Bitches Crystal.flac"
          },
          {
            songId: 2,
            songName: "03-Time And A Place.flac"
          },
          {
            songId: 3,
            songName: "04-Oh My Father.flac"
          },
          {
            songId: 4,
            songName: "05-Endless Enigma.flac"
          },
          {
            songId: 5,
            songName: "06-Fugue.flac"
          },
          {
            songId: 6,
            songName: "07-Endless Enigma.flac"
          },
          {
            songId: 7,
            songName: "08-From The Beginning.flac"
          },
          {
            songId: 8,
            songName: "09-Trilogy.flac"
          },
          {
            songId: 9,
            songName: "10-Abbadon's Bolero.flac"
          },
          {
            songId: 10,
            songName: "11-Hoedown.flac"
          },
          {
            songId: 11,
            songName: "12-Jerusalem.flac"
          },
          {
            songId: 12,
            songName: "13-Still You Turn Me On.flac"
          },
          {
            songId: 13,
            songName: "14-When The Apple Blossoms.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "From The Beginning (Disc 3)",
        songs: [
          {
            songId: 0,
            songName: "01-Karn Evil.flac"
          },
          {
            songId: 1,
            songName: "02-Jeremy BenderSheriff.flac"
          },
          {
            songId: 2,
            songName: "03-C'est La Vie.flac"
          },
          {
            songId: 3,
            songName: "04-I Believe In Father Christmas.flac"
          },
          {
            songId: 4,
            songName: "05-Enemy God Dances With The Black Spirits.flac"
          },
          {
            songId: 5,
            songName: "06-Piano Concerto No 1.flac"
          },
          {
            songId: 6,
            songName: "07-Pirates.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "From The Beginning (Disc 4)",
        songs: [
          {
            songId: 0,
            songName: "01-Aaron Copeland Interview 1977.flac"
          },
          {
            songId: 1,
            songName: "02-Fanfare For The Common Man.flac"
          },
          {
            songId: 2,
            songName: "03-Honky Tonk Train Blues.flac"
          },
          {
            songId: 3,
            songName: "04-Tiger In A Spotlight.flac"
          },
          {
            songId: 4,
            songName: "05-Watching Over You.flac"
          },
          {
            songId: 5,
            songName: "06-Introdurctory Fanfare Peter Gunn Theme.flac"
          },
          {
            songId: 6,
            songName: "07-Canario.flac"
          },
          {
            songId: 7,
            songName: "08-Desede La Vida.flac"
          },
          {
            songId: 8,
            songName: "09-Black Moon (Single Version).flac"
          },
          {
            songId: 9,
            songName: "10-Footprints In The Snow.flac"
          },
          {
            songId: 10,
            songName: "11-Romeo And Juliet (Live At The Albert Hall).flac"
          },
          {
            songId: 11,
            songName: "12-Man In The Long Black Coat.flac"
          },
          {
            songId: 12,
            songName: "13-Daddy.flac"
          },
          {
            songId: 13,
            songName: "14-Hang On To A Dream.flac"
          },
          {
            songId: 14,
            songName: "15-Touch And Go (Live IN Poland).flac"
          }
        ]
      },
      {
        albumId: 4,
        albumName: "From The Beginning (Disc 5)",
        songs: [
          {
            songId: 0,
            songName: "01-Hoedown.flac"
          },
          {
            songId: 1,
            songName: "02-Tarkus.flac"
          },
          {
            songId: 2,
            songName: "03-Take A Pebble.flac"
          },
          {
            songId: 3,
            songName: "04-Lucky Man.flac"
          },
          {
            songId: 4,
            songName: "05-Piano Improvisation.flac"
          },
          {
            songId: 5,
            songName: "06-Pictures At An Exhibition.flac"
          },
          {
            songId: 6,
            songName: "07-Rondo.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 9,
    bandName: "The Flower Kings",
    albums: [
      {
        albumId: 0,
        albumName: "Meet the Flower Kings (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-The Truth Will Set You Free.flac"
          },
          {
            songId: 1,
            songName: "02-Garden of Dreams, Pt. 1.flac"
          },
          {
            songId: 2,
            songName: "03-Garden of Dreams, Pt. 2.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Meet the Flower Kings (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Humanizzimo.flac"
          },
          {
            songId: 1,
            songName: "02-Circus Brimstone.flac"
          },
          {
            songId: 2,
            songName: "03-Silent Inferno.flac"
          },
          {
            songId: 3,
            songName: "04-Stardust We Are.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 10,
    bandName: "Fish",
    albums: [
      {
        albumId: 0,
        albumName: "Bouillabaisse The Best of Fish (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Just Good Friends.flac"
          },
          {
            songId: 1,
            songName: "02-Shot the Craw.flac"
          },
          {
            songId: 2,
            songName: "03-A Gentleman's Excuse Me.flac"
          },
          {
            songId: 3,
            songName: "04-Kayleigh.flac"
          },
          {
            songId: 4,
            songName: "05-Solo.flac"
          },
          {
            songId: 5,
            songName: "06-Incomplete.flac"
          },
          {
            songId: 6,
            songName: "07-The Company.flac"
          },
          {
            songId: 7,
            songName: "08-Fortunes of War.flac"
          },
          {
            songId: 8,
            songName: "09-Our Smile.flac"
          },
          {
            songId: 9,
            songName: "10-Lavender.flac"
          },
          {
            songId: 10,
            songName: "11-Lady Let It Lie.flac"
          },
          {
            songId: 11,
            songName: "12-Cliche.flac"
          },
          {
            songId: 12,
            songName: "13-Scattering Crows.flac"
          },
          {
            songId: 13,
            songName: "14-Tara.flac"
          },
          {
            songId: 14,
            songName: "15-Caledonia.flac"
          },
          {
            songId: 15,
            songName: "16-Raw Meat.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Bouillabaisse The Best of Fish (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Big Wedge.flac"
          },
          {
            songId: 1,
            songName: "02-Credo.flac"
          },
          {
            songId: 2,
            songName: "03-Incommunicado.flac"
          },
          {
            songId: 3,
            songName: "04-Goldfish and Clowns.flac"
          },
          {
            songId: 4,
            songName: "05-Long Cold Day.flac"
          },
          {
            songId: 5,
            songName: "06-Brother 52.flac"
          },
          {
            songId: 6,
            songName: "07-Clock Moves Sideways.flac"
          },
          {
            songId: 7,
            songName: "08-The Perception of Johnny Punter.flac"
          },
          {
            songId: 8,
            songName: "09-Moving Targets.flac"
          },
          {
            songId: 9,
            songName: "10-Plague of Ghosts- Old Haunts.flac"
          },
          {
            songId: 10,
            songName: "11-Plague of Ghosts- Digging Deep.flac"
          },
          {
            songId: 11,
            songName: "12-Plague of Ghosts- Chocolate Frogs.flac"
          },
          {
            songId: 12,
            songName: "13-Plague of Ghosts- Waving at Stars.flac"
          },
          {
            songId: 13,
            songName: "14-Plague of Ghosts- Raingod Dancing.flac"
          },
          {
            songId: 14,
            songName: "15-Plague of Ghosts- Wake Up Call (Make It Happen).flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "Field of Crows",
        songs: [
          {
            songId: 0,
            songName: "01-The Field.flac"
          },
          {
            songId: 1,
            songName: "02-Moving Targets.flac"
          },
          {
            songId: 2,
            songName: "03-The Rookie.flac"
          },
          {
            songId: 3,
            songName: "04-Zoo Class.flac"
          },
          {
            songId: 4,
            songName: "05-The Lost Plot.flac"
          },
          {
            songId: 5,
            songName: "06-Old Crow.flac"
          },
          {
            songId: 6,
            songName: "07-Numbers.flac"
          },
          {
            songId: 7,
            songName: "08-Exit Wound.flac"
          },
          {
            songId: 8,
            songName: "09-Innocent Party.flac"
          },
          {
            songId: 9,
            songName: "10-Shot the Craw.flac"
          },
          {
            songId: 10,
            songName: "11-Scattering Crows.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Leamington Spa Convention 2012 (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Script For A Jester's Tear.flac"
          },
          {
            songId: 1,
            songName: "02-Long Cold Day.flac"
          },
          {
            songId: 2,
            songName: "03-Innocent Party.flac"
          },
          {
            songId: 3,
            songName: "04-He Knows You Know.flac"
          },
          {
            songId: 4,
            songName: "05-Square Go.flac"
          },
          {
            songId: 5,
            songName: "06-Feast Of Consequences.flac"
          },
          {
            songId: 6,
            songName: "07-Other Side Of Me.flac"
          },
          {
            songId: 7,
            songName: "08-Dark Star.flac"
          },
          {
            songId: 8,
            songName: "09-Pilgrim's Address.flac"
          }
        ]
      },
      {
        albumId: 4,
        albumName: "Leamington Spa Convention 2012 (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Jigsaw.flac"
          },
          {
            songId: 1,
            songName: "02-Freaks.flac"
          },
          {
            songId: 2,
            songName: "03-Lucky.flac"
          },
          {
            songId: 3,
            songName: "04-Internal Exile.flac"
          },
          {
            songId: 4,
            songName: "05-Market Square Heroes.flac"
          },
          {
            songId: 5,
            songName: "06-Grendel.flac"
          },
          {
            songId: 6,
            songName: "07-The Company.flac"
          }
        ]
      },
      {
        albumId: 5,
        albumName: "Raingods with Zippos",
        songs: [
          {
            songId: 0,
            songName: "01-Tumbledown.flac"
          },
          {
            songId: 1,
            songName: "02-Mission Statement.flac"
          },
          {
            songId: 2,
            songName: "03-Incomplete.flac"
          },
          {
            songId: 3,
            songName: "04-Tilted Cross.flac"
          },
          {
            songId: 4,
            songName: "05-Faith Healer.flac"
          },
          {
            songId: 5,
            songName: "06-Rites of Passage-Plague of Ghosts.flac"
          },
          {
            songId: 6,
            songName: "07-Plague of Ghosts, Pt. 1- Old Haunts.flac"
          },
          {
            songId: 7,
            songName: "08-Plague of Ghosts, Pt. 2- Digging Deep.flac"
          },
          {
            songId: 8,
            songName: "09-Plague of Ghosts, Pt. 3- Chocolate Frogs.flac"
          },
          {
            songId: 9,
            songName: "10-Plague of Ghosts, Pt. 4- Waving at Stars.flac"
          },
          {
            songId: 10,
            songName: "11-Plague of Ghosts, Pt. 5- Raingod's Dancing.flac"
          },
          {
            songId: 11,
            songName:
              "12-Plague of Ghosts, Pt. 6- Wake-Up Call (Make It Happen).flac"
          }
        ]
      },
      {
        albumId: 6,
        albumName:
          "Return to Childhood 20th Anniversary Tour of Misplaced Childhood (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-Big Wedge.flac"
          },
          {
            songId: 1,
            songName: "02-Moving Targets.flac"
          },
          {
            songId: 2,
            songName: "03-Brother 52.flac"
          },
          {
            songId: 3,
            songName: "04-Goldfish and Clowns.flac"
          },
          {
            songId: 4,
            songName: "05-Raingods Dancing.flac"
          },
          {
            songId: 5,
            songName: "06-Wake Up Call (Make It Happen).flac"
          },
          {
            songId: 6,
            songName: "07-Innocent Party.flac"
          },
          {
            songId: 7,
            songName: "08-Long Cold Day.flac"
          },
          {
            songId: 8,
            songName: "09-Credo.flac"
          }
        ]
      },
      {
        albumId: 7,
        albumName:
          "Return to Childhood 20th Anniversary Tour of Misplaced Childhood (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Psuedo Silk Kimono.flac"
          },
          {
            songId: 1,
            songName: "02-Kayleigh.flac"
          },
          {
            songId: 2,
            songName: "03-Lavender.flac"
          },
          {
            songId: 3,
            songName:
              "04-Bitter Suite Brief EncounterLost WeekendBlue Angel.flac"
          },
          {
            songId: 4,
            songName: "05-Heart of Lothian Wide BoyCurtain Call.flac"
          },
          {
            songId: 5,
            songName: "06-Waterhole (Expresso Bongo).flac"
          },
          {
            songId: 6,
            songName: "07-Lords of the Backstage.flac"
          },
          {
            songId: 7,
            songName:
              "08-Blind Curve Vocal Under a BloodlightPassing StrangersMyloPerimeter.flac"
          },
          {
            songId: 8,
            songName: "09-Childhoods End.flac"
          },
          {
            songId: 9,
            songName: "10-White Feather.flac"
          },
          {
            songId: 10,
            songName: "11-Incommunicado.flac"
          },
          {
            songId: 11,
            songName: "12-Market Square Heroes.flac"
          },
          {
            songId: 12,
            songName: "13-Fugazi.flac"
          }
        ]
      },
      {
        albumId: 8,
        albumName: "Sunsets on Empire",
        songs: [
          {
            songId: 0,
            songName: "01-The Perception of Johnny Punter.flac"
          },
          {
            songId: 1,
            songName: "02-Goldfish and Clowns.flac"
          },
          {
            songId: 2,
            songName: "03-Change of Heart.flac"
          },
          {
            songId: 3,
            songName: "04-What Colour Is God.flac"
          },
          {
            songId: 4,
            songName: "05-Tara.flac"
          },
          {
            songId: 5,
            songName: "06-Jungle Ride.flac"
          },
          {
            songId: 6,
            songName: "07-Worm in a Bottle.flac"
          },
          {
            songId: 7,
            songName: "08-Brother 52.flac"
          },
          {
            songId: 8,
            songName: "09-Sunsets on Empire.flac"
          },
          {
            songId: 9,
            songName: "10-Say It With Flowers.flac"
          }
        ]
      },
      {
        albumId: 9,
        albumName: "Vigil in a Wilderness of Mirrors",
        songs: [
          {
            songId: 0,
            songName: "01-Vigil.flac"
          },
          {
            songId: 1,
            songName: "02-Big Wedge.flac"
          },
          {
            songId: 2,
            songName: "03-State of Mind.flac"
          },
          {
            songId: 3,
            songName: "04-The Company.flac"
          },
          {
            songId: 4,
            songName: "05-A Gentleman's Excuse Me.flac"
          },
          {
            songId: 5,
            songName: "06-The Voyeur (I Like to Watch).flac"
          },
          {
            songId: 6,
            songName: "07-Family Business.flac"
          },
          {
            songId: 7,
            songName: "08-View from a Hill.flac"
          },
          {
            songId: 8,
            songName: "09-Cliché.flac"
          },
          {
            songId: 9,
            songName: "10-Jack and Jill.flac"
          },
          {
            songId: 10,
            songName: "11-Internal Exile.flac"
          },
          {
            songId: 11,
            songName: "12-The Company (demo).flac"
          },
          {
            songId: 12,
            songName: "13-A Gentleman's Excuse Me (demo).flac"
          },
          {
            songId: 13,
            songName: "14-Whiplash.flac"
          }
        ]
      },
      {
        albumId: 10,
        albumName: "A Feast Of Consequences",
        songs: [
          {
            songId: 0,
            songName: "01-Perfume River.flac"
          },
          {
            songId: 1,
            songName: "02-All Loved Up.flac"
          },
          {
            songId: 2,
            songName: "03-Blind To The Beautiful.flac"
          },
          {
            songId: 3,
            songName: "04-A Feast Of Consequences.flac"
          },
          {
            songId: 4,
            songName: "05-High Wood.flac"
          },
          {
            songId: 5,
            songName: "06-Crucifix Corner.flac"
          },
          {
            songId: 6,
            songName: "07-The Gathering.flac"
          },
          {
            songId: 7,
            songName: "08-Thistle Alley.flac"
          },
          {
            songId: 8,
            songName: "09-The Leaving.flac"
          },
          {
            songId: 9,
            songName: "10-The Other Side Of Me.flac"
          },
          {
            songId: 10,
            songName: "11-The Great Unravelling.flac"
          }
        ]
      }
    ]
  },
  {
    bandId: 11,
    bandName: "Opeth",
    albums: [
      {
        albumId: 0,
        albumName: "Blackwater Park",
        songs: [
          {
            songId: 0,
            songName: "01-The Leper Affinity.flac"
          },
          {
            songId: 1,
            songName: "02-Bleak.flac"
          },
          {
            songId: 2,
            songName: "03-Harvest.flac"
          },
          {
            songId: 3,
            songName: "04-The Drapery Falls.flac"
          },
          {
            songId: 4,
            songName: "05-Dirge For November.flac"
          },
          {
            songId: 5,
            songName: "06-The Funeral Portrait.flac"
          },
          {
            songId: 6,
            songName: "07-Patterns In The Ivy.flac"
          },
          {
            songId: 7,
            songName: "08-Blackwater Park.flac"
          }
        ]
      },
      {
        albumId: 1,
        albumName: "Damnation",
        songs: [
          {
            songId: 0,
            songName: "01-Windowpane.flac"
          },
          {
            songId: 1,
            songName: "02-In My Time Of Need.flac"
          },
          {
            songId: 2,
            songName: "03-Death Whispered A Lullaby.flac"
          },
          {
            songId: 3,
            songName: "04-Closure.flac"
          },
          {
            songId: 4,
            songName: "05-Hope Leaves.flac"
          },
          {
            songId: 5,
            songName: "06-To Rid The Disease.flac"
          },
          {
            songId: 6,
            songName: "07-Ending Credits.flac"
          },
          {
            songId: 7,
            songName: "08-Weakness.flac"
          }
        ]
      },
      {
        albumId: 2,
        albumName: "Deliverance",
        songs: [
          {
            songId: 0,
            songName: "01-Wreath.flac"
          },
          {
            songId: 1,
            songName: "02-Deliverance.flac"
          },
          {
            songId: 2,
            songName: "03-A Fair Judgement.flac"
          },
          {
            songId: 3,
            songName: "04-For Absent Friends.flac"
          },
          {
            songId: 4,
            songName: "05-Master's Apprentices.flac"
          },
          {
            songId: 5,
            songName: "06-By The Pain I See In Others.flac"
          }
        ]
      },
      {
        albumId: 3,
        albumName: "Ghost Reveries",
        songs: [
          {
            songId: 0,
            songName: "01-Ghost Of Perdition.flac"
          },
          {
            songId: 1,
            songName: "02-The Baying Of The Hounds.flac"
          },
          {
            songId: 2,
            songName: "03-Beneath The Mire.flac"
          },
          {
            songId: 3,
            songName: "04-Atonement.flac"
          },
          {
            songId: 4,
            songName: "05-ReverieHarlequin Forest.flac"
          },
          {
            songId: 5,
            songName: "06-Hours Of Wealth.flac"
          },
          {
            songId: 6,
            songName: "07-The Grand Conjuration.flac"
          },
          {
            songId: 7,
            songName: "08-Isolation Years.flac"
          }
        ]
      },
      {
        albumId: 4,
        albumName: "Heritage",
        songs: [
          {
            songId: 0,
            songName: "01-Heritage.flac"
          },
          {
            songId: 1,
            songName: "02-The Devil's Orchard.flac"
          },
          {
            songId: 2,
            songName: "03-I Feel The Dark.flac"
          },
          {
            songId: 3,
            songName: "04-Slither.flac"
          },
          {
            songId: 4,
            songName: "05-Nepenthe.flac"
          },
          {
            songId: 5,
            songName: "06-Häxprocess.flac"
          },
          {
            songId: 6,
            songName: "07-Famine.flac"
          },
          {
            songId: 7,
            songName: "08-The Lines In My Hand.flac"
          },
          {
            songId: 8,
            songName: "09-Folklore.flac"
          },
          {
            songId: 9,
            songName: "10-Marrow Of The Earth.flac"
          }
        ]
      },
      {
        albumId: 5,
        albumName: "My Arms, Your Hearse [2000 Re-release]",
        songs: [
          {
            songId: 0,
            songName: "01-Prologue.flac"
          },
          {
            songId: 1,
            songName: "02-April Ethereal.flac"
          },
          {
            songId: 2,
            songName: "03-When.flac"
          },
          {
            songId: 3,
            songName: "04-Madrigal.flac"
          },
          {
            songId: 4,
            songName: "05-The Amen Corner.flac"
          },
          {
            songId: 5,
            songName: "06-Demon Of The Fall.flac"
          },
          {
            songId: 6,
            songName: "07-Credence.flac"
          },
          {
            songId: 7,
            songName: "08-Karma.flac"
          },
          {
            songId: 8,
            songName: "09-Epilogue.flac"
          },
          {
            songId: 9,
            songName: "10-Circle Of The Tyrant.flac"
          },
          {
            songId: 10,
            songName: "11-Remember Tomorrow.flac"
          }
        ]
      },
      {
        albumId: 6,
        albumName: "Pale Communion",
        songs: [
          {
            songId: 0,
            songName: "01-Eternal Rains Will Come.flac"
          },
          {
            songId: 1,
            songName: "02-Cusp Of Eternity.flac"
          },
          {
            songId: 2,
            songName: "03-Moon Above, Sun Below.flac"
          },
          {
            songId: 3,
            songName: "04-Elysian Woes.flac"
          },
          {
            songId: 4,
            songName: "05-Goblin.flac"
          },
          {
            songId: 5,
            songName: "06-River.flac"
          },
          {
            songId: 6,
            songName: "07-Voice Of Treason.flac"
          },
          {
            songId: 7,
            songName: "08-Faith In Others.flac"
          }
        ]
      },
      {
        albumId: 7,
        albumName: "The Roundhouse Tapes (Disc 1)",
        songs: [
          {
            songId: 0,
            songName: "01-When [Live].flac"
          },
          {
            songId: 1,
            songName: "02-Ghost Of Perdition [Live].flac"
          },
          {
            songId: 2,
            songName: "03-Under The Weeping Moon [Live].flac"
          },
          {
            songId: 3,
            songName: "04-Bleak [Live].flac"
          },
          {
            songId: 4,
            songName: "05-Face Of Melinda [Live].flac"
          },
          {
            songId: 5,
            songName: "06-The Night And The Silent Water [Live].flac"
          }
        ]
      },
      {
        albumId: 8,
        albumName: "The Roundhouse Tapes (Disc 2)",
        songs: [
          {
            songId: 0,
            songName: "01-Windowpane.flac"
          },
          {
            songId: 1,
            songName: "02-Blackwater Park.flac"
          },
          {
            songId: 2,
            songName: "03-Demon Of The Fall.flac"
          }
        ]
      },
      {
        albumId: 9,
        albumName: "Watershed",
        songs: [
          {
            songId: 0,
            songName: "01-Coil.flac"
          },
          {
            songId: 1,
            songName: "02-Heir Apparent.flac"
          },
          {
            songId: 2,
            songName: "03-The Lotus Eater.flac"
          },
          {
            songId: 3,
            songName: "04-Burden.flac"
          },
          {
            songId: 4,
            songName: "05-Porcelain Heart.flac"
          },
          {
            songId: 5,
            songName: "06-Hessian Peel.flac"
          },
          {
            songId: 6,
            songName: "07-Hex Omega.flac"
          }
        ]
      }
    ]
  }
];

export default App;
