import React from 'react'

const Card = (props) => {
  return (
    <div className='card p-2 text-bg-info'>
    <h4>{props.title}</h4>
    <p>{props.desc}</p>
    <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.id)}}>Delete</button>
    </div>
  )
}

export default Card