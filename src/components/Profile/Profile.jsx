import React from 'react'

const Profile = ({profession,fullName,bio}) => {
  const handleName =e=>{
    e.preventDefault();
    alert (`${fullName}`)
  }
 
  return (
    <div style={{color:"blue"}}>
      <button onClick={handleName}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
      </button>
        <h1>fullName :{fullName}</h1>
        <h1>bio :{bio}</h1>
        <h1>profession :{profession}</h1>
    </div>
  )
}

export default Profile