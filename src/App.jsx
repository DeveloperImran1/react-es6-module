import { useEffect, useState } from 'react'

import './App.css'
import Watch from './Components/Watch/Watch'

function App() {

  // nija nija likha array 
  // const watches = [
  //   {id: 1, name: 'Apple watch', price: 200},
  //   {id: 2, name: 'samsung watch', price: 200},
  //   {id: 3, name: 'casio watch', price: 200},
  // ]

  
  // chatGpt theke newa array like object data
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 6",
  //     price: 399
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 4",
  //     price: 249
  //   },
  //   {
  //     id: 3,
  //     name: "Fitbit Versa 3",
  //     price: 229
  //   },
  //   {
  //     id: 4,
  //     name: "Garmin Forerunner 945",
  //     price: 599
  //   },
  //   {
  //     id: 5,
  //     name: "Huawei Watch GT 2 Pro",
  //     price: 299
  //   }
  // ];



  // JSON data chatGpt theke collect kore Public folder a json er akta file create kore json code k paste kore dia kaj korte hobe.
  const [watches, setWatches] = useState([]);
  useEffect( ()=>{
    fetch ("watches.json")   // aikhane api er url na dia public folder a watches.json namer akta file ase. sei file er nam dilai hobe.
    // asarao json code k github theke api er url create kora jai. Abar google a search dila: 'free open api', 'free mock api', 'suagar' ai website theke api data collect kora jai.
    .then(res => res.json())
    .then(data => setWatches(data))
  } , [])


  return (
    <>
      <h1>Vite + React</h1>

      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
