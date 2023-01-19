import { React, classNames } from 'jimu-core'
import { type SVGComponentProps } from 'jimu-ui'
import src from '../../svg/filled/data/printing.svg'

export const PrintingFilled = (props: SVGComponentProps) => {
  const SVG = window.SVG
  const { className, ...others } = props

  const classes = classNames('jimu-icon jimu-icon-component', className)
  if (!SVG) return <svg className={classes} {...others as any} />
  return <SVG className={classes} src={src} {...others} />
}
