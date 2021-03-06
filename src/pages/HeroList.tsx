import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import HeroProfile from "./HeroProfile";
import { HeroListType } from "../models/herocard";

function HeroList() {
  const [heroList, setHeroList] = useState([]);
  const [isHeroClicked, setIsHeroClicked] = useState(false);
  const [highLight, setHighLight] = useState("");

  const getHeroes = async () => {
    const url = "https://hahow-recruit.herokuapp.com/heroes";
    try {
      const response = await axios(url);
      const heroes = response.data;
      setHeroList(heroes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  function highLightCard(id: string) {
    setHighLight(id);
    setIsHeroClicked(true);
    console.log(id);
  }

  const herocard = heroList.map((hero: HeroListType) => {
    return (
      <HeroCard
        {...hero}
        key={hero.id}
        highLight={highLight}
        highLightCard={highLightCard}
      />
    );
  });

  return (
    <>
      <Wrapper>{herocard}</Wrapper>
      {isHeroClicked && (
        <Switch>
          <Route path={`/heroes/:heroId`}>
            <HeroProfile />
          </Route>
        </Switch>
      )}
    </>
  );
}

const Wrapper = styled.section`
  margin-top: 5rem;
  padding: 1.5rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 25rem;
  padding: 0 27rem;

  @media screen and (max-width: 768px) {
    padding: 0 10%;
  }
`;

export default HeroList;
