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
    setError('')
    // console.log(user);
    try {
      
      await signUp(user.email, user.password);
      navigate('/');

    } catch (error) {
      console.log(error.code)
      //if (error.code === "auth/weak-password") {setError("Password mal")}
      //console.log(error.message)
      //console.log(error)
      setError(error.code);
    }
  };

  return (
    <div>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="tuemail@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder='******'
          onChange={handleChange}
        />

        <button>Registro</button>


      </form>
    </div>


  )
}
