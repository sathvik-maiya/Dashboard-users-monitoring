import React from "react";
import "./Sidenav.css"; 
import logo from "../../images/logo.jpg";
import profile from "../../images/profile.png";
import x from "../../images/x.png";


const Sidenav = ({togglebox}) => {



  return (
     <div className='sidenav'>
              <div className='sidebar-1'>
                 <ul className='sidebar-list'>
                 <li className="side-x">
                          <div className='button-x' >
                            <img src={x} alt="" className="x" onClick={togglebox}/>
                        </div>
                 </li>

                    <li className='sidebar-item'> 
                         <img src={logo} alt="" className="logo" />
                    </li>
                      <li className='sidebar-item'> 
                         Overview
                    </li>
                      <li className='sidebar-item'> 
                         Onboarding
                    </li>
                      <li className='sidebar-item side-blue'> 
                         Monitoring
                    </li>
                      <li className='sidebar-item'> 
                        Flagging
                    </li>
                    <li className='sidebar-item'> 
                        Source of Income
                    </li>
                    <li className='sidebar-item'> 
                       UAR
                    </li>
                  </ul>
              </div>
                 
               <div className='sidebar-2'>
                <div className='sidebar-profile'>
                        <img src={profile} alt="" className="profile" />
                </div>
                <div className='sidebar-text'>
                     <div className='sidebar-textwrapper1'>
                         Elon Musk
                     </div>
                     <div className='sidebar-textwrapper2'>
                          elon@twitter.com
                     </div>
                </div>
               </div>

                
            </div>
  );
};

export default Sidenav;
