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
  const [selectedVideo, setSelectedVideo] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const video = require("../assets/sp.mp4"); // Caminho para o vídeo

  const images = [
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
    require("../assets/foto-de-fundo.jpg"),
  ];

  const openModal = (item, type) => {
    if (type === 'image') {
      setSelectedImage(item);
      setSelectedVideo(null);
    } else if (type === 'video') {
      setSelectedVideo(item);
      setSelectedImage(null);
    }
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
    setSelectedVideo(null);
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
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {images.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, 'image')}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, 'video')}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Página Nossas Viagens */}
        {currentPage === "viagens" && (
          <View style={styles.page}>
            <Text style={styles.title}>Nossas Viagens</Text>
            <Text style={styles.text}>Aqui estão alguns dos nossos destinos:</Text>
            {/* Adicione imagens de destinos visitados */}
            <View style={styles.buttonsGrid}>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Destino 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Destino 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Destino 3</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Página Nossas Músicas */}
        {currentPage === "musicas" && (
          <View style={styles.page}>
            <Text style={styles.title}>Nossas Músicas</Text>
            <Text style={styles.text}>Aqui estão algumas das músicas que amamos:</Text>
            {/* Adicione uma lista de músicas */}
            <View style={styles.buttonsGrid}>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Música 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Música 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Música 3</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Página Momentos Especiais */}
        {currentPage === "momentos" && (
          <View style={styles.page}>
            <Text style={styles.title}>Momentos Especiais</Text>
            <Text style={styles.text}>
              Estes são os momentos que mais guardamos na memória:
            </Text>
            {/* Adicione momentos especiais aqui */}
            <View style={styles.buttonsGrid}>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Momento 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Momento 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Momento 3</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Página Nosso Futuro Juntos */}
        {currentPage === "futuro" && (
          <View style={styles.page}>
            <Text style={styles.title}>Nosso Futuro Juntos</Text>
            <Text style={styles.text}>
              O que esperamos para o nosso futuro:
            </Text>
            {/* Adicione previsões para o futuro aqui */}
            <View style={styles.buttonsGrid}>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Objetivo 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Objetivo 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.photoButton}>
                <Text style={styles.buttonText}>Objetivo 3</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Modal para exibir a foto ou vídeo */}
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
              {selectedVideo && (
                <Video
                  source={selectedVideo}
                  style={styles.modalVideo}
                  shouldPlay
                  resizeMode="contain"
                  isLooping
                />
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
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  photoButton: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ff69b4",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  modalVideo: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
  },
});
