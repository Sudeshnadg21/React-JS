import React, { useState } from 'react'
import './style.css'

function Ex5() {
    const [qty, setQty] = useState(0)
    const inc = () => {
        if (qty < 10) {
            setQty(qty + 1)
        }
    }
    const dec = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }
    return ( 
    <div>
        <h1> Change Quantity Value </h1>  {
            /* <form action = "" >
                    <label htmlFor = "qty" > Qty </label> 
                    <input type = "number" name = "qty" id = "qty" min = { 0 } max = { 10 } value = { qty } onChange = {(e) => setQty(e.target.value) } > </input> 
                    </form>  */
        } <hr/>
        <form action = '' >
        <label htmlFor = "" > Qty </label> <span onClick = { inc }
        className = " btn inc" > + </span> 
        <input type = "number"
        name = "qty"
        id = "qty"
        min = { 0 }
        max = { 10 }
        value = { qty }
        onChange = {
            (e) => setQty(e.target.value) } />  <span onClick = { dec }
        className = " btn dec" > - </span> </form> </div>
    )
}
export default Ex5