import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 'auto',
      width: '100%',
    },
    component: {
      flex: 1,
      height: 'auto',
      width: 100,
      alignItems: 'flex-start',
      width: '100%',
      maringTop: 20,
      borderWidth: 0.2,
      borderColor: 'grey'
    },
    userImage: {
      width: 400,
      height: 400
    },
    feedHeader: {
      flex: 1,
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    feedComponent: {
      flexDirection: 'row'
    },
    imageIcon: {
      width: 30,
      height: 30,
      borderRadius: 50,
      marginRight: 10
    },
    name: {
      fontSize: 18
    },
    feedDots: {
      marginRight: 15
    },
    iconsContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      width: '30%',
      height: 60,
      alignItems: 'center',
    },
    feedLegend: {
      width: '97%',
      paddingTop: 5,
      padding: 20,
      paddingLeft: 10
    },
    feedLegendLabel: {
      fontWeight: "600",
      fontSize: 18,
    },
    likedBy: {
      width: "100%",
      paddingLeft: 20
    },
    likedByLabel: {
      fontWeight: '400',
      fontSize: 15
    },
    likedByUsers:{
      fontWeight: "600",
      fontSize: 16,
    }
  });
  