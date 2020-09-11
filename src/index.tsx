import React ,{useState} from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {reducers,CounterStore} from './Counter'

const store = createStore(reducers);

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


ReactDOM.render(
    <Provider store={ store }>
        <CounterStore />
    </Provider>,
    document.getElementById('root'))