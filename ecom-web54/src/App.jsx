import './App.css'
import NavBar from './components/nav'
import './components/styles.css'

function App() {

  return (
    <div className='AppContainer'>
      <div>
        <NavBar />
      </div>
      <div className='home-title'>Welcome to the Tech Sale!</div>

      <div className='home-body'>
        <div className='CTA Btn'>Online Shop</div>
        <div className='CTA Btn'>In-Person Brochure</div>
      </div>


    </div>
  )
}

export default App
