import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        width: "100%",
        backgroundColor: "whitesmoke",
    },
      headerComponent: {
        paddingTop: 15,
        display: "flex",
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 15,
        flexDirection: "row",
      },
      headerImageLogo: {
        width: 180,
        height: 100
      },
      headerPlusIcon: {
        marginTop: 30,
        marginLeft: 80
      },
      headerMessageIcon: {
        marginTop: 30,
        marginLeft: 10
      },
      headerHeartIcon: {
        marginTop: 30,
        marginLeft: 10
      }
})