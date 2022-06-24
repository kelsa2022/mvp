import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { hashMessage } from "ethers/lib/utils"
import { useWeb3React } from "@web3-react/core";
import { ethers, utils } from 'ethers';
import { Ed25519KeyIdentity } from "@dfinity/identity";
import { keccak256 } from "@ethersproject/keccak256";
import { BigNumber } from "@ethersproject/bignumber";
import { createActors, createAnonymousActors } from "../actor";
import { Principal } from "@dfinity/principal";
import { profiles } from "./../../../../declarations/profiles";
import { IDL } from "@dfinity/candid";

const Header = () => {
      const navigate = useNavigate();  
      const [userAddress, setUserAddress] = useState("")
      const [principalId, setPrincipalId] = useState("")
      function isMobileDevice() {
            return 'ontouchstart' in window || 'onmsgesturechange' in window;
      }

      

      async function connect(onConnected) {            
            if (!window.ethereum) {
                  alert("Get MetaMask!");
                  return;
            }

            const accounts = await window.ethereum.request({
                  method: "eth_requestAccounts",
            });

            onConnected(accounts[0]);
            $('#connectwallet').modal('hide');
      }
      async function checkIfWalletIsConnected(onConnected) {
            if (window.ethereum) {
                  const accounts = await window.ethereum.request({
                        method: "eth_accounts",
                  });

                  if (accounts.length > 0) {
                        const account = accounts[0];
                        onConnected(account);
                        return;
                  }

                  if (isMobileDevice()) {
                        await connect(onConnected);
                  }
            }
      }

      const generateLoginMessage = async (account, secret) => {

            return (
                  "SIGN THIS MESSAGE TO LOGIN TO THE INTERNET COMPUTER.\n\n" +
                  `APP NAME: Kelsa-Blaze` +
                  `ADDRESS:\n${account}\n\n` +
                  `HASH SECRET:\n${hashMessage(secret)}`
            );
      }

      const generateEd25519KeyIdentity = async (signature) => {
            const hash = keccak256(signature);
            if (hash === null) {
                  throw new Error(
                        "No account is provided. Please provide an account to this application."
                  );
            }

            // The following line converts the hash in hex to an array of 32 integers.
            // @ts-ignore
            const array = hash
                  .replace("0x", "")
                  .match(/.{2}/g)
                  .map((hexNoPrefix) => BigNumber.from("0x" + hexNoPrefix).toNumber());

            if (array.length !== 32) {
                  throw new Error(
                        "Hash of signature is not the correct size! Something went wrong!"
                  );
            }
            const uint8Array = Uint8Array.from(array);
            const identity = Ed25519KeyIdentity.generate(uint8Array);

            return identity;
      }
      const internetComputerLogin = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Login message 
            const myethaccount = window.ethereum.selectedAddress
            const loginMessage = await generateLoginMessage(myethaccount, "qzvPbKjpii");

            // Metamask sign
            const signature = await provider
                  .getSigner()
                  .signMessage(loginMessage);

            // Generate Ed25519KeyIdentity 
            const identity = await generateEd25519KeyIdentity(signature);

            // Use the new identity when communicating with IC
            localStorage.setItem(`ic_key_${myethaccount}`, JSON.stringify(identity.toJSON()));            

            // Create actors to interact with IC
            const actors = await createActors(identity)

            if (!actors) {                  
            } else {

                  const myprincipal = await actors.profile.whoamis();
                  localStorage.setItem('myprincipal', myprincipal.toText());
                  setPrincipalId(myprincipal.toText())
                  const profile = {
                        principal: myprincipal.toText(),
                        firstname: "",
                        description: "",
                        image: "",
                        location: "",
                        gender: "",
                        about: "",
                        language: "",
                        skill: [],
                  }
                  
                  const checkExist = await profiles.checkexist(profile)
                  const result = await profiles.create(profile)                  

                  const bal = await profiles.getBalance(Principal.fromText(localStorage.getItem('myprincipal')));                  

                  if(checkExist){
                        const bals = await profiles.sendSignUpToken(Principal.fromText(localStorage.getItem('myprincipal')));                        
                  }
            }            
      }
      const getPrincipalId = async () => {

            const myethaccount = await window.ethereum.selectedAddress

            if(myethaccount)
            {
                  const identity = await localStorage.getItem(`ic_key_${myethaccount}`);


                  const identityValue = Ed25519KeyIdentity.fromJSON(identity)
                        if(identityValue){                              
                              const actors = await createActors(identityValue)                              
                              if (!actors) {                                    
                                    setPrincipalId('')
                              } else {
                                    const myprincipal = await actors.profile.whoamis();
                                    setPrincipalId(myprincipal.toText())
                              }
                        }
                        
            
                  else {
                        setPrincipalId('')
                  }

            }
      }           
      useEffect(() => {

            getPrincipalId()
            checkIfWalletIsConnected(setUserAddress);
      }, []);

      const [isOpen, setOpen] = useState(false);

      const toggleDropdown = () => setOpen(!isOpen);

      return (

            <div>
                  <div className="modal fade" id="connectwallet">
                        <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                    <div className="modal-header">
                                          <h4 className="modal-title">Connect Wallet</h4>
                                          <p>By connecting your wallet and using Kelsa, you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></p>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                          <button className="btn btn-ouline-secondary cwbtn" onClick={() => connect(setUserAddress)}><img src="/images/MetaMask_Fox.svg.png" /> Metamask</button>
                                          <button className="btn btn-ouline-secondary cwbtn"><img src="/images/WalletConnect.png" /> WalletConnect</button>
                                          <button className="btn btn-ouline-secondary cwbtn"><img src="/images/Coinbase-Wallet.png" /> Coinbase Wallet</button>
                                          <div className="kelsaor">
                                                <span className="txt_or">or</span>
                                          </div>
                                          <div className="text-center mt-2 mblink">
                                                <a data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginwithemail">Login with email</a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>                             
                  <header>
                  <div className="header_content">
                        <div className="container">
                              <div className="flex">
                                    <div className="logo">
                                          <a href="https://getkelsa.com/">
                                                <img src="/images/KelsaLogo.PNG" alt="" />                                               
                                          </a>
                                    </div>
                                    <div className="menu_content">
                                          <div id="myNav" className="overlay">
                                                <div className="overlay-content ">
                                                      <a className="closebtn">&times;</a>
                                                      <div className="flex">
                                                      {userAddress ?
                                                                         ''
                                                                        : <div className="menu">
                                                                        <ul>
                                                                        <li>
                                                                        <a href="" data-bs-toggle="modal" data-bs-target="#myModal">
                                                                              Home</a>
                                                                  </li>
                                                                  <li>
                                                                        <a href="" data-bs-toggle="modal" data-bs-target="#myModal">Find Jobs</a>
                                                                  </li>
                                                                  <li>
                                                                        <a href="" data-bs-toggle="modal" data-bs-target="#myModal">Learn</a>
                                                                  </li>
                                                                  <li>
                                                                        <a href="" data-bs-toggle="modal" data-bs-target="#myModal">For Companies</a>
                                                                  </li>
                                                                  </ul>
                                                                  
                                                            </div> } 
                                                            {userAddress ?
                                                           
                                                                  <div className="button_list addlist useraddbtns">
                                                                        <div className="flex">

                                                                              <div className="menu me-4">
                                                                              <ul>
                                                            <li>
                                                                  <a href="" data-bs-toggle="modal" data-bs-target="#myModal">
                                                                        <span className='micon'><img src="/images/messaging.png" alt=""/></span> Messaging</a>
                                                            </li>                                                              
                                                            <li>
                                                                  <a href="" data-bs-toggle="modal" data-bs-target="#myModal"><span className='micon'><img src="/images/learn.png" alt=""/></span> Learn</a>
                                                            </li>
                                                            <li>                                                                  
                                                                  <Link to={"/job_listing"}><span className='micon'><img src="/images/j_case.png" alt=""/></span>Jobs</Link>
                                                            </li>
                                                            </ul>
                                                                                    </div>

                                                                              <button className="job_btn me-3" onClick={() => { navigator.clipboard.writeText(userAddress) } }>
                                                                                    <img src="/images/MetaMask_Fox.svg.png" alt="" className="me-2" />
                                                                                    <span>
                                                                                          {userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}
                                                                                     </span>
                                                                                     </button>
                                                                              {principalId ? <button className="job_btn me-3" onClick={() => { navigator.clipboard.writeText(principalId) } }> <img src="/images/dfinity-icon.png" alt="" className="mx-2" /> {principalId.substring(0, 5)}...{principalId.substring(principalId.length - 4)} </button>

                                                                                    : <button className="job_btn cic_btn" onClick={() => { internetComputerLogin() }}>
                                                                                          <img src="/images/dfinity-icon.png" alt="" className="mx-2" /> Connect Internet Computer
                                                                                          </button>}                                                                                                                                                            
                                                                        </div>
                                                                  </div>
                                                                  :
                                                                  <div className="button_list addlist">
                                                                        <div className="flex">                                                                              
                                                                              <button className="log_btn me-3" data-bs-toggle="modal" data-bs-target="#connectwallet">Login / Register</button>

                                                                              <button className="job_btn" data-bs-toggle="modal" data-bs-target="#connectwallet">Post a Job</button>

                                                                        </div>
                                                                  </div>}
                                                            {(userAddress && principalId) ? 
                                                            <span className="dropdown ms-3 pro-btn">
                                                                  <span className="dropdown-toggle" onClick={toggleDropdown} type="button" id="dropdownMenuButton1" >
                                                                        <span className="proimg">
                                                                              <img src="/images/user.png" alt="" className="grayimg" />
                                                                        </span>
                                                                  </span>
                                                                  <ul className={`dropdown-menu ${isOpen && 'show'}`}>
                                                                        <li><Link className="dropdown-item" to={'/post_job'} ><img src="/images/s_icon3.png" /> Post a Job</Link></li>
                                                                         <li><Link className="dropdown-item" to={'/edit_profile'} ><img src="/images/s_icon2.png" /> Profile</Link></li>                                                                        
                                                                         <li><Link className="dropdown-item" to={'#'} ><img src="/images/s_icon9.png" /> Logout</Link></li>                                                                        
                                                                  </ul>
                                                            </span>
                                                            : ""} 

                                                      </div>
                                                </div>
                                          </div>
                                          <span className="icontab" style={{ fontSize: "20px", cursor: "pointer" }}>&#9776;</span>
                                    </div>
                              </div>
                        </div>
                  </div>

                  
            </header>
            </div>
      )
}

export default Header;
