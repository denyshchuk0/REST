const initialState = {
  List: [],
  loading: true,
  Hero: {
    class: 0,
    defense: 0,
    hitPoints: 0,
    id: 0,
    intelligence: 0,
    name: "",
    strength: 0,
  },
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHARACTER_LOADED":
      return {
        loading: false,
        List: action.payload,
      };
    case "HERO_LOADED":
      return {
        loading: false,
        Hero: action.payload,
      };
    default:
      return state;
  }
};

export default CharacterReducer;
