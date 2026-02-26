import './App.css'
import imagen from './assets/img/mente-creativa.png'

function App() {

  return (
    <>
      <div className='contenedor-saludo'>
        <h1>Bienvenid@ a To-Do</h1>
        <img src={imagen} alt='Logo app' className='imagenLogo'/>
      </div>

      <h2>Autores: Pablo Herrero, Javier Monzón, Sofía Lacal</h2>
      
      <div className="contenedor-principal">
        <p>
          Entra al enlace para acceder a las diferentes listas
        </p>
        <div className='contenedor-enlaces'>
          <a className='enlace'href="">Compra</a>
          <a className='enlace' href="">Tareas</a>
          <a className='enlace' href="">Citas</a>
        </div>
      </div>
    </>
  )
}

export default App
