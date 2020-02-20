import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import baseService from './core/baseService';
=======
import api from './services/api';
>>>>>>> 131e3e3518432ac943d11bbcf879b4707e7cecc7

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

<<<<<<< HEAD
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
=======
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
>>>>>>> 131e3e3518432ac943d11bbcf879b4707e7cecc7

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function getDevs() {
      const response = await baseService.get('/devs');
      setDevs(response.data);
    }
    getDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await baseService.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;