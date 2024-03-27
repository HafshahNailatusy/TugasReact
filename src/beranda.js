import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './beranda.css';

class Beranda extends React.Component {
  render() {
    return (
      <div className="beranda-container d-flex justify-content-center align-items-center vh-100">
        <div className="glass-card text-center">
          <h2 className="display-4">Ini Beranda</h2>
        </div>
      </div>
    )
  }
}

export default Beranda;