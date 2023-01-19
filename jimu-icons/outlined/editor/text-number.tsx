import { React, classNames } from 'jimu-core'
import { type SVGComponentProps } from 'jimu-ui'
import src from '../../svg/outlined/editor/text-number.svg'
import srcRTL from '../../svg/outlined/editor/text-number--rtl.svg'

export const TextNumberOutlined = (props: SVGComponentProps) => {
  const SVG = window.SVG
  const { className, ...others } = props

  const classes = classNames('jimu-icon jimu-icon-component has-rtl-svg', className)
  if (!SVG) return <svg className={classes} {...others as any} />
  return <SVG className={classes} src={src} srcRTL={srcRTL} {...others} />
}
