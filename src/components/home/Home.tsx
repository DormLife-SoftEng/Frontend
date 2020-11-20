import React, { useEffect, useState } from "react"
import DormCarousel from "./DormCarousel"
import DormSuggest from "./DormSuggest"
import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"
import SearchBar from "./SearchBar"
import { propsDorm } from "./type"
import "./style.css"
import dormownerService from "../../services/dormowner.service"
import generalService from "../../services/general.service"

function Home() {

    const [dorm,setDorm] = useState<any[]>([])
    const [carousalDorm,setCarousalDorm] = useState<any[]>([])
    const [suggestDorm,setSuggestDorm] = useState<any[]>([])

    const getAllDorms = async () => {
        const result = await generalService.getDorms() as any[]
        setDorm(result)
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
            <SearchBar />
            <DormCarousel dorms={carousalDorm}/>
            <DormSuggest dorms={suggestDorm} />
        </div>
    )
}
export default Home;