import React from 'react';
 import Featurebox from './Featurebox';
 import featureimage from '../images/featureimage.jpg';
 import featureimage1 from '../images/featureimage1.png';
 import featureimage2 from '../images/featureimage2.png';
function Feature() {
    return (
        <div>
        <div className='feature'>
           <h1>What's in a woofbox?</h1> 
           <p className='woof'>woofbox is a subscription box just for dogs,shipping fun toys and yummy treats to your doorstep every month, or bi-monthly. <br /> Each item is thoughtfully selected or designed to win over the most finicky feline.</p>
    </div>
        <div id='features' >
           <div className="a-container">
               <Featurebox image={featureimage} title='Dog toys'/>
               <Featurebox image={featureimage1} title='Dog treats'/>
               <Featurebox image={featureimage2} title='A box!'/>
               </div> 
               </div>
               <div className="btn btn-down">
       <div><a href="#" className='cv-btn'>Start a subscription now</a></div>
      <div> <a href="#" className='gv-btn'>Give a box as a gift</a></div>
       <div><a href="#" className='pv-btn'>View previous woofboxes</a></div>
       </div>
        
        </div>
    )
}

       

export default Feature;
