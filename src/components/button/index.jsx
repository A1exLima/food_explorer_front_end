import {Container} from "./style"

export default function Button({icon : Icon, img, value, title, ...rest}){
  return (
    <Container {...rest}>
      {img && <img src={img} alt="Pedir um prato" />}
      {title}
      {Icon && <Icon />}
      {value && value}
    </Container>
  )
}