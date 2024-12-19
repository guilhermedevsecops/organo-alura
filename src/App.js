import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import fb from './assets/fb.png'
import ig from './assets/ig.png'
import logo from './assets/logo.png'
import tw from './assets/tw.png'
function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',

    },
    {
      nome: 'Frontend',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',

    },
    {
      nome: 'DataScience',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8C2',

    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7C8',

    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',

    },
    {
      nome: 'Mobille',
      corPrimaria: '#FFBAD5',
      corSecundaria: '#FFBAD5',

    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29',

    },
  ]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(times => times.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(times => <Time
        key={times.nome}
        nome={times.nome}
        corPrimaria={times.corPrimaria}
        corSecundaria={times.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)} />)}

      <div>
        <Rodape>
          <div className="logo">
            <img src={fb} />
            <img src={tw} />
            <img src={ig} />
          </div>
          <div className="organo-logo">
            <img src={logo} />
          </div>
          <p>Desenvolvido por Guilherme Curso Alura</p>
        </Rodape>


      </div>
    </div>


  );
}

export default App;
