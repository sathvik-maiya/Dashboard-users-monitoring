import React ,{useState} from 'react'
import "./Dashboard.css"
import x from "../../images/x.png";
import  down from "../../images/down.png";

function ButtonDivModel({ toggleModal }) {
            
            const [email, setEmail] = useState('');
            const [wantUAR, setWantUAR] = useState('');
            const [reason, setReason] = useState('');
            const [note, setNote] = useState('');
            const [chargeClosure, setChargeClosure] = useState(false);      

            const isButtonActive = email && wantUAR && reason && note && chargeClosure;


  return (
        <div >
         <div className= "button-div">
          <div className='div-box'>
               <div className='button-close'> 
               <div className='close-text'> Close account</div>
               <div className='button-x' ><img src={x} alt="" className="x" onClick={toggleModal}/></div>
           </div>

               <div className='email-text' >Email</div>

               <div className='input-buttonbox'>
                         <div>
                               <input type="text"  className='email-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                         </div>
                         <div className='down-buttonbox'><img src={down} alt="" className="down" /></div>
               </div>

               <div  className='file-button'>
                        <span className='file-text'>Want to file UAR</span>
                        <div className='label-button'>
                        <label className='option1'>
                        <input type="radio" value="option1" name="options" style={{ marginRight: '5px' }} checked={wantUAR === 'option1'} onChange={() => setWantUAR('option1')} />
                        Yes
                        </label>
                        <label className='option1'>
                        <input type="radio" value="option2" name="options" style={{ marginRight: '5px' }} checked={wantUAR === 'option2'} onChange={() => setWantUAR('option2')} />
                        No
                        </label>
                </div>
                </div>

                <div className='email-text'>Reason</div>

                <div className='input-buttonbox'>
                         <div>
                               <input type="text"  className='email-input' value={reason} onChange={(e) => setReason(e.target.value)} />
                         </div>
                         <div className='down-buttonbox'>
                              <img src={down} alt="" className="down" />
                         </div>
                </div>

                <div className='email-text'>Note</div>
                      <div>
                       <input type="text" className='note-input' value={note} onChange={(e) => setNote(e.target.value)} />
                      </div>

                 <div className='charge-button'>
                       <div className="charge-text">
                              <label className='closure' ><input type="radio" value="option3" style={{ marginRight: '8px' }} onChange={(e) => setChargeClosure(e.target.checked)}/>Charge closure fee</label>
                       </div>
                     <div>
                         <button className={isButtonActive ? 'button1 blue' : 'button1'}  onClick={toggleModal} > Close account</button>
                     </div>
                     </div>
                     </div>
                  </div>
        </div>
  )
}

export default ButtonDivModel
