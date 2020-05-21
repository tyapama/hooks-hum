import React,{useState} from 'react';

const App = () =>{
  // setStateで初期値をしてでき、状態と状態を変更できる関数を返す
  const [count,setCount]=useState(0)

  const increment =()=>setCount(count+1)
  const decrement =()=>setCount(count-1)

  // setCountの中には前の状態を引き継げる
  const increment2 =()=>setCount(previousCount=>previousCount+1)
  const decrement2 =()=>setCount(previousCount=>previousCount+1)

  const reset =()=>setCount(0)
  const double =()=>setCount(previousCount=>previousCount*2)
  const devide =()=>setCount(previousCount=>previousCount/2)

  return (
<>
<div>count:{count}</div>
{/* {}にはjsxでJSが記載できる */}
<div>
<button onClick={increment}>+1</button>
<button onClick={decrement}>-1</button>
</div>
<div>
<button onClick={increment2}>+1</button>
<button onClick={decrement2}>-1</button>
</div>
<div>
<button onClick={double}>x2</button>
<button onClick={devide}>÷2</button>
</div>
<div>
  <button onClick={reset}>reset</button>
</div>
</>
  );
}

export default App;
