import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { API_URL } from "../../App";

const EditMedoc = () => {
  const [name, setName] = useState("");
  const [forme_dosage, setFormeDosage] = useState("");
  const [pp, setPp] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function getMedocById() {
      const id = params.id;
      const response = await axios.get(`${API_URL}/medocs/${id}`);
      if (response.status === 200) {
        const datas = response.data;
        setName(datas.name);
        setFormeDosage(datas.forme_dosage);
        setPp(datas.pp);
      } else console.log("Error lors du fetch des données");
    }
    getMedocById();
  }, []);

  const editMedoc = async (e) => {
    e.preventDefault();
    const id = params.id;
    const data = {
      name,
      forme_dosage,
      pp,
    };
    const response = await axios.put(`${API_URL}/medocs/${id}`, data);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Medoc ajouté avec succès",
        showConfirmButton: false,
        timer: 2000,
      });
      setName("");
      setFormeDosage("");
      setPp("");
      navigate("/medocs");
    } else console.log("Erreur lors du fetch des données");
  };
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
                    value={name}
                    // onChange={(e) => handlInput(e.target.value)}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="forme_dosage">Forme Dosage</label>
                  <input
                    type="text"
                    name="forme_dosage"
                    className="form-control my-2"
                    value={forme_dosage}
                    onChange={(e) => setFormeDosage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pp">Forme Dosage</label>
                  <input
                    type="text"
                    name="pp"
                    className="form-control my-2"
                    value={pp}
                    onChange={(e) => setPp(e.target.value)}
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
};

export default EditMedoc;
