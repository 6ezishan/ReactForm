import React, { useState } from 'react';

function Form() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };


  return (
    <div className='formContainer'>
        <form onSubmit={handleSubmit} className='myForm'>
            <div className='formGroup'>
                <label htmlFor='firstname'>First Name: </label>
                <input type='text' id='firstname' name='name' />
            </div>
            <div className='formGroup'>
                <label htmlFor='lastname'>Last Name: </label>
                <input type='text' id='lastname' name='name' />
            </div>
            <div className='formGroup'>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' name='email' />
            </div>
            <div className="formGroup">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" />
            </div>
            <button type='submit'>Submit</button>
        </form>
        {submitted && <div className='submitted'>Submitted</div>}

    </div>

 )
}

export default Form