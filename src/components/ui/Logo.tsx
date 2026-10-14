import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" {...props}>
      <g transform="translate(2.6 0) skewX(-9)">
        <path
          fill="#2563eb"
          d="M3 28V4h6.6l6.7 9.9v8.7h-1.9L9.2 14.8V28z"
        />
        <path
          fill="#60a5fa"
          d="M15.9 13.9 22.4 4H29v24h-6.2V14.8l-5.2 7.8h-1.7z"
        />
      </g>
    </svg>
  );
}
