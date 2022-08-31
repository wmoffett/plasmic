import {
  Button as ChakraButton,
  ButtonProps
} from "@chakra-ui/react";

export interface ChakraButtonProps extends ButtonProps {};

const Button = ({
  ...props
}: ButtonProps): React.ReactElement => {

  const { name, className, colorScheme, size, variant, isActive, isLoading, loadingText, spinnerPlacement }  = props;

  return (
    <ChakraButton
      // leftIcon={Icon}
      className={className}
      isLoading={isLoading}
      loadingText={loadingText}
      isActive={isActive} 
      colorScheme={colorScheme}
      size={size}
      variant={variant}
      spinnerPlacement={spinnerPlacement}
      >
      {name}
    </ChakraButton>
  );
};
export default Button;


