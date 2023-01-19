import { React, classNames } from 'jimu-core'
import { SidePopper, SidePopperProps } from 'jimu-ui/advanced/setting-components'
import { LabelTooltip } from './label-tooltip'

interface SidePopperTooltipProps extends Omit<SidePopperProps, 'title'> {
  title: string
  tooltip: string
}

export const SidePopperTooltip = (props: SidePopperTooltipProps): React.ReactElement => {
  const { className, title, tooltip, ...others } = props

  const Title = React.useMemo(() => {
    if (tooltip) {
      return <LabelTooltip label={title} tooltip={tooltip} showArrow/>
    } else {
      return title
    }
  }, [title, tooltip])

  return (<SidePopper className={classNames('side-popper-info', className)} title={Title} {...others} />)
}
