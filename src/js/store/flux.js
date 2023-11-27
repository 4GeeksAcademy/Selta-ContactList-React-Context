const getState = ({ getStore, getActions, setStore }) => {
	

	return {
		
			store: {
			contacts: []
		},
		
		
		actions: {
			getAgenda: async () => {
				const response = await fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/selta-agenda");
				const jsonContact = await response.json ();
				setStore({contacts: jsonContact});
			},
			addContact: (contacts) => {
				const store = getStore();
				fetch ("https://playground.4geeks.com/apis/fake/contact/agenda"), {
					method: "POST",
					body: JSON.stringify ({
						full_name: contacts.full_name,
						email: contacts.email,
						agenda_slug: contacts.agenda_slug,
						address: contacts.address,
						phone: contacts.phone 
					})
				};
				const actions = getActions ();
				actions.getAgenda (); 
			}
			},
			
			//deleteContact:
		};
	};


export default getState;
