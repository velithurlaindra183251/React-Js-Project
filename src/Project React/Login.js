// // Login.js
// import React, { useState } from 'react';
// import './Login.css'; 
// import { BiUser, BiLockAlt } from 'react-icons/bi'; 

// import { redirect } from "react-router-dom";

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();
//         console.log('Username:', username);
//         console.log('Password:', password);
//     };

//     return (
//         <div className="login-container">
//             <form className="login-form" onSubmit={handleLogin}>
//                 <div className="input-container">
//                     <BiUser className="icon" />
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div className="input-container">
//                     <BiLockAlt className="icon" />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;







import React, { useState } from 'react';
import './Login.css';
import pic from './images/loo.png'
import google from './images/g.png'
import noti from './images/noti.png'
import git1  from './images/git.png'
import fb from '../images/fb.png'
import insta from '../images/instagram.png'
import linkedin from '../images/linkedin.png'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (username === 'sateesh' && password === 'reddy') {
            setIsLoggedIn(true);
            setErrorMessage('');
        } else {
            setIsLoggedIn(false);
            setErrorMessage('Invalid username or password.');
        }
    };
    

    const handleLog = () => {
        if (username === 'Indra' && password === 'Sena') {
            setIsLoggedIn(true);
            setErrorMessage('');
        } else {
            setIsLoggedIn(false);
            setErrorMessage('Invalid username or password.');
        }
    };


    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setErrorMessage('');
    };

    return (


    
        <div className="login-container">
            <div className='col-md-4'>
                <div className='row'>
             <h1 id='wlcm'><b> Welcome Back</b> :)<br/><h6><b><br></br><br></br>To keep connected with us</b> <br></br>please login with your personal information by <br></br>email address and password.<img src={noti} alt='' style={{width:'20px'}}/>
             </h6></h1>
<h6 id='lo'>or login with</h6>
<img src={fb} alt='' style={{width:'70px'}}></img>
<img src={insta} alt='' style={{width:'70px'}}></img>
<img src={linkedin} alt='' style={{width:'70px'}}></img>
<img src={git1} alt='' style={{width:'70px'}}></img>

             </div>
            </div>
               
            
            <div className="login-box">
                <div className='col-md-4'></div>
                {isLoggedIn ? (
                    <div>
                        <p style={{color:'lightcyan', textAlign:'center'}} className="welcome-message">Welcome, {username}!</p>
                        <button className="logout-button" style={{backgroundColor:'lightseagreen', margin:'80px'}} onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <img src={pic} style={{ width: '100px', marginLeft: '60px' }} alt='' />
                        <input
                            type="text"
                            placeholder="Username"
                            className="login-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />

                        <button className="login-button" onClick={handleLogin}>Login</button>

                        <button className="login-button" onClick={handleLogin}><img src={google} style={{ width: "30px" }} alt='' />Continue with Google</button>

                        {/* <button className="login-button" onClick={handleLogin}><img src={git} style={{width:"30px"}} alt=''/> Git hub</button> */}

                        <h6 style={{ fontWeight: 'lighter', padding: '5px', color:'white'}}>Forgot Password ?</h6>
                        <h6 style={{ fontWeight: 'lighter', color:'white'}}>Create New account ?</h6>
                        <p className="error-message">{errorMessage}</p>

                    </div>
                    
                )}
                
            </div>
            <div className='col-md-4'></div>
        </div>
        
    );
};

export default Login;


