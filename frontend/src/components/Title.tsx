import { HStack, Text } from "@chakra-ui/react"
interface TitleProps {
    text1: string;
    text2: string;
}

function Title({ text1, text2 }: TitleProps) {
  return (
    <HStack mb={4} p={4}>
        <Text color={'blue.600'} fontWeight={'bold'} fontSize={'2xl'} as={'h1'}>{text1}</Text>
        <Text color={'blue.600'} fontWeight={'bold'} fontSize={'2xl'} as={'h1'}>{text2}</Text>
    </HStack>
  )
}

export default Title