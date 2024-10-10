import React from 'react'

interface Tprop{
    Name:string;
    Rollno:number;
    day:string
}

const Card = (prop:Tprop) => {
  return (
    <div>
        <h1>Name:{prop.Name}</h1>
        <h1>Rollno:{prop.Rollno}</h1>
        <h1>Day:{prop.day}</h1>
    </div>
  )
}

export default Card