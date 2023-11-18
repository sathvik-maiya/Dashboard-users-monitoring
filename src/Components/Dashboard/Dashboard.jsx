import React ,{ useState} from 'react'
import "./Dashboard.css"
import logo from "../../images/logo.jpg";
import profile from "../../images/profile.png";
import  xcircle from "../../images/x-circle.png";
import  down from "../../images/down.png";
import  search from "../../images/search.png";
import  ham from "../../images/hamburger.png";
import Table from "../Table/Table";
import {Tabledata} from "../../utils/Tabledata"
import ButtonDivModel from './ButtonDivModel';
import Sidenavbar from './Sidenav.jsx'



function Dashboard() {

           const [sidenav ,setsidenav] = useState(false);
          const { Pendingheader,Pending, Completedheader , Completed} = Tabledata;
          const [searchitem, setSearchitem] = useState('');
          const [selectedTab, setSelectedTab] = useState('Pending');
          const [isRiskLevelModalOpen, setIsRiskLevelModalOpen] = useState(false);
          const [istriggerLevelModalOpen, setistriggerLevelModalOpen] = useState(false);
          const[isbuttonmodalopen,setisbuttonmodalopen]=useState(false)
          const [level, setLevel] = useState('');
          const [trigger, settrigger] = useState('');


           const setTab = (tab) => {
                setSelectedTab(tab);
                setLevel(''); 
                setSearchitem('')
                 settrigger('')
                  setIsRiskLevelModalOpen(false)
                  setistriggerLevelModalOpen(false)
                    
   };

            const handleRiskLevelClick=()=>{
                   setIsRiskLevelModalOpen(!isRiskLevelModalOpen);
            }
              const handletriggerLevelClick=()=>{
                   setistriggerLevelModalOpen(!istriggerLevelModalOpen);
            }

            const handleDivClick = (value) => {
                      setLevel(value); 
                    
                     };

              const handleDivtriggerClick = (value) => {
                      settrigger(value); 
                    
                     };
              const handlebutton=()=>{
                       setisbuttonmodalopen(!isbuttonmodalopen);
              }
                     
               const handlenav =()=>{
    setsidenav(!sidenav)
  }


  return (
    <>
      <div  className= 'container'>

            <div className='sidebar'>
              <div className='sidebar-1'>
                 <ul className='sidebar-list'>
                  
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


             <div  className='navbar'>
                     <div className='hamburger'>

                          <div  className='heading'>
                         Monitoring
                    </div>
                    <div onClick={handlenav}>
                       <img src={ham} alt="" className="ham" width={30}/>
                    </div>
                     {
                 sidenav && <Sidenavbar  togglebox={handlenav}/>
 
                       }
                     </div>
                   
                    <div className='tabs'>
                      <div className='main-tabs'>
                              <div>
                               <div   className={selectedTab === 'Pending' ? 'main-tabs-text activeTab ' : 'main-tabs-text'} onClick={() => setTab('Pending')}>
                               Pending
                               </div>
                               <div className={selectedTab==='Pending' ? "underline1" :"" }/>

                              </div>
                              <div>
                                <div  className={selectedTab === 'Completed' ? 'main-tabs-text activeTab' : 'main-tabs-text'} onClick={() => setTab('Completed')}>
                                Completed
                            </div>
                              <div className={selectedTab==='Completed' ? "underline2" :"" }/>
                              </div>
                            
                      </div>
                            <div className='button-tab'>
                             <button className='button'  onClick={handlebutton}>   <img src={xcircle} alt="" className="x-circle" /> Close account</button>
                           <div className={`modal-backdrop ${isbuttonmodalopen ? 'active' : ''}`} >
        <div className={`modal ${isbuttonmodalopen ? 'active' : ''}`}>
          {isbuttonmodalopen && <ButtonDivModel toggleModal={handlebutton} />}
        </div>
      </div>
                            </div>
                    </div>
                        <div className='box'>
                         </div>
                         
                   <div className='search-filter'>
                    <div className='search'>
                        <div className='search-icon' >
                          <img src={search} alt="" className="search-logo" />
                         </div>
                          <input type="text" placeholder="Search" className='search-input' value={searchitem} onChange={(e) => setSearchitem(e.target.value)}/>
                    </div>

                        <div className='trigger-risk'>
                             <div className='triggerlevel' onClick={handletriggerLevelClick}>
                             <div className='trigger'>
                       <div className='trigger-text'>Trigger reason</div>
                      <div  className='trigger-down1'><img src={down} alt="" className="down" /></div>
                            </div>
                            {
                        istriggerLevelModalOpen===true &&
                               <div className='trigger-div'>
                                 <div  className={trigger === '' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('')}>
                                     All
                                    </div>
                                  <div className={trigger === 'IP Change' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('IP Change')}>
                                     IP Change
                                    </div>
                                    <div  className={trigger === 'FIFO' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('FIFO')}>
                                         FIFO
                                      </div>
                                       <div  className={trigger === 'Hard flag' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('Hard flag')}>
                                         Hard flag
                                      </div>
                                       <div  className={trigger === 'Temp flag' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('Temp flag')}>
                                         Temp flag
                                      </div>
                                       <div  className={trigger === 'Restricted unflag' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('Restricted unflag')}>
                                         Restricted unflag
                                      </div>
                                       <div  className={trigger === 'Un flag' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('Un flag')}>
                                         Un flag
                                      </div>
                                       <div  className={trigger === 'Reviewed' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivtriggerClick('Reviewed')}>
                                         Reviewed
                                      </div>
                               </div>
                       }
                          </div>
                        <div className='risklevel'  onClick={handleRiskLevelClick}>
                          <div className='trigger'>
                         <div className='trigger-text'>Risk level</div>
                         <div  className='trigger-down2'><img src={down} alt="" className="down" /></div>
                       </div>
                       {
                        isRiskLevelModalOpen===true &&
                               <div className='risk-div'>
                                 <div  className={level === '' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivClick('')}>
                                     All
                                    </div>
                                  <div className={level === 'Low' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivClick('Low')}>
                                     Low
                                    </div>
                                    <div  className={level === 'Medium' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivClick('Medium')}>
                                         Medium
                                      </div>

                                      <div  className={level === 'High' ? 'levelvalue active ' : 'levelvalue'} onClick={() => handleDivClick('High')}>
                                           High
                                        </div>
                               </div>
                       }
                     
                        </div>

                        </div>
                       

                   </div>
                    <div className='main-content'>
                           {
                                selectedTab==="Pending" ?  <Table Header={Pendingheader} Body={ Pending} searchitem={searchitem} selectedlevel={level} 
                                selectedtrigger={trigger}/>: 
                                 <Table Header={Completedheader} Body={Completed} searchitem={searchitem} selectedlevel={level} 
                                 selectedtrigger={trigger}/>

                           }
                             
                     </div>
             </div>
                
      </div>
    </>
  )
}

export default Dashboard
