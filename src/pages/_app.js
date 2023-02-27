const { ChakraProvider } = require('@chakra-ui/react');

const Website = ({ Component, pageProps }) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default Website;