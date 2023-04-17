import React from 'react';
import './pricing.css';
import Row1 from './row1.png';
import Row2 from './row2.png';
import Col1 from './col1.png';
import Col2 from './col2.png';
const Pricing = () => {
  return (
    <div>
    <div className='container5'>
      <h5 className='p2'>Gallery</h5>
        <h1 className='h2'>Approdable Packages</h1>
        <p className='p4'>consequuntur aliquid in this is not about to rerum today is a good day enim voluptatum Recusandae voluptatem quidem atque voluptas enim quis</p>
        <img src={Row2} />
        <img src={Row1} />
        <h5 className='p9'>Learn More <i class="fa-solid fa-greater-than"></i></h5>
    </div>
    <div className='container6'>
    <h5 className='p2'>Testimonials</h5>
        <h1 className='h2'>Our Experts</h1>
        <p className='p4'>consequuntur aliquid in this is not about to rerum today is a good day enim voluptatum Recusandae voluptatem quidem atque voluptas enim quis</p>
      <img src={Col1} />
      <img src={Col2} />

    </div>
    </div>
  )
}

export default Pricing;