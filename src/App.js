import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import GioiThieu from './component/GioiThieu';
import SanPham from './component/SanPham';
import GioHang from './component/GioHang';
import LoaiSanPham from './component/LoaiSanPham';
import DangNhap from './component/DangNhap';
import BaoCao from './component/BaoCao';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
              <Header/>
            <Switch>
              <Route exact path="/" component={Main} />
               
              <Route path="/gioithieu" component={GioiThieu}/>
              
              <Route path="/sanpham/:id" component={SanPham}/>
                
              <Route path="/giohang" component={GioHang}/>
              <Route path="/loai/:type" component={LoaiSanPham}/>
              <Route path="/dangnhap" component={DangNhap}/>
              <Route path="/baocao" component={BaoCao}/>
            

            </Switch>
          </Router>
          <Footer/>
          
         </div>
  );
}

export default App;
