import { GlobalStyle } from './style-guide/GlobalStyle'
import * as S from './styles'
import { PokemonList } from './Provider/PokeProvider'
const App = () => (
  <>
    <GlobalStyle />
    <S.Container>
      <S.Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <S.Link>Learn React</S.Link>
      </S.Header>
      <PokemonList />
    </S.Container>
  </>
)

export default App
