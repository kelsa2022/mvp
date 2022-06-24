import React, {useState,useEffect} from "react";
import Select from 'react-select';
import { profiles } from "./../../../declarations/profiles";

const Profile = () => {
const [firstName, setFirstname] = useState("");
const [description, setDescription] = useState("");
const [about, setAbout] = useState("");
const [location, setLocation] = useState("");
const [getprincipal, setGetPrincipal] = useState(""); 

useEffect(() => {
      getOtherProfileData();
}, [])

const getOtherProfileData = async () => {

      const query = new URLSearchParams(window.location.search);
      const get_id = parseInt(query.get('id'));
      const user_details = await profiles.read(get_id);      
      if(user_details[0])
      {             
            setFirstname(user_details[0].firstname);
            setDescription(user_details[0].description);
            setAbout(user_details[0].about);
            setLocation(user_details[0].location);
            setGetPrincipal(user_details[0].principal);
      }                  
}



      return(
            <main>
            <section className="profile_page view_profile">
                  <div className="pro_container">
                        <div className="flex">
                              <div className="right">                                    
                                    <div className="details">                                          
                                          <div className="blk flex">
                                                <div className="img">
                                                      <img src="/images/detail_icon1.png" alt="" />
                                                </div>
                                                <div className="txt">
                                                      <h6>Expected Salary</h6>
                                                      <span>$100k/year    $50/hr</span>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="img">
                                                      <img src="/images/detail_icon2.png" alt="" />
                                                </div>
                                                <div className="txt">
                                                      <h6>Language</h6>
                                                      <span> English, Hindi, Marathi</span>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="img">
                                                      <img src="/images/detail_icon3.png" alt="" />
                                                </div>
                                                <div className="txt">
                                                      <h6>Education Level</h6>
                                                      <span>Bachelor’s Degree</span>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="social">
                                          <div className="flex">
                                                <div className="txt">
                                                      <h5>Social media</h5>
                                                </div>
                                                <div className="media">
                                                      <ul>
                                                            <li>
                                                                  <a  >
                                                                        <i className="fab fa-github"></i>
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a  >
                                                                        <i className="fas fa-envelope"></i>
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a  >
                                                                        <i className="fab fa-twitter"></i>
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a  >
                                                                        <i className="fab fa-linkedin-in"></i>
                                                                  </a>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="skills">
                                          <h4>Skills</h4>
                                          <ul>
                                                <li>solidity</li>
                                                <li>ethereum</li>
                                                <li>polygon</li>
                                                <li>angular</li>
                                                <li>reactjs</li>
                                          </ul>
                                    </div>
                                    <div className="intro">
                                          <h4>Intro Video</h4>                                          
                                          <div className="img">
                                                <img src="/images/video_img.png" alt="" />
                                          </div>
                                    </div>
                              </div>
                              <div className="left">
                                    <div className="top_profile flex">
                                          <div className="img">
                                                <span></span>
                                          </div>
                                          <div className="txts">
                                                <h3>{firstName ?firstName : 'First Name'}</h3>
                                                <div className="dlts flex">
                                                      <p>{description ? description : 'Description'}</p>
                                                      <span className="loc">{location ? location : 'Location'}</span>                                                      
                                                </div>                                                
                                          </div>
                                    </div>
                                    <div className="about">
                                          <h4>About</h4>
                                          <p>{about ? about : 'About ?'}</p>
                                    </div>
                                    <div className="project">
                                          <h4>Projects</h4>
                                          <div className="proj flex">
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>DeFund</h5>
                                                      <p>DeFi project that allows you to invest. Built with solidity with and frontend on next js</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>Beccho </h5>
                                                      <p>1000+ users with continuously increasing happy customers
                                                            built with React & NodeJS ...</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>Crypto on ETH </h5>
                                                      <p>Cryptocurrency built on Ethereum blockchain</p>                                                      
                                                </div>
                                          </div>                                          
                                    </div>
                                    <div className="git">
                                          <h4>Github Repositories</h4>
                                          <div className="proj flex">
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>ValleyToken- cryptocurrency</h5>
                                                      <p>Javascript</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>becho- backend-v1.0</h5>
                                                      <p>Javascript</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>DeFund</h5>
                                                      <p>Javascript</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>e-vote- decentralize- Ethereum</h5>
                                                      <p>Javascript</p>
                                                </div>
                                          </div>                                          
                                    </div>
                                    <div className="nft">
                                          <h4>NFT Certificates</h4>
                                          <div className="proj flex">
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>Junior Graduate</h5>
                                                      <p>LearnWeb3DAO</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>Build a Solana Pay Store </h5>
                                                      <p>Kelsa</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>Create a NFT  game</h5>
                                                      <p>Kelsa</p>
                                                </div>
                                                <div className="box">
                                                      <a   className="big_view">
                                                            <img src="/images/big_view.png" alt="" />
                                                      </a>
                                                      <h5>Build your own DAO</h5>
                                                      <p>Buildspace</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="edu">
                                          <h4>Education</h4>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>G</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>
                                                                  Bachelor of Technology
                                                                  <span>Government College of Engineering, Amravati</span>
                                                            </p>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="green">Verified</li>
                                                                  <li className="blue">2018 - 2022</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="exp">
                                          <h4>Experience</h4>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>A</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Blockchain Developer</p>
                                                            <span><b>AAO Blocktech</b> . Full-time . 3 mos</span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="green">Verified</li>
                                                                  <li className="blue">2022 - Present</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>C</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Software Developer</p>
                                                            <span><b>Curl</b> . Full-time . 1 yr 2 mos</span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="green">Verified</li>
                                                                  <li className="blue">2021 - 2022</li>    
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>L</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Content Writer</p>
                                                            <span><b> LearnCodeOnline.in</b></span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="blue">2020</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>B</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Founder</p>
                                                            <span><b>Bechho</b> . 7 mos</span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="blue">2020 - 2021</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>T</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Blockchain Developer</p>
                                                            <span><b>TruScholar</b> . 3 mos</span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="green">Verified</li>
                                                                  <li className="blue">2020 - 2021</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>L</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Blockchain Developer</p>
                                                            <span><b>LAMBA Vision</b> . Freelance . 1 mo</span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="blue">2020</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>F</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Web Developer</p>
                                                            <span><b>Freelance</b> . 3 mos</span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="blue">2020</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="blk">
                                                <div className="blk flex">
                                                      <div className="icon">
                                                            <span>A</span>
                                                      </div>
                                                      <div className="cont flex">
                                                            <div className="lft">
                                                                  <p>Web Developer</p>
                                                                  <span><b>zapplabs</b> . Internship . 2 mos </span>
                                                            </div>
                                                            <div className="rtl">
                                                                  <ul>
                                                                        <li className="blue">2019</li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                                <p className="par">I worked on website development using node.js, react.js, etc. Also, I worked on developing an e-commerce website and an online educational website.</p>
                                          </div>
                                          <div className="blk flex">
                                                <div className="icon">
                                                      <span>A</span>
                                                </div>
                                                <div className="cont flex">
                                                      <div className="lft">
                                                            <p>Campus Ambassador</p>
                                                            <span><b>IIM Bangalore</b> . Internship . 2 mos</span>
                                                      </div>
                                                      <div className="rtl">
                                                            <ul>
                                                                  <li className="blue">2019</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    
                              </div>
                        </div>
                  </div>
            </section>
      </main>
      );
}

export default Profile;