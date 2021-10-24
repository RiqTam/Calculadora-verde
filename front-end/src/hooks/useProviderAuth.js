import { useState } from "react";
import api from "../api/api";

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
	const setPoints =(points) =>{
		setUser({...user, points});
	}

	const signin = (user, callback) => {
        api("user/login", "POST", user)
		.then(res => {
			console.log(res.data);
			setUser(res.data);
			callback();
		})
        .catch((error) =>{
			console.log(error);
        });
		/*setUser("dfa");
		callback();*/
	};

	const signout = callback => {
		setUser(null);
		callback();
	};

	const request = async (url, method, data )=> await api(url, method, data, user.token);

	return {
		user,
		setPoints,
		signin,
		signout,
		request
	};
}
