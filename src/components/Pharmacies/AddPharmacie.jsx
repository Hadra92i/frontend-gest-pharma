import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../App";
import Swal from "sweetalert2";

const AddPharmacie = () => {
  const [name_fr, setNameFr] = useState("");
  const [adress_fr, setAdressFr] = useState("");
  const [wilaya, setWilayaFr] = useState("");
  const [moughataa, setMoughataaFr] = useState("");
  const [tel, setTel] = useState("");
  const [longt, setLongt] = useState("");
  const [lati, setAlt] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const addPharmacie = async (e) => {
    e.preventDefault();
    const data = {
      name_fr,
      adress_fr,
      wilaya,
      moughataa,
      tel,
      longt,
      lati,
    };
    const response = await axios.post(`${API_URL}/pharmacies`, data);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Pharmacie ajoutée avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      setNameFr("");
      setAdressFr("");
      setWilayaFr("");
      setMoughataaFr("");
      setTel("");
      navigate("/");
    } else setError(true);
  };

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card mt-5">
            <div className="card-header bg-primary text-white">
              <h5>Ajouter une nouvelle pharmacie</h5>
            </div>
            <div className="card-body">
              <form onSubmit={addPharmacie}>
                <div className="form-group">
                  <label htmlFor="name_fr">Nom</label>
                  <input
                    type="text"
                    placeholder="Saisir le nom de la pharmacie"
                    name="name_fr"
                    className="form-control my-2"
                    value={name_fr}
                    onChange={(e) => setNameFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adress_fr">Adresse</label>
                  <input
                    type="text"
                    placeholder="Saisir l'adresse de la pharmacie"
                    name="adress_fr"
                    className="form-control my-2"
                    value={adress_fr}
                    onChange={(e) => setAdressFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wilaya">Wilaya</label>
                  <input
                    type="text"
                    placeholder="Saisir la wilaya de la pharmacie"
                    name="wilaya"
                    className="form-control my-2"
                    value={wilaya}
                    onChange={(e) => setWilayaFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="moughataa">Moughataa</label>
                  <input
                    type="text"
                    placeholder="Saisir la moughataa de la pharmacie"
                    name="moughataa"
                    className="form-control my-2"
                    value={moughataa}
                    onChange={(e) => setMoughataaFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tel">Téléphone</label>
                  <input
                    type="text"
                    placeholder="Saisir le numéro de téléphone de la pharmacie"
                    name="tel"
                    className="form-control my-2"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="longt">Longitude</label>
                  <input
                    type="text"
                    placeholder="Saisir la Longitude"
                    name="longt"
                    className="form-control my-2"
                    value={longt}
                    onChange={(e) => setLongt(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lati">Altitude</label>
                  <input
                    type="text"
                    placeholder="Saisir l'altitude"
                    name="lati"
                    className="form-control my-2"
                    value={lati}
                    onChange={(e) => setAlt(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Ajouter</button>
                  <Link to="/" className="ms-2">
                    <button className="btn btn-success">
                      Liste des pharmacies
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
};

export default AddPharmacie;
