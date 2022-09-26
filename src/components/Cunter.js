import React from 'react'
import { useState } from 'react'

const Cunter = () => {
    const[count, setCount] = useState(0)

  return (
    <div>
    <div>count Values</div>
    <button onClick={()=> setCount(prevCount =>prevCount +1 )}>Increament</button>
    </div>
    
  )
}

export default Cunter