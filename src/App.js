import './App.css';
import Instagram from './components/files/instagram.png'
import {Cloudinary} from "@cloudinary/url-gen";
import React from 'react'
import {AdvancedImage, responsive, placeholder} from '@cloudinary/react';
import 'semantic-ui-css/semantic.min.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



function App() {
  const SERVICE_ID = "service_h6nh12n";
  const TEMPLATE_ID = "template_kkz8kxq";
  const USER_ID = "LvLVsY1hGjlNreMK8";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dounno0dp'
    }
  }); 
  const battleshipImg = cld.image('My-stuff/battleship_kpx1e2.png');
  const shopping =cld.image('My-stuff/shopping-cart_xgv7v8.png');
  const tictac = cld.image('My-stuff/tic-tac-toe_zd3li7.png');
  const weather = cld.image('My-stuff/weather_p47hne.png');
  const roshambo = cld.image('My-stuff/roshambo_skavtl.png');
  const photoHunt = cld.image('My-stuff/photo-hunt_ebekya.png');
  const match = cld.image('My-stuff/match_md1ltg.png');
  const etch = cld.image('My-stuff/etch-a-sketch_txmxu4.png');
  const belaying = cld.image('My-stuff/belaying-pin_shb4sk.png');
  const library = cld.image('My-stuff/library_hzqo7o.png')
  

  return (
    <div className="App">
      <header className="App-header">
        <div className='header-cont'>
          <a href='#welcome-id' className='header-link'>Home</a>
          <a href='#about-id' className='header-link'>About</a>
          <a href='#projects-id' className='header-link'>Projects</a>
          <a href='#contact-id' className='header-link'>Contact</a>
          
        </div>
      </header>
      <div className='portfolio-body'>
        <div className='section' id='welcome-id'>
          <h1 className='intro'>Hello, my name is Tyler!</h1>
          <h2 className='statement'>I am an aspiring Web Developer.</h2>
        </div>
        <div className='section' id='about-id'>
          <h2 className='section-title'>Who is Tyler?</h2>
          <div className='about-cont'>
            <p className='bio'>A dynamic and creative professional with a background in entertainment and film production, 
            and the proven work ethic to guide and support web development, project planning, UX design, and more while meeting strict deadlines.
             Known for delivering excellent service in fast-paced environments, with the skillset to analyze complex information, 
             manage multiple projects, streamline workflows, and lead diverse individuals. Out-of-the-box thinker who is comfortable working in teams 
             or independently to ensure solutions consistently meet or exceed business goals. Currently completing The Odin Project bootcamp and seeking a transition to the web design field.</p>
          
            <div className='about-quals'>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='Javascript' className='qual-logo'/> 
                <p className='qual-cap'>Javascript</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt='HTML 5' className='qual-logo'/>
                <p className='qual-cap'>HTML</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt='CSS' className='qual-logo'/>
                <p className='qual-cap'>CSS</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React' className='qual-logo'/>
                <p className='qual-cap'>React</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt='Jest' className='qual-logo'/>
                <p className='qual-cap'>Jest</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt='Firebase' className='qual-logo'/>
                <p className='qual-cap'>Firebase</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='GitHub' className='qual-logo'/>
                <p className='qual-cap'>GitHub</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt='Webpack' className='qual-logo'/>
                <p className='qual-cap'>Webpack</p>
              </div>
              <div className='quals-cont'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt='npm' className='qual-logo'/>
                <p className='qual-cap'>npm</p>
              </div>
            </div>
          </div>
        </div>
        <div className='section' id='projects-id'>
          <h2 className='section-title'>These are my Projects</h2>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Photo Hunt</h3>
              <p className='project-desc'>Search the photos to see if you can find the three hidden characters per level and land you name at the top of the leaderboard. Made using HTML, CSS, Javascript, React, and Firebase on the backend. </p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/photo-find' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/photo-find/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={photoHunt} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Weather App</h3>
              <p className='project-desc'>Select your desired location to see the weather forecast for the next week. Made using HTML, CSS, Javascript, and React.</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/weather_app' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/weather_app/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={weather} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Library</h3>
              <p className='project-desc'>Keep a list of booke you have read or would like to read with this digital library. Made using HTML, CSS, Javascript, React, and Firebase for the backend.</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/my-library' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/my-library/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={library} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Battleship</h3>
              <p className='project-desc'>Take to the seas and see if you can sinnk your opponents ships before thye sink yours with this battle ship game. Made using HTML, CSS, and Javascript</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/battleship' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/battleship/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={battleshipImg} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Retail Shop</h3>
              <p className='project-desc'> A fake band website and merch store. Well, actually, my one man band's website. Don't worry I won't subject you to my music. Made using HTML, CSS, Javascript, and React</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/shopping-cart' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/shopping-cart/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={shopping} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Matching Game</h3>
              <p className='project-desc'>Try to remember which college football teams you have already selected by only clicking each one once. Made using HTML, CSS, Javascript, and React</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/matching-game' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/matching-game/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={match} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Rock-Paper-Scissors</h3>
              <p className='project-desc'>Beat the locals in rock-paper-scissors to gain their respect and be able to surf their break. Made using HTML, CSS, and Javascript</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/roshambo' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/roshambo/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={roshambo} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Restaurant Page</h3>
              <p className='project-desc'> A restaurant webpage for the Belaying Pin, the fictious restaurant from one of my favorite movies Inherent Vice. Made using HTML, CSS, and Javascript</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/restaurant' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/restaurant/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={belaying} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Etch-a-sketch</h3>
              <p className='project-desc'>Draw silly faces, leave notes for friends, shamelessly ask hiring managers for a job. Be as creative as you please with this digial etch-a-sketch. Just make sure not to shake your computer when you are through. Made using HTML, CSS, and Javascript</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel/etch-a-sketch' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io/etch-a-sketch/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={etch} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
          <div className='project-cont'>
            <div className='project-info'>
              <h3 className='project-title'>Tic-tac-toe</h3>
              <p className='project-desc'>Challenge your friends or try to beat the computer in this tic-tac-toe game. Made using HTML, CSS, and Javascript</p>
              <div className='project-links'>
                <a href='https://github.com/TylerWSchnabel//tic-tac-toe' target="_blank" rel="noreferrer"><button className='project-btn'>Code</button></a>
                <a href='https://tylerwschnabel.github.io//tic-tac-toe/' target="_blank" rel="noreferrer"><button className="project-btn">Live</button></a>
              </div>
            </div>
            <AdvancedImage className='project-img' style={{maxWidth: '100%'}} cldImg={tictac} plugins={[responsive(), placeholder()]} ></AdvancedImage>
          </div>
        </div>
        <div className='section' id='contact-id'>
          <div className='contact-cont'>
            <h2 className='section-title'>Get in touch!</h2>
            <form className='contact-form' onSubmit={handleOnSubmit}>
              <label className='form-label'> Name: </label>
                <input type='text' 
                  label='Name'
                  className='form-input' 
                  placeholder="Tyler's New Friend" 
                  name='from_name'
                  required
                />
              
              <label className='form-label' >Email: </label>
                <input type='Email' 
                  label='email'
                  className='form-input' 
                  placeholder="tylersfriend@internet.com" 
                  name='from_email'
                  required
                />
              
              <label type="text" className='form-label' id='message-label'> Message: </label>
                <textarea className="form-input" 
                  label='Message'
                  id='message-box' 
                  placeholder="Tell me a secret!" 
                  name='message'
                  required
                />
              
              <button type='submit' className="form-btn">Send</button>
            </form>

          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-cont'>
          <a href='https://github.com/TylerWSchnabel' target="_blank" rel="noreferrer"><img className='footer-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='GitHub'/></a>
          <a href='https://www.linkedin.com/in/tyler-w-schnabel/' target="_blank" rel="noreferrer"><img className='footer-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='LinkedIn'/> </a>
          <a href='https://www.instagram.com/tylerwschnabel/' target="_blank" rel="noreferrer"><img className='footer-icon' src={Instagram} alt='Instagram'/></a>

        </div>
      </footer>
    </div>
  );
}

export default App;
