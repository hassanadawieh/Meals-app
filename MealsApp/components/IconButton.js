import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
const IconButton = ({onPress, status}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name="star" size={23} color="white" solid={status} />
    </Pressable>
  );
};

export default IconButton;
