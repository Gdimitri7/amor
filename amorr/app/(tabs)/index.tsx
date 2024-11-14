import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/foto-de-fundo.jpg")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Para Minha Pretinha</Text>
        <Text style={styles.message}>
          Cada partizinha deste pequeno app foi pensada com todo o meu amor,
          para tentar demonstrar o quanto você significa para mim. Em cada
          detalhe quis expressar o quanto admiro em você e como eu sou o homem
          mais feliz com minha pretinha do meu lado.
        </Text>
        <Link href="/about" style={styles.button}>
          Saiba mais sobre nós
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D291BC", 
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFF0F5", 
    marginBottom: 30,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  button: {
    fontSize: 18,
    color: "#FF69B4", 
    textDecorationLine: "underline",
  },
});
