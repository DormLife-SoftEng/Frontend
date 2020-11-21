import React , {useState} from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { SearchLobbyProps } from "../../type";



const SearchBar = (props : SearchLobbyProps) => {
    const {handleSubmit} = props
    const [search, setSearch] = useState<string>("");
    const handleChange =  (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
    }
    return (
        
        <InputGroup >
            <FormControl
            onChange={handleChange}
            value={search}
            placeholder="Search"
            />
            <InputGroup.Append>
            <Button variant="light" onClick={() => {
                handleSubmit(search)
            }} >Search</Button>
            </InputGroup.Append>
        </InputGroup>
    
    );
};
export default SearchBar
