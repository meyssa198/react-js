import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Nav, Card, CardColumns, Navbar, Carousel, CardDeck, Form, Button, FormControl } from 'react-bootstrap';


function App() {
  return (
    <div className="App"  style={{
      backgroundImage: `url("/images/sky.png")`,backgroundRepeat: 'repeat', width:'100%', 
   }}> 
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">You & Me</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#carsousel">Food</Nav.Link>
      <Nav.Link href="#cards">Positive Vibes</Nav.Link>
      <Nav.Link href="#form">Let's be friends</Nav.Link>

    </Nav>
    <Nav>
      <Nav.Link href="https://www.facebook.com/profile.php?id=100006724366927">Facebook</Nav.Link>
      <Nav.Link eventKey={2} href="https://www.instagram.com/meyssa_slama2/">
        Instagram
      </Nav.Link>
      <Nav.Link eventKey={3} href="https://www.linkedin.com/in/meyssa-slama-60b682134/">
        Linkedin
      </Nav.Link>
      <Nav.Link eventKey={4} href="https://www.pinterest.com/meyssaslama/">
        Pinterest
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<CardDeck id="aboutme">
  <Card>
    <Card.Img variant="top" src="/images/me.png" />
    <Card.Body>
      <Card.Title>About me </Card.Title>
      <Card.Text>
       Hi ! I am Meyssa Slama 22years old girl who lives in Nabeul, right now I am studing at Go My Code and I am realy satisfied with the things I am doing, little facts about me : I love cat I mean I ADORE cats because they're just cute like me, I can't stop loving them because I see myself on them God just look at my gorgeous smile!!, in the end I wanna thank you for reading this and thank me for loving me and writing this.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>More ...</Card.Title>
      <Card.Text>
        Since it's a free space I'll talk about me again, this time I'll talke about the one that I love the most, my all, my everything in this life, I don't think that I can live without him, he's handsome, lovely, sweet, and spicy !! and that's what I love about him the most .. I think it's time to tell you about his name I call him love and they call him Food, sorry for wasting you're time reading this again :) but it was your choice to read it :P
      </Card.Text>
      <a href="https://www.pinterest.com/meyssaslama/food/">here some pictures for him </a>
    </Card.Body>

  </Card>
</CardDeck>
<h1 className="title">
  Here some picture about him again !! </h1>
<Carousel fade id="carsousel">
  <Carousel.Item className="images">
    <img
      className="d-block w-100"
      src="/images/yummy.png"
      alt="First slide"
    />
    <Carousel.Caption >
      <h3>Rigatoni Fiorentina</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="images">
    <img
      className="d-block w-100"
      src="/images/healthypotatoes.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>crispy and cheesy potato</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="images">
    <img
      className="d-block w-100"
      src="/images/pancakes.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>fluffy japanese pancakes</h3>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1 className="title">
 As a reminder </h1>
<CardColumns id="cards">
  <Card>
    <Card.Img variant="top" src="/images/rain.png" />
    <Card.Body>
      <Card.Title>Listten for his voice.</Card.Title>
      <Card.Text>
        Let God's voice drown out your negative thought. Allow him to plant seeds that nourish and strengthen you.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
       The world only exists in your eyes. You can make it as big or as small as want.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          F Scott Fitzgeraid
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src="/images/hands.png" />
    <Card.Body>
      <Card.Title>OKAY ?</Card.Title>
      <Card.Text>
      Work to make yourself proud {' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white" className="text-center p-3" >
    <blockquote  className="blockquote mb-0 card-body">
      <p >
        Everything that is ment for you will find you. from people. to moments. to things. if it is for you, 
        it will come. and when it does, be there. enjoy. live. and love.
      </p>
      <footer className="blockquote-footer" >
        <small className="text-muted">
          r.m. drake <cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </Card>
 
  <Card>
    <Card.Img src="/images/girl.png" />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      If it is right, it happen - The main thing is not to hurry. Nothing good gets away.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        Jhon Steinbeck 
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Enjoy this chapiter</Card.Title>
      <Card.Text>
       even with the characters you'd love to replace and the challenges you'd do anything to erease.
       Your story is transforming each day into something incredible.
      </Card.Text>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
<h1 className="title">
 Here some space to tell me more about you </h1>
 <Form id="form">
  
    <Form.Group >
      <Form.Label htmlFor="disabledTextInput" className="label">What people call you ?</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="say something.."/>
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="disabledTextInput" className="label">What do you do in your life ?</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="say something.." />
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="disabledTextInput" className="label">Tell me more about you !!</Form.Label>
    <FormControl as="textarea" aria-label="With textarea" placeholder="say something.." />

    </Form.Group>
    <Form.Group>
    </Form.Group>
    <Form.Group>

  
    </Form.Group>
    <Button variant="dark" type="button">Go Go and send it </Button>


</Form>
</div>
  );
}

export default App;
