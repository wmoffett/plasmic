import {
  Button as ChakraButton,
  ButtonProps
} from "@chakra-ui/react";

import {
  AddIcon,
  ArrowBackIcon,
  ArrowDownIcon, 
  ArrowForwardIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  ArrowUpDownIcon, 
  // ArrowUpIcon, 
  // AtSignIcon, 
  // AttachmentIcon, 
  // BellIcon, 
  // CalendarIcon, 
  // ChatIcon, 
  // CheckCircleIcon, 
  // CheckIcon, 
  // ChevronDownIcon, 
  // ChevronLeftIcon, 
  // ChevronRightIcon, 
  // ChevronUpIcon, 
  // CloseIcon, 
  // CopyIcon, 
  // DeleteIcon, 
  // DownloadIcon, 
  // DragHandleIcon, 
  // EditIcon, 
  // EmailIcon, 
  // ExternalLinkIcon, 
  // HamburgerIcon, 
  // InfoIcon, 
  // InfoOutlineIcon, 
  // LinkIcon, 
  // LockIcon, 
  // MinusIcon, 
  // MoonIcon, 
  // NotAllowedIcon, 
  // PhoneIcon, 
  // PlusSquareIcon, 
  // QuestionIcon, 
  // QuestionOutlineIcon, 
  // RepeatClockIcon, 
  // RepeatIcon, 
  // Search2Icon, 
  // SearchIcon, 
  // SettingsIcon, 
  // SmallAddIcon, 
  // SmallCloseIcon, 
  // SpinnerIcon, 
  // StarIcon, 
  // SunIcon, 
  // TimeIcon, 
  // TriangleDownIcon, 
  // TriangleUpIcon, 
  // UnlockIcon, 
  // UpDownIcon, 
  // ViewIcon, 
  // ViewOffIcon, 
  // WarningIcon, 
  // WarningTwoIcon
} from "@chakra-ui/icons"

export interface ChakraButtonProps extends ButtonProps {

  iconPosition: string;
  icon: string;
};

const Button = ({
  ...props
}: ChakraButtonProps): React.ReactElement => {

  const { name, className, colorScheme, size, variant, isActive, isLoading, loadingText, spinnerPlacement, iconPosition, icon }  = props;


  let jsxIcon = <AddIcon />;
  
  switch (icon) {
    case "AddIcon":
      jsxIcon = <AddIcon />
      break;
    case "ArrowBackIcon":
      jsxIcon = <ArrowBackIcon />
      break;
    case "ArrowDownIcon":
      jsxIcon = <ArrowDownIcon />
      break;
    case "ArrowForwardIcon":
      jsxIcon = <ArrowForwardIcon />
      break;
    case "ArrowLeftIcon":
      jsxIcon = <ArrowLeftIcon />
      break;
    case "ArrowRightIcon":
      jsxIcon = <ArrowRightIcon  />
      break;
    case "ArrowUpDownIcon":
      jsxIcon = <ArrowUpDownIcon  />
      break; 
    default:
      break;
  }


  let leftIcon = (iconPosition === 'left' && icon) ? jsxIcon : false;
  let rightIcon = (iconPosition ==='right' && icon) ? jsxIcon : false;

  return (
    <>
    {leftIcon && <ChakraButton
      leftIcon={leftIcon}
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
    </ChakraButton>}

    {rightIcon && <ChakraButton
      rightIcon={rightIcon}
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
    </ChakraButton>}

    {!rightIcon && !leftIcon && <ChakraButton
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
    </ChakraButton>}
    </>

  );
};
export default Button;


