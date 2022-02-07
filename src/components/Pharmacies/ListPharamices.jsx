import React from "react";
import { Link } from "react-router-dom";

const ListPharamices = () => {
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
                <th scope="col">اسم</th>
                <th scope="col">Adresse</th>
                <th scope="col">عنوان</th>
                <th scope="col">Téléphone</th>
                <th scope="col">هاتف</th>
                <th scope="col">wilaya</th>
                <th scope="col">الولايه</th>
                <th scope="col">Moughataa</th>
                <th scope="col">بلدية</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {pharmacies.map((pharmacie) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListPharamices;
