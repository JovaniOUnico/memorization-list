import React from "react";

const App = () => {
  return (<div>
            <div>
              <h1>Qual a capital do país</h1>
              <h2>Memorize a lista fazendo exercícios</h2>
            </div>

            <div>
              Cronometro: 30s
            </div>

            <div>
              <div>
                <span>Albania</span> :
              </div>
              <div>
                <input placeholder="tente adivinhar o nome da capital"/>
                <button>Verificar</button>
                <div>
                  O nome certo era: Capital correta aparece aqui
                </div>
              </div>

            </div>
          </div>)
}

export default App;