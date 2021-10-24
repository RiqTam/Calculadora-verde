import { useContext } from 'react'
import LoginContext from '../context/AuthContext';

export default function useAuth() {
	return useContext(LoginContext); 
}
