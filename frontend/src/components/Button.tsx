
import { Button as ChakraButton } from "@chakra-ui/react"

interface ButtonProps {
    text: string;
    variant?: "solid" | "outline" | "ghost" | "plain" | "subtle" | "solid";
    colorPalette?: string;
    bgColor?: string;
    hoverBgColor?: string;
    type?: "button" | "submit" | "reset";
}

function Button({ text, variant = "subtle", colorPalette = "blue", bgColor, hoverBgColor, type }: ButtonProps) {
  return (
    <ChakraButton type={type} colorPalette={colorPalette} variant={variant} bgColor={bgColor} _hover={{ bgColor: hoverBgColor }}>
            {text}
    </ChakraButton>
  )
}

export default Button