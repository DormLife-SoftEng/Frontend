import  { createContext, useContext } from "react"
import { addRoomFormValue } from "../components/dormown/newType"
export interface roomContextType  {
    allRoom : addRoomFormValue[],
    setAllRoom : React.Dispatch<React.SetStateAction<addRoomFormValue[]>>
}
export const RoomContext = createContext<roomContextType | any>({})
export function useRoom() {
    return useContext(RoomContext)
}