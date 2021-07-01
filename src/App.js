
import { ResetGeral } from './ResetGeral'
import FormularioCadastro from './Components/FormularioDecadasto/FomularioCadastro';
import Validacoes from './Contexts/validacao';


function App() {

  
  return (
    <div className="App">
      <ResetGeral/>
      <Validacoes.Provider>
        <FormularioCadastro/>
      </Validacoes.Provider>
    </div>
  );
}

export default App;
