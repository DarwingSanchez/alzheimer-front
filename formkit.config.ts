import { en } from "@formkit/i18n";
import { defaultConfig } from "@formkit/vue";


export default defaultConfig({  
  locales: {
    en: {
      ...en,
      validation: {
        required: () => "Campo requerido.",
        length: () => "Longitud inválida.",
        email: () => "Por favor ingrese un correo electrónico válido.",
        between: (node) => {                    
          switch (node.name) {
            case 'Edad':
              return "La edad debe estar entre 50 y 94.";                                 
            case 'Indice Masa Corporal':
              return "El IMC debe estar entre 18 y 35.";
            case 'Puntaje Cognitivo (Mini-mental Test)':
              return 'El puntaje cognitivo debe estar entre 14 y 34.';            
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