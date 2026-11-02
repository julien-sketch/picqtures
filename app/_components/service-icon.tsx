import { useId, type SVGProps } from "react";

// Display the exact drawings from the supplied sheet, without its cards or labels.
// The SVG filter turns the white background transparent and applies currentColor.
export function ServiceIcon({ index, ...props }: SVGProps<SVGSVGElement> & { index: number }) {
  const filterId = `service-ink-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const icon = ((index % 26) + 26) % 26;
  const column = icon % 5;
  const row = Math.floor(icon / 5);
  const left = 98 + column * 312;
  const top = 170 + row * 300;

  return <svg viewBox="0 0 180 150" aria-hidden="true" focusable="false" {...props}>
    <defs>
      <filter id={filterId} x="0" y="0" width="180" height="150" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -1 -1 -1 0 2.5" result="drawing" />
        <feFlood floodColor="currentColor" result="ink" />
        <feComposite in="ink" in2="drawing" operator="in" />
      </filter>
    </defs>
    <image href="/images/service-icons-sheet.png" x={-left} y={-top} width="1600" height="1980" filter={`url(#${filterId})`} />
  </svg>;
}
