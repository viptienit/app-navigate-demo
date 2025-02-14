import { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  Pressable,
  Text,
  View,
} from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "../ui/input";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";
import { CheckIcon, EyeIcon, EyeOffIcon } from "../ui/icon";
import { Button, ButtonText } from "../ui/button";
import { Link, LinkText } from "../ui/link";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./css";
import { CheckLogin } from "@/FetchAPI/Login";
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  OAuthCredential,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "@react-native-firebase/app";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Khởi tạo Firebase
// const app = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const Login = ({ navigation }: any) => {
  // provider.setCustomParameters({
  //   login_hint: "viptienit@gmail.com",
  // });
  const [name, setName] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const Login = () => {
    //   const auth: Auth = getAuth(app);
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       const credential: OAuthCredential | null =
    //         GoogleAuthProvider.credentialFromResult(result);
    //       const token = credential?.accessToken;
    //       console.log(token);

    //       const user = result.user;
    //       console.log(user);

    //       // IdP data available using getAdditionalUserInfo(result)
    //       // ...
    //     })
    //     .catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //       const email = error.customData.email;
    //       // The AuthCredential type that was used.
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       // ...
    //     });
    CheckLogin(name, password, navigation);
  };
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.containe}>
      <ImageBackground
        source={require("./image/bg-login.png")}
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
              <InputSlot onPress={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? (
                  <InputIcon style={styles.mr_10} as={EyeIcon} size="xl" />
                ) : (
                  <InputIcon style={styles.mr_10} as={EyeOffIcon} size="xl" />
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
    </Pressable>
  );
};

export default Login;
