import { Container } from "./style"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function includeButton({ title, $loading = false, ...rest }) {
  return (
    <Container $loading={$loading} {...rest}>
      {$loading ? <AiOutlineLoading3Quarters /> : <p>{title}</p>}
    </Container>
  )
}
