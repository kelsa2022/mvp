import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { profiles } from "./../../../declarations/profiles";
import { Principal } from "@dfinity/principal";
import { Link } from 'react-router-dom';


const EditProfile = () => {

      const [editcontent, setEditcontent] = useState(false);
      const [editcity, setEditcity] = useState(true);
      const [firstName, setFirstname] = useState("");      
      const [inputdisable, setInputdisable] = useState(true);
      const [description, setDescription] = useState("");
      const [about, setAbout] = useState("");
      const [principal, setPrincipal] = useState("");
      const [id, setId] = useState(null);            
      const [language, setLanguage] = useState("");
      const [skils, setSkils] = useState([]);      
      const [userBalance, setUserBalance] = useState(0);
      const [viewProfile, setViewProfile] = useState(false);


      const options = [
            { value: 'Location', label: 'Location' },
            { value: 'austin', label: 'Austin' },
            { value: 'boston', label: 'Boston' },
            { value: 'charlotte', label: 'Charlotte' },
            { value: 'chicago', label: 'Chicago' },
            { value: 'denver', label: 'Denver' },
            { value: 'fort worth', label: 'Fort Worth' },
            { value: 'fresno', label: 'Fresno' },
            { value: 'houston', label: 'Houston' },
            { value: 'jacksonville', label: 'Jacksonville' },
            { value: 'las vegas', label: 'Las Vegas' },
            { value: 'madison', label: 'Madison' },
            { value: 'new york', label: 'New York' },
      ];
      const [selectedOption, setSelectedOption] = useState(options[0]);

      useEffect(() => {
            getProfileData();
      }, [])

      const getProfileData = async () => {
            const myprincipal = localStorage.getItem('myprincipal');
            const loginUser = await profiles.findAll();
            const currentUser = loginUser.filter(user => user.principal === myprincipal);
            if(currentUser[0].firstname || currentUser[0].description || currentUser[0].about || currentUser[0].location)
            {
                  setViewProfile(true);
            }
            setId(currentUser[0].id);
            setFirstname(currentUser[0].firstname);
            setDescription(currentUser[0].description);
            setAbout(currentUser[0].about);
            setPrincipal(currentUser[0].principal)
            const options = [
                  { value: currentUser[0].location ? currentUser[0].location : 'Location', label: currentUser[0].location ? currentUser[0].location.slice(0, 1).toUpperCase() + currentUser[0].location.slice(1, currentUser[0].location.length) : 'Location' },
            ];
            setSelectedOption(options[0]);            
            const bal = await profiles.getBalance(Principal.fromText(myprincipal));            
            let balance = bal;
            var new_str = balance.toString().replace(/-/g, '');
            setUserBalance(new_str);

      }

      $(document).on('click', '#edit-button', function () {
            $(this).css("display", "none");
            $('.edits').addClass('editable');
            $('.edits').attr('contenteditable', 'true');
            $('#end-editing').css("display", "flex");
            $('#end-editing').removeClass("round");
      });

      $(document).on('click', '#end-editing', function () {
            $(this).addClass("round");
            setTimeout(function () {
                  $('#end-editing').css("display", "none");
                  $('.edits').removeClass('editable');
                  $('.edits').removeAttr('contenteditable');
                  $('#edit-button').css("display", "flex");
            }, 5000);
      });

      $(document).ready(function () {
            $(document).on('click', '#end-editing', function () {
                  $(".end_edit").addClass("loading");
                  $(".checkmark").css("display", "none");
                  setTimeout(function () {
                        $(".end_edit").addClass("hide-loading");
                        $(".checkmark").css("display", "block");
                        $(".ani_bg").addClass("bgs")
                  }, 3000);
                  setTimeout(function () {
                        $(".end_edit").removeClass("loading");
                        $(".end_edit").removeClass("hide-loading");
                        $(".successfully-saved").css("display", "block").delay(1000).fadeOut(100);
                        $(".ani_bg").removeClass("bgs");
                  }, 5000);
            })
      });


      $(document).on('click', '#edit-button2', function () {
            $(this).css("display", "none");
            $('.edits2').addClass('editable');
            $('.edits2').attr('contenteditable', 'true');
            $('#end-editing2').css("display", "flex");
            $('#end-editing2').removeClass("round");
            $(this).parent().siblings().children('.delete').addClass("show");
      });

      $(document).on('click', '#end-editing2', function () {
            $(this).addClass("round");
            setTimeout(function () {
                  $('#end-editing2').css("display", "none");
                  $('.edits2').removeClass('editable');
                  $('.edits2').removeAttr('contenteditable');
                  $('.delete').removeClass("show");
                  $('#edit-button2').css("display", "flex");
            }, 5000);
      });

      $(document).ready(function () {
            let string = $('.first_name').text();
            $(".first-letter").text(string.slice(0, 1));

            let string2 = $('.first_name2').text();
            $(".first-letter2").text(string.slice(0, 1));
      });

      $(document).ready(function () {
            $(document).on('click', '#end-editing2', function () {
                  $(".end_edit").addClass("loading");
                  $(".checkmark").css("display", "none");
                  setTimeout(function () {
                        $(".end_edit").addClass("hide-loading");
                        $(".checkmark").css("display", "block");
                  }, 3000);
                  setTimeout(function () {
                        $(".end_edit").removeClass("loading");
                        $(".end_edit").removeClass("hide-loading");
                        $(".successfully-saved").css("display", "block").delay(1000).fadeOut(100);
                        $(".ani_bg2").addClass("bgs")
                        setTimeout(function () {
                              $(".ani_bg2").removeClass("bgs")
                        }, 5000);
                  }, 5000);
            })
      });

      $(document).on('click', '#edit-button3', function () {
            $(this).css("display", "none");
            $('.edits3').addClass('editable');
            $('.edits3').attr('contenteditable', 'true');
            $('#end-editing3').css("display", "flex");
            $('#end-editing3').removeClass("round");
            $(this).parent().siblings().children('.delete').addClass("show");
      });

      $(document).on('click', '#end-editing3', function () {
            $(this).addClass("round");
            setTimeout(function () {
                  $('#end-editing3').css("display", "none");
                  $('.edits3').removeClass('editable');
                  $('.edits3').removeAttr('contenteditable');
                  $('.delete').removeClass("show");
                  $('#edit-button3').css("display", "flex");
            }, 5000);
      });

      $(document).ready(function () {
            $(document).on('click', '#end-editing3', function () {
                  $(".end_edit").addClass("loading");
                  $(".checkmark").css("display", "none");
                  setTimeout(function () {
                        $(".end_edit").addClass("hide-loading");
                        $(".checkmark").css("display", "block");
                  }, 3000);
                  setTimeout(function () {
                        $(".end_edit").removeClass("loading");
                        $(".end_edit").removeClass("hide-loading");
                        $(".successfully-saved").css("display", "block").delay(1000).fadeOut(100);
                        $(".ani_bg3").addClass("bgs")
                        setTimeout(function () {
                              $(".ani_bg3").removeClass("bgs")
                        }, 5000);
                  }, 5000);
            })
      });

      $(document).ready(function () {
            $(document).on('click', '#project_add', function () {
                  $('.add').addClass('show');
            });
            $(document).on('click', '#send', function () {
                  if ($('#inputAdd').val() == '' && $('#inputAdd').val().length <= 4) {
                        $('#alrt1').fadeIn(3000).fadeOut(500);
                  }
                  if ($('#inputAdd').val().length <= 4) {
                        $('#alrt2').fadeIn(3000).fadeOut(500);
                  } else {
                        $(".end_edit").addClass("loading");
                        $(".checkmark").css("display", "none");
                        setTimeout(function () {
                              $(".end_edit").addClass("hide-loading");
                              $(".checkmark").css("display", "block");

                              var counter = 0;
                              if(counter<=0){
                                    $("#list").prepend('<div class="box" style="display:block;animation: changeBg 5s ease;">' + '<h5>' + $('#inputAdd').val() + '</h5>' + '<a' + ' href="' + $('#url').val() + '"' + 'class="big_view">' + '<img src="/images/big_view.png" alt="" />' + '</a>' + '<p>' + $('#inputAdd2').val() + '</p>' + '</div>'); 
                                    counter++;                            
                              }    
                              $('#inputAdd').val("");
                              $('#inputAdd2').val("");
                              $('#url').val("");
                              $('.add').removeClass('show');
                        }, 3000);
                        setTimeout(function () {
                              $(".end_edit").removeClass("loading");
                              $(".end_edit").removeClass("hide-loading");
                        }, 5000);
                  }
            });
            if ($(".box").length > 3) {
                  $(".project .more").css('visibility', 'visible');
            } else {
                  $(".project .more").css('visibility', 'hidden');
            }   
            $(".box").slice(0, 3).show();
            $(document).on('click', '.project .more', function (e) {
                  e.preventDefault();
                  $(".lists").css("overflow-x", "auto");
                  $(".box:hidden").slice(0, 3).slideDown();
                  if ($(".box:hidden").length == 0) {
                        $(".project .more").css('visibility', 'hidden');
                  }               
            });
      });

      $(document).ready(function () {
            $(document).on('click', '#git_add', function () {
                  $('.add2').addClass('show');
            });
            $(document).on('click', '#send2', function () {
                  if ($('#inputAdd3').val() == '' && $('#inputAdd3').val().length <= 4) {
                        $('#alrt3').fadeIn(3000).fadeOut(500);
                  }
                  if ($('#inputAdd3').val().length <= 4) {
                        $('#alrt4').fadeIn(3000).fadeOut(500);
                  } else {
                        $(".end_edit").addClass("loading");
                        $(".checkmark").css("display", "none");
                        setTimeout(function () {
                              $(".end_edit").addClass("hide-loading");
                              $(".checkmark").css("display", "block");

                              var counter = 0;
                              if(counter<=0){
                                    $("#list2").prepend('<div class="box" style="display:block;animation: changeBg 5s ease;">' + '<h5>' + $('#inputAdd3').val() + '</h5>' + '<a' + ' href="' + $('#url2').val() + '"' + 'class="big_view">' + '<img src="/images/big_view.png" alt="" />' + '</a>' + '<p>' + $('#inputAdd4').val() + '</p>' + '</div>');
                                    counter++;
                                }    

                              $('#inputAdd3').val("");
                              $('#inputAdd4').val("");
                              $('#url2').val("");
                              $('.add2').removeClass('show');
                        }, 3000);
                        setTimeout(function () {
                              $(".end_edit").removeClass("loading");
                              $(".end_edit").removeClass("hide-loading");
                        }, 5000);
                  }
            });
            $(".box").slice(0, 3).show();
            $(document).on('click', '.git .more', function (e) {
                  e.preventDefault();
                  $(".lists2").css("overflow-x", "auto");
                  $(".box:hidden").slice(0, 3).slideDown();
                  if ($(".box:hidden").length == 0) {
                        $(".git .more").css('visibility', 'hidden');
                  }
            });
      });

      $(document).ready(function () {
            $(document).on('click', '#nft_add', function () {
                  $('.add3').addClass('show');
            });
            $(document).on('click', '#send3', function () {
                  if ($('#inputAdd5').val() == '' && $('#inputAdd5').val().length <= 4) {
                        $('#alrt5').fadeIn(3000).fadeOut(500);
                  }
                  if ($('#inputAdd5').val().length <= 4) {
                        $('#alrt6').fadeIn(3000).fadeOut(500);
                  } else {
                        $(".end_edit").addClass("loading");
                        $(".checkmark").css("display", "none");
                        setTimeout(function () {
                              $(".end_edit").addClass("hide-loading");
                              $(".checkmark").css("display", "block");

                              var counter = 0;
                              if(counter<=0){
                                    $("#list3").prepend('<div class="box" style="display:block;animation: changeBg 5s ease;">' + '<h5>' + $('#inputAdd5').val() + '</h5>' + '<a' + ' href="' + $('#url3').val() + '"' + 'class="big_view">' + '<img src="/images/big_view.png" alt="" />' + '</a>' + '<p>' + $('#inputAdd6').val() + '</p>' + '</div>');
                                    counter++;
                                }   

                              $('#inputAdd5').val("");
                              $('#inputAdd6').val("");
                              $('#url3').val("");
                              $('.add3').removeClass('show');
                        }, 3000);
                        setTimeout(function () {
                              $(".end_edit").removeClass("loading");
                              $(".end_edit").removeClass("hide-loading");
                        }, 5000);
                  }
            });
            $(".box").slice(0, 3).show();
            $(document).on('click', '.nft .more', function (e) {
                  e.preventDefault();
                  $(".lists3").css("overflow-x", "auto");
                  $(".box:hidden").slice(0, 3).slideDown();
                  if ($(".box:hidden").length == 0) {
                        $(".nft .more").css('visibility', 'hidden');
                  }
            });
      });

      $(document).ready(function () {
            $(document).on('click', '#add_edu', function () {
                  $('.edu .add_blk').addClass('show');
            });
            $(document).on('click', '#finish_edu', function () {
                  $(".end_edit").addClass("loading");
                  $(".checkmark").css("display", "none");
                  setTimeout(function () {
                        $(".end_edit").addClass("hide-loading");
                        $(".checkmark").css("display", "block");

                        var counter = 0;
                        if(counter<=0){
                              $("#list4").prepend('<div class="blk flex">' +
                              '<div class="icon">' +
                              '<span class="first-letter"></span>' +
                              '</div>' +
                              '<div class="cont flex">' +
                              '<div class="lft">' +
                              '<p class="edits2">' +
                              $('#coursename').val() +
                              '</p>' +
                              '<span class="edits2 first_name">' +
                              $('#orgname').val() +
                              '</span>' +
                              '</div>' +
                              '<div class="rtl">' +
                              '<ul>' +
                              '<li class="blue edits2">' +
                              $('#date').val() +
                              '</li>' +
                              '</ul>' +
                              '</div>' +
                              '<div class="edit">' +
                              '<ul>' +
                              '<li>' +
                              '<button type="submit" id="edit-button2">' +
                              '<i class="fas fa-pen"></i>' +
                              '</button>' +
                              '<button type="submit" id="end-editing2">' +
                              '<div class="checkmark draw"></div>' +
                              '<span class="end_edit">' +
                              '<div class="checkmark draw"></div>' +
                              '</span>' +
                              '</button' +
                              '</li>' +
                              '<li>' +
                              '<button type="submit"  class="delete">' +
                              '<i class="fas fa-trash"></i>' +
                              '</button>' +
                              '</li>' +
                              '</ul>' +
                              '</div>' +
                              '</div>' +
                              '</div>'
                        );
                              counter++;
                          }   

                        let string = $('.first_name').text();
                        $(".first-letter").text(string.slice(0, 1));
                        $('#coursename').val("");
                        $('#orgname').val("");
                        $('#date').val("");
                        $('.edu .add_blk').removeClass('show');
                  }, 3000);
                  setTimeout(function () {
                        $(".end_edit").removeClass("loading");
                        $(".end_edit").removeClass("hide-loading");
                  }, 5000);
            });
      });

      $(document).ready(function () {
            $(document).on('click', '#add_exp', function () {
                  $('.exp .add_blk').addClass('show');
            });
            $(document).on('click', '#finish_exp', function () {
                  $(".end_edit").addClass("loading");
                  $(".checkmark").css("display", "none");
                  setTimeout(function () {
                        $(".end_edit").addClass("hide-loading");
                        $(".checkmark").css("display", "block");

                        var counter = 0;
                              if(counter<=0){
                                    $("#list5").prepend(
                                          '<div class="blk flex">' +
                                          '<div class="icon">' +
                                          '<span class="first-letter2"></span>' +
                                          '</div>' +
                                          '<div class="cont flex">' +
                                          '<div class="lft">' +
                                          '<p class="edits3">' +
                                          $('#designation').val() +
                                          '</p>' +
                                          '<span>' +
                                          '<b class="edits3 first_name2">' +
                                          $('#organization').val() +
                                          '</b>' +
                                          '<span class="edits3"> .' +
                                          $('#type').val() +
                                          '</span>' +
                                          '<span class="edits3"> .' +
                                          $('#experience').val() +
                                          '</span>' +
                                          '</span>' +
                                          '</div>' +
                                          '<div class="rtl">' +
                                          '<ul>' +
                                          '<li class="blue edits3">' +
                                          $('#date2').val() +
                                          '</li>' +
                                          '</ul>' +
                                          '</div>' +
                                          '<div class="edit">' +
                                          '<ul>' +
                                          '<li>' +
                                          '<button type="submit" id="edit-button3">' +
                                          '<i class="fas fa-pen"></i>' +
                                          '</button>' +
                                          '<button type="submit" id="end-editing3">' +
                                          '<div class="checkmark draw"></div>' +
                                          '<span class="end_edit">' +
                                          '<div class="checkmark draw"></div>' +
                                          '</span>' +
                                          '</button' +
                                          '</li>' +
                                          '<li>' +
                                          '<button type="submit"  class="delete">' +
                                          '<i class="fas fa-trash"></i>' +
                                          '</button>' +
                                          '</li>' +
                                          '</ul>' +
                                          '</div>' +
                                          '</div>' +
                                          '</div>'
                                    );
                                    counter++;
                                }   

                        let string = $('.first_name2').text();
                        $(".first-letter2").text(string.slice(0, 1));
                        $('#designation').val("");
                        $('#organization').val("");
                        $('#experience').val("");
                        $('#date2').val("");
                        $('.exp .add_blk').removeClass('show');
                  }, 3000);
                  setTimeout(function () {
                        $(".end_edit").removeClass("loading");
                        $(".end_edit").removeClass("hide-loading");
                  }, 5000);
            });
      });


      $.expr[":"].contains = $.expr.createPseudo(function (arg) {
            return function (elem) {
                  return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
      });
      $(document).ready(function () {

            $(document).on('click', '#skill_add', function () {
                  $('ul.tags').addClass('edit');
                  $('#end-skill').css("display", "flex")
            });
            $(document).on('click', '#end-skill', function () {
                  $(".end_edit").addClass("loading");
                  $(".checkmark").css("display", "none");
                  setTimeout(function () {
                        $(".end_edit").addClass("hide-loading");
                        $(".checkmark").css("display", "block");
                        $('ul.tags').removeClass('edit');
                        $('#end-skill').css("display", "none")
                  }, 3000);
                  setTimeout(function () {
                        $(".end_edit").removeClass("loading");
                        $(".end_edit").removeClass("hide-loading");
                  }, 5000);
            });

            $(document).on('click', '#addTagBtn', function () {
                  $('#tags option:selected').each(function () {
                        $(this).appendTo($('#selectedTags'));
                  });
            });
            $(document).on('click', '#removeTagBtn', function () {
                  $('#selectedTags option:selected').each(function (el) {
                        $(this).appendTo($('#tags'));
                  });
            });
            $(document).on('click', '.tagRemove', function (event) {
                  event.preventDefault();
                  $(this).parent().remove();
            });
            $(document).on('click', 'ul.tags', function () {
                  $('#search-field').focus();
            });
            $('#search-field').keypress(function (event) {
                  if (event.which == '13') {
                        if (($(this).val() != '') && ($(".tags .addedTag:contains('" + $(this).val() + "') ").length == 0)) {
                              $('<li className="addedTag">' + $(this).val() + '<span className="tagRemove" onclick="$(this).parent().remove();">x</span><input type="hidden" value="' + $(this).val() + '" name="tags[]"></li>').insertBefore('.tags .tagAdd');
                              $(this).val('');

                        } else {
                              $(this).val('');

                        }
                  }
            });

      });
      
      const updateprofile = async () => {
            setInputdisable(true);
            setEditcity(true);
            const location = selectedOption.value;                  
            const myprincipal = localStorage.getItem('myprincipal');
            const profile = {
                  principal: myprincipal,
                  firstname: firstName,
                  description: description,
                  image: "",
                  location: location,
                  gender: "",
                  about: about,
                  language: language ? language : '',
                  skill: skils ? skils : [],
            }
            const result = await profiles.update(parseInt(id), profile);            
            if(result == true)
            {
                  setTimeout(function () {
                        setViewProfile(true);
                  }, 6000);

            }
            const bals = await profiles.sendSignUpCompletionToken(Principal.fromText(localStorage.getItem('myprincipal')));
      }



      return (
            <main>
                  <section className="profile_page _edit">
                        <div className="pro_container">
                              <div className="flex">
                                    <div className="right">
                                          <div className="tog_blk">
                                                <form>
                                                      <label for="tog1">
                                                            <span>Open to jobs</span>
                                                            <div className="switch">
                                                                  <input type="checkbox" id="tog1" />
                                                                  <span className="slider"></span>
                                                            </div>
                                                      </label>
                                                      <label for="tog2">
                                                            <span>Open to network</span>
                                                            <div className="switch">
                                                                  <input type="checkbox" id="tog2" />
                                                                  <span className="slider"></span>
                                                            </div>
                                                      </label>
                                                      <label for="tog3">
                                                            <span>Show public wallet address</span>
                                                            <div className="switch">
                                                                  <input type="checkbox" id="tog3" />
                                                                  <span className="slider"></span>
                                                            </div>
                                                      </label>
                                                </form>
                                          </div>
                                          <div className="details">
                                                <div className="blk flex">
                                                      <div className="img">
                                                            <img src="/images/detail_icon1.png" alt="" />
                                                      </div>
                                                      <div className="txt">
                                                            <h6>Expected Salary</h6>                                                            
                                                            <div className="edit">
                                                                  <ul>
                                                                        <li>
                                                                              <button type="submit">
                                                                                    <i className="fas fa-pen"></i>
                                                                              </button>
                                                                        </li>
                                                                        <li>
                                                                              <button type="submit" className="delete">
                                                                                    <i className="fas fa-trash"></i>
                                                                              </button>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="blk flex">
                                                      <div className="img">
                                                            <img src="/images/detail_icon2.png" alt="" />
                                                      </div>
                                                      <div className="txt">
                                                            <h6>Language</h6>                                                            
                                                            <div className="edit">
                                                                  <ul>
                                                                        <li>
                                                                              <button type="submit">
                                                                                    <i className="fas fa-pen"></i>
                                                                              </button>
                                                                        </li>
                                                                        <li>
                                                                              <button type="submit" className="delete">
                                                                                    <i className="fas fa-trash"></i>
                                                                              </button>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="blk flex">
                                                      <div className="img">
                                                            <img src="/images/detail_icon3.png" alt="" />
                                                      </div>
                                                      <div className="txt">
                                                            <h6>Education Level</h6>                                                            
                                                            <div className="edit">
                                                                  <ul>
                                                                        <li>
                                                                              <button type="submit">
                                                                                    <i className="fas fa-pen"></i>
                                                                              </button>
                                                                        </li>
                                                                        <li>
                                                                              <button type="submit" className="delete">
                                                                                    <i className="fas fa-trash"></i>
                                                                              </button>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="social">
                                                <div className="flex">
                                                      <div className="txt">
                                                            <h5>Social media</h5>
                                                            <a className="write_btn">
                                                                  <i className="fas fa-pen"></i>
                                                            </a>
                                                      </div>                                                      
                                                </div>
                                          </div>
                                          <div className="skills">
                                                <h4>Skills</h4>
                                                <a className="add_btn" id="skill_add">
                                                      <span>
                                                            <i className="fas fa-plus"></i>
                                                      </span>
                                                      Add Skills
                                                </a>
                                                <ul className="tags">                                                      
                                                      <li className="tagAdd taglist">
                                                            <input type="text" id="search-field" />
                                                      </li>
                                                </ul>

                                                <button type="submit" id="end-skill"  >
                                                      <div className="checkmark draw"></div>
                                                      <span className="end_edit">
                                                            <div className="checkmark draw"></div>
                                                      </span>
                                                </button>
                                          </div>
                                          <div className="intro">
                                                <h4>Intro Video</h4>
                                                <div className="img">
                                                      <div className="edit">
                                                            <ul>
                                                                  <li>
                                                                        <button type="submit">
                                                                              <i className="fas fa-pen"></i>
                                                                        </button>
                                                                  </li>
                                                                  <li>
                                                                        <button type="submit" className="delete">
                                                                              <i className="fas fa-trash"></i>
                                                                        </button>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                      <img src="/images/video_img.png" alt="" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="left">
                                          <div className="top_profile flex ani_bg">
                                                <div className="img">
                                                      <span></span>
                                                </div>
                                                
                                                <div className="txts">                                                                                                      
                                                      <input type="text" onChange={(e) => setFirstname(e.target.value)} onBlur={(e) => setFirstname(e.target.value)} name="first_name" placeholder="Full Name" className="edits" disabled={inputdisable} value={firstName} />
                                                      {viewProfile ?<Link className="view_profile" to={'/profile?id='+parseInt(id)} > View Profile </Link>:''}
                                                      <div className="dlts flex">                                                            
                                                            <input type="text" onChange={(e) => setDescription(e.target.value)} onBlur={(e) => setDescription(e.target.value)} name="description" placeholder="Description" className="edits" disabled={inputdisable} value={description} />                                                            
                                                            <div className="locs edits">
                                                                  <Select                                                                        
                                                                        onChange={setSelectedOption}
                                                                        options={options}
                                                                        isDisabled={editcity}
                                                                        value={selectedOption}
                                                                        isClearable={true}
                                                                  />
                                                            </div>
                                                      </div>
                                                      <div className="d_bt flex">
                                                            <span id="userbalance" className="coins">{userBalance} Coins</span>                                                            
                                                            <div className="edit">
                                                                  <span className="successfully-saved"> Profile Saved..</span>
                                                                  <ul>
                                                                        <li>
                                                                              <button type="submit" className="eye_btn">
                                                                                    <i className="fas fa-eye"></i>
                                                                              </button>
                                                                        </li>
                                                                        <li>
                                                                              <button type="submit" id="edit-button" onClick={() => { setEditcontent(true), setEditcity(false), setInputdisable(false) }}>
                                                                                    <i className="fas fa-pen"></i>
                                                                              </button>
                                                                              <button type="submit" id="end-editing" onClick={() => updateprofile()}  >
                                                                                    <div className="checkmark draw"></div>
                                                                                    <span className="end_edit">
                                                                                          <div className="checkmark draw"></div>
                                                                                    </span>
                                                                              </button>
                                                                        </li>
                                                                        <li>
                                                                              <a>Import from LinkedIn / Resume</a>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="about">
                                                <h4 className="">About</h4>                                                
                                                <textarea onChange={(e) => setAbout(e.target.value)} onBlur={(e) => setAbout(e.target.value)} name="about" className="edits" disabled={inputdisable} placeholder="About ?" value={about} />                                                
                                          </div>
                                          <div className="project">
                                                <h4>Projects</h4>
                                                <a className="add_btn" id="project_add">
                                                      <span>
                                                            <i className="fas fa-plus"></i>
                                                      </span>
                                                      Add
                                                </a>
                                                <div className="proj flex">
                                                      <div className="add">
                                                            <div className="top">
                                                                  <input type="text" id="inputAdd" placeholder="Title" />
                                                                  <input id='url' type='text' placeholder="URL" />
                                                            </div>
                                                            <div className="bot">
                                                                  <textarea placeholder="description" id="inputAdd2"></textarea>
                                                            </div>
                                                            <button id="send" mytitle="Add Item">
                                                                  <div className="checkmark draw"></div>
                                                                  <span className="end_edit">
                                                                        <div className="checkmark draw"></div>
                                                                  </span>
                                                            </button>
                                                            <p id="alrt1">Write Something <i className="fa fa-exclamation-circle"></i></p>
                                                            <p id="alrt2">Write At Least 5 Letter <i className="fa fa-exclamation-circle"></i></p>
                                                      </div>
                                                      <div className="lists flex" id="list">
                                                      </div>
                                                </div>                                                
                                          </div>
                                          <div className="git">
                                                <h4>Github Repositories</h4>
                                                <a className="add_btn" id="git_add">
                                                      <span>
                                                            <i className="fas fa-plus"></i>
                                                      </span>
                                                      Add
                                                </a>
                                                <div className="proj flex">
                                                      <div className="add2">
                                                            <div className="top">
                                                                  <input type="text" id="inputAdd3" placeholder="Title" />
                                                                  <input id='url2' type='text' placeholder="URL" />
                                                            </div>
                                                            <div className="bot">
                                                                  <textarea placeholder="Language" id="inputAdd4"></textarea>
                                                            </div>
                                                            <button id="send2" mytitle="Add Item">
                                                                  <div className="checkmark draw"></div>
                                                                  <span className="end_edit">
                                                                        <div className="checkmark draw"></div>
                                                                  </span>
                                                            </button>
                                                            <p id="alrt3">Write Something <i className="fa fa-exclamation-circle"></i></p>
                                                            <p id="alrt4">Write At Least 5 Letter <i className="fa fa-exclamation-circle"></i></p>
                                                      </div>
                                                      <div className="lists2 flex" id="list2">
                                                      </div>
                                                </div>                                                
                                          </div>
                                          <div className="nft">
                                                <h4>NFT Certificates</h4>
                                                <a className="add_btn" id="nft_add">
                                                      <span>
                                                            <i className="fas fa-plus"></i>
                                                      </span>
                                                      Add
                                                </a>
                                                <div className="proj flex">
                                                      <div className="add3">
                                                            <div className="top">
                                                                  <input type="text" id="inputAdd5" placeholder="Title" />
                                                                  <input id='url3' type='text' placeholder="URL" />
                                                            </div>
                                                            <div className="bot">
                                                                  <textarea placeholder="organization" id="inputAdd6"></textarea>
                                                            </div>
                                                            <button id="send3" mytitle="Add Item">
                                                                  <div className="checkmark draw"></div>
                                                                  <span className="end_edit">
                                                                        <div className="checkmark draw"></div>
                                                                  </span>
                                                            </button>
                                                            <p id="alrt5">Write Something <i className="fa fa-exclamation-circle"></i></p>
                                                            <p id="alrt6">Write At Least 5 Letter <i className="fa fa-exclamation-circle"></i></p>
                                                      </div>
                                                      <div className="lists3 flex" id="list3">
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="edu">
                                                <h4>Education</h4>
                                                <a className="add_btn" id="add_edu">
                                                      <span>
                                                            <i className="fas fa-plus"></i>
                                                      </span>
                                                      Add Education
                                                </a>
                                                <div className="add_blk">
                                                      <div className="cont flex">
                                                            <div className="lft">
                                                                  <input type="text" id="coursename" placeholder="Course Name" />
                                                                  <input type="text" id="orgname" placeholder="Organization Name" />
                                                            </div>
                                                            <div className="rtl">
                                                                  <input type="text" id="date" placeholder="Start to end date" />
                                                            </div>
                                                            <div className="edit">
                                                                  <button id="finish_edu" mytitle="Add Item">
                                                                        <div class="checkmark draw"></div>
                                                                        <span class="end_edit">
                                                                              <div class="checkmark draw"></div>
                                                                        </span>
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div id="list4">
                                                </div>
                                          </div>
                                          <div className="exp">
                                                <h4>Experience</h4>
                                                <a className="add_btn" id="add_exp">
                                                      <span>
                                                            <i className="fas fa-plus"></i>
                                                      </span>
                                                      Add Work
                                                </a>
                                                <div className="add_blk">
                                                      <div className="cont flex">
                                                            <div className="lft">
                                                                  <input type="text" id="designation" placeholder="Designation Name" />
                                                                  <div className="mod flex">
                                                                        <input type="text" id="organization" placeholder="Organization" />
                                                                        <input type="text" id="type" placeholder="Type" />
                                                                        <input type="text" id="experience" placeholder="Experience" />
                                                                  </div>
                                                            </div>
                                                            <div className="rtl">
                                                                  <input type="text" id="date2" placeholder="Start to end date" />
                                                            </div>
                                                            <div className="edit">
                                                                  <button id="finish_exp" mytitle="Add Item">
                                                                        <div class="checkmark draw"></div>
                                                                        <span class="end_edit">
                                                                              <div class="checkmark draw"></div>
                                                                        </span>
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div id="list5">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </main>

      );
}

export default EditProfile;



