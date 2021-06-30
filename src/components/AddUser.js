import { useState, useEffect } from 'react';


function AddUser(props)
{

	const [ User, setUser ] = useState({
		userID: Date.now(),
		reg_date: new Date().toISOString().slice(0, 10),
		last_activity: new Date().toISOString().slice(0, 10)
	});

	

	useEffect(() => {
		console.log(User);
	})

	const saveUser = (e) => {
		e.preventDefault();

		props.save({ ...User });
	}

	return (
		<>
		<h1>Add new user</h1>
		<form className="col4" onSubmit={ saveUser }>
			<div className="form_group">
				<label>
					User ID:
					<input type="text" className="form_input" defaultValue={ Date.now() } onChange={ (e) => setUser({ ...User, userID: e.target.value })}  />
				</label>
			</div>
			<div className="form_group">
				<label>
					Date Registration:
					<input type="date" className="form_input" defaultValue={ new Date().toISOString().slice(0, 10) } onChange={ (e) => setUser({ ...User, reg_date: e.target.value })} />
				</label>
			</div>
			<div className="form_group">
				<label>
					Date Last Activity:
					<input type="date" className="form_input" defaultValue={ new Date().toISOString().slice(0, 10) } onChange={ (e) => setUser({ ...User, last_activity: e.target.value })} />
				</label>
			</div>
			<div className="form_group">
				<button className="btn btn_blue">Save</button>
			</div>
		</form>
		</>
	)
}

export default AddUser;