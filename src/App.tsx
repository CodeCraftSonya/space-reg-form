import './App.css'
import { RegisterForm } from './components/ui/form/RegisterForm'
import mountain from './images/mountain.jpg'

function App() {
  return (
      <div className="pageWrapper">
          <div className="contentWrapper">
              <div className="pageImageWrapper">
                  <img
                      src={mountain}
                      className="pageImage"
                      alt="Живописный горный пейзаж на фоне формы регистрации"
                  />
              </div>
              <main className="main">
                  <RegisterForm/>
              </main>
          </div>

      </div>
  )
}

export default App
