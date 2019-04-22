import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header1 from "./../Header1/Header1";
import Footer1 from "./../Footer1/Footer1";
import routes from "./../../routes";
import "./Main.css";
import styled from 'styled-components'

const Main2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: violet 8px dashed;
  height: 40px;
  margin: 0;
  padding: 0;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 13%;
  border: 2px blue dotted;
`

const RedContainer1 = styled.div`
  height: 240px;
  width: 92%;
  background-color: #AE0000;
  margin: 0 10px;
  border-radius: 0.4rem;
  position: relative;
`
const PhotoOfTheDay = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.3rem;
`

const InsideRedContainer1 = styled.div`
  width: 100%;
  height: 89%;
  background-color: white;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem; 
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
`

const InsideRedContainer1Image = styled.img`
  padding-top: 0.6rem;
`

const InsideRedContainer1ATag = styled.a`
  color: green;
  padding: 0.5rem 0;
`

const RedContainer2 = styled.div`
  height: 180px;
  width: 92%;
  background-color: #AE0000;
  margin: 10px;
  border-radius: 0.4rem;
  position: relative;
`

const InsideRedContainer2 = styled.div`
  width: 100%;
  height: 87%;
  background-color: white;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem; 
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
`
const Above2ndImage = styled.div`
  height: 0.2rem;
`

const InsideRedContainer2Image = styled.img`
  padding: 0.4rem;
  border: 1px solid gray;
`

const InsideRedContainer2ATag = styled.a`
  color: green;
  padding: 0.3rem 0;
`

const VideoOfTheDay = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.23rem;
`

const PbSponsoredEvents = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.23rem;   
`

const RedContainer3 = styled.div`
  height: 400px;
  width: 92%;
  background-color: #AE0000;
  margin: 10px;
  margin-bottom: 0;
  margin-top: 0;
  border-radius: 0.4rem;
  position: relative;
`

const InsideRedContainer3 = styled.div`
  width: 100%;
  height: 94%;
  background-color: white;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem; 
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
`



export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header1 />
        <Main2>
          <div className="inside-main">
            <br />
            <div className="main-container">
              <LeftColumn>

                <RedContainer1>
                <PhotoOfTheDay>Photo of the day</PhotoOfTheDay>
                  <InsideRedContainer1>                
                    <InsideRedContainer1Image src='https://ep1.pinkbike.org/p5pb16996162/p5pb16996162.jpg' alt='' width={150} />
                    <InsideRedContainer1ATag>Comments (4)</InsideRedContainer1ATag>
                    <InsideRedContainer1ATag>Previous PODs</InsideRedContainer1ATag>
                  </InsideRedContainer1>
                </RedContainer1>

                <RedContainer2>
                  <VideoOfTheDay>Video of the day</VideoOfTheDay>
                  <InsideRedContainer2>
                    <Above2ndImage></Above2ndImage>
                    <InsideRedContainer2Image src='https://ev1.pinkbike.org/vt/2/tvt-500149-6.jpg' alt='' width={135} />
                    <InsideRedContainer2ATag>Comments (2)</InsideRedContainer2ATag>
                    <InsideRedContainer2ATag>Previous VODs</InsideRedContainer2ATag>
                  </InsideRedContainer2>
                </RedContainer2>

                <RedContainer3>
                <PbSponsoredEvents>PB Sponsored Events</PbSponsoredEvents>
                  <InsideRedContainer3>
                    <img src='https://es.pinkbike.org/246/sprt/i/pbsponsoredevents/2/p2pb15026273.jpg' width={160} alt='' />
                    <img src='https://ep1.pinkbike.org/p0pb14714748/p0pb14714748.jpg' width={150} alt='' />
                    <img src='https://ep1.pinkbike.org/p2pb15026254/p2pb15026254.jpg' width={160} alt='' />
                    <img src='https://ep1.pinkbike.org/p0pb16500024/p0pb16500024.jpg' width={160} alt='' />
                    <img src='https://ep1.pinkbike.org/p4pb15995073/p4pb15995073.jpg' width={160} alt='' />
                  </InsideRedContainer3>
                </RedContainer3>

              </LeftColumn>
              <div className='red-container-4'>
              <div className='top-news'>
                Top News ▼
              </div>
                <div className='inside-red-container-4'>
                
                  <div className='search-news'>
                    <input placeholder='Search News'></input>
                    <button>Search</button>
                  </div>

                  <div className="article-1">
                    <img width={220} src='https://ep1.pinkbike.org/p2pb17094365/p2pb17094365.jpg' alt='article 1 picture' />
                    <div className="article-1-text-section">
                      <b>FIRST LOOK Mike Kazimer Apr 17, 2019</b>
                      <a>First Look: Push Unveils HC97 RockShox Charger Damper Upgrade</a>
                      <p>Push's latest suspension solution is designed increase the level of adjustability and improve the big hit performance of RockShox's Charger dampers.</p>
                      <div>Read More | 146 Comments</div>
                    </div>
                  </div>

                  <div className="article-2">
                    <img width={220} src='https://ep1.pinkbike.org/p2pb17101444/p2pb17101444.jpg' alt='' />
                    <div className="article-2-text-section">
                      <b>PRESS RELEASES Fox Head Apr 17, 2019</b>
                      <a>Details Announced for 2019 US Open of Mountain Biking</a>
                      <p>The Fox US Open of Mountain Biking will be held September 12-15th, 2019 at Snow Summit in Big Bear Lake, CA and will host the final round of the EWS North American Series.</p>
                      <div>Read More | 34 Comments</div>
                    </div>
                  </div>

                  <div className="article-3">
                    <img width={220} src='https://ep1.pinkbike.org/p2pb17044682/p2pb17044682.jpg' alt='' />
                    <div className="article-3-text-section">
                      <b> USFLAGHERE SPONSORED Apr 8, 2019</b>
                      <a>Enter to Win 1 of 50 Continental Tires Prize Packs</a>
                      <p>Enter the Continental Tires Gripology contest to win a Continental prize pack.</p>
                      <div>Read More | 32 Comments</div>
                    </div>
                  </div>

                  <div className="article-4">
                    <img width={220} src='https://ep1.pinkbike.org/p2pb16035583/p2pb16035583.jpg' alt='' />
                    <div className="article-4-text-section">
                      <b>RACING James Smurthwaite Apr 17, 2019</b>
                      <a>Every Downhill World Cup Track of 2019</a>
                      <p>Take a look at the tracks and rumoured changes lined up for 2019.</p>
                      <div>Read More | 141 Comments</div>
                    </div>                 
                  </div>
                  
                  
                </div>
              </div>
              <div className='red-container-5'>
                <div className='inside-red-container-5'></div>
              </div>
            </div>
          </div>
        </Main2>
        <Footer1 />
      </div>
    );
  }
}

export default Main;
