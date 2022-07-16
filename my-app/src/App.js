import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import OrderConfirmed from './components/OrderConfirmed';
import Product from './components/Product';
import Feature from './components/Feature';
import New from './components/New';
import Users from './components/Users';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/order-confirm" element={<OrderConfirmed/>}/>
        <Route path="product" element={<Product/>}>
          <Route path="feature" element={<Feature/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="/user/:userId" element={<Users/>}/>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
