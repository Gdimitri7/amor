import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Modal,
  Image,
  TouchableOpacity,

} from "react-native";
import { Video } from 'expo-av';

export default function Menu() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  
  const video = require("../assets/sp.mp4");

  const images = [
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ImageBackground
      source={require("../assets/foto-de-fundo.jpg")}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Eu e Você</Text>

        <View style={styles.header}>
          <View style={styles.buttonContainer}>
            <Button
              title="Maiores Saudades"
              onPress={() => navigateTo("maioresSaudades")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Nossas Viagens"
              onPress={() => navigateTo("viagens")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Nossas Músicas"
              onPress={() => navigateTo("musicas")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Momentos Especiais"
              onPress={() => navigateTo("momentos")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Nosso Futuro Juntos"
              onPress={() => navigateTo("futuro")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Fotos e Lembranças"
              onPress={() => navigateTo("fotos")}
            />
          </View>
        </View>

        {/* Página Maiores Saudades */}
        {currentPage === "maioresSaudades" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto:
            </Text>
            <View style={styles.buttonsGrid}>
              {images.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image)}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Página Nossas Viagens */}
        {currentPage === "viagens" && (
          <View style={styles.page}>
            <Text style={styles.title}>Nossas Viagens</Text>
            <Text style={styles.text}>
              Aqui estão nossas viagens passadas e futuras.
            </Text>
            <View style={styles.buttonsGrid}>
              {/* Adicione o conteúdo para a seção 'Nossas Viagens' */}
            </View>
          </View>
        )}

        {/* Página Nossas Músicas */}
        {currentPage === "musicas" && (
          <View style={styles.page}>
            <Text style={styles.title}>Nossas Músicas</Text>
            <Text style={styles.text}>
              Essas são as músicas que marcam nossa história.
            </Text>
            <View style={styles.buttonsGrid}>
              {/* Adicione o conteúdo para a seção 'Nossas Músicas' */}
            </View>
          </View>
        )}

        {/* Página Momentos Especiais */}
        {currentPage === "momentos" && (
          <View style={styles.page}>
            <Text style={styles.title}>Momentos Especiais</Text>
            <Text style={styles.text}>
              Aqui estão os momentos que definem nossa relação.
            </Text>
            <View style={styles.buttonsGrid}>
              {/* Adicione o conteúdo para a seção 'Momentos Especiais' */}
            </View>
          </View>
        )}

        {/* Página Nosso Futuro Juntos */}
        {currentPage === "futuro" && (
          <View style={styles.page}>
            <Text style={styles.title}>Nosso Futuro Juntos</Text>
            <Text style={styles.text}>
              Vamos compartilhar nossos planos para o futuro.
            </Text>
            <View style={styles.buttonsGrid}>
              {/* Adicione o conteúdo para a seção 'Nosso Futuro Juntos' */}
            </View>
          </View>
        )}

        {/* Página Fotos e Lembranças */}
        {currentPage === "fotos" && (
          <View style={styles.page}>
            <Text style={styles.title}>Fotos e Lembranças</Text>
            <Text style={styles.text}>
              Veja as fotos que capturam nossos melhores momentos.
            </Text>
            <View style={styles.buttonsGrid}>
              {/* Adicione o conteúdo para a seção 'Fotos e Lembranças' */}
            </View>
          </View>
        )}

        {/* Modal para exibir a foto */}
        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selectedImage && (
                <Image source={selectedImage} style={styles.modalImage} />
              )}
              <Button
                title="Fechar"
                onPress={closeModal}
                color="#ff69b4"
                style={styles.closeButton}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  scrollContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#ff69b4",
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ff69b4",
  },
  page: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff69b4",
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  buttonsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  photoButton: {
    width: 120,
    height: 40,
    backgroundColor: "#ff69b4",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    height: 400,
    backgroundColor: "#ffdde1", // Cor suave para efeito romântico
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ff69b4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Sombra para dar mais profundidade
  },
  modalImage: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
    marginBottom: 20, // Espaço entre a imagem e o botão
  },
  closeButton: {
    marginTop: 20, // Espaço entre o botão e a imagem
    borderColor: "#ff69b4",
    borderWidth: 2,
    borderRadius: 5,
  },
});
