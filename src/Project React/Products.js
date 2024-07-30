import React from "react"
import { useState, useEffect } from "react"
import { IoMoon } from "react-icons/io5"

export default function App() {
  const [state, setState] = useState([])
  const [search, setSearch] = useState("")
  const handler = (s) => {
    setSearch(s.target.value)
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      // .then(json=>console.log(json))
      .then(json => setState(json))
  })
  return (
    <>
      <div className="container">
        <div className="row">

          <input type="text" placeholder="Search" style={{ padding: '10px', margin: '10px',  border:'2px solid black',width: "1120px" }} value={search} onChange={handler} />
<h4 style={{backgroundColor:'black', color:'white', }}><marquee>Get Extra 10% Off On Prepaid Orders  &  Trusted By 100k+ Customers </marquee></h4>

          {state.filter((x) => x.title.includes(search)).map((item) =>
            <div className="col-md-4 ">
              <div className="card" style={{backgroundColor:'grey', alignItems:'center', marginTop:'2px', padding:'7px', borderRadius:'10px'}}>
                <img src={item.image} alt='' width={250} height={250} style={{borderRadius:'15px'}}/>

                <div class="card-body">
                  <p class="card-text">{item.title}</p>
                </div></div>
              <button style={{ backgroundColor: 'yellowgreen' ,width:'80px' , marginTop:'2px', borderRadius:'10px'}}>{item.price}</button>

            </div>)}
        </div>
      </div>
    </>
  )
}
