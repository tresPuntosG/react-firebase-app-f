import { useNavigate } from 'react-router-dom'
import {useAuth} from '../context/authContext'

export function Home() {
  const {user, logout, loading} = useAuth()
  //console.log(user);
  const navigate = useNavigate()
  const handleLogout = async () => {
      await logout();
      navigate('/login');
  }

  if (loading) return <h1>loading...</h1>

  return (
    <div>
      <h1>Wellcome {user.email}</h1>
      <button onClick={handleLogout}>
        Salir
      </button>
    </div>
  )
}
