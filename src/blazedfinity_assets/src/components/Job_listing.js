import React, { useEffect, useState } from 'react';
import { jobs } from "./../../../declarations/jobs";

const JobListing = () => {

      const [joblist, setJobs] = useState([]);

      useEffect(() => {
            getJobs();
      },[])

      const getJobs = async () => {
          const result = await jobs.findAll();
          setJobs(result);            
      }

      return( 
            <main>
                  <div className='search_frm'>
                        <div className='container'>
                              <form>
                                    <div className='flex'>
                                          <div className='s_frm'>
                                                <input type="text" placeholder="Job title, keywords, or company"/>
                                          </div>
                                          <div className='s_frm'>
                                                <input type="text" placeholder="City or postcode"/>
                                          </div>
                                          <div className='s_frm'>
                                                <select>
                                                      <option>All Categories</option>
                                                      <option>Categories 1</option>
                                                      <option>Categories 2</option>
                                                      <option>Categories 3</option>
                                                </select>
                                          </div>
                                          <div className='s_frm'>
                                                <input type="submit" className="find_btn" value="Find Jobs" />
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </div> 
                  <div className="job_list">
                        <div className="container">
                              <div className="flex">
                                    <div className="left">
                                          <div className="type">
                                                <h4>Job type</h4>
                                                <form>
                                                      <label for="t1">
                                                            <div className="switch">
                                                                  <input type="checkbox" id="t1" checked/>
                                                                  <span className="slider"></span>
                                                            </div>
                                                            <span>Full Time </span>
                                                      </label>
                                                      <label for="t2">
                                                            <div className="switch">
                                                                  <input type="checkbox" id="t2" />
                                                                  <span className="slider"></span>
                                                            </div>
                                                            <span>Part Time</span>
                                                      </label>
                                                      <label for="t3">
                                                            <div className="switch">
                                                                  <input type="checkbox" id="t3" />
                                                                  <span className="slider"></span>
                                                            </div>
                                                            <span>Internship</span>
                                                      </label>
                                                      <label for="t4">
                                                            <div className="switch">
                                                                  <input type="checkbox" id="t4" />
                                                                  <span className="slider"></span>
                                                            </div>
                                                            <span>Contract</span>
                                                      </label>
                                                </form>
                                          </div>
                                          <div className="date">
                                                <h4>Date Posted</h4>
                                                <form>
                                                      <div className="d_frm">
                                                            <input type="radio" id="test1" name="radio-group" />
                                                            <label for="test1">Last 24 Hours</label>
                                                      </div>
                                                      <div className="d_frm">
                                                            <input type="radio" id="test2" name="radio-group" />
                                                            <label for="test2">Last 7 Days</label>
                                                      </div>
                                                      <div className="d_frm">
                                                            <input type="radio" id="test3" name="radio-group"  />
                                                            <label for="test3">Last 30 Days</label>
                                                      </div>
                                                      <div className="d_frm">
                                                            <input type="radio" id="test4" name="radio-group"  />
                                                            <label for="test4">All</label>
                                                      </div>
                                                </form>
                                          </div>
                                          <div className="exp">
                                                <h4>Experience Level</h4>
                                                <div className="blk">
                                                      <img src="images/range_slider.png" />
                                                      <span>2 yrs - 10 yrs</span>
                                                </div>
                                          </div>
                                          <div className="skills">
                                                <h4>Skills</h4>
                                                <ul>
                                                      <li>app</li>
                                                      <li>tokenomics</li>
                                                      <li>solidity</li>
                                                      <li>analytics</li>
                                                      <li>NFT</li>
                                                      <li>IPFS</li>
                                                </ul>
                                          </div>
                                          <div className="salary">
                                                <h4>Salary</h4>
                                                <div className="blk">
                                                      <img src="images/range_slider.png" />
                                                      <span>$60k - $120k</span>
                                                </div>
                                          </div>
                                          <div className="industry">
                                                <h4>Industry</h4>
                                                <form>
                                                      <div className="i_frm">
                                                            <select>
                                                                  <option>Choose an industry</option>
                                                                  <option>Choose an industry</option>
                                                                  <option>Choose an industry</option>
                                                            </select>
                                                      </div>
                                                </form>
                                          </div>
                                          <div className="c_size">
                                                <h4>Company Size</h4>
                                                <form>
                                                      <div className="i_frm">
                                                            <select>
                                                                  <option>1-100 Members</option>
                                                                  <option>100-200 Members</option>
                                                                  <option>200-300 Members</option>
                                                            </select>
                                                      </div>
                                                </form>
                                          </div>
                                          <div className="c_size">
                                                <h4>Company Stage</h4>
                                                <form>
                                                      <div className="i_frm">
                                                            <select>
                                                                  <option>Series A</option>
                                                                  <option>Series B</option>
                                                                  <option>Series C</option>
                                                            </select>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                                    <div className="right">
                                          <div className="top">
                                                <div className="flex">
                                                      <div className="ltr">                                                            
                                                      </div>
                                                      <div className="rtr">
                                                            <form>
                                                                  <div className="flex">
                                                                        <div className="r_frm">
                                                                              <select>
                                                                                    <option>New Jobs</option>
                                                                                    <option>New Jobs</option>
                                                                                    <option>New Jobs</option>
                                                                              </select>
                                                                        </div>
                                                                        <div className="r_frm">
                                                                              <select>
                                                                                    <option>Show 10</option>
                                                                                    <option>Show 15</option>
                                                                                    <option>Show 20</option>
                                                                              </select>
                                                                        </div>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="mid">
                                          
                                                {
                                                     joblist.length > 0 ? 
                                                      joblist.map((item, key) => {                                                      
                                                            return(
                                                                  <div className="box flex" key={key}>
                                                                  <div className="icon">
                                                                        <span className="voilet"></span>
                                                                  </div>
                              
                                                                  <div className="txt">
                                                                        <h4>{item.title}</h4>
                                                                        <span className="ribbon">
                                                                              <img src="images/j_ribbon.png" />
                                                                        </span>
                                                                        <div className="detl">
                                                                              <ul>
                                                                                    <li>{item.companyType}</li>
                                                                                    <li>{item.location}</li>
                                                                              </ul>
                                                                              <ul>      
                                                                                    <li>11 hours ago</li>
                                                                                    <li>{item.annualSalary}</li>
                                                                              </ul>
                                                                        </div>
                                                                        <div className="btns">
                                                                              <ul>                                                                                    
                                                                                    <li>
                                                                                          <span className="apply">Apply for 1 KelsaCoins</span>
                                                                                    </li>
                                                                              </ul>
                                                                        </div>
                                                                        <p>{item.description}</p>
                                                                        <div className="apply_btn">
                                                                              <button className="job_apply_btn" type="submit">Apply</button>
                                                                        </div>
                                                                  </div>
                                                                   </div>
                                                            )                                                            
                                                      })
                                                      :
                                                      <div className='no_records'>No Jobs</div>
                                                }                                                
                                          </div>
                                          {joblist.length >= 10 ?
                                          <div className="bot">
                                                <ul className="pagination">
                                                      <li className="page-item">
                                                            <a className="page-link"></a>
                                                      </li>
                                                      <li className="page-item active">
                                                            <a className="page-link">1</a>
                                                      </li>
                                                      <li className="page-item">
                                                            <a className="page-link">2</a>
                                                      </li>
                                                      <li className="page-item">
                                                            <a className="page-link">3</a>
                                                      </li>
                                                      <li className="page-item">
                                                            <a className="page-link"></a>
                                                      </li>
                                                </ul>
                                          </div>
                                          :''}
                                    </div>
                              </div>
                        </div>
                  </div>
            </main>
      );
}

export default JobListing;