import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

interface IUser {
  name: string;
  password: string;
}

const Login = ({ navigation }: any) => {
  const listUser: IUser[] = [{ name: "loi123", password: "123456" }];
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    if (
      listUser.find((item) => item.name === name && item.password === password)
    ) {
      Alert.alert("Thông báo", "Đăng nhập thành công");
      navigation.navigate("home");
    } else {
      Alert.alert("Thông báo", "Tài khoản hoặc mật khẩu không chính xác");
    }
  };
  return (
    <View style={styles.containe}>
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <View>
          <View style={styles.info}>
            <Text style={styles.with100}>UserName: </Text>
            <TextInput
              value={name}
              onChangeText={(v) => setName(v)}
              style={styles.input}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.with100}>Password: </Text>
            <TextInput
              value={password}
              onChangeText={(v) => setPassword(v)}
              style={styles.input}
            />
          </View>
        </View>
        <View style={[styles.info, styles.button]}>
          <Button onPress={Login} title="Login" />
          <Button title="Sign Up" />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    width: "90%",
    padding: 15,
    alignItems: "center",
    borderRadius: 12,
  },
  input: {
    padding: 5,
    backgroundColor: "white",
    width: 200,
    borderRadius: 6,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "100%",
    justifyContent: "space-evenly",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  with100: {
    width: 80,
  },
  containe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b36b",
  },
});
