import React from "react";

type cardProps = {
    pk:number;
    universidad:string;
    name:string;
    logo:string;
    pub_date:string;
}

export const CardComponent: React.FC<cardProps> = ({pk, universidad, name, logo, pub_date}) => {
    return (
        <div className="card">
            <h1>pk:{pk}</h1>
            <h1>Universidad:{universidad}</h1>
            <h1>Nombre:{name}</h1>
            <img src={logo} alt="logo" width="250px" />
            <h1>pub_date:{pub_date}</h1>
        </div>
    );
}