import { Paciente } from './Paciente';

export const ListadoPacientes = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      {patients.length !== 0 ? (
        <>
          <h2 className="font-black text-center text-3xl">
            Listado de Pacientes
          </h2>
          <p className="text-lg font-semibold mt-5 text-center mb-10">
            Administra tus{' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen md:overflow-y-auto">
            {patients.map((patient) => (
              <Paciente
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-lg font-semibold mt-5 text-center mb-10">
            Comienza agregando pacientes{' '}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
