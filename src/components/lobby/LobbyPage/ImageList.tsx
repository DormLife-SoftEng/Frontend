import React, { useEffect, useState } from "react";
import Image from "./Image"
import ImageOwner from "./ImageOwner";
import { ImagesListProps } from "../../type"

const ImageList = (props : ImagesListProps) => {

    const {member,maxMember,isOwner,handleKick} = props
    const [space ,setSpace] = useState<number[]>([])
    const remainPerson = maxMember  - member.length
    const temps : number[] = []
    const handleRemain = () => {

        for (let i = 0 ; i < remainPerson ; i++) {
            temps.push(i)
        }
        setSpace(temps)
    } 
    useEffect(()=> {
        handleRemain()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[member])
    return (
        <div>
            {isOwner ? 
            <>
                {member.map((user : any,index : number) => <ImageOwner handleKick={handleKick} attr={user} key={index} index={index} />)}
            </> 
            : 
            <>
                {member.map((user : any,index : number) => <Image attr={user} key={index} index={index} />)}
            </>
            }
            {space.map((temp,index) => <img alt="" key={index} style={{margin:"2%",border:"10px solid #000",width:"200px",height:"200px"}} />
            )}

        </div>
    )
}
export default ImageList;