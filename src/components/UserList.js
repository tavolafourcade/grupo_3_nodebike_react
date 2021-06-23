import React, {Component} from 'react';
let userList = [];
class UserList extends Component{
    
	constructor(props){
        super(props)
        this.state = {
            users:[],
			done: false
        }
    }

	apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

	componentDidMount(){
		userList = []
		this.apiCall('users/usersapi', this.cargarUsuarios)
	}

	cargarUsuarios = (data) => {
		data.users.forEach(user => {
			this.apiCall('users/'+user.id, this.detalleUsuario)
		})
		this.setState({users:userList})
	}

	detalleUsuario = (data) => {
		let userPush = data
		userList.push(userPush)
		this.setState({done:true})
	}


	render(){
		return(
			<React.Fragment>
						{/*<!-- USER LIST -->*/}
						
						
						<br></br>
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h1 className="h3 mb-2 text-gray-800">All users in the Database</h1>
                        	</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Nombres</th>
												<th>Apellidos</th>
												<th>Email</th>
											</tr>
										</thead>
										
										<tbody>
										{
                    						this.state.users.map((user,index)=>{
                        						return  <tr key={index}>
															<td>{user.id}</td>
															<td>{user.first_name}</td>
															<td>{user.last_name}</td>
															<td>{user.email}</td>
												</tr>
                    						})
                						}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}
	
}
export default UserList;