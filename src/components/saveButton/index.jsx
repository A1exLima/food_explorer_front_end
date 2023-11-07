import {Container} from "./style"

export default function includeButton({title, ...rest}){
  return(
    <Container {...rest}>
    {title}
    </Container>
  )
}