import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import myStyles from "styles/myStyles/myStyles"

import React from 'react'
import { Windmill } from '@roketid/windmill-react-ui'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  return (
    <Windmill usePreferences={false} theme={myStyles}>
      <Component {...pageProps} />
    </Windmill>
  )
}
export default MyApp
