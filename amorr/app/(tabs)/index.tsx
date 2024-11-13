import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Amada</Text>
      <Text style={styles.subtitle}>Bem-vinda ao meu espaço especial para você ❤️</Text>
      <Text style={styles.paragraph}>
        Aqui, em cada detalhe, quero expressar o quanto você é importante para mim.
      </Text>
      <Link href="/about" style={styles.button}>
        Ver mais sobre nós
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEE9', // Cor suave de fundo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF3D88', // Cor destacada para o título
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#FF62A1',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#FF3D88',
  },
});
