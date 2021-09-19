import React from 'react'
import { Link } from 'react-router-dom';


export default function DangNhap() {
return (
<div>
    <div class="container">
        <h2>Đăng Nhập</h2>
       
        <form action="/action_page.php" class="was-validated" >
        <div class="form-group">
            <label for="uname">Username:</label>
            <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>
       
                <button type="submit" class="btn btn-light"><Link to="/giohang">Đăng Nhập</Link></button>
        </form>

    </div>
</div>

)
}