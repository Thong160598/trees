import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function GioHang() {
    const mang = []
    const [cartState, setCartstate] = useState([])
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
            localStorage.setItem("cartitem", JSON.stringify(cartState))
        }
        save()
    }, [cartState])
    const xoa = (name) => { const delet = cartState.filter(item => item.name !== name) 
        setCartstate(delet)
    
    }
    const tinhtien = cartState.map(item=>parseInt(item.price))
    const reducer = (a,b) =>{return a+b}
    const tongtien = tinhtien.reduce(reducer,0)
    
return (
<div>
    <div className="container">
        <h2>Giỏ hàng của bạn</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Ảnh</th>
                    <th>Tên</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>

                </tr>
            </thead>
            <tbody>
               {cartState.map(item=>(
                   <tr>
                       <td width="300px"><img src={item.img} alt=""
                           width="30%" /></td>
                       <td>{item.name}</td>
                       <td>{item.price}</td>
                       <td>1</td>
                       <td>100000</td>
                       <td><button type="button" class="btn btn-dark" onClick={()=>xoa(item.name)}>Xóa</button></td>
                   </tr>
               ))}
               <h4>Tổng Tiền:{tongtien}</h4>

            </tbody>
        </table>
    </div>
</div>
)
}