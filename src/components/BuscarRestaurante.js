import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { listarRestaurantes } from "../service/restaurantesService";

export const BuscarRestaurante = () => {
  const [valoresFormulario, setValoresFormulario] = useState({});
  const { nombre = "" } = valoresFormulario;
  const [resultado, setResultados] = useState([]);
  const [buscar, setBuscar] = useState([]);

  const handleOnChange = (e) => {
    setValoresFormulario({
      ...valoresFormulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getResultados();
  }, []);

  const getResultados = async () => {
    try {
      Swal.fire({ allowOutsideClick: false, text: "Cargando..." });
      Swal.showLoading();
      const restaurantessFirebase = await listarRestaurantes();
      setResultados(restaurantessFirebase);
      Swal.close();
    } catch (error) {
      Swal.close();
      console.log(error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setBuscar(
      resultado.filter((restaurante) =>
        restaurante.nombre.toUpperCase().includes(nombre.toUpperCase())
      )
    );
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col">
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Nombre Restaurante</label>
              <input
                required
                type="text"
                name="nombre"
                value={nombre}
                className="form-control"
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {buscar.map((restaurante) => {
              return (
                <div className="col" key={restaurante.id}>
                  <div className="card">
                    <img
                      src={restaurante.imagen}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{restaurante.nombre}</h5>
                      <p className="card-text">{restaurante.direccion}</p>
                      <p className="card-text">{restaurante.descripcion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
