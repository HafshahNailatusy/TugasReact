import React from "react";
import Utama from "../utama";
// import Gallery from '../Gallery';
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Pastikan untuk mengganti "App.css" dengan nama file CSS Anda
import Pegawai from './Pegawai';

class Main extends React.Component {

    render() {
        return (
            <div>
                <nav type="button" class="btn btn-dark"> 
                    <Link to="/">Beranda</Link>
                    <Link to="/tentangsaya">Tentang Saya</Link>
                    <Link to="/karya">Karya</Link>
                    <Link to="/kontak">Kontak</Link>
                    <Link to="/gallery" className="nav-link">Gallery</Link> 
                    <Link to="/cart" className="nav-link">Cart</Link> 
                    <Link to="/pegawai" className="nav-link">Daftar Pegawai</Link> 
                </nav>

                <hr /> 
                    <div class="row"> 
                        <div class="col-md-8"> 
                        <p><Utama /></p> 
                        </div> 
                    </div> 
            </div>
        );
    }
}

export default Main;