import './App.css'
import { RegisterForm } from './components/ui/form/RegisterForm'

function App() {
  return (
      <>
          <div className="page__wrapper">
              <div className="slider">
                  <button className="slider__prev">←</button>
                  <div className="page__image-wrapper">
                      <img src="desert.jpg" className="page__image" alt="Пустыня"/>
                  </div>
                  <button className="slider__next">→</button>
              </div>
              <div className="registration">
                  <h1 className="registration__title">Создайте аккаунт</h1>
                  <p className="registration__text">Уже есть аккаунт? <a className="registration__link"
                                                                         href="">Войти</a></p>
                  <RegisterForm/>
              </div>

          </div>
      </>
  )
}

export default App
