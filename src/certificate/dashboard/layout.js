import React from 'react'
import Dsidebar from './dsidebar'
import Dheader from './dheader'
function layout({children}) {
  return (
    <div>
      <Dheader/>
            <div style={{display:"flex"}}>
            <Dsidebar/>
            <div className='w-100'>{children}</div>
          </div>  
    </div>
  )
}

export default layout;