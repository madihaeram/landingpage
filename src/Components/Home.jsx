import React from 'react';

function Home() {
    return (
      <div id='main'>
       <h1 className='heading'>A monthly dog subscription box filled with fun unique toys and goodies</h1>
       <div className="btn">
      <div> <a href="#" className='cv-btn'>Get Started</a></div>
      <div> <a href="#" className='gv-btn'>Give as gift</a></div>
       </div>
   <div className='featured'>
       <h2>See where we've been featured</h2>
       <div className="brands">
         <div id='vouge'>Vouge</div>
         <div id='rs'>Rolling Stone </div>
         <div id='twsj'>the wall street journal</div>
         <div id='is'>InStyle</div>
       </div>
       </div>
      </div>
      
    )
}

export default Home;
