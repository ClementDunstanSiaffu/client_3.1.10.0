import { IMThemeVariables, css, SerializedStyles } from 'jimu-core'

export function getStyle (theme: IMThemeVariables): SerializedStyles {
  const bgColor = theme.surfaces[1].bg

  const inputBgColor = theme.colors.palette.primary[700]

  return css`
     overflow: auto;
    .widget-coordinate-conversion {
      min-width: 135px;
      padding: 15px 10px 10px 15px;
      background-color: ${bgColor};

      .input-container {
        background-color: ${inputBgColor};
        padding: 5px;
        border-radius: 2px;

        .jimu-widget-setting--row-label {
          font-weight: bold;
          color: var(--white) !important;
         }

        .actionButton {
          color: var(--primary-200);
          &:hover {
            color: var(--white);
          }
          &:disabled {
            color: var(--primary-400);
          }
        }

         .addBtn svg {
           color: ${inputBgColor};
         }
        }
      }

      .actionButton {
        margin: 2px 0px 0px 2px;
      }

      .actionButton:disabled{
        cursor: default;
      }

      .jimu-widget-setting--row-label {
        font-weight: bold;
      }
    }
  `
}

export function getInputContainerStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
  .add-button-row {
    position: relative;
    margin-top: 0 !important;
  }

  .addBtn {
    position: absolute;
    top: 8px;
    cursor: pointer;
    border-radius: 15px;
    margin: 0 auto !important;
    height: 28px;
    width: 28px;
    background-color: ${theme.colors.palette.light[100]};
    box-shadow: 0px 0px 2px 2px ${theme.border.color} !important;
    display: flex;
    align-items: center;
   }

   .addBtn svg {
     margin: 0 auto;
   }
  `
}

export function getOutputCoordsStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
  .outputSection {
    border-radius: 2px;
    padding: 5px;
    margin-top: 10px;
  }

  .format-label {
    width: 12.6rem;
  }

  .hidden {
    display: none;
  }

  .hidden-copy-outputCoords {
    opacity: 0.01;
    height: 0;
    position: absolute;
    z-index: -1;
  }

  .arrow-up {
    transform-origin: center center;
    transform: rotate(180deg);
    transition: transform .5s ease 0s;
  }

  .arrow-down {
    transform-origin: center center;
    transform: rotate(0deg);
    transition: transform .5s ease 0s;
  }

  .details-section-label {
    width: 50%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .details-section-text {
    width: 50%;
  }

  .details-section-text .input-wrapper {
    padding: 2px;
  }

  .outputSettingsCoordinateLabel {
    margin-top: 5px;
  }

  .outputSettingsFormatLabel {
    margin-bottom: 0px;
    font-weight: bold;
    word-wrap: break-word;
    width: calc(100% - 120px);
    min-width: 20px;
  }

  .outputSettingsAddressLabel {
    max-width: calc(100% - 60px);
  }

  .adjust-buttons {
    display: flex;
    flex-flow: row wrap;
  }

  .invalid-value {
    border: 1px solid ${theme.colors.danger};
    box-shadow: 0 0 5px ${theme.colors.danger};
  }
  `
}
