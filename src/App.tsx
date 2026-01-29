import Header from './components/Header'
import Footer from './components/Footer'
import ChangeLog from './components/ChangeLog'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <section className="hero">
          <h2>Bienvenue sur mon blog</h2>
          <p>Un espace pour partager mes idées et mes passions</p>
        </section>
        <ChangeLog />
      </main>
      <Footer />
    </div>
  )
}

export default App
