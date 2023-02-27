const { Html, Head, Main, NextScript } = require('next/document');
const { ColorModeScript } = require('@chakra-ui/react');
const theme = require('@/config/theme');

const Document = () => {
    return (
        <Html lang="en">
            <Head />
            <body>
                <ColorModeScript initialColorMode={theme} />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;