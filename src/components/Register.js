import {useState} from 'react';
import {useAuth}  from '../context/authContext';
import {useNavigate} from "react-router-dom";

export function Register() {

  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  const {signUp} = useAuth()
  const navigate = useNavigate() 
  const [error, setError] = useState();

  // funcion que actualiza el estado
  const handleChange = ({target: {name, value}}) => {
    // console.log(name, value)
    setuser({...user, [name]: value});

  }

  // funcion que permite ver el estado
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      
      await signUp(user.email, user.password);
      navigate('/');

    } catch (error) {
      console.log(error.code)
      //if (error.code === 'auth/invalid-email') {setError('Email inválido')}
      setError(error.message);
    }
  };

  return (
    <div>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="tuemail@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button>Registro</button>


      </form>
    </div>


  )
}
