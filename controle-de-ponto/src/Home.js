import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './template/Header'
import SideMenu from './template/SideMenu'

class Home extends Component{

    render(){
        return(
            <div className="Full">
                <Header/>
                <SideMenu />
           </div>
        );
    }
}

export default Home