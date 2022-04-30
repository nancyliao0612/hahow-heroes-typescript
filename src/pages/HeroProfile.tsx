import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Loading from "../components/Loading";
import { HeroAbility } from "../models/herocard";
import { HeroId } from "../models/herocard";

function HeroProfile() {
  const { heroId } = useParams<HeroId>();
  const [profile, setProfile] = useState<string | HeroAbility>("");
  const [remainPoint, setRemainPoint] = useState(0);
  const [isPointChanged, setIsPointChanged] = useState(false);
  const [loading, setLoading] = useState(false);

  const url = `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`;

  const fetchSingleHero = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const heroData = response.data;
      setProfile(heroData);
      console.log(heroData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleHero();
    setRemainPoint(0);
  }, [heroId]);

  if (loading) {
    return <Loading />;
  }

  // Increase single hero's point
  function addPoints(e: React.ChangeEvent<HTMLInputElement>) {
    let { name } = e.target;
    let { point } = e.target.dataset;
    if (remainPoint !== 0) {
      setProfile((prevPoint) => ({
        ...(prevPoint as HeroAbility),
        [name]: Number(point) + 1,
      }));
      setRemainPoint((prevRemainPoint) => prevRemainPoint - 1);
      setIsPointChanged(true);
    }
  }

  // Decrease single hero's point
  function minusPoints(e: React.ChangeEvent<HTMLInputElement>) {
    let { name } = e.target;
    let { point } = e.target.dataset;
    if (Number(point) > 0) {
      setProfile((prevPoint) => {
        return { ...(prevPoint as HeroAbility), [name]: Number(point) - 1 };
      });
      setRemainPoint((prevRemainPoint) => prevRemainPoint + 1);
      setIsPointChanged(true);
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.patch(url, profile, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsPointChanged(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSave(e)}>
        {Object.keys(profile).map((key, index) => {
          const value = profile[key as keyof typeof profile];
          return (
            <div key={index}>
              <span>{key}</span>
              <button
                type="button"
                onClick={(e: any) => addPoints(e)}
                name={key}
                data-point={value}
                disabled={remainPoint === 0 ? true : false}
              >
                +
              </button>
              <span>{value}</span>
              <button
                type="button"
                onClick={(e: any) => minusPoints(e)}
                name={key}
                data-point={value}
                disabled={value === 0 ? true : false}
              >
                -
              </button>
            </div>
          );
        })}
        <section>
          <p>剩餘點數：{remainPoint}</p>
          <button
            className="submit-btn"
            disabled={!isPointChanged ? true : remainPoint === 0 ? false : true}
          >
            儲存
          </button>
        </section>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  // border: solid 1px;
  margin-top: 2rem;
  padding: 2rem 3rem;
  font-size: 1.8rem;
  background-color: var(--clr-primary-3);
  position: relative;

  div {
    margin-bottom: 2rem;
  }

  span {
    display: inline-block;
    text-align: center;
  }

  span:nth-child(1) {
    margin-right: 3rem;
    width: 3rem;
  }

  span:last-of-type {
    width: 3rem;
  }

  button:nth-child(n) {
    border-style: none;
    border-radius: 0.5rem;
    font-size: 2.4rem;
    color: var(--clr-primary-1);
    background: white;
    margin: 0 2rem;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
  }

  section {
    position: absolute;
    // border: solid 1px;
    bottom: 3rem;
    right: 3rem;
  }

  section p {
    margin-bottom: 1rem;
  }

  section .submit-btn {
    font-size: 2rem;
    margin: 0;
    width: 20rem;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 55%;
  }
`;

export default HeroProfile;
