import React from 'react'
import product from '../database/product.json'
import { useState } from 'react'


function RenderProduce(props) {
    const [state, setstate] = useState(0)
    const {item} = props
    return(
        <div className="chitiet col-12">
            <div className="chitiet-img col-6">
                <img src={item.img} alt="" />
            </div>
            <div className="chitiet-thongtin col-6">
                <h5 className="chitiet-name">{item.name}</h5>
                <p className="chitiet-luotxem">Lượt xem 43</p>
                <h4 className="chitiet-gia">{item.price}</h4>
                <button type="button" className="btn btn-primary" onClick={() => setstate(state + 1)}>+</button>{state}
                <button type="button" className="btn btn-primary" onClick={() => setstate(state - 1)}>-</button> 
            </div>
        </div>
    )
}


export default function SanPham({match}) {

    const id = match.params.id
    const txt = product.filter(item=>item.id === parseInt(id))

    return (
        <div className="container">
            <div>
                {
                    txt.map(item => (
                        <RenderProduce item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
  
}
