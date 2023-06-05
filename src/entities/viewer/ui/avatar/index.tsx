import { Avatar } from './style';
enum Sizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface Props {
  src: string;
  size: Sizes;
}
export const ViewerAvatar = (props: Props) => {
  const sizes = {
    small: {
      width: '12px',
      height: '12px',
    },
    medium: {
      width: '18px',
      height: '18px',
    },
    large: {
      width: '24px',
      height: '24px',
    },
  };
  return (
    <Avatar
      width={sizes[props.size].width}
      height={sizes[props.size].height}
      src={props.src}
    />
  );
};
