import { css, keyframes } from "@emotion/core"
import { SYSTEM_FONT_STACK } from "./theme"

const rcToolTipZoomIn = keyframes`
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
`

const rcToolTipZoomOut = keyframes`
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(0, 0);
  }
`

const tooltipStyles = css`
  .rc-tooltip.rc-tooltip-zoom-enter,
  .rc-tooltip.rc-tooltip-zoom-leave {
    display: block;
  }
  .rc-tooltip-zoom-enter,
  .rc-tooltip-zoom-appear {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    animation-play-state: paused;
  }
  .rc-tooltip-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
    animation-play-state: paused;
  }
  .rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,
  .rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {
    animation-name: ${rcToolTipZoomIn};
    animation-play-state: running;
  }
  .rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {
    animation-name: ${rcToolTipZoomOut};
    animation-play-state: running;
  }

  .rc-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    font-family: ${SYSTEM_FONT_STACK};
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1.5;
    opacity: 1;
    user-select: none;
  }
  .rc-tooltip-hidden {
    display: none;
  }
  .rc-tooltip-placement-top,
  .rc-tooltip-placement-topLeft,
  .rc-tooltip-placement-topRight {
    padding: 5px 0 9px 0;
  }
  .rc-tooltip-placement-right,
  .rc-tooltip-placement-rightTop,
  .rc-tooltip-placement-rightBottom {
    padding: 0 5px 0 9px;
  }
  .rc-tooltip-placement-bottom,
  .rc-tooltip-placement-bottomLeft,
  .rc-tooltip-placement-bottomRight {
    padding: 9px 0 5px 0;
  }
  .rc-tooltip-placement-left,
  .rc-tooltip-placement-leftTop,
  .rc-tooltip-placement-leftBottom {
    padding: 0 9px 0 5px;
  }
  .rc-tooltip-inner {
    padding: 0.75rem 1rem;
    color: #fff;
    text-align: left;
    text-decoration: none;
    background-color: #111111;
    border-radius: 6px;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  }
  .rc-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow,
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    bottom: 4px;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #111111;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    right: 15%;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow,
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow,
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    left: 4px;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #111111;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow,
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow,
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    right: 4px;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #111111;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    top: 4px;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #111111;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    right: 15%;
  }
`

export default tooltipStyles