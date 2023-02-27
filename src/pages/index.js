const {
    Box,
    Flex,
    Heading,
    Text,
    Container,
    Button,
    Center,
    IconButton,
    Divider,
    Grid,
    GridItem,
    useColorMode,
} = require("@chakra-ui/react");
const { motion } = require("framer-motion");
const { MoonIcon, SunIcon, ArrowRightIcon } = require("@chakra-ui/icons");
const { default: Head } = require("next/head");
const NextLink = require("next/link");

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <html lang="en">
            <Head>
                <title>Next.js + Chakra UI</title>
            </Head>
            <Box
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                color={colorMode === "light" ? "gray.700" : "gray.100"}
            >
                <Container maxW="container.lg">
                    <Flex
                        minH="100vh"
                        align="center"
                        justify="center"
                        direction="column"
                        position="relative"
                    >
                        <Center
                            position="absolute"
                            top="0"
                            right="0"
                            p="4"
                            zIndex="1"
                        >
                            <Text
                                fontSize="sm"
                                fontWeight="bold"
                                textTransform="uppercase"
                                letterSpacing="wide"
                                mr="2"
                            >
                                {colorMode === "light" ? "Dark" : "Light"} mode
                            </Text>
                            <IconButton
                                aria-label="Toggle dark mode"
                                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                                onClick={toggleColorMode}
                            />
                        </Center>
                        <Heading
                            as="h1"
                            fontSize="6xl"
                            fontWeight="extrabold"
                            letterSpacing="tight"
                            textAlign="center"
                            mb="4"
                        >
                            Next.js + Chakra UI
                        </Heading>
                        <Text
                            fontSize="xl"
                            fontWeight="medium"
                            textAlign="center"
                            mb="8"
                            color={colorMode === "light" ? "gray.500" : "gray.400"}
                        >
                            A starter template for Next.js + Chakra UI
                        </Text>
                        <Divider mb="8" />
                        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                            <ItemGrid
                                title="Next.js"
                                description="A React-based framework for building server-side rendered web apps with a lot of cool features."
                                link="https://nextjs.org/"
                            />
                            <ItemGrid
                                title="Chakra UI"
                                description="Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications."
                                link="https://chakra-ui.com/"
                            />
                            <ItemGrid
                                title="BadEnd777"
                                description="This is a starter template for Next.js + Chakra UI. You can use it to build your own projects."
                                link="https://github.com/BadEnd777/Nextjs-ChakraUI-Starter"
                            />
                        </Grid>
                    </Flex>
                </Container>
            </Box>
        </html>
    );
};

export default Home;

const ItemGrid = ({title, description, link, ...props}) => {
    const { colorMode } = useColorMode();

    return (
        <GridItem>
            <Box
                w="300px"
                bg={colorMode === "light" ? "gray.100" : "gray.700"}
                boxShadow="lg"
                rounded="xl"
                p="4"
                {...props}
            >
                <Flex align="center" flexDirection="column">
                    <Heading as="h2" fontSize="2xl" mb="2">
                        {title}
                    </Heading>
                    <Divider mb="2" />
                    <Text
                        fontSize="sm"
                        fontWeight="medium"
                        textAlign="center"
                        color={colorMode === "light" ? "gray.500" : "gray.400"}
                    >
                        {description}
                    </Text>
                    <Button
                        as={NextLink}
                        href={link}
                        target="_blank"
                        variant="solid"
                        colorScheme="purple"
                        mt="2"
                        rightIcon={<ArrowRightIcon />}
                    >
                        Learn more
                    </Button>
                </Flex>
            </Box>
        </GridItem>
    )
}