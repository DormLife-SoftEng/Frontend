import React, { useEffect, useState } from "react"
import DormCarousel from "./DormCarousel"
import DormSuggest from "./DormSuggest"
import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"
import SearchBar from "./SearchBar"
import "./style.css"
import generalService from "../../services/general.service"
import DormList from "./DormList"
import { dorm } from "../newType"

function Home() {

    const [search,setSearch] = useState<boolean>(false)
    const [dorms,setDorms] = useState<dorm[]>([])
    const [carousalDorm,setCarousalDorm] = useState<any[]>([])
    const [suggestDorm,setSuggestDorm] = useState<any[]>([])

    const getAllDorms = async () => {
        const result = await generalService.getDorms() as dorm[]
        console.log(result)
        setCarousalDorm(result.slice(0,2))
        setSuggestDorm(result.slice(2,result.length))
    }

    useEffect(()=> {
        document.body.style.backgroundColor="white"
        getAllDorms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div style={{textAlign:"center"}}>
            <Navbar />
            <Navbar2 />
            <SearchBar setDorms={setDorms} setSearch={setSearch} />
            {search ? 
            <>
                <DormList dorms={dorms} />
            </> 
            : 
            <>
                <DormCarousel dorms={carousalDorm}/>
                <DormSuggest dorms={suggestDorm} />
            </>
            }
        </div>
    )
}
export default Home;