import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../App";
import Swal from "sweetalert2";

const ListMedocs = () => {
  const [listMedocs, setListMedocs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getAllMedocs() {
      const response = await axios.get(`${API_URL}/medocs`);
      if (response.status === 200) {
        const datas = response.data;
        setListMedocs(datas);
      } else setError(true);
    }
    getAllMedocs();
  }, [listMedocs]);

  const deleteMedoc = async (id) => {
    const response = await axios.delete(`${API_URL}/medocs/${id}`);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Medoc supprimé avec succès",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div className="container pt-3">
      <div className="card mt-5">
        <div className="card-header bg-primary text-white">
          <h5>Liste des Medocs</h5>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Forme dosage</th>
                <th scope="col">PP</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!error ? (
                listMedocs.map((medoc) => {
                  return (
                    <tr key={medoc._id}>
                      <td>{medoc.name}</td>
                      <td>{medoc.forme_dosage}</td>
                      <td>{medoc.pp}</td>
                      <td>
                        <Link
                          to={`/medocs/show/${medoc._id}`}
                          className="btn btn-info me-2"
                        >
                          Voir Plus de details
                        </Link>
                        <Link
                          to={`/medocs/edit/${medoc._id}`}
                          className="btn btn-success me-2"
                        >
                          Editer
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteMedoc(medoc._id)}
                        >
                          Supprimer
                        </button>
                      </td>
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

export default ListMedocs;
