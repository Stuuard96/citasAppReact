import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListadoPacientes } from './components/ListadoPacientes';

export const App = () => {
  let obtenerLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? [];

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    setPatients(obtenerLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

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
        <ListadoPacientes
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
};
