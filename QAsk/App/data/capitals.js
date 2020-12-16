import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageStyle: {
    height: 160,
    width: 235,
    marginTop: 20,
    marginLeft: 70
  }
});
const questions = [
  {
    question: '1-Where is the capital of Turkey?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Ankara.jpeg'),
    answers: [
      { id: "1", text: "Istanbul" },
      { id: "2", text: "Baku" },
      { id: "3", text: "Ankara", correct: true },
      { id: "4", text: "Antalya" }
    ]
  },
  {
    question: '2-Where is the capital of South Korea?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Seoul.jpg'),
    answers: [
      { id: "1", text: "Tokyo" },
      { id: "2", text: "Seoul", correct: true },
      { id: "3", text: "Bangkok" },
      { id: "4", text: "Hanoi" }
    ]
  },
  {
    question: "3-Which country's capital is Oslo?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Oslo.jpeg'),
    answers: [
      { id: "1", text: "Finland" },
      { id: "2", text: "Sweden" },
      { id: "3", text: "Denmark" },
      { id: "4", text: "Norway", correct: true }
    ]
  },
  {
    question: "4-Which country's capital is Santiago?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Santiago.jpeg'),
    answers: [
      { id: "1", text: "Colombia" },
      { id: "2", text: "Argentina" },
      { id: "3", text: "Chile", correct: true },
      { id: "4", text: "Costa Rica" }
    ]
  },


  {
    question: "5-Where is the capital of Latvia?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Riga.jpeg'),
    answers: [
      { id: "1", text: "Helsinki" },
      { id: "2", text: "Vilnius" },
      { id: "3", text: "Tallinn" },
      { id: "4", text: "Riga", correct: true }
    ]
  },
  {
    question: "6-Where is the capital of Belarus?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Minsk.jpeg'),
    answers: [
      { id: "1", text: "Kiev" },
      { id: "2", text: "Minsk", correct: true },
      { id: "3", text: "Moscow" },
      { id: "4", text: "Belgrade" }
    ]
  },
  {
    question: "7-Which country's capital is Bangkok?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Bangkok.jpeg'),
    answers: [
      { id: "1", text: "Singapore" },
      { id: "2", text: "Taiwan" },
      { id: "3", text: "Kazakhistan" },
      { id: "4", text: "Thailand", correct: true }
    ]
  },

  {
    question: "8-Which country's capital is San Jose?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/SanJose.jpeg'),
    answers: [
      { id: "1", text: "Costa Rica", correct: true },
      { id: "2", text: "Cyprus" },
      { id: "3", text: "Ecuador" },
      { id: "4", text: "Guatemala" }
    ]
  },
  {
    question: "9-Where is the capital of Cuba?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Havana.jpeg'),
    answers: [
      { id: "1", text: "San Salvador" },
      { id: "2", text: "Delhi" },
      { id: "3", text: "Havana", correct: true },
      { id: "4", text: "Riga" }
    ]
  },
  {
    question: "10-Where is the capital of Australia?",
    image_style: styles.imageStyle,
    image_src: require('../assets/Capitals/Canberra.jpeg'),
    answers: [
      { id: "1", text: "Sydney" },
      { id: "2", text: "Canberra  ", correct: true },
      { id: "3", text: "Kuala Lumpur" },
      { id: "4", text: "Antananarivo" }
    ]
  },


];

export default questions;