import styled from 'styled-components'
import pokedex from './logo.svg' 

export const Container = styled.div`
  text-align: center;
  font-family:verdana;
  background-color: #282c34;
`

export const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Link = styled.a.attrs({
})`
  color: #61dafb;
`

export const Poke = styled.img.attrs({
  src: pokedex,
  alt: 'Pokedex'
})`
  height: 40vmin;
  pointer-events: none;
`
export const row = styled.div`
background-color: #D3D3D3;
  border: 2px solid black;
  border-radius: 25px; 
  padding: 10px;
  display: flex;
  width: 50vw;
  margin-left: 25vw;
  height: 70px;
`
export const cell = styled.div`
  padding: 0 10px 20px;
  display: flex;
`

export const id = styled.div`
  font-size: 2.5em;
  padding: 10px;
`

export const name = styled.div`
  font-size: 1.875em;
  padding: 20px 10px 10px;
`