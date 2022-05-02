import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeroCardType } from "../models/herocard";

const HeroCard = (props: HeroCardType) => {
  const { id, name, image, highLight, highLightCard } = props;

  return (
    <Wrapper>
      <Link
        to={`/heroes/${id}`}
        onClick={() => highLightCard(id)}
        className={highLight === id ? "selected" : ""}
      >
        <div>
          <img src={image} alt={image} />
        </div>
        <h3>{name}</h3>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;

  a {
    display: block;
    background-color: var(--clr-primary-3);
    box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    border: solid 1px #ddd;
    padding: 1.5rem;
    height: 100%;
    width: 100%;
  }
  a:hover {
    color: var(--clr-primary-1);
    img {
      filter: saturate(0.95);
      transform: scale(1.1);
      transition: all 0.25s ease;
    }
  }
  div {
    overflow: hidden;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 70%;
  }
  img {
    width: 100%;
    object-fit: cover;
    filter: saturate(0.6);
  }
  h3 {
    text-align: center;
    height: 30%;
    padding: 2rem 0;
    font-size: 1.8rem;
  }
  .selected {
    :hover {
      color: var(--clr-primary-3);
    }
    color: var(--clr-primary-3);
    background: linear-gradient(to top, #414345, #232526);
    img {
      filter: saturate(0.95);
    }
  }
  .disabled {
    opacity: 30%;
    pointer-events: none;
  }
`;

export default HeroCard;
