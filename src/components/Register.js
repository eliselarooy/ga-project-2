import React from 'react';
import { registerUser } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const initialUserInput = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

function Register() {
  const [userInput, setUserInput] = React.useState(initialUserInput);
  const navigate = useNavigate();

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    localStorage.setItem('loginDetails', JSON.stringify(userInput));
    navigate('/login');
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form className='column is-half is-offset-one-quarter box'>
            <div className='field'>
              <label className='label'>Username</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Username'
                  name='username'
                  onChange={handleChange}
                  value={userInput.username}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                  value={userInput.email}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Password</label>
              <div className='control'>
                <input
                  type='password'
                  className='input'
                  placeholder='Password'
                  name='password'
                  onChange={handleChange}
                  value={userInput.password}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Password Confirmation</label>
              <div className='control'>
                <input
                  type='password'
                  className='input'
                  placeholder='Password Confirmation'
                  name='passwordConfirmation'
                  onChange={handleChange}
                  value={userInput.passwordConfirmation}
                />
              </div>
            </div>
            <div className='field'>
              <button
                type='submit'
                className='button is-fullwidth is-primary'
                onClick={handleSubmit}
              >
                Register Me!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
