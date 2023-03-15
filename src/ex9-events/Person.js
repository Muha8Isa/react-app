import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

const Person = () => {

    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');

    const [person, setPerson] = useState({firstName: '', lastName: ''});
    const [showMessage, setShowMessage] = useState({type: '', message: ''});
    const [showData, setShowData] = useState(false);

    const changeFirstName = (e) => {
        const value = e.target.value;
        //console.log('value: ', value);
        //setFirstName(value);
        setPerson({...person, firstName: value}); // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    }
    const changeLastName = (e) => {
        const value = e.target.value;
        //console.log('value: ', value);
        //setLastName(value);
        setPerson({...person, lastName: value});
    }

        const clickBtn = () => {
            if (person.firstName.length > 2 && person.lastName.length > 2) {
            console.log('Data: ', person);
            setShowMessage({type: 'success', message: 'operation is done!'});
            setShowData(true);
            } else {
                setShowMessage({type: 'danger', message: 'operation is failed!'});
                setShowData(false);
            }
        }

    return ( <div className = 'container'>
        {showMessage && (
            <AlertMessage message = {showMessage.message} type={showMessage.type}/>
        )}

        
        <div className='card'>
            <div className='card-header bg-info text-white'>FORM</div>
            <div className='card-body'></div>
              <form>
                <div className='mb-3'>
                    <input type='text' className='form-control' id='firstName' name='firstName' autoComplete='given-name'
                    value={person.firstName} onChange={changeFirstName} placeholder='Enter First Name'/>
                </div>
                <div className='mb-3'>
                    <input type='text' className='form-control' id='lastName' name='lastName' autoComplete='family-name'
                    value={person.lastName} onChange={changeLastName} placeholder='Enter Last Name'/>
                </div>
                <div className='mb-3'>
                    <button type='button' className='btn btn-success' onClick={clickBtn}> Click Me!</button>
                </div>
              </form>
            
            <div className='card-footer'></div>
            
        </div>
  
        
        
        {showData && (
            <>
                <br/>
                <hr/> {/* Horisontal rule tag, used to create a horizontal line across the page */}
                <br/>
                <div className='card'>
                <div className='card-header bg-dark text-white'>
                    Data
                </div>
                <div className='card-body'>
                    <div className='bm-3'>
                        <span>First Name: {person.firstName}</span>
                    </div>
                    <div className='bm-3'>
                        <span>Last Name: {person.lastName}</span>
                    </div>
                </div>
            </div>
        </>)}
        
        

    </div>
        
    );
};

export default Person;