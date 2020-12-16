import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  imageStyle: {
    height: '35%',
    width: '35%',
    marginTop: 20,
    marginLeft: 120
  }
});

const questions = [
  {
    question: '1-Can you recognize cartoon characters from their silhouettes?',
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/DaffyDuck.png'),
    answers: [
      { id: "1", text: "Donald Duck" },
      { id: "2", text: "Bugs Bunny" },
      { id: "3", text: "Wade" },
      { id: "4", text: "Daffy Duck", correct: true }
    ]
  },
  {
    question: '2-Can you recognize cartoon characters from their silhouettes?',
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/Tweety.png'),
    answers: [
      { id: "1", text: "Tweety", correct: true },
      { id: "2", text: "Sylvester" },
      { id: "3", text: "Roadrunner" },
      { id: "4", text: "Henery Hawk" }
    ]
  },
  {
    question: "3-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/MargeSimpson.png'),
    answers: [
      { id: "1", text: "Lisa Simpson" },
      { id: "2", text: "Marge Simpson", correct: true },
      { id: "3", text: "Wilma Flintstone" },
      { id: "4", text: "Betty Rubble" }
    ]
  },
  {
    question: "4-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/Coyote.png'),
    answers: [
      { id: "1", text: "Scooby Doo" },
      { id: "2", text: "Pluto" },
      { id: "3", text: "Coyote", correct: true },
      { id: "4", text: "Gufi" }
    ]
  },


  {
    question: "5-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/YosemitoSam.png'),
    answers: [
      { id: "1", text: "Balbasaur" },
      { id: "2", text: "Elmer Fudd" },
      { id: "3", text: "Popeye" },
      { id: "4", text: "Yosemito Sam", correct: true }
    ]
  },
  {
    question: "6-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/JohnnyBravo.png'),
    answers: [
      { id: "1", text: "Johnny Bravo", correct: true },
      { id: "2", text: "Shaggy" },
      { id: "3", text: "Gargamel" },
      { id: "4", text: "Peter Griffin" }
    ]
  },
  {
    question: "7-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/Roadrunner.png'),
    answers: [
      { id: "1", text: "Pidgeot" },
      { id: "2", text: "Roadrunner", correct: true },
      { id: "3", text: "Scrooge McDuck" },
      { id: "4", text: "Pink Panther" }
    ]
  },

  {
    question: "8-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/InspectorGadget.png'),
    answers: [
      { id: "1", text: "Batman" },
      { id: "2", text: "Mask" },
      { id: "3", text: "Inspector Gadget", correct: true },
      { id: "4", text: "Rick Sanchez" }
    ]
  },
  {
    question: "9-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/BettyBoop.png'),
    answers: [
      { id: "1", text: "Betty Boop", correct: true },
      { id: "2", text: "She-Ra" },
      { id: "3", text: "Shrek" },
      { id: "4", text: "Velma Dinkley" }
    ]
  },
  {
    question: "10-Can you recognize cartoon characters from their silhouettes?",
    image_style: styles.imageStyle,
    image_src: require('../assets/CartoonCharacters/PorkyPig.png'),
    answers: [
      { id: "1", text: "Piglet" },
      { id: "2", text: "Winnie the Pooh" },
      { id: "3", text: "Garfield" },
      { id: "4", text: "Porky Pig", correct: true }
    ]
  },


];

export default questions;