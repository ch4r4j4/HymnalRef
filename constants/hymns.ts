export interface Hymn {
  id: number;
  numero: number;
  categoria: string;
  copyright: boolean;
  titulo: string;
  autor_letra: string;
  autor_musica: string;
  versos: string[];
  coro: string | null;
  // 0-based index AFTER which verse the chorus appears.
  // posicion_coro: 1 → chorus after verse[0]
  // posicion_coro: null → no chorus
  posicion_coro: number | null;
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
    titulo: "Aquí Reunidos",
    autor_letra: "Desconocido",
    autor_musica: "Tradicional",
    versos: [
      "Aquí reunidos en tu santo nombre,\nGrato es estar en comunión;\nPerdido, afligido se siente el hombre,\nSin Jesucristo en su corazón.",
      "Aquí recordamos tu gran sacrificio,\nTu muerte en la cruz por amor;\nNos has redimido con tu gran servicio,\nY damos las gracias, oh buen Salvador.",
      "Queremos amarte y servirte siempre,\nDe todo el mal nos alejar;\nQue el Espíritu Santo nos guíe y nos temple,\nY nuestras almas pueda consagrar."
    ],
    coro: "¡Oh cuánto te amamos, Señor!\n¡Oh cuánto te amamos, Señor!\nPor darnos tu vida y morir en la cruz,\n¡Oh cuánto te amamos, Jesús!",
    posicion_coro: 1,
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
    titulo: "Grande Es Tu Fidelidad",
    autor_letra: "Thomas O. Chisholm",
    autor_musica: "William M. Runyan",
    versos: [
      "¡Oh Dios eterno, tu misericordia,\nNi una sombra de duda tendrá;\nTu compasión y bondad nunca fallan,\nY por los siglos el mismo serás!",
      "La noche oscura, el sol y la luna,\nLas estaciones del año también,\nUnen su canto cual fieles criaturas,\nPorque eres bueno, por siempre eres fiel.",
      "Tú me perdonas, me impartes el gozo,\nTierna esperanza me das en Jesús;\nFuerza para hoy, brillante esperanza,\nEsto es mi herencia, Señor, de tu cruz."
    ],
    coro: "¡Grande es tu fidelidad!\n¡Grande es tu fidelidad!\nCada mañana nuevas son tus bendiciones;\nTodo lo que he menester tu mano proveerá;\n¡Grande, Señor, es tu fidelidad!",
    posicion_coro: 1,
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
    titulo: "A Dios Sea Gloria",
    autor_letra: "Fanny J. Crosby",
    autor_musica: "William H. Doane",
    versos: [
      "A Dios demos gloria, a Él tributemos loor,\nPor su gran amor y gracia, porque vive el Salvador;\nCantemos alegres todos con fervor,\nPorque vive, porque vive el Salvador.",
      "Si el mundo pregunta por qué canto yo,\nLe diré que vive aquel que me salvó;\nSiempre con nosotros, Cristo el Redentor,\nPorque vive, porque vive el Salvador.",
      "Regocijo tengo porque sé que Él es mi Rey,\nPor la vida eterna que en su amor me dio;\nViviré por siempre en su amor y ley,\nPorque vive, porque vive el Salvador."
    ],
    coro: "¡Él vive! ¡Él vive!\nCristo Jesús vive hoy;\nAnda conmigo y me habla,\nSu amor consolador me da;\n¡Él vive! ¡Él vive!\nSalvación Él da;\nTú preguntas: ¿Cómo sé que vive?\nVive dentro de mi corazón.",
    posicion_coro: 1,
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
    titulo: "En Momentos Así",
    autor_letra: "Charles Wesley",
    autor_musica: "Tradicional",
    versos: [
      "En momentos así, levanto mi voz,\nLevanto mi canto a Cristo;\nEn momentos así, levanto mi ser,\nLevanto mis manos a Él.",
      "Cuán grande es Él, cuán grande es Él,\nCuán grande es mi Dios, cuán grande es Él;\nCuán grande es Él, cuán grande es Él,\nCuán grande es mi Dios, cuán grande es Él."
    ],
    coro: null,
    posicion_coro: null,
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
    titulo: "Soy Feliz en el Servicio del Señor",
    autor_letra: "A. H. Ackley",
    autor_musica: "B. D. Ackley",
    versos: [
      "Soy feliz en el servicio del Señor,\nSoy feliz, pues me salvó;\nSoy feliz, porque me llena de su amor,\nSoy feliz, porque me transformó.",
      "No hay gozo cual el que siento en mi ser,\nNo hay paz como la que el Señor me da;\nNo hay amor más grande que pueda tener,\nQue el amor de Cristo, mi Rey eternal.",
      "Quiero siempre en su servicio continuar,\nQuiero siempre a Él honrar;\nPorque Él es mi todo, mi sostén y mi hogar,\nY en su nombre quiero siempre confiar."
    ],
    coro: "¡Soy feliz! ¡Soy feliz!\nEn el servicio del Señor soy feliz;\n¡Soy feliz! ¡Soy feliz!\nCon Jesús, mi Salvador, soy feliz.",
    posicion_coro: 1,
    temas: ["gozo", "servicio", "testimonio", "felicidad"],
    palabras_clave: ["feliz", "servicio", "gozo", "paz", "amor", "salvador"],
    audio: {
      tiene_audio: false,
      url: null
    }
  }
];

// ─── Search helpers ───────────────────────────────────────────────────────────

const normalize = (str: string) =>
  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export interface SearchMatch {
  hymn: Hymn;
  snippet: string | null;
  matchWord: string;
}

function extractSnippet(text: string, query: string): string | null {
  const normText = normalize(text);
  const normQuery = normalize(query);
  if (normText.indexOf(normQuery) === -1) return null;

  const flat = text.replace(/\n/g, ' ');
  const normFlat = normalize(flat);
  const flatIdx = normFlat.indexOf(normQuery);

  const start = Math.max(0, flatIdx - 30);
  const end = Math.min(flat.length, flatIdx + normQuery.length + 50);
  let snippet = flat.slice(start, end).trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < flat.length) snippet = snippet + '...';
  return snippet;
}

export function searchHymns(query: string): SearchMatch[] {
  if (!query.trim()) {
    return hymns.map(h => ({ hymn: h, snippet: null, matchWord: '' }));
  }

  const normQuery = normalize(query);
  const results: SearchMatch[] = [];

  // Exact number match
  const queryNumber = parseInt(query);
  if (!isNaN(queryNumber)) {
    const exactMatches = hymns.filter(h => h.numero === queryNumber);
    if (exactMatches.length > 0) {
      return exactMatches.map(h => ({ hymn: h, snippet: null, matchWord: query }));
    }
  }

  for (const hymn of hymns) {
    const normTitle = normalize(hymn.titulo);
    const versesText = hymn.versos.join('\n');
    const normVerses = normalize(versesText);
    const coroText = hymn.coro ?? '';
    const normCoro = normalize(coroText);
    const normKeywords = normalize(hymn.palabras_clave.join(' '));

    const titleMatch = normTitle.includes(normQuery);
    const versesMatch = normVerses.includes(normQuery);
    const coroMatch = normCoro.includes(normQuery);
    const keywordMatch = normKeywords.includes(normQuery);
    const numberMatch = hymn.numero.toString().includes(query);

    if (titleMatch || versesMatch || coroMatch || keywordMatch || numberMatch) {
      let snippet: string | null = null;
      if (versesMatch) snippet = extractSnippet(versesText, query);
      else if (coroMatch) snippet = extractSnippet(coroText, query);
      results.push({ hymn, snippet, matchWord: query });
    }
  }

  return results;
}