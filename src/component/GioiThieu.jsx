import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

export default function GioiThieu() {
    const [state, setstate] = useState([])

    useEffect(() => {
        const fech = async () => {
            const url = "https://api.unsplash.com/photos/random?count=4&query=london&client_id=E0LyyyHOwP4k-4XeEY24uxv2vTXb042YZDPZ4Rn1vEM"
            const ne = await axios(url)
            setstate(ne.data)
        }
        fech()
    }, [])
    return (
        <section>
            <div className="container set-height">
                <h3>Ảnh Đẹp Api</h3>
                <div className="wrapper">
                    {state.map(item => (
                            <div className="wrapper-img">
                                <img src={item.urls.raw} alt="" />
                            </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
