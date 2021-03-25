export const CharacterLoaded = (characters) => {
  return {
    type: "CHARACTER_LOADED",
    payload: characters,
  };
};

export const OneHeroLoaded = (hero) => {
  return {
    type: "HERO_LOADED",
    payload: hero,
  };
};
