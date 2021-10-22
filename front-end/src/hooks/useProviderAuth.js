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
