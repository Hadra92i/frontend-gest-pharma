import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../App";
import axios from "axios";

const ListPharamices = () => {
  const [listPharmacies, setListPharmacies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getAllPharmacies() {
      const response = await axios.get(`${API_URL}/pharmacies`);
      if (response.status === 200) {
        const datas = response.data;
        setListPharmacies(datas);
      } else setError(true);
    }
    getAllPharmacies();
  }, []);

  return (
    <div className="container pt-3">
      <div className="card mt-5">
        <div className="card-header bg-primary text-white d-flex align-items-center justify-content-between">
          <h5>Liste des Pharmacies</h5>
          <Link to="/add-new-pharmacie" className="btn btn-success">
            Ajouter une pharmacie
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Adresse</th>
                <th scope="col">Téléphone</th>
                <th scope="col">Longitude</th>
                <th scope="col">Altitude</th>
                <th scope="col">wilaya</th>
                <th scope="col">Moughataa</th>
              </tr>
            </thead>
            <tbody>
              {!error ? (
                listPharmacies.map((pharmacie) => {
                  return (
                    <tr key={pharmacie._id}>
                      <td>{pharmacie.name_fr}</td>
                      <td>{pharmacie.adress_fr}</td>
                      <td>{pharmacie.tel}</td>
                      <td>{pharmacie.longt}</td>
                      <td>{pharmacie.lati}</td>
                      <td>{pharmacie.wilaya}</td>
                      <td>{pharmacie.moughataa}</td>
                    </tr>
                  );
                })
              ) : (
                <h4 className="text-center">
                  Erreur lors du chargement des données
                </h4>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListPharamices;
