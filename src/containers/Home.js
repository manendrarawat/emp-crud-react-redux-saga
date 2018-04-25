import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestApiData, deleteUser } from "../actions";

class Home extends Component{

    componentDidMount(){
        this.props.requestApiData();
    }

    render(){
        console.log('Home Component Props >>>>>>>>>>',this.props)
        if(!this.props.data.length === 0){
            return <h1>Loading.....</h1>
        }
        return (

            <div>
                <div className="row" >
                    <div className="col-12 text-center">
                    <h1>Employee  Management</h1>
                    </div>
                </div>
                
                <div className="row heading">
                            <div className="col-md-1">#</div>
                            <div className="col-md-1">Id</div>
                            <div className="col-md-2">Name</div>
                            <div className="col-md-3">Email</div>
                            <div className="col-md-1">Gender</div>
                            <div className="col-md-2">Salary</div>
                            <div className="col-md-2">Delete</div>
                </div>

                {
                this.props.data.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div className="row col-margin" data-toggle="collapse" data-target={`#${user.id}-collapse`}>
                            <div className="col-md-1 col-sm-1"><input type="checkbox" name="" value="" /></div>
                            <div className="col-md-1 col-sm-1">{user.id}</div>
                            <div className="col-md-2 col-sm-2">{user.name}</div>
                            <div className="col-md-3 col-sm-3">{user.email}</div>
                            <div className="col-md-1 col-sm-1">{user.gender}</div>
                            <div className="col-md-2 col-sm-2">{ (user.salary[0].basic + user.salary[0].allowance) - user.salary[0].deduction }
                            </div>
                            <div className="col-2">
                                <button type="button" 
                                        onClick={ () => {this.modalDeleteShow(user.id)}}
                                        className="btn btn-primary row_button"
                                        >Delete
                                </button>
                            </div>
                        </div>
                        <div id={`${user.id}-collapse`} className="row collapse cell row_class">
                            <div className="col-4">
                               <label className="col-for-label">Basic Salary : </label>
                                <input type="text" 
                                name="basic_salary" 
                                value={user.salary[0].basic}
                                onChange={(e) => {console.log(e.target.value)}}
                                placeholder="Basic Salary" />
                            </div>
                            <div className="col-4">
                            <label className="col-for-label">Allowance : </label>
                                <input type="text" 
                                name="allowance" 
                                value={user.salary[0].allowance}
                                onChange={(e) => {console.log(e.target.value)}}
                                placeholder="Allowance" />
                            </div>
                            <div className="col-4">
                            <label className="col-for-label">Deduction : </label>
                                <input type="text" 
                                name="deduction" 
                                value={user.salary[0].deduction} 
                                onChange={(e) => {console.log(e.target.value)}}
                                placeholder="deduction" />
                            </div>
                        </div>
                    </div>	
                    )
                    
                })

               
            }

                
            </div>
        );
    }

    modalDeleteShow(userId){
        let newUsersList;
        console.log('modalDeleteShow------------', this.props.data)
        newUsersList = this.props.data.filter((user)=>{
            return user.id !== userId
        })

        console.log('modalDeleteShow', newUsersList);
        this.props.deleteUser({
            type: 'DELETE_USER',
            userlist: newUsersList
        })
    }
}

function mapStateToProps(state){
    return {
        data : state.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({requestApiData, deleteUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);