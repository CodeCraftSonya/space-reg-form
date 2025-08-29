import './App.css'
import { RegisterForm } from './components/ui/form/RegisterForm'

function App() {
  return (
      <div className="pageWrapper">
          <div className="contentWrapper">
              <div className="pageImageWrapper">
                  <img
                      src="/images/mountain.jpg"
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
