import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
return (
<div>
    <div className="container">
        <div className="row">

            <div className="col-sm-5">
                <div className="menu">
                    <ul>
                            <Link to="/">TRANG CHỦ</Link>
                            <Link to="/gioithieu">GIỚI THIỆU</Link>
                            <Link to="/sanpham">SẢN PHẨM</Link>
                            <div class="dropdown">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                DANH MỤC
                                </button>
                                <div class="dropdown-menu">
                                    <Link class="dropdown-item" to="/loai/chaucay">Chậu Cây</Link>
                                    <Link class="dropdown-item" to="/loai/trangtri">Trang Trí</Link>
                                 
                                </div>
                            </div>
              
                    </ul>
                    
                </div>
            </div>

            <div className="col-sm-3">
                <Link to ="/">
                <div className="logo">
                    <img src="http://twtg55.webmienphi.vn/userfiles/img/635864/xanh_decor_vn_logo-1.png" alt="" />
                </div>
                    </Link>

            </div>

            <div className="col-sm-4">

                <div className="cart">
                        <Link to="/giohang"> <i className="fas fa-cart-plus"></i>GIỎ HÀNG</Link>
                        <div className="login">
                            <Link to="/dangnhap">ĐĂNG NHẬP</Link>
                        </div>
                        <Link  to="/baocao">BÁO CÁO</Link>

                       
                </div>
                  
              
            </div>
        </div>
        <div className="slide">
                <img src="http://twtg55.webmienphi.vn/userfiles/img/635864/s3.jpg" alt="" />
        </div>
    </div>
</div>
)
}