import React, { useState } from 'react';
import contactsimg from '../media/i6.png';

const DetailsOfContact = (props) => {
    const [contacts, setContacts] = useState([
        { name: 'John Doe', phone: '1234567890', email: 'john@example.com', salesperson: 'Jane Smith', activities: 'Todo', city: 'New York', country: 'USA' },
        { name: 'Jane Smith', phone: '9876543210', email: 'jane@example.com', salesperson: 'John Doe', activities: 'Todo', city: 'London', country: 'UK' },
        { name: 'Alice Johnson', phone: '5555555555', email: 'alice@example.com', salesperson: 'Bob Williams', activities: 'Todo', city: 'Paris', country: 'France' },
        { name: 'Bob Williams', phone: '9999999999', email: 'bob@example.com', salesperson: 'Alice Johnson', activities: 'Todo', city: 'Berlin', country: 'Germany' },
        { name: 'Eve Anderson', phone: '1111111111', email: 'eve@example.com', salesperson: 'Ethan Davis', activities: 'Todo', city: 'Tokyo', country: 'Japan' },
        { name: 'Michael Brown', phone: '2222222222', email: 'michael@example.com', salesperson: 'Sarah Wilson', activities: 'Todo', city: 'Sydney', country: 'Australia' },
        { name: 'Sarah Wilson', phone: '3333333333', email: 'sarah@example.com', salesperson: 'Michael Brown', activities: 'Todo', city: 'Toronto', country: 'Canada' },
        { name: 'David Johnson', phone: '4444444444', email: 'david@example.com', salesperson: 'Emily Davis', activities: 'Todo', city: 'Madrid', country: 'Spain' },
        { name: 'Emily Davis', phone: '5555555555', email: 'emily@example.com', salesperson: 'David Johnson', activities: 'Todo', city: 'Rome', country: 'Italy' },
        { name: 'Alex Smith', phone: '6666666666', email: 'alex@example.com', salesperson: 'Olivia Johnson', activities: 'Todo', city: 'Moscow', country: 'Russia' },
        { name: 'Olivia Johnson', phone: '7777777777', email: 'olivia@example.com', salesperson: 'Alex Smith', activities: 'Todo', city: 'Beijing', country: 'China' },
        { name: 'Daniel Wilson', phone: '8888888888', email: 'daniel@example.com', salesperson: 'Sophia Anderson', activities: 'Todo', city: 'Cairo', country: 'Egypt' },
        { name: 'Sophia Anderson', phone: '9999999999', email: 'sophia@example.com', salesperson: 'Daniel Wilson', activities: 'Todo', city: 'Mumbai', country: 'India' },
    ]);

    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

    /*

    const handleEdit = (index, column) => {
        setEditableColumn(`${index}-${column}`);
    };

    const handleSave = (index, column, value) => {
        setEditableColumn('');
        const updatedContacts = [...contacts];
        updatedContacts[index][column] = value;
        setContacts(updatedContacts);
    };
    
    */

    /* Tab switching script */

    // Take array of lenght 3 usestates.
    // each one consists of object
    // change the state of them. 

    /*
    function openCity(evt, cityName) 
    {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    */
      
      // Get the element with id="defaultOpen" and click on it
      //function f1(){document.getElementById("defaultOpen").click();}f1();
      
    /* Tab switching script */



    var [visibleornot1, setVisibleornot1] = useState({"display":"block"}); 
    var [visibleornot2, setVisibleornot2] = useState({"display":"none"}); 
    var [cls1, setcls1] = useState("tablinks active");
    var [cls2, setcls2] = useState("tablinks");
    

    var obj1 = {
        "display":"block"
    };
    var obj2 = {
        "display":"none"
    };

    return (
        <div className='tablediv'>
            <div className='headerabovetable'>
                <h1 className='contactsheading'><img src={contactsimg} className='contactsheadingimg' width="40" height="35" alt='loading problem...'/>{sortedContacts[props.id]['name']}</h1>

            </div>
            <table className='detailscontacttable'>
                <thead>
                    <tr className='heading'>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{sortedContacts[props.id]['name']}</td>
                  <td>{sortedContacts[props.id]['email']}</td>
                  <td>{sortedContacts[props.id]['phone']}</td>
                  <td>{sortedContacts[props.id]['salesperson']}</td>
                  <td style={{color:"green"}}>Active<div style={{}}></div></td>
                  </tr>  
                </tbody>
            </table>

            <div className='personeditable'>
                    <div className="tab">
                        <button className={cls1} onClick={()=>{setVisibleornot1(obj1);setVisibleornot2(obj2);setcls1("tablinks active");setcls2("tablinks");}} id="defaultOpen">Details</button>
                        <button className={cls2} onClick={()=>{setVisibleornot1(obj2);setVisibleornot2(obj1);setcls1("tablinks");setcls2("tablinks active");}}>Activities</button>
                    </div>

                    <div id="Details" style={visibleornot1} className="tabcontent">
                        <br/><br/>
                        <div>
                            <input type="text" name='company' placeholder="Company name" className='popuptextbox company ns' />
                            <input type="text" name='person' placeholder="Individual name" className='popuptextbox person ns' />
                            <input type="text" name='contacttype' placeholder="Individual name" className='popuptextbox contact ns' />
                            <input type="text" name='phone' placeholder="Title" className='popuptextbox number ns' />
                            <input type="text" name='email' placeholder="Account number" className='popuptextbox email ns' />
                            <input type="text" name='address' placeholder="Job position" className='popuptextbox address ns' />
                            <input type="text" name='taxid' placeholder="Company name" className='popuptextbox taxid ns' />
                            <input type="text" name='additionalinfo' placeholder="Contact owner" className='popuptextbox additionalinfo ns' />

                            <button style={{width:"15%", position:"relative", top:"20px", marginLeft:"25%", backgroundColor:"white", color:"black"}} className='popupbutton'>Cancel</button>
                            <button style={{width:"15%", position:"relative", top:"20px", marginLeft:"50px"}} className='popupbutton'>Save</button>
                        </div>
                        
                    </div>

                    <div id="Activities" style={visibleornot2} className="tabcontent">
                        <span onClick={()=>this.parentElement.style.display='none'} clasNames="topright"></span>
                        <h3>Activities</h3>
                        <p>Activities will be displayee here.</p> 
                    </div>

                </div>
        </div>
    );
};

export default DetailsOfContact;