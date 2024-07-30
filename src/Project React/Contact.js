import React, { useState } from 'react';
// import '../Project React/Contact.css'; 
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Phone,setPhone]=useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12'></div>
    <div id='pic'>
    <form className="contact-form" id='form1' onSubmit={handleSubmit}>
      <h3>Contact Us</h3>
      <br></br>
      <label>
      <b>Name:</b>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
       <b> Email:</b>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
       <b> Phone:</b>
        <input
          type="Phone"
          value={Phone }
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <label>
       <b> Message:</b>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
   
    <div className='row'>
      <div className='col-md-12'></div>

    </div>
</div>  
</div></div>  

  );
};

export default Contact;
