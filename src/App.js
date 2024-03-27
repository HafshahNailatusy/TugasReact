// App.js
import React from "react";
import Utama from "./utama";
import Pegawai from "./pages/Pegawai";
// import Gallery from './pages/Gallery';
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Pastikan untuk mengganti "App.css" dengan nama file CSS Anda

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <nav type="button" class="btn btn-dark"> 
                    <Link to="/">Beranda</Link>
                    <Link to="/tentangsaya">Tentang Saya</Link>
                    <Link to="/karya">Karya</Link>
                    <Link to="/kontak">Kontak</Link>
                </nav> */}
                
                <div class="container mt-5"> 
                <div>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link " href="/">Beranda</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/tentangsaya">Tentang Saya</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/karya">Karya</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="/kontak">Kontak</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="/Gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="/Cart">Cart</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="/Pegawai">Daftar Pegawai</a>
                        </li>


                    </ul>
                    </div>
                </div>
                </nav>
                </div> 
                    <hr /> 
                    <div class="row"> 
                        <div class="col-md-8"> 
                        <p><Utama /></p> 
                        </div>
                        <div class="col-md-8"> 
                        <p><Pegawai /></p> 
                        </div> 
                    </div> 
            </div>
            </div>
        );
    }
}

export default App;
