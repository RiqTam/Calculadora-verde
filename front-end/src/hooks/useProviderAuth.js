import { useState } from "react";
import axios from 'axios';

export default function useProviderAuth() {
	const [user, setUser] = useState(null);
	

	const fakeAuth = {
		isAuthenticated: false,
		signin(callback) {
			fakeAuth.isAuthenticated = true;
			setTimeout(callback, 100); // fake async
		},
		signout(callback) {
			fakeAuth.isAuthenticated = false;
			setTimeout(callback, 100);
		}
	};

	const signin = (user, callback) => {
		const url ="http://3.142.153.208:8080/api/user/login" 
		return axios({ 
			url,
			data: user,
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		})
		.then(res => {
			console.log(res);
			setUser(res.data);
			callback();
		});
	};

	const signout = callback => {
		return fakeAuth.signout(() => {
			setUser(null);
			callback();
		});
	};

	return {
		user,
		signin,
		signout
	};
}
