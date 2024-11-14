import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default function Menu() {
  // Estado para controlar qual seção está visível
  const [currentPage, setCurrentPage] = useState('home'); // Valor inicial é 'home'

  // Função para alternar entre as páginas
  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <ImageBackground
      source={require('../assets/foto-de-fundo.jpg')} // Coloque o caminho correto da imagem de fundo
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Título principal */}
        <Text style={styles.headerTitle}>Eu e Você</Text>

        {/* Header ou Menu - Botões fixos */}
        <View style={styles.header}>
          <View style={styles.buttonContainer}>
            <Button title="Maiores Saudades" onPress={() => navigateTo('maioresSaudades')} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Nossas Viagens" onPress={() => navigateTo('viagens')} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Nossas Músicas" onPress={() => navigateTo('musicas')} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Momentos Especiais" onPress={() => navigateTo('momentos')} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Nosso Futuro Juntos" onPress={() => navigateTo('futuro')} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Fotos e Lembranças" onPress={() => navigateTo('fotos')} />
          </View>
        </View>

        {/* Página Home */}
        {currentPage === 'home' && (
          <View style={styles.page}>
            <Text style={styles.title}>Bem-vinda ao Menu, amor!</Text>
            <Text style={styles.text}>Escolha uma das opções acima para começar.</Text>
          </View>
        )}

        {/* Outras páginas... */}
        {/* Página Maiores Saudades */}
        {currentPage === 'maioresSaudades' && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>Aqui estão as nossas maiores saudades...</Text>
          </View>
        )}

        {/* Página Nossas Viagens */}
        {currentPage === 'viagens' && (
          <View style={styles.page}>
            <Text style={styles.title}>Nossas Viagens</Text>
            <Text style={styles.text}>Aqui estão os países que já visitamos...</Text>
          </View>
        )}

        {/* Página Nossas Músicas */}
        {currentPage === 'musicas' && (
          <View style={styles.page}>
            <Text style={styles.title}>Nossas Músicas</Text>
            <Text style={styles.text}>Aqui estão as músicas que mais amamos ouvir juntos...</Text>
          </View>
        )}

        {/* Página Momentos Especiais */}
        {currentPage === 'momentos' && (
          <View style={styles.page}>
            <Text style={styles.title}>Momentos Especiais</Text>
            <Text style={styles.text}>Aqui estão alguns dos nossos momentos mais especiais...</Text>
          </View>
        )}

        {/* Página Nosso Futuro Juntos */}
        {currentPage === 'futuro' && (
          <View style={styles.page}>
            <Text style={styles.title}>Nosso Futuro Juntos</Text>
            <Text style={styles.text}>Aqui estão os planos para o nosso futuro juntos...</Text>
          </View>
        )}

        {/* Página Fotos e Lembranças */}
        {currentPage === 'fotos' && (
          <View style={styles.page}>
            <Text style={styles.title}>Fotos e Lembranças</Text>
            <Text style={styles.text}>Aqui estão algumas fotos e lembranças especiais...</Text>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Um pouco de transparência para dar contraste à imagem de fundo
  },
  scrollContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#ff69b4',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, // Espaço entre os botões
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ff69b4', // Cor de fundo dos botões
  },
  page: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff69b4',
  },
  text: {
    fontSize: 18,
    color: '#fff', // Branco para contraste com o fundo
    marginTop: 10,
  },
});
