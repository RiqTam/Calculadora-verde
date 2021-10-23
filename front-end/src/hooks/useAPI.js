import axios from "axios";
import { useState } from "react";

const useAPI = ({url, method, data})=>{
	const [response, setResponse] = useState();
	const baseURL = "http://3.142.153.208:8080/api";

	const petition = async ()=> 
		await axios({ 
			url: baseURL.concat(url),
			data,
			method,
		})
		.then(res => {
			console.log(res);
			setResponse(res.data);
		});

	return{
		petition,
		response
	}
}

export default useAPI;