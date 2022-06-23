import { useState } from 'react';
import './App.css';
import { Admin } from './components/admin/admin';
import { Client } from './components/client/Client';
import logo from './components/images/logo.png';

function App() {
  const [scale, setScale] = useState('');
  function navigateToClient() {
    setScale('client');
  }
  function navigateToAdmin() {
    setScale('admin');
  }
  return (<>
    <div className='container-fluid Login' style={{
      display: scale != '' ? 'none' : 'flex'
    }}>
      <div><img src={logo} alt="Couv_Logo_Toky_Trans" /></div>
      <div className='grpbtn'>
        <button className='btn btn-success btnlog' onClick={navigateToClient}>Client</button>
        <button className='btn btn-success btnlog' onClick={navigateToAdmin}>Admin</button></div>
    </div>
    {scale === 'client' ? <Client /> : null}
    {scale === 'admin' ? <Admin /> : null}
  </>

  );
}

export default App;
