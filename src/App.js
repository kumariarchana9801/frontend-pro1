
import { Route, Router, Routes } from 'react-router';
import './App.css';
import Dashboardpage from './Pages/Dashboard/Dashboard';
import TicketListpage from './Pages/Ticketlist/TicketListpage';
import Entrypage from './Pages/entry/Entrypage';
import Addticket from './Pages/newticket/Addticket';
import Ticketpage from './Pages/ticket/Ticketpage';
import Logout from './Pages/logout/Logout';
import Passwordreset from './Component/password/Passwordreset';
import Login from './Component/login/Login';
import Register from './Pages/register/Register';



function App() {
  return (
    <>
    <div className="App">
        <Routes>
        <Route path='/'element={<Entrypage/>}/>  
       <Route path='/dashboard' element={<Dashboardpage/>}/> 
       <Route path='/add-ticket' element={<Addticket/>}/> 
       <Route path='/ticket' element={<TicketListpage/> }/> 
       <Route path='/ticket/:id' element={<Ticketpage/>}/> 
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/pass' element={<Passwordreset/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
      

     </Routes> 
        
     
      
    </div>
    </>
  );
}

export default App;
