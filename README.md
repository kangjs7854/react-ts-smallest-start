# 使用parcel构建react+ts项目的最小起步
> 对比起webpack繁琐的配置，parcel十分方便快捷，对于小型的项目或者用于学习，在我看来非常方便，强烈推荐！

1. 快速初始化,输入```npm init - y```

2. 安装**parcel**,输入```npm i parcel-bundler -D```

3. 新建```src文件夹 ==> index.html文件```

    ```html
    <div id="root"></div>
    <script src="index.tsx"></script>
    ```

4. 新建```src文件夹 ==> index.tsx```
    ```tsx
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
    
    ```

5. 新建```src文件夹 ==> index.less```随便写点样式

6. 根目录新建**tsconfig.json**
    ```json
    {
      "compilerOptions": {
        "jsx": "react"
      }
    }
    ```

6. 使用``parcel``开始构建,``parcel``会自动安装所有的依赖并构建项目

    ```shell script
    parcel ./src index.html
    ```
   
> tips:如果遇到飘红报错可以把```.cache```文件夹删掉重新构建
