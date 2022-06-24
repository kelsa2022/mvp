import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { jobs } from "./../../../declarations/jobs";
import { useNavigate } from "react-router-dom";
const PostJob = () => {

const { register,handleSubmit,reset, formState: { errors } } = useForm();
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [salaryRange, setSalaryRange] = useState("");
const [jobLocation, setJobLocation] = useState("");
const [companyType, setCompanyType] = useState("");
const navigate = useNavigate();  
const onSubmit = async(data,e) => {        
      const myprincipal = localStorage.getItem('myprincipal');
      const job = {
            principal : myprincipal,
            title: data.title,      
            description: data.description,      
            status: '',      
            location: data.location,
            annualSalary: data.salary_range,
            companyType:data.company_type,
            feeStakeTxn: '', 
      }
      const create_job = await jobs.create(job);      
      if(create_job === true)
      {            
            e.target.reset();                        
            reset();
            $(".successfully-saved").css("display", "block").delay(1000).fadeOut(100);
      }
  }  

      return (
            <main>
                  <div className="post_job">
                        <div className="flex">
                              <div className="sidebar">
                                    <div id="myNav2" className="overlay2">
                                          <div className="overlay-content2">
                                                <a href="javascript:void(0)" className="closebtn2">&times;</a>
                                                <ul>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon1.png" />
                                                                  <span>Dashboard</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon2.png" />
                                                                  <span>Company Profile</span>
                                                            </a>
                                                      </li>
                                                      <li className="active">
                                                            <a>
                                                                  <img src="images/s_icon3.png" />
                                                                  <span>Post a New Job</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon4.png" />
                                                                  <span>Manage Jobs</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon5.png" />
                                                                  <span>All Applicants</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon6.png" />
                                                                  <span>Shortlisted Resumes</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon7.png" />
                                                                  <span>Tokens</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon8.png" />
                                                                  <span>Change Password</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon9.png" />
                                                                  <span>Logout</span>
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a>
                                                                  <img src="images/s_icon10.png" />
                                                                  <span>Delete Profile</span>
                                                            </a>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <span className="icontab2">&#9776;</span>
                              </div>
                              <div className="post_page">
                                    <h2>Post a New Job</h2>
                                    <span className="successfully-saved"> Job Add Successfully.</span>
                                    <div className="post_blk">
                                          <h4>Post Job</h4>
                                          <div className="p_list flex">
                                                <div className="blk flex">
                                                      <div className="icon">
                                                            <img src="images/p_case.png" />
                                                            <img src="images/p_case_hover.png" />
                                                      </div>
                                                      <div className="text">
                                                            <h5>Job Detail</h5>
                                                      </div>
                                                </div>
                                                <div className="blk flex">
                                                      <div className="icon">
                                                            <img src="images/p_card.png" />
                                                            <img src="images/p_card_hover.png" />
                                                      </div>
                                                      <div className="text">
                                                            <h5>Pay Tokens</h5>
                                                      </div>
                                                </div>
                                                <div className="blk flex">
                                                      <div className="icon">
                                                            <img src="images/p_tick.png" />
                                                            <img src="images/p_tick_hover.png" />
                                                      </div>
                                                      <div className="text">
                                                            <h5>Confirmation</h5>
                                                      </div>
                                                </div>
                                          </div>
                                          <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="p_frm">
                                                      <label>Job Title</label>
                                                      <input type="text"  onChange={(e) => setTitle(e.target.value)} onBlur={(e) => setTitle(e.target.value)} name="title" placeholder="Title" {...register("title", { required: true })} />
                                                      {errors.title && <p className="error_msg">Please Fill The Title</p>}
                                                </div>
                                                <div className="p_frm">
                                                      <label>Job Description</label>
                                                      <textarea type="text" onChange={(e) => setDescription(e.target.value)} onBlur={(e) => setDescription(e.target.value)} name="description" placeholder="Job Description" {...register("description", { required: true })} >
                                                      </textarea>
                                                      {errors.description && <p className="error_msg">Please Fill The Description</p>}
                                                </div>                                                
                                                <div className="p_frm flex">
                                                      <div className="_p_frm">
                                                            <label>Salary Range</label>                                                            
                                                            <select name="salary_range" onChange={(e) => setSalaryRange(e.target.value)} {...register("salary_range", { required: true })} >
                                                                  <option value="">Select</option>
                                                                  <option value="$50000 - $100000">$50000 - $100000</option>
                                                                  <option value="$100000 - $150000">$100000 - $150000</option>
                                                                  <option value="$150000 - $200000">$150000 - $200000</option>
                                                                  <option value="$200000 - $250000">$200000 - $250000</option>
                                                                  <option value="$250000 - $300000">$250000 - $300000</option>
                                                                  <option value="$300000 - $350000">$300000 - $350000</option>
                                                            </select>
                                                            {errors.salary_range && <p className="error_msg">Please Select The Salary Range</p>}
                                                      </div>
                                                      <div className="_p_frm">
                                                            <label>Company Type</label>
                                                            <select name="company_type" onChange={(e) => setCompanyType(e.target.value)} {...register("company_type", { required: true })} >
                                                                  <option value="">Select</option>
                                                                  <option value="Seed">Seed</option>
                                                                  <option value="Series A">Series A</option>
                                                                  <option value="Series B">Series B</option>
                                                                  <option value="Series C">Series C</option>
                                                                  <option value="Public">Public</option>
                                                                  
                                                            </select>
                                                            {errors.company_type && <p className="error_msg">Please Select The Company Type</p>}
                                                      </div>                                                      
                                                </div>                                                
                                                <div className="p_frm">
                                                      <label>Job Location</label>
                                                      <input type="text" onChange={(e) => setJobLocation(e.target.value)} onBlur={(e) => setJobLocation(e.target.value)} name="location" placeholder="Job Location" {...register("location", { required: true })} />
                                                      {errors.location && <p className="error_msg">Please Fill The Job Location</p>}
                                                      <div className="map">
                                                            <img src="images/maps.png" />
                                                      </div>
                                                </div>
                                                <div className="p_frm">                                                      
                                                      <input type="submit" className="post_btn" value="Submit" />
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </div>
            </main>
      );
}


export default PostJob;