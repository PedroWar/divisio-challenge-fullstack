import * as S from '../styles'
import { gql, useQuery } from '@apollo/client';

const GET_POKEMONS = gql`
  query {pokemons{
    id
    name
  }}
`

export function PokemonList() {
    const { loading, error, data } = useQuery(GET_POKEMONS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    let pokeList = [];
    pokeList = data.pokemons;

    return pokeList.map((pokemon : any) =>
        <S.row key={pokemon.id} >
          <S.cell>
            <S.id>{pokemon.id}</S.id> 
            <S.name>{pokemon.name}</S.name>
          </S.cell>
        </S.row>
    );
  }

  export function PokemonDetail() {
    const { loading, error, data } = useQuery(GET_POKEMONS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    let pokeList = [];
    pokeList = data.pokemons;

    return pokeList.map((pokemon : any) =>
        <S.row key={pokemon.id} >
          <S.cell>
            <S.id>{pokemon.id}</S.id> 
            <S.name>{pokemon.name}</S.name>
          </S.cell>
        </S.row>
    );
  }