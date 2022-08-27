import {
  Button as ChakraButton,
  ButtonProps
} from "@chakra-ui/react";

import {
  ArrowForwardIcon,
  ChevronDownIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons"

export interface ChakraButtonProps extends ButtonProps {};

const Button = ({
  ...props
}: ButtonProps): React.ReactElement => {

  const { name, className, colorScheme, size, variant, isActive, isLoading, loadingText, spinnerPlacement }  = props;

  // const Icon = leftIcon ? <EmailIcon /> : undefined;
  // const Icon = <EmailIcon />;
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


