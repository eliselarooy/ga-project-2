import React from 'react';

function Welcome() {
  return (
    <>
      <section className='hero'>
        <div className='hero-body is-flex is-align-items-center'>
          <div className='container'>
            <h1 className='title has-text-centered has-text-white'>
              WELCOME BACK!
            </h1>
          </div>
        </div>
      </section>

      <section className='container mt-6'>
        <h2 className='title has-text-centered'>Your Favourites</h2>
        <div className='columns'>
          <p>Favourites in here</p>
        </div>
      </section>
    </>
  );
}

export default Welcome;
