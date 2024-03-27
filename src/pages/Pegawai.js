import React, { Component } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

class Pegawai extends Component {
	constructor() {
		super();
		this.state = {
			pegawai: [],
			nip: "",
			nama: "",
			alamat: "",
			action: "",
			search: "",
			showModal: false,
		};
	}

	bind = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleCloseModal = () => {
		this.setState({ showModal: false });
	};

	handleShowModal = () => {
		this.setState({
			showModal: true,
			nip: "",
			nama: "",
			alamat: "",
			action: "insert",
		});
	};

	getPegawai = () => {
		let url = "http://localhost:2910/pegawai";
		axios
			.get(url)
			.then((response) => {
				this.setState({ pegawai: response.data.pegawai });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	findPegawai = (event) => {
		let url = "http://localhost:2910/pegawai";
		if (event.keyCode === 13) {
			let form = {
				find: this.state.search,
			};
			axios
				.post(url, form)
				.then((response) => {
					this.setState({ pegawai: response.data.pegawai });
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	SavePegawai = (event) => {
		event.preventDefault();
		let url = "";
		if (this.state.action === "insert") {
			url = "http://localhost:2910/pegawai/save";
		} else {
			url = "http://localhost:2910/pegawai/update";
		}

		let form = {
			nip: this.state.nip,
			nama: this.state.nama,
			alamat: this.state.alamat,
		};

		axios
			.post(url, form)
			.then((response) => {
				this.getPegawai();
				this.handleCloseModal();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	Drop = (nip) => {
		let url = "http://localhost:2910/pegawai/" + nip;
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			axios
				.delete(url)
				.then((response) => {
					this.getPegawai();
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	componentDidMount() {
		this.getPegawai();
	}

	render() {
		return (
			<div className="m-3 card">
				<div className="card-header bg-info text-white">Data Pegawai</div>
				<div className="card-body">
					<input
						type="text"
						className="form-control mb-2"
						name="search"
						value={this.state.search}
						onChange={this.bind}
						onKeyUp={this.findPegawai}
						placeholder="Pencarian..."
					/>
					<table className="table">
						<thead>
							<tr>
								<th>NIP</th>
								<th>Nama</th>
								<th>Alamat</th>
								<th>Option</th>
							</tr>
						</thead>
						<tbody>
							{this.state.pegawai.map((item, index) => {
								return (
									<tr key={index}>
										<td>{item.nip}</td>
										<td>{item.nama}</td>
										<td>{item.alamat}</td>
										<td>
											<button
												className="btn btn-sm btn-info m-1"
												onClick={() =>
													this.setState({
														showModal: true,
														nip: item.nip,
														nama: item.nama,
														alamat: item.alamat,
														action: "update",
													})
												}
											>
												Edit
											</button>
											<button
												className="btn btn-sm btn-danger m-1"
												onClick={() => this.Drop(item.nip)}
											>
												Hapus
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<button className="btn btn-success" onClick={this.handleShowModal}>
						Tambah Data
					</button>
					<Modal show={this.state.showModal} onHide={this.handleCloseModal}>
						<Modal.Header closeButton>
							<Modal.Title>Form Pegawai</Modal.Title>
						</Modal.Header>
						<Form onSubmit={this.SavePegawai}>
							<Modal.Body>
								NIP
								<Form.Control
									type="number"
									name="nip"
									value={this.state.nip}
									onChange={this.bind}
									required
								/>
								Nama
								<Form.Control
									type="text"
									name="nama"
									value={this.state.nama}
									onChange={this.bind}
									required
								/>
								Alamat
								<Form.Control
									type="text"
									name="alamat"
									value={this.state.alamat}
									onChange={this.bind}
									required
								/>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={this.handleCloseModal}>
									Tutup
								</Button>
								<Button variant="primary" type="submit">
									Simpan
								</Button>
							</Modal.Footer>
						</Form>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Pegawai;