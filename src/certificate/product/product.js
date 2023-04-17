import React from 'react';
import './product.css';
import Img3 from './blue.jpg';
import Img4 from './blue-modified.png';
import img5 from './img5.png';
import img6 from './user card1.png';
import img7 from './User card2.png';
import img8 from './User card3.png';
import img9 from './User card4.png';
const Product = () => {
  return (
   <div> <div className='container3'>
      <div className='left1'>
        <div><img className='image3' src={Img3} /></div>
        <div><img className='image4' src={Img4} /></div>
        <img className='image5' src={img5} />
      </div>
      <div className='right1'>
      <h5 className='p2'>About Us</h5>
        <h1 className='h2'>The Best Reference</h1>
        <p className='p4'>consequuntur aliquid in rerum enim voluptatum Recusandae voluptatem quidem atque voluptas enim quis</p>
        <h5 className='p9'>Learn More <i class="fa-solid fa-greater-than"></i></h5>
      </div>
    </div>
    <div className='container4'>
    <h5 className='p2'>Team</h5>
        <h1 className='h2'>Get Quality Education</h1>
        <p className='p4'>consequuntur aliquid in this is not about to rerum today is a good day enim voluptatum Recusandae voluptatem quidem atque voluptas enim quis</p>
        <div className='images'>
          <img src={img6}/>
          <img src={img7}/>
          <img src={img8}/>
          <img src={img9}/>
        </div>
        <h5 className='p9'>Learn More <i class="fa-solid fa-greater-than"></i></h5>
    </div>
    </div>
  );
};

export default Product;