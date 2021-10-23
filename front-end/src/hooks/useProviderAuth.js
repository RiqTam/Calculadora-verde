import { useState } from "react";

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

	const signin = callback => {
		fetch("http://3.142.153.208:8080/api/user/login",{
			method: "POST",
			body : JSON.stringify({
				phone:'5541744839',
				password:'abdiel123'
			})
		}).then((res)=>{ res.json() }).then((response)=>{
			
			
			console.log(response)
		
		}).catch((error)=>{
			console.error(error);
		})
		return fakeAuth.signin(() => {
			setUser("user");
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
