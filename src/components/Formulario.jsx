import { useEffect, useState } from 'react';
import { Error } from './Error';

function obtenerId() {
  const random = Math.random().toString(36).slice(2);
  const fecha = new Date().getTime().toString(36);
  return random + fecha;
}

function obtenerFecha() {
  const date = new Date();
  const day = `${date.getDate()}`.padStart(2, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

const initialForm = {
  name: '',
  owner: '',
  email: '',
  date: obtenerFecha(),
  symptoms: '',
};

export const Formulario = ({ patients, setPatients, patient, setPatient }) => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState(initialForm);
  const { name, owner, email, date, symptoms } = form;

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setForm(patient);
      return;
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, date, symptoms].includes('')) {
      setError(true);
      return;
    }

    if (patient.id) {
      // Actualizar
      form.id = patient.id;
      setPatients(
        patients.map((patientCurrent) =>
          patientCurrent.id === patient.id ? form : patientCurrent
        )
      );
      setPatient({});
    } else {
      // Registrar
      form.id = obtenerId();
      setPatients([...patients, form]);
    }

    setError(false);
    setForm(initialForm);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 md:mb-0 mb-10">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      <p className="text-lg font-semibold mt-5 text-center mb-10">
        Añade Pacientes y{' '}
        <span className="text-indigo-600 font-bold ">administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Nombre de la mascota"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Nombre del propietario"
            name="owner"
            value={owner}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Email contacto del propietario"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="date"
            value={date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Describe los síntomas"
            name="symptoms"
            value={symptoms}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-colors outline-none focus:outline-none"
          value={patient.id ? 'Editar paciente' : 'Registrar paciente'}
        />
      </form>
    </div>
  );
};
