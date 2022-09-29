export const Paciente = ({ patient, setPatient }) => {
  const { name, owner, email, date, symptoms } = patient;

  const handleDelete = () => {};

  return (
    <div className="mb-3 bg-white shadow-md px-5 py-6 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between flex-col sm:flex-row gap-3 mt-6">
        <button
          type="button"
          onClick={() => setPatient(patient)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
