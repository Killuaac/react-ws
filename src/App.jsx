import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

//введение в react

// function App() {
  // let text
  // const show = true

  // if (show){
  //   text = 'Много осмысленного текста'
  // }
  // else {
  //   text = 'Мало осмысленного текста'
  // }

  // function square(num){
  //   return num**2
  // }

  // const res = square(28)

  // function btnClick(){
  //   alert('Hello')
  // }

  // function helloUser(user){
  //   alert(`Hello, ${user}`)
  // }

  // function ev(event){
  //   console.log(event)
  // }

  // let arr = []


  //   for(let i=0; i<10; i++){
  //     arr.push(<p>{i}</p>)
  //   }

  // const arr1 = [1, 2, 3]

  // let newArr = arr1.map((item, index) => {
  //   return (
  //     <div key={index}>
  //       <p >{item}</p>
  //     </div>
  //   )
  // })

  // return (
  //   <div>
  //     {newArr}
  //     {arr}
  //     {text}
  //     {show && <p>Text</p>}
  //     <p>{square(15)}</p>
  //     <p>{res}</p>
  //     <button onClick={btnClick}>Click</button>
  //     <button onClick={() => helloUser('user1')}>User1</button>
  //     <button onClick={() => helloUser('user2')}>User2</button>
  //     <button onClick={(event) => ev(event)}>UserClick</button>
  //   </div>
  // )


  // const elem = <p className='App-logo'> I learn Python </p>
  // const text = 'Лучше бы питон учили'
  // const text2 = 'Все таки питон лучше' + ' JavaScript'
  // const arr = [1, 2, 3]
  // const obj = {
  //   'one': '1',
  //   'two': '2',
  //   'three': '3'
  // }
  // const part = <><p>p!</p><div><button>Send</button></div></>
  // const main = <main>main</main>

  // return ( 
  //   <>
  //   <div className="App">
  //     {elem}
  //     <div className='new'>
  //       <p>I love Python</p>
  //       <input type="text" placeholder='Name' id={text} />
  //       <li>
  //         <p>Много осмысленного текста</p>
  //         <label htmlFor="age">age</label>
  //         <input type="checkbox" id='age' />
  //         <p>{text}</p>
  //         <p>{text2}</p>
  //         <p>{arr[0]}</p>
  //         <p>{obj.one}</p>
          
  //         {part}
  //       </li>
  //     </div>
  //   </div>
  //   </>
  // );
// }

// const products = [
//   {id: 2, title: 'product', description: 'Description', price: 400},
//   {id: 3, title: 'product', description: 'Description', price: 400},
//   {id: 4, title: 'product', description: 'Description', price: 400},
//   {id: 5, title: 'product', description: 'Description', price: 400},
//   {id: 6, title: 'product', description: 'Description', price: 400},
//   {id: 7, title: 'product', description: 'Description', price: 400},
//   {id: 8, title: 'product', description: 'Description', price: 400}
// ]


// function App(){
//   let printProduct = products.map((product, index) => {
//     return (
//       <div key={index}>
//         <h3>{product.title}</h3>
//           <p>{product.description}</p>
//           <p>{product.price}</p>
//           <button>Order</button>
//       </div>
//     )
//   })
//   return (
//     <>
//       <div className="row">
//         {printProduct}
//       </div>
//     </>
//   )
// }



//state

// function App(){
//   let constName = 'Vasya'
//   const state = useState('prod')
//   const name = state[0]
//   const setName = state[1]

//   const [age, setAge] = useState(2)

//   function changeName(name){
//     constName = name
//     setName(name)
//   }

//   function changeAge(age){
//     setAge(age**2)
//   }

//   function changeAge2(age){
//     setAge(age-1)
//   }

//   const [InCart, SetIncart] = useState(false)

//   const [value, setValue] = useState('vasya')

//   function changeValue(event){
//     setValue(event.target.value);
//     // setValue('Petya')
//   }

//   return (
//     <>
//       <p>Продукт {InCart ?'в корзине': 'не в корзине'}</p>
//       <button onClick={() => SetIncart(!InCart)}>Добавить в корзину</button>
//       <p>{value}</p>
//       <p>{constName}</p>
//       <p>{age}</p>
//       <p>{name}</p>
//       <button onClick={() => changeName('Petya')}></button>
//       <button onClick={() => changeAge(age)}></button>
//       <button onClick={() => changeAge2(age)}></button>
//       <hr />
//       <input type="text" placeholder="name" value={value} onChange={(e) => setValue(e.target.value)} />
//     </>
//   )
// }

function App(){
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [res, setRes] = useState()
  const [checkInp, setCheck] = useState(false)
  const [select, setSelect] = useState()
  const [radio, setRadio] =useState()

  function sumElems(){
    setRes(+value1 + +value2)
  }

  return (
    <>
      {/* <input
        type="text"
        placeholder='value1'
        onChange={(event) => setValue1(event.target.value)}
        value={value1} 
      />
      <input
        type="text"
        placeholder='value2'
        onChange={(event) => setValue2(event.target.value)}
        value={value2} 
      />
      <button onClick={sumElems}>Result</button>
      <p>{res}</p>

      <label htmlFor="1">Check</label>
      <input type="checkbox" id='1' onChange={(event) => setCheck(!checkInp)} />
      <p>{checkInp ? 'True': 'False'}</p>
      <select name="" id="" onChange={(event) => setSelect(event.target.value)}>
        <option value="1">
          One
        </option>
        <option value="2">
          Two
        </option>3
        <option value="3">
          Three
        </option>
      </select>
      <p>Вы выбрали {select}</p> */}
      <label htmlFor="2">Check</label>
      <input 
        type="radio" 
        onChange={(event) => setRadio(event.target.value)} 
        name='radio' 
      />
      <label htmlFor="2">Check</label>
      <input
        type="radio" 
        onChange={(event) => setRadio(event.target.value)} 
        name='radio' 
      />

    </>
  )
}

export default App;
