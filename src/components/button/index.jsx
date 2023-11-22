import {Container} from "./style"
import { FaRotate } from "react-icons/fa6"

export default function Button({icon : Icon, img, value, title, $loading = false, ...rest}){
  return (
    <Container $loading={$loading} {...rest}>
      {img && <img src={img} alt="Pedir um prato" />}
      {$loading ? <FaRotate /> : title}
      {Icon && <Icon />}
      {value && value}
    </Container>
  )
}