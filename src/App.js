import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListMedocs from './components/Medocs/ListMedocs';
import EditMedoc from './components/Medocs/EditMedoc';
import ListPharamices from './components/Pharmacies/ListPharamices';
import AddPharmacie from './components/Pharmacies/AddPharmacie';
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<ListPharamices />} />
          <Route path='/add-new-pharmacie' element={<AddPharmacie />} />
          <Route path='/medocs' element={<ListMedocs />} />
          <Route path='/medocs/:id' element={<EditMedoc />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
