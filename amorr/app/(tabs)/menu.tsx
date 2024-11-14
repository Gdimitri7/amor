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
import { Video } from "expo-av";

export default function Menu() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(""); // Armazena a descrição

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const video = require("../assets/sp.mp4"); // Caminho para o vídeo

  // Imagens específicas para cada seção
  const maioresSaudadesImages = [
    require("../assets/maiores-saudades/sdd1.jpg"),
    require("../assets/maiores-saudades/sdd2.jpg"),
    require("../assets/maiores-saudades/sdd3.jpg"),
    require("../assets/maiores-saudades/sdd4.jpg"),
    require("../assets/maiores-saudades/sdd5.jpg"),
    require("../assets/maiores-saudades/sdd6.jpg"),
    require("../assets/maiores-saudades/sdd7.jpg"),
    require("../assets/maiores-saudades/sdd8.jpg"),
    require("../assets/maiores-saudades/sdd9.jpg"),
    require("../assets/maiores-saudades/sdd10.jpg"),
    require("../assets/maiores-saudades/sdd11.jpg"),
    require("../assets/maiores-saudades/sdd12.jpg"),
    require("../assets/maiores-saudades/sdd13.jpg"),
    require("../assets/maiores-saudades/sdd14.jpg"),
    require("../assets/maiores-saudades/sdd15.jpg"),
    require("../assets/maiores-saudades/sdd16.jpg"),
    require("../assets/maiores-saudades/sdd17.jpg"),
    require("../assets/maiores-saudades/sdd18.jpg"),
    require("../assets/maiores-saudades/sdd19.jpg"),
    require("../assets/maiores-saudades/sdd20.jpg"),
    require("../assets/maiores-saudades/sdd21.jpg"),
    require("../assets/maiores-saudades/sdd22.jpg"),
    require("../assets/maiores-saudades/sdd23.jpg"),
    require("../assets/maiores-saudades/sdd24.jpg"),
    require("../assets/maiores-saudades/sdd25.jpg"),
    require("../assets/maiores-saudades/sdd26.jpg"),
    require("../assets/maiores-saudades/sdd27.jpg"),
    require("../assets/maiores-saudades/sdd28.jpg"),
    require("../assets/maiores-saudades/sdd29.jpg"),
    require("../assets/maiores-saudades/sdd30.jpg"),
    require("../assets/maiores-saudades/sdd31.jpg"),
    require("../assets/maiores-saudades/sdd32.jpg"),
    require("../assets/maiores-saudades/sdd33.jpg"),
    require("../assets/maiores-saudades/sdd34.jpg"),
    require("../assets/maiores-saudades/sdd35.jpg"),
    require("../assets/maiores-saudades/sdd36.jpg"),
    require("../assets/maiores-saudades/sdd37.jpg"),
    require("../assets/maiores-saudades/sdd38.jpg"),
    require("../assets/maiores-saudades/sdd39.jpg"),
    require("../assets/maiores-saudades/sdd40.jpg"),
    require("../assets/maiores-saudades/sdd41.jpg"),
    require("../assets/maiores-saudades/sdd42.jpg"),
  ];
  const maioresSaudadesDescriptions = [
    "Descrição do primeiro momento.",
    "Lembrança do segundo momento.",
    "Aqui estamos no terceiro momento.",
    // Adicione mais descrições conforme necessário
  ];
  const nossasViagensImages = [
    require("../assets/viajando-juntos/trip1.jpg"),
    require("../assets/viajando-juntos/trip2.jpg"),
    require("../assets/viajando-juntos/trip3.jpg"),
    require("../assets/viajando-juntos/trip4.jpg"),
    require("../assets/viajando-juntos/trip5.jpg"),
    require("../assets/viajando-juntos/trip6.jpg"),
    require("../assets/viajando-juntos/trip7.jpg"),
    require("../assets/viajando-juntos/trip8.jpg"),
    require("../assets/viajando-juntos/trip9.jpg"),
    require("../assets/viajando-juntos/trip10.jpg"),
    require("../assets/viajando-juntos/trip11.jpg"),
    require("../assets/viajando-juntos/trip12.jpg"),
    require("../assets/viajando-juntos/trip13.jpg"),
    require("../assets/viajando-juntos/trip14.jpg"),
    require("../assets/viajando-juntos/trip15.jpg"),
    require("../assets/viajando-juntos/trip16.jpg"),
    require("../assets/viajando-juntos/trip17.jpg"),
    require("../assets/viajando-juntos/trip18.jpg"),
    require("../assets/viajando-juntos/trip19.jpg"),
    require("../assets/viajando-juntos/trip20.jpg"),
    require("../assets/viajando-juntos/trip21.jpg"),
    require("../assets/viajando-juntos/trip22.jpg"),
    require("../assets/viajando-juntos/trip23.jpg"),
    require("../assets/viajando-juntos/trip24.jpg"),
    require("../assets/viajando-juntos/trip25.jpg"),
    require("../assets/viajando-juntos/trip26.jpg"),
    require("../assets/viajando-juntos/trip27.jpg"),
    require("../assets/viajando-juntos/trip28.jpg"),
    require("../assets/viajando-juntos/trip29.jpg"),
    require("../assets/viajando-juntos/trip30.jpg"),
    require("../assets/viajando-juntos/trip31.jpg"),
    require("../assets/viajando-juntos/trip32.jpg"),
    require("../assets/viajando-juntos/trip33.jpg"),
    require("../assets/viajando-juntos/trip34.jpg"),
    require("../assets/viajando-juntos/trip35.jpg"),
    require("../assets/viajando-juntos/trip36.jpg"),
  ];
  const nossasViagensDescriptions = [
    "Descrição do destino 1.",
    "Descrição do destino 2.",
    "Descrição do destino 3.",
    // Adicione mais descrições conforme necessário
  ];
  const primeirosMomentosImages = [
    require("../assets/primeiros-momentos-juntos/fisrt2.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt1.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt3.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt4.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt5.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt6.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt7.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt8.jpg"),
    require("../assets/primeiros-momentos-juntos/fisrt9.jpg"),
  ];
  const primeirosMomentosDescricoes = [
    "Descrição do primeiro momento.",
    "Descrição do segundo momento.",
    "Descrição do terceiro momento.",
    // Adicione mais descrições conforme necessário
  ];

  const momentosMalucosImages = [
    require("../assets/momentos-maluquinhosss/mlq1.jpg"),
    require("../assets/momentos-maluquinhosss/mlq2.jpg"),
    require("../assets/momentos-maluquinhosss/mlq3.jpg"),
    require("../assets/momentos-maluquinhosss/mlq4.jpg"),
    require("../assets/momentos-maluquinhosss/mlq5.jpg"),
    require("../assets/momentos-maluquinhosss/mlq6.jpg"),
    require("../assets/momentos-maluquinhosss/mlq7.jpg"),
    require("../assets/momentos-maluquinhosss/mlq8.jpg"),
    require("../assets/momentos-maluquinhosss/mlq9.jpg"),
    require("../assets/momentos-maluquinhosss/mlq10.jpg"),
    require("../assets/momentos-maluquinhosss/mlq11.jpg"),
  ];

  const naogostaGatosImages = [
    require("../assets/não-gatos/cat1.jpg"),
    require("../assets/não-gatos/cat2.jpg"),
    require("../assets/não-gatos/cat3.jpg"),
    require("../assets/não-gatos/cat4.jpg"),
    require("../assets/não-gatos/cat5.jpg"),
    require("../assets/não-gatos/cat6.jpg"),
  ];

  const maesImages = [
    require("../assets/uma-super-mae/mor1.jpg"),
    require("../assets/uma-super-mae/mor2.jpg"),
    require("../assets/uma-super-mae/mor3.jpg"),
    require("../assets/uma-super-mae/mor4.jpg"),
    require("../assets/uma-super-mae/mor5.jpg"),
    require("../assets/uma-super-mae/mor6.jpg"),
    require("../assets/uma-super-mae/mor7.jpg"),
  ];

  const festaImages = [
    require("../assets/festinhas/festa1.jpg"),
    require("../assets/festinhas/festa2.jpg"),
    require("../assets/festinhas/festa3.jpg"),
    require("../assets/festinhas/festa4.jpg"),
    require("../assets/festinhas/festa5.jpg"),
    require("../assets/festinhas/festa6.jpg"),
    require("../assets/festinhas/festa7.jpg"),
    require("../assets/festinhas/festa8.jpg"),
  ];

  const comidasImages = [
    require("../assets/comendinho/comendo1.jpg"),
    require("../assets/comendinho/comendo2.jpg"),
    require("../assets/comendinho/comendo3.jpg"),
    require("../assets/comendinho/comendo4.jpg"),
    require("../assets/comendinho/comendo5.jpg"),
    require("../assets/comendinho/comendo6.jpg"),
    require("../assets/comendinho/comendo7.jpg"),
    require("../assets/comendinho/comendo8.jpg"),
    require("../assets/comendinho/comendo9.jpg"),
    require("../assets/comendinho/comendo10.jpg"),
    require("../assets/comendinho/comendo11.jpg"),
    require("../assets/comendinho/comendo12.jpg"),
    require("../assets/comendinho/comendo13.jpg"),
    require("../assets/comendinho/comendo14.jpg"),
    require("../assets/comendinho/comendo15.jpg"),
    require("../assets/comendinho/comendo16.jpg"),
    require("../assets/comendinho/comendo17.jpg"),
    require("../assets/comendinho/comendo18.jpg"),
    require("../assets/comendinho/comendo19.jpg"),
    require("../assets/comendinho/comendo20.jpg"),
  ];

  const distanciasImages = [
    require("../assets/mesmo-distancia/dist1.jpg"),
    require("../assets/mesmo-distancia/dist2.jpg"),
    require("../assets/mesmo-distancia/dist3.jpg"),
    require("../assets/mesmo-distancia/dist4.jpg"),
    require("../assets/mesmo-distancia/dist5.jpg"),
    require("../assets/mesmo-distancia/dist6.jpg"),
    require("../assets/mesmo-distancia/dist7.jpg"),
    require("../assets/mesmo-distancia/dist8.jpg"),
    require("../assets/mesmo-distancia/dist9.jpg"),
    require("../assets/mesmo-distancia/dist10.jpg"),
    require("../assets/mesmo-distancia/dist11.jpg"),
    require("../assets/mesmo-distancia/dist12.jpg"),
    require("../assets/mesmo-distancia/dist13.jpg"),
  ];

  const desafiosImages = [require("../assets/desafios/desafio1.jpg")];

  const desafiosDescriptions = [
    "Este é o primeiro momento. Uma lembrança muito especial!",
    "Aqui estamos em um passeio incrível pela cidade!",
    "Vídeo do nosso primeiro evento juntos!",
    // Adicione mais descrições conforme necessário
  ];

  const openModal = (image, description) => {
    setSelectedImage(image); // Armazena a imagem
    setSelectedVideo(null); // Limpa o vídeo (se houver)
    setSelectedDescription(description); // Armazena a descrição
    setIsModalVisible(true); // Exibe o modal
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
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("primeirosMomentos")}
            >
              <Text style={styles.buttonText}>Primeiros Momentos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("maioresSaudades")}
            >
              <Text style={styles.buttonText}>Maiores Saudades</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("viagens")}
            >
              <Text style={styles.buttonText}>Nossas Viagens</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("musicas")}
            >
              <Text style={styles.buttonText}>Nossas Músicas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("momentos")}
            >
              <Text style={styles.buttonText}>Momentos Maluquinhos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("gatos")}
            >
              <Text style={styles.buttonText}>Não gosta de gatos?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("mae")}
            >
              <Text style={styles.buttonText}>Super Mãe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("festa")}
            >
              <Text style={styles.buttonText}>Festinhas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("comida")}
            >
              <Text style={styles.buttonText}>Comidinhas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("distancia")}
            >
              <Text style={styles.buttonText}>Mesmo à distância</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.customButton}
              onPress={() => navigateTo("desafios")}
            >
              <Text style={styles.buttonText}>Desafios</Text>
            </TouchableOpacity>
          </View>
        </View>

        {currentPage === "primeirosMomentos" && (
          <View style={styles.page}>
            <Text style={styles.title}>Saindo juntos</Text>
            <Text style={styles.text}>
              Aqui está moemntos que estavamos nos conhecendos.
            </Text>
            <View style={styles.buttonsGrid}>
              {primeirosMomentosImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={
                    () => openModal(image, primeirosMomentosDescricoes[index]) // Passa imagem e descrição
                  }
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Página Maiores Saudades */}
        {currentPage === "maioresSaudades" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Aqui está alguns dos momentos que eu sinto mais falta com você:
            </Text>
            <View style={styles.buttonsGrid}>
              {maioresSaudadesImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() =>
                    openModal(image, maioresSaudadesDescriptions[index])
                  }
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
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
            <Text style={styles.text}>
              Aqui estão alguns dos nossos destinos:
            </Text>
            <View style={styles.buttonsGrid}>
              {nossasViagensImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() =>
                    openModal(image, nossasViagensDescriptions[index])
                  } // Passa a descrição junto
                >
                  <Text style={styles.buttonText}>Destino {index + 1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        {currentPage === "musicas" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {maioresSaudadesImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, "image")}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentPage === "momentos" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {momentosMalucosImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, "image")}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentPage === "gatos" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {naogostaGatosImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, "image")}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentPage === "mae" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {maesImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, "image")}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentPage === "festa" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {festaImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, "image")}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentPage === "comida" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {comidasImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, "image")}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentPage === "distancia" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {distanciasImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, "image")}
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentPage === "desafios" && (
          <View style={styles.page}>
            <Text style={styles.title}>Maiores Saudades</Text>
            <Text style={styles.text}>
              Clique em um dos momentos abaixo para ver a foto ou vídeo:
            </Text>
            <View style={styles.buttonsGrid}>
              {desafiosImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.photoButton}
                  onPress={() => openModal(image, desafiosDescriptions[index])} // Passa a descrição junto
                >
                  <Text style={styles.buttonText}>Momento {index + 1}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.photoButton}
                onPress={() => openModal(video, "video")}
              >
                <Text style={styles.buttonText}>Ver Vídeo Especial</Text>
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
              {/* Exibe a descrição do momento */}
              {selectedDescription && (
                <Text style={styles.modalDescription}>
                  {selectedDescription}
                </Text>
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
  modalDescription: {
    fontSize: 16,
    color: "#333", // Cor do texto
    marginTop: 10, // Espaço entre a imagem/vídeo e a descrição
    textAlign: "center", // Alinha o texto no centro
  },
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
    backgroundColor: "#ff69b4",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#133E87",
    fontWeight: "bold",
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  modalVideo: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    marginTop: 20,
  },
  customButton: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#BFECFF", // Cor do botão
    alignItems: "center",
  },
});
