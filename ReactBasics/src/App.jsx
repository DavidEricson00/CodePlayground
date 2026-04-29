import './App.css'
import Blog from './components/Blog'
import CartaoVisita from './components/CartaoVisita'
import PerfilUsuario from './components/PerfilUsuario'
import Produto from './components/Produto'
import StatusPedido from './components/StatusPedido'

function App() {

  return (
    <main className="page">
      <section className="card-grid">
        <CartaoVisita />
        <StatusPedido situacao="Enviado" />
        <Produto
          nome="McChicken"
          categoria="Hamburguer"
          preco={15}
        />
        <PerfilUsuario />
      </section>

      <section className="card card-wide">
        <div className="section-title">
          <p className="eyebrow">Noticias</p>
          <h2>Blog rapido</h2>
        </div>
        <Blog />
      </section>
    </main>
  )
}

export default App
