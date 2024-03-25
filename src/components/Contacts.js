import React, { useState } from 'react';
import contactsimg from '../media/i6.png';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
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
        alert('Record inserted successfully');
    };

    const navigate = useNavigate();
    const gotocontact= (index)=>
    {
        var url = `/Contactinfo/`+index
        navigate(url);
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
                    <div>
                        <input type="text" name='company' placeholder="Company name" className='popuptextbox company' />
                        <input type="text" name='person' placeholder="Person name" className='popuptextbox person' />
                        <input type="text" name='contacttype' placeholder="Contact type" className='popuptextbox contact' />
                        <input type="text" name='phone' placeholder="Phone number" className='popuptextbox number' />
                        <input type="text" name='email' placeholder="Email" className='popuptextbox email' />
                        <input type="text" name='address' placeholder="Address" className='popuptextbox address' />
                        <input type="text" name='taxid' placeholder="Tax ID" className='popuptextbox taxid' />
                        <input type="text" name='additionalinfo' placeholder="Additional Info" className='popuptextbox additionalinfo' />
                        <button className='popupbutton' onClick={handleCreate}>Create</button>
                    </div>
                </div>
            </div>
            <div className='headerabovetable'>
                <div className='contactsearch'>
                    <h1 className='contactsheading'><img src={contactsimg} className='contactsheadingimg' width="40" height="35" alt='loading problem...'/>Contacts</h1>
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
            <table>
                <thead>
                    <tr className='heading'>
                        <th><input type='checkbox'/></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Salesperson</th>
                        <th>Activities</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((contact, index) => (
                        <tr key={index}>
                            <td><input type='checkbox' /></td>
                            <td onClick={() => handleEdit(index, 'name')}>
                                {editableColumn === `${index}-name` ? (
                                    <input
                                        type="text"
                                        value={contact.name}
                                        onChange={(event) => handleSave(index, 'name', event.target.value)}
                                    />
                                ) : (
                                    contact.name
                                )}
                            </td>
                            <td onClick={() => handleEdit(index, 'phone')}>
                                {editableColumn === `${index}-phone` ? (
                                    <input
                                        type="text"
                                        value={contact.phone}
                                        onChange={(event) => handleSave(index, 'phone', event.target.value)}
                                    />
                                ) : (
                                    contact.phone
                                )}
                            </td>
                            <td onClick={() => handleEdit(index, 'email')}>
                                {editableColumn === `${index}-email` ? (
                                    <input
                                        type="text"
                                        value={contact.email}
                                        onChange={(event) => handleSave(index, 'email', event.target.value)}
                                    />
                                ) : (
                                    contact.email
                                )}
                            </td>
                            <td onClick={() => handleEdit(index, 'salesperson')}>
                                <img src={require('../media/i10.png')}  alt='i10' className='tdimgcontact' />
                                {editableColumn === `${index}-salesperson` ? (
                                    <input
                                        type="text"
                                        value={contact.salesperson}
                                        onChange={(event) => handleSave(index, 'salesperson', event.target.value)}
                                    />
                                ) : (
                                    <p className='tdtxt'>{contact.salesperson}</p>
                                )}
                            </td>
                            <td onClick={() => handleEdit(index, 'activities')}>
                                <img src={require('../media/i11.png')}  alt='i11' className='tdimgcontact' />
                                {editableColumn === `${index}-activities` ? (
                                    <input
                                        type="text"
                                        value={contact.activities}
                                        onChange={(event) => handleSave(index, 'activities', event.target.value)}
                                    />
                                ) : (
                                    <p className='tdtxt'>{contact.activities}</p>
                                )}
                            </td>
                            <td onClick={() => handleEdit(index, 'city')}>
                                {editableColumn === `${index}-city` ? (
                                    <input
                                        type="text"
                                        value={contact.city}
                                        onChange={(event) => handleSave(index, 'city', event.target.value)}
                                    />
                                ) : (
                                    contact.city
                                )}
                            </td>
                            <td onClick={() => handleEdit(index, 'country')}>
                                {editableColumn === `${index}-country` ? (
                                    <input
                                        type="text"
                                        value={contact.country}
                                        onChange={(event) => handleSave(index, 'country', event.target.value)}
                                    />
                                ) : (
                                    contact.country
                                )}
                            </td>
                            <td>
                              <img src={require('../media/i12.png')}  alt='i12' className='tdimgcontact nextimg' onClick={()=> {gotocontact(index)}}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;