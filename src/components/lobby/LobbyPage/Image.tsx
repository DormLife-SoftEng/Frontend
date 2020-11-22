import React from "react"
import dog from "../../pic/finder_silver_2.jpg"
import cat from "../../pic/finder_silver_1.jpg"
import catp from "../../pic/finder_silver_1p.jpg"
import dogp from "../../pic/finder_silver_2p.jpg"
import mon from "../../pic/finder_silver_3.jpg"
import monp from "../../pic/finder_silver_3p.jpg"
import { useParams } from "react-router-dom"
import { ImagesProps } from "../../type"
import {useAuth , authContextType} from "../../../contexts/auth.context"

const Image = (props : ImagesProps) =>  {
    const {authToken,setAuthToken} : authContextType = useAuth()
    const AllImage = [dog,cat,mon,dogp,catp,monp]
    const {attr,index} = props
    return (
        <>
        {authToken && 
        <>
        {index === 0 ? 
            <>
                {(attr.user.userId === authToken.userId) ? (
                    <img alt="" style={{margin:"2%",border:"10px solid #8cd3ff",width:"200px" ,height:"200px"}} src={AllImage[attr.user.PictureProfile]} />)
                    : 
                    (<img alt="" style={{margin:"2%",border:"10px solid #FFF",width:"200px" ,height:"200px"}} src={AllImage[attr.user.PictureProfile] } /> )  
        }
            </> 
        : 
            <>
                {(attr.user.userId === authToken.userId) ? (
                    <img alt="" style={{margin:"2%",border:"10px solid #8cd3ff",width:"200px" ,height:"200px"}} src={attr.ready ? AllImage[attr.user.PictureProfile + 3] : AllImage[attr.user.PictureProfile]} />)
                    : 
                    (<img alt="" style={{margin:"2%",border:"10px solid #FFF",width:"200px" ,height:"200px"}} src={attr.ready ? AllImage[attr.user.PictureProfile+ 3] : AllImage[attr.user.PictureProfile] } /> )  }
            </>
        }
        </>
        }
        </>
    )
}
export default Image;
