import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header1 from "./../Header1/Header1";
import Footer1 from "./../Footer1/Footer1";
import routes from "./../../routes";
import "./Main.css";
import styled from "styled-components";

const Main2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: violet 8px dashed;
  height: 5rem;
  margin: 0;
  padding: 0;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 13%;
  // border: 2px blue dotted;
  padding-right: 10px;
`;

const RedContainer1 = styled.div`
  height: 30%;
  width: 92%;
  background-color: #ae0000;
  margin: 0 10px;
  border-radius: 0.4rem;
  position: relative;
`;
const PhotoOfTheDay = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.1rem;
`;

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
`;

const InsideRedContainer1Image = styled.img`
  padding-top: 0.6rem;
  width: 80%;
`;

const InsideRedContainer1ATag = styled.a`
  color: green;
  padding: 0.5rem 0;
`;

const RedContainer2 = styled.div`
  height: 30%;
  width: 92%;
  background-color: #ae0000;
  margin: 10px;
  border-radius: 0.4rem;
  position: relative;
`;

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
`;
const Above2ndImage = styled.div`
  height: 0.2rem;
`;

const InsideRedContainer2Image = styled.img`
  padding: 0.4rem;
  border: 1px solid gray;
  width: 75%;
`;

const InsideRedContainer2ATag = styled.a`
  color: green;
  padding: 0.3rem 0;
`;

const VideoOfTheDay = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.23rem;
`;

const PbSponsoredEvents = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.23rem;
  font-size: 0.85rem;
`;

const RedContainer3 = styled.div`
  height: 70%;
  width: 92%;
  background-color: #ae0000;
  margin: 10px;
  margin-bottom: 0;
  margin-top: 0;
  padding-right: 0;
  margin-right: 0;
  border-radius: 0.4rem;
  position: relative;
`;

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
`;

const InsideRedContainer3Image = styled.img`
  width: 80%;
`;

const ArticleImage1 = styled.img`
  width: 25%;
`;

const ArticleImage2 = styled.img`
  width: 25%;
`;

const ArticleImage3 = styled.img`
  width: 25%;
`;

const ArticleImage4 = styled.img`
  width: 25%;
`;

const PinkBikePoll = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.1rem;
`

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header1 />
        <Main2 className='main-two'>
          <div className="inside-main">
            <br />
            <div className="main-container">
              <LeftColumn className='left-column'>
                <RedContainer1 className="red-container-1">
                  <PhotoOfTheDay className="photo-of-the-day">
                    Photo of the day
                  </PhotoOfTheDay>
                  <InsideRedContainer1 className="inside-red-container-1">
                    <InsideRedContainer1Image
                      src="https://ep1.pinkbike.org/p5pb16996162/p5pb16996162.jpg"
                      alt=""
                    />
                    <InsideRedContainer1ATag className="inside-red-container-a potd">
                      Comments (4)
                    </InsideRedContainer1ATag>
                    <InsideRedContainer1ATag className="inside-red-container-a potd">
                      Previous PODs
                    </InsideRedContainer1ATag>
                  </InsideRedContainer1>
                </RedContainer1>

                <RedContainer2 className="red-container-2">
                  <VideoOfTheDay className="video-of-the-day">
                    Video of the day
                  </VideoOfTheDay>
                  <InsideRedContainer2 className="inside-red-container-2">
                    <Above2ndImage />
                    <InsideRedContainer2Image
                      src="https://ev1.pinkbike.org/vt/2/tvt-500149-6.jpg"
                      alt=""
                      width={135}
                    />
                    <InsideRedContainer2ATag className="inside-red-container-a votd">
                      Comments (2)
                    </InsideRedContainer2ATag>
                    <InsideRedContainer2ATag className="inside-red-container-a votd">
                      Previous VODs
                    </InsideRedContainer2ATag>
                  </InsideRedContainer2>
                </RedContainer2>

                <RedContainer3 className="red-container-3">
                  <PbSponsoredEvents className="pb-sponsored-events">
                    PB Sponsored Events
                  </PbSponsoredEvents>
                  <InsideRedContainer3 className='inside-red-container-3'>
                    <InsideRedContainer3Image
                      src="https://es.pinkbike.org/246/sprt/i/pbsponsoredevents/2/p2pb15026273.jpg"
                      width={160}
                      alt=""
                    />
                    <InsideRedContainer3Image
                      src="https://ep1.pinkbike.org/p0pb14714748/p0pb14714748.jpg"
                      width={150}
                      alt=""
                    />
                    <InsideRedContainer3Image
                      src="https://ep1.pinkbike.org/p2pb15026254/p2pb15026254.jpg"
                      width={160}
                      alt=""
                    />
                    <InsideRedContainer3Image
                      src="https://ep1.pinkbike.org/p0pb16500024/p0pb16500024.jpg"
                      width={160}
                      alt=""
                    />
                    <InsideRedContainer3Image
                      src="https://ep1.pinkbike.org/p4pb15995073/p4pb15995073.jpg"
                      width={160}
                      alt=""
                    />
                  </InsideRedContainer3>
                </RedContainer3>
              </LeftColumn>
              <div className="red-container-4">
                <div className="top-news">Top News ▼</div>
                <div className="inside-red-container-4">
                  <div className="search-news">
                    <input placeholder="Search News" />
                    <button>Search</button>
                  </div>

                  <div className="article-1">
                    <ArticleImage1
                      width={220}
                      src="https://ep1.pinkbike.org/p2pb17094365/p2pb17094365.jpg"
                      alt="article 1 picture"
                    />
                    <div className="article-1-text-section">
                      <b>FIRST LOOK Mike Kazimer Apr 17, 2019</b>
                      <a>
                        First Look: Push Unveils HC97 RockShox Charger Damper
                        Upgrade
                      </a>
                      <p>
                        Push's latest suspension solution is designed increase
                        the level of adjustability and improve the big hit
                        performance of RockShox's Charger dampers.
                      </p>
                      <div><span>Read More</span> | 146 Comments</div>
                    </div>
                  </div>

                  <div className="article-2">
                    <ArticleImage2
                      width={220}
                      src="https://ep1.pinkbike.org/p2pb17101444/p2pb17101444.jpg"
                      alt=""
                    />
                    <div className="article-2-text-section">
                      <b>PRESS RELEASES Fox Head Apr 17, 2019</b>
                      <a>
                        Details Announced for 2019 US Open of Mountain Biking
                      </a>
                      <p>
                        The Fox US Open of Mountain Biking will be held
                        September 12-15th, 2019 at Snow Summit in Big Bear Lake,
                        CA and will host the final round of the EWS North
                        American Series.
                      </p>
                      <div><span>Read More</span> | 34 Comments</div>
                    </div>
                  </div>

                  <div className="article-3">
                    <ArticleImage3
                      width={220}
                      src="https://ep1.pinkbike.org/p2pb17044682/p2pb17044682.jpg"
                      alt=""
                    />
                    <div className="article-3-text-section">
                      <b> <img src='https://cdn.webshopapp.com/shops/94414/files/54959460/the-united-states-flag-icon-free-download.jpg' alt='article-us-flag' className='article-us-flag'/> SPONSORED Apr 8, 2019</b>
                      <a>Enter to Win 1 of 50 Continental Tires Prize Packs</a>
                      <p>
                        Enter the Continental Tires Gripology contest to win a
                        Continental prize pack.
                      </p>
                      <div><span>Read More</span> | 32 Comments</div>
                    </div>
                  </div>

                  <div className="article-4">
                    <ArticleImage4
                      width={220}
                      src="https://ep1.pinkbike.org/p2pb16035583/p2pb16035583.jpg"
                      alt=""
                    />
                    <div className="article-4-text-section">
                      <b>RACING James Smurthwaite Apr 17, 2019</b>
                      <a>Every Downhill World Cup Track of 2019</a>
                      <p>
                        Take a look at the tracks and rumoured changes lined up
                        for 2019.
                      </p>
                      <div><span>Read More</span> | 141 Comments</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="red-container-5">
                <PinkBikePoll className="pinkbike-poll">Pinkbike Poll</PinkBikePoll>
                <div className="inside-red-container-5">
                  <div className="what-full-face">
                    What Full Face Helmet Brand do you wear?
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Troy Lee Designs</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Bell</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Six Six One</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Bluegrass</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Urge</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Fox</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Fly</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>POC</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Nema</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>O'Neal</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>6D</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Leatt</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Lazer</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>MET</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Kali</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Giro</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Specialized</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>iXS</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>One Industries</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>THE</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>7iDP</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Giant</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Trek</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Cannondale</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Intense</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Evil</span>
                  </div>
                  <div className="each-checkbox">
                    <input type="checkbox" />
                    <span>Other</span>
                  </div>

                  <br />
                  <div className='answer-button'>
                    <button>Answer</button>
                  </div>
                </div>
              </div>

              {/* <iframe className='airhorn' title='airhorn' width="500px" height="300px" id="player" allow="autoplay" src="https://www.youtube.com/embed/UaUa_0qPPgc?autoplay=1&cc_load_policy=1"></iframe> */}

            </div>
          </div>
        </Main2>
        <Footer1 />
      </div>
    );
  }
}

export default Main;
