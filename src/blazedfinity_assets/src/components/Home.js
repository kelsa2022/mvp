import React from 'react';
import Slider from "react-slick";
const settings = {
      dots: false,
      infinite: true,
      speed: 500, 
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      margin: 10,
      autoplaySpeed: 1000,
      responsive: [
            {
                  breakpoint: 1201,
                  settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                  }
            },
            {
                  breakpoint: 1025,
                  settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                  }
            },
            {
                  breakpoint: 768,
                  settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                  }
            },
            {
                  breakpoint: 561,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                  }
            },
            {
                  breakpoint: 481,
                  settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                  }
            },
            {
                  breakpoint: 0,
                  settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                  }
            }
      ]
};






const Home = () => {      

      return (
            <main className="">
<div className="modal fade" id="myModal">
                  <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                              <div className="modal-header">
                                    <h4 className="modal-title">Join Waitlist</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              <div className="modal-body">
                                    <div className="box">
                                          <div>
                                                <div className="bans_frm">                                                      
                                                      <div id="mc_embed_signup">
                                                            <form action="https://getkelsa.us14.list-manage.com/subscribe/post?u=9935198b693daf4ce7b83fed9&amp;id=fb510ad178"
                                                                  method="post" id="mc-embedded-subscribe-form"
                                                                  name="mc-embedded-subscribe-form" className="validate"
                                                                  target="_blank" noValidate>
                                                                  <div id="mc_embed_signup_scroll">                                                                        
                                                                        <div className="mc-field-group">                                                                              
                                                                              <input type="text" defaultValue="" name="NAME" className="required name" id="mce-Name" placeholder="Name"/>

                                                                              <input type="email" defaultValue="" name="EMAIL"
                                                                                    className="required email" id="mce-EMAIL"
                                                                                    placeholder="E-mail"/>
                                                                        </div>
                                                                        <div id="mce-responses" className="clear foot">
                                                                              <div className="response" id="mce-error-response"
                                                                                    style={{dispaly : "none"}}></div>
                                                                              <div className="response" id="mce-success-response"
                                                                                    style={{dispaly : "none"}}></div>
                                                                        </div>                                                                        
                                                                        <div style={{position : "absolute",left:"-5000px"}}
                                                                              aria-hidden="true"><input type="text"
                                                                                    name="b_9935198b693daf4ce7b83fed9_fb510ad178"
                                                                                    tabIndex="-1" defaultValue=""/></div>
                                                                        <div className="optionalParent">
                                                                              <div className="clear foot">
                                                                                    <input type="submit" defaultValue="Join Waitlist"
                                                                                          name="subscribe"
                                                                                          id="mc-embedded-subscribe"
                                                                                          className="button"/>                                                                                    
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

           


            <div className="modal fade" id="loginwithemail">
                  <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                              <div className="modal-header">
                                    <h4 className="modal-title">Welcome back!</h4>
                                    <p>Great to see you again! Sign in to see what you have missed</p>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              <div className="modal-body">
                                   
                                   <div className="form-group">
                                         <label>Email Address</label>
                                         <input type="email" className="form-control" />
                                   </div>

                                   <div className="form-group">
                                          <label>Password</label>
                                         <input type="password" className="form-control" />
                                   </div>

                                   <div className="form-group">
                                          <button className="fill_btn mw-100 mt-0">Sign In</button>                                       
                                    </div>                                   
                                    <div className="text-center mt-5">
                                          <p>Don’t have an account yet? <a href="#" data-bs-toggle="modal" data-bs-target="#register" data-bs-dismiss="modal">Create new</a></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>


            <div className="modal fade" id="register">
                  <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                              <div className="modal-header">
                                    <h4 className="modal-title">Create a Kelsa Account</h4>                                    
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              <div className="modal-body">

                              <ul className="nav nav-pills ks-pills" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-Talent-tab" data-bs-toggle="pill" data-bs-target="#pills-Talent" type="button" role="tab" aria-controls="pills-Talent" aria-selected="true">
    <img src="/images/user.png"/> 
          Talent</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-Employer-tab" data-bs-toggle="pill" data-bs-target="#pills-Employer" type="button" role="tab" aria-controls="pills-Employer" aria-selected="false">
    <img src="/images/briefcase.png"/> 
          Employer</button>
  </li>
 
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-Talent" role="tabpanel" aria-labelledby="pills-Talent-tab">
                                    <div className="form-group">
                                         <label>Email Address</label>
                                         <input type="email" className="form-control" />
                                   </div>

                                   <div className="form-group">
                                          <label>Password</label>
                                         <input type="password" className="form-control" />
                                   </div>

                                   <div className="form-group">
                                          <button className="fill_btn mw-100 mt-0">Register</button>                                       
                                    </div>                                                                       

  </div>
  <div className="tab-pane fade" id="pills-Employer" role="tabpanel" aria-labelledby="pills-Employer-tab">
        
  <div className="form-group">
                                         <label>Email Address</label>
                                         <input type="email" className="form-control" />
                                   </div>

                                   <div className="form-group">
                                          <label>Password</label>
                                         <input type="password" className="form-control" />
                                   </div>

                                   <div className="form-group">
                                          <button className="fill_btn mw-100 mt-0">Register</button>                                       
                                    </div>                                                                       
        
        </div> 
</div>


                                   
                                
                              </div>
                        </div>
                  </div>
            </div>





                  <section className="banner">
                        <div className="ban_container">
                              <div className="ban_content">
                                    <h1>Join us & Explore
                                          <span>Thousands of Web3 Jobs</span>
                                    </h1>
                                    <p>Find Jobs, Projects and Communities</p>
                                    <div className="box">
                                          <form>
                                          <div className="flex">
                                                <div className="ban_frm">
                                                      <label>What</label>
                                                      <input type="text" placeholder="Job title, keywords, or company"
                                                            className="search"/>
                                                </div>
                                                <div className="ban_frm">
                                                      <label>Where</label>
                                                      <input type="text" placeholder="City or postcode"
                                                            className="location"/>
                                                </div>
                                                <div className="ban_frm">
                                                      <input type="submit" defaultValue="Find Jobs" className="find_btn" data-bs-toggle="modal" data-bs-target="#myModal"/>
                                                </div>
                                          </div>
                                    </form>
                              </div>
                              <ul>
                                    <li><span>Popular Searches : </span> Blockchain Developer, Legal Consultant,
                                          Designer</li>
                              </ul>
                              </div>
                              </div> 
                  </section>

                  <section className="brand">                        
                        <div className="container">
                              <Slider {...settings}>
                                    <div className="item">
                                          <img src="/images/brand_icon1.png" alt="icon1" />
                                    </div>                                    
                                    <div className="item">
                                          <img src="/images/brand_icon3.png" alt="icon3" />
                                    </div>
                                    <div className="item">
                                          <img src="/images/brand_icon4.png" alt="icon4" />
                                    </div>
                                    <div className="item">
                                          <img src="/images/brand_icon5.png" alt="icon5" />
                                    </div>
                                    <div className="item">
                                          <img src="/images/brand_icon6.png" alt="icon6" />
                                    </div>
                                    <div className="item">
                                          <img src="/images/brand_icon7.png" alt="icon7" />
                                    </div>
                              </Slider>
                        </div>                        
                  </section>
                  <section className="popular_jobs">
                  <div className="container">
                        <div className="head">
                              <h2>Popular Job Categories</h2>
                              <p>2020 jobs live - 293 added today.</p>
                              <a href="#" className="all_btn" data-bs-toggle="modal" data-bs-target="#myModal">Browse All</a>
                        </div>
                        <div className="body flex">
                              <div className="box">
                                    <div className="img">
                                          <img src="/images/pj_icon1.png" alt="icon"/>
                                    </div>
                                    <div className="txt">
                                          <h4>Marketing</h4>
                                          <p>86 open positions</p>
                                    </div>
                              </div>
                              <div className="box">
                                    <div className="img">
                                          <img src="/images/pj_icon2.png" alt="icon"/>
                                    </div>
                                    <div className="txt">
                                          <h4>Design</h4>
                                          <p>43 open positions</p>
                                    </div>
                              </div>
                              <div className="box">
                                    <div className="img">
                                          <img src="/images/pj_icon3.png" alt="icon"/>
                                    </div>
                                    <div className="txt">
                                          <h4>Development</h4>
                                          <p>12 open positions</p>
                                    </div>
                              </div>
                              <div className="box">
                                    <div className="img">
                                          <img src="/images/pj_icon4.png" alt="icon"/>
                                    </div>
                                    <div className="txt">
                                          <h4>Sales</h4>
                                          <p>72 open positions</p>
                                    </div>
                              </div>
                              <div className="box">
                                    <div className="img">
                                          <img src="/images/pj_icon5.png" alt="icon"/>
                                    </div>
                                    <div className="txt">
                                          <h4>Legal</h4>
                                          <p>25 open positions</p>
                                    </div>
                              </div>
                              <div className="box">
                                    <div className="img">
                                          <img src="/images/pj_icon6.png" alt="icon"/>
                                    </div>
                                    <div className="txt">
                                          <h4>Accounting</h4>
                                          <p>92 open positions</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
                  <section className="why_kelsa">
                  <div className="ban_container">
                        <div className="box">
                              <div className="head">
                                    <h1>Why Kelsa</h1>
                              </div>
                              <div className="body flex">
                                    <div className="blk">
                                          <h5>Align incentives for all users via revenue sharing</h5>
                                          <ul>
                                                <li>Incentivize users to grow the size and value of the network</li>
                                                <li>Highly engaged talent base and streamlined talent acquisition process for employers </li>
                                          </ul>
                                    </div>
                                    <div className="blk">
                                          <h5>Fastest growing industry</h5>
                                          <ul>
                                                <li>Demand for Web3 jobs increasing exponentially as world increases adoption of blockchain technology</li>
                                                <li>Despite tremendous growth, the talent acquisiton market is yet to mature leaving an attractive gap to fill</li>
                                          </ul>
                                    </div>
                                    <div className="blk">
                                          <h5>Purpose built platform</h5>
                                          <ul>
                                                <li>Users have control over their data and professional history vs being the product</li>
                                                <li>Single professional platform for Web3 talent to connect and find jobs. Education to expand the talent base</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
            <section className="jobs_list">
                  <div className="head">
                        <ul className="nav nav-tabs">
                              <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#jobs">
                                          <span>Learn</span>
                                    </a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#ownership">
                                          <span>Find Job</span>
                                    </a>
                              </li>
                              <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#network">
                                          <span>Connect</span>
                                    </a>
                              </li>
                        </ul>
                  </div>
                  <div className="body">
                        <div className="container">
                              <div className="tab-content">
                                    <div className="tab-pane active" id="jobs">
                                          <div className="flex my-5">
                                                <div className="img">
                                                      <img src="/images/job_img.png" alt=""/>
                                                </div>
                                                <div className="text">
                                                      <h2>Learn</h2>
                                                      <p>Accelerate your journey into web3. Whether you're just starting
                                                            out, a seasoned vet transitioning from web2, or thinking of
                                                            building something cool, you have a home with us.</p>
                                                      <a href="#" className="more_btn" data-bs-toggle="modal" data-bs-target="#myModal">Find out more</a>
                                                </div>
                                          </div>
                                    </div>
                                     <div className="tab-pane  fade" id="ownership">
                                          <div className="flex">
                                                <div className="img">
                                                      <img src="/images/owner_img.png" alt=""/>
                                                </div>
                                                <div className="text">
                                                      <h2>Apply for Web3 jobs</h2>
                                                      <ul>
                                                            <li>Earn tokens for completing your profile, verifying your
                                                                  credentials and applying to jobs</li>
                                                            <li>Own and control your professional data</li>
                                                      </ul>
                                                      <a href="#" className="more_btn" data-bs-toggle="modal" data-bs-target="#myModal">Find out more</a>
                                                </div>
                                          </div>
                                    </div> 
                                    <div className="tab-pane  fade" id="network">
                                          <div className="flex">
                                                <div className="img">
                                                      <img src="/images/network_img.png" alt=""/>
                                                </div>
                                                <div className="text">
                                                      <h2>Expand your network</h2>
                                                      <p>Connect with other Web3 professionals, discover communities and
                                                            engage in events </p>
                                                      <a href="#" className="more_btn" data-bs-toggle="modal" data-bs-target="#myModal">Find out more</a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
            <section className="technology">
                  <div className="ban_container">
                        <div className="techs">
                              <div className="head">
                                    <h2>Technology</h2>
                              </div>
                              <div className="body">
                                    <div className="tab-content1">
                                          <div className="tab-pane1" id="technology">
                                                <div className="tech">
                                                      <ul>
                                                            <li>
                                                                  <img src="/images/brand_icon2.png" alt="" />
                                                            </li>
                                                            <li>
                                                                  <img src="/images/web3_logo.jfif" alt="" />
                                                            </li>
                                                            <li>
                                                                  <img src="/images/ethereum_logo.jpg" alt="" />
                                                            </li>
                                                            <li>
                                                                  <img src="/images/dfinity_logo.png" alt="" />
                                                            </li>
                                                            <li>
                                                                  <img src="/images/Blaze-Logo.png" alt="" />
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
            <div style={{display:"none"}}>
                        <img src="/images/banner_bg.png" alt="" style={{width : "50px",height:"50px"}}/>
                        <img src="/images/ft_bg.png" alt="" style={{width : "50px",height:"50px"}}/>
                        <img src="/images/MetaMask_Fox.svg.png" alt="" style={{width : "50px",height:"50px"}}/>
                        <img src="/images/network_img.png" alt="" style={{width : "50px",height:"50px"}}/>

                  </div>
            <div className="up_button">
                  <a href="#">
                        <img src="/images/up_arrow.png" alt=""/>
                        <img src="/images/up_arrow_hover.png" alt=""/>
                  </a>
            </div>
            </main>
      );
}





export default Home;
