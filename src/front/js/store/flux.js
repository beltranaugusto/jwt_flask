const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: localStorage.getItem("token") || null,
      		user_id: localStorage.getItem("user_id") || null,
      		email: localStorage.getItem("email") || null,
		},
		actions: {

			createUser: async (formData) => {
				console.log(formData)
				return fetch("http://127.0.0.1:3001/api/sign_up", {
					method: "POST",
					body: JSON.stringify(formData),
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(async (response) => {
					const data = await response.json();
					if(data.message == 'Form incomplete.'){
						return false
					} else {
						return true
					}
				})
			
			},

			logIn: async (formData) => {

				return fetch("http://127.0.0.1:3001/api/login", {
					method: "POST",
					body: JSON.stringify(formData),
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then(async (response) => {
					const data = await response.json();
					console.log(data)
					localStorage.setItem("token", data.token);
					setStore({ token: data.token });
					localStorage.setItem("user_id", data.user_id);
					setStore({ user_id: data.user_id });
					localStorage.setItem("email", data.email);
					setStore({ email: data.email });
					if(data.error == 'Bad credentials'){
						return false
					} else {
						return true
					}
				})
			},

			logout: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("user_id");
				localStorage.removeItem("email");
				setStore({ token: null, user_id: null, email: null });
			  },

		}
	}
};

export default getState;
