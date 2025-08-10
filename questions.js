const questions = [
  // Sección 1
  {
    type: "words",
    words: ["overview", "does give", "is going to"],
    translations: {
      "overview": "vision general",
      "does give": "da",
      "is going to": "va a"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "The file does give an overview of the system and is going to help.",
    translation: "El archivo da una vision general del sistema y va a ayudar.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "Which file does give an overview of known shells on a Linux system?",
    answer: "/etc/shells",
    translation: "Que archivo da una vision general de las shells conocidas en un sistema Linux",
    explanation: "La respuesta es el archivo /etc/shells que lista las shells conocidas."
  },

  // Sección 2
  {
    type: "words",
    words: ["to switch", "to another", "performed"],
    translations: {
      "to switch": "cambiar",
      "to another": "a otro",
      "performed": "realizado"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "To switch from one shell to another, the action must be performed carefully.",
    translation: "Para cambiar de una shell a otra, la accion debe ser realizada cuidadosamente.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "How to switch from one shell to another in the active terminal?",
    answer: "Enter the name of the new shell",
    translation: "Como cambiar de una shell a otra en el terminal activo",
    explanation: "La respuesta es ingresar el nombre de la nueva shell."
  },

  // Sección 3
  {
    type: "words",
    words: ["chain", "storage", "that may"],
    translations: {
      "chain": "cadena",
      "storage": "almacenamiento",
      "that may": "que puede"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "The data chain uses storage that may be distributed.",
    translation: "La cadena de datos usa almacenamiento que puede ser distribuido.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "What is a data chain in distributed storage?",
    answer: "A sequence of storage units linked together.",
    translation: "Que es una cadena de datos en almacenamiento distribuido",
    explanation: "Es una secuencia de unidades de almacenamiento enlazadas."
  },

  // Sección 4
  {
    type: "words",
    words: ["schedule", "scheduled", "several"],
    translations: {
      "schedule": "programar",
      "scheduled": "programado",
      "several": "varios"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "Several tasks are scheduled using the cron schedule.",
    translation: "Varios tareas estan programadas usando el cron schedule.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "How is the cron schedule used in Linux?",
    answer: "To schedule tasks at specific times.",
    translation: "Como se usa el cron schedule en Linux",
    explanation: "Para programar tareas a horas especificas."
  },

  // Sección 5
  {
    type: "words",
    words: ["given program", "own", "wanted"],
    translations: {
      "given program": "programa dado",
      "own": "propio",
      "wanted": "querido"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "The given program has its own features wanted by many users.",
    translation: "El programa dado tiene sus propias caracteristicas queridas por muchos usuarios.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "What does it mean for a program to have its own features?",
    answer: "It has functionalities specific to it.",
    translation: "Que significa que un programa tenga sus propias caracteristicas",
    explanation: "Significa que tiene funcionalidades especificas."
  },

  // Sección 6
  {
    type: "words",
    words: ["allow", "startup", "should"],
    translations: {
      "allow": "permitir",
      "startup": "inicio",
      "should": "deberia"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "The startup script should allow necessary permissions.",
    translation: "El script de inicio deberia permitir permisos necesarios.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "What should a startup script do?",
    answer: "Allow necessary permissions and start services.",
    translation: "Que deberia hacer un script de inicio",
    explanation: "Permitir permisos necesarios y arrancar servicios."
  },

  // Sección 7
  {
    type: "words",
    words: ["unsuitable", "strongly", "strongly typed programming", "inside"],
    translations: {
      "unsuitable": "inadecuado",
      "strongly": "fuertemente",
      "strongly typed programming": "programacion fuertemente tipada",
      "inside": "adentro"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "Python is strongly typed programming, which is unsuitable for some tasks inside projects.",
    translation: "Python es programacion fuertemente tipada, que es inadecuada para algunas tareas adentro de proyectos.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "What does strongly typed programming mean?",
    answer: "Data types are strictly enforced.",
    translation: "Que significa programacion fuertemente tipada",
    explanation: "Los tipos de datos se aplican estrictamente."
  },

  // Sección 8
  {
    type: "words",
    words: ["calling utilities", "such", "linked lists"],
    translations: {
      "calling utilities": "llamando utilidades",
      "such": "tal",
      "linked lists": "listas enlazadas"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "Python is mostly calling utilities such as linked lists.",
    translation: "Python esta mayormente llamando utilidades tales como listas enlazadas.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "What are linked lists used for in programming?",
    answer: "To store data in a linear order with pointers.",
    translation: "Para que se usan las listas enlazadas en programacion",
    explanation: "Las listas enlazadas almacenan datos en orden lineal con punteros."
  },

  // Sección 9
  {
    type: "words",
    words: ["mostly calling", "are doing", "relatively little"],
    translations: {
      "mostly calling": "mayormente llamando",
      "are doing": "estan haciendo",
      "relatively little": "relativamente poco"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "Developers are doing mostly calling functions with relatively little logic.",
    translation: "Los desarrolladores estan mayormente llamando funciones con relativamente poca logica.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "Why do developers do relatively little logic in some scripts?",
    answer: "Because they mostly call external utilities.",
    translation: "Por que los desarrolladores hacen relativamente poca logica en algunos scripts",
    explanation: "Porque mayormente llaman utilidades externas."
  },

  // Sección 10
  {
    type: "words",
    words: ["betting", "betting the future", "simple data handling"],
    translations: {
      "betting": "apostando",
      "betting the future": "apostando al futuro",
      "simple data handling": "manejo simple de datos"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "The program is going to handle simple data betting on the future inside the system.",
    translation: "El programa va a manejar manejo simple de datos apostando al futuro adentro del sistema.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "What does betting the future inside a program mean?",
    answer: "Making predictions based on data analysis.",
    translation: "Que significa apostar al futuro dentro de un programa",
    explanation: "Significa hacer predicciones basadas en analisis de datos."
  },

  // Sección 11
  {
    type: "words",
    words: ["Constants and anything", "statements"],
    translations: {
      "Constants and anything": "Constantes y cualquier cosa",
      "statements": "declaraciones"
    },
    explanation: "Palabras para repasar y practicar."
  },
  {
    type: "sentence",
    sentence: "Constants and anything are used in statements to control the flow.",
    translation: "Constantes y cualquier cosa se usan en declaraciones para controlar el flujo.",
    explanation: "Frase inventada para practicar las palabras."
  },
  {
    type: "question",
    question: "What are statements in programming?",
    answer: "Instructions that perform actions.",
    translation: "Que son las declaraciones en programacion",
    explanation: "Son instrucciones que realizan acciones."
  }
];
