import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import DogNav from './DogNav';
import DogDetail from './DogDetail';
import duke from './dogPictures/duke.jpg';
import perry from './dogPictures/perry.jpg';
import tubby from './dogPictures/tubby.jpg';
import whiskey from './dogPictures/whiskey.jpg';

function App({ dogs }) {
  const dogNames = dogs.map(dog => dog.name);
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/dogs">
          <DogNav names={dogNames} />
        </Route>
        <Route exact path="/dogs/:name">
          <DogDetail dogs={dogs} />
        </Route>
      </BrowserRouter>
    </div>
  );
};

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
