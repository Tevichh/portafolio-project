import "./mainInfoComponent.css"
export const MainInfoComponent = () => {
  return (
    <div className="mainInfoComponent container mt-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h2>¡Hola! Soy KODECHV</h2>
          <p className="lead">Desarrollador de software</p>
          <hr className="my-4" />
          <p>
            Desarrollo aplicaciones web con tecnologías modernas y de alta calidad.
            Me encanta aprender cosas nuevas y compartir conocimientos.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="tu-imagen.png" alt="Imagen de KODECHV" className="img-fluid" />
        </div>
      </div>
    </div>

  )
}
