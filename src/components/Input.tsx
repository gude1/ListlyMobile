import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextStyle,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
} from 'react-native';
import React, {useState} from 'react';
import {PRIMARY_COLOR} from '../constants/colors';
import EyeSvg from '../assets/images/eye.svg';
import CloseEyeSvg from '../assets/images/eye-hide.svg';

export type InputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputCtnStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  error?: string;
  placeholder?: string;
  info?: string;
  success?: string;
  editable?: boolean | undefined;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  value?: string | undefined;
  textContentType?:
    | 'none'
    | 'URL'
    | 'addressCity'
    | 'addressCityAndState'
    | 'addressState'
    | 'countryName'
    | 'creditCardNumber'
    | 'emailAddress'
    | 'familyName'
    | 'fullStreetAddress'
    | 'givenName'
    | 'jobTitle'
    | 'location'
    | 'middleName'
    | 'name'
    | 'namePrefix'
    | 'nameSuffix'
    | 'nickname'
    | 'organizationName'
    | 'postalCode'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'sublocality'
    | 'telephoneNumber'
    | 'username'
    | 'password';
};

const Input = ({
  label,
  error,
  info,
  success,
  containerStyle,
  keyboardType,
  placeholder = 'Placeholder',
  secureTextEntry,
  textContentType,
  inputStyle,
  labelStyle,
  value,
  editable,
  inputCtnStyle,
}: InputProps) => {
  const [hideinputtxt, sethideinputtxt] = useState(secureTextEntry);

  const renderInfo = () => {
    if (!error || !info || !success) {
      return null;
    }
    if (error) {
      return <Text style={[styles.infoTxt, styles.error]}>{error}</Text>;
    }
    if (info) {
      return <Text style={[styles.infoTxt]}>{info}</Text>;
    }
    if (success) {
      return <Text style={[styles.infoTxt, styles.success]}>{success}</Text>;
    }
  };

  const renderPasswordIcon = () => {
    if (!secureTextEntry) {
      return null;
    }
    if (hideinputtxt) {
      return (
        <EyeSvg
          style={styles.passwordIcon}
          onPress={() => sethideinputtxt(false)}
        />
      );
    }
    return (
      <CloseEyeSvg
        style={styles.passwordIcon}
        onPress={() => sethideinputtxt(true)}
      />
    );
  };

  return (
    <View style={[styles.ctn, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.inputCtn, inputCtnStyle]}>
        <TextInput
          value={value}
          editable={editable}
          style={[styles.input, inputStyle]}
          selectionColor={PRIMARY_COLOR}
          cursorColor={PRIMARY_COLOR}
          keyboardType={keyboardType}
          secureTextEntry={hideinputtxt}
          aria-label="input"
          placeholder={placeholder}
          placeholderTextColor={'#C5C5C5'}
          textContentType={textContentType}
        />
        {renderPasswordIcon()}
      </View>
      {renderInfo()}
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    //  borderWidth: 1,
    width: '100%',
    borderColor: 'red',
  },
  inputCtn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#8D9BB5',
    borderRadius: 14,
    paddingHorizontal: 17,
    marginTop: 9,
  },
  input: {
    position: 'relative',
    flex: 1,
    lineHeight: 17.07,
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#000',
    height: 50,
  },
  passwordIcon: {
    alignSelf: 'center',
  },
  label: {
    fontWeight: '500',
    fontFamily: 'Montserrat',
    color: PRIMARY_COLOR,
    fontSize: 14,
    lineHeight: 17.07,
  },
  infoTxt: {
    fontFamily: 'Montserrat',
    marginTop: 4,
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#8D9BB5',
    fontSize: 14,
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
});

export default Input;
