import { en } from "@formkit/i18n";
import { defaultConfig } from "@formkit/vue";

export default defaultConfig({
  theme: 'genesis',
  locales: {
    en: {
      ...en,
      validation: {
        required: () => "Campo requerido.",
        length: () => "Longitud inválida.",
        email: () => "Por favor ingrese un correo electrónico válido.",
        between: (node) => {          
          console.log(node.name);
          switch (node.name) {
            case 'Edad':
              return "La edad debe estar entre 50 y 94.";
            case 'Años de educación':
              return "La educación deben estar entre 0 y 19.";                                  
            case 'IMC':
              return "El IMC debe estar entre 18 y 25.";
            case 'Puntaje Cognitivo':
              return 'El puntaje cognitivo debe estar entre 0 y 100.';
          }
          return "Valor inválido.";
        },
        date_after: () => "La fecha ingresada no es válida.", 
        matches: (node) => {
          return node.name === "phoneNumber"
            ? "El número telefónico debe contener 10 caracteres."
            : "Tipo inválido.";
        },
      },
    },    
  },
  locale: "en",
});