import { Content } from './components/Atoms/Content';
import { Title } from './components/Atoms/Title';

function App() {
  return (
    <>
      <Title title="Testando o titulo" />
      <div className="card">
        <Content text="Testando texto que no futuro deverá ser HTML!!!"/>
      </div>
    </>
  )
}

export default App
