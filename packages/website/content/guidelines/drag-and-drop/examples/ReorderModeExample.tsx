/**
 * Reorder mode: the Experiences sidebar (icon rail + Experiences menu) with folder reordering.
 *
 * Standalone React component; it only needs `react` and `react-dom`. Styles, icons (Forma 36 /
 * Phosphor paths) and the Geist font import are included, so it renders the same anywhere.
 *
 * Behaviour:
 * - "Reorder folders" in a folder's menu starts reorder mode with that folder picked up and focused.
 * - Keyboard: Enter or Space on a drag handle picks a folder up or drops it; ArrowUp / ArrowDown move a
 *   picked-up folder; moving focus away drops it; Escape or "Save order" ends reorder mode.
 * - Mouse: drag a folder within its section. A blue line marks where it will land (before the hovered
 *   folder, or after the last one), and the section shows a dashed outline only while dragging.
 *   The dragged copy is lifted: white at 70%, 6px corners, default shadow.
 * - "Reset order" appears once the order differs from when reorder mode started and restores it.
 * - In reorder mode, only the drag handles and the mode buttons are tab stops; every change is
 *   announced to screen readers, and focus returns to the folder you were on when the mode ends.
 */
import React, { useEffect, useRef, useState, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

const ICONS = {
  buildingBlock: 'M243.58,72.84,197.29,49.7C191.54,39.24,177.21,32,160,32c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53l-19.52,9.76A53.69,53.69,0,0,0,80,72c-22.43,0-40,12.3-40,28a20.77,20.77,0,0,0,1.06,6.53L12.42,120.84A8,8,0,0,0,8,128v64a8,8,0,0,0,4.42,7.16l64,32a8,8,0,0,0,7.16,0l160-80A8,8,0,0,0,248,144V80A8,8,0,0,0,243.58,72.84ZM80,151.06,33.89,128,51,119.45c7.24,5.29,17.48,8.55,29,8.55,22.43,0,40-12.3,40-28a21.77,21.77,0,0,0-4.35-12.88L131,79.45c7.24,5.29,17.48,8.55,29,8.55,18.38,0,33.49-8.26,38.35-19.88L222.11,80ZM160,48c13.74,0,24,6.34,24,12s-10.26,12-24,12-24-6.34-24-12S146.26,48,160,48ZM80,88c13.74,0,24,6.34,24,12s-10.26,12-24,12c-9.67,0-17.61-3.14-21.47-7a8.29,8.29,0,0,0-.84-.93A6.62,6.62,0,0,1,56,100C56,94.34,66.26,88,80,88ZM24,140.94l48,24v46.12l-48-24Zm64,70.12V164.94l144-72v46.12Z',
  wrench: 'M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z',
  devices: 'M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z',
  penNib: 'M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z',
  trendUp: 'M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z',
  treeStructure: 'M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z',
  puzzlePiece: 'M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z',
  gearSix: 'M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z',
  sidebarSimple: 'M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z',
  caretLeft: 'M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z',
  caretUp: 'M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z',
  folderSimple: 'M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33L123.2,86.4A8,8,0,0,0,128,88h88Z',
  dotsThree: 'M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z',
  pencilSimple: 'M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z',
  trashSimple: 'M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z',
  caretUpDown: 'M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z',
  dotsSixVertical: 'M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z',
}

// The rail's lightbulb and lightning are drawn on a 20px grid instead of Phosphor's 256.
const RAIL_ICONS_20 = {
  lightbulb: 'M13.75 18.125C13.75 18.2908 13.6842 18.4497 13.5669 18.5669C13.4497 18.6842 13.2908 18.75 13.125 18.75H6.875C6.70924 18.75 6.55027 18.6842 6.43306 18.5669C6.31585 18.4497 6.25 18.2908 6.25 18.125C6.25 17.9592 6.31585 17.8003 6.43306 17.6831C6.55027 17.5658 6.70924 17.5 6.875 17.5H13.125C13.2908 17.5 13.4497 17.5658 13.5669 17.6831C13.6842 17.8003 13.75 17.9592 13.75 18.125ZM16.875 8.125C16.8777 9.16691 16.6423 10.1957 16.1868 11.1327C15.7314 12.0698 15.0678 12.8905 14.2469 13.532C14.0934 13.6497 13.9688 13.8009 13.8827 13.9741C13.7966 14.1473 13.7512 14.3378 13.75 14.5312V15C13.75 15.3315 13.6183 15.6495 13.3839 15.8839C13.1495 16.1183 12.8315 16.25 12.5 16.25H7.5C7.16848 16.25 6.85054 16.1183 6.61612 15.8839C6.3817 15.6495 6.25 15.3315 6.25 15V14.5312C6.24987 14.3402 6.20593 14.1516 6.12156 13.9802C6.03718 13.8087 5.91461 13.6589 5.76328 13.5422C4.94438 12.9044 4.28129 12.0887 3.8242 11.1568C3.36712 10.2249 3.12802 9.20124 3.125 8.16328C3.10469 4.43984 6.11406 1.33906 9.83438 1.25C10.7511 1.22791 11.6629 1.38942 12.5162 1.72501C13.3695 2.06061 14.1471 2.56352 14.8032 3.20413C15.4592 3.84475 15.9805 4.61013 16.3363 5.45523C16.6921 6.30032 16.8753 7.20806 16.875 8.125ZM15.625 8.125C15.6252 7.37474 15.4753 6.63201 15.1842 5.94054C14.8931 5.24907 14.4665 4.62283 13.9297 4.09868C13.3929 3.57454 12.7567 3.16307 12.0584 2.88852C11.3602 2.61397 10.6141 2.48187 9.86406 2.5C6.81719 2.57187 4.35859 5.10859 4.375 8.15547C4.37785 9.00436 4.57375 9.84149 4.94785 10.6035C5.32196 11.3655 5.86448 12.0325 6.53437 12.5539C6.8355 12.788 7.07908 13.0879 7.24645 13.4306C7.41382 13.7734 7.50055 14.1498 7.5 14.5312V15H12.5V14.5312C12.5009 14.1487 12.5891 13.7715 12.7579 13.4283C12.9268 13.0851 13.1718 12.7849 13.4742 12.5508C14.1462 12.0256 14.6893 11.3539 15.062 10.5869C15.4348 9.81987 15.6273 8.9778 15.625 8.125ZM14.3664 7.39531C14.2043 6.49007 13.7688 5.65622 13.1185 5.00601C12.4681 4.35581 11.6342 3.92046 10.7289 3.75859C10.648 3.74495 10.5651 3.74738 10.4851 3.76575C10.4051 3.78412 10.3295 3.81807 10.2626 3.86566C10.1957 3.91325 10.1389 3.97355 10.0953 4.04311C10.0517 4.11268 10.0222 4.19015 10.0086 4.27109C9.99495 4.35204 9.99738 4.43488 10.0158 4.51489C10.0341 4.5949 10.0681 4.67051 10.1157 4.73739C10.1633 4.80428 10.2236 4.86114 10.2931 4.90472C10.3627 4.94831 10.4401 4.97776 10.5211 4.99141C11.8156 5.20938 12.9141 6.30781 13.1336 7.60469C13.1583 7.75025 13.2338 7.88236 13.3466 7.9776C13.4594 8.07284 13.6023 8.12506 13.75 8.125C13.7853 8.12479 13.8206 8.12192 13.8555 8.11641C14.0188 8.08852 14.1644 7.99688 14.2603 7.86166C14.3561 7.72643 14.3943 7.55869 14.3664 7.39531Z',
  lightning: 'M16.8586 9.23203C16.8349 9.13186 16.7869 9.03908 16.7187 8.96194C16.6506 8.8848 16.5645 8.82569 16.468 8.78985L11.9672 7.10156L13.1125 1.37266C13.1384 1.23955 13.1204 1.10162 13.061 0.979673C13.0017 0.857731 12.9043 0.758396 12.7836 0.696657C12.6628 0.634919 12.5253 0.614127 12.3917 0.63742C12.2581 0.660712 12.1357 0.726825 12.043 0.825781L3.29297 10.2008C3.2219 10.2757 3.17049 10.367 3.14333 10.4666C3.11617 10.5662 3.1141 10.671 3.13732 10.7716C3.16053 10.8722 3.2083 10.9654 3.27636 11.0431C3.34442 11.1207 3.43065 11.1802 3.52734 11.2164L8.02969 12.9047L6.8875 18.6273C6.86157 18.7605 6.87963 18.8984 6.93896 19.0203C6.9983 19.1423 7.09568 19.2416 7.21643 19.3033C7.33717 19.3651 7.47472 19.3859 7.60831 19.3626C7.74191 19.3393 7.86431 19.2732 7.95703 19.1742L16.707 9.79922C16.7768 9.72432 16.8271 9.63343 16.8536 9.53453C16.88 9.43563 16.8817 9.33176 16.8586 9.23203ZM8.54453 16.7188L9.3625 12.6266C9.39177 12.4814 9.36858 12.3306 9.29704 12.201C9.2255 12.0714 9.11027 11.9713 8.97187 11.9188L4.84375 10.368L11.4547 3.28516L10.6375 7.37734C10.6082 7.52248 10.6314 7.67329 10.703 7.80291C10.7745 7.93254 10.8897 8.03256 11.0281 8.08516L15.1531 9.63203L8.54453 16.7188Z',
}

type IconName = keyof typeof ICONS | keyof typeof RAIL_ICONS_20

function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const grid20 = name in RAIL_ICONS_20
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={grid20 ? '0 0 20 20' : '0 0 256 256'}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={grid20 ? RAIL_ICONS_20[name as keyof typeof RAIL_ICONS_20] : ICONS[name as keyof typeof ICONS]} />
    </svg>
  )
}

const RAIL_SECTIONS: { label: string; icon: IconName }[][] = [
  [
    { label: 'Content model', icon: 'buildingBlock' },
    { label: 'Tools', icon: 'wrench' },
  ],
  [
    { label: 'Experiences', icon: 'devices' },
    { label: 'Content', icon: 'penNib' },
  ],
  [
    { label: 'Insights', icon: 'trendUp' },
    { label: 'Ideas', icon: 'lightbulb' },
  ],
  [
    { label: 'Automations', icon: 'lightning' },
    { label: 'Taxonomy', icon: 'treeStructure' },
    { label: 'Apps', icon: 'puzzlePiece' },
  ],
  [{ label: 'Settings', icon: 'gearSix' }],
]

type Folder = { id: string; name: string }

const INITIAL_EXPERIENCE_FOLDERS: Folder[] = [
  { id: 'exp-one', name: 'Folder one' },
  { id: 'exp-two', name: 'Folder two' },
  { id: 'exp-three', name: 'Folder three' },
  { id: 'exp-four', name: 'Folder four' },
]

const INITIAL_FRAGMENT_FOLDERS: Folder[] = [
  { id: 'frag-x', name: 'Folder x' },
  { id: 'frag-y', name: 'Folder y' },
  { id: 'frag-z', name: 'Folder z' },
]

// Padding around the custom drag image, so the shadow isn't clipped when the browser captures it.
const DRAG_IMAGE_PADDING = 16

// Forma 36 values: colors, spacing, borderRadiusMedium (6px) and boxShadowDefault.
// The menu and the drag image render outside the component root, so they get the tokens too.
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap');

:where(.reorder-mode, .reorder-mode-menu, .reorder-mode-drag-image) {
  --white: #fff;
  --gray-100: #f7f9fa;
  --gray-200: #e7ebee;
  --gray-300: #cfd9e0;
  --gray-500: #67728a;
  --gray-700: #414d63;
  --gray-900: #111b2b;
  --blue-100: #e8f5ff;
  --blue-600: #0059c8;
  --green-500: #008539;
  --green-600: #006d23;
  --green-700: #00550c;
  --red-600: #c6173d;
  --focus-ring: 0 0 0 3px #98cbff;
  --focus-ring-positive: 0 0 0 3px #9ed696;
  --radius-s: 4px;
  --radius-m: 6px;
  --radius-l: 8px;
  --radius-panel: 12px;
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-s: 12px;
  --shadow-default: 0 0 0 1px rgba(25, 37, 50, 0.1), 0 3px 7px -3px rgba(25, 37, 50, 0.1),
    0 6px 12px -2px rgba(25, 37, 50, 0.1);
  font-family: 'Geist', system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-feature-settings: 'ss05' 1;
  font-size: 14px;
  line-height: 20px;
  color: var(--gray-900);
}
:where(.reorder-mode, .reorder-mode-menu, .reorder-mode-drag-image) *,
:where(.reorder-mode, .reorder-mode-menu, .reorder-mode-drag-image) *::before,
:where(.reorder-mode, .reorder-mode-menu, .reorder-mode-drag-image) *::after { box-sizing: border-box; }
:where(.reorder-mode, .reorder-mode-menu) button { font: inherit; }
:where(.reorder-mode, .reorder-mode-menu) svg { display: block; flex: none; }

.reorder-mode { box-sizing: border-box; display: flex; align-items: flex-start; padding-top: var(--space-xs); }
/* Fixed height, set by the icon rail: its icons and the collapse button fit exactly. */
.reorder-mode .panel { display: flex; flex: none; height: 534px; background: var(--white); border-radius: var(--radius-panel); box-shadow: var(--shadow-default); overflow: hidden; }

/* Icon rail */
.reorder-mode .rail { display: flex; flex-direction: column; align-items: center; padding: var(--space-xs) var(--space-2xs); border-right: 1px solid var(--gray-200); }
.reorder-mode .rail-sections { display: flex; flex: 1; flex-direction: column; gap: var(--space-s); align-items: center; }
.reorder-mode .rail-section { display: flex; flex-direction: column; gap: var(--space-xs); align-items: center; width: 32px; padding: var(--space-2xs) 0 var(--space-s); border-bottom: 1px solid var(--gray-200); }
/* The last group needs no bottom padding: the collapse button below it fits the fixed height. */
.reorder-mode .rail-section:last-child { padding-bottom: 0; border-bottom: 0; }
.reorder-mode .rail-item { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; padding: 0; border: 0; border-radius: var(--radius-s); background: none; color: var(--gray-900); cursor: pointer; }
.reorder-mode .rail-item:hover { background: var(--gray-100); }

/* Buttons */
.reorder-mode .icon-button { display: inline-flex; align-items: center; justify-content: center; flex: none; padding: var(--space-2xs); border: 1px solid transparent; border-radius: var(--radius-m); background: none; color: var(--gray-900); cursor: pointer; }
.reorder-mode .icon-button-tiny { width: 26px; height: 26px; }
.reorder-mode .icon-button-medium { width: 40px; height: 40px; padding: var(--space-xs); }
.reorder-mode .icon-button:hover { background: var(--gray-100); }
.reorder-mode .icon-button:disabled { opacity: 0.5; cursor: not-allowed; background: none; }
/* Mode buttons, compact as in the design: 24px tall, 12px labels on one line. */
.reorder-mode .button { display: flex; flex: none; align-items: center; justify-content: center; gap: var(--space-xs); height: 24px; padding: 0 var(--space-xs); border: 1px solid var(--gray-300); border-radius: var(--radius-m); background: var(--white); box-shadow: 0 1px 0 rgba(25, 37, 50, 0.08); color: var(--gray-900); font-size: 12px; font-weight: 500; line-height: 16px; white-space: nowrap; cursor: pointer; }
.reorder-mode .button:hover { background: var(--gray-100); }
/* Save order: Forma 36 positive button, label left and the ESC hint right, filling the row. */
.reorder-mode .save-order-button { flex: 1; justify-content: space-between; border-color: transparent; background: var(--green-500); color: var(--white); }
.reorder-mode .save-order-button:hover { background: var(--green-600); }
.reorder-mode .save-order-button:active { background: var(--green-700); }
.reorder-mode .shortcut-hint { font-size: 12px; line-height: 16px; font-weight: 500; color: rgba(255, 255, 255, 0.8); }
.reorder-mode .save-order-button:focus-visible { outline: 0; box-shadow: var(--focus-ring-positive); }
.reorder-mode :is(.rail-item, .icon-button, .button:not(.save-order-button), .nav-item):focus-visible,
.reorder-mode-menu [role='menuitem']:focus-visible { outline: 0; box-shadow: var(--focus-ring); }

/* Experiences menu */
.reorder-mode .subnav { display: flex; flex-direction: column; gap: var(--space-s); width: 232px; min-height: 0; padding: var(--space-s); overflow-y: auto; }
.reorder-mode .subnav-section { display: flex; flex: none; flex-direction: column; padding-bottom: var(--space-s); border-bottom: 1px solid var(--gray-200); }
.reorder-mode .subnav-section:last-child,
.reorder-mode .subnav-section:has(+ .subnav-sticky) { padding-bottom: 0; border-bottom: 0; }
.reorder-mode .subnav-title { display: flex; align-items: center; gap: var(--space-2xs); height: 28px; padding: var(--space-xs) var(--space-xs) var(--space-xs) var(--space-s); font-size: 12px; font-weight: 600; color: var(--gray-700); }
.reorder-mode .subnav-title h2 { flex: 1; margin: 0; font: inherit; }
.reorder-mode .nav-item-wrap { position: relative; }
.reorder-mode .nav-item { position: relative; display: flex; align-items: center; gap: var(--space-xs); width: 100%; min-height: 32px; padding: 6px var(--space-s); border: 0; border-radius: var(--radius-s); background: none; color: var(--gray-900); text-align: left; cursor: pointer; }
.reorder-mode .nav-item:hover { background: var(--gray-100); }
.reorder-mode .nav-item > span { flex: 1; }
.reorder-mode .nav-item[aria-current='page'] { background: var(--blue-100); }
.reorder-mode .nav-item[aria-current='page']::before { content: ''; position: absolute; left: -1px; top: 50%; width: 2px; height: 16px; transform: translateY(-50%); border-radius: 100px; background: var(--blue-600); }
.reorder-mode .nav-item-more { position: absolute; right: var(--space-xs); top: 50%; transform: translateY(-50%); background: var(--gray-100); opacity: 0; }
.reorder-mode .nav-item-wrap:hover > .nav-item-more,
.reorder-mode .nav-item-wrap:focus-within > .nav-item-more,
.reorder-mode .nav-item-more[aria-expanded='true'] { opacity: 1; }

/* Mode buttons sit right below the folders and stick to the bottom edge once the list is long
   enough to push them out of view; the white ring hides folders scrolling behind them. */
.reorder-mode .subnav-sticky { position: sticky; bottom: 0; display: flex; flex: none; gap: var(--space-xs); background: var(--white); box-shadow: 0 0 0 var(--space-s) var(--white); }

/* Reorder mode. The dashed outline shows only on the list a folder is being dragged within; it is an
   inset outline rather than a border, so folders stay 32px apart exactly as outside reorder mode. */
.reorder-mode .reorder-list { margin: 0; padding: 0; list-style: none; border-radius: var(--radius-m); outline: 1px dashed transparent; outline-offset: -1px; transition: outline-color 0.1s; }
.reorder-mode .reorder-list[data-drag-active] { outline-color: var(--blue-600); }
.reorder-mode .reorder-item { position: relative; display: flex; align-items: center; gap: var(--space-xs); height: 32px; padding: 6px var(--space-s) 6px var(--space-2xs); border-radius: var(--radius-s); color: var(--gray-900); cursor: grab; }
.reorder-mode .reorder-item:active { cursor: grabbing; }
.reorder-mode .reorder-item > span { flex: 1; }
.reorder-mode .reorder-item[data-dragging] { opacity: 0.5; }
.reorder-mode .reorder-item[data-picked] { background: var(--blue-100); box-shadow: inset 0 0 0 1px var(--blue-600); }
.reorder-mode .drag-handle { display: flex; padding: 0; border: 0; border-radius: var(--radius-s); background: none; color: inherit; cursor: inherit; }
.reorder-mode .drag-handle:focus-visible { outline: 2px solid var(--blue-600); outline-offset: 1px; }
/* Blue line where the dragged folder will land; at the list's edges it stays inside the outline. */
.reorder-mode .reorder-item[data-drop]::before { content: ''; position: absolute; top: -1px; left: 0; right: 0; height: 2px; border-radius: 1px; background: var(--blue-600); pointer-events: none; }
.reorder-mode .reorder-item[data-drop='after']::before { top: auto; bottom: -1px; }
.reorder-mode .reorder-item[data-drop='before']:first-child::before { top: 1px; }
.reorder-mode .reorder-item[data-drop='after']:last-child::before { bottom: 1px; }

/* The folder being dragged: kept off-screen while the browser captures it as the drag image. */
.reorder-mode-drag-image { position: fixed; top: -1000px; left: 0; pointer-events: none; }
.reorder-mode-drag-image > li { display: flex; align-items: center; gap: var(--space-xs); height: 32px; padding: 6px var(--space-s) 6px var(--space-2xs); list-style: none; background: rgba(255, 255, 255, 0.7); border-radius: var(--radius-m); box-shadow: var(--shadow-default); }
.reorder-mode-drag-image > li > span { flex: 1; }
.reorder-mode-drag-image .drag-handle { display: flex; padding: 0; border: 0; background: none; color: inherit; }

/* Folder menu */
.reorder-mode-menu { position: fixed; z-index: 1000; min-width: 158px; padding: var(--space-2xs) 0; background: var(--white); border-radius: var(--radius-l); box-shadow: var(--shadow-default); }
.reorder-mode-menu [role='menuitem'] { display: flex; align-items: center; gap: var(--space-xs); width: calc(100% - 8px); min-width: 150px; height: 32px; margin: 0 var(--space-2xs); padding: 5px var(--space-xs); border: 0; border-radius: var(--radius-s); background: none; color: var(--gray-700); text-align: left; cursor: pointer; }
.reorder-mode-menu [role='menuitem']:hover,
.reorder-mode-menu [role='menuitem']:focus { background: var(--gray-100); outline: 0; }
.reorder-mode-menu .menu-destructive { color: var(--red-600); }

.reorder-mode .visually-hidden { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

@media (prefers-reduced-motion: reduce) {
  .reorder-mode .reorder-list { transition: none; }
}
`

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  icon: ReactNode
  label: string
  size?: 'tiny' | 'medium'
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, label, size = 'tiny', className = '', ...props },
  ref,
) {
  return (
    <button ref={ref} type="button" className={`icon-button icon-button-${size} ${className}`} aria-label={label} {...props}>
      {icon}
    </button>
  )
})

function NavItem({ children, icon, current }: { children: ReactNode; icon?: ReactNode; current?: boolean }) {
  return (
    <div className="nav-item-wrap">
      <button type="button" className="nav-item" aria-current={current ? 'page' : undefined}>
        {icon}
        <span>{children}</span>
      </button>
    </div>
  )
}

/**
 * The folder's overflow menu (Rename, Delete, Reorder folders). It renders in a portal so the
 * scrolling menu column can't clip it, and follows the menu-button pattern: arrow keys move
 * between items, Escape closes it and returns focus to the trigger.
 */
function FolderMenu({ name, onReorder }: { name: string; onReorder: () => void }) {
  const [position, setPosition] = useState<{ top: number; right: number } | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const open = position !== null

  const close = (restoreFocus: boolean) => {
    setPosition(null)
    if (restoreFocus) triggerRef.current?.focus()
  }

  const openMenu = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    setPosition({ top: rect.bottom + 4, right: document.documentElement.clientWidth - rect.right })
  }

  useEffect(() => {
    if (!open) return
    menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus()
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (!menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) close(false)
    }
    // The menu is positioned once, so close it when anything scrolls or resizes underneath it.
    const onMove = (e: Event) => {
      if (!menuRef.current?.contains(e.target as Node)) close(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onMove, true)
    window.addEventListener('resize', onMove)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onMove, true)
      window.removeEventListener('resize', onMove)
    }
  }, [open])

  const onMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = [...e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]')]
    const index = items.indexOf(document.activeElement as HTMLElement)
    const focusAt = (i: number) => items[(i + items.length) % items.length].focus()
    if (e.key === 'ArrowDown') focusAt(index + 1)
    else if (e.key === 'ArrowUp') focusAt(index - 1)
    else if (e.key === 'Home') focusAt(0)
    else if (e.key === 'End') focusAt(items.length - 1)
    else if (e.key === 'Escape' || e.key === 'Tab') {
      e.stopPropagation()
      close(true)
    } else return
    e.preventDefault()
  }

  const item = (label: string, icon: IconName, onSelect?: () => void, className?: string) => (
    <button
      type="button"
      role="menuitem"
      tabIndex={-1}
      className={className}
      onClick={() => {
        if (onSelect) {
          close(false)
          onSelect()
        } else close(true)
      }}
    >
      <Icon name={icon} />
      {label}
    </button>
  )

  return (
    <>
      <IconButton
        ref={triggerRef}
        className="nav-item-more"
        icon={<Icon name="dotsThree" />}
        label={`${name} options`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => (open ? close(true) : openMenu())}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' && !open) {
            e.preventDefault()
            openMenu()
          }
        }}
      />
      {position &&
        createPortal(
          <div
            ref={menuRef}
            className="reorder-mode-menu"
            role="menu"
            aria-label={`${name} options`}
            style={{ top: position.top, right: position.right }}
            onKeyDown={onMenuKeyDown}
          >
            {item('Rename', 'pencilSimple')}
            {item('Delete', 'trashSimple', undefined, 'menu-destructive')}
            {item('Reorder folders', 'caretUpDown', onReorder)}
          </div>,
          document.body,
        )}
    </>
  )
}

function FolderItem({ id, name, onReorder }: { id: string; name: string; onReorder: () => void }) {
  return (
    <div className="nav-item-wrap">
      <button type="button" className="nav-item" data-folder-nav-id={id}>
        <Icon name="folderSimple" />
        <span>{name}</span>
      </button>
      <FolderMenu name={name} onReorder={onReorder} />
    </div>
  )
}

/**
 * Replaces the browser's drag image with a copy of the folder row on a translucent white surface,
 * lifted with a shadow. The copy only needs to exist while the browser captures it.
 */
function setLiftedDragImage(e: React.DragEvent<HTMLLIElement>) {
  const item = e.currentTarget
  const rect = item.getBoundingClientRect()
  const copy = item.cloneNode(true) as HTMLLIElement
  for (const state of ['data-picked', 'data-dragging', 'data-drop']) copy.removeAttribute(state)
  copy.style.width = `${rect.width}px`
  const wrap = document.createElement('div')
  wrap.className = 'reorder-mode-drag-image'
  wrap.style.padding = `${DRAG_IMAGE_PADDING}px`
  wrap.append(copy)
  document.body.append(wrap)
  e.dataTransfer.setDragImage(wrap, e.clientX - rect.left + DRAG_IMAGE_PADDING, e.clientY - rect.top + DRAG_IMAGE_PADDING)
  // The browser captures the image during dragstart, so the copy can go right after.
  setTimeout(() => wrap.remove())
}

/**
 * Folder list shown in reorder mode. Each list is its own drop zone, so folders only move within
 * their section. Keyboard users pick a folder up on its drag handle and move it with the arrow keys.
 */
type ReorderListProps = {
  label: string
  folders: Folder[]
  onChange: (next: Folder[]) => void
  onAnnounce: (message: string) => void
  onUserMove: (id: string) => void
  /** Folder that starts out picked up, ready for arrow-key moves. */
  initialPickedId?: string
}

function ReorderList({ label, folders, onChange, onAnnounce, onUserMove, initialPickedId }: ReorderListProps) {
  const [dragIndex, setDragIndexState] = useState<number | null>(null)
  const [overIndex, setOverIndex] = useState<number | null>(null)
  // True while hovering the lower half of the last folder (drop at the end).
  const [overEnd, setOverEnd] = useState(false)
  // Mirrors dragIndex so drag handlers never read a stale value between events.
  const dragRef = useRef<number | null>(null)
  const setDragIndex = (i: number | null) => {
    dragRef.current = i
    setDragIndexState(i)
  }
  const listRef = useRef<HTMLUListElement>(null)
  // Keyboard pick-up: the folder currently held by the user, if any.
  const [pickedId, setPickedId] = useState<string | null>(initialPickedId ?? null)
  // Moving a focused element in the DOM blurs it; ignore that blur so the pick-up survives.
  const refocusing = useRef(false)

  const focusHandle = (id: string) => {
    refocusing.current = true
    requestAnimationFrame(() => {
      listRef.current?.querySelector<HTMLButtonElement>(`[data-folder-id="${id}"]`)?.focus()
      refocusing.current = false
    })
  }

  const move = (from: number, to: number) => {
    if (from === to || to < 0 || to >= folders.length) return
    const next = folders.slice()
    const [item] = next.splice(from, 1)
    next.splice(to, 0, item)
    onChange(next)
    onUserMove(item.id)
    onAnnounce(`${item.name} moved to position ${to + 1} of ${next.length} in ${label}`)
    return item.id
  }

  const togglePick = (folder: Folder, index: number) => {
    if (pickedId === folder.id) {
      setPickedId(null)
      onAnnounce(`Dropped ${folder.name} at position ${index + 1} of ${folders.length} in ${label}.`)
    } else {
      setPickedId(folder.id)
      onAnnounce(
        `Picked up ${folder.name}, position ${index + 1} of ${folders.length} in ${label}. ` +
          'Use the up and down arrow keys to move, and Enter or Space to drop.',
      )
    }
  }

  const endDrag = () => {
    setDragIndex(null)
    setOverIndex(null)
    setOverEnd(false)
  }

  // A folder lands before the hovered one, or at the end of the list.
  const dropTo = (from: number, index: number) => {
    const insertAt = overEnd ? folders.length : index
    return insertAt > from ? insertAt - 1 : insertAt
  }

  return (
    <ul className="reorder-list" ref={listRef} aria-label={`${label} folders`} data-drag-active={dragIndex !== null || undefined}>
      {folders.map((folder, index) => (
        <li
          key={folder.id}
          className="reorder-item"
          data-dragging={dragIndex === index || undefined}
          data-picked={pickedId === folder.id || undefined}
          data-drop={
            overIndex === index && dragIndex !== null && dragIndex !== index ? (overEnd ? 'after' : 'before') : undefined
          }
          draggable
          onDragStart={(e) => {
            setDragIndex(index)
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('text/plain', folder.id)
            setLiftedDragImage(e)
          }}
          onDragOver={(e) => {
            if (dragRef.current === null) return // drag started in another list
            e.preventDefault()
            e.dataTransfer.dropEffect = 'move'
            setOverIndex(index)
            const rect = e.currentTarget.getBoundingClientRect()
            setOverEnd(index === folders.length - 1 && e.clientY > rect.top + rect.height / 2)
          }}
          onDrop={(e) => {
            e.preventDefault()
            if (dragRef.current !== null) move(dragRef.current, dropTo(dragRef.current, index))
            endDrag()
          }}
          onDragEnd={endDrag}
        >
          <button
            type="button"
            className="drag-handle"
            data-folder-id={folder.id}
            aria-label={`Reorder ${folder.name}. Press Enter or Space to pick up, use the up and down arrow keys to move, then press Enter or Space to drop.`}
            aria-pressed={pickedId === folder.id}
            // Enter and Space both arrive as a click with detail 0; real mouse clicks are left to dragging.
            onClick={(e) => {
              if (e.detail === 0) togglePick(folder, index)
            }}
            onBlur={() => {
              if (refocusing.current || pickedId !== folder.id) return
              // Focus left the handle while holding the folder: drop it where it is.
              setPickedId(null)
              onAnnounce(`Dropped ${folder.name} at position ${index + 1} of ${folders.length} in ${label}.`)
            }}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
              e.preventDefault()
              if (pickedId !== folder.id) return // arrows only move a picked-up folder
              const id = move(index, index + (e.key === 'ArrowUp' ? -1 : 1))
              if (id) focusHandle(id)
            }}
          >
            <Icon name="dotsSixVertical" />
          </button>
          <Icon name="folderSimple" />
          <span>{folder.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ReorderMode() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [reordering, setReordering] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const [experienceFolders, setExperienceFolders] = useState<Folder[]>(INITIAL_EXPERIENCE_FOLDERS)
  const [fragmentFolders, setFragmentFolders] = useState<Folder[]>(INITIAL_FRAGMENT_FOLDERS)

  // Folder whose menu started reorder mode: it starts picked up and its drag handle gets focus.
  const [pickedOnStart, setPickedOnStart] = useState<string | null>(null)
  const focusAfterReorder = useRef<string | null>(null)
  const reorderOrigin = useRef<string | null>(null)
  // Folder to focus once reorder mode has ended and the normal list is back.
  const focusAfterExit = useRef<string | null>(null)
  // Folder order when reorder mode started: for the "moved" count, for Reset order, and as
  // rendered state so Reset order can appear once the order changes.
  const orderAtStart = useRef<string[]>([])
  const foldersAtStart = useRef<{ experiences: Folder[]; fragments: Folder[] }>({ experiences: [], fragments: [] })
  const [startOrder, setStartOrder] = useState('')
  // Folders the user moved directly (not ones displaced by another move).
  const movedByUser = useRef(new Set<string>())

  const focusInRoot = (selector: string) =>
    requestAnimationFrame(() => rootRef.current?.querySelector<HTMLElement>(selector)?.focus())

  const startReorder = (folderId: string) => {
    focusAfterReorder.current = folderId
    reorderOrigin.current = folderId
    orderAtStart.current = [...experienceFolders, ...fragmentFolders].map((f) => f.id)
    foldersAtStart.current = { experiences: experienceFolders, fragments: fragmentFolders }
    setStartOrder(orderAtStart.current.join())
    movedByUser.current = new Set()
    setPickedOnStart(folderId)
    setReordering(true)
    const [label, folders]: [string, Folder[]] = experienceFolders.some((f) => f.id === folderId)
      ? ['Experiences', experienceFolders]
      : ['Fragments', fragmentFolders]
    const index = folders.findIndex((f) => f.id === folderId)
    setAnnouncement(
      `Reorder mode on. Picked up ${folders[index]?.name}, position ${index + 1} of ${folders.length} in ${label}. ` +
        'Use the up and down arrow keys to move, and Enter or Space to drop. Press Escape or Save order to finish.',
    )
  }

  const stopReorder = () => {
    const before = orderAtStart.current
    const after = [...experienceFolders, ...fragmentFolders].map((f) => f.id)
    // Return focus to the folder being handled, or where reorder mode started if focus left the list.
    focusAfterExit.current = (document.activeElement as HTMLElement | null)?.dataset.folderId ?? reorderOrigin.current
    // Count only folders the user moved that ended up somewhere other than where they started.
    const moved = [...movedByUser.current].filter((id) => before.indexOf(id) !== after.indexOf(id)).length
    setReordering(false)
    setAnnouncement(
      `Reorder mode ended. ${
        moved === 0 ? 'No folders were reordered.' : `${moved} ${moved === 1 ? 'folder was' : 'folders were'} reordered.`
      }`,
    )
  }

  // Put every folder back where it was when reorder mode started; the mode stays open.
  const resetReorder = () => {
    setExperienceFolders(foldersAtStart.current.experiences)
    setFragmentFolders(foldersAtStart.current.fragments)
    movedByUser.current = new Set()
    setAnnouncement('Folder order was reset.')
    // Reset order hides itself, so hand focus to Save order.
    focusInRoot('.save-order-button')
  }

  const orderChanged = reordering && [...experienceFolders, ...fragmentFolders].map((f) => f.id).join() !== startOrder

  useEffect(() => {
    if (!reordering || !focusAfterReorder.current) return
    const id = focusAfterReorder.current
    focusAfterReorder.current = null
    // Wait a frame so the closing menu's focus handling doesn't override ours.
    focusInRoot(`.reorder-list [data-folder-id="${id}"]`)
  }, [reordering])

  useEffect(() => {
    if (reordering || !focusAfterExit.current) return
    const id = focusAfterExit.current
    focusAfterExit.current = null
    focusInRoot(`[data-folder-nav-id="${id}"]`)
  }, [reordering])

  // In reorder mode the drag handles and mode buttons are the only tab stops.
  useEffect(() => {
    const root = rootRef.current
    if (!reordering || !root) return
    const saved = new Map<Element, string | null>()
    root
      .querySelectorAll('a[href], button, input, select, textarea, summary, [tabindex], [contenteditable="true"]')
      .forEach((el) => {
        if (el.classList.contains('drag-handle') || el.classList.contains('keep-tab')) return
        saved.set(el, el.getAttribute('tabindex'))
        el.setAttribute('tabindex', '-1')
      })
    return () => {
      saved.forEach((value, el) => {
        if (value === null) el.removeAttribute('tabindex')
        else el.setAttribute('tabindex', value)
      })
    }
  }, [reordering])

  // Escape ends reorder mode from anywhere on the page.
  useEffect(() => {
    if (!reordering) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      e.preventDefault()
      stopReorder()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  })

  const reorderList = (label: string, folders: Folder[], onChange: (next: Folder[]) => void) => (
    <ReorderList
      label={label}
      folders={folders}
      onChange={onChange}
      onAnnounce={setAnnouncement}
      onUserMove={(id) => movedByUser.current.add(id)}
      initialPickedId={pickedOnStart ?? undefined}
    />
  )

  return (
    <div className="reorder-mode" ref={rootRef}>
      <style>{STYLES}</style>
      <div className="panel">
        <nav className="rail" aria-label="Main">
          <div className="rail-sections">
            {RAIL_SECTIONS.map((section, i) => (
              <div className="rail-section" key={i}>
                {section.map((item) => (
                  <button type="button" className="rail-item" key={item.label} aria-label={item.label}>
                    <Icon name={item.icon} size={20} />
                  </button>
                ))}
              </div>
            ))}
          </div>
          <IconButton size="medium" icon={<Icon name="sidebarSimple" size={20} />} label="Collapse sidebar" />
        </nav>
        <nav className="subnav" aria-label="Experiences">
          <div className="subnav-section">
            <NavItem icon={<Icon name="caretLeft" />}>Experiences</NavItem>
          </div>
          <div className="subnav-section">
            <div className="subnav-title">
              <h2>Experiences</h2>
              <IconButton icon={<Icon name="caretUp" />} label="Collapse Experiences" aria-expanded disabled={reordering} />
            </div>
            <NavItem current>All experiences</NavItem>
            {reordering
              ? reorderList('Experiences', experienceFolders, setExperienceFolders)
              : experienceFolders.map((f) => (
                  <FolderItem key={f.id} id={f.id} name={f.name} onReorder={() => startReorder(f.id)} />
                ))}
          </div>
          <div className="subnav-section">
            <div className="subnav-title">
              <h2>Fragments</h2>
              <IconButton icon={<Icon name="caretUp" />} label="Collapse Fragments" aria-expanded disabled={reordering} />
            </div>
            <NavItem>All Fragments</NavItem>
            {reordering
              ? reorderList('Fragments', fragmentFolders, setFragmentFolders)
              : fragmentFolders.map((f) => (
                  <FolderItem key={f.id} id={f.id} name={f.name} onReorder={() => startReorder(f.id)} />
                ))}
          </div>
          {reordering && (
            <div className="subnav-sticky">
              {orderChanged && (
                <button type="button" className="button keep-tab" onClick={resetReorder}>
                  Reset order
                </button>
              )}
              <button
                type="button"
                className="button keep-tab save-order-button"
                aria-keyshortcuts="Escape"
                onClick={stopReorder}
              >
                Save order
                {/* Visual hint only: the shortcut is exposed to assistive tech via aria-keyshortcuts. */}
                <span className="shortcut-hint" aria-hidden="true">
                  ESC
                </span>
              </button>
            </div>
          )}
          <div className="visually-hidden" role="status" aria-live="polite">
            {announcement}
          </div>
        </nav>
      </div>
    </div>
  )
}
