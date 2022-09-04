// import React, {useState, useEffect}  from 'react'
import Component from "./models/StylesComponentTask2/One/Component"

// export default function App() {
//   return (
//     MyComponent()
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const App = () => {
//   const [contador, setContador] = useState(0)

//   useEffect(() => {
//     setInterval(() => {
//       setContador((contador) => contador+1)
//     }, 1000)
//     console.log("UseEffect")
//   }, [])

//   return (
//     <View style={{justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Hola Mundo! {contador.toString()}</Text>
//     </View>
//   )
// }

const App = () => {
  return (
    <Component></Component>
  )
}

export default App