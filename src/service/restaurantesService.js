import { collection, doc, setDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../config/firebase";

const crearRestaurante = async (restaurante) => {
  const nuevoDoc = doc(collection(FirebaseFirestore, "/restaurantes"));
  await setDoc(nuevoDoc, restaurante);
  console.log("Restaurante creado!");
};

const listarRestaurantes = async () => {
  const restaurantesRef = collection(FirebaseFirestore, "/restaurantes");
  const docs = await getDocs(restaurantesRef);
  const restaurantes = [];
  docs.forEach((document) => {
    restaurantes.push({
      id: document.id,
      nombre: document.data().nombre,
      direccion: document.data().direccion,
      descripcion: document.data().descripcion,
      imagen: document.data().imagen,
    });
  });
  return restaurantes;
};

export { crearRestaurante, listarRestaurantes };
