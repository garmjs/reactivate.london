import Document, { Head, Main, NextScript } from 'next/document'
import { white, navy } from '../styles/colors'
import { styleSheet } from 'styled-components'

const resetStyles = `
/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */*,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}
`

const mainStyles = `
  @font-face {
    font-family: 'TLCircular';
    src: url('/static/TLCircular-Book.eot');
    src: url('/static/TLCircular-Book.eot?#iefix') format('embedded-opentype'),
      url('/static/TLCircular-Book.woff2') format('woff2'),
      url('/static/TLCircular-Book.woff') format('woff'),
      url('/static/TLCircular-Book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'TLCircular';
    src: url('/static/TLCircular-Bold.eot');
    src: url('/static/TLCircular-Bold.eot?#iefix') format('embedded-opentype'),
      url('/static/TLCircular-Bold.woff2') format('woff2'),
      url('/static/TLCircular-Bold.woff') format('woff'),
      url('/static/TLCircular-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  html, body {
    font-size: 14px;
    line-height: 1.3;
    font-family: "TLCircular", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: normal;
    font-style: normal;
    padding: 0;
    margin: 0;
  }

  .root {
    position: relative;
    background-color: ${navy.toString()};
    color: ${white.toString()};
    overflow: auto;
    min-height: 100vh;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    html, body {
      font-size: 12px;
    }
  }
`

const globalStyles = resetStyles + '\n' + mainStyles

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const style = styleSheet.getCSS()

    return { ...page, style }
  }

  render () {
    const { style } = this.props;

    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />

          <title>Reactivate London</title>

          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />

          <meta name="author" content="Reactivate London" />
          <meta name="description" content="A brand new meetup for all things React, JavaScript and Functional (Reactive) Programming!" />
          <meta name="keywords" content="reactivate,london,meetup,react,javascript,frp" />
          <meta name="application-name" content="Reactivate London" />

          <meta name="google-site-verification" content="fMwqZHVwcAuZ-QKtiRCQmsvLMkVhj54P9fTS9yfh7oM"/>

          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          <style dangerouslySetInnerHTML={{ __html: style }} />
       </Head>

       <body>
         <div className="root">
           <Main />
         </div>

         <NextScript />
       </body>
     </html>
    )
  }
}
