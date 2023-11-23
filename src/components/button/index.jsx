import {Container} from "./style"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Button({icon : Icon, img, value, title, $loading = false, ...rest}){
  return (
    <Container $loading={$loading} {...rest}>
      {img && <img src={img} alt="Pedir um prato" />}
      {$loading ? <AiOutlineLoading3Quarters /> : title}
      {Icon && <Icon />}
      {value && value}
    </Container>
  )
}