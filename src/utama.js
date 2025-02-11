import React from "react";
import {Route, Routes} from "react-router-dom";

import Beranda from "./beranda";
import TentangSaya from "./tentangsaya";
import Karya from "./karya";
import Kontak from "./kontak";
import Gallery from "./pages/Gallery"
import Cart from "./pages/Cart"
import Pegawai from "./pages/Pegawai"

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Beranda/>}/>
        <Route path="/tentangsaya" element={<TentangSaya/>}/>
        <Route path="/karya" element={<Karya/>}/>
        <Route path="/kontak" element={<Kontak/>}/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/pegawai" component={<Pegawai/>} />
    </Routes>
)

export default Utama;