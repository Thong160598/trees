import React from 'react'

export default function BaoCao() {
    return (
        <div className="container">
            <div className="baocao-tieude">
            <h1 className="tieu-de">BÁO CÁO MÔN REACT JS</h1>
            <h2>GIẢNG VIÊN: NGUYỄN VĂN LONG</h2>
            <h3>SINH VIÊN: HỒ BẢO THÔNG</h3>
            <h4>Ps13750</h4>
            </div>
            <div className="baocao-noidung">
                    <p>Xin chân thành cám ơn thầy Nguyễn Văn Long đã hướng dẫn, hỗ trợ em hoàn thành Asm môn React Js. Bài Asm em làm về web bán cây xanh và chậu cây. Gồm có các chức năng như sau:</p> 
                <table class="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        <tr class="table-primary">
                            <td>1</td>
                            <td>Show sản phẩm </td>
                           
                        </tr>
                        <tr class="table-success">
                            <td>2</td>
                            <td>Thích Sản phẩm</td>
                            
                        </tr>
                        <tr class="table-danger">
                            <td>3</td>
                            <td>Mua hàng</td>
                            
                        </tr>
                        <tr class="table-info">
                            <td>4</td>
                            <td>Chi tiết sản phẩm</td>
                         
                        </tr>
                        <tr class="table-warning">
                            <td>5</td>
                            <td>Sử dụng router chuyển trang</td>
                           
                        </tr>
                        <tr class="table-active">
                            <td>6</td>
                            <td>Giỏ hàng</td>   
                        </tr>
                        <tr class="table-secondary">
                            <td>6</td>
                            <td>Loại sản phẩm</td>
                           
                        </tr>
                        <tr class="table-light">
                            <td>7</td>
                            <td>Đăng nhập</td>
                          
                        </tr>
                     
                    </tbody>
                </table>
             

            </div>
        </div>
    )
}
