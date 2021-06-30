function Table(props)
{
	return (
		<>
			<div className="table col6">
				<div className="t_row fx">
					<div className="cell col2">
						<strong>User ID</strong>
					</div>
					<div className="cell col4">
						<strong>Date Registration</strong>
					</div>
					<div className="cell col4">
						<strong>Date Last Activity</strong>
					</div>

				</div>
				
				{ props.data.map((elem, index) => (
					<div className="t_row fx" key={ index } >
						<div className="cell col2">
							<p>{ elem.userID }</p>
						</div>
						<div className="cell col4">
							<p>{ elem.reg_date }</p>
						</div>
						<div className="cell col4">
							<p>{ elem.last_activity }</p>
						</div>

					</div>

				))}

				


			</div>


		</>
	)
}

export default Table;