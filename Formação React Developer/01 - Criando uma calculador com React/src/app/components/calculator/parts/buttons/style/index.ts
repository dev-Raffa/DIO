import { buttonWrap } from "../../../../../../components/buttons/types"
import { rowProps } from "../../../../../../components/row/types"
import { textProps } from "../../../../../../components/typography/types"


const rows: rowProps = {

}

const buttonWrap: buttonWrap = {
  height: '5rem',
  width: '5rem',
  color: 'black',
  border: '1px solid white',
  borderradius: '10%'
}

const buttonsText: textProps = {
  color: 'white',
  size: '4rem',
  weight: '500'
}

export const style = {
  rows: rows,
  buttons: {
    wrap: buttonWrap,
    text: buttonsText
  }
}
