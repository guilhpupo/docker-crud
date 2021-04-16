import * as S from './styles'
import ListItem from 'components/ListItem'
const List = () => (
  <S.Wrapper>
    <ListItem name="Banana" quantity={5} id={1} />
    <ListItem name="Banana" quantity={5} id={1} />
    <ListItem name="Banana" quantity={5} id={1} />
    <ListItem name="Banana" quantity={5} id={1} />
    <ListItem name="Banana" quantity={5} id={1} />
  </S.Wrapper>
)

export default List
