import React from 'react';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap'; // Importing necessary components from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './App.css'; // Importing your custom CSS file
import img1 from './Munich.jpg'; // Importing the image file 'Munich.jpg'
import img2 from './madrid.webp'; // Importing the image file 'madrid.webp'
import img3 from './rio.webp'; // Importing the image file 'rio.webp'

function App() {
  return (
    <React.Fragment> {/* Using a shorthand for <React.Fragment> */}
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark"> {/* Creating a Bootstrap Navbar */}
          <Container> {/* Container for Navbar content */}
            <Navbar.Brand href="#home">Your App Name</Navbar.Brand> {/* Navbar brand */}
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1>Welcome to Your App</h1> {/* A simple heading on the page */}

        {/* Cards */}
        {/* Creating Bootstrap Cards with images and content */}
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} /> {/* Displaying the imported image 'Munich.jpg' */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* Repeating similar Card components for 'madrid.webp' and 'rio.webp' images */}
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img2} /> {/* Displaying the imported image 'Munich.jpg' */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img3} /> {/* Displaying the imported image 'Munich.jpg' */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* End of Cards */}

        {/* Form Bootstrap */}
        <br/><br/>
        <label>
          Text input: <input name="myInput" />
        </label>
        <hr />
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" />
        </label>
        <hr />
        <p>
          Radio buttons:
          <br />
          <label className='rad'>
            <input type="radio" name="myRadio" value="option1" />
            Option 1
          </label>
          <br />
          <label className='rad'>
            <input type="radio" name="myRadio" value="option2" />
            Option 2
          </label>
          <br />
          <label className='rad'>
            <input type="radio" name="myRadio" value="option3" />
            Option 3
          </label>
        </p>

      </div>
      {/* Closing the shorthand <React.Fragment> */}
    </React.Fragment>
  );
}

export default App; // Exporting the App component as the default export
