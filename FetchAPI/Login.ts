import IRes from "@/interface/IRes";
import IUserDB from "@/interface/IUserLogin";
import { Alert } from "react-native";

export const CheckLogin = (name: string, password: string, navigation: any) => {
  fetch("http://10.0.2.2:8080/user-logins")
    .then((data) => data.json())
    .then((data: IRes) => data.content)
    .then((data: IUserDB[]) => {
      if (
        data.find((item) => item.email === name && item.password === password)
      ) {
        Alert.alert("Thông báo", "Đăng nhập thành công");
        navigation.navigate("home");
      } else {
        Alert.alert("Thông báo", "Sai tài khoản hoặc mật khẩu");
      }
    });
};
