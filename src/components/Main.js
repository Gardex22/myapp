import { useState, useEffect } from 'react';
import AddUser from './AddUser';
import Table from './Table';

function Main()
{

	const [ Data, setData ] = useState([]);

	useEffect(() => {
		console.log(Data);
	})

	const saveUser = (user) => {
		setData([ ...Data, user ]);
	}



	return (
		 <main>
          <div className="container">
			<AddUser save={ saveUser } />     

			<Table data={ Data } />       
          </div>
        </main>
	)
}

export default Main;