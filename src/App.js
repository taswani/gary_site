import React from "react";
import VideoBg from "reactjs-videobg";
import { Responsive } from "responsive-react";
import video from "./images/gary_video.mp4"
import logo from "./images/title_logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from './images/gary_landscape.jpg'
import profile from './images/gary_profile.jpg'
import about from './images/gary_about.jfif'
import badminton from './images/gary_baddy.jpg'
import speaking from './images/gary_speaking.jpg'
import mentor from './images/gary_radio.jpg'
import bball from './images/gary_bball.png'
import poster from './images/poster.png'
// import phone from './phone.png'
import email from './images/email.png'
import alternate from './images/alternate.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Alert,
  Button,
  ButtonGroup,
  Card,
  Image,
  Jumbotron
} from 'react-bootstrap';

export default function App() {
  return (
    <Router>
      <div>
        <Responsive displayIn={["Laptop"]}>
          <VideoBg poster={poster}>
            <VideoBg.Source src={video} type="video/mp4" />
          </VideoBg>
        </Responsive>
        <Card className='opaque'>
          <Card.Body>
            <Image className='image2' width={200} height={200} src={profile} roundedCircle />
            <Card.Title><Button variant="info" href="/home">Speak Like (A) G</Button></Card.Title>
            <ButtonGroup aria-label="Basic example">
              <Button variant="info" href="/home">Home</Button>
              <Button variant="info" href="/about">About</Button>
              <Button variant="info" href="/classes">Classes</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Card className='opaque2'>
          <Card.Body>
            <Card.Title>How to Contact Me:</Card.Title>
            <Card.Text>
              <Button variant="info" href="mailto:garyckwang@berkeley.edu"><img src={alternate} alt='alternate' /> garyckwang@berkeley.edu</Button>
            </Card.Text>
            <Card.Text>
              <img src={logo} width={50} height={50} alt='brand'/>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Router>
  );
}

function Home() {
  return (
          <div>
            <Jumbotron>
              <p>
                <h1>Hello there! I'm Gary Wang.</h1>
              </p>
              <p>

              </p>
              <p>
                Welcome to my website.
              </p>
              <p>
                I am a fighter and a trier who wishes to bring change, and accomplish a child-like dream of a world where people can better understand each other. Anyone can dream, but it is only those who dogmatically and fearlessly take the steps of execution that:
              <hr className="style-five"/>
              <ul className="contact-list">
                <li>1. Experience the lovely joy of constant failure</li>
                <li>2. Transform their dreams into real change</li>
              </ul>
              <hr className="style-five"/>
              In order to bring change, I will need the trust of others. I find that building trust is based on legitimacy, consistency, and vulnerability.
              </p>
            </Jumbotron>
            <Image className='background-image' height={100} src={background} />
            <Jumbotron>
              <h2>My Mission</h2>
              <hr className="style-five"/>
              <p>
              Intelligence gets us through the first 18 years of our life. Then, emotional intelligence becomes the name of the game. I encourage the development of “soft” skills and “soft” concepts--the intangibles--such as leadership, confidence, self-identity, inspiration, learning how to learn, consistency, being filial and more. Through a wide array of experiences and skills, I have many mediums to connect with prospective students. These include, and are not limited to, music, basketball, badminton, public speaking, finance etc. I encourage students to be themselves, while gently guiding them in the right directions such that they may reach their potential. Please <a href='mailto:garyckwang@berkeley.edu'>contact me</a> with your information and requests. I’m happy to set up a time for us to chat.
              </p>
              <p>Or if instead you want to learn more about what I can do for you, check out my <a href='/classes'>classes and offerings</a>!</p>
            </Jumbotron>
          </div>

        );
}

function About() {
  return (
          <div>
            <Jumbotron>
              <h1>My Story</h1>
              <hr className="style-five"/>
              <p>
                <Image className='image' width={300} height={300} src={about} rounded />
              </p>
              <p>
              Let me take you to the beginning of my journey. Raised in a very traditional household in California, I had a huge advantage. If I could survive my parents, I could survive anything. Some speak of “earning their stripes”. For me and other first-generation immigrants, it’s getting through traditional parents. They taught me consistency, discipline, and much more. But some of their guidance created a timid me. Enter my friends and cousin. I was fortunate as I wasn’t mocked by my peers. I was encouraged by them to do me, but more. They told me, and I quote</p>
              <blockquote> “You’re surrounded by greatness, outshined by all peers. But you’re really the dark horse, who brings up the rear.” </blockquote>
              <p>
              I had the IT factor, but I didn’t know it. Historically, my successes were silenced. My failures were chastised. I was extremely fortunate to have a support group around me who pushed me to become a more complete person. As a result, they helped me incorporate American ideals along with my traditional Asian ideals. I continued to be an avid trier, but I also began to develop creativity and confidence, which would help me in countless later endeavors. The above is how I view myself, but as I described earlier, legitimacy is one of the methods of building trust. This is also me. Hi, I’m Gary Wang, a Taiwanese American who played badminton for the US junior olympic team, who walked on at the University of California at Berkeley’s Division 1 basketball team, who graduated from the #1 Public University in the world -- UC Berkeley -- and who killed seven rounds of painstaking interviews to prove my worth to Google. Please keep in mind the following statement though! It’s not what’s great about you that defines you, it’s what defines you that makes you great. Regardless of the titles I hold, I’m always going to be Gary, the fighter and the trier who wishes to bring real change to this world.
              </p>
            </Jumbotron>
            <Image className='background-image' height={100} src={background}/>
            <Jumbotron>
              <h2>Why I do what I do and what I do</h2>
              <hr className="style-five"/>
              <p>
              When I was a boy in school, I learned that if I did the problems correctly, an A was sure to come. However, after graduating from college, I found that in the real world, we are not necessarily given what we are worth. Not all hard work will lead to success. Let’s say you’re tasked to do a simple analysis, and you end up creating an AI-enhanced algorithm that can do the whole process. It is not guaranteed your project will be well-received. In fact, it’s even possible your efforts are disregarded. What’s more important is being able to present your project in a way that is easy to understand. In short, I discovered the power of words. People say actions speak louder than words, but it is the power of our words that can potentially move and inspire others into action. Thus, with this view, when people ask me,
              <blockquote> “We love what you do Gary, but why you? Why do you have to be the one that tries to enact social change?” Well, as Spiderman says, “if you can do the things that I can, but you don’t, and then the bad things happen, you know those things happened because of you.” </blockquote></p>
              <p>
              With the leadership skills, public speaking skills, discipline, confidence, and self-identity I developed since I was a boy, it is my duty to help my students speak up and attain their worth.
              </p>
              <p>On a final note, since the hardest part about speaking is simply getting others to listen due to our pluralistic society, change cannot be enacted alone. Rather, we must get together and combine our abilities and embrace our diversity so that we can shape our future for the better. The power of the mass cannot be underestimated. By helping my students develop their soft skills, perhaps they can work a step further and pay it forward, to help OTHERS go out there and attain their worth too.</p>
            </Jumbotron>
          </div>

        );
}

function Classes() {
  return (
          <div>
            <Jumbotron>
              <h1>Classes and Offerings</h1>
              <br/>
              <h2>Badminton Coaching</h2>
              <hr className="style-five"/>
              <p>
                Badminton is the sport that helped me gain self confidence. Simultaneously, I learned more about discipline and responsibility. A big chunk of my self-development came during my time learning and improving in badminton.
              </p>
              <Image className='image' src={badminton} width={300} height={300} fluid/>
            </Jumbotron>
            <Image className='background-image' height={100} src={background}/>
            <Jumbotron>
              <h2>Basketball Coaching</h2>
              <hr className="style-five"/>
              <p>
              Badminton is an outstanding sport, but it is not one that is "spoken" in the states. Its popularity is limited here. As such, badminton's reach and potential to help gain traction is limited. I found a method of transferring badminton techniques into basketball and excelling immensely at this sport. Basketball is less focused on self-development. Rather, it focuses on the development of the whole. It's not just about developing the technical skills, explosiveness, or ball handling anymore. It's more so about how to put it all together. How can motivation and confidence be spread to others? How can one inspire? Put these all together in the crunch time, and that is the essence of developing the highly sought after clutch factor.
              </p>
              <Image className='image' src={bball} width={500} height={500} fluid/>
            </Jumbotron>
            <Image className='background-image' height={100} src={background}/>
            <Jumbotron>
              <h2>Public Speaking, Hosting, Speaking Classes</h2>
              <hr className="style-five"/>
              <p>
              The ability to properly convey our hard-earned hard skills is just as important as the hard skills themselves. If you're looking for a method of putting it all together, then this is the program for you.
              </p>
              <Image className='image' src={speaking} width={400} height={400} fluid/>
            </Jumbotron>
            <Image className='background-image' height={100} src={background}/>
            <Jumbotron>
              <h2>Mentorship</h2>
              <hr className="style-five"/>
              <p>The ask you're looking for isn't one of the three listed above? No problem. Tell me a little more about the situation and your asks. I'll set up a time for us to chat and meet :)</p>
              <Image className='image' src={mentor} width={400} height={400} fluid/>
              <br/>
              <br/>
              <br/>
              <Alert variant="info">
                <Alert.Heading>Hey, thanks for looking through my offerings</Alert.Heading>
                <p>
                  Is there one that caught your interest? <a href="https://forms.gle/jtj13T4Rts2qNYV46" target='_blank' rel="noopener noreferrer">Get started here!</a>
                </p>
                <hr />
                <p className="mb-0">
                  Do you have any other questions? Check out my contact information beneath to contact me personally!
                </p>
              </Alert>
            </Jumbotron>

          </div>

        );
}
