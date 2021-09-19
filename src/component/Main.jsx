import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Data from '../database/product.json';
import { useEffect } from 'react';


const Render = ({item,mua}) =>{
    const [buy, setBuy] = useState(false)
    const buy123 = () => { setBuy(!buy) }
    return(
        <div className="sp1">
            <img src={item.img} alt="" />
            <Link to={`/sanpham/${item.id}`} className="namesp">{item.name}</Link>
            <p className="giasp">{item.price}</p>
            <div className="button-main">
                <button type="button" className="btn btn-outline-dark" onClick={buy123} >{buy ? "Đã thích" : "Thích"}</button>
                <button type="button" className="btn btn-outline-dark" onClick={()=>mua(item.name)}>Mua</button>
            </div>
        </div>
    )
}

const RenderChauCay =({item}) =>{
    const [buy, setBuy] = useState(false)
    const mua = () => { setBuy(!buy) }
    return(
        <div className="sp1"  key={item.id}>
            <img src={item.img} alt="" />
            <Link to={`/sanpham/${item.id}`} className="namesp">{item.name}</Link>
            <p className="giasp">{item.price}</p>
            <div className="button-main">
                <button type="button" className="btn btn-outline-dark" onClick={mua} >{buy ? "Đã thích" : "Thích"}</button>
                <button type="button" className="btn btn-outline-dark">Mua</button>
            </div>
        </div>
    )
}

export default function Main() {
    const mang = []
    const [cartState, setCartstate] = useState([])
    const [state, setstate] = useState([])
    const [state1, setstate1] = useState([])

    

    useEffect(() => {
        const fech = async () => { 
            const api = "http://localhost:3000/sanpham"
            const ne = await axios(api)
            setstate(ne.data)
       
    }
        fech()
    }, [])

    useEffect(() => {
        const fech = async () => {
            const api = "http://localhost:3000/chaucay"
            const ne = await axios(api)
            setstate1(ne.data)
        }
        fech()
    }, [])

    const mua = (name) => { state.filter(item=>item.name===name).map(item=>setCartstate([item,...cartState]))}

    useEffect(() => {
        const cart = localStorage.getItem("cartitem")

        const checkCart = () => { 
            if (cart) { 
                setCartstate(JSON.parse(cart) || mang)
                }
            }
            checkCart()
    }, [])

    useEffect(() => {
        const save = () => { 
            localStorage.setItem("cartitem", JSON.stringify(cartState)) }
        save()
    }, [cartState])
return (
    
<div>
    <div className="container">
        <h3>SẢN PHẨM</h3>
        <div className="sanpham">

            { 
                    state.map(item => ( <Render item={item} key={item.id} mua={mua}/> ))
            }
        </div>

        <div className="mainslide">
            <img src="http://twtg55.webmienphi.vn/userfiles/img/635864/banner.jpg" alt="" />
        </div>
        <h3>CHẬU CÂY</h3>
        <div className="sanpham">
                {
                    state1.map(item => ( <RenderChauCay item={item} key={item.id}  /> ))
                }
        </div>

    </div>
</div>
)
}