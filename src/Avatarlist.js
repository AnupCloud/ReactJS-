import React from 'react';


const Avatarlist = (props) => {
    return (

        <div className="avatarstyle ma4 bg-light-purple dib pa4 grow shadow-4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
        <h1 className=""> {props.name} </h1>
        <p1> {props.work} </p1>
        </div>


    )



}
export default Avatarlist;