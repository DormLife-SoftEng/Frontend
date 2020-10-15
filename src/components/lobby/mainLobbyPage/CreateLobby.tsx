import React  from "react";

interface CreateLobbyProps {
    handleRouting : (s : string) => void
}

const CreateLobby =  (props : CreateLobbyProps) => {
    const {handleRouting} = props
    return (
        <div>
            <button onClick={()=> {
                handleRouting("/lobby/create")
            }}>Create Lobby</button>
        </div>
    )
}
export default CreateLobby