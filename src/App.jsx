import { useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListadoPacientes } from './components/ListadoPacientes';

export const App = () => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <div className="container mx-auto pt-10">
      <Header />
      <div className="my-12 md:flex">
        <Formulario
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListadoPacientes patients={patients} setPatient={setPatient} />
      </div>
    </div>
  );
};
