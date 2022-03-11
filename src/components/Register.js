import React from 'react';
import { useNavigate } from 'react-router-dom';

const initialUserInput = {
  username: '',
  email: '',
  password: '',
  eventcode: 'FEST',
};

function Register() {
  const [userInput, setUserInput] = React.useState(initialUserInput);
  const navigate = useNavigate();

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    localStorage.setItem('loginDetails', JSON.stringify(userInput));
    console.log('USER INPUT: ', userInput);
    navigate('/login');
  }

  return (
    <section className='section login'>
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
              <label className='label'>Favourite Event Type</label>
              <select
                className='input'
                name='eventcode'
                id='eventType'
                onChange={handleChange}
              >
                <option name='eventcode' value='FEST'>
                  FESTIVAL
                </option>
                <option name='eventcode' value='LIVE'>
                  LIVE MUSIC
                </option>
                <option name='eventcode' value='CLUB'>
                  CLUBBING/DANCE MUSIC
                </option>
                <option name='eventcode' value='DATE'>
                  DATING
                </option>
                <option name='eventcode' value='THEATRE'>
                  THEATRE
                </option>
                <option name='eventcode' value='COMEDY'>
                  COMEDY
                </option>
                <option name='eventcode' value='EXHIB'>
                  EXHIBITION
                </option>
                <option name='eventcode' value='KIDS'>
                  KIDS/FAMILY
                </option>
                <option name='eventcode' value='BARPUB'>
                  BAR/PUB
                </option>
                <option name='eventcode' value='LGB'>
                  GAY/LESBIAN
                </option>
                <option name='eventcode' value='SPORT'>
                  SPORT
                </option>
                <option name='eventcode' value='ARTS'>
                  THE ARTS
                </option>
              </select>
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
