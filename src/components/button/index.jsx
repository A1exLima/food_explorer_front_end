import {Container} from "./style"

export default function Button({title, ...rest}){
  return(
    <Container{...rest}>
    {title}
    </Container>
  )
}