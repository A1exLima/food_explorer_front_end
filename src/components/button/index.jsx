import {Container} from "./style"

export default function Button({icon : Icon, value, title, ...rest}){
  return (
    <Container {...rest}>
      {title}
      {Icon && <Icon/>}
      {value && value}
    </Container>
  )
}