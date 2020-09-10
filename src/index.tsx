import React ,{useState} from 'react'
import ReactDOM from 'react-dom'
import './index.less'

function Hello(){
    const [count,setCount] = useState(0)
    return (
      <div className='center'>
          <button onClick={()=>setCount(count+1)}>+</button>
          <p>{count}</p>
          <button onClick={()=>setCount(count-1)}>-</button>
      </div>
    )
}


ReactDOM.render(<Hello />, document.getElementById('root'))