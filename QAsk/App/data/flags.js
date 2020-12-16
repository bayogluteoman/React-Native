import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: 225,
    marginTop: 20,
    marginLeft: 70
  }
});

const questions = [
  {
    question: '1-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Turkey.jpeg'),
    answers: [
      { id: "1", text: "Kazakhistan" },
      { id: "2", text: "Azerbaijan" },
      { id: "3", text: "Turkey", correct: true },
      { id: "4", text: "Cyprus" }
    ]
  },
  {
    question: '2-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/SouthKorea.jpeg'),
    answers: [
      { id: "1", text: "South Korea", correct: true },
      { id: "2", text: "Japan" },
      { id: "3", text: "North Korea" },
      { id: "4", text: "China" }
    ]
  },
  {
    question: '3-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Estonia.jpeg'),
    answers: [
      { id: "1", text: "Latvia" },
      { id: "2", text: "Ukraine" },
      { id: "3", text: "Lithuania" },
      { id: "4", text: "Estonia", correct: true }
    ]
  },
  {
    question: '4-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Finland.jpeg'),
    answers: [
      { id: "1", text: "Icelend" },
      { id: "2", text: "Norway" },
      { id: "3", text: "Fınland", correct: true },
      { id: "4", text: "Sweden" }
    ]
  },
  {
    question: '5-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Ghana.jpeg'),
    answers: [
      { id: "1", text: "Togo" },
      { id: "2", text: "Ghana", correct: true },
      { id: "3", text: "Senegal" },
      { id: "4", text: "Kamerun" }
    ]
  },
  {
    question: '6-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Liberia.jpeg'),
    answers: [
      { id: "1", text: "Liberia", correct: true },
      { id: "2", text: "Malaysia" },
      { id: "3", text: "Singapore" },
      { id: "4", text: "USA" }
    ]
  },
  {
    question: '7-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Mexico.jpeg'),
    answers: [
      { id: "1", text: "Panama" },
      { id: "2", text: "Mexıco", correct: true },
      { id: "3", text: "Italy" },
      { id: "4", text: "China" }
    ]
  },
  {
    question: '8-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Mozambique.jpeg'),
    answers: [
      { id: "1", text: "Mozambique", correct: true },
      { id: "2", text: "Angola" },
      { id: "3", text: "Zimbabwe" },
      { id: "4", text: "Madagascar" }
    ]
  },
  {
    question: '9-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Yemen.jpeg'),
    answers: [
      { id: "1", text: "Egypt" },
      { id: "2", text: "Syria" },
      { id: "3", text: "Lebanon" },
      { id: "4", text: "Yemen", correct: true }
    ]
  },
  {
    question: '10-Which country has this flag?',
    image_style: styles.imageStyle,
    image_src: require('../assets/Flags/Honduras.jpeg'),
    answers: [
      { id: "1", text: "Honduras", correct: true },
      { id: "2", text: "Greece" },
      { id: "3", text: "Guyana" },
      { id: "4", text: "Argentina" }
    ]
  }
];

export default questions;
