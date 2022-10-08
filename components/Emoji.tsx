import { HTMLAttributes } from "react"


interface Props extends HTMLAttributes<string>{
  symbol: string,
  label: string
}

function Emoji (props: Props) {
  return (
    <span
      className={`emoji ${props.className}`}
      role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )
}

export default Emoji