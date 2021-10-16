import { GlobalStyle } from './style-guide/GlobalStyle'
import * as S from './styles'
import { PokemonList } from './Provider/PokeProvider'
import React, { useRef } from 'react';

const App = () => {
  const scollToRef: any = useRef();
  
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Header>
          <S.Poke />
          <p> 
            Aqui está a sua pokedex!
          </p>
          <S.Link onClick={() => scollToRef.current.scrollIntoView({behavior: "smooth"})}>↓</S.Link>
        </S.Header>
        <div ref={scollToRef}>
          <S.Container>
            <PokemonList />
          </S.Container>
        </div>
      </S.Container>
    </>
  )
}

export default App
