import React, { Component } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default class EditMedocc extends Component {
  state = {
    name: "",
    forme_dosage: "",
    pp: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {}

  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card mt-5">
              <div className="card-header bg-primary text-white">
                <h5>Editer un medoc</h5>
              </div>
              <div className="card-body">
                <form onSubmit={editMedoc}>
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control my-2"
                      value={medocDatas.name}
                      onChange={(e) => handlInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="forme_dosage">Forme Dosage</label>
                    <input
                      type="text"
                      name="forme_dosage"
                      className="form-control my-2"
                      value={medocDatas.forme_dosage}
                      onChange={(e) => handlInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pp">Forme Dosage</label>
                    <input
                      type="text"
                      name="pp"
                      className="form-control my-2"
                      value={medocDatas.pp}
                      onChange={(e) => handlInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Editer</button>
                    <Link to="/medocs" className="ms-2">
                      <button className="btn btn-success">
                        Liste des medocs
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
