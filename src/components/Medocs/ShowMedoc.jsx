import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../App";

const ShowMedoc = () => {
  const [medocsData, setMedocDatas] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getMedocById() {
      const id = params.id;
      const response = await axios.get(`${API_URL}/medocs/${id}`);
      if (response.status === 200) {
        const datas = response.data;
        setMedocDatas(datas);
      } else console.log("Error lors du fetch des données");
    }
    getMedocById();
  }, []);
  
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Details du Medoc
            </div>
            <div className="card-body">
              <h5 className="card-title fs-5 fw-bold">
                Nom : {medocsData.name}
              </h5>
              <p className="card-text fs-5 fw-bold">
                Forme du dosage : {medocsData.forme_dosage}
              </p>
              <p className="card-text fs-5 fw-bold">PP : {medocsData.pp} </p>
            </div>
            <div className="card-footer">
              <Link to="/medocs" className="ms-2">
                <button className="btn btn-success">Liste des medocs</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMedoc;
