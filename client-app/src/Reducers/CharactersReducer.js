const initialState = {
    List: [],
    loading: true
}

const CharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHARACTER_LOADED":
            return {
                loading: false,
                List: action.payload
            }
        default: return state;
    }
}

export default CharacterReducer;