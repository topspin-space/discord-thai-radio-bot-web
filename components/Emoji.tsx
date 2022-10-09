import Link from 'next/link'
import { HTMLAttributes } from "react"


interface Props extends HTMLAttributes<string>{
  symbol: string,
  label: string,
  href?: string
}


function Emoji (props: Props) {

  if (props.href) {
    return (
      <Link href={props.href}>
        <span
          className={`emoji ${props.className}`}
          role="img"
          aria-label={props.label ? props.label : ''}
          aria-hidden={props.label ? "false" : "true"}
        >
          {props.symbol}
        </span>
      </Link>
    )
  }
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