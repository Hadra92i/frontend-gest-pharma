import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddPharmacie = () => {
  const [nameFr, setNameFr] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [adressFr, setAdressFr] = useState("");
  const [adressAr, setAdressAr] = useState("");
  const [wilayaFr, setWilayaFr] = useState("");
  const [wilayaAr, setWilayaAr] = useState("");
  const [moughataaFr, setMoughataaFr] = useState("");
  const [moughataaAr, setMoughataaAr] = useState("");
  const [tel, setTel] = useState("");

  const addPharmacie = (e) => {
    e.preventDefault();
    // console.log(nameFr);
    // console.log(nameAr);
    // console.log(adressFr);
    // console.log(adressAr);
    // console.log(wilayaFr);
    // console.log(wilayaAr);
    // console.log(moughataaFr);
    // console.log(moughataaAr);
    // console.log(tel);

    setNameFr("");
    setNameAr("");
    setAdressFr("");
    setAdressAr("");
    setWilayaFr("");
    setWilayaAr("");
    setMoughataaFr("");
    setMoughataaAr("");
    setTel("");
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
                    value={nameFr}
                    onChange={(e) => setNameFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name_ar">اسم</label>
                  <input
                    type="text"
                    placeholder="أدخل اسم الصيدلية"
                    name="name_ar"
                    className="form-control my-2"
                    value={nameAr}
                    onChange={(e) => setNameAr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adress">Adresse</label>
                  <input
                    type="text"
                    placeholder="Saisir l'adresse de la pharmacie"
                    name="adress_fr"
                    className="form-control my-2"
                    value={adressFr}
                    onChange={(e) => setAdressFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="adress_ar">عنوان</label>
                  <input
                    type="text"
                    placeholder="أدخل عنوان الصيدلية"
                    name="adress_ar"
                    className="form-control my-2"
                    value={adressAr}
                    onChange={(e) => setAdressAr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wilaya_fr">Wilaya</label>
                  <input
                    type="text"
                    placeholder="Saisir la wilaya de la pharmacie"
                    name="wilaya_fr"
                    className="form-control my-2"
                    value={wilayaFr}
                    onChange={(e) => setWilayaFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wilaya_ar">الولايه</label>
                  <input
                    type="text"
                    placeholder="أدخل ولاية الصيدلية"
                    name="wilaya_ar"
                    className="form-control my-2"
                    value={wilayaAr}
                    onChange={(e) => setWilayaAr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="moughataa_fr">Moughataa</label>
                  <input
                    type="text"
                    placeholder="Saisir la moughataa de la pharmacie"
                    name="moughataa_fr"
                    className="form-control my-2"
                    value={moughataaFr}
                    onChange={(e) => setMoughataaFr(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="moughataa_ar">Moughataa</label>
                  <input
                    type="text"
                    placeholder="أدخل بلدية الصيدلية"
                    name="moughataa_ar"
                    className="form-control my-2"
                    value={moughataaAr}
                    onChange={(e) => setMoughataaAr(e.target.value)}
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
