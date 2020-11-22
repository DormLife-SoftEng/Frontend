import React, { useEffect, useState } from "react";
import DormCarousel from "./DormCarousel";
import DormSuggest from "./DormSuggest";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import SearchBar from "./SearchBar";
import "./style.css";
import generalService from "../../services/general.service";
import DormList from "./DormList";

function Home() {
  console.log(process.env.REACT_APP_BACKEND_BASE_URL);
  const [search, setSearch] = useState<boolean>(true);
  const [dorms, setDorms] = useState<any[]>([]);
  const [carousalDorm, setCarousalDorm] = useState<any[]>([]);
  const [suggestDorm, setSuggestDorm] = useState<any[]>([]);

  const getAllDorms = async () => {
    const result = (await generalService.getDorms()) as any[];
    setCarousalDorm(result.slice(0, 2));
    setSuggestDorm(result.slice(2, result.length));
  };

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    getAllDorms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Navbar2 />
      <SearchBar setDorms={setDorms} setSearch={setSearch} />
      {search ? (
        <>
          <DormList />
        </>
      ) : (
        <>
          <DormCarousel dorms={carousalDorm} />
          <DormSuggest dorms={suggestDorm} />
        </>
      )}
    </div>
  );
}
export default Home;
