import { Avatar as ChakraAvatar, AvatarProps } from '@chakra-ui/react'


const Avatar = ({
  ...props
}: AvatarProps): React.ReactElement => {
  const { size, name, src, className }  = props;


  return (
    <ChakraAvatar
      size={size}
      name={name}
      src={src}
      className={className}
      />
  );
};
export default Avatar;
