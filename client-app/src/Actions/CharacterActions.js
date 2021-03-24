export const CharacterLoaded = (characters) => {
    return {
        type: "CHARACTER_LOADED",
        payload: characters
    }
}