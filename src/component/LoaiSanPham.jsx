import { map } from 'async'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function LoaiSanPham({ props, match }) {

    console.log(match);
    const [state, setstate] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const type = "http://localhost:3000/sanpham"
            const ChiTiet = await axios(type)
            setstate(ChiTiet.data)
        }
        fetch()
    }, [])

    const [buy, setBuy] = useState(false)
    const buy123 = () => { setBuy(!buy) }
    const mua = () => {
        setBuy(!buy)
    }

    console.log(state);

    return (
        <div className="container">
            <div className="sanpham">
            {
                state.map(item => (
                    item.type === match.params.type ?
                        <div className="sp1">
                            <img src={item.img} alt="" />
                            <Link to={`/sanpham/${item.id}`} className="namesp">{item.name}</Link>
                            <p className="giasp">{item.price}</p>
                            <div className="button-main">
                                <button type="button" className="btn btn-outline-dark" onClick={buy123}>{buy ? "Đã thích" :
                                    "Thích"}</button>
                                <button type="button" className="btn btn-outline-dark" onClick={() => mua(item.name)}>Mua</button>
                            </div>
                        </div>
                        : null
                ))
            }
            </div>
        </div>
    )
}