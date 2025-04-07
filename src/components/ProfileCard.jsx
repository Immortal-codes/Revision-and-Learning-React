import React from 'react'

const ProfileCard = (props) => {
    return (
        <>
            <div><h1>{props.name}</h1>
                <h2>{props.role}</h2>
                <h3>{props.Bio}</h3>
            </div>


        </>

    )
}

export default ProfileCard