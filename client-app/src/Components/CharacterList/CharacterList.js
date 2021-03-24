import React from "react";
import { connect } from "react-redux";
import { CharacterLoaded } from "../../Actions/CharacterActions";

// ChatacterItem component
import CharacterItem from "./CharacterItem/CharacterItem";
import { useEffect } from "react";

// Include HOC 
import { WithApiService } from "../Hoc/with-api-service";

const CharacterList = ({ List, loading, CharacterLoaded, apiStoreService }) => {
    useEffect(() => {
        apiStoreService.getAllCharacters().then(allCharacters => {
            CharacterLoaded(allCharacters.data);
        })
    }, []);



    return (
        <div className="container">
            <div className="row">
             
                {List.map((item) => {
                    return (
                    <CharacterItem {...item} key={item.id} />
                    );
            
                })}
            </div>
        </div>
    )
}
const mapStateToProps = ({ CharacterReducer }) => {
    console.log("mapStateToProps ", CharacterReducer);
    
    const { List, loading } = CharacterReducer;
    return { List, loading }
}
const mapDispachToProps = {
    CharacterLoaded
}
export default WithApiService()(connect(mapStateToProps, mapDispachToProps)(CharacterList));