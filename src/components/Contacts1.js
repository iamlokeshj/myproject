import React, { useState } from 'react';
import contactsimg from '../media/i6.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contacts1 = () => {
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

    const [searchTerm, setSearchTerm] = useState('');
    const [editableColumn, setEditableColumn] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleEdit = (index, column) => {
        setEditableColumn(`${index}-${column}`);
    };

    const handleSave = (index, column, value) => {
        setEditableColumn('');
        const updatedContacts = [...contacts];
        updatedContacts[index][column] = value;
        setContacts(updatedContacts);
    };

    const filteredContacts = sortedContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    
    var [openpopup, setOpenPopup] = useState({"display":"none"});
    const handlepopup = () => {
        if(openpopup.display === "none"){
            setOpenPopup({"display":"block"});
        }
        else{
            setOpenPopup({"display":"none"});
        }
    }

    const handleCreate = () => {
        // Get the values from the input fields in the popup
        const companyName = document.querySelector('.popuptextbox:nth-child(1)').value;
        const personName = document.querySelector('.popuptextbox:nth-child(2)').value;
        //const contactType = document.querySelector('.popuptextbox:nth-child(3)').value;
        const phoneNumber = document.querySelector('.popuptextbox:nth-child(4)').value;
        const email = document.querySelector('.popuptextbox:nth-child(5)').value;
        //const address = document.querySelector('.popuptextbox:nth-child(6)').value;
        //const taxID = document.querySelector('.popuptextbox:nth-child(7)').value;
        //const additionalInfo = document.querySelector('.popuptextbox:nth-child(8)').value;

        // Create a new contact object with the values
        const newContact = {
            name: personName,
            phone: phoneNumber,
            email: email,
            salesperson: companyName,
            activities: 2,
            city: 'Andhrapradesh',
            country: 'india'
        };

        // Append the new contact to the contacts array
        setContacts([...contacts, newContact]);

        // Reset the input fields in the popup
        document.querySelectorAll('.popuptextbox').forEach(input => input.value = '');

        // Close the popup
        setOpenPopup({ display: 'none' });
        //alert('Record inserted successfully');
    };

    const navigate = useNavigate();
    const gotocontact= (index)=>
    {
        var url = `/Contactinfo/`+index
        navigate(url);
    }

    var [pname,setPname] = useState('');
    var [cname,setCname] = useState('');
    var [phone,setPhone] = useState('');
    var [email,setEmail] = useState('');
    var [taxid,setTaxid] = useState('');
    var [contacttype,setContacttype] = useState('');
    var [addr,setAddr] = useState('');
    var [description,setDescription] = useState('');
    
    var myformdata = {personName: pname, companyName: cname, phone: phone, email: email, taxId: taxid, contactType: contacttype, 
        address: addr, description: description};
    
    var your_token = 'Bearer ' + localStorage.getItem('token');
    var f1 = async (e)=>{
        e.preventDefault();

        console.log('my token - ',your_token)
        // Syntax  
          //axios.post(url, data, {headers: { 'authorization': your_token, 'Accept' : 'application/json', 'Content-Type': 'application/json' }});
        //   const {config,data:{message,token},status, statusText} = await axios.post('http://172.178.89.198:3000/api/v1/users/login', myformdata, 
        //   {headers: { 'authorization': your_token, 'Accept' : 'application/json', 'Content-Type': 'application/json' }}
        //   );

          const resp = await axios({
            method: "post",
            url: "http://172.178.89.198:3000/api/v1/dealers",
            data: myformdata,
            headers: {'authorization': your_token, 'Accept' : 'application/json', "Content-Type": "application/json" },
          })
            .then(function (response) {
                //handle success
                console.log('resp - ',response);
                // console.log(message);
                // console.log(token);
                // console.log(response);
                alert('Record inserted successfully');
            })
            .catch(function (response) {
              //handle error
              console.log('resp', response);
              alert('Error in inserting record');
            });       

        // if(un===gun && pw===gpw)
        // {
        //   var url = `/profile/`+un;
        //   navigate(url);
        // }
        // else
        // {
        //   alert('Wrong username and password combo');
        // }
      }
  

    
    <button className='popupbutton' onClick={handleCreate}>Create</button>
    return (
        <div className='tablediv'>
            <div className='popupblack' style={openpopup}>
                <div className='popupwhite' style={openpopup}>
                    <img src={require('../media/i8.png')} width="20" height="20"  alt='i8' className='closepopup' onClick={handlepopup}/>
                    <div className='createconteactpopupheading'>
                        <img src={require('../media/i6.png')} width="20" height="20"  alt='i7' className='createcontactpopupheadimg' />
                        <label className='popupheadlabel'>Create Contact</label>
                        <br/><br/>
                    </div>
                    <div className='ptextboxes'>
                        <form onSubmit={f1}>
                        <input type="text" name='personName' placeholder="Person name" className='popuptextbox person'  value={pname} onChange={(e)=>{setPname(e.target.value)}}/>
                        <input type="text" name='companyName' placeholder="Company Name" className='popuptextbox contact' value={cname } onChange={(e)=>{setCname(e.target.value)}}/>
                        <input type="text" name='phone' placeholder="Phone number" className='popuptextbox number' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                        <input type="text" name='email' placeholder="Email" className='popuptextbox email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input type="text" name='taxId' placeholder="Tax ID" className='popuptextbox taxid' value={taxid} onChange={(e)=>{setTaxid(e.target.value)}}/>
                        <input type='text' name='contactType' placeholder='Contact Type' className='popuptextbox contacttype' value={contacttype} onChange={(e)=>{setContacttype(e.target.value)}}/>
                        <input type="text" name='address' placeholder="Address" className='popuptextbox address' value={addr} onChange={(e)=>{setAddr(e.target.value)}}/>
                        <input type="text" name='description' placeholder="Description" className='popuptextbox additionalinfo' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                        <button className='popupbutton createinpopupbtn' onClick={handleCreate}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='headerabovetable'>
                <div className='contactsearch'>
                    <h1 className='contactsheading1'><img src={contactsimg} className='contactsheadingimg' width="40" height="35" alt='loading problem...'/>Contacts</h1>
                    <img src={require('../media/i7.png')}  alt='i7' className='searchimage' />
                    <input type="text" placeholder="Search..." className='searchbar' value={searchTerm} onChange={handleSearch} />
                </div>
                
                <div className='createcontactdwnload'>
                    <div>
                        <button className='createcontactbtn' onClick={handlepopup}>Create Contact</button> <br/>
                        <button className='downloadbtn'> Download</button>
                    </div>
                </div>
            </div>
            <div className='tableholder'>
            <table>
                <thead>
                    <tr className='heading'>
                        <th></th>
                        <th>Company name</th>
                        <th>Person name</th>
                        <th>Company Type</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Sales Person</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((contact, index) => (
                        <tr key={index} onClick={()=> {gotocontact(index)}}>
                            <td><input type='checkbox' /></td>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td></td>
                            <td>{contact.email}</td>
                            <td>{contact.salesperson}</td>
                            <td>{contact.activities}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div> {/** Table holder div end */}
        </div>
    );
};

export default Contacts1;