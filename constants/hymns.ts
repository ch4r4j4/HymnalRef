export interface Hymn {
  id: number;
  numero: number;
  categoria: string;
  copyright: boolean;
  idiomas: {
    es: {
      titulo: string;
      autor_letra: string;
      autor_musica: string;
      versos: string[];
      coro: string | null;
    };
    en: {
      titulo: string;
      autor_letra: string;
      autor_musica: string;
      versos: string[];
      coro: string | null;
    };
  };
  temas: string[];
  palabras_clave: string[];
  audio: {
    tiene_audio: boolean;
    url: string | null;
  };
}

export const hymns: Hymn[] = [
  {
    id: 1,
    numero: 8,
    categoria: "A",
    copyright: false,
    idiomas: {
      es: {
        titulo: "Aquí Reunidos",
        autor_letra: "Desconocido",
        autor_musica: "Tradicional",
        versos: [
          "Aquí reunidos en tu santo nombre,\nGrato es estar en comunión;\nPerdido, afligido se siente el hombre,\nSin Jesucristo en su corazón.",
          "Aquí recordamos tu gran sacrificio,\nTu muerte en la cruz por amor;\nNos has redimido con tu gran servicio,\nY damos las gracias, oh buen Salvador.",
          "Queremos amarte y servirte siempre,\nDe todo el mal nos alejar;\nQue el Espíritu Santo nos guíe y nos temple,\nY nuestras almas pueda consagrar."
        ],
        coro: "¡Oh cuánto te amamos, Señor!\n¡Oh cuánto te amamos, Señor!\nPor darnos tu vida y morir en la cruz,\n¡Oh cuánto te amamos, Jesús!"
      },
      en: {
        titulo: "Here Assembled",
        autor_letra: "Unknown",
        autor_musica: "Traditional",
        versos: [
          "Here assembled in Your holy name,\nSweet communion, joy we claim;\nLost and weary, hearts in pain,\nWithout Jesus, all is vain.",
          "Here we remember Your great sacrifice,\nYour death upon the cross of love;\nYou have redeemed us, paid the price,\nWe give You thanks, our Lord above.",
          "We want to love You and to serve forever,\nFrom every evil turn away;\nMay the Holy Spirit guide us ever,\nConsecrate our souls this day."
        ],
        coro: "Oh how we love You, dear Lord!\nOh how we love You, dear Lord!\nFor giving Your life and dying on the cross,\nOh how we love You, Jesus!"
      }
    },
    temas: ["adoración", "comunión", "iglesia", "sacrificio"],
    palabras_clave: ["jesús", "cruz", "salvación", "amor", "espíritu santo"],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_8.mp3"
    }
  },
  {
    id: 2,
    numero: 45,
    categoria: "B",
    copyright: false,
    idiomas: {
      es: {
        titulo: "Grande Es Tu Fidelidad",
        autor_letra: "Thomas O. Chisholm",
        autor_musica: "William M. Runyan",
        versos: [
          "¡Oh Dios eterno, tu misericordia,\nNi una sombra de duda tendrá;\nTu compasión y bondad nunca fallan,\nY por los siglos el mismo serás!",
          "La noche oscura, el sol y la luna,\nLas estaciones del año también,\nUnen su canto cual fieles criaturas,\nPorque eres bueno, por siempre eres fiel.",
          "Tú me perdonas, me impartes el gozo,\nTierna esperanza me das en Jesús;\nFuerza para hoy, brillante esperanza,\nEsto es mi herencia, Señor, de tu cruz."
        ],
        coro: "¡Grande es tu fidelidad!\n¡Grande es tu fidelidad!\nCada mañana nuevas son tus bendiciones;\nTodo lo que he menester tu mano proveerá;\n¡Grande, Señor, es tu fidelidad!"
      },
      en: {
        titulo: "Great Is Thy Faithfulness",
        autor_letra: "Thomas O. Chisholm",
        autor_musica: "William M. Runyan",
        versos: [
          "Great is Thy faithfulness, O God my Father,\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not,\nAs Thou hast been Thou forever wilt be!",
          "Summer and winter, and springtime and harvest,\nSun, moon and stars in their courses above,\nJoin with all nature in manifold witness,\nTo Thy great faithfulness, mercy and love.",
          "Pardon for sin and a peace that endureth,\nThine own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!"
        ],
        coro: "Great is Thy faithfulness!\nGreat is Thy faithfulness!\nMorning by morning new mercies I see;\nAll I have needed Thy hand hath provided;\nGreat is Thy faithfulness, Lord, unto me!"
      }
    },
    temas: ["fidelidad", "gratitud", "confianza", "providencia"],
    palabras_clave: ["dios", "fidelidad", "misericordia", "bendiciones", "esperanza"],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 3,
    numero: 130,
    categoria: "C",
    copyright: false,
    idiomas: {
      es: {
        titulo: "A Dios Sea Gloria",
        autor_letra: "Fanny J. Crosby",
        autor_musica: "William H. Doane",
        versos: [
          "A Dios demos gloria, a Él tributemos loor,\nPor su gran amor y gracia, porque vive el Salvador;\nCantemos alegres todos con fervor,\nPorque vive, porque vive el Salvador.",
          "Si el mundo pregunta por qué canto yo,\nLe diré que vive aquel que me salvó;\nSiempre con nosotros, Cristo el Redentor,\nPorque vive, porque vive el Salvador.",
          "Regocijo tengo porque sé que Él es mi Rey,\nPor la vida eterna que en su amor me dio;\nViviré por siempre en su amor y ley,\nPorque vive, porque vive el Salvador."
        ],
        coro: "¡Él vive! ¡Él vive!\nCristo Jesús vive hoy;\nAnda conmigo y me habla,\nSu amor consolador me da;\n¡Él vive! ¡Él vive!\nSalvación Él da;\nTú preguntas: ¿Cómo sé que vive?\nVive dentro de mi corazón."
      },
      en: {
        titulo: "To God Be The Glory",
        autor_letra: "Fanny J. Crosby",
        autor_musica: "William H. Doane",
        versos: [
          "To God be the glory, great things He has done,\nSo loved He the world that He gave us His Son,\nWho yielded His life an atonement for sin,\nAnd opened the life gate that all may go in.",
          "O perfect redemption, the purchase of blood,\nTo every believer the promise of God;\nThe vilest offender who truly believes,\nThat moment from Jesus a pardon receives.",
          "Great things He has taught us, great things He has done,\nAnd great our rejoicing through Jesus the Son;\nBut purer, and higher, and greater will be,\nOur wonder, our transport, when Jesus we see."
        ],
        coro: "Praise the Lord, praise the Lord,\nLet the earth hear His voice!\nPraise the Lord, praise the Lord,\nLet the people rejoice!\nO come to the Father, through Jesus the Son,\nAnd give Him the glory, great things He has done."
      }
    },
    temas: ["alabanza", "gloria", "salvación", "redención"],
    palabras_clave: ["cristo", "vive", "salvador", "redención", "sangre", "alabanza"],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 4,
    numero: 201,
    categoria: "D",
    copyright: false,
    idiomas: {
      es: {
        titulo: "En Momentos Así",
        autor_letra: "Charles Wesley",
        autor_musica: "Tradicional",
        versos: [
          "En momentos así, levanto mi voz,\nLevanto mi canto a Cristo;\nEn momentos así, levanto mi ser,\nLevanto mis manos a Él.",
          "Cuán grande es Él, cuán grande es Él,\nCuán grande es mi Dios, cuán grande es Él;\nCuán grande es Él, cuán grande es Él,\nCuán grande es mi Dios, cuán grande es Él."
        ],
        coro: null
      },
      en: {
        titulo: "In Moments Like These",
        autor_letra: "Charles Wesley",
        autor_musica: "Traditional",
        versos: [
          "In moments like these, I lift up my voice,\nI lift up my song to Jesus;\nIn moments like these, I lift up my soul,\nI lift up my hands to Him.",
          "How great is He, how great is He,\nHow great is my God, how great is He;\nHow great is He, how great is He,\nHow great is my God, how great is He."
        ],
        coro: null
      }
    },
    temas: ["adoración", "grandeza de dios", "alabanza"],
    palabras_clave: ["cristo", "grande", "adoración", "manos", "canto"],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 5,
    numero: 315,
    categoria: "E",
    copyright: false,
    idiomas: {
      es: {
        titulo: "Soy Feliz en el Servicio del Señor",
        autor_letra: "A. H. Ackley",
        autor_musica: "B. D. Ackley",
        versos: [
          "Soy feliz en el servicio del Señor,\nSoy feliz, pues me salvó;\nSoy feliz, porque me llena de su amor,\nSoy feliz, porque me transformó.",
          "No hay gozo cual el que siento en mi ser,\nNo hay paz como la que el Señor me da;\nNo hay amor más grande que pueda tener,\nQue el amor de Cristo, mi Rey eternal.",
          "Quiero siempre en su servicio continuar,\nQuiero siempre a Él honrar;\nPorque Él es mi todo, mi sostén y mi hogar,\nY en su nombre quiero siempre confiar."
        ],
        coro: "¡Soy feliz! ¡Soy feliz!\nEn el servicio del Señor soy feliz;\n¡Soy feliz! ¡Soy feliz!\nCon Jesús, mi Salvador, soy feliz."
      },
      en: {
        titulo: "I Am Happy in the Service of the Lord",
        autor_letra: "A. H. Ackley",
        autor_musica: "B. D. Ackley",
        versos: [
          "I am happy in the service of the Lord,\nI am happy, for He saved me;\nI am happy, for He fills me with His love,\nI am happy, for He changed me.",
          "There is no joy like the joy within my soul,\nThere is no peace like the peace He gives to me;\nThere is no greater love that I could know,\nThan the love of Christ, my King eternally.",
          "I want always in His service to remain,\nI want always Him to honor;\nFor He is my all, my strength and my domain,\nAnd in His name I'll trust forever."
        ],
        coro: "I am happy! I am happy!\nIn the service of the Lord I am happy;\nI am happy! I am happy!\nWith Jesus, my Savior, I am happy."
      }
    },
    temas: ["gozo", "servicio", "testimonio", "felicidad"],
    palabras_clave: ["feliz", "servicio", "gozo", "paz", "amor", "salvador"],
    audio: {
      tiene_audio: false,
      url: null
    }
  }
];

export function searchHymns(query: string, language: 'es' | 'en'): Hymn[] {
  const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  if (!query.trim()) {
    return hymns;
  }

  const queryNumber = parseInt(query);
  if (!isNaN(queryNumber)) {
    const exactMatch = hymns.filter(h => h.numero === queryNumber);
    if (exactMatch.length > 0) return exactMatch;
  }

  return hymns.filter(hymn => {
    const hymnData = hymn.idiomas[language];
    const normalizedTitle = hymnData.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedVerses = hymnData.versos.join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedCoro = (hymnData.coro || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedKeywords = hymn.palabras_clave.join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return (
      hymn.numero.toString().includes(query) ||
      normalizedTitle.includes(normalizedQuery) ||
      normalizedVerses.includes(normalizedQuery) ||
      normalizedCoro.includes(normalizedQuery) ||
      normalizedKeywords.includes(normalizedQuery)
    );
  });
}
