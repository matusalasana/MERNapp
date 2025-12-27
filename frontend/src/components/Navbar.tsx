import { Box, HStack, Text } from "@chakra-ui/react"

function Navbar() {
  return (
    <Box as="nav" bg="gray.800" p={4} color="white">
      <HStack display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Text>Logo</Text>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </HStack>
    </Box>
  )
}

export default Navbar