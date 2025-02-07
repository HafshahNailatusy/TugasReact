import React, {Component} from "react";  
// import $ from "jquery";
import Card from "../components/Card";
import { Modal,Button,Form } from 'react-bootstrap';
class Gallery extends Component {  
    constructor(){  
        super()
        this.state = {
            buku: [
                {
                    isbn:"12345", judul:"Bulan", penulis:"Tere Liye",
                    penerbit:"CV Harapan Kita", harga: 90000,
                    cover: "https://cdn.gramedia.com/uploads/items/9786020332949_Bulan-New-Cover.jpg  "              },
                {
                    isbn:"12346", judul:"Anak Badai", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 80000,
                    cover:"https://1.bp.blogspot.com/-zE3NBRhaY5E/XaJgQ9uypXI/AAAAAAAAALg/9NEEEfO3wgYLaXbiW-Y_YX_7jwA5ss3ogCLcBGAsYHQ/s1600/Si-anak-badai_dpn_low-768x1164.jpg"
                },
                {
                    isbn:"54321", judul:"Bumi", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 70000,
                    cover:"https://bukukita.com/babacms/displaybuku/95219_f.jpg"
                },
                {
                    isbn:"9786020324784", judul:"Hujan", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 95000,
                    cover:"https://cdn.gramedia.com/uploads/items/9786020324784_Hujan-Cover-Baru-2018.jpg"
                },
                {
                    isbn:"9786020332116", judul:"Matahari", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 83000,
                    cover:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671447826i/63284537.jpg"
                },
                {
                    isbn:"9786020332116", judul:"Bintang", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 85000,
                    cover:"https://1.bp.blogspot.com/-wzw7h4wUIvY/XxGl_Ac5jKI/AAAAAAAABCA/nxpaqLAjln41yuposO1nctjwK5ko1jRfACLcBGAsYHQ/s1600/bintang.jpg"
                },
            ],

            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            selectedItem: null,
            showModal:false
        }
        this.state.filterBuku = this.state.buku
}

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClose=()=>{
        this.setState({
            isModalOpen: false
        })
    }
    Add=()=>{
        this.setState({
            isModalOpen:true,
            isbn:Math.random(),
            judul:"",
            penulis:"",
            penerbit:"",
            harga:0,
            cover:"",
            action:"insert"
        })
    }   
    handleSave=(e)=>{
        e.preventDefault()
        let tempBuku=this.state.buku
        
        if(this.state.action ==="insert"){
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
                
            })
        }

        else if(this.state.action==="update"){
          let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({
            buku: tempBuku,
            isModalOpen: false
        })

    }

    Edit = (item) => {
        this.setState({
                isModalOpen:true,
                isbn: item.isbn,
                judul: item.judul,
                penulis: item.penulis,
                penerbit: item.penerbit,
                cover: item.cover,
                harga: item.harga,
                action:"update",
                selectedItem: item,
        })
    
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
        // menghapus data
        let tempBuku = this.state.buku
        // posisi index data yg akan dihapus
        let index = tempBuku.indexOf(item)
        // hapus data
        tempBuku.splice(index, 1)
        this.setState({buku: tempBuku})
        }
    }
    componentDidMount=()=>{

        this.setUser()
    }

    searching = event => {
        if(event.keyCode === 13){
            // 13 adalah kode untuk tombol enter
 
            let keyword = this.state.keyword.toLowerCase()
            let tempBuku = this.state.buku
            let result = tempBuku.filter(item => {
                return item.judul.toLowerCase().includes(keyword) ||
                item.penulis.toLowerCase().includes(keyword) || 
                item.penerbit.toLowerCase().includes(keyword)
            })
 
            this.setState({filterBuku: result})
        }
    }

  setUser = () => {
        // cek eksistensi dari session storage
        if(localStorage.getItem("user") === null){
            // kondisi jika session storage "user" belum dibuat
            let prompt = window.prompt("Masukkan Nama Anda","")
            if(prompt === null || prompt === ""){
                // jika user tidak mengisikan namanya
                this.setUser()
            }else{
                // jika user telah mengisikan namanya
 
                // simpan nama user ke session storage
                localStorage.setItem("user", prompt)
 
                // simpan nama user ke state.user
                this.setState({user: prompt})
            }
        }else{
            // kondisi saat session storage "user" telah dibuat
 
            // akses nilai dari session storage "user"
            let name = localStorage.getItem("user")
            this.setState({user: name})
        }
    }

    addToCart = (selectedItem) => {
        // membuat sebuah variabel untuk menampung cart sementara
        let tempCart = []
 
        // cek eksistensi dari data cart pada localStorage
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
            // JSON.parse() digunakan untuk mengonversi dari string -> array object
        }
 
        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)
 
        if(existItem){
            // jika item yang dipilih ada pada keranjang belanja
            window.alert("Anda telah memilih item ini")
        }else{
            // user diminta memasukkan jumlah item yang dibeli
            let promptJumlah = window.prompt("Masukkan jumlah item yang beli","")
            if(promptJumlah !== null && promptJumlah !== ""){
                // jika user memasukkan jumlah item yg dibeli
 
                // menambahkan properti "jumlahBeli" pada item yang dipilih
                selectedItem.jumlahBeli = promptJumlah
                
                // masukkan item yg dipilih ke dalam cart
                tempCart.push(selectedItem)
 
                // simpan array tempCart ke localStorage
                localStorage.setItem("cart", JSON.stringify(tempCart))
            }
        }
    }


    render(){  
     return (  
        
        <div className="container">
            <div className="container">
            <h4 className="alert alert-light">
                    Hallo, { this.state.user }
                </h4>

            <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({keyword: ev.target.value})}
                    onKeyUp={ev => this.searching(ev)}/>

            <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
            </button>

                <div className="row">
                    
                    
                { this.state.filterBuku.map( (item, index) => (
                        <Card
                        isbn={item.isbn}
                        judul={item.judul}
                        penulis={item.penulis}
                        penerbit={item.penerbit}
                        harga={item.harga}
                        cover={item.cover}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        onCart={ () => this.addToCart(item)}
                         />
                    )) }

                </div>
                    
                <Modal show={this.state.isModalOpen}>
                <Modal.Header>
                  <Modal.Title>Data Buku</Modal.Title>
                </Modal.Header>
                {/* <Form onSubmit={e=>this.handleSave(e)}> */}
                <Form onSubmit={e=>this.handleSave(e)}>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="isbn">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="text" name="isbn" readOnly value={this.state.isbn} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="judul">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" name="judul" placeholder="masukkan judul" value={this.state.judul} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="penulis">
                    <Form.Label>Penulis</Form.Label>
                    <Form.Control type="text" name="penulis" placeholder="masukkan penulis" value={this.state.penulis} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="penerbit">
                    <Form.Label>Penerbit</Form.Label>
                    <Form.Control type="text" name="penerbit" placeholder="masukkan penerbit" value={this.state.penerbit} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="harga">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control type="number" name="harga" placeholder="masukkan harga" value={this.state.harga} onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Cover</Form.Label>
                    <Form.Control type="url" name="cover" placeholder="masukkan link cover" value={this.state.cover} onChange={this.handleChange}/>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save
                </Button>
                </Modal.Footer>
                </Form>
                </Modal>

            </div>
            </div>
            
	  
    )
  }
}
export default Gallery;  
