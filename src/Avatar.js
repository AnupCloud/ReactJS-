import React, { Component } from 'react';
import './Avatar.css';
import Avatarlist from'./Avatarlist';
import 'tachyons';







class Avatar extends Component{
    

    
    constructor(){
        super();
        this.state = {
            name: "Welcome to Avatar World"
        }
    }


    namechange(){
        this.setState ({
            name: "Subscribe to my website"

        })
    }
    
    
    
    render(){

        
    const avatarlistarray = [
        {
            id:1,
            name:"Anup",
            work: "Python Developer"
    
        },
        {
            id:2,
            name:"Arun",
            work: "Angular Developer"
    
        },
        {
            id:3,
            name:"Anjana",
            work: "Java Developer"
    
        },
        {
            id:4,
            name:"Vishnu",
            work: "AWS Developer"
    
        }

    ]

    const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
        return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />



    })




        return(
            <div className="mainpage">
                <h1> {this.state.name}</h1>
                    {arrayavatarcard}
                <button onClick= { () => this.namechange() }> Subscribe </button>

            </div>
            )
    }

}

   

   

    





export default Avatar;