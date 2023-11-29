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
			addContact: async (contacts) => {
				const newContact = {
					"full_name": contacts.full_name,
					"email": contacts.email,
					"agenda_slug": contacts.agenda_slug,
					"address": contacts.address,
					"phone": contacts.phone
				};
				const store = getStore();
				
				await fetch ("https://playground.4geeks.com/apis/fake/contact/agenda"), {
					method: "POST",
					headers: {"Content-Type": "application/json"},
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
				setStore ({contacts:[...store.contacts, newContact] });
			}
			},
			
			//deleteContact:
		};
	};


export default getState;
