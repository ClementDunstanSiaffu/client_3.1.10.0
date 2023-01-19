import { Immutable, ImmutableObject } from 'jimu-core'
import { BorderStyle, NormalLineType } from 'jimu-ui'

export interface SidebarControllerStyle {
  style: React.CSSProperties
}

export interface ColorDef {
  useTheme?: boolean
  color?: string
  opacity?: number
}

export interface ToggleBtnColor {
  normal: {
    icon: ColorDef
    bg: ColorDef
  }
  hover?: {
    icon?: ColorDef
    bg?: ColorDef
  }
}

export interface SidebarConfig {
  direction: SidebarType
  collapseSide: CollapseSides
  overlay: boolean
  size: string
  resizable: boolean
  toggleBtn: {
    visible: boolean
    icon: ICON_TYPE
    iconSource?: number
    template?: string
    offsetX?: number
    offsetY?: number
    position?: SidebarControllerPositions
    color: ToggleBtnColor
    border: BorderStyle
    iconSize: number
    width: number
    height: number
    expandStyle?: SidebarControllerStyle // style for the expand button
    collapseStyle?: SidebarControllerStyle // style for the collapse button
  }
  defaultState: number
  divider: {
    visible: boolean
    lineStyle?: BorderStyle
  }
  firstPanelStyle?: any
  secondPanelStyle?: any
}

export type IMSidebarConfig = ImmutableObject<SidebarConfig>

export enum CollapseSides {
  First = 'FIRST',
  Second = 'SECOND',
}

export enum SidebarControllerPositions {
  Start = 'START',
  Center = 'CENTER',
  End = 'END',
}

export enum SidebarType {
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL',
}

export enum ICON_TYPE {
  Left = 'LEFT',
  Right = 'RIGHT',
  Up = 'UP',
  Down = 'DOWN',
}

export const defaultConfig: IMSidebarConfig = Immutable({
  direction: SidebarType.Horizontal,
  collapseSide: CollapseSides.First,
  overlay: false,
  size: '300px',
  divider: {
    visible: true,
    lineStyle: {
      type: NormalLineType.SOLID,
      color: 'var(--light-500)',
      width: '1px'
    }
  },
  resizable: false,
  toggleBtn: {
    visible: true,
    icon: ICON_TYPE.Left,
    iconSource: 0,
    offsetX: 15,
    offsetY: 0,
    position: SidebarControllerPositions.Center,
    iconSize: 14,
    width: 15,
    height: 60,
    border: {
      type: NormalLineType.SOLID,
      color: 'var(--light-500)',
      width: '1px'
    },
    color: {
      normal: {
        icon: {
          useTheme: false,
          color: 'var(--black)'
        },
        bg: {
          useTheme: true,
          color: 'var(--light)'
        }
      },
      hover: {
        bg: {
          useTheme: true,
          color: 'var(--light)'
        }
      }
    },
    expandStyle: {
      style: {
        borderRadius: '0 92px 92px 0'
      }
    },
    collapseStyle: {
      style: {
        borderRadius: '0 92px 92px 0'
      }
    }
  },
  defaultState: 1
})
