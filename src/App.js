import React from 'react';
import './App.css';
//import {Tile} from './Components/tile';
import {Page} from './Components/page';
import {Grid} from './Components/grid';
import {LinkButton} from './Components/linkButton';
import Fade from 'react-reveal/Fade';
import Zoom from  'react-reveal/Zoom';
import Data from './Data/data.json';
import image1 from './Images/FinanceApp_p1.jpg';
import image2 from './Images/Life.png';
import image3 from './Images/aqua.png';
import image4 from './Images/Hongkong.png';

const getData = (data) => {
  const colNum = data["columnNum"];
  const content = data["data"];
  return <Grid size={colNum} data={content}/>
}

function App() {

  const skillList = [{num: '1', name: 'C', level: 30}, {num: '2', name: 'C++', level: 60}, {num: '3', name: 'React.js', level: 60},
    {num: '4', name: 'Node.js', level: 10}, {num: '5', name: 'Python', level: 20}, {num: '6', name: 'MongoDB', level: 10}];
  return (
    <div className="App">
      <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet"/>
      </header>
      <Fade down>
        <div className="title-space">
          <div className="col-lg-8 col-md-12 title-text">
            <div className="container-fluid">
              <h1 className="welcome-title">Welcome <br/> to <br/> Yexuan's Space</h1>
            </div>
          </div>

        </div>
      </Fade>
      <Fade right>
        <div id="author">
          <span>By Yexuan Gao</span>
        </div>
      </Fade>
      
        <Page name="intro" title="About Me" type="" list={skillList}>Hi and welcome to my website.
          Here you can find some of my blogs, my photos and my UI designs.
          I’m a student at the University of Waterloo. I want this website to become a place
          for me to share, to inspire people and to improve upon myself.
        </Page>
      

      <Page name="skills" title="Skills" list={skillList} type="addList"></Page>
        <Zoom>
          <div className="tile-intro col-lg-10 col-md-12">
            <h2 id="tintro-name">WHAT TO READ</h2>
          </div>
        </Zoom>
        {getData(Data)}


      <div className="gallary-space">
        <div className="gallary">
          <Fade left>
            <div className="gallary-name">
              <h2 className="g-name col-md-12">WHAT TO SEE</h2>
            </div>
          </Fade>
          <div className="gallary-body">
            <div className="g-first g-row row">
              <Fade left>
                <div className="col-lg-6  col-md-12 img-sec">
                  <img src={image1} alt="image1" className="image" id="finApp1"/>
                </div>

                <div className="col-lg-1 col-md-0"></div>
              </Fade>
              <Fade right>
                <div className="col-lg-4 col-md-12">
                  <p id="img-note">"Banking app"</p>
                </div>
              </Fade>
            </div>
            <div className="g-sec g-row row">
              <Fade left>
                <div className="col-lg-6 img-sec">
                  <img src={image2} alt="image2" className="image" id="website1"/>
                </div>
                <div className="col-lg-1 col-md-0"></div>
              </Fade>
              <Fade right>
                <div className="col-lg-4">
                  <p id="img-note">"A Personal Website"</p>
                </div>
              </Fade>
            </div>
            <div className="g-third g-row row">
              <Fade left>
                <div className="col-lg-6 img-sec">
                  <img src={image3} alt="image3" className="image" id="website1"/>
                </div>
                <div className="col-lg-1 col-md-0"></div>
              </Fade>
              <Fade right>
                <div className="col-lg-4">
                  <p id="img-note">"Toronto Aquarium"</p>
                </div>
              </Fade>
            </div>
            <div className="g-forth g-row row">
              <Fade left>
                <div className="col-lg-6 img-sec">
                  <img src={image4} alt="image4" className="image" id="website1"/>
                </div>
                <div className="col-lg-1 col-md-0"></div>
              </Fade>
              <Fade right>
                <div className="col-lg-4">
                  <p id="img-note">"One part of Hongkong"</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>


      <div className="links-space">
        <div className="links">
          <LinkButton title="LinkedIn" link="https://www.linkedin.com/in/yexuan-gao-27aba0149"/>
          <LinkButton title="Github" link="https://github.com/Brucegyx"/>
          <LinkButton title="Instagram" link="https://www.instagram.com/bruc__eg/"/>
          <LinkButton title="Weibo" link="https://www.weibo.com/6240108082/profile"/>
        </div>

      </div>




    </div>
  );
}

export default App;
