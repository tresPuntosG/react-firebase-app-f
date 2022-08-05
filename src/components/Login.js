import {useState} from 'react';
import {useAuth}  from '../context/authContext';
import {useNavigate} from "react-router-dom";

export function Login() {

  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  const {login} = useAuth()
  const navigate = useNavigate() 
  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) => {
    setuser({...user, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      //console.log(error.code)
      setError(error.message);
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

        <button>Ingresa</button>


      </form>
    </div>


  )
}
