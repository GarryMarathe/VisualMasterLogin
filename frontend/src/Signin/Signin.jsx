import React, {useState} from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import Layout from '../Layout';

const Signin = () =>{
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    // const [signinMessage, setSigninMessage] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Signin successful, set the JWT token in localStorage
                localStorage.setItem('jwtToken', data.access_token);
                // setSigninMessage('Signin successful');
            } else {
                // Signin failed, display the error message
                // setSigninMessage(data.message);
                console.error('Signin failed:', data.message);
            }
        } catch (error) {
            console.error('Error during signin:', error);
            // Handle errors if needed
        }
    };


    return(
    <Layout>
        <div className='wrapper'>
            <div className='box'>
                <form className='right-container' onSubmit={handelSubmit}>
                    <div className='container1'>
                        <h2 className='heading'>Sign In</h2>
                        <div className='inputText'>
                            <input value={username} type="text" placeholder='Name' onChange={(e)=> setName(e.target.value)} />
                            <span className='icon'><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                        <div className='inputText'>
                            <input value={password} type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}/>
                            <span className='icon2'><FontAwesomeIcon icon={faEyeSlash} /></span>
                        </div>
                        <button className='btn' type='submit'>Sign In</button>
                    </div>
                </form>
                
                <section className='left-container gradient1'>
                    <p className='text'>Don't have an account? <br></br> 
                    <button className='btn'><Link className='btnText' to={'/signup'}>Sign Up</Link> </button></p>
                </section>
            </div>
        </div>

    </ Layout>
    )
} 

export default Signin;