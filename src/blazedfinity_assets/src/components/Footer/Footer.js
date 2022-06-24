import React from 'react';

const Footer = () => {
const get_path = window.location.pathname;
    return (
      <footer className="landing_page">
      <div className="ft_content">
            <div className="ban_container">

                  {get_path == '/' ?
                  <div className="ft_top">
                        <h1>Your professional front page on the blockchain</h1> 
                        <p>Upskill, Find Jobs & Get Rewards</p>
                        {/* <!-- <form>
                              <div className="ft_frm">
                                    <input type="email" placeholder="Your e-mail">
                                    <input type="submit" value="Join Waitlist" className="sub_btn">
                              </div>
                        </form> --> */}
                        <div className="d-flex justify-content-center">
                              <button type="button" className="fill_btn" data-bs-toggle="modal" data-bs-target="#myModal">Join Waitlist</button>
                        </div>
                  </div>
                  :''}


                  <div style={{display:"none"}}>
                        <img src="../images/banner_bg.png" alt="" style={{width : "50px",height:"50px"}}/>
                        <img src="../images/ft_bg.png" alt="" style={{width : "50px",height:"50px"}}/>
                        <img src="../images/MetaMask_Fox.svg.png" alt="" style={{width : "50px",height:"50px"}}/>

                  </div>
                        <div className="ft_bottom">
                              <div className="flex">
                                    <p>© 2022 Kelsa</p>
                                    {/* <a href="#">www.getKelsa.com</a> */}
                                    <a href="mailto:info@getkelsa.com">info@getkelsa.com</a>
                              </div>
                        </div>
                  </div>
            </div>
  </footer>
    )
}

export default Footer;
