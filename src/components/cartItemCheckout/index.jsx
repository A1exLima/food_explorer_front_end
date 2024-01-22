import { useEffect, useState } from "react"
import { Container } from "./style"

import { BiSolidLike } from "react-icons/bi"

export default function CartItem({ data, ...rest }) {
  const [cursorValue, setCursorValue] = useState(false)

  useEffect(() => {
    if (!data.count) {
      setCursorValue(true)
    } else {
      setCursorValue(false)
    }
  }, [data])

  return (
    <Container $cursorValue={cursorValue} {...rest}>
      <div>
        <div>
          {data.count ? <p>{data.count}</p> : null}
          <img src={data.image} alt={`Imagem do prato: ${data.name}`} />
        </div>
        <div>
          <h2>{data.name}</h2>
          <span>{data.category}</span>
          {data.count ? (
            <p>{`R$ ${data.price.toFixed(2).replace(".", ",")}`}</p>
          ) : null}
        </div>
      </div>
      {data.count ? (
        <p className="price-total">{`R$${(data.price * data.count)
          .toFixed(2)
          .replace(".", ",")}`}</p>
      ) : data.amount ? (
        <div className="like">
          <BiSolidLike />
          <p className="price">{data.amount}</p>
        </div>
      ) : (
        <p className="price">{`R$${data.price
          .toFixed(2)
          .replace(".", ",")}`}</p>
      )}
    </Container>
  )
}
