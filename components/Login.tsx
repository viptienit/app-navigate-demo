import { useState } from "react";
import { Alert, ImageBackground, Text, View } from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "./ui/input";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "./ui/checkbox";
import { CheckIcon, EyeIcon, EyeOffIcon } from "./ui/icon";
import { Button, ButtonText } from "./ui/button";
import { Link, LinkText } from "./ui/link";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Login/css";

interface IUser {
  name: string;
  password: string;
}

const Login = ({ navigation }: any) => {
  const listUser: IUser[] = [{ name: "loi123", password: "123456" }];
  const [name, setName] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const Login = () => {
    if (
      listUser.find((item) => item.name === name && item.password === password)
    ) {
      Alert.alert("Thông báo", "Đăng nhập thành công");
      navigation.navigate("home");
    } else {
      Alert.alert("Thông báo", name + password);
    }
  };
  return (
    <ImageBackground
      source={require("./Login/image/bg-login.png")}
      style={styles.containe}
      resizeMode="cover"
    >
      <LinearGradient
        style={styles.background}
        colors={["transparent", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Login to your account</Text>
          <View style={styles.row}>
            <Text>Don’t have an account? </Text>
            <Link href="#">
              <LinkText>Sign up</LinkText>
            </Link>
          </View>

          <Text style={[styles.label, styles.mg_t_20]}>Email</Text>
          <Input
            style={styles.mg_t_5}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField
              value={name}
              onChangeText={(value) => setName(value)}
              placeholder="abc@gmail.com"
            />
          </Input>
          <Text style={[styles.label, styles.mg_t_20]}>Password</Text>
          <Input
            style={styles.mg_t_5}
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChangeText={(value) => setPassword(value)}
              placeholder="Your password"
            />
            <InputSlot>
              {isShowPassword ? (
                <InputIcon style={styles.mr_10} as={EyeIcon} />
              ) : (
                <InputIcon style={styles.mr_10} as={EyeOffIcon} />
              )}
            </InputSlot>
          </Input>
          <View style={[styles.row, styles.between, styles.mg_t_10]}>
            <Checkbox
              value="true"
              size="md"
              isInvalid={false}
              isDisabled={false}
            >
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Remember login</CheckboxLabel>
            </Checkbox>
            <Link href="#">
              <LinkText>Forgot Password?</LinkText>
            </Link>
          </View>
          <Button
            style={[styles.mg_t_20]}
            size="md"
            variant="solid"
            action="primary"
            onPress={() => Login()}
          >
            <ButtonText>Login</ButtonText>
          </Button>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;
