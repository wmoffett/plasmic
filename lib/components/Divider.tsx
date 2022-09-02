import {
  Divider as ChakraDivider,
  DividerProps
} from "@chakra-ui/react";

const Divider = ({
  ...props
}: DividerProps): React.ReactElement => {

    const { colorScheme }  = props;

    return (
      <ChakraDivider 
        colorScheme={colorScheme} 
      />
    );
}

export default Divider;