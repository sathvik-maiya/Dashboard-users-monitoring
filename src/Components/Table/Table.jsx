import React from 'react'
import "./Table.css"
import  updown from "../../images/up-down.png";
import  external from "../../images/external-link.png";
import  medium from "../../images/medium.png";
import  low from "../../images/low.png";
import  high from "../../images/high.png";

function Table( {Header,Body,searchitem,selectedlevel,selectedtrigger}) {
     
     const filtersearchvalue = Body.filter((item) => {
    const lowercaseSearchItem = searchitem ? searchitem.toLowerCase() : '';
   
    return(item.name.toLowerCase().includes(lowercaseSearchItem) ||
      item.email.toLowerCase().includes(lowercaseSearchItem)||
      item.level.toLowerCase().includes(lowercaseSearchItem) ||
      item.reason.toLowerCase().includes(lowercaseSearchItem) ||
      item.days.toLowerCase().includes(lowercaseSearchItem) ||
      item.date.toLowerCase().includes(lowercaseSearchItem) ||
     item.conditionorname.toLowerCase().includes(lowercaseSearchItem) ||
      (item.revieweddateormail &&
        item.revieweddateormail.toLowerCase().includes(lowercaseSearchItem)))
    
   });

  const filterrisk = selectedlevel
    ? filtersearchvalue.filter((item) => item.level.toLowerCase() === selectedlevel.toLowerCase())
    : filtersearchvalue;
    
  const filtertrigger = selectedtrigger
    ? filterrisk.filter((item) => item.reason.toLowerCase() === selectedtrigger.toLowerCase())
    : filterrisk;

    const emptylength=filtertrigger.length===0

     const getColorForLevel = (level) => {
    switch (level) {
      case 'Medium':
        return '#88670F';
      case 'High':
        return '#7D2424';
      case 'Low':
        return '#006540';
      default:
        return '#000'; 
    }
  };

  const getImageForLevel = (level) => {
    switch (level) {
      case 'Medium':
        return <img src={medium} alt="Medium" />;
      case 'High':
        return <img src={high} alt="High" />;
      case 'Low':
        return <img src={low} alt="Low" />;
      default:
        return null;
    }
  };

      
  return (
    <div className='table-div'>
         {
                 emptylength ? <div className='no-user'>Not found any detials</div>:   <table>
        <thead>
            {
               Header.map ( (header,index)=>(
                        <th key={`header_${index}`}>
                           {index === 1 || index === 3 || index === 4 ? (
                                                 <div className='header-div'>
                                                       <div>{header}</div>
                                                        <img src={updown} alt="" className='updown' /> 
                                                 </div>
                                                         ) : (
                                                 header
                                       )}
                                       </th>
                )
                )
            }
       </thead> 
                
                       <tbody>
                        {
                        filtertrigger.map( (item)=>(
                                 <tr key={item._id}>
                                 <td className='first'>
                                   <div className='body'>
                                    <div className='body-name'>
                                         <div className='name'>
                                            {item.name}
                                         </div>
                                         <div className='mail'>
                                              {item.email}
                                         </div>
                                    </div>
                                    <div className='body-image'>
                                         <img src={external} alt="" className='external-link' />
                                    </div>
                                   </div>

                                 </td>
                                 <td className='middle level' style={{ color: getColorForLevel(item.level) }}>
                                    
                                    <div className='dot' >
                                        <div >
                                                {getImageForLevel(item.level)} 
                                        </div>
                                        <div>
                                            {item.level} 
                                        </div>
                                    </div>
                                    
                                    
                                    </td>
                                 <td className='middle reason'>{item.reason}</td>
                                 <td className='middle days'>{item.days}</td>
                                 <td className='middle date'>{item.date}</td>
                                 <td className='last '>
                                    
                                       <div className='cond'>
                                        <div className='item-cond'>
                                           {item.conditionorname}
                                        </div>
                                        <div className='item-date'>
                                           {item.revieweddateormail ? item.revieweddateormail : ''}
                                        </div>
                                       </div>
                                   </td></tr>))}

              </tbody>

                 

      </table>

         }
    </div>
  )
}

export default Table
