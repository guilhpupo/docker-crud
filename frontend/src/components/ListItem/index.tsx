import * as S from './styles'
import Button from 'components/Button'
import { Trash, Edit } from '@styled-icons/entypo'

export type ListItemProps = {
  id: number
  name: string
  quantity: number
}
const ListItem = ({ id, name, quantity }: ListItemProps) => (
  <S.Wrapper>
    <S.Info>{name}</S.Info>
    <S.Info>{quantity}</S.Info>
    <S.Buttons>
      <Button size="small" icon={<Edit />} invertColors />
      <Button size="small" icon={<Trash />} invertColors />
    </S.Buttons>
  </S.Wrapper>
)

export default ListItem
