import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row } from "reactstrap";
import CharacterCard from './CharacterCard';

export default function SearchForm() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Rick and Morty characters", response);
        setCharacter(characters);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="characters">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="character">
        <Container>
          <Row>
            {character.map(card => {
              return (
                <CharacterCard
                  key={card.created}
                  name={card.name}
                  gender={card.gender}
                  species={card.species}
                  origin={card.origin}
                  status={card.status}
                />
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}