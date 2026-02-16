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
    numero: 1,
    categoria: "A",
    copyright: false,
    titulo: "Cantad Alegres al Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cantad alegres al Señor,\nmortales todos por doquier;\nservidle siempre con fervor,\nobedecedle con placer.",
      "Con gratitud canción alzad\nal Hacedor que el ser os dio;\nal Dios excelso venerad,\nque como Padre nos amó.",
      "Su pueblo somos: salvará\na los que busquen al Señor;\nninguno de ellos dejará;\nél los ampara con su amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_1.mp3"
    }
  },
  {
    id: 2,
    numero: 2,
    categoria: "A",
    copyright: false,
    titulo: "Da Gloria al Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Da gloria al Señor, de rodillas adórale\nen la hermosura de su santidad,\ntu plena obediencia cual oro ofreciéndole\ncon el incienso de grata humildad.",
      "Echada a sus pies esa carga que oprímete,\nla llevará sobre su corazón; tus penas te quitará,\nlimpiando tus lágrimas,\nguiando tus pies a mayor bendición.",
      "En sus santos atrios adonde convídate,\naunque eres pobre no temas entrar;\nla firme, constante fe y el puro, sencillo amor:\ntales ofrendas pon sobre el altar.",
      "Y cuando tú vayas temblando a llevárselas,\npor su Hijo amado las aceptará;\ny tras noche lúgubre habrá aurora espléndida:\ngozo, alegría y paz te dará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_2.mp3"
    }
  },
  {
    id: 3,
    numero: 3,
    categoria: "A",
    copyright: false,
    titulo: "¡Santo! ¡Santo! ¡Santo!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Te bendecimos, te adoramos,\nglorificamos tu nombre, oh Dios.\n¡Oh Rey del cielo, oye clemente\nnuestra ferviente y humilde voz!",
      "Perdona al hombre la falta impía;\nMira a tu Hijo, mi Redentor.\nFerviente entonces el alma mía\nPueda alabarte con todo amor.",
      "Dignos seamos de bendecirte,\nCielos y tierra cantan tu nombre,\n¡Oh Dios, oh Padre, Rey celestial!"
    ],
    coro: "¡Santo! ¡Santo! ¡Santo!\nTu Gloria llena cielo y tierra.\n¡Hosanna, hosanna, gloria a Dios!",
    posicion_coro: 0,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_3.mp3"
    }
  },
  {
    id: 4,
    numero: 4,
    categoria: "A",
    copyright: false,
    titulo: "¡Alabadle!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Alabadle, fiel Salvador compasivo!\n¡Canta, oh tierra, canta su magno amor!\n¡Saludadle, ángeles santos en gloria,\ntributad al nombre de Cristo honor!\nEn sus brazos él llevará a sus hijos;\nguardarálos siempre cual fiel pastor.",
      "¡Alabadle, fiel Salvador compasivo!,\nquien por nuestras faltas su vida dio.\n¡Roca eterna, nuestra inmortal Esperanza,\nRey del cielo que en Gólgota murió!\n¡Dadle gloria; nuestros pesares lleva!\n¡Alabad tan ancho y profundo amor!",
      "¡Alabadle, fiel Salvador compasivo,\nquerubines que obedecéis su ley!\nCristo en gloria reina por siglos de siglos;\nCristo viene, grande en poder y gloria.\n¡Viene, sí, del mundo ya vencedor!"
    ],
    coro: "¡Entonad canción a su excelsa grandeza\nensalzadle en himnos de santo amor!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_4.mp3"
    }
  },
  {
    id: 5,
    numero: 5,
    categoria: "A",
    copyright: false,
    titulo: "A Nuestro Padre Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A nuestro Padre Dios\nalcemos nuestra voz.\n¡Gloria a él!\nTal fue su amor que dio\nal Hijo que murió,\nen quien confío yo.\n¡Gloria a él!",
      "A nuestro Salvador\ndemos con fe loor.\n¡Gloria a él!\nSu sangre derramó;\ncon ella me lavó;\ny el cielo me abrió.\n¡Gloria a él!",
      "Espíritu de Dios,\nelevo a ti mi voz.\n¡Gloria a ti!\nCon celestial fulgor\nme muestras el amor\nde Cristo, mi Señor.\n¡Gloria a ti!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_5.mp3"
    }
  },
  {
    id: 6,
    numero: 6,
    categoria: "A",
    copyright: false,
    titulo: "De mi Amante Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De mi amante Salvador\ncantaré el inmenso amor;\ngloriaréme en el favor de Jesús.\nDe tinieblas me llamó,\nde cadenas me libró,\nde la muerte me salvó, mi Jesús.",
      "¡Oh, qué triste condición\nde mi impío corazón!\nLo salvó de perdición mi Jesús.\nMi pecado perdonó,\nde la ruina me salvó,\nde la angustia me sacó mi Jesús.",
      "Por el mundo al vagar,\nsolitario, sin hogar,\nignoraba el amor de Jesús.\nMas las lágrimas de ayer\nhan pasado, y hoy placer\nya comienzo a tener en Jesús.",
      "De lo falso a la verdad,\nde lo impuro a santidad,\nya me trajo la bondad de Jesús.\nY hecho fuerte en la virtud\nde su perennal salud,\nhimnos doy de gratitud a Jesús."
    ],
    coro: "¡Mi Jesús! ¡Mi Jesús!\n¡Cuán precioso es el nombre de Jesús!\nCon su sangre me limpió,\nde su gozo me llenó,\nde su vida me dotó, mi Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_6.mp3"
    }
  },
  {
    id: 7,
    numero: 7,
    categoria: "A",
    copyright: false,
    titulo: "Venid, con Cánticos Venid",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Venid, con cánticos venid,\ndel trono en redor;\ncon ángeles loor rendid\na Cristo, Salvador.\nCon ángeles loor rendid\na Cristo, Salvador.",
      "De alabanzas digno es él,\nquien en la cruz bebió\nla copa de amarga hiel,\nque vida al hombre dio,\nla copa de amarga hiel,\nque vida al hombre dio.",
      "Cantad, mortales, por doquier,\ncantadle con ardor.\nEl siempre es digno de poder,\ndominio y honor.\nEl siempre es digno de poder,\ndominio y honor.",
      "Con gozo, pues, alzad la voz;\na él alegres id,\ny con los ángeles de Dios,\na Cristo bendecid.\na él alegres id."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_7.mp3"
    }
  },
  {
    id: 8,
    numero: 8,
    categoria: "A",
    copyright: false,
    titulo: "Aquí Reunidos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Aquí reunidos en tu santo nombre\nrogamos nos des tu divino perdón.\nPerdido, afligido se siente el hombre,\nmas gracias, oh Jesús, por la salvación.",
      "Es Cristo Jesús nuestro eterno amparo.\nOrdena y mantiene su reino de amor.\nNos muestra el camino con célico faro,\nnos guarda y nos protege.\n¡Gloria al Señor!",
      "Con voces alegres te glorificamos.\n¡Oh, Cristo, sé tú nuestro gran Protector!\nContigo en las luchas victorias ganamos.\n¡Tu nombre sea honrado, oh Salvador!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_8.mp3"
    }
  },
  {
    id: 9,
    numero: 9,
    categoria: "A",
    copyright: false,
    titulo: "En Sion Jesús Hoy Reina",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En Sion Jesús hoy reina, alégrate, mortal,\ny ve con devoción y fe al trono celestial.\nEn Sion Jesús hoy reina en gloria y majestad,\nvenid, oh poderosos, y su gloria proclamad.",
      "En Sion Jesús hoy reina cual infinito ser,\nlos mares y abismos él gobierna con poder.\n¡Oh, todo el universo alabe al Salvador!\nProclámenle los pueblos cual amante Redentor.",
      "En Sion Jesús hoy reina, del orbe es regidor.\n¡Venid con regocijo y adoradle con fervor!\nY ante su grandeza venid con santa unción.\nVenid y Coronadle Rey con toda devoción."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_9.mp3"
    }
  },
  {
    id: 10,
    numero: 10,
    categoria: "A",
    copyright: false,
    titulo: "Engrandecido sea Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Engrandecido sea Dios\nen esta ocasión. Alegres,\njuntos a una voz dad gloria,\ngloria, gloria al Dios eternal.",
      "Durante el día que pasó,\nla mano del Señor\nde muchos males nos salvó:\ndad gloria, gloria,\ngloria al Dios eternal.",
      "El hasta aquí nos ayudó,\ny siempre proveerá.\nCon gratitud, placer y amor\ndad gloria, gloria,\ngloria al Dios eternal.",
      "A otras almas salva,\n¡oh Dios! Despiértalas, Señor;\nescucha nuestra petición,\ny salva, salva, salva,\nsalva al pecador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_10.mp3"
    }
  },
  {
    id: 11,
    numero: 11,
    categoria: "A",
    copyright: false,
    titulo: "Unidos en espíritu",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Unidos en espíritu al Coro celestial,\ncantemos con los ángeles un cántico triunfal.\nY si vertimos lágrimas al frente de la cruz,\nrebose hoy el júbilo, pues vive el buen Jesús.",
      "Lo que en el triste Gólgota derrota pareció,\ndesde el sellado túmulo en triunfo se cambió.\nVencido está el báratro, menguado su poder;\ny el mortal su súbdito ya no habrá de ser.",
      "Jesús, de gloria Príncipe, autor de nuestra paz,\nven, muéstranos benévolo tu esplendorosa faz.\nY acepta el dulce cántico de nuestra gratitud,\npor tu valiosa dádiva de la eternal salud"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_11.mp3"
    }
  },
  {
    id: 12,
    numero: 12,
    categoria: "A",
    copyright: false,
    titulo: "Tu Nombre es Dulce, Buen Jesús!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Tu nombre es dulce, buen Jesús!\n¡Oh cuánta paz, consuelo y luz\ndimana de tu santa cruz!,\nmi luz, mi esperanza.",
      "Jesús; en cuyo corazón\ndescargo entera mi aflicción,\npues calma toda turbación,\nJesús, tu amado nombre.",
      "Tu nombre pláceme escuchar;\nlo siento a mi alma alentar.\nCual canto calma mi llorar\nJesús, tu santo nombre.",
      "Jamás contó profano autor\ncuán dulce el nombre es del Señor;\nascienda siempre mi loor\na su glorioso nombre."
    ],
    coro: "¡Dulce nombre: Emmanuel!\n¡Dulce nombre, siempre fiel!\n¡Dulce nombre: gloria a él\nlos santos todos canten!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_12.mp3"
    }
  },
  {
    id: 13,
    numero: 13,
    categoria: "A",
    copyright: false,
    titulo: "Oh Dios, Mi Soberano Rey",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Dios, mi soberano Rey;\na ti daré loor;\ntu nombre yo exaltaré,\nsantísimo Señor.",
      "Tus obras evidencia son\nde tu infinito amor,\ny cantan con alegre voz\nlas glorias del Señor.",
      "Aquel que busca salvación,\nen Cristo la hallará;\ny su ferviente petición\nél pronto atenderá.",
      "Eternamente durará\nel reino del Señor.\nAllí sus siervos gozarán\nla plenitud de amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_13.mp3"
    }
  },
  {
    id: 14,
    numero: 14,
    categoria: "A",
    copyright: false,
    titulo: "Oye la Voz, Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oye la voz, Señor,\nque el pueblo con fervor eleva a ti;\nclama con ansiedad pidiendo libertad,\nque aparte la maldad lejos de sí.",
      "Tú la divina luz nos diste,\nbuen Jesús, al padecer;\ny no permitirás, Dios de bondad y paz,\nque siga el pueblo más tu luz sin ver.",
      "Quisiera alabar tu nombre sin cesar\nel pueblo, oh Dios.\nHaz que ningún poder opuesto\na tu querer siga sin conocer tu dulce voz.",
      "Libra a tu pueblo aquí,\nque humilde viene a ti, de esclavitud;\nmuéstrale tu poder y en su alma haz\nnacer consuelo y placer, gracia y virtud."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_14.mp3"
    }
  },
  {
    id: 15,
    numero: 15,
    categoria: "A",
    copyright: false,
    titulo: "En Espíritu Unidos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En espíritu unidos alabámoste, Señor;\na tus hijos redimidos nos concedes este honor.",
      "Adorarte y alabarte sea nuestra ocupación;\nque podamos proclamarte Dios de nuestra salvación.",
      "Eres tú, Señor, benigno; tú perdonas con amor;\nde alabanzas eres digno, infinito Bienhechor.",
      "Siempre seas alabado por tu inmensa caridad,\nnuestro Dios, y celebrado seas por la eternidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_15.mp3"
    }
  },
  {
    id: 16,
    numero: 16,
    categoria: "A",
    copyright: false,
    titulo: "Alza tu Canto",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Alza tu canto, ¡oh lengua mía!\nAlza tu canto, ¡oh corazón!\nLlénese el alma de alegría,\nde gozo santo y devoción.",
      "Vuelen al cielo los ecos santos\nque arranco alegre de mi laúd;\nvuelen al cielo mis dulces cantos,\nmis dulces cantos de gratitud.",
      "Padre, en tu regia, santa morada,\ndonde la dicha no tiene fin;\nallí mi patria miro esmaltada\nde bellas flores de tu jardín.",
      "Llévame, oh Padre, para consuelo;\nnada en la tierra yo espero ya;\nllévame al cielo, llévame al cielo,\nque allí tan sólo mi dicha está."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_16.mp3"
    }
  },
  {
    id: 17,
    numero: 17,
    categoria: "A",
    copyright: false,
    titulo: "A Cristo Coronad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A Cristo Coronad divino Salvador.\nSentado en alta majestad es digno de loor.\nAl Rey de gloria y paz loores tributad,\ny bendecid al Inmortal por toda eternidad.",
      "A Cristo Coronad Señor de nuestro amor,\nal triunfante celebrad, glorioso vencedor.\nPotente Rey de paz el triunfo consumó,\ny por su muerte en la cruz su grande amor mostró.",
      "A Cristo Coronad Señor de vida y luz;\ncon alabanzas proclamad los triunfos de la cruz.\nA él, pues, adorad, Señor de salvación;\nloor eterno tributad de todo corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_17.mp3"
    }
  },
  {
    id: 18,
    numero: 18,
    categoria: "A",
    copyright: false,
    titulo: "Suenen Dulces Himnos!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Suenen dulces himnos gratos al Señor\ny óiganse en concierto universal!\nDesde el alto cielo baja el Salvador\npara beneficio del mortal.",
      "Montes y collados fluyan leche y miel,\ny abundancia esparzan y solaz.\nGócense los pueblos, gócese Israel,\nque a la tierra viene ya la paz.",
      "Salte, de alegría lleno el corazón,\nla abatida y pobre humanidad;\nDios se compadece viendo su aflicción",
      "Lata en nuestros pechos noble gratitud\nhacia quien nos brinda redención;\ny a Jesús el Cristo, que nos da salud,\ntributemos nuestra adoración."
    ],
    coro: "¡Gloria!, ¡gloria sea a nuestro Dios!\n¡Gloria!, sí, cantemos a una voz.\nY el cantar de gloria que se oyó en Belén,\nsea nuestro cántico también.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_18.mp3"
    }
  },
  {
    id: 19,
    numero: 19,
    categoria: "A",
    copyright: false,
    titulo: "Loámoste, oh Dios!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Loámoste, ¡oh Dios!, con alegre canción,\nporque en Cristo tu Hijo nos diste perdón.",
      "A ti, oh Señor, que tu trono de luz\nhas dejado por darnos perdón en la cruz.",
      "Te damos loor, santo Consolador,\nque nos llenas de gozo y santo valor.",
      "A la Trinidad, entonemos canción,\nque es la fuente infinita de gracia y perdón."
    ],
    coro: "¡Aleluya! Te alabamos.\n¡Cuán grande es tu amor!\n¡Aleluya! Te adoramos,\nbendito Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_19.mp3"
    }
  },
  {
    id: 20,
    numero: 20,
    categoria: "A",
    copyright: false,
    titulo: "Ved a Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ved a Cristo, Rey de gloria;\nes del mundo el vencedor.\nDe la guerra vuelve invicto;\ntodos démosle loor.",
      "¡Exaltadle, exaltadle!\nRicos triunfos da Jesús.\nEntronadle allá en los cielos,\nen la refulgente luz.",
      "Si los malos se burlaron\nCoronando al Salvador,\nhoy los ángeles y santos",
      "Escuchad las alabanzas\nque se elevan hacia él.\nVictorioso reina Cristo:\nadorad a Emmanuel."
    ],
    coro: "¡Coronadle, santos todos!\n¡Coronadle Rey de reyes!\n¡Coronadle, santos todos!\n¡Coronad al Salvador!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_20.mp3"
    }
  },
  {
    id: 21,
    numero: 21,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, Señor, mi Dios y Salvador,\nmi gran anhelo es servirte a ti.\n¡Oh Salvador!, yo quiero siempre amarte,\ny en tus pasos quiero yo seguir.\nRindo mi ser a ti, mi Redentor.\nOh, comunícame tu grande amor.",
      "Cristo, yo quiero que me limpies tú,\ny quites todo mi pecado y mal.\nTu siervo siempre anhelo ser, Señor,\ny en tus manos quiero siempre estar.\nRindo mi ser a ti, mi Redentor:\nacepta hoy mi vida y mi amor.",
      "Cristo, Señor, mi apoyo en el pasado,\nmi esperanza en años que vendrán.\nDefensa mía sé en esta vida;\nsé tú mi paz por la eternidad.\nRindo mi ser a ti, mi Redentor;\nconfío en ti, ¡oh, Cristo, mi Señor!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_21.mp3"
    }
  },
  {
    id: 22,
    numero: 22,
    categoria: "A",
    copyright: false,
    titulo: "Alabanzas sin Cesar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Alabanzas sin cesar entonemos al Señor;\nhimnos mil a su bondad entonemos con amor.\nEl nos da la plenitud de su gracia celestial;\nes la fuente de salud para el infeliz mortal.",
      "Del pecado abrumador él nos vino a libertar;\nnos ofrece salvación, y nos llama sin cesar.\nYa podemos recorrer el camino terrenal\nsin temor hasta obtener nuestra herencia celestial.",
      "Y entretanto que el Señor nos reciba donde está,\nentonemos el loor que bondadoso acogerá.\nMientras huelle nuestro pie este mundo pecador,\nofrezcámosle con fe nuestro canto, nuestro amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_22.mp3"
    }
  },
  {
    id: 23,
    numero: 23,
    categoria: "A",
    copyright: false,
    titulo: "Oh Padre, Eterno Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Padre, eterno Dios,\nalzamos nuestra voz en gratitud\npor lo que tú nos das con sin igual amor,\ny hallamos dulce paz en ti, Señor.",
      "Bendito Salvador,\nte damos con amor el corazón;\nacepta, oh Señor,\nlo que en tu altar venimos a ofrendar\ncual vivo don.",
      "Espíritu de Dios,\nescucha nuestra voz,\ny en tu bondad derrama en nuestro ser\ndivina claridad, copiosa bendición y santidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_23.mp3"
    }
  },
  {
    id: 24,
    numero: 24,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Dios, mi Soberano Rey!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh Dios, mi soberano Rey!, a ti daré loor;\ntu nombre yo exaltaré, santísimo Señor.",
      "Tus obras evidencia son de infinito amor\ny cantan con alegre voz las glorias del Señor.",
      "Aquel que busca salvación, en Cristo la hallará;\na su ferviente petición él pronto atenderá.",
      "Eternamente durará el reino del Señor;\nmas ¡ay de aquellos que hoy aquí rechazan su amor!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_24.mp3"
    }
  },
  {
    id: 25,
    numero: 25,
    categoria: "A",
    copyright: false,
    titulo: "Ven a las Aguas Vivas, Ven",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven a las aguas vivas, ven.\nTe llama tu Hacedor:\noh peregrino, vuelve a mi;\nde gracia doy mi amor,\nde gracia doy mi amor.",
      "A cambio nada me darás:\ndeja tu posesión.\nMi paz en Cristo encontrarás;\nrecibe el santo don,\nrecibe el santo don.",
      "Tan libre es toda mi bondad\ny cuanto prometí.\nVen, prueba el néctar de mi amor,\ndeleita tu alma en mi,\ndeleita tu alma en mi."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_25.mp3"
    }
  },
  {
    id: 26,
    numero: 26,
    categoria: "A",
    copyright: false,
    titulo: "Señor Jesús, Supremo Rey",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor Jesús, supremo Rey,\nte alaba hoy tu humilde grey.\nAcepta el himno de loor\nque ofrece en prueba de su amor.",
      "Que el culto nuestro dado a ti\nalianza nueva sea aquí,\nde gracia, amor y santidad,\nuniéndonos en tu verdad.",
      "Que tus mercedes, buen Jesús,\nal alma llenen de tu luz;\njamás le lleguen a faltar\nmientras aquí haya de estar.",
      "Que cada día pueda estar\nmás cerca de Jesús\ny andar creciendo en gozo, fe y amor\nhasta llegar a ti, Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_26.mp3"
    }
  },
  {
    id: 27,
    numero: 27,
    categoria: "A",
    copyright: false,
    titulo: "Oh Pastor Divino, Escucha!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh Pastor divino!, escucha a los que en este buen lugar,\ncomo ovejas, congregados te venimos a buscar.\nVen, oh Cristo; ven, oh Cristo, tu rebaño a apacentar.",
      "Al perdido en el pecado, su peligro harás sentir;\nllama al pobre seducido, déjale tu voz oír.\nAl enfermo, al enfermo, pronto dígnate acudir.",
      "Guía al triste y fatigado al aprisco del Señor;\ncría al tierno corderito a tu lado, buen Pastor, con los pastos,\ncon los pastos de celeste y dulce amor.",
      "¡Oh Jesús!, escucha el ruego y esta humilde petición.\nVen a henchir a tu rebaño de sincera devoción.\nCantaremos, cantaremos tu benigna protección."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_27.mp3"
    }
  },
  {
    id: 28,
    numero: 28,
    categoria: "A",
    copyright: false,
    titulo: "Tu Pueblo Jubiloso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tu pueblo jubiloso se acerca a ti, Señor,\ny con triunfantes voces hoy canta tu loor;\npor todas tus bondades que das en plenitud,\ntu pueblo humildemente te expresa gratitud.",
      "Aunque el humano nunca te pueda aquí palpar,\ntú siempre con los tuyos has prometido estar;\nlos cielos te revelan, Rey nuestro y Creador,\nsentimos tu presencia en nuestro ser, Señor.",
      "¡Oh Cristo!, te adoramos, te damos nuestro amor;\n¡oh! llena nuestras vidas de fuerza, fe y valor;\nimpártanos tu gracia la vida celestial;\nque siempre te rindamos adoración leal."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_28.mp3"
    }
  },
  {
    id: 29,
    numero: 29,
    categoria: "A",
    copyright: false,
    titulo: "Ven, oh Todopoderoso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven, oh Todopoderoso, adorable Creador;\nPadre santo, cariñoso, manifiéstanos tu amor.",
      "Ven, oh Redentor divino, Dios de nuestra salvación;\nen nosotros haz morada, vive en nuestro corazón.",
      "Ven, Espíritu divino, del Señor precioso don;\nDios Consolador, inspira paz en todo corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_29.mp3"
    }
  },
  {
    id: 30,
    numero: 30,
    categoria: "A",
    copyright: false,
    titulo: "Imploramos tu Presencia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Imploramos tu presencia,\nSanto Espíritu d e Dios;\nnos avive tu influencia,\nfe y amor auméntanos.",
      "Da a las mentes luz divina\ny tu gracia al corazón.\nNuestro pecho a Dios\ninclina en sincera devoción.",
      "Que del Dios bendito\ntenga nuestro culto aceptación,\ny que sobre todos venga\nen raudales bendición."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_30.mp3"
    }
  },
  {
    id: 31,
    numero: 31,
    categoria: "A",
    copyright: false,
    titulo: "Del Culto el Tiempo Llega",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Del culto el tiempo llega,\ncomienza la oración,\nel alma a Dios se entrega,\n¡silencio y atención!\nSi al santo Dios la mente\nqueremos elevar,\nsilencio reverente\nhabremos de guardar.",
      "Mil coros celestiales\na Dios cantando están.\nCon ellos los mortales\nsus voces unirán.\nAlcemos pues el alma\nen santa devoción,\ngozando en dulce calma\nde Dios la comunión.",
      "La Biblia bendecida,\nde Dios revelación,\na meditar convida\nen nuestra condición.\n¡Silencio!, que ha llegado\ndel culto la ocasión;\n¡silencio y devoción!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_31.mp3"
    }
  },
  {
    id: 32,
    numero: 32,
    categoria: "A",
    copyright: false,
    titulo: "Despide Hoy tu Grey",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Despide hoy tu grey en paz y bendición,\ny las palabras de tu ley conserve el corazón.",
      "Enséñanos, Señor, tu ley a meditar,\nvivir unidos en amor, y en él por siempre andar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_32.mp3"
    }
  },
  {
    id: 33,
    numero: 33,
    categoria: "A",
    copyright: false,
    titulo: "Oh, Padre de la Humanidad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh, Padre de la humanidad,\nescucha nuestra voz;\nperdona todo nuestro errar,\nrenueva el ser,\ny hazle adorar con reverencia, oh Dios.",
      "Con fe sencilla tu llamar\nqueremos percibir,\ny como aquéllos junto al mar,\ntu voz de gracia al escuchar,\nen pos de ti seguir.",
      "Oh, danos tu perfecta paz,\nbendito Salvador;\noh, llénanos de tu solaz\ny de la calma que tú das,\nen prueba de tu amor.",
      "Tu gracia en nuestras almas pon;\ny quita el mal pensar;\ndel alma quita la opresión,\nque nuestras vidas confesión\nasí hagan de tu paz.",
      "Haz en nosotros reposar\ny así podremos escuchar\nen firmamento, tierra y mar\ntu dulce voz de amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_33.mp3"
    }
  },
  {
    id: 34,
    numero: 34,
    categoria: "A",
    copyright: false,
    titulo: "Oh Señor, Ven a bendecirnos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Señor, ven a bendecirnos,\nya nos vamos a retirar;\nacompáñenos tu gracia\nal salir de tu lugar;\ndanos gozo y reposo\nen el diario laborar.",
      "Oh Señor, te agradecemos\npor tu santa bendición,\npor el bello Evangelio\nde eterna salvación:\nes la historia de victoria\nque nos da consolación.",
      "Oh Señor, te imploramos,\ndanos tu felicidad;\ncon fervor hoy te rogamos:\nguárdanos en tu verdad.\nNuestro anhelo es ir al cielo\ny morar en tu Ciudad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_34.mp3"
    }
  },
  {
    id: 35,
    numero: 35,
    categoria: "A",
    copyright: false,
    titulo: "Después, Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Después, Señor,\nde haber tenido aquí\nde tu Palabra la bendita luz,\na nuestro hogar condúcenos\ny allí de todos cuida,\nbuen Pastor, Jesús.",
      "En nuestras almas\ngrabe con poder\ntu fiel Palabra cada exhortación;\ny que tu ley, pudiendo comprender,\ncontigo estemos en mayor unión.",
      "Al terminar, Señor,\nmi vida aquí,\nmis ojos pueda sin temor cerrar,\ny en mi glorioso despertar\nque en ti de paz eterna\npueda disfrutar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_35.mp3"
    }
  },
  {
    id: 36,
    numero: 36,
    categoria: "A",
    copyright: false,
    titulo: "Dios os Guarde",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios os guarde en su divino amor,\nhasta el día en que lleguemos\na la patria do estaremos\npara siempre con el Salvador.",
      "Dios os guarde en su divino amor;\nen la senda peligrosa\nde esta vida tormentosa\nos conserve en paz y sin temor.",
      "Dios os guarde en su divino amor,\nos conduzca su bandera,\ny os conceda en gran manera",
      "Dios os guarde en su divino amor,\ncon su gracia os sostenga\nhasta cuando Cristo venga\nen su reino con gran esplendor."
    ],
    coro: "Al venir Jesús nos veremos\na los pies de nuestro Rey;\nreunidos todos seremos,\nun redil habrá y sólo una grey.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_36.mp3"
    }
  },
  {
    id: 37,
    numero: 37,
    categoria: "A",
    copyright: false,
    titulo: "Todos Juntos Tributemos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Todos juntos tributemos\ngracias al buen Salvador;\ngrande ha sido su paciencia\ny precioso Su amor.\n¡Aleluya! ¡Aleluya!\nProclamemos su loor.",
      "Nuestro Rey divino, eterno,\nnos rodea con favor;\nfortalece a los cansados\ny perdona al pecador.\n¡ Aleluya! ¡Aleluya!\nProclamemos su loor.",
      "Mantengamos la confianza\nen el santo Redentor;\ny en la gloria, redimidos,\ncantaremos su amor.\n¡Aleluya! ¡Aleluya!\nProclamemos su loor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_37.mp3"
    }
  },
  {
    id: 38,
    numero: 38,
    categoria: "A",
    copyright: false,
    titulo: "Por la Mañana",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por la mañana, ¡oh Señor!,\nelevo a ti mi voz;\na tu buen nombre doy loor\ncon gratitud, mi Dios.",
      "El sol brillante ya salió,\ncamino en su luz;\ndel Salvador es símbolo,\ndel magno Rey, Jesús.",
      "Los cielos cuentan al que cree\nla gloria del Señor;\nla llama avivan de la fe\ny alientan el amor.",
      "En la mañana eterna, pues,\ncontigo cuando esté,\nyo del Cordero y de Moisés\nel himno entonaré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_38.mp3"
    }
  },
  {
    id: 39,
    numero: 39,
    categoria: "A",
    copyright: false,
    titulo: "Del Alba al Despuntar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Del alba al despuntar,\noh alma, al despertar\nbendice al buen Jesús.\nY luego al arrostrar\nel arduo batallar\nbendice al buen Jesús.",
      "Oh alma, en dulce paz,\nen plácido solaz\nbendice al buen Jesús.\nY en tiempo de aflicción,\nen ruda tentación\nbendice al buen Jesús.",
      "Marchando de él en pos\nhacia el Edén de Dios\nbendigo al buen Jesús.\nEn la eternal mansión\ncon alma y corazón\nbendeciré a Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_39.mp3"
    }
  },
  {
    id: 40,
    numero: 40,
    categoria: "A",
    copyright: false,
    titulo: "Dulce es la Canción",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dulce es la canción\nde la hora matinal:\nalivia cargas y aflicción;\nme trae paz divinal.",
      "Como la bella flor\nbusca del sol la luz,\nmi alma así con gran ardor\nte busca, oh buen Jesús.",
      "Horas de luz me son\ndadas, Señor, a mi,\ny es mi sincera aspiración\nusarlas para ti.",
      "Esta mañana, oh Dios,\noye mi petición:\nelevo a ti, Señor, mi voz\nen matinal canción."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_40.mp3"
    }
  },
  {
    id: 41,
    numero: 41,
    categoria: "A",
    copyright: false,
    titulo: "Las Faenas Terminadas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Las faenas terminadas, con el nocturnal telón\nque de los celestes atrios ya desciende en bendición,\nviene el sábado glorioso, de lo alto el rico don.",
      "Depongamos toda carga, toda cuita, todo afán;\ny pidamos ante el Padre, do sus hijos hoy están,\nen el sábado glorioso, el divino y vivo pan.",
      "Padre, tu favor concede; por la noche guárdanos;\nque sintamos tu presencia;\ncon la luz despiértanos en el sábado bendito,\ntu preciado día, oh Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_41.mp3"
    }
  },
  {
    id: 42,
    numero: 42,
    categoria: "A",
    copyright: false,
    titulo: "Condúceme, Maestro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Condúceme, Maestro, por tu bondad,\ny así jamás me falte seguridad;\nno puedo un solo paso sin ti andar;\noh, mi Jesús, sé siempre mi Luminar.",
      "En tu amor envuelve mi corazón,\ny dale paz y calma en la aflicción;\nque halle en ti reposo allá en la cruz,\nque siempre me halle cerca de ti, Jesús.",
      "Y cuando fuerte azote la tempestad,\ny al alma desanime la adversidad,\ncondúceme, Maestro, por tu bondad,\ny así jamás me falte seguridad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_42.mp3"
    }
  },
  {
    id: 43,
    numero: 43,
    categoria: "A",
    copyright: false,
    titulo: "Oh Dios, si he Ofendido un Corazón",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Dios, si he ofendido un corazón,\nsi he sido causa de su perdición,\nsi hoy he andado yo sin discreción\nte imploro perdón.",
      "Si he proferido voces de maldad,\nfaltando en demostrar la caridad,\noh santo Dios, buscándote en verdad\nte imploro perdón.",
      "Si he sido perezoso en trabajar,\no si he deseado yo contigo estar\nen vez de hacer tu celestial mandar,\nte imploro perdón.",
      "Tú, del contrito, fiel perdonador,\nque atiendes al clamor del pecador,\ndame perdón y guárdame en tu amor,\npor Cristo. Amén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_43.mp3"
    }
  },
  {
    id: 44,
    numero: 44,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, ya la Noche Cierra",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, ya la noche cierra;\nal turbado da solaz;\nnuestro error te confesamos;\nda reposo, calma y paz.",
      "Cuando el enemigo asalte\ny ande en torno destrucción,\nque tus ángeles, oh Padre,\nden amparo y protección.",
      "Aunque lóbrega la noche,\nsiempre vernos tú podrás\nvigilante, sin cansarte,\na tu pueblo guardarás.",
      "Si la muerte nos alcanza\nen el lecho nuestro aquí,\nque Jesús en su gran día\nnos despierte en gloria allí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_44.mp3"
    }
  },
  {
    id: 45,
    numero: 45,
    categoria: "A",
    copyright: false,
    titulo: "Baja el Sol",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Baja el sol tras las montañas, y la tarde ya llegó;\ncalma y quieta cae la noche; otro día terminó;\nya se fue con sus problemas, viene otro anochecer;\nmas cercano está el día cuando a Cristo he de ver.",
      "Muy cansado el peregrino ve el fin del día llegar,\nporque del trabajo arduo otra vez va a descansar.\nTal la vida en este mundo, que me toca afrontar,\ny las sombras de la noche sé que pronto he de probar.",
      "Otro día en el viaje a mi hogar, el celestial;\nya más cerca está el río claro como el cristal;\nya el cielo se aclara, puedo ver su áurea luz;"
    ],
    coro: "Más cerca estoy, más cerca estoy de mi hogar,\nmi hogar celestial;\nmás cerca del Edén adonde muy pronto iré,\ndonde el gozo es eternal.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_45.mp3"
    }
  },
  {
    id: 46,
    numero: 46,
    categoria: "A",
    copyright: false,
    titulo: "Guárdanos, oh Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Guárdanos, oh Cristo,\nal anochecer\ncon tu dulce calma\nhasta amancer.",
      "Brisas agradables\nvienen sobre nos\ncual amor sublime,\ndesde nuestro Dios.",
      "Vienen las tinieblas,\nviene oscuridad,\nmas hay luz perfecta\nen tu claridad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_46.mp3"
    }
  },
  {
    id: 47,
    numero: 47,
    categoria: "A",
    copyright: false,
    titulo: "Nuestro Sol se Pone Ya",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nuestro sol se pone ya,\ntodo en calma quedará;\nla plegaria levantad\nque bendiga la bondad\nde nuestro Dios.",
      "¡Oh Señor!, tu protección\ndale ahora al corazón;\ndale aquella dulce paz\nque a los tuyos siempre das\ncon plenitud.",
      "¡Oh Señor!, que al descansar\ny mañana, mi deber\npueda alegre y fiel hacer\nen tu loor."
    ],
    coro: "¡Santo, santo, santo, Señor Jehová!\nCielo y tierra de tu amor\nllenos hoy están, Señor,\n¡loor a ti!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_47.mp3"
    }
  },
  {
    id: 48,
    numero: 48,
    categoria: "A",
    copyright: false,
    titulo: "Señor Jesús, el Día ya se Fue",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor Jesús, el día ya se fue;\nla noche cierra, oh, conmigo sé;\nal desvalido, por tu compasión\ndale tu amparo y consolación.",
      "Veloz el día nuestro huyendo va,\nsu gloria, sus ensueños pasan ya;\nmudanza y muerte veo en redor;\nno mudas tú: conmigo sé, Señor.",
      "Tu gracia en todo el día he menester.\n¿Quién otro puede al tentador vencer?\n¿Qué otro amante guía encontraré?\nEn sombra o sol, Señor, conmigo sé.",
      "Que vea al fin en mi postrer visión\nde luz la senda que me lleve a Sion,\ndo alegre cantaré al triunfar la fe:\n\"Jesús conmigo en vida y muerte fue\"."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_48.mp3"
    }
  },
  {
    id: 49,
    numero: 49,
    categoria: "A",
    copyright: false,
    titulo: "En el Curso de este Día",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el curso de este día nos cercó tu dulce amor;\ntu poder nos protegía, y con cantos de loor\nte adoramos, te adoramos, ¡oh divino Redentor!",
      "Danos plácido reposo. Este ruego ven a oír:\nCuídanos, Señor bondoso; vela tú nuestro dormir;\nde peligro y asechanzas tú nos puedes hoy cubrir."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_49.mp3"
    }
  },
  {
    id: 50,
    numero: 50,
    categoria: "A",
    copyright: false,
    titulo: "Oyeme, Jesús Divino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Óyeme, Jesús divino,\npídote tu bendición;\nen la noche tan oscura,\ndame paz y protección.",
      "Tú has sido hoy mi día,\ngracias de hoy por tu amor;\ntodas mis necesidades\nhas suplido, o Señor.",
      "Guíame en el camino,\nlimpia hoy mi corazón;\ncuando de los cielos vuelvas\nllévame a tu mansión."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_50.mp3"
    }
  },
  {
    id: 51,
    numero: 51,
    categoria: "A",
    copyright: false,
    titulo: "Despídenos con tu Bendición",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Despídenos con tu bendición\nal retirarnos de este lugar;\nque la merced de la reunión\nen nuestras almas pueda quedar.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_51.mp3"
    }
  },
  {
    id: 52,
    numero: 52,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh, Dios, que oyes cada oración!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, Dios, que oyes cada oración\nescucha nuestra humilde petición!\nTú, que eres vida, gozo y solaz;\ndanos tu gracia y tu dulce paz.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_52.mp3"
    }
  },
  {
    id: 53,
    numero: 53,
    categoria: "A",
    copyright: false,
    titulo: "Padre, Reunidos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Padre, reunidos todos aquí\nte damos gracias por tu bondad,\npor tu cuidado paternal,\npor la abundante luz matinal.",
      "Haz que gozosos estemos hoy;\nque trabajemos llenos de afán;\npréstanos, Padre, tu protección;\na todos danos tu bendición."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_53.mp3"
    }
  },
  {
    id: 54,
    numero: 54,
    categoria: "A",
    copyright: false,
    titulo: "Gloria Demos al Padre",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Gloria demos al Padre,\nal Hijo y al Santo Espíritu.\nComo eran al principio,\nson hoy y habrán de ser\neternamente.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_54.mp3"
    }
  },
  {
    id: 55,
    numero: 55,
    categoria: "A",
    copyright: false,
    titulo: "A Dios, el Padre celestial",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A Dios, el Padre celestial;\nal Hijo, nuestro Redentor;\nal eterno Consolador,\nunidos, todos alabad.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_55.mp3"
    }
  },
  {
    id: 56,
    numero: 56,
    categoria: "A",
    copyright: false,
    titulo: "Gloria sea al Padre",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Gloria sea al Padre y al Hijo\nDios y al Santo Espíritu.\nComo eran al principio,\nson hoy y serán por siempre.\n¡Gloria sin fin! Amén, amén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_56.mp3"
    }
  },
  {
    id: 57,
    numero: 57,
    categoria: "A",
    copyright: false,
    titulo: "Jehová está en su santo templo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jehová está en su santo templo,\nJehová está en su santo templo;\nseamos reverentes,\nseamos reverentes ante el Señor.\n¡Silencio!, ¡silencio!, ante el Señor.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_57.mp3"
    }
  },
  {
    id: 58,
    numero: 58,
    categoria: "A",
    copyright: false,
    titulo: "Jehová te Bendiga",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jehová te bendiga,\nte guarde y brille sobre ti su faz,\ny te dé paz, y te dé paz;\nte dé su gracia y su misericordia,\ny alce a ti,\nti su rostro;\nponga en ti gracia,\ny en ti haya paz.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_58.mp3"
    }
  },
  {
    id: 59,
    numero: 59,
    categoria: "A",
    copyright: false,
    titulo: "Jehová en el Alto Cielo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jehová en el alto cielo\nJehová en esta tierra,\nJehová en su santo templo\nes digno de alabanza.\nVenid y adoradle,\ny dadle todo honor.\nSilencio ante el Señor.\nSilencio ante el Señor.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_59.mp3"
    }
  },
  {
    id: 60,
    numero: 60,
    categoria: "A",
    copyright: false,
    titulo: "Hosanna!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Hosanna! ¡Hosanna! ¡Hosanna!\nEn cielo y tierra,\nes del Señor la gloria y potestad,\ny nos circunda\ncon su amor la excelsa Trinidad.\nAlzad, pues, himnos de loor,\nque es grato al sumo Bien,\ny a Dios rindamos todo honor\nahora y siempre, amén.\n¡A Dios rindamos todo honor,\ntodo honor, todo honor!\n¡A Dios rindamos todo honor,\nahora y siempre! Amen."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_60.mp3"
    }
  },
  {
    id: 61,
    numero: 61,
    categoria: "A",
    copyright: false,
    titulo: "Grande es el amor divino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Grande es el amor divino,\nes más amplio que el mar.\n¡Qué bondad en su justicia!\nVino el mundo a libertar.",
      "En la sangre del Maestro\nhay poder de salvación,\nsanidad hay para el alma,\ny del mal hay protección.",
      "Mas, oh cuánto limitamos\npor la débil comprensión\nsu poder, su magna gracia,\ndespreciando su gran don.",
      "Respondamos prestamente\nal llamado de Jesús;\nredimiónos ampliamente\npor su muerte en la cruz."
    ],
    coro: "El nos llama con amor;\n¡oh, sigamos al Señor!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_61.mp3"
    }
  },
  {
    id: 62,
    numero: 62,
    categoria: "A",
    copyright: false,
    titulo: "Oh Amor de Dios!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh amor de Dios!\ntu inmensidad, el hombre no podrá contar,\nni comprender la gran verdad:\nque Dios al hombre pudo amar.\nCuando el pecar entró al hogar\nde Adán y Eva en Edén,\nDios los sacó, mas prometió\nun Salvador también.",
      "Si fuera tinta todo el mar,\ny todo el cielo un gran papel,\ny todo hombre un escritor,\ny cada hoja un pincel,\npara escribir de su existir,\nno bastarían jamás.\nEl me salvó, y me lavó\ny me da el cielo además.",
      "Y cuando el mundo pasará,\ncon cada trama y plan carnal,\ny todo reino caerá,\ncon cada trono mundanal,\nel gran amor del Redentor\npor siempre durará;\nla gran canción de salvación\nsu pueblo entonará."
    ],
    coro: "¡Oh amor de Dios!\nbrotando estás, inmensurable, eternal,\npor las edades durarás inagotable raudal.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_62.mp3"
    }
  },
  {
    id: 63,
    numero: 63,
    categoria: "A",
    copyright: false,
    titulo: "Mi Dios me ama",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi Dios me ama, él me ha salvado;\nmi Dios me ama, él me ama a mí.",
      "Cautivo estuve en el pecado;\ncautivo estuve, sin Salvador.",
      "Envió a Cristo para librarme;\nenvió a Cristo y me libró.",
      "Me ha invitado por su Palabra;\nme ha invitado con tierno amor."
    ],
    coro: "Y lo repetiré: Mi Dios me ama,\nmi Dios me ama, él me ama a mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_63.mp3"
    }
  },
  {
    id: 64,
    numero: 64,
    categoria: "A",
    copyright: false,
    titulo: "Hay Anchura en su Clemencia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay anchura en su clemencia,\ncual la anchura de la mar;\nhay bondad en su justicia;\nse complace en perdonar.",
      "Bienvenida al penitente,\ny aun más gracia al justo da;\nCristo es Salvador clemente;\nal enfermo sanará.",
      "El amor de Dios es ancho,\nmás que humana comprensión;\nadmirablemente manso\nsu paterno corazón.",
      "Le creeríamos si fuera\nmás sencillo nuestro amor;\nse vería en nuestra vida\nla dulzura del Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_64.mp3"
    }
  },
  {
    id: 65,
    numero: 65,
    categoria: "A",
    copyright: false,
    titulo: "Dios de Luz y Gloria Excelsa",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios de luz y gloria excelsa,\naunque débil nuestro amor,\nque tu Espíritu enternezca\ntodo corazón, Señor.",
      "No te abarca el ancho cielo,\nde tu faz la tierra huirá;\ny aunque apénate el pecado,\ntu piedad perdonará.",
      "Gratitud dará mi lengua,\nbajo gracia o corrección;\ntoma el don que humilde ofrezco:\nmente, fuerza y corazón.",
      "Al ganar la gran victoria,\nlibre de egoísmo aquí;\npuedo proclamar la gloría\nde quien se entregó por mí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_65.mp3"
    }
  },
  {
    id: 66,
    numero: 66,
    categoria: "A",
    copyright: false,
    titulo: "Omnisapiente Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Omnisapiente Dios,\nRey que ordenas el universo por tu potestad,\nmuestra tu amor desde el cielo, donde reinas,\ndanos tu paz, Dios de eterna bondad.",
      "Piadoso eres tú,\ny aunque este mundo te ha rechazado y desprecia tu grey,\ntienes paciencia con el errabundo;\nhaz que también obedezca tu ley.",
      "¡Justo eres tú, Señor! Perdón pediste por los que dábante muerte muy cruel.\nHoy te rogamos por los que redimiste:\nóigante y lleguen al santo vergel.",
      "Te agradecemos hoy;\nte alabamos, pues nos libraste de la maldición.\nPor todo el mundo tus glorías cantamos:\n¡tuyo el poder, Rey de la creación!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_66.mp3"
    }
  },
  {
    id: 67,
    numero: 67,
    categoria: "A",
    copyright: false,
    titulo: "Señor, mi Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor, mi Dios, al contemplar los cielos\ny astros mil girando en derredor,\ny al oírte en retumbantes truenos,\ny al contemplar el sol en su esplendor,",
      "Al contemplar arroyos y florestas,\nlos pajarillos oigo en su cantar,\ny alrededor percibo mil bellezas,\ny brisa suave viene a refrescar.",
      "Y cuando pienso en ti, Señor querido,\nquien por mis culpas en penosa cruz\ndolor sufriste que hombre no ha sufrido,",
      "Y cuando vengas en brillante gloria\nme llevarás con gozo a mi hogar.\nTe alabaré por darme la victoria:\ntu gran poder y gloria he de cantar."
    ],
    coro: "Te amo y proclamo por tu gran poder:\ncuán grande eres, ¡oh Jehová!\nTe exalto a ti con toda mi alma y ser:\n¡grande eres tú! ¡grande eres tú!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_67.mp3"
    }
  },
  {
    id: 68,
    numero: 68,
    categoria: "A",
    copyright: false,
    titulo: "Mi Creador, mi Rey",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi Creador, mi Rey,\nte debo lo que soy;\nde amor la fuente es tu ley\ny en ti contento estoy;\nde amor la fuente es tu ley\ny en ti contento estoy.",
      "Tu criatura soy,\nmi vida está en ti;\nel don que me entregas hoy\nmás vale que el rubí;\nel don que me entregas hoy\nmás vale que el rubí.",
      "Señor, ¿qué puedo dar?\n¡Los cielos tuyos son!\nTu amor demanda sin cesar\nun grato corazón;\ntu amor demanda sin cesar\nun grato corazón.",
      "Inspira mi alma, oh Dios,\ncon celo y virtud,\ny alzaré a ti mi voz\nen santa gratitud;\nen santa gratitud."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_68.mp3"
    }
  },
  {
    id: 69,
    numero: 69,
    categoria: "A",
    copyright: false,
    titulo: "Al Rey Adorad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al Rey adorad, grandioso Señor,\ny con gratitud cantad de su amor.\nAnciano de días, y gran Defensor,\nde gloria vestido, te damos loor.",
      "Load su amor, su gracia cantad;\nvestido de luz y de majestad.\nSu carro de fuego en las nubes mirad,\nrefulgen sus huellas en la tempestad.",
      "¿Quién puede tu providencia contar?\nPues me das el aire para respirar,\nen valles y en montes alumbra tu luz,\ny con gran dulzura me cuidas, Jesús.",
      "Muy frágiles son los hombres aquí,\nmas por tu bondad confiamos en ti.\ntu misericordia aceptamos, Señor,\nCreador nuestro, Amigo fiel y Redentor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_69.mp3"
    }
  },
  {
    id: 70,
    numero: 70,
    categoria: "A",
    copyright: false,
    titulo: "Santo, Santo, Santo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Santo, Santo, Santo;\nDios Omnipotente;\ncanto de mañana\ntu excelsa majestad;\nSanto, Santo, Santo,\nfuerte y clemente,\nDios sobre todo,\nRey de eternidad.",
      "Santo, Santo, Santo;\nángeles te adoran;\nechan sus Coronas\ndel trono en derredor;\nmiles y millones ante\nti se postran;\ntú que eras, y eres,\ny has de ser, Señor.",
      "Santo, Santo, Santo;\naunque estés velado,\naunque el ojo humano\ntu faz no pueda ver;\nsólo tú eres santo,\ncomo tú no hay otro;\nperfecto es tu poder."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_70.mp3"
    }
  },
  {
    id: 71,
    numero: 71,
    categoria: "A",
    copyright: false,
    titulo: "Load al Padre",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Load al Padre por su omnipotencia;\nload al Padre, proclamada su gracia.\nVoz de alabanza alce toda alma.\n¡Load al Padre!",
      "Gloria al Padre por su gran ternura;\ngloria al Padre, sea siempre el canto.\nPor su grandeza alabadle todos.\n¡Gloria al Padre!",
      "Honrad al Padre, el Señor benigno;\nhonrad al Padre, quien os da la vida.\n¡Huestes del cielo, pueblos de la tierra,\nhonrad la Padre!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_71.mp3"
    }
  },
  {
    id: 72,
    numero: 72,
    categoria: "A",
    copyright: false,
    titulo: "Eterno Dios, mi Creador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Eterno Dios, mi Creador,\nmi amparo en la aflicción,\ntu has sido mi Consolador\nen toda ocasión.",
      "Mis años a tu vista son\ncual brisas del ayer;\ncual hierba es mi condición,\ncae al atardecer.",
      "Mi vida bajo tu ala está\nseguro habitaré;\ntu Espíritu me ayudará\ny en calma andaré.",
      "Eterno Dios, mi Redentor,\nconfío sólo en ti;\nsé tú mi Guía, oh Señor,\nen mi camino aquí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_72.mp3"
    }
  },
  {
    id: 73,
    numero: 73,
    categoria: "A",
    copyright: false,
    titulo: "Padre, oh Padre, Ven a Guiarnos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Padre, oh Padre, ven a guiarnos\npor el tempestuoso mar;\nPadre, oh Padre, ven ahora\na guardarnos del pecar.\nEres tú confiaza nuestra;\nven a guiarnos a tu hogar.",
      "Salvador, tú nos conoces.\n¡Ven y ayúdanos, Señor!\nTú sufriste tentaciones\ny saliste vencedor;\nfrente al Padre intercedes\npor el hombre pecador.",
      "Santo Espíritu divino,\nParacleto sin igual,\ntú revelas el camino,\nalumbrando cual fanal.\nTrino Dios, ven a llevarnos\na la Patria celestial."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_73.mp3"
    }
  },
  {
    id: 74,
    numero: 74,
    categoria: "A",
    copyright: false,
    titulo: "A ti, Glorioso Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A ti, glorioso Dios,\ncantamos alabanzas;\nrendímoste honor\npor todas tus grandezas.\nNos das tu bendición\nen nuestra senda aquí;\nnos guiarás, Señor,\na tu mansión allí.",
      "Ven siempre, oh gran Dios,\nmuy cerca de nosotros;\ncon celo y con fervor\nqueremos ir a otros.\nTu brazo protector\ndel mal nos guardará;\nen lucha y aflicción\nconsuelo nos será.",
      "Oh Padre, eterno Dios,\ncantámoste loores,\ny al Hijo Redentor,\nSeñor de los señores,\ny al Santo Espíritu,\nel gran Consolador:\ncantamos con fervor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_74.mp3"
    }
  },
  {
    id: 75,
    numero: 75,
    categoria: "A",
    copyright: false,
    titulo: "Oh Dios Eterno",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Dios eterno, tu poder\nse muestra por doquier\ncon maravillas de tu amor\nen nuestro pobre ser.",
      "Tu mano siempre llevará\na la humanidad,\ny a tus fieles guardará\nen sendas de verdad.",
      "El santo nunca temerá\nla negra tempestad,\nporque tu gracia brillará\naun en la oscuridad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_75.mp3"
    }
  },
  {
    id: 76,
    numero: 76,
    categoria: "A",
    copyright: false,
    titulo: "Cuán Grande es Dios!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Cuán grande es Dios!\n¡Mortales temblad!\nOímos su voz en la tempestad;\nbrocado de estrellas es su pabellón,\ny vientos y rayos sus ángeles son.",
      "Tu inmensa bondad, ¿qué lengua dirá?\nO ¿quién tu verdad jamás sondeará?\nCon suma largueza tus manos proveen\ny es fiel tu promesa a los que en ti creen.",
      "El frágil varón que triste está,\nsu consolación en ti hallará.\nTu misericordia no puede faltar:\na tu eterna gloria le has de llevar.",
      "¡Tremendo poder!, ¡ilímite amor!,\n¡misterioso ser!, te damos loor.\n¡Cuán maravillosa tu gran creación!\nMas, ¡oh qué asombrosa es tu redención!",
      "¡Load al gran Rey; su gloria ensalzad!\nSu amor a su grey con gracia cantad.\nEs nuestro escudo, baluarte y sostén,\nel Omnipotente por siglos. Amén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_76.mp3"
    }
  },
  {
    id: 77,
    numero: 77,
    categoria: "A",
    copyright: false,
    titulo: "Yo Canto el Poder de Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo canto el poder de Dios,\ndel Creador, Jesús;\nhabló con su potente voz\ny apareció la luz.\nYo canto el poder de Aquel\nque en alto puso el sol,\nen la pradera el clavel,\nen playa el caracol.",
      "Yo canto la bondad de quien\nlos árboles plantó,\nel mar mantiene en su nivel,\nlos pájaros creó.\nLa maravilla de su amor\nla observo por doquier,\nya mire al cielo en su esplendor\no al oscurecer.",
      "Tus glorias proclamadas son\npor cuanto aquí se ve:\nla flor, el viento y el gorrión,\nla risa del bebé.\nBien sé que en tu presencia estoy,\nque tú conmigo vas,\ntú, Dios, allí estás."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_77.mp3"
    }
  },
  {
    id: 78,
    numero: 78,
    categoria: "A",
    copyright: false,
    titulo: "EI Mundo es de mi Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El mundo es de mi Dios;\nsu eterna posesión.\nEleva a Dios su dulce voz\nla entera creación.\nEl mundo es de mi Dios;\nconforta así pensar.\nEl hizo el sol y el arrebol,\nla tierra, cielo y mar.",
      "El mundo es de mí Dios;\nescucho alegre son\ndel ruiseñor, que al Creador\neleva su canción.\nEl mundo es de mi Dios;\ny en todo mi redor\nlas flores mil con voz sutil\ndeclaran fiel su amor.",
      "El mundo es de mi Dios;\njamás lo olvidaré.\nY aunque infernal parezca el mal,\nmi Padre Dios es Rey.\nEl mundo es de mi Dios;\ny al Salvador Jesús\ncon la obra de la cruz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_78.mp3"
    }
  },
  {
    id: 79,
    numero: 79,
    categoria: "A",
    copyright: false,
    titulo: "Mirando al cielo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mirando al cielo cuajado de estrellas\nse turba el alma con su esplendor.\nSu voz solemne el misterio impone\ny siente a Dios el corazón.\nLa nube del espacio y el mar,\ny el mar que eleva su clamor, clamor,\nla flor y el agua y el monte soberbio\nle cantan himnos a su Dios;\nle cantan himnos a su Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_79.mp3"
    }
  },
  {
    id: 80,
    numero: 80,
    categoria: "A",
    copyright: false,
    titulo: "¿Sabes cuántos?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Sabes cuántos claros astros dan al cielo su fulgor?\n¿Sabes cuántas nubes bellas van del mundo alrededor?\nSólo Dios los ha contado y ninguno le ha faltado.\nEntre todos ¿cuántos son? Entre todos ¿cuántos son?",
      "¿Sabes cuántas mariposas jugueteando al sol están?\n¿Sabes cuántos pececitos en el agua saltos dan?\nDios a todos ha creado, de la vida el gozo ha dado,\npara disfrutar su don, para disfrutar su don.",
      "¿Sabes cuántos tiernos niños con el sol despertarán?\n¿Sabes cuántas son las madres que su sueño velarán?\nDios, que a todos ha otorgado su placer y buen agrado,\nte conoce y te ama a ti, te conoce y te ama a ti."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_80.mp3"
    }
  },
  {
    id: 81,
    numero: 81,
    categoria: "A",
    copyright: false,
    titulo: "Señor, yo te conozco!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Señor, yo te conozco!\nLa noche azul, serena, me dice desde lejos:\n\"Tu Dios se esconde allí\".\nPero la noche oscura, la de nublados llena,\nme dice más pujante: \"Tu Dios se acerca a ti\".",
      "Te acercas, sí; conozco las orlas de tu manto\nen esa ardiente nube con que ceñido estás;\nel resplandor conozco de tu semblante santo\ncuando al cruzar el éter, relampagueando vas.",
      "Conozco de tus pasos las invisibles huellas\ndel repentino trueno en el crujiente son;\nlas chispas de tu carro conozco en las centellas,\ntu aliento en el rugido del rápido aquilón.",
      "¿Quién ante ti parece?\n¿Quién es en tu presencia más que una arista seca\nque el aire va a romper?\nTus ojos son el día; tu soplo es la existencia;\ntu alfombra el firmamento; la eternidad tu ser.",
      "¡Señor!, yo te conozco; mi corazón te adora;\nmi espíritu de hinojos ante tus pies está;\npero mi lengua calla,\nal grande y buen Jehová."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_81.mp3"
    }
  },
  {
    id: 82,
    numero: 82,
    categoria: "A",
    copyright: false,
    titulo: "Los Heraldos Celestiales",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Los heraldos celestiales\ncantan con sonora voz:\n¡gloria al Rey recién nacido\nque del cielo descendió!\nPaz, misericordia plena,\nfranca reconciliación\nentre el Padre, agraviado,\ny el mortal, que le ofendió.",
      "¡Salve!, Príncipe glorioso\nde la paz y del perdón.\n¡Salve a ti!, que de justicia\neres el divino Sol.\nLuz y vida resplandecen\na tu grata aparición,\ny en tus blancas alas traes\nla salud al pecador.",
      "Nace manso, despojado\nde su gloria y esplendor,\nporque no muramos todos\nen fatal condenación.\nNace, sí, para que el hombre\ntenga plena redención,\na la vida el pecador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_82.mp3"
    }
  },
  {
    id: 83,
    numero: 83,
    categoria: "A",
    copyright: false,
    titulo: "Al Mundo Paz!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Al mundo paz, nació Jesús,\nnació ya nuestro Rey!\nEl corazón ya tiene luz,\ny paz su santa grey,\ny paz su santa grey,\ny paz, y paz, su santa grey.",
      "¡Al mundo paz; el Salvador,\nsupremo reinará!\nYa es feliz el pecador:\nJesús perdón le da,\nJesús perdón le da,\nJesús, Jesús perdón le da.",
      "Al mundo él gobernará\ncon gracia y con poder;\ny a toda nación demostrará\nsu amor y su poder,\nsu amor y su poder,\nsu amor, su amor y su poder."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_83.mp3"
    }
  },
  {
    id: 84,
    numero: 84,
    categoria: "A",
    copyright: false,
    titulo: "Se Oye un Canto en Alta Esfera",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Se oye un canto en alta esfera.\n\"En los cielos gloria a Dios;\nal mortal paz en la tierra\",\ncanta la celeste voz.\nCon los cielos alabemos\nal eterno Rey, cantemos\na Jesús, a nuestro bien,\ncon el Coro de Belén.\nCanta la celeste voz:\n\"¡En los cielos gloria a Dios!\"",
      "El Señor de los señores,\nel Ungido celestial,\na salvar los pecadores\nvino al seno virginal.\n¡Gloria al Verbo encarnado,\nen humanidad velado!\n!Gloria al Santo de Israel,\ncuyo nombre es Emmanuel!\nCanta la celeste voz:\n\"¡En los cielos gloria a Dios\"!",
      "Príncipe de paz eterna,\n¡gloria a ti, Señor Jesús!\ntú nos traes vida y luz.\nHas tu majestad dejado,\ny buscarnos te has dignado;\npara darnos el vivir\na la muerte quieres ir.\nCanta la celeste voz:\n\"¡En los cielos gloria a Dios!\""
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_84.mp3"
    }
  },
  {
    id: 85,
    numero: 85,
    categoria: "A",
    copyright: false,
    titulo: "Venid, Pastorcillos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Venid, pastorcillos,\nvenid a adorar\nal Rey de los cielos\nnacido en Judá;\nsin ricas ofrendas\npodemos llegar,\nque el Niño prefiere\nla fe y la bondad.",
      "Un rústico techo\nabrigo le da,\npor cuna un pesebre,\npor templo un portal;\nen lecho de pajas\nincógnito está\nquien quiso a los astros\nsu gloria prestar.",
      "Hermoso lucero\nle vino a anunciar,\ny magos de oriente\nbuscándole van;\ndelante se postran\ndel Rey de Judá;\ntributo le dan."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_85.mp3"
    }
  },
  {
    id: 86,
    numero: 86,
    categoria: "A",
    copyright: false,
    titulo: "Venid, Pequeñuelos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Venid, pequeñuelos,\nvenid sin tardar;\nvenid al pesebre,\nvenid a admirar\ndel Padre en los cielos\nel Don sin igüal.\n¡A él sea gloria,\ny paz al mortal!",
      "Mirad en pesebre\nde pobre mortal,\nlindísimo niño\nen blanco pañal.\nUn rayo ilumina\nsu rostro infantil;\nen vez de la púrpura\nsirve heno vil.",
      "Mirad en su cuna,\nniñitos, la paz;\nJosé con María\ncontemplan su faz;"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_86.mp3"
    }
  },
  {
    id: 87,
    numero: 87,
    categoria: "A",
    copyright: false,
    titulo: "Noche de Paz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Noche de paz, noche de amor.\nTodo duerme en derredor.\nEntre los astros que esparcen su luz,\nbella anunciando al niñito Jesús,\nbrilla la estrella de paz,\nbrilla la estrella de paz.",
      "Noche de paz, noche de amor.\nOye humilde, fiel pastor:\nCoros celestes proclaman salud,\ngracias y glorias en gran plenitud,\npor nuestro buen Redentor,\npor nuestro buen Redentor.",
      "Noche de paz, noche de amor.\nVed qué bello resplandor\nluce en el rostro del niño Jesús,\nen el pesebre, del mundo la luz;\nastro de eterno fulgor,\nastro de eterno fulgor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_87.mp3"
    }
  },
  {
    id: 88,
    numero: 88,
    categoria: "A",
    copyright: false,
    titulo: "¿Qué Significa ese Rumor?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Qué significa ese rumor?\n¿Qué significa ese tropel?\n¿Quién puede un día y otro así\nla muchedumbre conmover?\nResponde el pueblo en alta voz:\n\"Pasa Jesús de Nazaret\".\nResponde el pueblo en alta voz:\n\"Pasa Jesús de Nazaret\".",
      "¿Quién es, decid, aquel Jesús\nque manifiesta tal poder?\n¿Por qué a su paso la ciudad\nse agolpa ansiosa en torno de él?\nLo dice el pueblo, oíd su voz:\n\"Pasa Jesús de Nazaret\".\nLo dice el pueblo, oíd su voz:\n\"Pasa Jesús de Nazaret\".",
      "Jesús, quien vino acá a sufir\nangustia, afán, cansancio y sed;\ny dio consuelo, paz, salud,\na cuantos viera padecer.\nPor eso alegre el ciego oyó:\n\"Pasa Jesús de Nazaret\".\n\"Pasa Jesús de Nazaret\".",
      "Aun hoy se acerca el buen Jesús,\ndispuesto a hacernos mucho bien,\ny amante llama a nuestro hogar\ny quiere en él permanecer.\nSe acerca, sí, ¿no oís su voz?\n\"Pasa Jesús de Nazaret\".\nSe acerca, sí, ¿no oís su voz?\n\"Pasa Jesús de Nazaret\"."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_88.mp3"
    }
  },
  {
    id: 89,
    numero: 89,
    categoria: "A",
    copyright: false,
    titulo: "Los tiernos años",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Los tiernos años que Jesús\nviviera en Nazaret,\n¡cuán bellos son: cual manantial\nque fluye en secadal!\nLos límpidos reflejos de\nla noche oriental\nrepiten el insondable\namor del Padre celestial.",
      "Los tiernos años que Jesús\nviviera en Nazaret,\nestán abiertos ante Dios,\ncual sol primaveral;\ntambién al hombre cuando ve\nen su divina faz\nsincero anhelo de triunfar,\nsincero bienhacer.",
      "Los tiernos años que Jesús\nviviera en Nazaret,\npletóricos de amor están\npara la raza mortal.\n¡Escoge, joven, tú también\nentre el bien y el mal!\ny por la humanidad!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_89.mp3"
    }
  },
  {
    id: 90,
    numero: 90,
    categoria: "A",
    copyright: false,
    titulo: "Hubo Uno que Quiso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hubo Uno que quiso por mí padecer\ny morir, por mi alma salvar;\nel camino cruento a la cruz recorrer,\npara así mis pecados lavar.",
      "El es todo ternura y amor para mí,\nmi alma impura su sangre lavó;\nya no hay condenación, libre soy, yo lo sé;\nmi pecado en la cruz él clavó.",
      "Me atendré al Maestro, jamás dejaré\nel sendero que él mismo trazó,\ny mis labios y mi alma alzarán su canción,"
    ],
    coro: "¡En la cruz, en la cruz mis pecados clavó!\n¡Cuánto quiso por mí padecer!\nCon angustia a la cruz fue el benigno Jesús,\ny en su cuerpo mis culpas llevó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_90.mp3"
    }
  },
  {
    id: 91,
    numero: 91,
    categoria: "A",
    copyright: false,
    titulo: "Al Contemplar Ia Excelsa Cruz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al contemplar la excelsa cruZ\ndo el Rey de gloria sucumbió,\ntesoros mil que ven la luZ\ncon gran desdén contemplo yo.",
      "No me permitas, Dios, gloriar,\nmás que en la muerte del Señor;\nlo que más pueda ambicionar\nlo doy gozoso por su amor.",
      "Si la riqueza terrenal\npudiera yo a mis plantas ver,\npequeña ofrenda mundanal\nsería el írsela a ceder.",
      "Aquel dolor tan grande y cruel\nque así sufrió mi Salvador\ndemanda que consagre a él mi ser,\nmi vida y mí amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_91.mp3"
    }
  },
  {
    id: 92,
    numero: 92,
    categoria: "A",
    copyright: false,
    titulo: "Jamás Podrá alguien Separarnos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jamás podrá alguien separarnos\nde Cristo nuestro Redentor\nni cosa alguna arrebatarnos\nel gozo de su tierno amor:\nni luchas, pruebas o dolores,\nni amenazas o aflicción;\nni aun este mundo y sus honores,\nsu pompa, gloria y tentación.",
      "Con furia loca lo azotaron,\ny así humillaron al Señor,\ny sin piedad atravesaron\nlas manos de mi Salvador.\nA esos pies que caminaron\npara sanar y bendecir,\nhorribles clavos traspasaron,\nla suerte humana al compartir.",
      "Qué horror que por mi vil pecado\nel Salvador así sufrió,\nque por mis culpas fue azotado\ny burlas crueles recibió.\n¿Ingratos hemos de alejarnos\nde Aquel que tanto nos amó,\nsu propia vida entregó?"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_92.mp3"
    }
  },
  {
    id: 93,
    numero: 93,
    categoria: "A",
    copyright: false,
    titulo: "Sangró mi Soberano Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sangró mi soberano Dios,\nmurió mi Salvador.\nSu vida quiso entregar\npor mí, tan pecador.",
      "Por mis pecados y maldad\nél en la cruz gimió:\n¡Qué amor, qué gracia, qué piedad\nsin par así mostró!",
      "Debió ocultar el sol su faZ\ncuando el Señor Jesús,\npor la criatura en rebelión,",
      "Y yo también, al ver su cruz,\nel rostro encubriré;\ncon lágrimas de gratitud\nmi alma inundaré.",
      "Mas no con llanto pagaré\nla deuda de su amor.\nMi ser entero dóitelo:\n¡No puedo más, Señor!"
    ],
    coro: "¡Oh, Salvador, ayúdame;\nque sea fiel a ti;\ny cuando en gloria reines tú,\nacuérdate de mí!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_93.mp3"
    }
  },
  {
    id: 94,
    numero: 94,
    categoria: "A",
    copyright: false,
    titulo: "Un Día",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un día que el cielo sus glorias cantaba,\nun día que el mal imperaba más cruel,\nJesús descendió y al nacer de una virgen\nnos dio por su vida un ejemplo tan fiel.",
      "Un día lleváronle al monte Calvario,\nun día enclaváronle sobre una cruz;\nsufriendo dolores y pena de muerte,\nexpiando el pecado, salvóme Jesús.",
      "Un día dejaron su cuerpo en el huerto:\ntres días en paz reposó de dolor;\nvelaban los ángeles sobre el sepulcro",
      "Un día la tumba ocultarle no pudo,\nun día el ángel la piedra quitó;\nhabiendo Jesús ya a la muerte vencido,\na estar con su Padre en su trono, ascendió."
    ],
    coro: "Vivo, me amaba; muerto, salvóme;\ny en el sepulcro mi mal enterró;\nresucitado, él es mi justicia;\nun día él viene, pues lo prometió.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_94.mp3"
    }
  },
  {
    id: 95,
    numero: 95,
    categoria: "A",
    copyright: false,
    titulo: "Rostro divino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Rostro divino, ensangrentado;\ncuerpo llagado por nuestro bien,\ncalma, benigno, justos enojos,\nlloren los ojos que así te ven.",
      "Manos preciosas, tan laceradas,\npor mí clavadas en una cruz.\nEn este valle sean mi guía,\nmi alegría, fiel norte y luz.",
      "Tus pies heridos, Cristo paciente,\nyo indiferente los taladré.\nMas penitente, hoy que te adoro,\ntu gracia imploro: Señor pequé.",
      "Crucificado en un madero,\nmanso Cordero, mueres por mí.\nPor eso el alma triste y llorosa\nsuspira ansiosa, Señor, por ti."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_95.mp3"
    }
  },
  {
    id: 96,
    numero: 96,
    categoria: "A",
    copyright: false,
    titulo: "En el Monte Calvario",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el monte Calvario estaba una cruz,\nemblema de afrenta y dolor,\ny yo amo esa cruz do murió mi Jesús\npor salvar al más vil pecador.",
      "Y aunque el mundo desprecie la cruz de Jesús,\npara mi tiene suma atracción,\npues en ella llevó el Cordero de Dios\nde mi alma la condenación.",
      "En la cruz de Jesús do su sangre vertió,\nhermosura contemplo sin par;\npues en ella triunfante a la muerte venció,",
      "Yo seré siempre fiel a la cruz de Jesús,\nsu oprobio con él llevaré,\ny algún día feliz con los santos en luz\npara siempre su gloria veré."
    ],
    coro: "¡Oh! yo siempre amaré a esa cruz,\nen sus triunfos mi gloria será;\ny algún día en vez de una cruz,\nmi Corona Jesús me dará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_96.mp3"
    }
  },
  {
    id: 97,
    numero: 97,
    categoria: "A",
    copyright: false,
    titulo: "Por Fe Contemplo al Buen Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por fe contemplo al buen Jesús,\nel Príncipe benigno,\npor mí muriendo en la cruz,\npor mí, tan vil e indigno.",
      "El sol el rostro se cubrió\nal ver su agonía;\nla dura peña se partió;\n¿lo oyes, alma mía?",
      "Y yo también, al ver la cruz,\npor ella soy vencido;\nmi corazón te doy, Jesús,"
    ],
    coro: "De amor la prueba hela aquí:\nel Salvador murió por mí.\nPor mí, por mí\nJesús murió por mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_97.mp3"
    }
  },
  {
    id: 98,
    numero: 98,
    categoria: "A",
    copyright: false,
    titulo: "Ved al Divino Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ved al divino Salvador\nen la cruz, en la cruz,\nmorir en vez del pecador\nen la cruz, en la cruz.\nGimiendo triste clama así:\n\"Elí, ¿lama sabactaní?\n¡Oh, ved cómo agoniza allí\nen la cruz, en la cruz!",
      "La gran batalla peleó\nen la cruz, en la cruz.\nVictoria plena conquistó\nen la cruz, en la cruz.\nDel hondo abismo cerca ya,\nexclama: \"Consumado está\",\ny al Padre Dios su vida da\nen la cruz, en la cruz.",
      "La santa historia cantaré\nde la cruz, de la cruz.\nTan sólo ya me gloriaré\nen la cruz, en la cruz.\nPerdón y paz alcanzo yo\nallí do Cristo padeció.\nen la cruz, en la cruz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_98.mp3"
    }
  },
  {
    id: 99,
    numero: 99,
    categoria: "A",
    copyright: false,
    titulo: "Dulces Momentos!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Dulces momentos consoladores\nlos que me paso junto a la cruz!\nAllí sufriendo crueles dolores\nveo al Cordero, Cristo Jesús.",
      "De sus heridas, la viva fuente\nde pura sangre veo manar,\nque, salpicando mi impura fuente,\nla infame culpa logra borrar.",
      "Veo su angustia ya terminada,\nhecha la ofrenda de la expiación;\nsu noble frente, mustia, inclinada,\ny consumada mi redención.",
      "¡Dulces momentos, ricos en dones,\nde paz y gracia, de vida y luz!\nSólo hay consuelo y bendiciones,\ncerca de Cristo, junto a la cruz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_99.mp3"
    }
  },
  {
    id: 100,
    numero: 100,
    categoria: "A",
    copyright: false,
    titulo: "Jesús Resucitado",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús resucitado está en el mundo hoy.\nLos hombres no lo creen, mas yo seguro estoy.\nSu tierna mano siento y puedo oír su voz,\ny encuentro dondequiera a mi Salvador.",
      "Por dondequiera miro, lo puedo contemplar.\nY si la angustia llena mi alma de pesar,\nyo sé que Cristo vive y al fin me llevará\na la mansión del cielo, donde él está.",
      "¡Alégrate, cristiano! Tu voz levanta ya\ny canta aleluya al Padre celestial.\nNos trajo esperanza de eterna salvación,\npues en su Hijo amado hay redención."
    ],
    coro: "Jesús, Jesús mi Cristo vive hoy.\nHablándome, mirándome,\nconmigo va el Señor.\nJesús, Jesús, imparte salvación.\nContento voy, pues suyo soy;\nganó mi corazón.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_100.mp3"
    }
  },
  {
    id: 101,
    numero: 101,
    categoria: "A",
    copyright: false,
    titulo: "EI Señor Resucitó",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El Señor resucitó.¡Aleluya!\nMuerte y tumba ya de venció. ¡Aleluya!\nPor su fuerza y su virtud\ncautivó la esclavitud\ny nos dio su plenitud.¡aleluya!",
      "Hasta el polvo se humilló. ¡Aleluya!\nVencedor se levantó.¡Aleluya!\nCante, pues, la cristiandad\nsu gloriosa majestad\ny proclame su bondad. ¡Aleluya!",
      "El que tanto si sufrió, ¡aleluya!\ny al sepulcro descendió, ¡aleluya,!\nhoy en gloria celestial\nentre el Coro angélical\nReyna vivo e inmortal. ¡Aleluya!",
      "Cristo, nuestro salvador,¡aleluya!,\nde la muerte vencedor, ¡aleluya!,\nen ti haznos esperar\ny contigo al fin morar\ndo cantemos sin cesar: ¡aleluya!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_101.mp3"
    }
  },
  {
    id: 102,
    numero: 102,
    categoria: "A",
    copyright: false,
    titulo: "La Tumba le Encerró",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La tumba le encerró.¡Cristo bendito!\nEl alba allí esperó Cristo el Señor.",
      "De guardas escapó. ¡Cristo bendito!\nEl sello destruyó Cristo el Señor.",
      "La muerte dominó. ¡Cristo bendito!"
    ],
    coro: "Cristo la tumba venció; (sí venció);\ny con gran poder resucitó; (resucitó)\nha vencido ya la muerte y el dolor;\nvive para siempre nuestro Salvador.\n¡Gloria a Dios! (¡Gloria a Dios!)\n¡Gloria a Dios! (¡Gloria a Dios!)\nEl Señor resucitó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_102.mp3"
    }
  },
  {
    id: 103,
    numero: 103,
    categoria: "A",
    copyright: false,
    titulo: "Jesús por mí su Vida Dio",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús por mí su vida dio.\n¡Cuánto amo al Maestro!\nDel vil pecado me limpió.\n¡Cuánto amo al Maestro!",
      "Castigo cruel por mí sufrió.\n¡Cuánto amo al Maestro!\nEn cruenta cruz por mí murió.\n¡Cuánto amo al Maestro!",
      "Victoria me concederá.\n¡Cuánto amo al Maestro!\nAl cielo al fin me llevará.",
      "Mi corazón le entrego a él.\n¡Cuánto amo al Maestro!\nPrometo serle siempre fiel.\n¡Cuánto amo al Maestro!"
    ],
    coro: "¡Cuánto amo al Maestro,\na Cristo, el Señor!\n¡Cuánto amo al Maestro,\nmi buen Salvador!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_103.mp3"
    }
  },
  {
    id: 104,
    numero: 104,
    categoria: "A",
    copyright: false,
    titulo: "Cristo ha resucitado",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo ha resucitado, ¡aleluya!\nya la muerte ha vencido, ¡aleluya!\nCon poder y con virtud, ¡aleluya!\ncautivó la esclavitud. ¡Aleluya!",
      "Hasta el polvo se humilló, ¡aleluya!\nvencedor se levantó, ¡aleluya!\nHoy cantamos en verdad, ¡aleluya!\nsu gloriosa majestad. ¡Aleluya!",
      "A la muerte se entregó, ¡aleluya!\nel que así nos redimió, ¡aleluya!\nHoy en gloria celestial, ¡aleluya!\nreina en vida triunfal. ¡Aleluya!",
      "Cristo nuestro Salvador, ¡aleluya!\nde la muerte vencedor, ¡aleluya!\ntodos te hemos de cantar, ¡aleluya!\nalabanzas sin cesar. ¡Aleluya!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_104.mp3"
    }
  },
  {
    id: 105,
    numero: 105,
    categoria: "A",
    copyright: false,
    titulo: "¿Le Importará a Jesús?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Le importará a Jesús\nque esté doliente mi corazón?\nSi ando en senda oscura de aflicción\n¿puede darme consolación?",
      "¿Le importará que en oscuridad\ncamine con gran temor?\nAl anochecer, en la lobreguez,\n¿me acompañará el Salvador?",
      "¿Le importará si mi voluntad\nfaltare en la prueba atroz;\nsi he cedido al mal, a la tentación,",
      "¿Le importará cuando diga \"adiós\"\nal amigo más caro y fiel,\ny mi corazón lleno de aflicción\nhaya de apurar la hiel?"
    ],
    coro: "Le importa, sí;\nsu corazón comparte ya mi dolor.\nSí, mis días tristes, mis noches negras\nle importan al Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_105.mp3"
    }
  },
  {
    id: 106,
    numero: 106,
    categoria: "A",
    copyright: false,
    titulo: "¿Hay Aquí Quién nos ayude?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Hay aquí quién nos ayude,\nquién comprenda nuestro ser,\ncuando el alma está transida de dolor?\n¿Hay quien sienta simpatía,\nnuestra condición al ver,\ny nos de lo que deseamos con amor?",
      "¿Hay aquí quién nos ayude\nnuestros males a llevar,\npor pesada que esa carga pueda ser?\n¿Hay quién quiera con ternura\nal caído levantar\ny en sus brazos amorosos recoger?",
      "¿Hay aquí quién nos ayude,\nquién nos dé tranquilidad\ncuando estamos bajo el peso del dolor?\n¿Quién al pecador ofrezca\nel perdón de su maldad\ny por él se sacrifique por amor?",
      "¿Hay aquí quién nos ayude\ny nos libre del temor,\ndel Jordán las olas frías al pasar?\n¿Quién alumbre nuestra senda,\nde su luz con el fulgor,\ny nos dé sus bendiciones sin cesar?"
    ],
    coro: "Uno hay, Uno hay,\nen Cristo el Bendito, Uno hay.\nCuando viene aflicción\na nuestro corazón,\nun amigo hay en Cristo,\nUno hay.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_106.mp3"
    }
  },
  {
    id: 107,
    numero: 107,
    categoria: "A",
    copyright: false,
    titulo: "Amor que no me Dejarás",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amor que no me dejarás,\ndescansa mi alma siempre en ti;\nes tuya y tú la guardarás,\ny en tu regazo acogedor\nla paz encontrará.",
      "¡Oh Luz que en mi sendero vas!,\nmi antorcha débil rindo a ti;\nsu luz apaga el corazón,\nseguro de encontrar en ti\nmás bello resplandor.",
      "¡Oh tu el Gozo!, que por mi\nsufriste aquí mortal dolor;\ntras la tormenta el arco vi,\ny la mañana, yo lo sé,\nsin lágrimas será.",
      "¡Oh cruz que miro sin cesar!,\nmi orgullo, gloria y vanidad,\nal polvo dejo por hallar\nla vida que en su sangre dio\nJesús, mi Salvador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_107.mp3"
    }
  },
  {
    id: 108,
    numero: 108,
    categoria: "A",
    copyright: false,
    titulo: "Oh cúan Dulce es la Promesa!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, cuán dulce es la promesa\ndel Señor Jesús, mi Rey!\nAl confiarle el ser me dice\nHijo, no te dejaré\".",
      "Soy tu Dios y para librarte,\nde ti cerca estaré;\noh, no temas, pues seguro\npor la mano te guiaré.",
      "Por tu vida di mi sangre.\nPor tu nombre te llamé.\nEres mío, mucho te amo.",
      "Aunque eras muy rebelde,\nCon amor yo te busqué,\ny ahora te prometo\n\"Refugio siempre te daré\"."
    ],
    coro: "¡Ya no temas! ¡Ya no temas.\npues contigo siempre estaré!\nYa no temas! ¡Ya no temas,\nporque nunca te dejaré!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_108.mp3"
    }
  },
  {
    id: 109,
    numero: 109,
    categoria: "A",
    copyright: false,
    titulo: "Amigo Fiel es Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amigo fiel es Cristo,\nalivio él me da;\nme ama con un tierno amor\nque siempre durará.\nSin él vivir no puedo ya;\ncercano siempre está.\nAsí moramos juntos\nJesús y yo.",
      "Mis faltas no ignora.\nMis males puede ver.\nAnhela que me apoye en él:\nme puede sostener.\nEl guía mi alma a la luz,\nme indica mi deber.\nAsí andamos juntos\nJesús y yo.",
      "Confíole mis penas,\nle digo mi gozar.\nCon él no siento ya temor,\ny alegre puedo andar.\nMe dice lo que debo hacer,\nme impulsa a progresar.\nJesús y yo.",
      "El sabe cuánto anhelo\nsalvar a un pecador;\nme ruega ir a pregonar\ncuán grande es su amor,\nque anuncie eterna redención\ncon fe y con fervor.\nAsí obramos juntos\nJesús y yo."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_109.mp3"
    }
  },
  {
    id: 110,
    numero: 110,
    categoria: "A",
    copyright: false,
    titulo: "Ama el Pastor sus Ovejas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ama el Pastor sus ovejas\ncon un amor paternal;\nama el Pastor su rebaño\ncon un amor sin igual.\nAma el Pastor a las otras\nque desarriadas están,\ny conmovido las busca\npor donde quiera que van.",
      "Ama el Pastor sus corderos;\nama muy tierno el Pastor\na los que herrantes, heridos,\nse oye gemir de dolor.\nVed al Pastor conmovido\npor los collados vagar,\ny a los corderos en hombros,\nvedlo llevándo al hogar.",
      "Ama las noventa y nueve\nque en el aprisco guardó;\nama las que descarriadas\npor el desierto dejó.\n\"¡Oh mis ovejas perdidas!,\"\nclama doliente el Pastor.\n\"¿Quiénes vendrán en mi ayuda\npara mostrarles mi amor?\"",
      "Son delicados tus pastos,\ntranquilas tus aguas son;\nhenos aquí, ¡oh, Maestro!,\ndanos hoy tu bendición.\nHaz que seamos fervientes,\nllénanos de santo amor\npor las ovejas perdidas\nde tu redil, buen Pastor."
    ],
    coro: "Por el desierto errabundas\nvelas sufrir penas mil,\ny en sus brazos las lleva,\ntierno de vuelta al redil.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_110.mp3"
    }
  },
  {
    id: 111,
    numero: 111,
    categoria: "A",
    copyright: false,
    titulo: "Ni en la Tierra",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ni en la tierra ni en el cielo\nnombre hay corno el de Jesús;\nsobre todo solo reina,\nél es solo eterna luz.",
      "Es Jesús mi gran riqueza,\nhallo en él mi solo bien;\nvalen más que todo el oro\nlos tesoros de su Edén.",
      "Es Jesús mi gran sustento,\npan divino y celestial;\nde mis dichas y mi gozo\nes el rico manantial.",
      "Infinita es su ternura.\n¿Quién la puede sondear?\nCon los ángeles hoy quiero\nsu grandeza pregonar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_111.mp3"
    }
  },
  {
    id: 112,
    numero: 112,
    categoria: "A",
    copyright: false,
    titulo: "Dime la Antigua Historia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dime la antigua historia\ndel celestial favor;\nde Cristo y de su gloria,\nde Cristo y de su amor.\nDímela con llaneza,\ncon toda candidez,\nporque es mi mente flaca\ny anhela sencillez.",
      "Dime tan dulce historia\ncon tono claro y fiel:\nMurió Jesús, y salvo\ntú puedes ser por él\".\nDime la historia\ncuando me oprima la aflicción\ny quieras tu a mi alma\nbrindar consolación.",
      "Dime la misma historia\ncuando a tu parecer\nme cieguen de este mundo\nel brillo y el placer.\nY cuando ya vislumbre\ndel día final la luz\nrepíteme la historia:\n\"Quien sálvate es Jesús"
    ],
    coro: "Dime la antigua historia,\ncántame la victoria,\nháblame de la gloria\nde Cristo y de su amor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_112.mp3"
    }
  },
  {
    id: 113,
    numero: 113,
    categoria: "A",
    copyright: false,
    titulo: "Como Ovejas Disfrutamos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Como ovejas disfrutamos,\noh Jesús, tu grande amor,\nya que enantes, descarriados,\nanduvimos en error,\nde tus pastos abundantes\nalejados, buen Pastor.",
      "Por los montes afanoso\nnos buscaste con fervor,\ny al buen prado en que pacemos\nnos trajiste con amor;\npara ser de tu rebaño\nnos tomaste, buen Pastor.",
      "Tu Palabra conocemos\nsi nos llamas, oh Pastor;\ntú nos das el pasto sano\ny nos guardas con valor;\nen tu seno reclinados\nreposamos, buen Pastor.",
      "Las ovejas en tu mano\nnada temen, buen Pastor;\nen tu aprisco reunidos\nnos contemplas con amor;\n¡Jesucristo, buen Pastor!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_113.mp3"
    }
  },
  {
    id: 114,
    numero: 114,
    categoria: "A",
    copyright: false,
    titulo: "Un Buen Amigo tengo Yo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un buen amigo tengo yo,\nsu amor salvó mi vida;\ny por su muerte gozo hoy\ntal gracia inmerecida.\nY con el lazo de este amor,\nque nunca se ha cortado,\nseguro puedo siempre andar,\na él estoy ligado.",
      "Un buen amigo tengo yo,\nel ser me dio al crearme,\ny a sí mismo se entregó\na fin de rescatarme.\nPues, cuanto tengo es todo de él,\nél mismo me lo ha dado;\nmi vida, fuerza y corazón,\na él le he entregado.",
      "Un buen amigo tengo yo,\nel Todopoderoso,\nque quiere al fin llevarme a mí\na su hogar glorioso.\nPara animar mi vida aquí,\nme deja ver su gloria,\nyo gano la victoria.",
      "Un buen amigo tengo yo,\ntan fiel y tan amante;\nmi sabio consejero es,\nmi protector constante.\nDe quien al mundo tanto amó,\njamás podrá apartarme\nni el mundo, ni la muerte, pues\nsoy suyo para siempre."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_114.mp3"
    }
  },
  {
    id: 115,
    numero: 115,
    categoria: "A",
    copyright: false,
    titulo: "Hay un lugar do quiero estar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay un lugar do quiero estar\nmuy cerca de mi Redentor;\nallí podré yo descansar\nal fiel amparo de su amor.",
      "Quitarme el mundo no podrá\nla paz que halló mi corazón;\nJesús amante me dará\nla más segura protección.",
      "Ni dudas no temor tendré\nestando cerca de Jesús;\nrodeado siempre me veré"
    ],
    coro: "Muy cerca de mi Redentor\nseguro asilo encontraré;\nme guardará del tentador,\ny ya de nada temeré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_115.mp3"
    }
  },
  {
    id: 116,
    numero: 116,
    categoria: "A",
    copyright: false,
    titulo: "Hay Quien Vela",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay quién vela mis pisadas\nen la sombra y en la luz;\npor las sendas escarpadas\nme acompañará Jesús.\nPor los valles, por los montes,\ndo me lleva su bondad,\nmiro yo los horizontes\nde una nueva claridad.",
      "Hay contacto que me explica\nla presencia del Señor;\nél mis penas santifica\ny me libra del temor.\nCristo con su mano herida\nprotección me puede dar\ncuando cruzo de la vida\nel inquieto y fiero mar.",
      "Un Amigo hay, fiel y amante,\nde infinita compasión,\nque confiere paz constante\nal contrito corazón.\nEn su amor hay eficacia,\nes amigo siempre fiel,\nhay en él verdad y gracia\nes mi escudo y mi broquel."
    ],
    coro: "Hay quien vela mis pisadas\ny mi senda trazará.\nA las célicas moradas\nes Jesús quien me guiará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_116.mp3"
    }
  },
  {
    id: 117,
    numero: 117,
    categoria: "A",
    copyright: false,
    titulo: "Aunque sean como Grana",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Aunque sean como grana,\ntus pecados lavaré.\nAunque sean como grana.\ncomo nieve los haré.\nSí, aunque sean como grana,\nyo los lavaré.\nAunque sean como grana.\naunque sean como grana,\ntus pecados lavaré,\ntus pecados lavaré.",
      "Oye voz que te suplica:\n\"Vuelve, vuelve a tu Señor\".\nOye voz que te suplica:\n\"Vuelve, vuelve a tu Señor\".\nBueno es tu Dios, es compasivo\ny de tierno amor.\nOye voz que te suplica,\noye voz que te suplica:\n\"Vuelve, vuelve a tu Señor,\nvuelve, vuelve a tu Señor\".",
      "El aleja tus pecados\ny su consecuencia atroz.\ny su consecuencia atroz.\nVenid a mí, pues, y sed salvos\",\ndice nuestro Dios.\nEl aleja tus pecados,\nél aleja tus pecados\ny su consecuencia atroz,\ny su consecuencia atroz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_117.mp3"
    }
  },
  {
    id: 118,
    numero: 118,
    categoria: "A",
    copyright: false,
    titulo: "Dios tu Tristeza Entiende (God Understands)",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios tu tristeza entiende,\ntu lloro intenso ve;\nel te consuela y te dice:\n\"contigo yo estare.\""
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_118.mp3"
    }
  },
  {
    id: 119,
    numero: 119,
    categoria: "A",
    copyright: false,
    titulo: "Cristo es el Mejor Amigo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo es el mejor amigo\ncuando triste o tentado estés;\ncolmará de bendición\ntu afligido corazón.",
      "En Jesús fiel amigo encuentro;\npaz perfecta y plena a mí alma da.\nApoyado en él estoy,\nmi confianza a él le doy.",
      "Aunque ande en algún peligro,\no en el valle de la muerte esté,\nningún mal me alcanzará,\npues Jesús me amparará.",
      "Cuando estemos al fin reunidos\ncon los redimidos más allá,\ncantaremos con fervor\nen presencia del Señor:"
    ],
    coro: "Cristo es el mejor amigo.\nCristo es el mejor amigo,\nCristo es el mejor amigo.\nEl tus súplicas oirá\ny tu carga llevará.\n¡Oh, es Cristo el mejor amigo!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_119.mp3"
    }
  },
  {
    id: 120,
    numero: 120,
    categoria: "A",
    copyright: false,
    titulo: "Fija tus Ojos en Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Fija tus ojos en Cristo,\ntan lleno de gracia y amor,\ny lo terrenal sin valor será\na la luz del glorioso Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_120.mp3"
    }
  },
  {
    id: 121,
    numero: 121,
    categoria: "A",
    copyright: false,
    titulo: "Por Sobre el Goce Terrenal",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por sobre el goce terrenal\nte amo, o Salvador de,\npues me has colmado de tu paz,\ndel gozo de tu amor.",
      "En Jesús fiel amigo encuentro;\npaz perfecta y plena a mi Alma da.\nApoyado en el estoy,\nmi confianza a el le doy.",
      "Aunque ande en algún peligro,\no en el valle de la muerte esté,\nningún mal me alcanzará,\npues Jesús me amparara.",
      "Cuando estemos al fin reunidos\ncon los redimidos más allá,\nandaremos con fervor\nen presencia del Señor:"
    ],
    coro: "Cristo es el mejor amigo.\nCristo es el mejor amigo,\nCristo es el mejor amigo.\nEl tus súplicas oira\ny tu carga llevará\n¡oh, es Cristo el mejor amigo!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_121.mp3"
    }
  },
  {
    id: 122,
    numero: 122,
    categoria: "A",
    copyright: false,
    titulo: "Amoroso Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amoroso salvador,\nsin igual es tu bondad;\neres tú mi Mediador,\nmi perfecta Santidad.",
      "Mi contri corazón\nte confiesa su maldad;\npide al Padre el perdón\npor tu santa caridad.",
      "Te contemplo sin cesar\nen tu trono desde aquí;\n¡oh cuán grato en meditar\nque intercedes tú por mí!",
      "Fuente tú de compasión,\nsiempre a ti daré loor;\ny le es grato al corazón\nensalzarte, ¡mi Señor!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_122.mp3"
    }
  },
  {
    id: 123,
    numero: 123,
    categoria: "A",
    copyright: false,
    titulo: "Me dice el Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Me dice el Salvador\n\"Es poco tu poder;\nhijo débil, halla en mi\ntodo cuanto has menester\".",
      "Señor, hallado he\nque sólo tu poder\na mi duro corazón\nes capaz de enternecer.",
      "Nada bueno hay en mi:\ntu gracia buscaré,\nen la sangre de Jesús",
      "Cuando ante el trono, allá,\ncompleto en Él esté,\na los pies de mi Jesús\nmis trofeos echaré."
    ],
    coro: "Todo debo a él\npues ya lo pagó,\nde las manchas del pecar\ncual nieve me lavó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_123.mp3"
    }
  },
  {
    id: 124,
    numero: 124,
    categoria: "A",
    copyright: false,
    titulo: "La Tierna Voz del Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La tierna voz del Salvador\nnos habla conmovida.\nOíd al Médico de amor,\nque da a los muertos vida.",
      "Cordero manso, ¡gloria a ti!\nPor Salvador te aclamo.\nTu dulce nombre es para mí\nla joya que más amo.",
      "\"Borradas ya tus culpas son\",\nsu voz hoy te pregona;\nacepta, pues, la salvación,",
      "Y cuando al cielo el Señor\ncon él nos elevemos,\narrebatados en su amor,\nsu gloria cantaremos."
    ],
    coro: "Nunca los hombres cantarán,\nnunca los ángeles en luz,\nnota más dulce entonarán\nque el nombre de Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_124.mp3"
    }
  },
  {
    id: 125,
    numero: 125,
    categoria: "A",
    copyright: false,
    titulo: "Abrigadas y Salvas en el Redil",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Abrigadas y salvas en el redil\nLas noventa y, nueve están\nPero allá en el bosque perdida\nVa una pobre rendida de afán\nPor el monte escabroso y aterrador\nMuy Lejos vagando del Pastor,\nMuy lejos vagando del Pastor",
      "\"¿Del rebaño no bastan, tierno Pastor,\nLas noventa y nueve aquí?\"\nMas responde el Pastor: \"Una oveja\nHoy descarriada va lejos de mi\nY en La sierra escarpada ya voy a entrar\nMi pobre oveja a rescatar,\nMi pobre oveja a rescatar\"",
      "No sabrá el mortal del río veloz\nQue el Pastor tuvo que cruzar\nNi cuán negra la noche fue en que El\nSalió su oveja perdida a buscar\nSus gemidos y quejas podía oír\nEnferma estaba y por morir,\nEnferma estaba y por morir",
      "\"Estas huellas sangrientas, ¿quién las dejó?\n\"Cuando fue a buscar la que se extravió\nLas dejó vuestro amante Pastor\"\n\"Y tus manos, Señor, ¿quién las laceró?\"\n\"El áspero bosque las hirió,\nEl áspero bosque las hirió\"",
      "Una grande algazara luego se oyó,\nPor doquier retumbando fue\nA La célica puerta la voz llegó:\n\"Alegraos, que mi oveja encontré\"\nY cantaban los ángeles en redor:\n\"¡Lo suyo rescata el buen Pastor,\nLo suyo rescata el buen Pastor!\""
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_125.mp3"
    }
  },
  {
    id: 126,
    numero: 126,
    categoria: "A",
    copyright: false,
    titulo: "Ven a Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven a Cristo, ven ahora,\nven así cual estás,\ny de él sin demora\nel perdón obtendrás.",
      "Si confías que en su muerte\nel perdón tu tendrás,\ngozoso en tu senda\nsin temor andarás.",
      "Ven a Cristo sin recelo;\nes inmenso su amor,\nél nunca rechaza\nal más vil pecador.",
      "¡Cuánto anhela concederte\nsu divino perdón,\ny abrirte las puertas\nde su eterna mansión!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_126.mp3"
    }
  },
  {
    id: 127,
    numero: 127,
    categoria: "A",
    copyright: false,
    titulo: "Como Jesús no hay Otro Amigo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Como Jesús no hay otro amigo.\nNi uno hay, ni uno hay;\nque llave nuestro dolor consigo,\nni uno hay, ni uno hay.",
      "No hay amigo tan noble y digno,\nni uno hay, ni uno hay;\nque es a la vez justo y benigno,\nni uno hay, ni uno hay.",
      "¿Hay santo que haya desamparado?\nNi uno hay, ni uno hay.\n¿O pecador que haya rechazado?"
    ],
    coro: "Nuestras luchas conoce todas;\nnos guiará hasta el mismo fin.\nComo Jesús no hay otro amigo;\nni uno hay, ni uno hay.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_127.mp3"
    }
  },
  {
    id: 128,
    numero: 128,
    categoria: "A",
    copyright: false,
    titulo: "Huye cual Ave",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Huye cual ave a tu monte,\nalma abrumada del mal;\nallí en Jesús, clara fuente,\nlava tu lepra mortal.\nHuye del mal vergonzoso,\nclame tu ser, temeroso;\nCristo te ofrece reposo,\n¡oh! alma abrumada del mal;\n¡oh! alma abrumada del mal.",
      "Quiere el Maestro salvarte,\ntu llanto enjugará;\npromete nunca dejarte,\ndefensa fiel será.\nVen, pues, va el día volando;\nno andes más suspirando\nni te detengas llorando:\ntus males Jesús quitará;\ntus males Jesús quitará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_128.mp3"
    }
  },
  {
    id: 129,
    numero: 129,
    categoria: "A",
    copyright: false,
    titulo: "Canto el Gran Amor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Canto el gran amor de Aquel\nque primero a mí me amó,\npues dejó la gloria allá\ny en el Gólgota murió.",
      "Antes que llorara yo,\nya por mí lloraba él;\ny antes que supiera orar,\nél por mí gustó la hiel.",
      "Este mundo nunca vio\ntan profundo y santo amor,\nque el pecado me quitó",
      "Nada bueno se halla en mí.\n¿Cómo puedes tanto amar?\nYo, Señor, me rindo a ti;\nhazme, pues, mi amor mostrar."
    ],
    coro: "Tal amor ensalzaré,\nalabando al que murió\ninmolado para que\nvida eterna tenga yo.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_129.mp3"
    }
  },
  {
    id: 130,
    numero: 130,
    categoria: "A",
    copyright: false,
    titulo: "Para mí, tan Pecador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Para mí, tan pecador,\n¿puede haber, o Dios, perdón?\nEl consuelo de tu amor,\n¿puede hallar mi corazón?",
      "Cuando miro en derredor\nen mi negra soledad,\nveo abismo aterrador\ndo me arroja mi maldad.",
      "Mucho tiempo resistir,\ny tu gracia desprecie\n¿Aún podré hallar en ti\nese amor que rechace?",
      "Mientras que tenga que vivir,\nserá mi resolución\nsólo a ti, Señor, servir\ncon sincera devoción."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_130.mp3"
    }
  },
  {
    id: 131,
    numero: 131,
    categoria: "A",
    copyright: false,
    titulo: "En Cristo hallo Amigo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En Cristo hallo amigo y amante Salvador;\ncontare, pues, cuanto ha hecho el por mí.\nHallándome perdido e indigno pecador,\nrescatóme y hoy me guarda para si.\nMe salva del pecado, me guarda de Satán,\npromete estar conmigo siempre aquí;\nconsuela mi tristeza, me quita todo afán;\ngrandes cosas Cristo ha hecho ya por mí.",
      "Jesús jamás me falta, jamás me dejara;\nes mi fuerte y poderoso protector.\nDel mundo hoy me aparto, de toda vanidad,\npara consagrar la vida a mi Señor.\nSi el mundo me persigue, si sufro tentación,\nconfiando en el podré vencer aquí;\nsegura es la victoria, y elevo mi canción:\ngrandes cosas Cristo ha hecho ya por mí.",
      "Bien sé que Cristo en gloria muy pronto volverá,\ny entretanto me prepara un bello hogar.\nen la casa de mi Padre, mansión de luz y paz,\nel creyente fiel con el ha de morar.\nY entrado en su gloria, pesar no sentiré,\npues contemplaré su rostro siempre allí;\ngrandes cosas Cristo ha hecho ya por mí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_131.mp3"
    }
  },
  {
    id: 132,
    numero: 132,
    categoria: "A",
    copyright: false,
    titulo: "Las Maravillas del Amor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Las maravillas del amor\n¿quién la puede entender?\nPues Dios el Hijo descendió,\npues Dios el Hijo descendió\ndispuesto a padecer.",
      "En santo sacrificio el\nsu cuerpo ofreció.\nPor nos gustó la amarga hiel,\npor nos gustó la amarga hiel,\npor nos su vida dio.",
      "Y ante el padre con fervor\nel hace intercesión,\npor cuantos, fiados en su amor,\npor cuantos, fiados en su amor,\nanhelan salvación.",
      "Conoce la debilidad\nde nuestro humano ser.\nSiendo hombre nuestro Mediador,\nsiendo hombre nuestro Mediador\nnos puede sostener.",
      "Su amor no se satisfará\ncontemple a los que redimió,\ncontemple a los que redimió,\nya en gloria celestial."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_132.mp3"
    }
  },
  {
    id: 133,
    numero: 133,
    categoria: "A",
    copyright: false,
    titulo: "Cuando estés Cansado y Abatido",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando estés cansado y abatido,\ndilo a Cristo, dilo a Cristo;\nangustiado por el gozo huido,\ndilo a Cristo, el Señor.",
      "Si en ti sientes grande amargura,\ndilo a Cristo, dilo a Cristo;\nsi en tu vida hay faltas ocultadas,\ndilo a Cristo, el Señor.",
      "Si el nublado de tristeza temes,\ndilo a Cristo, dilo a Cristo;",
      "¿Te perturba el contemplar la muerte?\nDilo a Cristo, dilo a Cristo.\n¿En el reino anhelas pronto verte?\nDilo a Cristo, el Señor."
    ],
    coro: "Dilo a Cristo, dilo a Cristo,\nél es tu amigo mejor;\notro no hay como el amante hermano;\ndilo a Cristo, el Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_133.mp3"
    }
  },
  {
    id: 134,
    numero: 134,
    categoria: "A",
    copyright: false,
    titulo: "Dios tanto Amó al Mundo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios tanto amo al mundo perdido\nque a su hijo único él entregó;\njusticia y gracia en el se han unido.\n¡Un comparable amor nos reveló !",
      "Cristo Jesús al mundo en pecado\nha demostrado su eterno amor ,\npor nuestras faltas fue condenado\ne inocente expiró el Creador",
      "Hoy el Espíritu no revela\nes en sonda del profundo amor;\nque al que cree, su falta cancela\nel sacrificio del buen Redentor,",
      "Es ese amor fiel a la victoria\ny que ofrece la vida eternal.\nAl trino Dios cantemos la gloria\npor el santísimo amor celestial"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_134.mp3"
    }
  },
  {
    id: 135,
    numero: 135,
    categoria: "A",
    copyright: false,
    titulo: "Es Jesucristo la Vida, la Luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Es Jesucristo la vida, la luz;\nnos trae del cielo la eterna verdad;\nmártir divino que muere en la cruz\npor darnos libertad.",
      "Quita del alma de la negra maldad,\nlimpia benigno el infiel corazón;\nes su carácter de suma bondad,\nla misma compasión.",
      "Fuente preciosa de gracia y salud,\nagua que limpia de toda maldad.\nQuiere llenarnos de su plenitud"
    ],
    coro: "Cristo es Pastor, Enviado,\ndivino Emmanuel.\nEl me conduce por sendas de paz\ncomo a su oveja fiel.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_135.mp3"
    }
  },
  {
    id: 136,
    numero: 136,
    categoria: "A",
    copyright: false,
    titulo: "Al Fin Conocí más de Cerca a Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al fin conocí más des cerca a Jesús,\nmás no con teorías de humanos saber:\nla gracia me puso en el alma la luz\ncon que al Salvador pude ver.",
      "Sentí aligerarse mi culpa y baldón\ny al cielo elegí por supremo ideal.\n¡Cuán pronto quitome , al brindarme perdón\nel lastre terrestre del mal!",
      "Llenosé mi pecho de paz interior\n¿qué más en la vida pudiera querer?",
      "Después de mirar bien de cerca a Jesús\n¡con cuánta moción serle fiel resolví!\n¡Qué gloria irradiaba su rostro en la cruza\nde donde pendía por mi!"
    ],
    coro: "La gloria miré de Emmanuel\ncon ojos ungidos de fe\n¡Qué imagen sublime del Gólgota y el,\ncon alma Contrita se ve!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_136.mp3"
    }
  },
  {
    id: 137,
    numero: 137,
    categoria: "A",
    copyright: false,
    titulo: "Cual Mirra Fragante",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cual mirra fragante que exhala su olor\ny ricos perfumes esparce al redor,\ntu nombre, ¡oh Amado!, a mi corazón\nlo llena de gozo, transportarlo a Sion.",
      "Cual voz amigable que al triste viador\nen bosque perdido le inspira valor,\ntu nombre me anima y me hace saber\nque ofreces, piadoso, rescate a mi ser.",
      "Cual luz que, brillando del alto fanal,\nal nauta en la noche señala el canal,\ntu nombre, esparciendo benéfica luz,"
    ],
    coro: "Aleluya, Aleluya\nal Cordero de Dios;\nAleluya al Amado,\nal bendito Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_137.mp3"
    }
  },
  {
    id: 138,
    numero: 138,
    categoria: "A",
    copyright: false,
    titulo: "Dominará Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dominará Jesús, el rey,\ndoquier miremos en redor;\nsu amor, justicia y santa ley\nasiento son de su esplendor.",
      "Los pueblos traerán su don,\ndelante de el se postraran;\nmás lo que aún rebeldes son\nla muerte eterna sufrirán.",
      "Con gratitud exaltaran\nlos redimidos al Señor;\ngozosos siempre cantarán\na Jesucristo, el Redentor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_138.mp3"
    }
  },
  {
    id: 139,
    numero: 139,
    categoria: "A",
    copyright: false,
    titulo: "No hay un Nombre en esta Tierra",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No hay un nombre en esta tierra\ncual el nombre de Jesús;\nsímbolo es para el cristiano\nde perdón, justicia y luz.",
      "Mi esperanza es ver su gloria\ncuando vuelva vencedor,\ny ensalzar tan digno nombre\nes mi tema inspirador.",
      "Si en su dilatada viña\nquiere que trabaje yo,",
      "Si en la mano de la muerte\ncon su frió siento en mi,\nal oír su santo nombre\nnada temeré allí."
    ],
    coro: "Jesús, Jesús,\ncual Jesús no hay otro nombre.\nJesús, Jesús,\ncual Jesús no hay otro nombre.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_139.mp3"
    }
  },
  {
    id: 140,
    numero: 140,
    categoria: "A",
    copyright: false,
    titulo: "Venid, Cantad a nuestro Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Venid, cantad a nuestro Señor\nuniendo al Angélico Coro la voz.\nA Cristo, el Rey, rindamos honor:\n¡Digno eres tú, Cordero de Dios!",
      "En el Calvario el buen Jesús\nsufrió por nosotros muerte atroz.\nNos gloriaremos en esa cruz;\n¡Digno eres tú, Cordero de Dios!",
      "Victoria se pudo al fin proclamar,\ny huestes de él ascienden en pos.\nSe escucha en todo el cielo el cantar:\n¡Digno eres tú, Cordero de Dios!",
      "Por toda la eternidad\ny en esta existencia hoy tan veloz\nanunciaremos su majestad:\n¡Digno eres tú, Cordero de Dios!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_140.mp3"
    }
  },
  {
    id: 141,
    numero: 141,
    categoria: "A",
    copyright: false,
    titulo: "A Dios sea Gloria",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A Dios sea gloria, es el Creador,\ny amó tanto al mundo que a su Hijo dio,\nquien puso su vida muriendo en la cruz\ny abrió los portales de gloria y luz.",
      "Cantad a su gloria, pues Hijo es de Dios.\nSu amor inefable a todos nos dio.\nContad hoy la historia de la redención;\nque todos los pueblos entonen canción.",
      "Ya sea en el canto o en dulce oración,\nload al sublime y fiel Redentor.\nque joven y anciano proclamen su amor;"
    ],
    coro: "¡Exaltad a Jesús! Es el Rey y Señor.\n¡Alabad a Jesús! Es el buen Salvador.\nLoad sobre todos su nombre inmortal.\nEl salva a sus hijos del yugo del mal.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_141.mp3"
    }
  },
  {
    id: 142,
    numero: 142,
    categoria: "A",
    copyright: false,
    titulo: "Si Acaso te Dejo, Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si acaso te dejo, Jesús, ¿a quién voy?\ndespués de haber visto tu faz,\nde oírte y hablarte, ser íntimos hoy,\nme invade cual nunca tu paz.",
      "Me siento feliz en tu gracia, Señor,\ny anhelo seguir siempre así.\nHe visto encenderse en mi alma\nel amor que el cielo profesa por ti.",
      "Ansió vivir a tu lado no más,\ny juntos así recorrer\ntú y yo los caminos: los tuyos de paz,\ny éstos de afán y deber.",
      "Se extasía mi espíritu en la comunión\nque goza en tu fiel amistad.\n¡Oh Cristo, Dios mío, ya en mi corazón\nhiciste nacer la piedad!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_142.mp3"
    }
  },
  {
    id: 143,
    numero: 143,
    categoria: "A",
    copyright: false,
    titulo: "Desde el Glorioso Trono",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Desde el glorioso trono,\nbrillando cual cristal\nsalen las aguas vivas\ndel santo manantial.",
      "Río de dicha y gozo,\nfuente de plenitud,\nquien llegue a tus\nriberas encontrará salud.",
      "Río de Dios, te amo;\nque estás cercano sé,\ny en tus tranquilas\naguas el alma limpiaré.",
      "Eres, Jesús, la fuente\nllena de esplendor;\nfuente de aguas vivas,\nfuente de puro amor."
    ],
    coro: "Río santo, siempre canto mi amor a ti.\nFuente de la vida eterna eres para mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_143.mp3"
    }
  },
  {
    id: 144,
    numero: 144,
    categoria: "A",
    copyright: false,
    titulo: "Te quiero, te quiero",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Te quiero, te quiero, te quiero, Señor;\nte quiero, Dios mío, mi fiel Salvador:\na ti y a tu iglesia, tu casa, tu altar;\nmas cuánto, mis obras te lo han de mostrar.",
      "Placer indecible, profundo, eternal;\nme encuentro en la cumbre de gozo inmortal;\ncontemplo, arrobado, su gloria sin par,\ny anhelo a Cristo y al cielo volar.",
      "Concédeme, oh Cristo, tu fuerza y virtud,\ntu gozo, tu vida, reposo y salud.\nTu gracia, de mi alma es la inspiración;\ntu amor y tu nombre, mi santa canción.",
      "Oh Cristo, ¿a quién como tú puedo hallar?\nTu voz me consuela, me ayuda a cantar.\nTú ligas a mi alma con cuerdas de amor.\nTe cantan mis labios con todo fervor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_144.mp3"
    }
  },
  {
    id: 145,
    numero: 145,
    categoria: "A",
    copyright: false,
    titulo: "De Jesús el Nombre Invoca",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De Jesús el nombre invoca,\nheredero del dolor,\ndulce hará tu amarga copa\ncon el néctar de su amor.",
      "De Jesús el hombre estima,\nque te sirva de broquel;\nalma débil, combatida,\nhallarás asilo en él.",
      "De Jesús el hombre ensalza,\ncuyo sin igual poder\ndel sepulcro nos levanta,"
    ],
    coro: "Suave luz, manantial\nde esperanza, fe y amor;\nsumo bien celestial\nes Jesús, el Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_145.mp3"
    }
  },
  {
    id: 146,
    numero: 146,
    categoria: "A",
    copyright: false,
    titulo: "Junto a la Cruz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Junto al a cruz do Jesús murió,\ndo por su gracia clamaba yo,\nmis manchas su sangre allí quitó:\n¡a su nombre gloria!",
      "Cuando por fé en la cruz lo vi,\nde mis pecados salvado fui,\ny hoy él me guarda y mora en mí:\n¡a su nombre gloria!",
      "¡Fuente preciosa de salvación!\nGozo en ti halla mi corazón;\nen ti, Jesús salva y da perdón:",
      "¡Ven a esta fuente, oh pecador!\nponte a los pies de tu Salvador;\nte colmará de su santo amor:\n¡a su nombre gloria!"
    ],
    coro: "¡A su nombre gloria!\n¡A su nombre gloria!\nCristo Jesús es mi Salvador:\n¡a su nombre gloria!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_146.mp3"
    }
  },
  {
    id: 147,
    numero: 147,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh qué Salvador!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh qué salvador es Jesús, el Señor!\n¡Bendito Señor para mí!\nÉl salva al más malo de su iniquidad\ny dale socorro aquí.",
      "Veré a los amados a quienes dejé,\ncon ellos por siempre estaré.\nMás quiero aún al amado Jesús:\nsus glorias yo entonaré",
      "Y cuando esta vida termine aquí,\nentonces a Cristo podré contemplar,\nloor a su nombre daré.",
      "Y cuando en las nubes descienda Jesús\nglorioso en el mundo a reinar,\nsu gran salvación y perfecto amor,\npor siglos yo he de cantar."
    ],
    coro: "Me escondo en la roca que es Cristo, el Señor,\ny allí nada yo temeré;\nme escondo en la Roca que es mi Salvador\ny en él siempre confiaré,\ny siempre con él viviré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_147.mp3"
    }
  },
  {
    id: 148,
    numero: 148,
    categoria: "A",
    copyright: false,
    titulo: "Digno eres, oh Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Digno eres, oh Jesús,\ndigno eres, oh Jesús,\ndigno eres, oh Jesús\nque moriste en la cruz.",
      "Venga en gloria celestial\ntu gran reino eternal\ncon el gozo angélical,\ndigno Jesús.",
      "Que te honremos, oh\nSeñor, con servicio y\ncon valor; guárdanos\ndigno Jesús."
    ],
    coro: "¡Gloria, aleluya!\n¡Dadle alabanza!\n¡Gloria, aleluya!\n¡Digno Jesús!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_148.mp3"
    }
  },
  {
    id: 149,
    numero: 149,
    categoria: "A",
    copyright: false,
    titulo: "A Cristo doy mi Canto",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A cristo doy mi canto:\nél salva el alma mía,\nme libra del quebranto\ny con amor me guía.",
      "Jamás dolor ni agravios\nenlutarán mi mente;\nrefréscanse mis labios\ncon aguas de su fuente.",
      "Su amor me ha bendecido\ny alegra el alma mía;\nsu nombre es en mi oído",
      "Me gozo en alabarle;\ny cuando deje el suelo,\npor siempre he de exaltarle\ncon ángeles del cielo."
    ],
    coro: "Ensalce pues mi canto\nsu sacrosanta historia.\nEs hoy mi anhelo santo\nmirar, Jesús, tu gloria.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_149.mp3"
    }
  },
  {
    id: 150,
    numero: 150,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, si Gozo al Pecho da",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, si gozo al pecho da\nel sólo en ti pensar,\n¿cuánto más ver tu faz dará,\ny en tu presencia estar?",
      "Mente no habrá que saque a luz,\nni ensalzará, cantor\nnombre mayor que el de Jesús,\ndel hombre el Salvador.",
      "Luz del contrito corazón,\ngozo del manso aquí,\ntú al caído das perdón\ny nueva vida en ti."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_150.mp3"
    }
  },
  {
    id: 151,
    numero: 151,
    categoria: "A",
    copyright: false,
    titulo: "¡Cuán dulce el nombre de Jesús!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Cuán dulce el nombre de Jesús\nes para el hombre fiel!\nConsuelo, paz, vigor, salud,\nencuentra siempre en él.",
      "Tan dulce nombre es para mí,\nde dones plenitud;\nraudal que nunca exhausto\nvi de gracia y de salud.",
      "Jesús, mi amigo y mi sostén,\nbendito Salvador;\nmi vida y luz, mi eterno bien,\nacepta mi loor.",
      "Si es pobre ahora mi cantar,\ncuando en la gloria\nesté y allá te pueda contemplar,\nmejor te alabaré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_151.mp3"
    }
  },
  {
    id: 152,
    numero: 152,
    categoria: "A",
    copyright: false,
    titulo: "Hay una Fuente sin Igual",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay una fuente sin igual,\nla sangre de Emanuel,\nen donde lava cada cual\nlas manchas que hay en él,\nlas manchas que hay en él,\nlas manchas que hay en él,\nen donde lava cada cual\nlas manchas que hay en él,",
      "El malhechor se convirtió\nmuriendo una cruz,\nal ver la sangre que vertió\nsin culpa el buen Jesús,\nsin culpa el buen Jesús,\nsin culpa el buen Jesús,\nal ver la sangre que vertió\nsin culpa el buen Jesús",
      "Y yo también, cuan malo soy,\nlavarme allí podré;\ny en tanto que en el mundo estoy\nsu gloria cantaré,\nsu gloria cantaré,\nsu gloria cantaré,\nsu gloria cantaré.",
      "Tu sangre nunca perderá,\noh Cristo su poder,\ny sólo en ella así podrá\ntu iglesia salva ser,\ntu iglesia salva ser,\ntu iglesia salva ser,\ny sólo en ella así podrá\ntu iglesia salva ser.",
      "Desde que aquella fuente ví,\nmi tema solo fue\ntu compasivo amor, y así\ncantando moriré,\ncantando moriré,\ncantando moriré,\ntu compasivo amor, y así\ncantando moriré.",
      "Y cuando del sepulcro ya\nresucitado esté,\ncanción más noble y dulce allá\nen gloria entonaré,\nen gloria entonaré,\nen gloria entonaré,\ncanción más noble y dulce allá\nen gloria entonaré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_152.mp3"
    }
  },
  {
    id: 153,
    numero: 153,
    categoria: "A",
    copyright: false,
    titulo: "Oh Buen Señor, Velada está",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh buen Señor, velada está\ntu santa forma aquí,\npues el pecado, oh Jehová,\nte esconde hoy de mí.",
      "Aunque no te distingo hoy,\nsé que conmigo estás;\ny si en afán o lucha estoy.\ntu auxilio me darás.",
      "Como un sueño nocturnal,\ndorada ensoñación,\nes tu presencia sin igual\nla más feliz visión.",
      "Tu forma puedo percibir\nen alas de la fe;\ncon tu influencia en mi vivir,\nconfiado andaré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_153.mp3"
    }
  },
  {
    id: 154,
    numero: 154,
    categoria: "A",
    copyright: false,
    titulo: "Con Acentos de Alegría",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con acentos de alegría\nhoy loamos al Señor,\nque en este grato día\nnos constriñe con su amor.\nAdoremos al que quiso\ncongregarnos otra vez\ncomo miembros de su iglesia,\ntodos de una misma fe.",
      "Gloria a nuestro Rey amante\nque nos da su santa paz,\nque en su gracia desbordante,\npara todos da solaz.\nLevantemos nuestras voces\ny digamos con fervor:\nGloria al Hijo bondadoso!\nGloria a nuestro Redentor!",
      "Oh, Señor, hoy te adoramos\ncon fervor y gratitud,\ny anhelosos te pedimos\nque nos brindes tu salud.\nQue unidos como hermanos\nte adoremos sin cesar,\ny en tu gracia bienhechora\nprocuremos siempre estar."
    ],
    coro: "Con fervor, con fervor,\na nuestro Rey cantemos,\ny su amor, y su amor,\nnos guarde en santa unión.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_154.mp3"
    }
  },
  {
    id: 155,
    numero: 155,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, eres Justo Rey",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, eres justo Rey\ndesde siempre y desde Edén.\nGuardan los cielos tu santa ley,\npues reina allá el bien.\nQuiero en tu humilde grey\ncumplir tu ley de amor también.",
      "Cielos y tierra y mar\nriges desde eternidad.\nRuegote quieras mi vida guiar;\ntoma mi voluntad\ny haz que en querer y obrar\nacate yo tu autoridad.",
      "Oigase nuestra voz\nhasta en celestial confín:\nGloria a ti, Verbo eterno y Dios;\ngloria, loor sin fin;\ngloria, aleluya, oh Dios.\nLoor a ti, loor sin fin."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_155.mp3"
    }
  },
  {
    id: 156,
    numero: 156,
    categoria: "A",
    copyright: false,
    titulo: "Venid, Cantad, de Gozo en Plenitud",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Venid, cantad de gozo en plenitud,\ny dad loor al que su sangre dio.\nen ella luego nos lavó,\nde nuestra lepra nos limpió,\ny así líbranos de la esclavitud",
      "El Dios de Amor; que vino acá a sufrir\nllevando en sí por nos la maldición,\nen vez de eterna perdición,\nnos proporciona salvación,\nque sin él nadie puede conseguir.",
      "Si toma en pos de él su cruz\ny es guiado siempre por su luz,\ntendrá el sello de su Salvador."
    ],
    coro: "El nos libró de culpabilidad,\ny redimiónos por la eternidad;\ncon ángeles del cielo nos igualó:\nprecioso Salvador el que por nos murió.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_156.mp3"
    }
  },
  {
    id: 157,
    numero: 157,
    categoria: "A",
    copyright: false,
    titulo: "Jesús bendito, Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús bendito, Salvador\nLos Pueblos te verán;\nY por tu gloria y tu poder\nLos orbes temblaran,\nLos orbes temblaran,",
      "Miradle, cielos, bendecid\nla procesión triunfal;\nal Rey de gloria recibid\nque vuelve inmortal,\nque vuelve inmortal.",
      "De horrible muerte es vencedor;\nregresa a su mansión;\nes nuestro Rey y el santo autor\nde nuestra salvación,\nde nuestra salvación.",
      "El Hijo amado, su amor,\nmuriendo demostró;\ny, Dios humano, vencedor\nal cielo ascendió,\nal cielo ascendió."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_157.mp3"
    }
  },
  {
    id: 158,
    numero: 158,
    categoria: "A",
    copyright: false,
    titulo: "Dad Gloria al Cordero Rey",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dad gloria al Cordero Rey,\nsuprema potestad;\nde su divino amor la ley\npostrados aceptad,\nde su divino amor la ley\npostrados aceptad.",
      "Vosotros, hijos de Israel,\nresiduo de su grey,\nloores dad a Emmanuel\ny proclamadle Rey,\nloores dad a Emmanuel\ny proclamadle Rey.",
      "Naciones todas, escuchad\ny obedeced su ley\nde gracia, amor y santidad,\ny proclamadle Rey,\nde gracia, amor y santidad,\ny proclamadle Rey.",
      "Dios quiera que con los que están\ndel trono en derredor,\ncon cantos por la eternidad\na Cristo demos honor,\na Cristo demos honor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_158.mp3"
    }
  },
  {
    id: 159,
    numero: 159,
    categoria: "A",
    copyright: false,
    titulo: "Oh si Pudiera yo Contar!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh si pudiera yo contar la gloría\ny el amor sin par de Cristo, mí Señor;\nvolar al cielo con Gabriel,\nmi voz a unir con la de aquel\nseráfico cantor,\nseráfico cantor.",
      "La sangre que en la cruz vertió,\nla cual a mi alma rescató de eterna perdición;\nsu fiel justicia y santo amor,\nlos que me visten de esplendor,\nserian mi canción,\nserían mí canción.",
      "Todo el carácter de mi Rey:\nsu multiforme amor, su ley, su gracia, su poder,\nsu gloría y sempiterno honor,\nen altos himnos de loor\ndaría a conocer,\ndaría a conocer.",
      "Aquel dichoso día vendrá cuando\nJesús me llevará, y así su faz veré.\nSerá mí Amigo y Salvador con quien,\npor gracia vencedor,\npor siempre viviré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_159.mp3"
    }
  },
  {
    id: 160,
    numero: 160,
    categoria: "A",
    copyright: false,
    titulo: "Tiempo es de que en Gloria venga Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "\"Tiempo es de que en gloria venga Cristo\",\nse oye al pueblo decir;\nla oscuridad ya se disipa;\nmuy pronto el Maestro ha de venir.",
      "El sol, la luna y las estrellas,\na un mundo envuelto en la maldad,\nseñales fueron que anunciaron\nque pronto el Rey Jesús vendrá.",
      "a los perdidos anunciando\nque pronto el día ha de rayar."
    ],
    coro: "Muy pronto el día nacerá,\nmuy pronto el día nacerá.\nLa noche ya se va,\nel día viene ya;\nmuy pronto el día nacerá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_160.mp3"
    }
  },
  {
    id: 161,
    numero: 161,
    categoria: "A",
    copyright: false,
    titulo: "Amanece ya la mañana de oro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amanece ya la mañana de oro,\npronto el rey vendrá;\nsu pueblo a la mansión del cielo\nCristo llevara.",
      "En aquel gran dia los separados\nse encontrarán,\ny las lágrimas de los afligidos\nse enjugarán.",
      "Con sus ángeles de esplendente aspecto.\nCristo, el juez, vendrá,\na llevar su iglesia a donde en gloria",
      "Cuando llegue a todos el evangelio\nanunciando el fin,\ncesará el tardar del esposo entonces,\nsonará el clarín."
    ],
    coro: "Amanece ya la mañana de oro\ntras la noche terrenal,\ncuando surgirá del sepulcro abierto\nvida inmortal.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_161.mp3"
    }
  },
  {
    id: 162,
    numero: 162,
    categoria: "A",
    copyright: false,
    titulo: "Viene otra vez Nuestro Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Viene otra vez nuestro Salvador,\n¡oh si ya fuera hoy!,\npara reinar con poder y amor,\n¡oh si ya fuera hoy!\nSu fiel iglesia ataviada está\ncon vestiduras de esplendor,\ny en busca del Esposo va.\n¡Oh si ya fuera hoy!",
      "Acabará el poder de Satán,\n¡oh si ya fuera hoy!,\nNegras tristezas no se verán,\n¡oh si ya fuera hoy!,\nTodos los justos con Cristo irán,\narrebatados por sus Señor.\n¿Cuándo estas glorias llegarán?\n¡Oh si ya fuera hoy!",
      "Fieles a él los debiera hallar\nsi regresara hoy;\nTodos velando con gozo y paz\nsi regresara hoy.\nMultiplicadas señales hay;\nen el oriente se ve el albor,\nya más cercano el tiempo está.\n¡Oh si ya fuera hoy!"
    ],
    coro: "¡Gloria!, ¡gloria! Gozo sin fin traerá.\n¡Gloria!, ¡gloria! al Coronarle Rey.\n¡Gloria!, ¡gloria! La senda preparad.\n¡Gloria!, ¡gloria! Cristo viene otra vez.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_162.mp3"
    }
  },
  {
    id: 163,
    numero: 163,
    categoria: "A",
    copyright: false,
    titulo: "Oh! cuán Gratas las Nuevas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh! cuán gratas las nuevas al peregrino aquí.\nen destierro obligado a vagar:\n\"He aquí, pronto en gloria tu\nSalvador vendrá,\ny podrás en su reino entrar\".",
      "Los sepulcros de cuantos en Cristo duermen ya,\notra vez todos se han de abrir;\nlos millones también que en el mar profundo están\nvolverán otra vez a vivir.",
      "Nos veremos allá en el nuevo Edén feliz;\nel \"adiós\" no diremos jamás;\na morar en el reino de paz."
    ],
    coro: "Sí, viene, viene, viene, esto sé;\na la tierra Jesús vendrá;\ny los peregrinos a la gloria irán,\na su reino el Señor los guiará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_163.mp3"
    }
  },
  {
    id: 164,
    numero: 164,
    categoria: "A",
    copyright: false,
    titulo: "Abre tu Corazón",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Abre tu corazón, abre tu corazón.\nJesús entrará, y él te salvará\nsi abres tu corazón.",
      "Abro mi corazón, abro mi corazón.\nVen, entra, Jesús; dame gozo y luz;\nte abro mi corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_164.mp3"
    }
  },
  {
    id: 165,
    numero: 165,
    categoria: "A",
    copyright: false,
    titulo: "En Presencia estar de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En presencia estar de Cristo,\nver su rostro ¿que será,\ncuando al fin, en pleno gozo,\nmi alma le contemplará?",
      "Sólo tras oscuro velo\nhoy lo puedo aquí mirar,\npero pronto viene el día\nque su gloria ha de mostrar.",
      "¡Cuanto gozo habrá con Cristo\ncuando no haya más dolor,\ncuando cesen los peligros",
      "Cara a cara ¡cuán glorioso\nha de ser así vivir,\nver el rostro de quien quiso\nnuestras almas redimir!"
    ],
    coro: "Cara a cara espero verle\ncuando venga en gloria y luz;\ncara a cara allá en el cielo\nhe de ver a mi Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_165.mp3"
    }
  },
  {
    id: 166,
    numero: 166,
    categoria: "A",
    copyright: false,
    titulo: "Hijo del Reino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hijo del reino, ¿por qué estás durmiendo,\ncuando a la vista se halla tu hogar?\nPresto levántate, ciñe tus armas;\nen el conflicto tendrás que luchar.",
      "Hijo del reino, ¿por qué tardas tanto,\ncuando delante el premio se ve?\nAlzate, vístete, Cristo se acerca;\nsal a su encuentro, recibe a tu Rey.",
      "Grandes naciones en lucha furiosa,\ndespavoridas hundiéndose van;\nes el estruendo del carro triunfante\ndel divinal, vencedor Capitán.",
      "No sigas más tras placeres mundanos\nves que su encanto pasando se va;\nrompe los lazos con que estás atado;\na Cristo acude, que te amparará.",
      "Fija tu vista constante en el cielo;\npasa la noche de tribulación;\nsobre las cúspides ya rompe el alba;\n¡hijo del reino, prorrumpe en canción!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_166.mp3"
    }
  },
  {
    id: 167,
    numero: 167,
    categoria: "A",
    copyright: false,
    titulo: "Guarda, dinos si la Noche",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Guarda, dinos si la noche\nnegra pronto pasará.\n¿El lucero va saliendo?\n¿Pronto amanecerá?\nA tu vista ¿aparece el alba ya?\nA tu vista ¿aparece el alba ya?",
      "Alborea, rompe el dia,\nlevantamos el clamor;\nel lucero ha salido\nen su matinal fulgor.\nAlegraos, ya se acerca el Redentor,\nAlegraos, ya se acerca el Redentor.",
      "Carta y brújula demuestran\nque la tierra cerca está.\n¡Adelante, presurosos!\nPronto el puerto se verá.\nDe alegría canten vuestras voces ya,\nde alegría canten vuestras voces ya."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_167.mp3"
    }
  },
  {
    id: 168,
    numero: 168,
    categoria: "A",
    copyright: false,
    titulo: "El Amanecer del Día",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El amanecer del día\nsus albores va anunciando;\nviene el tiempo de alegría,\ny la eterna paz de Dios.",
      "Por los montes va brillando\nrefulgente luz del cielo;\nel clarín está anunciando\nla venida del Señor.",
      "Muerte y llanto olvidaremos\ncuando en gloria venga Cristo.\nPara siempre gozaremos"
    ],
    coro: "Venga, sí, día eterno;\nnegra noche, ¡oh, cese ya!\n¡Venga ya, sempiterno\nde placer y eterna paz!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_168.mp3"
    }
  },
  {
    id: 169,
    numero: 169,
    categoria: "A",
    copyright: false,
    titulo: "Cristo Viene",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo viene, esto a cierto,\nporque lo ha dejado escrito;\nsiempre fiel a su promesa,\npor los suyos ya regresa.\n¡Vedle ya, ved al Señor!\nTráelos de la tumba triste,\nde inmortalidad los viste.\n¡Sí, vendrá ¡Oh, sí, vendrá!",
      "El que en Gólgota muriendo\ndio su vida bendiciendo,\nviene ya resplandeciente,\nen las nubes, imponente.\n¡Vedle ya, ved al Señor!\nVedle ya venir en gloria,\nCoronado de victoria.\n¡Sí, vendrá! ¡Oh, sí, vendrá!",
      "Las espinas, de despecho\nrayos rojos se han hecho,\ny la caña se ha vuelto\nregio cetro de su imperio.\n¡Vedle ya, ved al Señor!\nSiguenle ángeles gloriosos.\n¡Sí, vendrá! ¡Oh, sí, vendrá!",
      "¡Ay! de aquel que no haya\nido a Jesús ni recibido\nropa santa, regalada,\npara bodas adornada.\n¡Vedle ya, ved al Señor!\n¡Al encuentro del Esposo!\nEs el día más dichoso.\n¡Sí, vendrá! ¡Oh, sí, vendrá!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_169.mp3"
    }
  },
  {
    id: 170,
    numero: 170,
    categoria: "A",
    copyright: false,
    titulo: "Jesús pronto Volverá",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús pronto volverá\nal mundo con gran poder.\nPromesa nos dio; y la cumplirá;\nsu rostro podemos ver.\nEn gloria y majestad vendrá\nnuestro Salvador,\npues señales por doquier\nanuncian al Señor.",
      "Muy pronto el Señor vendrá,\ny el pueblo que le esperó,\ndel vil tentador librado será,\npor Cristo, quien lo salvo.\nSus hijos disfrutarán\nde Cristo la comunión,\ny por siempre gozarán\nsu eterna salvación.",
      "Del norte y del sur vendrán\ntrofeos del Redentor.\nLas islas del mar sus joyas darán\nque adornen al Salvador.\nLos santos con él irán\nlas bodas a celebrar,\nen su feliz hogar.",
      "Muy pronto Jesús vendrá\ny el mal llegará a su fin:\ncon gran majestad su voz sonará\ngloriosa por el confín.\nLos ángeles tocarán\ntrompeta de salvación\ny los santos vivirán\nsu eterna redención."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_170.mp3"
    }
  },
  {
    id: 171,
    numero: 171,
    categoria: "A",
    copyright: false,
    titulo: "Yo Espero la Mañana",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo espero la mañana\ndel gran día sin igual;\ndel cual dicha eterna emana\ny deleite perennal.",
      "Yo espero la victoria;\nde la muerte al fin triunfar;\nrecibir la eterna gloria\ny mis sienes Coronar.",
      "Yo espero ir al cielo;\ndonde reina eterno amor;\nperegrino soy y anhelo",
      "Pronto espero unir mi canto\nal triunfante y celestial;\ny cambiar mi amargo llanto\npor el himno angelical."
    ],
    coro: "Esperando, esperando\notra vida sin dolor\ny la grata bienvenida\nde Jesús; mi amante Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_171.mp3"
    }
  },
  {
    id: 172,
    numero: 172,
    categoria: "A",
    copyright: false,
    titulo: "El Rey que Viene",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El Rey que viene cerca está,\nel mismo que en la cruz murió;\nmas sólo viene esta vez\npor los que rescató.",
      "De su venida vemos ya señales\nmuchas por doquier, y pronto\nel alba eternal podrán\nlos pueblos ver.",
      "Pues no contéis con gozo y paz:\naquí las luchas seguirán;\nmas cuando vuelva el Salvador,",
      "Entonces nuestro hogar será\nla tierra nueva, eternal;\nla muerte nunca entrará,\npues todo es inmortal."
    ],
    coro: "Cerca está, cerca está,\na las puertas mismas llega ya;\nviene presto, viene presto;\na las puertas llega ya.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_172.mp3"
    }
  },
  {
    id: 173,
    numero: 173,
    categoria: "A",
    copyright: false,
    titulo: "Vendrá el Señor!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Vendrá el Señor! Nadie sabe la hora;\ndel día anhelado se ve la aurora.\n¡Oh siervos de Dios!,\nanunciad sin demora\nque muy pronto vendrá.",
      "En cielo y tierra se anuncia el portento\nde cristo en su glorioso advenimiento.\n¡Oh, pueblo de Dios!,\nes solemne el momento,\npues muy pronto vendrá.",
      "Velad y orad con la vista alzada;\nsalid y luchad con la santa espada;\nOh, id, trabajad\ncon la fe reanimada,\npues muy pronto vendrá."
    ],
    coro: "¡El vendrá! ¡Esperad y velad,\npues él vendrá!\n¡Aleluya! ¡Aleluya!;\nen las nubes vendrá\ncon sus huestes gloriosas;\nsí muy pronto vendrá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_173.mp3"
    }
  },
  {
    id: 174,
    numero: 174,
    categoria: "A",
    copyright: false,
    titulo: "Siervos de Dios, la trompeta tocad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Siervos de Dios, la trompeta tocad:\n¡Cristo muy pronto vendrá!\nA todo el mundo las nuevas llevad:\n¡Cristo muy pronto vendrá!",
      "Fieles de Cristo, doquier anunciad:\n¡Cristo muy pronto vendrá!\nSiempre alegres, contentos, cantad:\n¡Cristo muy pronto vendrá!",
      "Montes y valles, canción entonad:\n¡Cristo muy pronto vendrá!\nOndas del mar vuestras voces alzad:\n¡Cristo muy pronto vendrá!"
    ],
    coro: "¡Pronto vendrá! ¡Pronto vendrá!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_174.mp3"
    }
  },
  {
    id: 175,
    numero: 175,
    categoria: "A",
    copyright: false,
    titulo: "¿Quién en Deslumbrante Gloria?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Quién en deslumbrante gloria\ncon sus huestes está?\n¿Quién con célica armadura\ndelante de ellos va?",
      "Canta, pueblo remanente,\npresto salvo serás;\npronto fin tendrán tus pruebas\nsi con el Rey estás.",
      "Ya la noche ha pasado,\nve las huestes avanzando\nguiadas por Jesús.",
      "Oh, ven pronto, santo día\nde esplendor sin igual,\ncuando en hermosura\nvuelva Jesús, Rey eternal."
    ],
    coro: "¡Ve adelante, Señor, supremo Rey!,\nen gloria sublime y santa majestad.\n¡Ve adelante, a la victoria, ve!,\nque cielo y tierra tuyos son,\nSeñor, supremo Rey.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_175.mp3"
    }
  },
  {
    id: 176,
    numero: 176,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Suene la Trompeta",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando suene la trompeta en el día del Señor,\nsu esplendor y eterna claridad veré,\ncuando lleguen los salvados ante el magno Redentor,\ny se pase lista, yo responderé.",
      "Resucitarán gloriosos los que duermen en Jesús,\nlas delicias celestiales a gozar;\ny triunfantes entrarán en las mansiones de la luz;\npara mi también habrá un dulce hogar.",
      "Trabajemos, pues, por Cristo, pregonando su amor,\nmientras dure nuestra vida terrenal;\ny al fin de la jornada, con los santos del Señor"
    ],
    coro: "Cuando allá se pase lista,\ncuando allá se pase lista,\ncuando allá se pase lista,\ny mi nombre llamen, yo responderé.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_176.mp3"
    }
  },
  {
    id: 177,
    numero: 177,
    categoria: "A",
    copyright: false,
    titulo: "Se Pone el Fulgurante Sol",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Se pone el fulgurante sol. Por la tranquilidad rural\nla queda suave oímos dar:\n¡ Hermano, esta hora es la final!",
      "Es la hora del ocaso, en que\nla obra de siglos se ha de hacer,\nllevando el Nombre salvador a los perdidos, por doquier.",
      "Perdido has mucho cuando allí\nocioso estabas sin llevar precioso trigo al alfolí;\npor eso debes hoy llorar.",
      "Los pasos de él sentimos ya.\n¡A trabajar! Pues su eternal amor y fuerzas hoy nos da.\n¡Hermano, esta hora es la final!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_177.mp3"
    }
  },
  {
    id: 178,
    numero: 178,
    categoria: "A",
    copyright: false,
    titulo: "La Segunda Venida de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La segunda venida de Cristo\nun suceso imponente será,\ntan grandioso cual nunca fue visto;\nmás glorioso jamás se verá.\nDe los cielos el Hijo del hombre\nen la gloria del Padre vendrá;\n\"Verdadero y Fiel\" es su nombre,\ny el cetro del reino tendrá,\n\"Verdadero y Fiel\" es su nombre,\ny el cetro del reino tendrá.",
      "Cual relámpago, luce del este\nuna nube con luz de crisol,\ncuyo brillo, que alcanza al oeste,\nsobrepuja los rayos del sol;\nes la hueste de ángeles santos,\nrefulgentes de gloria y luz,\nque escoltan y loan con cantos\nal invicto y glorioso Jesús,\nque escoltan y loan con cantos\nal invicto y glorioso Jesús.",
      "Los impíos de miedo se espantan\ny perecen al ver al Señor;\nhacia Cristo, su buen Redentor.\nContemplando sus gratos fulgores,\nle aclaman con férvida voz:\n\"Rey de reyes, Señor de señores;\nmil hosannas al Hijo de Dios\",\n\"Rey de reyes, Señor de señores;\nmil hosannas al Hijo de Dios\".",
      "Del sepulcro los lazos quebranta\nque ataban al pobre modal;\na sus santos Jesús los levanta\nrevestidos de luz inmortal.\nY los lleva consigo al cielo,\nlos Corona y palmas les da,\ny entonces disfrutan sin velo\na presencia del Dios Jehová,\ny entonces disfrutan sin velo\nla presencia del Dios Jehová."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_178.mp3"
    }
  },
  {
    id: 179,
    numero: 179,
    categoria: "A",
    copyright: false,
    titulo: "¿Has oído el mensaje?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Has oído el mensaje del regreso del Señor?\nLas trompeta a medianoche sonara,\na sus fieles todos llamara sin olvidarte a ti,\nsi con Cristo te alistas a vivir.",
      "A los cielos subiremos con los ángeles de luz;\nlos amados separados se unirán\ncon nosotros para siempre; nunca se apartaran,\ncuando allí habitaremos con Jesús.",
      "Andaremos por los mundos do el pecado no entro;\ndel amor les hablaremos de Jesús,\nque a buscarnos vino para darnos vida eternal,\npues allí habitaremos con Jesús.",
      "Pasaran los siglos uno tras el otro sin cesar,\ny el vigor perenne no se perderá\nde esa juventud eterna, primavera sin menguar,\npues allí habitaremos con Jesús."
    ],
    coro: "El viene, el viene, mirad;\ncercano, cercano el esta.\nLas perlinas puertas ya\nábranse de par en par\ny los salvos entraran en el Edén;\ny sus voces jubilosas con los ángeles se oirán,\npues allí habitaremos con Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_179.mp3"
    }
  },
  {
    id: 180,
    numero: 180,
    categoria: "A",
    copyright: false,
    titulo: "¿Será al albor?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Será al albor, cuando el día despierta\ny el sol cada sombra nocturna ahuyenta?\nSerá al albor cuando en toda su gloria\nvolverá a la tierra Jesús?",
      "Trompeta triunfal todos pronto iremos;\nsu escolta de ángeles santos veremos;\nsu sien Coronada de luz miraremos\ncuando venga en gloria Jesús.",
      "Que gozo habrá cuando acabe la muerte;\nlas penas y el mal quitara el Dios fuerte\ncuando venga en gloria Jesús."
    ],
    coro: "Cuanto aun faltara, Señor,\nhasta que cante así:\n\"Cristo vuelve, ¡aleluya!\n¡Aleluya! Amen.\n¡Aleluya! Amen.\"",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_180.mp3"
    }
  },
  {
    id: 181,
    numero: 181,
    categoria: "A",
    copyright: false,
    titulo: "Estando a Orillas del Jordán",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Estando a orillas del Jordán\nansioso miro allá\na Canaán, la celestial,\ndo el justo morará.",
      "Sobre esos anchos llanos\namanece eterna luz,\ny por fin la noche acabará,\npues es cual sol Jesús.",
      "¿Cuándo he de entrar\nen el país bendito y ver la fa\nde Aquel con quien iré a morar"
    ],
    coro: "A la tierra feliz y hermosa voy,\nsus delicias sin fin a gozar,\nde Moisés y el Cordero a entonar la canción\ny siempre con Cristo a morar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_181.mp3"
    }
  },
  {
    id: 182,
    numero: 182,
    categoria: "A",
    copyright: false,
    titulo: "Cantaré, Cantaré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cantará, cantará del glorioso país,\ncon su incomparable jardín;\nque ha de ser de los salvos la patria feliz\nmientras corran los siglos sin fin,\nmientras corran los siglos, sin fin;\nque ha de ser de los salvos la patria feliz\nmientras corran los siglos sin fin.",
      "Es del alma el hogar; por visiones de fe\nsus muros de jaspe se ven,\ny parece que un velo delgado, no más,\nhoy me oculta ese reino del bien,\nhoy me oculta ese reino del bien;\ny parece que un velo delgado, no más,\nhoy me oculta ese reino del bien.",
      "Ese hogar ha de ser para ti y para mí;\nsu príncipe es Cristo Jesús;\nes el Rey de los reyes por siempre jamás,\ny pondrános Coronas de luz,\ny pondráno. Coronas de luz;\nes el Rey de los reyes por siempre jamás,\ny pondrános Coronas de luz.",
      "En el bello país, ¡oh! cuán dulce será,\ncongregados, cantarle con arpa y con voz\nalabanzas a nuestro Señor,\nalabanzas a nuestro Señor;\ncongregados, cantarle con arpa y con voz\nalabanzas a nuestro Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_182.mp3"
    }
  },
  {
    id: 183,
    numero: 183,
    categoria: "A",
    copyright: false,
    titulo: "Promesa Dulce",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Promesa dulce: \"Yo vendré,\ny a los que sufren salvare.\"\nResponde mi alma: \"Presto ven;\nansioso esperare.\"",
      "Los santos vuelven a vivir,\nal cielo todos subirán;\ny en tierra atado anos mil\nha de quedar Satán.",
      "Desciende entonces la ciudad,\nlos malos levantados son\na oír el fallo de su juez:",
      "El nuevo Edén florecerá\nen hermosura celestial;\njamas la muerte turbara\nla playa inmortal."
    ],
    coro: "¡Ven, Señor, mi Redentor!\n¡Ven, Señor, mi Redentor!\nResponde mi alma: \"Presto ven,\nSeñor, mi Redentor.\"",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_183.mp3"
    }
  },
  {
    id: 184,
    numero: 184,
    categoria: "A",
    copyright: false,
    titulo: "Por Mil Arpas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por mil arpas y mil voces\nse alzan notas de loor\nCristo reina, el cielo goza,\nCristo reina, el adiós de amor.\nVed, su trono ocupa ya,\nsolo, el mundo regirá.",
      "Rey de gloria, reine siempre\ntu divina potestad;\nnadie arranque de tu mano\nlos que son tu propiedad.\nDicha tiene aquel que está\ndestinado a ver tu faz.",
      "Apresura tu venida\nen las nubes, ¡oh Señor!\nNuevos cielos, nueva tierra\náureas arpas de tu grey,\n\"Gloria\" entonen a su Rey."
    ],
    coro: "¡Aleluya!, ¡aleluya!,\n¡aleluya! Amén.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_184.mp3"
    }
  },
  {
    id: 185,
    numero: 185,
    categoria: "A",
    copyright: false,
    titulo: "Hay un Mundo Feliz más allá",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay un mundo feliz más allá,\ndonde cantan los santos en luz\ntributando eterno loor\nal invicto, glorioso Jesús.",
      "Cantaremos con gozo a Jesús,\nal Cordero que nos rescató,\nque con sangre vertida en la cruz\nlos pecados del mundo quitó.",
      "Para siempre en el mundo feliz\ncon los santos daremos honor\nal invicto, glorioso Jesús,"
    ],
    coro: "En el mundo feliz\nreinaremos con nuestro Señor,\nen el mundo feliz\nreinaremos con nuestro Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_185.mp3"
    }
  },
  {
    id: 186,
    numero: 186,
    categoria: "A",
    copyright: false,
    titulo: "Bellas Canciones Perennes",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bellas canciones perennes,\nvoz es de gratitud\nde digan con suaves murmullos:\n\"Dios ya nos da salud\".\nHasta los tiempos postreros,\ncantos de paz y amor\ny gloria a Dios en lo alto\ntributar la multitud.",
      "Célico alcázar construye\nde externa majestad;\nbajo sus bóvedas reinan\nmisericordia y paz.\nPactó que mira a su electo\nciervo David, el fiel,\nde cuya Posteridad santa\nel reino sin fin será.",
      "Pueblo feliz el que escucha\nde su venir a él son;\ny que prepara su alma\npara encontrarse en Sion.\nEres, Señor, de los tuyos\nel refulgente sol,\nel óptimo galardón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_186.mp3"
    }
  },
  {
    id: 187,
    numero: 187,
    categoria: "A",
    copyright: false,
    titulo: "Santo Espíritu de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Santo Espíritu de Cristo,\nmora en este corazón,\nlléname de tu presencia\ncólmame de bendición.",
      "Santo Espíritu, lo puedes\naunque como, no lo se;\nmas si tu mis ruegos oyes,\nse que puro yo seré.",
      "Débil soy, flaqueza todo,\nmas me postro a tus pies,\npara que tu amor eterno,",
      "Lávame, bendice y salva\ncuerpo, alma, espíritu;\nya me salvas, me consuelas,\nde bondad me colmas tú."
    ],
    coro: "¡Cólmame!¡Cólmame!\n¡Ven ahora y cólmame!\n¡Cólmame de tu presencia!\n¡Ven, oh ven y cólmame!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_187.mp3"
    }
  },
  {
    id: 188,
    numero: 188,
    categoria: "A",
    copyright: false,
    titulo: "La Nueva Proclamad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La nueva proclamad doquier\nque el hombre este,\ndoquier haya aflicción,\nmiserias y dolor;\ncristianos anunciad\nque el Padre nos envío\nel fiel Consolador.",
      "La noche ya paso;\nbrillando esta la luz\nque habrá de disipar\nlas sombras del terror;\nes para el pecador\nla aurora celestial\nel fiel Consolador.",
      "Es el quien da salud\ny plena libertad\na los que encadeno\nel fiero tentador;\nlos rotos hierros hoy\ndirán que vino ya\nel fiel Consolador.",
      "Mi lengua mueve tu,\nque sepa hablar aquí\ndel don que recibí,\nOh grande Dios de amor,\nal renovar en mi\nla imagen celestial\nel fiel Consolador."
    ],
    coro: "Al mundo vino ya\nel fiel Consolador\nque Dios nos prometió,\nla prenda de su amor;\ndoquier que el hombre este,\ndecid que descendió\nel fiel Consolador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_188.mp3"
    }
  },
  {
    id: 189,
    numero: 189,
    categoria: "A",
    copyright: false,
    titulo: "Danos el Fuego",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Danos el fuego que ardió\nen hombres tales cual Daniel,\nque en rudas pruebas lo guardó\ny lo mantuvo siempre fiel.",
      "Danos el fuego que animó\nla fe potente de Abrahán,\nque a Pablo un gran valor le dio,\ny amor profundo al joven Juan.",
      "Danos del cielo la virtud,\nla que a Elías dio poder.\nDanos tu divinal salud,\ntu fe y tu gracia a conocer.",
      "Pronto en las nubes volverás;\nnecesitamos más fervor;\ny te imploramos además:\nDanos tu Espíritu, Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_189.mp3"
    }
  },
  {
    id: 190,
    numero: 190,
    categoria: "A",
    copyright: false,
    titulo: "Dios nos ha Dado Promesa",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios nos ha dado promesa:\n\"Lluvias de gracia enviaré,\nDones que os den fortaleza;\ngran bendición os daré\".",
      "Cristo nos dio la promesa\ndel Santo Consolador;\npaz y perdón y pureza,\npara su gloria y honor.",
      "¡Dios nuestro, a todo creyente\nmuestra tu amor y poder!\nTú eres de gracia la fuente;",
      "Obra en tus siervos piadosos\ncelo virtud y valor,\ndel tentador victoriosos\nsalgan, contigo, Señor."
    ],
    coro: "Lluvias de gracia,\nLluvias pedimos, Señor;\nMándanos lluvias copiosas,\nlluvias del Consolador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_190.mp3"
    }
  },
  {
    id: 191,
    numero: 191,
    categoria: "A",
    copyright: false,
    titulo: "Ven, Espíritu Eterno",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven, Espíritu eterno,\nmuéstranos la excelsitud\nde ese mérito vicario que nos trajo la salud.\nGrande fue el sacrificio para nuestra redención.\n¡Oh, renueva la memoria; danos fe en el corazón!",
      "Ven, testigo de su muerte;\nven, divino Inspirador;\nque sintamos tu potencia y apreciemos tu valor.\nVen, aplícanos la sangre del divino Redentor,\ny que Cristo en nosotros sea siempre morador.",
      "Que imitemos sus gemidos,\nsuspirando en oración,\ny apreciemos las heridas que recuerdan su aflicción.\nAl que hemos traspasado, que miremos con dolor,\ny la sangre asperjada recibamos con amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_191.mp3"
    }
  },
  {
    id: 192,
    numero: 192,
    categoria: "A",
    copyright: false,
    titulo: "Abre mis Ojos a la Luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Abre mis ojos a la luz;\ntu rostro quiero ver, Jesús.\nPon en mi corazón tu bondad,\ny dame paz y santidad.\nHumildemente acudo a ti,\nporque tu tierna voz oí.\nMi guía sé, Espíritu consolador.",
      "Abre mi oído a tu verdad;\nyo quiero oir con claridad\nbellas palabras de dulce amor,\n¡oh mi bendito Salvador!\nConsagro a ti mi frágil ser;\ntu voluntad yo quiero hacer\nLlena mi ser, Espíritu consolador.",
      "Abre mis labios para hablar\ny a todo el mundo proclamar\nque tú viniste a rescatar\nal más indigno pecador.\nLa mies es mucha, ¡oh, Señor!;\nobreros faltan de valor.\nHeme aquí, Espíritu consolador.",
      "Abre mi mente para ver\nHaz que en la lucha pueda triunfar\ny en tus caminos fiel andar.\nDe mi alma escudo siempre sé\ny aumenta mi valor y fe.\nMi mano ten, Espíritu consolador",
      "Abre las puertas de tu hogar;\nen tu palacio ansío estar.\nQuiero tu dulce faz contemplar\npor toda la eternidad.\ny cuando en tu presencia esté,\ntu santo nombre alabaré.\nMora en mí, Espíritu consolador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_192.mp3"
    }
  },
  {
    id: 193,
    numero: 193,
    categoria: "A",
    copyright: false,
    titulo: "Alumbrante Espíritu",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Alumbrante Espíritu,\nbrilla tú en mi corazón;\nvuelve en día la oscuridad\nde mi noche de aflicción.",
      "Poderoso Espíritu,\nlimpia este corazón,\nporque sobre mi alma\nel mal ejerció cruel opresión.",
      "Oh divino Espíritu,\nmora tú en mi corazón.\nRompe todo ídolo,\nreina en plena posesión."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_193.mp3"
    }
  },
  {
    id: 194,
    numero: 194,
    categoria: "A",
    copyright: false,
    titulo: "Desciende, Espíritu de Amor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Desciende, Espíritu de amor,\nPaloma celestial,\npromesa fiel del Salvador,\nde gracia manantial.",
      "Aviva nuestra escasa fe,\nconcédenos salud;\nbenigno,guía nuestro píe\npor senda de virtud.",
      "Consuela nuestro corazón\ny habita siempre en él;\nconcédele el precioso\ndon de serte siempre fiel.",
      "A nuestro Padre, celestial;\nal Hijo, autor del bien,\ny al Santo Espíritu eternal,\nsea la gloria. Amén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_194.mp3"
    }
  },
  {
    id: 195,
    numero: 195,
    categoria: "A",
    copyright: false,
    titulo: "Ven a Nuestras Almas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven a nuestras almas,\nParacleto Santo,\ntráenos del cielo,\nde tu luz un rayo.",
      "Fuente de consuelo,\ndulce y soberano;\nhuésped de las almas;\ncelestial regalo.",
      "Ven, divina llama,\nprende en el cristiano,\ny su pecho llena\ndel amor sagrado.",
      "Dales de tu gracia\nel favor preclaro,\nla salud eterna,\ngozo continuado."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_195.mp3"
    }
  },
  {
    id: 196,
    numero: 196,
    categoria: "A",
    copyright: false,
    titulo: "¡Cuán Firme Cimiento!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Cuán firme cimiento ha puesto a la fe\nel Padre en su eterna Palabra de amor!\n¿Qué más a su pueblo pudiera añadir\nde lo que en su Libro ha dicho el Señor,\nde lo que en su Libro ha dicho el Señor?",
      "\"No tengas temor, pues contigo yo estoy.\nSI, yo soy tu Dios, y te socorreré.\nApoyo, sostén, fortaleza y poder.\nCon mí diestra justa yo te salvaré,\ncon mi diestra justa yo te salvaré.",
      "\"Las aguas profundas no te anegarán,\nni aun cuando cruzares el mar de aflicción;\npues siempre contigo en tu angustia andaré,\ntrocando tus penas en gran bendición,\ntrocando tus penas en gran bendición.",
      "\"Sí te hallas probado en ardiente crisol\nmi gracia potente tu fe sostendrá;\ntan sólo la escoria deseo quemar,\ny el oro de tu alma más puro saldrá,\ny el oro de tu alma más puro saldrá.",
      "\"Al alma que busca reposo en Jesús,\naun cuando Satán la quisiere prender,\nyo nunca, no, nunca la traicionaré,\nyo nunca, no, nunca la traicionaré\"."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_196.mp3"
    }
  },
  {
    id: 197,
    numero: 197,
    categoria: "A",
    copyright: false,
    titulo: "Dadme la Biblia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dadme la Biblia, reluciente estrella,\nnorte del nauta en tormentoso mar;\nnunca el nublado esconderá su brillo,\npues las tinieblas puede disipar.",
      "Dadme la Biblia, en mi desaliento,\ncuando el pecado cáuseme temor;\ndadme los fieles dichos del Maestro;\nsiempre me encuentre junto al Salvador.",
      "Dadme la Biblia, antorcha a mis pisadas\nen la insegura senda terrenal;\núnica luz constante en las tinieblas;",
      "Dadme la Biblia, luz de vida eterna;\njunto al sepulcro su esplendor alzad;\nsobre el Jordán destáquense las puertas\nfúlgidas de la célica ciudad."
    ],
    coro: "Dadme la Biblia, santa y clara nueva,\nluz del camino angosto y celestial;\nregla y promesa, ley y amor unidos\nhasta que rompa el alba eternal.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_197.mp3"
    }
  },
  {
    id: 198,
    numero: 198,
    categoria: "A",
    copyright: false,
    titulo: "¡Santa Biblia!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Santa Biblia!, para mi\neres un tesoro aquí.\nTú contienes con verdad\nla divina voluntad;\ntu me dices lo que soy,\nde quién vine y a quién voy.",
      "Tú reprendes mi dudar;\ntú me exhortas sin cesar.\nEres faro que a mi pie\nva guiando, por la fe,\na las fuentes del amor\ndel benigno Salvador.",
      "Eres la infalible voz\ndel Espíritu de Dios,\nque vigor al alma da\ncuando en aflicción está.\nTú me enseñas a triunfar\nde la muerte y el pecar.",
      "Por tu santa letra se\nque con Cristo reinaré.\nYo, que tan indigno soy,\npor tu luz al cielo voy.\neres un tesoro aquí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_198.mp3"
    }
  },
  {
    id: 199,
    numero: 199,
    categoria: "A",
    copyright: false,
    titulo: "Oh, Cantádmelas otra Vez",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh, cantádmelas otra vez\nbellas palabras de vida;\nhallo en ellas mi gozo y luz\nbellas palabras de vida.\nSí, de luz y vida,\nson sostén y guía.",
      "Jesucristo a todos da\nbellas palabras de vida;\nhoy escúchalas pecador,\nbellas palabras de vida.\nBondadoso te salva,\ny al cielo te llama.",
      "Grato el cántico sonará\nbellas palabras de vida;\ntus pecados perdonará\nbellas palabras de vida.\nSí de luz y vida,\nson sostén y guía."
    ],
    coro: "¡Que bellas son! ¡Que bellas son!\nBellas palabras de vida.\n¡Que bellas son! ¡Que bellas son!\nBellas palabras de vida.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_199.mp3"
    }
  },
  {
    id: 200,
    numero: 200,
    categoria: "A",
    copyright: false,
    titulo: "Padre, tu Palabra es mi Delicia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Padre, tu Palabra es\nmi delicia y mí solaz,\nguía siempre aquí mis pies\ny a mi pecho trae la paz.\nEs tu santa ley, Señor,\nfaro eterno, celestial,\nque en perenne resplandor\nnorte y guía es al mortal.",
      "Cuando obedecía tu voz\nen tu gracia fuerza hallé,\ny con firme pie, y veloz,\npor tus sendas caminé.\nTu verdad es mi sostén\ncontra duda y tentación\ny destila calma y bien\ncuando asalta la aflicción.",
      "Son tus dichos para mi\nprendas fieles de salud.\nDame, pues, que te oiga a ti\ncon filial solicitud.\nEs mi ciencia, mi saber,\ntu divina voluntad;\nen la grande eternidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_200.mp3"
    }
  },
  {
    id: 201,
    numero: 201,
    categoria: "A",
    copyright: false,
    titulo: "La Biblia nos Habla de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La Biblia nos habla de Cristo\ny de su muerte en la cruz.\nSu santa Palabra ha dicho\nque él pronto vuelve en luz.",
      "No anheles el bien de esta vida,\npues ella se pasará.\nEntrégate a él sin medida,\nque hoy llamando está.",
      "No dejes que pase más tiempo\nsin entregarte a Jesús.\nAlístate, pues el Maestro\nmuy pronto vuelve en luz."
    ],
    coro: "¿Te hallas listo a encontrar al Señor?\n¿Lo haces todo con fe, con amor?\n¿Has peleado por fe la batalla del bien?\n¿Pueden otros a Cristo en ti ver?\n¿Eres fiel por doquiera que vas?\n¿Puedes tú contemplarlo en su faz\ny triunfante decir:\n\"Este es mi Dios\"?\n¿Puedes tú encontrar al Señor?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_201.mp3"
    }
  },
  {
    id: 202,
    numero: 202,
    categoria: "A",
    copyright: false,
    titulo: "En el Mundo Turbulento",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el mundo turbulento\nCristo llama con amor,\nsuplicando cada día:\n\"Ven a mí, oh pecador\".",
      "Sea en gozo o en tristeza,\nalegría o aflicción,\nen deberes o placeres,\nél me ofrece protección.",
      "Cristo siempre me protege\ndel maligno engañador,\ny me pide que le rinda\nfiel servicio de amor.",
      "¡Oh, Señor, ven a ayudarme!\nOigo tu invitación.\nHoy te entrego sin reserva\nmente, alma y corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_202.mp3"
    }
  },
  {
    id: 203,
    numero: 203,
    categoria: "A",
    copyright: false,
    titulo: "Hoy llega a mis oídos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy llega a mis oídos\nmuy tierna invitación,\npromesa y cumplimiento\nque alegra el corazón.\nJesús con voz amante\nme llama hoy así:\n\"Esclavo del pecado,\nno tardes, ven a mi.",
      "¿Por qué vivir tan lejos\nde nuestro buen Jesús\ny andar en las tinieblas\npudiendo andar en luz?\nDe vida sin provecho,\nsalgamos a la senda\nde eterna salvación.",
      "En tiempos de amargura,\ndesánimo y dolor,\no cuando nos persiga\ncruel el tentador,\nJesús con voz benigna\natráenos a sí,\ny disipando el miedo\nsusurra: \"Ven a mí\".",
      "En todo y para siempre\noigamos al Señor,\nhallando grato alivio\nen su profundo amor.\nAsí conoceremos\nel gozo y la virtud\nque infunde en el creyente\nel \"Ven\" del buen Jesús."
    ],
    coro: "¡Ven, oh ven a mí!\n¡Ven, oh ven a mí!\nTriste y cargado,\n¡ven, oh ven a mí!\n¡Ven, oh ven a mí!\n¡Ven, oh ven a mí!\nTriste y cargado,\n¡ven, oh ven a mí!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_203.mp3"
    }
  },
  {
    id: 204,
    numero: 204,
    categoria: "A",
    copyright: false,
    titulo: "Ven, Pródigo Perdido, Ven",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven, pródigo perdido,\nven; acepta el perdón;\nescucha la benigna voz\nde amor paterno; ven.",
      "Ven, pródigo perdido,\nven; que Dios te escuchará;\npor ti el Salvador; allá\naboga siempre; ven.",
      "Ven, pródigo Perdido, ven;\nJesús por ti sufrió,\ny por tu iniquidad murió:\nconfiado ahora, ven."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_204.mp3"
    }
  },
  {
    id: 205,
    numero: 205,
    categoria: "A",
    copyright: false,
    titulo: "A tu Puerta Cristo está",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A tu puerta Cristo está.\nÁbrele.\nSi le abres entrará.\nÁbrele.\nTu pecado quitará,\nluz y paz derramará,\nsu perdón te otorgará.\nÁbrele.",
      "Ábrele, oh pecador.\nÁbrele.\nAl amante Salvador\nábrele.\nHoy te ofrece salvación,\ndel pecado el perdón;\nsaciará tu corazón.\nÁbrele.",
      "No le hagas esperar.\nÁbrele.\nNo le obligues a marchar.\nÁbrele.\n¡Qué dolor después tendrás,\ncuando en vano clamarás\nÁbrele."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_205.mp3"
    }
  },
  {
    id: 206,
    numero: 206,
    categoria: "A",
    copyright: false,
    titulo: "Tierno y Amante, Jesús nos Invita",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tierno y amante, Jesús nos invita.\nLlámate a ti, y a mí.\nMírale allá en la puerta esperando;\naguarda a ti y a mi.",
      "Sigue llamando; ¿por qué dilatamos?\nLlámate a ti, y a mí.\n¿Tantas mercedes en poco tendremos?\nÁmate a ti y a mí.",
      "¡Oh, maravilla de amor prometido\ntanto a ti como a mí!\nVen y recibe el perdón ofrecido,\ndado de gracia a ti."
    ],
    coro: "Tierno y amante Jesús nos invita:\n¡Oh pecadores, venid!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_206.mp3"
    }
  },
  {
    id: 207,
    numero: 207,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, el Pastor Divino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, el Pastor divino, llámate sin cesar:\n\"Entra al redil seguro, donde podrás reposar\";\nven cuando tienes la fuerza, ven en tu juventud;\nentra al seguro regazo, donde hallarás la salud.",
      "Cristo, el Pastor divino, quiso morir por ti.\nLlámate con ternura: \"Ven, alma errante, a mí.\nVen, pues es grande el peligro, ven\", dice el buen Pastor;\n\"ven al seguro regazo, donde hallarás el amor.",
      "Grande es el peligro, pues cual león feroz\n=busca el enemigo darte una muerte feroz.\nCristo, el divino Maestro, llámate sin cesar:"
    ],
    coro: "Con tierno amor te invita el Señor:\n\"Ven, peregrino, oh ven sin temor\";\nven, que aguarda al más vil pecador\nCristo, el divino Pastor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_207.mp3"
    }
  },
  {
    id: 208,
    numero: 208,
    categoria: "A",
    copyright: false,
    titulo: "Te sientes casi resuelto?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Te sientes casi resuelto ya?\n¿Te falta poco para creer?\n¿Por qué, pues, dices tú a Cristo el Salvador:\n\"Hoy no, mañana te seguiré?",
      "¿Te sientes casi resuelto ya?\nPues vence el \"casi\" a Cristo ven.\n¡Haz hoy tu decisión! ¡No la postergues ya!\n\"Mañana puede ser tarde tal vez.",
      "El \"casi\", hermano, es sin valor\nfrente al gran Juez que te juzgará.\n¡Ay del que muere aquí casi creyendo!\nCompletamente perdido está."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_208.mp3"
    }
  },
  {
    id: 209,
    numero: 209,
    categoria: "A",
    copyright: false,
    titulo: "Mientras Jesús te Llama",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mientras Jesús te llama,\nven pecador.\nMientras por ti oramos,\nven, pecador.\nHoy es el día acepto.\nVen, pecador.\nHoy puedes conocerle.\nVen, pecador.",
      "¿Andas de mal cargado?\nVen, pecador.\nHay en Jesús alivio.\nVen, pecador.\nNo quiere él engañarte.\nVen, pecador.\nHoy quiere rescatarte.\nVen, pecador.",
      "Oye sus tiernos ruegos.\nVen, pecador.\nSu bendición recibe.\nVen, pecador.\nMientras Jesús te llama\nVen, pecador\nVen, pecador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_209.mp3"
    }
  },
  {
    id: 210,
    numero: 210,
    categoria: "A",
    copyright: false,
    titulo: "Con Voz Benigna te Llama Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con voz benigna te llama Jesús:\ninvitación de puro amor.\n¿Por qué te dejas en vano llamar?\n¿Sordo serás, pecador?",
      "A los cansados invita Jesús;\nél ve su afán, siente el dolor.\nTráele tu carga; te la quitará,\nte sostendrá tu Señor.",
      "Siempre aguardándote mira Jesús.\n¡Tanto esperar, con tanto amor!"
    ],
    coro: "Llámate hoy,\nllámate hoy,\nhoy ven a Cristo y dile:\n\"Mí alma te doy\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_210.mp3"
    }
  },
  {
    id: 211,
    numero: 211,
    categoria: "A",
    copyright: false,
    titulo: "Allá la Puerta Franca Está",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Allá la puerta franca está,\nsu luz es refulgente.\nLa cruz se mira más allá,\nseñal de amor ferviente.",
      "Si tienes fe avanza tú;\nla puerta es franca ahora.\nSi quieres palma, ten la cruz,\nseñal de eterna gloría.",
      "Pasando el río, más allá,\nen celestial pradera,\nel premio de la cruz está:\n¡Eterna primavera!"
    ],
    coro: "La puerta franca está por mi, por mi, por mi.\nSí, quiero entrar allí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_211.mp3"
    }
  },
  {
    id: 212,
    numero: 212,
    categoria: "A",
    copyright: false,
    titulo: "Francas las Puertas Encontrarán",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Francas las puertas encontrarán,\nunos sí, otros no;\nde alguien las glorías sin fin serán.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nCalles de oro, mar de cristal,\npleno reposo, perfecto amor.\nUnos tendrán celestial hogar:\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?",
      "Fieles discípulos de Jesús,\nunos sí, otros no,\nlogran Corona en vez de cruz.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nMora el Rey en gloriosa luz,\ncon él no puede haber dolor,\nde alguien es esta beatitud:\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?",
      "Llegan a tiempo pasando bien,\nunos sí, otros no;\néstos las puertas cerradas ven.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nCiegos y sordos hoy nada creen,\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?",
      "Son herederos del porvenir,\nunos sí, otros no;\nlos que procuran por Dios vivir.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nCuando concluya la dura lid,\nen compañía del Salvador\nalguien será sin cesar feliz:\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_212.mp3"
    }
  },
  {
    id: 213,
    numero: 213,
    categoria: "A",
    copyright: false,
    titulo: "Bienvenida da Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bienvenida da Jesús\nen los brazos de su amor\nal que en busca de la luz\nvague ciego y con temor.",
      "A sus pies descansarás;\nejercita en él tu fe;\nde tus males sanarás;\na Jesús, tu amigo, ve.",
      "Recibirte prometió,\ndate prisa en acudir;\nnecesitas como yo"
    ],
    coro: "Volveremos a cantar:\n\"El recibe al pecador\".\nClaro hacedlo resonar:\n\"El recibe al pecador\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_213.mp3"
    }
  },
  {
    id: 214,
    numero: 214,
    categoria: "A",
    copyright: false,
    titulo: "A Jesucristo Ven sin Tardar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A Jesucristo ven sin tardar,\nque entre nosotros hoy él está;\ny te convida con dulce afán,\ntierno diciendo: \"Ven\".",
      "Piensa que él sólo puede colmar\ntu triste pecho de gozo y paz;\ny porque anhela tu bienestar,\nvuelve a decirte: \"Ven\".",
      "Su voz escucha sin vacilar,\ny grato acepta lo que hoy te da.\nTal vez mañana no habrá lugar."
    ],
    coro: "¡Oh cuán grata nuestra reunión,\ncuando allá, Señor, en tu mansión,\ncontigo estemos en comunión\ngozando eterno bien!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_214.mp3"
    }
  },
  {
    id: 215,
    numero: 215,
    categoria: "A",
    copyright: false,
    titulo: "En el Hogar do Nunca Habrá",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el hogar do nunca habrá\ntristeza, muerte ni dolor,\neterno gozo existirá,\nes la promesa del Señor.",
      "Si vuestra senda angosta es,\n¡seguid!, no os desaniméis;\nfelicidad habrá después\nen el hogar donde estaréis.",
      "Es tiempo de ira trabajar\ny dar las nuevas de salud\nde Aquel que a todos ha de dar\nhogar de eterna juventud."
    ],
    coro: "muy pronto vendrá el Redentor.\n¡Velad y orad! Vendrá el Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_215.mp3"
    }
  },
  {
    id: 216,
    numero: 216,
    categoria: "A",
    copyright: false,
    titulo: "¿Temes que en la Lucha?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Temes que en la lucha\nno podrás vencer?,\n¿que con las tinieblas\nhas de contender?\nAbre la puerta de tu corazón,\ndeja Salvador entrar.",
      "¿Es tu fe muy débil en la oscuridad?\n¿Son tus fuerzas pocas contra la maldad?\nAbre pues la puerta de tu corazón\ndeja al Salvador entrar.",
      "¿Quiere, ir gozándote en la senda aquí?\nAbre, pues la puerta de tu corazón,\ndeja al Salvador entrar."
    ],
    coro: "Deja al Salvador entrar,\ndeja al Salvador entrar;\nabre pues la puerta de tu corazón,\ny entrará el Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_216.mp3"
    }
  },
  {
    id: 217,
    numero: 217,
    categoria: "A",
    copyright: false,
    titulo: "Oí la Voz del Buen Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oí la voz del buen Jesús:\n\"Sígueme, sígueme, sígueme.\nTe guiaré a eterna luz.\nSígueme, sígueme, sígueme.\nPor ti la ley toda cumplí.\npor ti la amarga hiel bebí,\npor ti la muerte cruel sufrí.\nSígueme, sígueme, sígueme\".",
      "\"Oh, deja atras el vil pecado.\nSígueme. sígueme, sígueme.\nHogar celeste he preparado.\nSígueme, sígueme, sígueme.\nOh, cuántas veces te llamé,\ny quebraste tu mi santa ley,\nmas fiador por ti quedé.\nSígueme, sígueme, sígueme\".",
      "\"En mi tú puedes descansar.\nSígueme. sígueme, sígueme.\nOh, ven tus penas a entregar.\nSígueme. sígueme, sígueme.\nYo soy tu Dios, tu Salvador;\nyo te amo mucho, oh pecador.\nSígueme, sígueme, sígueme\".",
      "Sí, mi Jesús, te seguiré.\nSeguiré. seguiré, seguiré.\nPor ti yo todo dejaré.\nDejaré, dejaré, dejaré.\nMuy débil soy y sin valor;\nsin ti no puedo andar, Señor.\nMas lléname de tu vigor.\nSeguiré, seguiré, seguiré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_217.mp3"
    }
  },
  {
    id: 218,
    numero: 218,
    categoria: "A",
    copyright: false,
    titulo: "Por mí Intercede",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por mí intercede Jesús en los cielos,\nJesús, el amante y benigno Señor;\ny vela mis pesos con tierno cuidado;\n¿no quieres tu vida rendir a su amor?",
      "El Padre en los cielos daráme morada;\ndaráme la vida, sin fin, eternal.\n¿Aceptas su amante y tierno llamado?\n¿No quiera gozar de su amor paternal?",
      "Ropaje lavado en la sangre de Cristo\nhabré de vestir en aquel bello hogar;\npodrás tú tenerlo brillante y glorioso,\nsi hoy en la fuente te quieres lavar.",
      "Paz tengo cual río que corre tranquilo,\nla paz que este mundo no puede quitar;\nJesús la concede y a ti te la ofrece.\nSu gracia divina, ¿querrás aceptar?"
    ],
    coro: "Oramos por ti, sí, oramos por ti;\nhoy por ti suplicamos, oramos por ti.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_218.mp3"
    }
  },
  {
    id: 219,
    numero: 219,
    categoria: "A",
    copyright: false,
    titulo: "Oí la Voz del Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oí la voz del Salvador\ndecir con tierno amor:\n\"¡Oh ven a mí, descansarás,\ncargado pecador!\nTal como estaba, a mi Jesús,\ncansado acudí,\ny luego dulce alivio y paz\npor fe de él recibí.",
      "Oí la voz del Salvador\ndecir: \"Venid, bebed;\nyo soy la fuente de salud\nque apaga toda sed\".\nCon sed de Dios, del vivo Dios,\nbusqué a Emmanuel;\nlo hallé; mi sed él apagó,\ny ahora vivo en él.",
      "Oí su dulce voz decir:\n\"Del mundo soy la luz;\nmiradme a mí y salvos sed;\nhay vida en ml cruz.\nMirando a Cristo, por la fe,\nmi norte y sol hallé;\npor siempre viviré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_219.mp3"
    }
  },
  {
    id: 220,
    numero: 220,
    categoria: "A",
    copyright: false,
    titulo: "Del Trono Celestial",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Del trono celestial\nal mundo descendí,\nsed y hambre padecí\ncual mísero mortal.\nY todo fue por ti, por ti.\n¿Qué has hecho tú por mi?\nY todo fue por ti, por ti.\n¿Qué has hecho tú por mí?",
      "Por darte la salud\nsufrí, pené, morí;\ntu sustituto fui\nen dura esclavitud.\nY todo fue por ti. por ti.\n¿Qué has hecho tú por mí?\nY todo fue por ti, por ti.\n¿Qué has hecho tú por mí?",
      "Del Padre celestial,\ncompleta bendición,\neterna salvación,\ndelicia perennal\nte doyde gracia a ti, a ti.\n¿Y huyes tú de mi?\n¿Y huyes tú de mí?",
      "Los lazos de Satán\nquebranta, pecador,\ny el néctar de mi amor\ntus labios probarán.\nNo dudes, ven a mí, a mí.\n¡Jesús, me rindo a ti!\nNo dudes, ven a mi, a mí.\n¡Jesús, me rindo a ti?"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_220.mp3"
    }
  },
  {
    id: 221,
    numero: 221,
    categoria: "A",
    copyright: false,
    titulo: "Dios al Pródigo Llama",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios al prodigo llama que venga sin tardar.\nOye pues su voz que hoy te llama a ti.\nAunque lejos vagabas del paternal hogar,\namoroso llámate aún.",
      "Tierno, amante, paciente, tu Padre implora aún.\nOye pues su voz que hoy te llama a ti.\nVuelve mientras abogue por ti el Espíritu;\namoroso llámate aún.",
      "Ven, recibe el abrazo del Padre celestial.\nOye pues su voz que hoy te llama a ti.\nEntra alegre al banquete que brinda, sin igual"
    ],
    coro: "Llámate hoy a ti,\ncansado pródigo, ven;\nllámate hoy a ti,\ncansado pródigo, ven.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_221.mp3"
    }
  },
  {
    id: 222,
    numero: 222,
    categoria: "A",
    copyright: false,
    titulo: "Tan Triste y tan Lejos de Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tan triste y tan lejos de Dios me sentí\ny sin el perdón de Jesús.\nMas cuando su voz amorosa oí\nque dijo: \"Oh, ven a la luz\",",
      "¡Que amigo tan dulce es el tierno Jesús!\n¡Tan lleno de paz y de amor!\nDe todo este mundo es, la fúlgida luz\nel nombre del buen Salvador.",
      "De mi alma el anhelo por siempre será\nmás cerca vivir de la cruz,\ndo santo poder y pureza me",
      "¡Oh! vera a Jesús, infeliz pecador;\nno vagues a ciegas ya más.\nSí, ven a Jesús, tu benigno Señor,\nque en él salvación hallarás."
    ],
    coro: "Yo todo dejé para andar en la luz,\nno moro en tinieblas ya más;\nencuentro la paz en seguir a Jesús\ny vivo en la luz de su faz.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_222.mp3"
    }
  },
  {
    id: 223,
    numero: 223,
    categoria: "A",
    copyright: false,
    titulo: "En Extraña Tierra",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En extraña tierra,\npecador infiel,\nvoz de amor te llama:\n¡Ven, hijo, ven!",
      "De la estéril tierra\nllena de pavor,\na mi amor paterno\n¡ven, hijo, ven!",
      "Ve la puerta abierta.\nEres mí hijo aún,\nCon amor te miro.",
      "Has errado lejos.\n¿Quieres persistir?\nTodo te perdono.\n¡Ven, hijo, ven!"
    ],
    coro: "Bienvenido vuelve,\nvuelve al hogar;\nbasta, oh pródigo, de errar;\n¡ven, hijo, ven!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_223.mp3"
    }
  },
  {
    id: 224,
    numero: 224,
    categoria: "A",
    copyright: false,
    titulo: "Preste Oídos el Humano",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Preste oídos el humano\na la voz del Salvador,\nregocíjese el que siente\nel pecado abrumador.\nYa resuena el Evangelio\nde la tierra en la ancha faz\ny de gracia ofrece al hombre\nel perdón, consuelo y paz.",
      "Vengan cuantos se acongojan\npor lograr con qué vivir,\ny en su afán tan sólo rinden\nservidumbre hasta el morir.\nHay vestido más precioso,\nblanco, puro y eternal;\nes Jesús quien da a las almas\nese manto celestial.",
      "Vengan todos los que sufran,\nlos que sientan hambre y sed,\nlos que débiles se encuentren,\nde este mundo a la merced.\nEn Jesús hay pronto auxilio,\nhay hartura y bienestar;\ncual ninguno puede dar.",
      "¿Por qué en rumbo siempre incierto\nvuestra vida recorréis?\nA Jesús venid, mortales,\nque muy cerca le tenéis.\nEl es vida en cielo y tierra,\ny el exceso de su amor\nos mejora la presente\ny os reserva otra mejor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_224.mp3"
    }
  },
  {
    id: 225,
    numero: 225,
    categoria: "A",
    copyright: false,
    titulo: "Venid a mí los Tristes",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Venid a mí los tristes,\ncansados de pecar;\nrefugio os ofrezco,\nvenid a descansar.",
      "Venid a mí, cansados,\nmí voz hoy escuchad,\ny así seréis librados\nde toda iniquidad.",
      "Venid a mí, cansados,\nos dice el Salvador;\npor valles y montañas",
      "Venid a mi, cansados.\n¿Por qué queréis vagar?\nA vuestro Padre amante\nvenid sin esperar."
    ],
    coro: "Venid, venid a mí,\ncansados de pecar;\nvenid, venid a mí,\nvenid a descansar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_225.mp3"
    }
  },
  {
    id: 226,
    numero: 226,
    categoria: "A",
    copyright: false,
    titulo: "Yo Escucho, Buen Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo escucho, buen Jesús,\ntu dulce voz de amor,\nque, desde el árbol de la cruz,\ninvita al pecador.\nYo soy pecador,\nnada hay bueno en mí;\nser objeto de tu amor\ndeseo y vengo a ti.",
      "Tú ofreces el perdón\nde toda iniquidad,\nsí el llanto inunda el corazón\nque acude a tu piedad.\nYo soy pecador,\nten de mí piedad;\nve mi llanto de dolor\ny borra mí maldad.",
      "Prometes aumentar\nla fe del que creyó,\ny gracia sobre gracia dar\na quien en ti confió.\nCreo en ti, Señor,\nsólo fío en ti;\ny basta para mí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_226.mp3"
    }
  },
  {
    id: 227,
    numero: 227,
    categoria: "A",
    copyright: false,
    titulo: "Ven a la Fuente de Vida",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven a la fuente de vida,\nven al amante Jesús;\npaz y perdón te ofrece.\nVen, pues, al pie de la cruz.",
      "Ven al Señor, ven ahora:\nconsuelo y paz hallarás;\nvida de gozo y de calma\nen tu Maestro tendrás.",
      "Ven al Señor, ven ahora;\ntráele tu carga a él;\noye su voz que te implora;",
      "¡Oh, cuán preciosa promesa\nte hace tu buen Salvador!\nVida tendrás para siempre\njunto a tu Dios y Señor."
    ],
    coro: "Ven a Jesús, ven a Jesús,\nven a los pies de la cruz sin tardar;\npaz y perdón te ofrece.\nVen, no le dejes pasar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_227.mp3"
    }
  },
  {
    id: 228,
    numero: 228,
    categoria: "A",
    copyright: false,
    titulo: "Un Hombre Llegóse de Noche a Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un hombre llegóse de noche a Jesús,\nbuscando la senda de vida y luz;\nmas Cristo le dijo: \"Si a Dios quieres ver,\ntendrás que renacer.",
      "Y tu, sí en el cielo quisieres entrar\ny con los benditos allí descansar;\nsi vida eterna quisieres tener,\ntendrás que renacer.",
      "Amigo, no debes jamás desechar\npalabras que Cristo dignóse hablar;",
      "Hay quienes Jesús ha de resucitar,\nlos cuales querrás aquel día encontrar;\npues este mensaje hoy debes creer:\nTendrás que renacer."
    ],
    coro: "\"Tendrás que renacer, tendrás que renacer;\nde cierto, de cierto te digo a ti:\nTendrás que renacer.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_228.mp3"
    }
  },
  {
    id: 229,
    numero: 229,
    categoria: "A",
    copyright: false,
    titulo: "De Dios Vagaba Lejos yo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De Dios vagaba lejos yo\nvuelvo hoy a ti;\npor sendas donde el mar reinó\nvuelvo hoy a ti.",
      "Cansado del pecar estoy,\nvuelvo hoy a ti;\nen ti espero desde hoy\nvuelvo hoy a ti.",
      "Confío sólo en esto yo,\nvuelvo hoy a ti;\nen que Jesús por mi murió",
      "Que puedes tú limpiarme sé\nvuelvo hoy a ti;\npues en tu sangre, oh lávame,\nvuelvo hoy a ti."
    ],
    coro: "Ya no más, oh Señor,\nvoy errando así;\na los brazos de tu amor,\nCristo, vuelvo , oh sí",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_229.mp3"
    }
  },
  {
    id: 230,
    numero: 230,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Vengas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "\"Cuando vengas en tu reino,\nCristo, acuérdate de mi\",\ndijo el malhechor contrito,\nimplorando ayuda así.",
      "Cuando vengas en tu reino,\nmi abatido corazón,\ncomo el malhechor contrito\nhallará la salvación.",
      "Cuando vengas en tu reino,\nsantifícame, Señor;\ncomo el malhechor contrito",
      "Cuando vengas en tu reino,\ny ya nada tenga aquí,\ncomo el malhechor contrito\nhallaré tesoro allí.",
      "Cuando vengas en tu reino,\na tu pueblo a rescatar,\ncomo el malhechor contrito\nyo contigo quiero estar."
    ],
    coro: "Vano no fue, vano no fue\nnunca el ruego humilde de fe:\n\"Cuando vengas en tu reino,\nCristo, acuérdate de mí\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_230.mp3"
    }
  },
  {
    id: 231,
    numero: 231,
    categoria: "A",
    copyright: false,
    titulo: "Te Ruego, oh Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Te ruego oh Dios ¡Escúchame a mi!\n¡ven, gran Libertador!,\npues agobiado, anhelo ir a ti.\n¡Ven, gran Libertador!,",
      "No puedo abrigo en noche oscura hallar,\n¡ven, gran Libertador!,\nmas luz y vida tú me puedes dar,\n¡ven, gran Libertador!",
      "Atormentado, sin descanso y paz,\n¡ven, gran Libertador!,\nlos ojos alzo a tu benigna faz,",
      "Mi voz contrita tú no desoirás,\n¡ven, gran Libertador!,\nmi humilde ruego pronto atenderás,\n¡ven, gran Libertador!."
    ],
    coro: "Por frígidas montañas yo vagué,\nmuy lejos de mi buen Pastor\n¡Oh, sálvame y llévame al redil,\nven, gran Libertador!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_231.mp3"
    }
  },
  {
    id: 232,
    numero: 232,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh mi Dios!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh mi Dios! yo soy un vil,\nmiserable pecador,\nhe faltado veces mil\na tu santa ley, Señor;\nyo tus sendas olvidé\ny tu amor no aprecié.",
      "En mi alma no hay verdad,\ny mi pobre corazón,\npor su grande iniquidad\nlleno está de confusión;\nhe perdido mí vigor,\ndesfallezco de dolor.",
      "Ten, oh Dios, piedad de mí,\nque debilitado estoy.\nDame, por amor de ti,\nla salud que busco hoy.\nNo me dejes perecer;\nven, mi cárcel a romper."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_232.mp3"
    }
  },
  {
    id: 233,
    numero: 233,
    categoria: "A",
    copyright: false,
    titulo: "En todo Recio Vendaval",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En todo recio vendaval,\na todo amenazante mal,\ninexpugnable asilo es él,\npropiciatorio para el fiel.",
      "Jesús su bálsamo de paz\nen el que busque allí su faz\nderrama, y glorifícale:\npropiciatorio para el fiel.",
      "Para el humilde corazón\nque eleva al cielo su oración,\nson las bondades del Señor\npropiciatorio de su amor.",
      "Los fieles todos uno son\ny están en dulce comunión;\nes el santuario el que la da:\npropiciatorio de Jehová."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_233.mp3"
    }
  },
  {
    id: 234,
    numero: 234,
    categoria: "A",
    copyright: false,
    titulo: "Yo Confío en Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo confió en Jesús\ny ya salvo soy.\nPor su muerte en la cruz\na la gloria voy.",
      "Todo fue pagado.\nya, nada debo yo.\nSalvación perfecta\nda quien por mí murió.",
      "Todo hizo mí Señor;\nme salvó ya él.\nCon ternura y amor",
      "Mi perfecta salvación\neres, mi Jesús;\nmi completa redención,\nmi gloriosa luz."
    ],
    coro: "Cristo dio por mí\nsangre carmesí,\ny por su muerte en la cruz\nla vida me dio Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_234.mp3"
    }
  },
  {
    id: 235,
    numero: 235,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Sopla airada la Tempestad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando sopla airada la tempestad\ny la barca en grave peligro está,\nno se puede andar en seguridad\nsin tener un ancla que apoyará.",
      "Arrecifes hay que marcando van\nel sendero triste de muerte cruel,\ndonde vidas mil naufragando están\nsin tener un ancla ni timonel.",
      "En las negras ondas de la ansiedad,\ncuando soplan vientos de destrucción,"
    ],
    coro: "Ancla tenemos que nos dará\napoyo firme en la tempestad;\nen la Roca eterna fija está;\nsólo allí tendremos seguridad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_235.mp3"
    }
  },
  {
    id: 236,
    numero: 236,
    categoria: "A",
    copyright: false,
    titulo: "Roca de la Eternidad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Roca de la eternidad,\nfuiste abierta para mí;\nsé mi escondedero fiel;\nsólo encuentro paz en ti,\nrico, limpio manantial\nen el cual lavado fui.",
      "Aunque fuese siempre fiel,\naunque llore sin cesar,\ndel pecado no podré\njustificación lograr;\nsólo en ti teniendo fe,\ndeuda tal podré pagar.",
      "Mientras tenga que vivir\nen el mundo de maldad;\ncuando vaya a responder\nen tu augusto tribunal,\nsé mi escondedero fiel,\nRoca de la eternidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_236.mp3"
    }
  },
  {
    id: 237,
    numero: 237,
    categoria: "A",
    copyright: false,
    titulo: "Te Quiero, mi Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Te quiero, mi Señor;\nhabita en mí,\ny vencedor seré\npor fe en ti.",
      "Te quiero, ¡oh Jesús!,\nmi Salvador.\n¡Oh!, hazme en verdad\ntu servidor.",
      "Tu voluntad, Señor,\nenséñame;\ny de tu gran amor,",
      "¡Oh! mi gran Bienhechor,\nen tentación\nconcédeme valor\ny protección."
    ],
    coro: "Te quiero, sí, te quiero;\nsiempre te anhelo;\nbendíceme te ruego;\nacudo a ti.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_237.mp3"
    }
  },
  {
    id: 238,
    numero: 238,
    categoria: "A",
    copyright: false,
    titulo: "Al Andar con Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al andar con Jesús\nen su fúlgida luz,\nen mi senda su gloria veré;\ny su voz he de oír,\npues promete vivir\ncon aquel que obedece por fe.",
      "Si trabajo y penar\ntengo aquí que cargar,\nrico pago en Jesús obtendré;\npues alivia su amor\nmi afán, mí dolor cuando ve\nque obedezco por fe.",
      "Nunca pude saber\nde su amor el placer\nhasta que todo a Cristo entregué.\nSu bondad, su favor,\nsu poder redentor\ngoza aquel que obedece por fe.",
      "Fiel amigo él es;\nsentaréme a sus pies,\ny a su lado el camino andaré.\nSi algo hay que cumplir,\no sí hay donde he de ir,\nsin temor obedezco por fe."
    ],
    coro: "Su santa ley\nobedezco por fe,\ny feliz para siempre\ncon Jesús estaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_238.mp3"
    }
  },
  {
    id: 239,
    numero: 239,
    categoria: "A",
    copyright: false,
    titulo: "A Cualquiera Parte",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A cualquiera parte sin temor iré\nsi Jesús dirige mí inseguro pie.\nSin su compañía todo es pavor,\nmas si él me guía no tendré temor.",
      "Con Jesús por guía adondequiera voy.\nCaminando en pos de él seguro estoy.\nY aunque padre y madre puédenme faltar,\nJesucristo nunca me abandonará.",
      "Dondequiera pueda estar, en tierra y mar,\nquiero ser su fiel testigo sin cesar.\nY si por desierto mí camino va,",
      "Dondequiera afrontaré la noche atroz,\nporque siempre oigo su benigna voz.\nEl de día y noche a mi lado está;\ny en plena gloria me despertará."
    ],
    coro: "Con Jesús por doquier,\nsin temor iré;\nsi Jesús me guía,\nnada temeré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_239.mp3"
    }
  },
  {
    id: 240,
    numero: 240,
    categoria: "A",
    copyright: false,
    titulo: "Mi fe Contempla a Ti",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi fe contempla a ti,\nCordero celestial,\nmi Salvador.\nOye mi petición,\nquita mí transgresión,\nsea tu posesión\ndesde hoy, Señor.",
      "Al débil corazón\ntu gracia un celo dé,\ninspirador.\nMoriste tú por mí,\nsea mi amor a ti\npuro y ferviente así,\ncual vivo ardor.",
      "Por senda oscura voy,\nno veo en derredor;\nmas me guiarás.\nEnjuga mi llorar,\nmi noche haz brillar\ny así no pueda errar\nde ti jamás."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_240.mp3"
    }
  },
  {
    id: 241,
    numero: 241,
    categoria: "A",
    copyright: false,
    titulo: "Jesús es mi Luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús es mai luz, jamás temeré;\nde día y de noche en luz andaré.\nEn horas de llanto, de luto y dolor,\nconsuelo y gozo me infunde el Señor.",
      "Jesús es mi luz; si en males estoy,\nal Padre benigno seguro yo voy.\nAllí está Cristo, mí fiel Mediador;\nsus méritos siempre pondrá a mí favor.",
      "Jesús es mí luz, mí amparo y broquel;\nvictoria obtendré; me mantiene muy fiel.\nSí débil estoy en mí ayuda vendrá;",
      "Jesús es mi luz, mi todo, mí bien;\nle doy alma y cuerpo y mi mente también.\nEntono al Cordero alegre loor;\ncon todos sus santos le rindo honor."
    ],
    coro: "Jesús es mi luz, mi todo, mi bien;\nde día y de noche es mí sostén.\nJesús es mí luz, mí todo, mí bien;\nde día y de noche él es mí sostén.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_241.mp3"
    }
  },
  {
    id: 242,
    numero: 242,
    categoria: "A",
    copyright: false,
    titulo: "Eterna Roca es mi Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Eterna Roca es mí Jesús,\nrefugio en la tempestad;\nconfianza he puesto yo en él,\nrefugio en la tempestad.",
      "Es sombra en día de calor,\nrefugio en la tempestad;\ndefensa eterna es mí Señor,\nrefugio en la tempestad.",
      "¡Oh!, Roca eterna, mi Jesús,\nrefugio en la tempestad,\nsé tú mí guía y fuerza y luz,"
    ],
    coro: "Roca eterna, nuestra protección,\nnuestra fuerza, nuestro Salvador,\nnuestro auxilio en la tribulación,\nconsolación en el dolor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_242.mp3"
    }
  },
  {
    id: 243,
    numero: 243,
    categoria: "A",
    copyright: false,
    titulo: "Confío en Jesucristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Confió en Jesucristo,\nquien en la cruz murió.\nPor esa muerte invicto\nal cielo marcho yo.\nCon sangre tan preciosa\nmis culpas lava él:\nla derramó copiosa\npor mí ya Emmanuel.",
      "Me cubre tu justicia\nde plena protección;\ntú eres mí delicia,\nmi eterna salvación.\nJesús, en ti descanso;\nreposo tú me das;\ntranquilo, pues, avanzo\nal cielo, donde estás.",
      "A disfrutar invitas.\nAcepto, mí Señor,\ndelicias infinitas\ny celestial amor.\nEspero al fin mirarte,\noír tu dulce voz;\nmí Salvador, mí Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_243.mp3"
    }
  },
  {
    id: 244,
    numero: 244,
    categoria: "A",
    copyright: false,
    titulo: "Cuando te Quiero",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando te quiero, cerca tú estás;\nde nada temo, buen Salvador;\nsiempre bondoso me sostendrás,\ncuando te quiero más.",
      "Cuando te quiero, listo tú estás,\ny abandonarme nunca podrás;\npaz por tristeza siempre me das,\ncuando te quiero más.",
      "Cuando te quiero, mí buen Jesús,\nhora tras hora tú me guiarás;\ntiernos cuidados tú me darás,",
      "Cuando te quiero, vienes, Jesús,\ny tu presencia muy dulce es;\ncorren las aguas de salvación,\ncuando te quiero más."
    ],
    coro: "Cuando te quiero más,\ncuando te quiero más,\ncerca tú estás, mi buen Salvador,\ncuando te quiero mas.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_244.mp3"
    }
  },
  {
    id: 245,
    numero: 245,
    categoria: "A",
    copyright: false,
    titulo: "Oh! Salvo en la Roca",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh! salvo en la Roca más alta que yo,\nla Roca de vida que Cristo abrió,\nbrindando a su pueblo las aguas de paz.\nOh, Roca divina, serás mi solaz.",
      "Que vengan conflictos, tumultos, dolor:\na Cristo, mi Roca, iré sin temor;\nrecibo consuelo, consejos y luz:\nla Roca divina es mí amante Jesús.",
      "Y cuando mí vida se acerque a su fin\ny oiga por fe el divino clarín,\ntus límpidas aguas trayendo virtud,\noh Roca divina, serán mi salud.",
      "El lóbrego valle no temo cruzar,\npues tú me guiarás y me harás descansar;\nseguro en tu guarda, con paz dormiré:\nJesús, el Eterno, es mi Roca, mi Rey."
    ],
    coro: "Salvo en ti, salvo en ti,\n¡oh Roca bendita,\nme escondo en ti!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_245.mp3"
    }
  },
  {
    id: 246,
    numero: 246,
    categoria: "A",
    copyright: false,
    titulo: "Señor, en ti Confío",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor, en ti confió\ny siempre confiaré;\nPues brilla en mí alma\nLa antorcha de la fe.\nAl cielo, cuántas veces\nla vista en mí aflicción\nalcé, y consuelo dulce\nhalló mí corazón.",
      "Me es grato si yo sufro,\nen horas de ansiedad,\nsaber que desde el cielo\nme miras con piedad;\nque sientes tú mis penas,\nconoces mi dolor,\nque escuchas tú mis ayes,\nme envías tu favor.",
      "La fe que al hombre anima,\ntu más precioso don,\nes luz en las tinieblas,\nalivio en la aflicción,\namparo al desvalido,\nal náufrago, salud,\ncimiento de virtud.",
      "Por eso te adoro,\npor eso creo en ti,\nde quien preciosos dones\nsin precio recibí.\nConfirma y acrecienta,\nSeñor, mi humilde fe;\ny siendo tuyo ahora,\npor siempre lo seré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_246.mp3"
    }
  },
  {
    id: 247,
    numero: 247,
    categoria: "A",
    copyright: false,
    titulo: "Cristo me Ayuda por él a Vivir",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo me ayuda por él a vivir,\nCristo me ayuda por él a morir.\nHasta que llegue su gloría a ver,\ncada momento le entrego mi ser.",
      "¿Siento pesares? Muy cerca él está.\n¿Siento dolores? Alivio me da.\n¿Tengo aflicciones? Me muestra su amor;\ncada momento me guarda el Señor.",
      "¿Tengo amarguras? o ¿tengo temor?\n¿Tengo tristezas? Me inspira valor.\n¿Tengo conflictos o penas aquí?",
      "¿Tengo flaquezas? O ¿débil estoy?\nCristo me dice: \"Tu amparo yo soy\".\nCada momento, en sombra o en luz,\nsiempre anda junto conmigo Jesús."
    ],
    coro: "Cada momento la vida me da;\ncada momento conmigo él está.\nHasta que llegue su gloria a ver,\ncada momento le entrego mi ser.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_247.mp3"
    }
  },
  {
    id: 248,
    numero: 248,
    categoria: "A",
    copyright: false,
    titulo: "Bajo sus Alas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bajo sus alas ¡seguro descanso!\naunque anochece y amaga el turbión,\nen él confío, su brazo me guarda;\nhijo soy de su eternal redención.",
      "Bajo sus alas ¡eterno refugio!\nTanto lo anhela este fiel corazón.\nSi para mí no hay remedio en la tierra,\nCristo me sana y me da bendición.",
      "Bajo sus alas, ¡placer indecible!\nMe escondo aquí mientras pase mí afán.\nFiel protección de mí fiero enemigo,"
    ],
    coro: "Salvo en Jesús, salvo en Jesús,\n¿quién de él podrá apartarme?\nBajo sus alas mi alma estará\nsalva y segura por siempre.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_248.mp3"
    }
  },
  {
    id: 249,
    numero: 249,
    categoria: "A",
    copyright: false,
    titulo: "Todas las Promesas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Todas las promesas del Señor Jesús\nson apoyo poderoso de mi fe.\nMientras luche aquí buscando yo su luz,\nsiempre en sus promesas confiaré.",
      "Todas sus promesas para el hombre fiel,\nel Señor, por su Palabra, cumplirá;\ny confiado sé que para siempre en él\npaz eterna mi alma gozará.",
      "Todas las promesas del Señor serán\ngozo y fuerza en nuestra vida terrenal\nellas en la dura lid nos sostendrán,"
    ],
    coro: "Grandes, fieles,\ntodas las promesas que el Señor ha dado;\ngrandes, fieles,\nen ellas yo por siempre confiaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_249.mp3"
    }
  },
  {
    id: 250,
    numero: 250,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh! Tenga yo la Ardiente Fe",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh! tenga yo la ardiente fe\nque ante enemigos mil\nno temblará ni aun cuando esté,\nni aun cuando esté\nen la miseria vil,\nen la miseria vil.",
      "Tal fe, que no se quejará\nni bajo corrección,\nen hora amarga afirmará,\nafirmará\nen Dios el corazón,\nen Dios el corazón.",
      "Refulge más si hay tempestad\nrugiendo en derredor,\ny cruzará la oscuridad,\nla oscuridad\nsin dudas ni temor,\nsin dudas ni temor.",
      "Oh dame a mí, Señor, tal fe,\ny, venga bien o mal,\nestando aquí gustar podré,\ngustar podré\nla dicha celestial."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_250.mp3"
    }
  },
  {
    id: 251,
    numero: 251,
    categoria: "A",
    copyright: false,
    titulo: "Oh Peregrino Ignoto, Ven",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh peregrino ignoto, ven.\nMe aferro a ti sin ver tu faz.\nMí compañía ya pasó,\nmas tú conmigo quedarás.\nContigo yo me quedo aquí\nluchando hasta el alba así.",
      "Decir quién soy no es menester;\nconoces toda mi maldad;\nmi nombre lo sabías ya\ndesde antes que luchara aquí;\nmas tú, tu nombre, dímelo;\nsaber quién eres quiero yo.",
      "En vano intentas escapar;\njamás te soltaré, Señor.\n¿Serás tú quien murió por mí?\nDime el secreto de tu amor,\npues sólo yo te soltaré\ncuando tu bendición me des."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_251.mp3"
    }
  },
  {
    id: 252,
    numero: 252,
    categoria: "A",
    copyright: false,
    titulo: "Cuando en la Lucha (Somebody Knows)",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando en la lucha me falte poder\nalguien sabrá, alguien sabrá.\n¿Quién a mis ayes fin puede poner?\nAlguien sabrá: es Cristo.",
      "Olas de pruebas no las temeré;\nalguien sabrá, alguien sabrá;\npues cuando mí alma en las sombras esté,\nalguien sabrá: a Cristo.",
      "Débil, herido, abrumado del mal,\nalguien sabrá, alguien sabrá;"
    ],
    coro: "Alguien sabrá, alguien sabrá;\ncuando me oprima y me tiente Satán,\nes quien me guardará siempre;\nalguien sabrá, a Cristo.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_252.mp3"
    }
  },
  {
    id: 253,
    numero: 253,
    categoria: "A",
    copyright: false,
    titulo: "¿Qué me Iportan?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Qué me importan del mundo las penas\ny doblada tener la cerviz?\n¿Qué me importa sufrir en cadenas\nsi me espera una patria feliz?\nResignado, tranquilo y dichoso,\nde la aurora vislumbro la luz;\nmis prisiones las llevo gozoso\npor Jesús, quien venció en la cruz.",
      "Aunque preso, las horas se vuelan\nen gratísimo y santo solaz:\ncon la Biblia mis mala se ausentan,\npues de darme la dicha a capaz.\n¡Libro santo!, mi estancia ilumina;\nnunca, nunca te apartes de mí;\ncontemplando tu bella doctrina,\nno hay males ni penas aquí.",
      "¡Evangelio sublime, preciado\n¡Bello pacto de amor sin igual!\nQuiero siempre tenerte a mi lado,\nRefulgiendo cual puro fanal\nAun en valle de muerte, oscuro\nel que acude a los pies del Señor\nen el bello Evangelio del amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_253.mp3"
    }
  },
  {
    id: 254,
    numero: 254,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh, cuán Dulce es Fiar en Cristo!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, cuán dulce es fiar en Cristo\ny entregarle todo a él,\nesperar en sus promesas,\ny en sus sendas serle fiel!",
      "Es muy dulce fiar en Cristo\ny cumplir su voluntad,\nno dudando su palabra,\nsiempre andando en la verdad.",
      "Siempre quiero fiar en Cristo,\nmi precioso Salvador,"
    ],
    coro: "¡Cristo!, ¡Cristo!, ¡cuánto te amo!\nTu poder probaste en mí.\n¡Cristo!, ¡Cristo!, puro y santo,\nsiempre quiero fiar en ti.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_254.mp3"
    }
  },
  {
    id: 255,
    numero: 255,
    categoria: "A",
    copyright: false,
    titulo: "Castillo Fuerte es nuestro Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Castillo fuerte es nuestro Dios\ndefensa y buen escudo.\nCon su poder nos librara\nen este trance agudo.\nCon furia con afán\nacósanos Satán.\nPor armas deja ver\nastucia y gran poder;\ncual él no hay en la tierra.",
      "Luchar aquí sIn el Señor,\ncuán vano hubiera sido.\nMas por nosotros pugnará\nde Dios el Escogido.\n¿Sabéis quién es?\nJesús, el que venció en la cruz;\nSeñor de Sabaoth,\nomnipotente Dios,\nél triunfa en la batalla.",
      "Aun cuando estén demonios mil\nprontos a devorarnos,\nno temeremos, porque Dios\nvendrá a defendernos.\nSatán, y su furor;\ndañarnos no podrá,\npues condenado está\npor la Palabra santa.",
      "Sin destruir la dejará,\naunque mal de su grado:\nes la Palabra del Señor\nque lucha a nuestro lado.\nQue lleven con furor\nlos bienes, vida, honor,\nlos hijos, la mujer,\ntodo ha de perecer;\nde Dios el reino queda."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_255.mp3"
    }
  },
  {
    id: 256,
    numero: 256,
    categoria: "A",
    copyright: false,
    titulo: "Por la Justicia de Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por la justicia de Jesús,\nla sangre que por mí vertió,\nalcánzase perdón de Dios\ny cuanto bien nos prometió;\nque sólo él rescata sé;\nsegura base es de mi fe,\nsegura base es de mi fe.",
      "Así, turbada no veré\nmi paz, su incomparable don.\nAun cuando un tiempo oculto esté\nme dejará su bendición.\nEn mí no puedo hallar jamás\nla base firme de la paz,\nla base firme de la paz.",
      "En la tormenta es mí sostén\nel pacto que juró y selló.\nSu amor a mi supremo bien,\nsu amor que mi alma redimió.\nJesús, la Peña, me será\nbase única que durará,\nbase única que durará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_256.mp3"
    }
  },
  {
    id: 257,
    numero: 257,
    categoria: "A",
    copyright: false,
    titulo: "Padre, yo Vengo a Ti",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Padre, yo vengo a ti;\nsólo hay en ti poder.\nProtégeme, Señor,\nmí ayudador.\nSombras tan sólo aquí,\nmás densas hoy que ayer,\nme cercan, mas me harás\nun vencedor.",
      "Ampárame, Señor;\ndame tu dulce amor.\nAleja el mal de mí,\ndame tu paz.\n¡Oh, Padre, líbrame\nde todo cruel dolor,\ny en el cieloal fin\nvea tu faz!",
      "Padre, yo vengo a ti;\ndame tu bendición.\nConfío en ti, Señor;\nsé mi sostén.\nTu gracia y tu poder.\nllenen mi corazón.\nGuíame por tu amor\nal santo Edén."
    ],
    coro: "Padre, yo vengo a ti,\noye mi voz;\nconfío sólo en ti,\ndame tu amor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_257.mp3"
    }
  },
  {
    id: 258,
    numero: 258,
    categoria: "A",
    copyright: false,
    titulo: "A la Cruz de Cristo Voy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A la cruz de Cristo voy.\nDébil, pobre y ciego soy.\nMis riquezas nada son.\nNecesito salvación.",
      "Suspirado he por ti,\nmas el mal reinaba en mí;\nhoy Jesús me dice fiel:\n\"Tus pecados limpiaré.",
      "Cristo, a ti mi todo doy.\nTiempo, amigos, cuanto soy,\ncuerpo y alma, tuyos son",
      "Tu promesa es mi salud.\nEn tu sangre hallé virtud.\nPecador me siento hoy,\npero en Cristo salvo soy."
    ],
    coro: "Yo confío en ti, Señor,\nmi bendito Salvador,\ny me postro ante tu cruz.\n¡Salva, oh sálvame, Jesús!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_258.mp3"
    }
  },
  {
    id: 259,
    numero: 259,
    categoria: "A",
    copyright: false,
    titulo: "Que mi Vida Entera Esté",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Que mi vida entera esté\nconsagrada a ti, Señor;\nque a mis manos pueda guiar\nel impulso de tu amor.",
      "Que mis pies tan sólo en pos\nde los santos puedan ir;\ny que a ti, Señor, mi voz\nse complazca en bendecir.",
      "Que mis labios, al hablar,\nhablen sólo de tu amor;\nque mis bienes ocultar",
      "Que mi tiempo todo esté\nconsagrado a tu loor,\ny mi mente y su poder\npueda emplearlos en tu honor.",
      "Toma, oh Dios, mi voluntad,\ny hazla tuya, nada más,\ny este pobre corazón;\ny tu trono en él tendrás."
    ],
    coro: "Lávame en la sangre del Señor,\nlímpiame de toda mi maldad;\nríndote mi vida; hazla pues, Señor,\ntuya por la eternidad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_259.mp3"
    }
  },
  {
    id: 260,
    numero: 260,
    categoria: "A",
    copyright: false,
    titulo: "Cúmplase, oh Cristo, tu Voluntad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cúmplase, oh Cristo, tu voluntad.\nSólo tú puedes mi alma salvar.\nCual alfarero, para tu honor\nvasija útil hazme, Señor.",
      "Cúmplase, oh Cristo, tu voluntad.\nQuita de mí alma toda maldad.\nCuál blanca nieve hazla fulgir,\ny fiel y humilde hazme vivir.",
      "Cúmplase, oh Cristo, tu voluntad.\nToda dolencia puedes sanar;\ncuitas, pesares, con tu poder\nquieres hacerlos desvanecer",
      "Cúmplase, oh Cristo, tu voluntad.\nMora en mi alma, dale tu paz,\npara que el mundo vea tu amor,\ntu obra perfecta, oh buen Salvador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_260.mp3"
    }
  },
  {
    id: 261,
    numero: 261,
    categoria: "A",
    copyright: false,
    titulo: "Tuyo Quiero Ser",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tuyo quiero ser, oh Salvador.\nMuéstrame qué hacer,\nCuando asalte el fiero tentador,\ndame tu poder.",
      "Los placeres que en el mundo vi\nno tendrán, nunca más,\nsu poder antiguo sobre mí\nsi conmigo vas.",
      "Tuyo es, oh Cristo, cuanto soy.\nNada es para mí.\nMis talentos te consagro hoy:"
    ],
    coro: "Tuyo soy, tuyo soy,\ntuyo soy, ¡oh Salvador!\nTuyo soy, tuyo soy,\ntuyo soy, ¡mi Redentor!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_261.mp3"
    }
  },
  {
    id: 262,
    numero: 262,
    categoria: "A",
    copyright: false,
    titulo: "Tal como Soy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tal como soy de pecador,\nsin otra fianza que tu amor,\na tu llamado vengo a ti,\nCordero de Dios, heme aquí.",
      "Tal como soy, buscando paz,\nen mi desgracia y mal tenaz,\ncombate rudo siento en mí,\nCordero de Dios, heme aquí.",
      "Tal como soy, con mi maldad,\nmiseria, pena y ceguedad,\npues hay remedio pleno en ti,\nCordero de Dios, heme aquí.",
      "Tal como soy, me acogerás;\nperdón y alivio me darás,\npues tu promesa ya creí,\nCordero de Dios, heme aquí.",
      "Tal como soy, tu compasión\nquitado ha toda oposición;\nyo pertenezco todo a ti,\nCordero de Dios, heme aquí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_262.mp3"
    }
  },
  {
    id: 263,
    numero: 263,
    categoria: "A",
    copyright: false,
    titulo: "¿Deberá Jesús la cruz llevar?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Deberá Jesús la cruz llevar\ny el hombre en cambio no?\nNo, cada cual su cruz tendrá:\nla mía llevo yo.",
      "La cruz sagrada llevaré\nsus huellas al seguir.\nDespués al cielo volaré\ncorona a recibir.",
      "Y sobre el cristalino mar,\ngozoso la echaré\na sus heridos pies, y allí\nsu nombre ensalzaré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_263.mp3"
    }
  },
  {
    id: 264,
    numero: 264,
    categoria: "A",
    copyright: false,
    titulo: "Padre, a tus Pies me Postro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Padre, a tus pies me postro;\nrompe mis prisiones duras;\noh, responde mientras llamo;\npon tu Espíritu en mí.",
      "Mientras Cristo intercede,\nmientras oro yo humilde,\nlo que necesito dame;\npon tu Espíritu en mí.",
      "No deseo ofenderte,\ny en el corazón guardarte;\npon tu Espíritu en mí."
    ],
    coro: "Pon tu Espíritu en mi alma;\nhazme lo que ser debiera;\nhazme puro en todo,\nlibre del pecado;\npon tu Espíritu en mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_264.mp3"
    }
  },
  {
    id: 265,
    numero: 265,
    categoria: "A",
    copyright: false,
    titulo: "Yo te Sequiré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo te seguiré, ¡oh Cristo!,\ndondequiera que estés;\ndonde tú me guíes, sigo;\nsí, Señor, te seguiré.",
      "Aunque duro el camino,\nsin jalones y sin luz,\nseguiré siempre confiado\nen las huellas de Jesús.",
      "Afligido, agotado,\ndébil, lleno de dolor,\nregocíjame, pues ando",
      "Si me guías al gran río\ndel Jordán, no temeré;\nhas pasado tú su frío,\ny gozoso seguiré."
    ],
    coro: "Yo te seguiré, ¡oh Cristo!\nTú moriste para mí.\nAunque todos te negaren,\nyo, Señor, te seguiré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_265.mp3"
    }
  },
  {
    id: 266,
    numero: 266,
    categoria: "A",
    copyright: false,
    titulo: "Dejo el Mundo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dejo el mundo y sigo a Cristo,\npues el mundo pasará;\nmas el tierno amor divino\npor los siglos durará.",
      "Dejo el mundo y sigo a Cristo.\nMí alma en él consolaré.\nSé que él vela mis pisadas;\nsu bondad ensalzaré.",
      "Dejo el mundo y sigo a Cristo,\nmi benigno Salvador;\nen mis peregrinaciones",
      "Dejo el mundo y sigo a Cristo.\nConfiaré yo en su cruz\nhasta que sin velo mire\ncara a cara a mí Jesús."
    ],
    coro: "¡Oh, qué amor inmensurable!\n¡Qué clemencia, qué bondad!\n¡Oh, la plenitud de gracia,\nprenda de inmortalidad!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_266.mp3"
    }
  },
  {
    id: 267,
    numero: 267,
    categoria: "A",
    copyright: false,
    titulo: "Mi Espíritu, Alma y Cuerpo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi espíritu, alma y cuerpo,\nmí ser, mi vida entera,\ncual viva, santa ofrenda\nte entrego a ti, mi Dios.",
      "Soy tuyo, Jesucristo,\ncomprado con tu sangre;\nhaz que contigo ande\nen plena comunión.",
      "Espíritu divino,\ndel Padre la promesa,\nsedienta, mi alma anhela"
    ],
    coro: "Mi todo a Dios consagro\nen Cristo, el vivo altar.\n¡Descienda el fuego santo,\nsu sello celestial!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_267.mp3"
    }
  },
  {
    id: 268,
    numero: 268,
    categoria: "A",
    copyright: false,
    titulo: "Señor, Dios poderoso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor, Dios poderoso,\na ti vengo a implorar,\nmi voz oye amoroso,\nmi ser ¡oh ven a limpiar!\nYo sé que mis transgresiones\ntu amor las puede borrar;\nperdona mis rebeliones.\n¡Oh, ven en mí a morar!",
      "Vagué en el pecado\nsin paz, sin ley, sin Dios,\nmas hoy ya humillado\nde tu perdón vengo en pos.\n¡Señor!, a mí sé propicio,ven,\ncura todo mi mal;\nyo dejo vano prejuicio\ny todo lo terrenal.",
      "Si tú oyes mi ruego,\nSeñor, salvo seré.\nA ti mi ser entrego\ny dulce paz yo tendré.\nAnhelo en tus mansiones\neternas ir a morar,\npor siempre quiero gozar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_268.mp3"
    }
  },
  {
    id: 269,
    numero: 269,
    categoria: "A",
    copyright: false,
    titulo: "Tuyo soy, Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tuyo soy, Jesús, pues oí tu voz\nque en amor llamóme a mí;\nmas anhelo en alas de fe subir,\ny más cerca estar de ti.",
      "A seguirte a ti me consagro hoy,\nconstreñido por tu amor;\nmi espíritu, alma y cuerpo doy\npor servirte, mí Señor.",
      "¡Oh cuán pura y santa delicia es\ntu comunión gozar;\nconversar contigo y tu dulce voz",
      "De tu grande amor no comprenderé\ncual es la profundidad,\nhasta que contigo, Jesús, esté\nen gloriosa eternidad."
    ],
    coro: "Aun más cerca, cerca de tu cruz,\nllévame, oh Salvador;\naun más cerca, cerca, cerca de la luz\nviva yo, ¡oh buen Pastor!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_269.mp3"
    }
  },
  {
    id: 270,
    numero: 270,
    categoria: "A",
    copyright: false,
    titulo: "Anhelo ser Limpio",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Anhelo ser limpio y completo, Jesús;\nque mores en mí alma en tu fúlgida luz.\nMis ídolos rompe, los que antes amé.\n¡Oh!, lávame y blanco cual nieve seré.",
      "¡Oh, mírame desde tu trono de amor!\nHaz mi sacrificio completo, Señor.\nTe quiero rendir cuanto soy, cuanto sé.\nPues lávame y blanco cual nieve seré.",
      "Jesús, te suplico, postrado a tus pies,\nTu propia, perfecta justicia me des.\nTu sangre expiatoria, la veo por fe.\n¡Oh!, lávame y blanco cual nieve seré.",
      "Ve cómo paciente te espero aquí.\nUn corazón nuevo pon dentro de mí.\nJamás diste \"No\" al que a tu amparo fue.\nPues lávame y blanco cual nieve seré."
    ],
    coro: "Que sólo así ser limpio podré.\n¡Oh, lávame tú, y cual nieve seré!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_270.mp3"
    }
  },
  {
    id: 271,
    numero: 271,
    categoria: "A",
    copyright: false,
    titulo: "Oh Cristo, te Adoro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Cristo, te adoro, te acepto por fe\npor ti los caminos del mal ya dejé;\nde gracia salvaste mi alma, Señor;\npor esto de hinojos te rindo mi amor.",
      "Me viste perdido y en condenación,\ny desde el Calvario me diste perdón\nllevaste por mí las espinas, Señor;\npor esto de hinojos te rindo mi amor.",
      "En todo momento, Jesús, te amaré;\ny mientras yo viva de ti cantaré.\nEn valle de muerte serás mi Pastor;\npor esto de hinojos te rindo mi amor.",
      "Después, en mansiones de luz celestial\nde gozo inefable, de gloria eternal,\ndarásme Corona brillante, Señor;\npor esto de hinojos te rindo mi amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_271.mp3"
    }
  },
  {
    id: 272,
    numero: 272,
    categoria: "A",
    copyright: false,
    titulo: "Jesús, yo he Prometido",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús, yo he prometido\nservirte con amor;\nconcédeme tu gracia,\nmi amigo y Salvador.\nNo temeré la lucha\nsi tú a mi lado estás,\nni perderé el camino\nsi tú alumbrando vas.",
      "El mundo está acechando\ny abunda en tentación,\nsutil es el engaño\ny loca la pasión;\nacércate, Maestro,\nrevela tu piedad\ny escude, fiel, mi alma\nde toda iniquidad.",
      "Si ves mi mente errando\nDel necio mal en pos,\nConcédeme que escuche,\nSeñor, tu clara voz.\nAliéntame en la lucha,\nMi espíritu sostén,\nimpúlsame en el bien.",
      "Jesús, tú has prometido\na todo aquel que va\nsiguiendo tus pisadas,\nque al cielo llegará.\nSostenme en el camino,\nY al fin, con dulce amor,\ntrasládame a tu gloria,\nmi amigo y Salvador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_272.mp3"
    }
  },
  {
    id: 273,
    numero: 273,
    categoria: "A",
    copyright: false,
    titulo: "Tú Dejaste tu Trono",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tú dejaste tu trono y corona por mí\nal venir a Belén a nacer;\nmas a ti no fue dado el entrar en mesón,\ny en pesebre te hicieron yacer.",
      "En el cielo las huestes gloriosas te dan\nalabanza y seráfico honor,\nmas humilde viniste a la tierra a sufrir\npor salvar al más vil pecador.",
      "Tú viniste, Señor, con tu gran bendición,\npara dar libertad y salud;\nmas con saña furiosa te hicieron morir",
      "Alabanzas sublimes los cielos darán\ncuando vengas glorioso de allí,\ny tu voz entre nubes dirá: \"Ven a mí,\nque a mi lado hay lugar para ti\"."
    ],
    coro: "Ven a mi corazón, oh Cristo,\npues en él hay lugar para tí.\nVen a mi corazón, oh Cristo, ven,\npues en él hay lugar para tí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_273.mp3"
    }
  },
  {
    id: 274,
    numero: 274,
    categoria: "A",
    copyright: false,
    titulo: "De Esclavitud",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De esclavitud, de noche y pesar,\nvengo, Jesús, vengo, Jesús;\ntu libertad, tu luz a gozar,\nvengo, Jesús, a ti.\nDe mi pobreza a tu plenitud,\nde mis dolores a tu salud,\nde mis pecados a tu virtud,\nvengo, Jesús, a ti.",
      "De mi vergüenza y falta de luz,\nvengo, Jesús, vengo, Jesús;\na tu justicia, al pie de la cruz,\nvengo, Jesús, a ti.\nDe mi tristeza a consolación,\nde la tormenta a tu bendición,\nde la miseria a grata canción,\nvengo, Jesús, a ti.",
      "De mi soberbio y vano vivir,\nvengo, Jesús, vengo, Jesús;\nsiempre tu santa ley a cumplir,\nvengo, Jesús, a ti.\nPorque me quitas todo temor,\nporque me das tu gozo,Señor,\nvengo, Jesús, a ti.",
      "De la espantosa muerte al huir,\nvengo, Jesús, vengo, Jesús;\na la alegría y luz del vivir,\nvengo, Jesús, a ti.\nTú de la ruina me llevarás\na tu redil, tu abrigo de paz;\nsiempre a mirar tu gloria y tu faz,\nvengo, Jesús, a ti."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_274.mp3"
    }
  },
  {
    id: 275,
    numero: 275,
    categoria: "A",
    copyright: false,
    titulo: "Junto a la Cruz de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Junto a la cruz de Cristo\nanhelo siempre estar,\npues mi alma albergue fuerte y fiel\nallí puede encontrar.\nEn medio del desierto aquí,\nAllí yo encuentro hogar\nDo del calor y del trajín\nyo puedo descansar.",
      "Bendita cruz de Cristo,\na veces veo en ti\nla misma forma en fiel visión\ndel que sufrió por mí;\nhoy mi contrito corazón\nconfiesa la verdad\nde tu asombrosa redención\ny de mi indignidad.",
      "Oh, Cristo, en ti he hallado\ncompleta y dulce paz;\nno busco bendición mayor\nque la de ver tu faz;\nsin atractivo el mundo está,\nya que ando en tu luz;\nmi gloria es ya la cruz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_275.mp3"
    }
  },
  {
    id: 276,
    numero: 276,
    categoria: "A",
    copyright: false,
    titulo: "Mi Amor y Vida doy a Ti",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi amor y vida doy a ti,\nJesús, pues en la cruz por mí\nvertiste sangre carmesí,\nmi Dios, mi Salvador.",
      "Que tú me salvas, bien lo sé;\nhe puesto en ti mi humilde fe;\nfeliz contigo viviré,\nmi Dios, mi Salvador.",
      "Tú que moriste en la cruz,\nconcédeme, Señor Jesús,\nque ande en tu brillante luz,"
    ],
    coro: "Mi amor y vida doy a ti,\npues fuiste a la cruz por mí;\nmi ser entero, doylo a ti,\nmi Dios, mí Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_276.mp3"
    }
  },
  {
    id: 277,
    numero: 277,
    categoria: "A",
    copyright: false,
    titulo: "Salvador, a Ti me Rindo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Salvador, a ti me rindo,\nobedezco sólo a ti.\nMi guiador, mí fortaleza,\ntodo encuentro, oh Cristo, en ti.",
      "Te confiesa su delito\nmí contrito corazón.\nOye, Cristo, mi plegaria;\nquiero en ti tener perdón.",
      "A tus pies, Señor, entrego\nbienes, goces y placer.\nQue tu Espíritu me llene,",
      "¡Oh, qué gozo encuentro en Cristo!\n¡Cuánta paz a mi alma da!\nA su causa me consagro,\ny su amor mi amor será."
    ],
    coro: "Yo me rindo a ti,\nyo me rindo a ti;\nmi flaqueza, mis pecados,\ntodo rindo a ti.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_277.mp3"
    }
  },
  {
    id: 278,
    numero: 278,
    categoria: "A",
    copyright: false,
    titulo: "Al Contemplarte, mi Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al contemplarte, mi Salvador,\ny al meditar en tu gran amor,\nveo en mi vida mucho pecar.\nTómala, Cristo, quiero triunfar.",
      "Hondas heridas de transgresión\nmanchan mi vida sin tu perdón.\nCúbreme, Cristo, mora en mí,\nvive tu vida, vívela en mi.",
      "Dame la dicha de tu perdón,\ndame tu manto de salvación;\nCristo, lo acepto, dejo el pecar,",
      "Reconciliado por tu morir\njustificado por tu vivir,\nsantificado al obedecer,\nglorificado al verte volver."
    ],
    coro: "Cubre mi vida, Cristo Jesús.\nBlanca cual nieve la hace tu luz.\nTuya es mi vida, soy pecador,\npero en tu nombre soy vencedor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_278.mp3"
    }
  },
  {
    id: 279,
    numero: 279,
    categoria: "A",
    copyright: false,
    titulo: "No yo, sino Él",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No yo, sino él, reciba amor y honra;\nno yo, sino él, en mí ha de reinar;\nno yo, sino él, en todo cuanto haga;\nno yo, sino él, en todo mi pensar.",
      "No yo, sino él, a confortar mis penas;\nno yo, sino él, mis llantos a enjugar;\nno yo, sino él, a aligerar mis cargas,\nno yo, sino él, mi duda a disipar.",
      "Jesús, no más diré palabra ociosa;\nJesús, no más, quisiera yo pecar;\nJesús, no más, me venza el orgullo;\nJesús, no más, inspire el \"yo\" mi hablar.",
      "No yo, sino él, lo que me falta suple;\nno yo, sino él, da fuerza y sanidad;\nJesús a ti, mi espíritu, alma y cuerpo,\nlo rindo hoy por la eternidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_279.mp3"
    }
  },
  {
    id: 280,
    numero: 280,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Jesús!, mi Cruz Levanto",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh Jesús!, mi cruz levanto\ny en tus pasos quiero andar;\nabandono el falso encanto\npara tu merced gozar.\nDejo vanas ambiciones\ny la dicha mundanal;\ngozaré tus bendiciones\nmientras luche contra el mal.",
      "Que me deje el mundo entero\ncomo a Cristo abandonó;\ntodo aquí es pasajero;\nen Jesús confío yo.\nNo vendrá el asolamiento,\npues le sirvo desde hoy;\nno tendré contentamiento\nsi alejado de él estoy.",
      "Alma mía, mira a Cristo\nCon los ojos de la fe;\nél la gloria te ha provisto;\nalma mía, ¡firme se!\nPronto acabara mi senda;\nYa reposará mí pie;\nCon Jesús yo viviré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_280.mp3"
    }
  },
  {
    id: 281,
    numero: 281,
    categoria: "A",
    copyright: false,
    titulo: "Fuente de la Vida Eterna",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Fuente de la vida eterna\ny de toda bendición,\nensalzar tu gracia tierna\ndebe todo corazón.\nTu piedad inagotable\nse deleita en perdonar;\nsólo tú eres adorable;\ngloria a ti debernos dar.",
      "De los cánticos celestes\nte quisiéramos cantar,\nentonados por las huestes\nque viniste a rescatar.\nDe los cielos descendiste\nporque nos tuviste amor;\ntierno te compadeciste\ny nos diste tu favor.",
      "Toma nuestros corazones,\nllénalos de tu verdad,\nde tu Espíritu los dones,\ny de toda santidad.\nGuíanos en la obediencia,\nhumildad, amor y fe;\nSalvador, propicio sé."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_281.mp3"
    }
  },
  {
    id: 282,
    numero: 282,
    categoria: "A",
    copyright: false,
    titulo: "Entra en este Corazón (With Thy Spirit Fill Me)",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Entra en este corazón,\nhaz en mí tu habitación,\nsea yo tu posesión,\nmora en mí, oh Cristo.",
      "Pon tu Espíritu en mí,\nhazme muy leal a ti.\nQuiero serte fiel aquí,\nmora en mí, oh Cristo.",
      "Hoy me entrego a ti,\nSeñor, para ser tu ayudador."
    ],
    coro: "Mora en mi, oh Cristo,\nmora a mí, oh Cristo.\nEntra en este corazón,\nmora en mí, oh Cristo.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_282.mp3"
    }
  },
  {
    id: 283,
    numero: 283,
    categoria: "A",
    copyright: false,
    titulo: "Moro yo en las Alturas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Moro yo en las alturas,\ndonde encuentro gozo y paz;\nen la tierra de bellezas,\ndonde tú vivir podrás.\nEs la tierra de hermosura,\ndo derrama toda flor\nsus riquísimos olores\nen el alma de dolor.",
      "Puedo ver de las alturas\ncómo anduve en el error,\nextraviado en las tinieblas\ny las sombras del terror.\nDudas, votos quebrantados\nmarcan mi sendero allí,\nmas Jesús me ha conducido\nhasta do me encuentro aquí.",
      "Bebo de la fuente viva;\nsus virtudes siento ya;\njunto al río de la vida,\nsatisfecha mi alma está.\nNo apetezco los placeres\nde este mundo en donde estoy,\ny en camino al cielo voy."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_283.mp3"
    }
  },
  {
    id: 284,
    numero: 284,
    categoria: "A",
    copyright: false,
    titulo: "Rey de mi Vida",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Rey de mi vida tú eres hoy;\nen ti me gloriaré;\nyo por tu cruz salvado soy:\nno te olvidaré.",
      "Mas vi la luz amanecer\nde la eternidad;\nte vi, Señor, aparecer\ncon inmortalidad.",
      "Rey de mi vida, Rey de luz,\nen ti me gloriaré;\npor mí moriste en la cruz:"
    ],
    coro: "Después de tu Getsemani,\nsubiste a la cruz más cruel;\ntodo sufrió tu amor por mi:\nyo quiero serte fiel.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_284.mp3"
    }
  },
  {
    id: 285,
    numero: 285,
    categoria: "A",
    copyright: false,
    titulo: "Perdido, fui a mi Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Perdido, fui a mi Jesús.\nEl vio mi condición;\nen mi alma derramó su luz;\nsu amor me dio perdón.",
      "En cruz cruel mi Salvador\nsu sangre derramó\npor este pobre pecador\na quien así salvó.",
      "Venció la muerte, ¡qué poder!,\nal trono, allá, a interceder\npor tales cual soy yo.",
      "Aunque él se fue, conmigo está\nEl fiel Consolador\nel guía que me llevará\nal reino del Señor."
    ],
    coro: "Fue primero en la cruz\ndonde yo vi la luz,\ny mi carga de pecado dejé;\nfue allí por fe do vi a Jesús,\ny siempre con él feliz seré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_285.mp3"
    }
  },
  {
    id: 286,
    numero: 286,
    categoria: "A",
    copyright: false,
    titulo: "Andando en la Luz de Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Andando en la luz de Dios\nencuentro plena paz;\nvoy adelante sin temor\ndejando el mundo atrás.",
      "Vagaba en oscuridad\nsin ver al buen Jesús,\nmas por su amor y su verdad\nme iluminó la luz.",
      "Las nubes y la tempestad\nno encubren a Jesús,\ny en medio de la oscuridad",
      "Verélo pronto tal cual es:\nraudal de pura luz;\ny eternamente gozaré\na causa de su cruz."
    ],
    coro: "Gozo y luz hay en mi alma hoy,\ngozo y luz hay, ya que salvo soy;\ndesde que a Jesús vi, y a su lado fui,\nhe sentido el gozo de su amor en mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_286.mp3"
    }
  },
  {
    id: 287,
    numero: 287,
    categoria: "A",
    copyright: false,
    titulo: "Perdido fui al Buen Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Perdido fui al buen Jesús.\nEl aceptóme con amor;\nperdón hallé junto a su cruz;\nhallé salud en su dolor.\nJesús me dijo: \"Ven a mí,\nPues yo la vida di por ti\".",
      "Anduve en densa oscuridad;\nme rebelé, en mal viví;\nmas el Señor con gran bondad,\nhallóme y me habló así:\n\"Yo soy la luz, tus pies guiaré;\ntu senda oscura alumbraré\".",
      "\"Sí quieres vida eternal,\nla que en abundancia doy,\nyo soy el pan, pan celestial;\nven, come, pues tu vida soy\".\nAcudo a ti, Señor Jesús,\ndame perdón, paz, vida y luz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_287.mp3"
    }
  },
  {
    id: 288,
    numero: 288,
    categoria: "A",
    copyright: false,
    titulo: "Los Tesoros del Mundo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Los tesoros del mundo\nno deseo juntar.\nQuiero entrar en tu aprisco,\nen tu célico hogar.\nEn el libro del reino\nque en los cielos está,\ndime, Cristo benigno,\n¿se halla mi nombre allá?",
      "Mis pecados son muchos\ncual la arena del mar;\nmas, Jesús, en tu sangre,\nme los puedes lavar.\nHe aquí tus promesas,\nlas que escritas están:\n\"Aunque rojos cual\ngrana como nieve serán\".",
      "En la bella ciudad con\nsus mansiones de luz,\ndo los santificados\nandarán con Jesús,\ndonde el mal no entra nunca,\ndonde el bien reinará,\ndime, Cristo benigno\n¿se halla mi nombre allá?"
    ],
    coro: "¿Se halla mi nombre allá?\n¿Se halla mi nombre allá?\nEn el libro del reino\n¿se halla mi nombre allá?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_288.mp3"
    }
  },
  {
    id: 289,
    numero: 289,
    categoria: "A",
    copyright: false,
    titulo: "Por Fe en Cristo el Redentor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por fe en Cristo el Redentor\nse salva hoy el pecador;\naunque sin merecer perdón,\nrecibe plena salvación.",
      "La vida antigua ya pasó\ny todo en nuevo se tornó,\ny aunque nada tenga aquí,\nherencia eterna tiene allí.",
      "Aquí cual peregrino es;\nmansión allá tendrá después,\narriba en gloria con Jesús,\nquien redimióle en la cruz."
    ],
    coro: "¡Oh gracia excelsa del amor,\nque Dios perdone al pecador!\nSi quiere presto confesar sus culpas,\ny en Jesús confiar,\nencontrará la salvación,\npues él obró la redención.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_289.mp3"
    }
  },
  {
    id: 290,
    numero: 290,
    categoria: "A",
    copyright: false,
    titulo: "¿Quieres ser Salvo de toda Maldad?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Quieres ser salvo de toda maldad?\nTan solo hay poder en mi Jesús.\n¿Quieres vivir y gozar santidad?\nTan solo hay poder en Jesús.",
      "¿Quieres libre de orgullo y pasión?\nTan solo hay poder en mi Jesús\n¿Quieres vencer toda cruel tentación?\nTan solo ser hay poder en Jesús.",
      "¿Quieres servir a tu Rey y Señor?\nTan solo hay poder en mi Jesús"
    ],
    coro: "Hay poder, si, sin igual poder\nEn Jesús quién murió;\nHay poder, si, sin igual poder,\nEn la sangre que El vertió.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_290.mp3"
    }
  },
  {
    id: 291,
    numero: 291,
    categoria: "A",
    copyright: false,
    titulo: "Todos los que tengan Sed",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Toda lo que tengan sed\nbeberán, beberán.\nVengan cuantos pobres hay;\nComerán, comerán.\nNo malgasten el haber;\ncompren verdadero pan.\nSi a Jesús acuden hoy,\ngozarán, gozarán.",
      "Si le prestan atención,\nles dará, les dará,\nparte en su pactado bien,\neternal, eternal.\nCon el místico David,\nRey, Maestro, Capitán\nde las huestes que al Edén\nllevará, llevará.",
      "Como baja bienhechor,\nsin volver, sin volver,\nriego que las nubes dan,\nha de ser, ha de ser\nla Palabra del Señor,\nproductivo, pleno bien;\npor la fe, por la fe."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_291.mp3"
    }
  },
  {
    id: 292,
    numero: 292,
    categoria: "A",
    copyright: false,
    titulo: "Al Calvario, solo, Jesús Ascendió",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al Calvario, solo, Jesús ascendió\nllevando pesada cruz,\ny al morir en ella al mortal dejó\nun fanal de gloriosa luz.",
      "En la cruz tan sólo el alma hallará\nla fuente de inspiración;\nnada grande y digno en el mundo habrá\nque en la cruz no halle aprobación.",
      "Yo por ella voy a mí hogar celestial,\nel rumbo marcando está;"
    ],
    coro: "La cruz sólo me guiará,\nla cruz sólo me guiará;\na mi hogar de paz y eterno amor,\nla cruz sólo me guiará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_292.mp3"
    }
  },
  {
    id: 293,
    numero: 293,
    categoria: "A",
    copyright: false,
    titulo: "¿Qué me Puede dar Perdón?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Qué me puede dar perdón?\nSólo de Jesús la sangre.\n¿Y un nuevo corazón?\nSólo de Jesús la sangre.",
      "Fue rescate eficaz\nsólo de Jesús la sangre.\nTrajo santidad y paz\nsólo de Jesús la sangre.",
      "Veo para mi salud\nsólo de Jesús la sangre.\nTiene de sanar virtud,",
      "Cantaré junto a sus píes,\nsólo de Jesús la sangre.\nEl Cordero digno es.\nSólo de Jesús la sangre."
    ],
    coro: "Precioso es el raudal\nque limpia todo mal.\nNo hay otro manantial\nsino de Jesús la sangre.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_293.mp3"
    }
  },
  {
    id: 294,
    numero: 294,
    categoria: "A",
    copyright: false,
    titulo: "Comprado con Sangre por Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Comprado con sangre por Cristo,\ngozoso al cielo yo voy;\nlibrado por gracia infinita,\ncual hijo en su casa estoy.",
      "Soy libre de pena y culpa,\nsu gozo él me hace sentir,\nél llena de gracia mi alma,\ncon él es tan dulce vivir.",
      "En Cristo Jesús yo medito,\nen todo momento y lugar;",
      "Yo sé que me espera corona,\nla cual a los fieles dará,\nme entrego con fe al Maestro,\nsabiendo que me guardará."
    ],
    coro: "Por él, por él\ncomprado con sangre yo soy;\ncon él, con él\ncon Cristo al cielo yo voy.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_294.mp3"
    }
  },
  {
    id: 295,
    numero: 295,
    categoria: "A",
    copyright: false,
    titulo: "En Jesús por Fe Confío",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En Jesús por fe confío,\ndel pecado me salvó;\ny su sangre generosa\nen la cruz por mí vertió.\nDe los hombres los pecados\nél cargó con sumisión,\nconsumando por los siglos\nnuestra eterna redención,\nconsumando por los siglos\nnuestra eterna redención.",
      "Salvación ofrece al hombre\nque abandone todo error,\ny en la fe de Jesucristo\nse encamine con fervor.\nEl es padre cariñoso,\nes amigo siempre fiel,\ny conforta nuestras penas\nsi llegámonos a él,\ny conforta nuestras penas\nsi llegámonos a él.",
      "Vida eterna nos ofrece\ny gratuita salvación,\nimplorando su perdón.\nNos absuelve y nos sostiene\ncuando asedia tentación;\nda consuelo al afligido\ny abrumado corazón,\nda consuelo al afligido\ny abrumado corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_295.mp3"
    }
  },
  {
    id: 296,
    numero: 296,
    categoria: "A",
    copyright: false,
    titulo: "Una es, Señor, mi Petición",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Una es, Señor, mi petición,\npues en mi senda infiel erré:\nsea por agua o en crisol,\n¡oh límpiame!, ¡oh límpiame!",
      "Si al alma das más luz, tu don\nagradecido cantaré;\npero de un puro corazón\nmás gozaré, más gozare.",
      "Sólo en el limpio corazón\npodrá tu faz resplandecer\ny ser completa la visión",
      "Quiero mi senda enderezar,\nlibre del mal ser quiero hoy;\nmas para mí vano es luchar,\nindigno soy, indigno soy."
    ],
    coro: "¡Oh límpiame de mi maldad\nen tu crisol, si he menester!\nNo importa el medio, oh Señor,\n¡oh límpiame!, ¡oh límpiame!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_296.mp3"
    }
  },
  {
    id: 297,
    numero: 297,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Jesús, Señor Divino!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh Jesús, Señor divino,\ndame tu perdón y paz;\noye mi ferviente ruego\nen la gloria donde estás!\nEres tú la luz del mundo.\n¡Guíame, oh buen Jesús!\nPor tu amor fiel y profundo\nexpiraste en la cruz;\npor tu amor fiel y profundo\nexpiraste en la cruz.",
      "Dulce paz y gozo eterno\npodré en gloría disfrutar;\npues de Cristo la ternura\nme convida sin cesar.\nA mi patria yo, cansado,\nme dirijo con fervor;\ncon certeza ya salvado\nsoy por ti, ¡oh Salvador!,\ncon certeza ya salvado\nsoy por ti, ¡oh Salvador!",
      "Por tu muerte expiatoria\nme has abierto, ¡oh Redentor!,\nal divino resplandor.\nGloria eterna yo presiento\nal estar con mi Jesús;\nde dolor y pena exento\nviviré en su santa luz,\nde dolor y pena exento\nviviré en su santa luz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_297.mp3"
    }
  },
  {
    id: 298,
    numero: 298,
    categoria: "A",
    copyright: false,
    titulo: "Hay Vida en Mirar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay vida en mirar a la santa cruz.\nDice Jesús: \"Miradme a mi\"\nNada el mundo y sus glorias son;\ntesoros brillantes se ven allí.",
      "Y cuando miré a mi Salvador,\ndulces sonrisas él me dio;\nhoy del maligno soy vencedor,\nmirando a la cruz do Jesús murió.",
      "Mirando a la cruz, siempre confiaré\nen sus promesas y poder;\nnunca vencido del mal seré;"
    ],
    coro: "¡Oh mirad, pues hallaréis\nVida eterna allá en la cruz!\nSalvación recibiréis\nen el Redentor, Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_298.mp3"
    }
  },
  {
    id: 299,
    numero: 299,
    categoria: "A",
    copyright: false,
    titulo: "Lejos de mi Padre Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Lejos de mi Padre Dios,\npor Jesús hallado,\npor su gracia y por su amor\nsólo fui salvado.",
      "En Jesús, mi Salvador,\npongo mi confianza;\ntoda mi necesidad\nsuple en abundancia.",
      "Cerca de mí buen Pastor\nvivo cada día;\ntoda gracia en su Señor",
      "Guárdame, Señor Jesús,\npara que no caiga;\ncual sarmiento de la vid,\nvida de ti traiga."
    ],
    coro: "En Jesús, mí Señor,\nes mi gloria eterna;\nél me amó y me salvó\nen su gracia tierna.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_299.mp3"
    }
  },
  {
    id: 300,
    numero: 300,
    categoria: "A",
    copyright: false,
    titulo: "Ni Fama, ni Ciencia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ni fama, ni ciencia, ni honor o riqueza,\ndel negro pecado me pueden librar.\nLa sangre de Cristo es mi sola esperanza,\nTan solo su muerte me puede salvar.",
      "Ni fama, ni ciencia, ni honor o riqueza\npodrían brindarme la paz del Señor.\nLa sangre de Cristo es mi sola esperanza,\nTan solo su muerte me quita el temor.",
      "Ni fama, ni ciencia, ni honor o riqueza\nmi pena profunda me pueden quitar.\nLa sangre de Cristo es mi sola esperanza",
      "Ni fama, ni ciencia, ni honor o riqueza\nmi entrada a los cielos podrían comprar.\nLa sangre de Cristo es mi sola esperanza,\nCon ella podré mi rescate pagar."
    ],
    coro: "Tan solo pudo redimirme\nEl amante Salvador;\nfue con su sangre tan preciosa\nComo Cristo me salvó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_300.mp3"
    }
  },
  {
    id: 301,
    numero: 301,
    categoria: "A",
    copyright: false,
    titulo: "Al Cielo Voy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo te veré a ti, Señor,\nyo te veré, mí Salvador;\nen dulce luz y esplendor\nyo te veré, mi Salvador.",
      "Tu pura sangre carmesí\nla mancha vil borré de mí;\nventura gozaré allí;\nyo te veré, mi Salvador.",
      "Feliz aquel que en ti confié,\npor Salvador te aceptó;\nen ti también espero yo;\nyo te veré, mí Salvador."
    ],
    coro: "Al cielo voy, al cielo voy;\nyo confío en Jesús;\nél me salvó, él me salvó,\npor mí ha muerto en la cruz.",
    posicion_coro: 0,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_301.mp3"
    }
  },
  {
    id: 302,
    numero: 302,
    categoria: "A",
    copyright: false,
    titulo: "¿Quién es Aquel que Viene?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Quién es aquel que viene desde Idumea acá?\nHerido y con ropaje tan ensangrentado está.\n\"Yo, el que tu pecado vine a perdonar;\nyo, el que poderoso soy para salvar.",
      "¿Por qué tu ropa se halla teñida en carmesí,\ncual los que pisan el lagar?, ¿por qué sangrienta así?\n\"Sólo el lagar pisé, por ti luché;\ny aunque herido, vencedor: te salvaré\".",
      "¡Oh! Salvador amante, llevaste mi baldón;\nmas ¿como de la muerte puedes darme salvación?\n\"Yo la muerte conquisté, la destroné;\nyo que poderoso soy, te salvaré\"."
    ],
    coro: "Te salvaré, te salvaré, te salvaré;\nyo, que poderoso soy, te salvaré\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_302.mp3"
    }
  },
  {
    id: 303,
    numero: 303,
    categoria: "A",
    copyright: false,
    titulo: "Cristo es mi Amante Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo es mi amante Salvador,\nmi bien, mi paz, mi luz;\npues demostró su grande amor\nmuriendo allá en la cruz.\nCuando estoy triste encuentro en él\nconsolador y amigo fiel;\nconsolador, amigo fiel\nes Jesús.",
      "Cristo es mi amante Salvador,\nsu sangre me compró;\npor sus heridas y dolor\nperfecta paz me dio.\nDicha inmortal con él tendré,\ny para siempre reinaré\ndicha inmortal allí tendré\ncon Jesús.",
      "Cristo es mi amante Salvador,\nmi eterno Redentor.\n¡Jamás podré satisfacer\nla deuda de su amor!\nLe seguiré, pues en la luz,\nno temeré llevar su cruz,\nde Jesús.",
      "Cristo es mi amante Salvador.\nPor él salvado soy;\nla Roca es de la eternidad\nen quien seguro estoy.\nGloria inmortal con él tendré\ny para siempre reinaré,\ngloria inmortal allí tendré\ncon Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_303.mp3"
    }
  },
  {
    id: 304,
    numero: 304,
    categoria: "A",
    copyright: false,
    titulo: "Mi Redentor, el Rey de Gloria",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi Redentor, el Rey de gloria,\nQue vive yo seguro estoy;\nY da Coronas de victoria;\nA recibir la mía voy.",
      "En mi Señor Jesús confío,\nsu sangre clama a mi favor;\nes dueño él de mi albedrío,\nestar con él es lo mejor.",
      "De tanto amor me maravillo,\ny no me canso de cantar;\nme libertó de mí peligro,\nsufriendo todo en mi lugar.",
      "Consuélome en su larga ausencia\npensando: Pronto volverá;\nentonces su gloriosa herencia\na cada fiel Jesús dará."
    ],
    coro: "Que permanezca, no pidáis,\nentre el bullicio y el vaivén;\nel mundo hoy dejar quisiera,\naun cuando se cual Edén.\nEl día, nada más, aguardo\nen que el Rey me diga: \"Hijo, ven\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_304.mp3"
    }
  },
  {
    id: 305,
    numero: 305,
    categoria: "A",
    copyright: false,
    titulo: "Cuando mi Lucha Toque a su Final",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando mi lucha toque a su final\ny me halle salvo en la playa eternal,\njunto al que adoro, mí Rey celestial,\neterna gloria será para mí.",
      "Cuando la gracia infinita me dé\nbella morada en la casa del Rey,\nyo, transportado, su cara veré,\ny eterna gloria será para mí.",
      "Encontraré a mis amados allá;\ngozo cual río en redor correrá;"
    ],
    coro: "Gloria sin fin eso será,\ngloria sin fin eso será.\nCuando por gracia su faz vea allí,\neterna gloria será para mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_305.mp3"
    }
  },
  {
    id: 306,
    numero: 306,
    categoria: "A",
    copyright: false,
    titulo: "Entonad un Himno",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Entonad un himno que alegre el corazón\nvamos pronto a nuestro eterno hogar\npor que pasará ésta noche de aflicción,\nvamos pronto a nuestro eterno hogar.",
      "Cuanto pida Dios el fiel siervo cumplirá,\nvamos pronto a nuestro hogar;\ny su Espíritu nuevas fuerzas nos dará,\nvamos pronto a nuestro eterno hogar.",
      "Id a encaminar a los extraviados pies,\nvamos pronto a nuestro eterno hogar;\nel amor de Cristo enseñad con sencillez,",
      "Hay perfecta paz y reposo más allá,\nvamos pronto a nuestro eterno hogar;\nen la tierra nueva ya lágrimas no habrá,\nvamos pronto a nuestro eterno hogar."
    ],
    coro: "Vamos pronto, sí, vamos pronto, sí,\na cruzar el fiero mar;\ntras la tempestad nos veremos más allá;\nvamos pronto a nuestro eterno hogar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_306.mp3"
    }
  },
  {
    id: 307,
    numero: 307,
    categoria: "A",
    copyright: false,
    titulo: "Del Padre los Bienes",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Del Padre los bienes no tienen igual;\nde piedras preciosas enorme caudal;\ndiamantes y oro, fortuna sin par,\nriquezas que nadie podrá computar.",
      "El Hijo divino, del mundo sostén,\nsufrió en la tierra, del hombre el desdén;\nextraña le era la tumba crüel;\nfue pobre y humilde, fue manso y fiel.",
      "Y yo tan indigno, tan vil pecador,\n¿loaré al que sufriera por mí tal dolor?\n¡Qué herencia la mía!: la nueva Sion,\nla vida eternal y una alegre canción."
    ],
    coro: "Soy un hijo del Rey, soy hijo del Rey;\npor Cristo el Maestro soy un hijo del Rey.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_307.mp3"
    }
  },
  {
    id: 308,
    numero: 308,
    categoria: "A",
    copyright: false,
    titulo: "En el Seguro Puerto",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el seguro puerto tu barco puede anclar;\nallí las tempestades no puédenle azotar.\n¡Qué grato al navegante refugio en él hallar,\ny al fin del rudo viaje, salvo estar!",
      "En el seguro puerto hay sitio para ti;\nde Dios el barco espera; llevarte quiere allí;\nson fieles sus promesas al pobre pecador;\nfeliz serás si fías en su amor.",
      "Amigos bien amados a nuestro lado irán;\nsus voces al oído ¡cuán gratas sonarán!\nParad, pues, tempestades, cesad, tormentas, ya;\nla música divina oigo allá.",
      "Olajes cadenciosos, llevadme a aquel hogar;\ndesde esta tierra triste lo veo allá brillar;\nmi espíritu cansado allí reposará,\ny allí mi frágil barco anclará."
    ],
    coro: "Hay sitio, hay sitio para ti,\nhay sitio, si,\nallá en el puerto amado de salud.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_308.mp3"
    }
  },
  {
    id: 309,
    numero: 309,
    categoria: "A",
    copyright: false,
    titulo: "Si al Vislumbrar en el Mundo Dichoso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si al vislumbrar en el mundo dichoso\nlas mil delicias que Cristo dará,\nel fiel cristiano se llena de gozo,\nestar allá, ¿cuánta gloria será?",
      "Si al meditaren la gloria, en el gozo\ny en la grandeza que el justo tendrá,\nse colma el corazón de alborozo,\nestar allá, ¿cuánta gloria será?",
      "Es la promesa que llanto ni duelo\nni aun la sombra de males habrá\nen la morada del gran Rey del cielo.\nMas ¿qué será encontrarse allá?"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_309.mp3"
    }
  },
  {
    id: 310,
    numero: 310,
    categoria: "A",
    copyright: false,
    titulo: "Cuán Grato es con Amigos Vernos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuán grato es con amigos\nvemos en tiempo tan veloz;\nmas siempre llega el día triste\nen que se dice \"adiós\".",
      "Cuán dulce es el consuelo dado\npor ellos al partir:\nque cuando venga Cristo en gloria,\nnos hemos de reunir.",
      "Jamás habrá la despedida\ntan dolorosa aquí,"
    ],
    coro: "Jamás se dice, \"adiós\" allá,\njamás se dice \"adiós\";\nen el país de gozo y ,paz\njamás se dice \"adiós\"",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_310.mp3"
    }
  },
  {
    id: 311,
    numero: 311,
    categoria: "A",
    copyright: false,
    titulo: "Solemne me es Saber",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Solemne me es saber\nY meditar que hoy\nmás cerca de mí hogar estoy,\nmás cerca, sí, que ayer.",
      "Del cristalino mar,\ndel trono celestial,\nde aquella casa paternal\ndo siempre he de morar,",
      "Del día de irme allá,\ndejando aquí mi cruz;\ndel Rey que en refulgente luz"
    ],
    coro: "Más cerca estoy,\nmás cerca estoy.\nDe mi celeste hogar estoy\nmás cerca hoy que ayer.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_311.mp3"
    }
  },
  {
    id: 312,
    numero: 312,
    categoria: "A",
    copyright: false,
    titulo: "¡A la Luz!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡A la luz, a la luz,\nal encuentro de Jesús!\nPor él arde mi deseo.\n¡Oh qué gozo cuando veo\nlos fulgores de la cruz!",
      "Pronto haz, pronto haz,\nsanto Príncipe de paz,\nque con todos los salvados,\npor tu sangre rescatados,\nyo contemple allí tu faz.",
      "¡Dulce son, dulce son,\nde los ángeles canción!\n¡Si sus alas yo tuviera,\nVolaría a aquella esfera,\na los montes de Sión!",
      "¡Qué será, qué será,\nen Salem entrado ya,\ndo las calles brillan de oro\ny prorrumpe el santo coro!\n¡Cuánto gozo espero allá!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_312.mp3"
    }
  },
  {
    id: 313,
    numero: 313,
    categoria: "A",
    copyright: false,
    titulo: "Más allá, en la Excelsa Patria",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Más allá, en la excelsa patria\ndel cristiano, hay lugar\ndonde el Salvador ha ido\nmi mansión a preparar.",
      "Una casa me prepara\nque por siempre durará;\nmí tranquilidad perenne\nnadie la perturbará.",
      "Nunca sentiré las penas\nque sufría tanto aquí;\nterminadas mis faenas,\nme aguarda el premio allí.",
      "Herederos de la gloria,\nvuestro triunfo pregonad;\nentraréis por los portales\nen la célica ciudad."
    ],
    coro: "Más allá hay descanso,\nmás allá hay descanso,\nmás allá hay descanso\nlibre del pesar;\ndo florece el bello árbol\nde la vida eterna,\nen los valles celestiales,\nvoy a reposar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_313.mp3"
    }
  },
  {
    id: 314,
    numero: 314,
    categoria: "A",
    copyright: false,
    titulo: "En la Mansión de mi Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la mansión de mi Señor\nno habrá ya más tribulación,\nno habrá pesar, ningún dolor,\nni qué quebrante el corazón.",
      "Resulta triste estar aquí\nmuy lejos de mí Redentor,\nmas morarán con él allí\nlos redimidos por su amor.",
      "Perfecto amor encontraré\nen la mansión do Cristo está;\nperfecta calma allí tendré,",
      "En su presencia gozaré\nsu inmenso amor, su gran bondad;\nfeliz con Cristo reinaré\npor toda la eternidad."
    ],
    coro: "Allá no habrá tribulación,\nningún pesar, ningún dolor;\ny entonaré feliz canción\nde alabanza al Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_314.mp3"
    }
  },
  {
    id: 315,
    numero: 315,
    categoria: "A",
    copyright: false,
    titulo: "Allá sobre Montes",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Allá sobre montes, en feliz país,\nla ciudad divina reposando está.\nNuestros pies, aquí cansados, subirán:\nla mansión eterna divisamos ya.",
      "Los antiguos profetas nos hablaron ya\nde las calles de oro de esa gran ciudad.\nPor la fe hoy la podemos contemplar,\ncon sus muros de oro y jaspe, sin igual.",
      "Hermano, hermana, ¿estarás allá,\nen aquella tierra do pesar no habrá?\nEl mensaje santo hoy acepta fiel,\ny al venir el Salvador te llamará."
    ],
    coro: "¡Vamos al hogar! ¡Vamos al hogar!\n¡Ved, sus torres brillan con gran esplendor!\n¡Ved la gloria como emana del Señor!\nEstaremos juntos por la eternidad\nCon los ángeles, cantando en la Ciudad.\n¡Vamos al hogar!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_315.mp3"
    }
  },
  {
    id: 316,
    numero: 316,
    categoria: "A",
    copyright: false,
    titulo: "Cuánto Anhelo Llegar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuánto anhelo llegar al celeste hogar,\na la margen del río de vida;\nsorpresas sin fin me aguardan allá;\nmas ¡oh, qué será ver a Cristo!",
      "Unos han de morir para no más vivir,\nmas los justos a vida retornan.\n¡Qué gozo será volverlos a ver!,\nmas ¡oh, qué será ver a Cristo!",
      "Cuando vaya a vivir en aquella ciudad,\nno habrá más dolor,\nni muerte jamás.\n¡Oh, sí, qué será ver a Cristo!"
    ],
    coro: "¡Oh, qué será ver a Cristo!\n¡Qué será ver al Señor!\nPrometiónos llevar\nal eterno hogar,\nmas ¡oh, qué será ver a Cristo!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_316.mp3"
    }
  },
  {
    id: 317,
    numero: 317,
    categoria: "A",
    copyright: false,
    titulo: "No está en la Tierra mi Hogar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No está en la tierra mi hogar,\nni encuentro en ella atracción.\nTristeza en mí no ha de morar,\npues voy a la celeste Sión,\npues voy a la celeste Sión.",
      "No está en la tierra mi hogar.\nYo busco un sitio más allá:\nciudad gloriosa que es sin par,\nciudad do Cristo estará,\nciudad do Cristo estará.",
      "¡Oh célíca habitación\ndo el peregrino hallará\nreposo y satisfacción!\nAllí por siempre vivirá,\nallí por siempre vivirá.",
      "Esperaré sin ansiedad,\npues Cristo pronto volverá,\ny a la célica ciudad\na los salvados llevará,\na los salvados llevará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_317.mp3"
    }
  },
  {
    id: 318,
    numero: 318,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Aquí de la Vida",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando aquí de la vida mis afanes cesen ya\ny amanezca bella aurora celestial,\nen las playas eternas mi llegada esperará\nel Señor con bienvenida paternal.",
      "¡Oh!, qué gozo supremo cuando pueda ver su faz\ny en eterna vida estar con mi Señor;\nde su lado ya nunca me podrán quitar jamás\nlos halagos de mi artero tentador.",
      "He de ver a los míos que en la tierra ya perdí\ncuando en brazos de la muerte los dejé;\ny aunque de ellos entonces con dolor me despedí,",
      "Al entrar por las puertas, en la célica ciudad,\nme uniré con los que allá triunfantes van;\ny del himno que alabe de mi Dios la majestad,\nlos acentos por los siglos sonarán."
    ],
    coro: "He de conocerle entonces,\nredimido, a su lado cuando esté;\npor la seña de los clavos\nen sus manos a Jesús conoceré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_318.mp3"
    }
  },
  {
    id: 319,
    numero: 319,
    categoria: "A",
    copyright: false,
    titulo: "Un Día yo he de Faltar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un día yo he de faltar\nde mi lugar en esta grey;\nmas ¡oh, qué gozo al despertar\nen el palacio de mi Rey!",
      "Un día a mí la muerte atroz\nvendrá, mas cuándo, no lo sé;\nsólo esto sé, que con mi Dios\nun sitio yo feliz tendré.",
      "Un día yo, tal como el sol,\nmi ocaso y fin tendré también;\nmas cuando venga el Salvador,",
      "El día fausto aguardo yo,\ny sé que pronto llegará;\nvendrá en su gloria mi Señor\ny a su mansión me llevará."
    ],
    coro: "Y cara a cara le veré,\ny viviré con él allí,\ny para siempre cantaré:\n\"Salvado por su gracia fui\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_319.mp3"
    }
  },
  {
    id: 320,
    numero: 320,
    categoria: "A",
    copyright: false,
    titulo: "Arrolladas las Neblinas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Arrolladas las neblinas,\na la vista el esplendor\nde las sierras y las rías\na la luz y amor del sol;\ndel Señor el arco viendo,\nde promesas la señal,\ncon amigos verdaderos\ngozaremos claridad.",
      "Caminar atribulados\ncontemplando el porvenir,\nes sombrío; duro y largo\nen la soledad sufrir.\nMas la voz: \"Venid, benditos\",\na las penas fin pondrá;\nen la aurora allá reunidos,",
      "Todos, dicha rebosando,\ndel gran solio en derredor,\nentre amantes, entre amados,\ntendrán santa comprensión.\nDo los redimidos cantan\nsu rescate sin cesar,\nuna vez rasgado el cielo\ngozaremos claridad."
    ],
    coro: "Como nos conocerán,\nllegaremos a tener\npleno y recto entendimiento,\npaz, tranquilidad, placer;\njustamente juzgaremos,\nsin las nieblas del ayer.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_320.mp3"
    }
  },
  {
    id: 321,
    numero: 321,
    categoria: "A",
    copyright: false,
    titulo: "Perfecta Paz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Perfecta paz en este mundo vil,\nJesús me dio al quitarme culpas mil.",
      "Perfecta paz aun en el dolor,\npues junto a mí está el Consolador.",
      "Perfecta paz si amados lejos van,\nya que los ángeles conmigo están.",
      "Perfecta paz, es la del Salvador.\nGocemos santa paz con el Señor.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_321.mp3"
    }
  },
  {
    id: 322,
    numero: 322,
    categoria: "A",
    copyright: false,
    titulo: "Con Gozo Canto al Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con gozo canto al Señor\ndesde que salvo soy,\npues es mi Rey, mi Salvador,\ndesde que salvo soy.",
      "Yo amo a Dios y mi ansiedad\ndesde que salvo soy,\nestá en cumplir su voluntad,\ndesde que salvo soy.",
      "Un gozo tengo que es sin par\na Cristo a labo sin cesar\ndesde que salvo soy.",
      "Tengo un hogar al cual iré,\ndesde que salvo soy,\ny allí seguro viviré,\ndesde que salvo soy."
    ],
    coro: "Desde que salvo soy,\ndesde que salve soy\nsólo en él me gloriaré;\ndesde que salvo soy\nen mi Redentor me gloriaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_322.mp3"
    }
  },
  {
    id: 323,
    numero: 323,
    categoria: "A",
    copyright: false,
    titulo: "En Jesucristo, Mártir de Paz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En Jesucristo, mártir de paz\nen horas negras y de tempestad,\nhallan la almas dulce solaz,\ngrato consuelo, felicidad.",
      "En nuestras luchas, en el dolor,\nen tristes horas de gran tentación,\ncalma le infunde, santo vigor,\nnuevos alientos al corazón.",
      "Cuando en la lucha falte la fe\ny esté el alma por desfallecer,\nCristo nos dice: \"siempre os daré"
    ],
    coro: "Gloria cantemos al redentor,\nque por nosotros quiso morir;\ny que la gracia del Salvador\nsiempre diriga nuestro vivir.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_323.mp3"
    }
  },
  {
    id: 324,
    numero: 324,
    categoria: "A",
    copyright: false,
    titulo: "Oh, buen Maestro, Despierta!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, buen Maestro, despierta!\n¡Ve, ruge la tempestad!\nLa gran extensión de los cielos\nse llena de oscuridad.\n¿No ves que aqui perecemos?\n¿Puedes dormir asi\ncuando el mar agitado nos abre\nprofundo sepulcro aqui?",
      "Despavorido, oh, Maestro,\nte busco con ansiedad.\nMi alma angustiada se abate;\nPasa el pecado a torrentes\nsobre mi frágil ser,\ny perezco, perezco Maestro,\n¡oh, quiéreme socorrer!",
      "Vino la calma, Maestro.\nLos vientos no rugen ya.\nY sobre el cristal de las aguas\nel sol resplandecerá.\nCristo, prolonga esta calma;\nno me abandones más;\ncruzaré los abismos contigo\nal puerto de eterna paz."
    ],
    coro: "Los vientos, las ondas oirán tu voz:\n\"Haya paz\"\nCalma las iras del negro mar;\nlas luchas del alma las haces cesar,\ny así la barquilla do va El Señor\nhundirse no puede en el mar traidor.\nDoquier se cumple su voluntad:\n\"Haya paz, haya paz\"\nTu voz resuena en la inmensidad:\n\"Paz, haya paz\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_324.mp3"
    }
  },
  {
    id: 325,
    numero: 325,
    categoria: "A",
    copyright: false,
    titulo: "Llenos de Gozo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Llenos de gozo que Cristo nos da,\nsiempre cantando a Sion vamos ya.\nDice Jesús compasivo: \"Venid,\nllenos de gozo y confianza partid\".\nAunque la marcha penosa será,\npronto veremos la faz de Jehová.\nSi hoy le cedemos con fe nuestro ser,\nnos colmará de infinito placer.",
      "Dentro de poco, guadaña mortal\nha de cortarnos el hilo vital;\nmas la veremos venir sin temor,\nporque confiamos en el Salvador.\nEsplendorosa la aurora será\nque de la muerte el fin marcará,\ncuando resuene la santa canción:\n\"Gozo perfecto en la eterna mansión.\""
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_325.mp3"
    }
  },
  {
    id: 326,
    numero: 326,
    categoria: "A",
    copyright: false,
    titulo: "En Cristo Feliz es mi Alma",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En Cristo feliz es mi alma;\nprecioso es su célico don;\nsu voz me devuelve la calma;\nsu faz me anticipa el perdón.",
      "El vino a mi encuentro primero:\nquería llevarme al redil\ndo reina el afecto sincero,\ndo hay dichas y encantos a mil.",
      "Su amor paternal me circunda;\nsu gracia conforta mi ser;\nsu Espíritu Santo me inunda"
    ],
    coro: "¡Tanto me alegro en él!\n¡Tanto me alegro en él!\nEl gozo y la paz inundan mi ser.\n¡Me alegro tanto en él!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_326.mp3"
    }
  },
  {
    id: 327,
    numero: 327,
    categoria: "A",
    copyright: false,
    titulo: "Salvo en los Tiernos razos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Salvo en los tiernos brazos\nde mi Jesús seré,\ny en su amoroso pecho\nsiempre reposaré.\nEste es sin duda el eco\nde celestial canción,\nque de inefable gozo\nllena mi corazón.",
      "En sus amantes brazos\nhallo solicitud;\nlíbrame de tristeza,\nlíbrame de inquietud.\nY si vinieran pruebas,\nfáciles pasarán;\nlágrimas si vertiere,\npronto se enjugarán.",
      "Y cruzaré la noche\nlóbrega sin temor,\nhasta que venga el día\nde perennal fulgor.\n¡Cuán placentero entonces\ncon él será morar,\ny en la mansión de gloria\nsiempre con él reinar!"
    ],
    coro: "Salvo en los tiernos brazos\nde mi Jesús seré,\ny en su amoroso pecho\nsiempre reposaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_327.mp3"
    }
  },
  {
    id: 328,
    numero: 328,
    categoria: "A",
    copyright: false,
    titulo: "Percibe mi Alma un Son",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Percibe mi alma un son\nde dulce y alegre canción\nque llevo en mi corazón:\n¡oh paz, el don de mi Dios!",
      "La paz que en la cruz Cristo dio,\ndo todas mis deudas pagó,\nen mí fiel cimiento echó.\n¡Oh paz, el don de mí Dios!",
      "Por rey al Señor coroné,\ny mi alma de paz se llenó,\ny halló el don más rico mi fe:",
      "En paz con Jesús moraré,\ny cuando a su lado esté\nsu paz inefable tendré,\n¡la paz, el don de mi Dios!"
    ],
    coro: "¡Paz, paz, dulce paz,\ndon admirable de Dios!\n¡Oh paz, maravilla de paz,\nel donde de amor de mi Dios!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_328.mp3"
    }
  },
  {
    id: 329,
    numero: 329,
    categoria: "A",
    copyright: false,
    titulo: "Grato es Contar la Historia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Grato es contar historia\nde celestial favor,\nde Cristo y de su gloria,\nde Cristo y de su amor.\nMe agrada referirla,\nPues se que es la verdad;\ny nada satisface\ncual ella mi ansiedad.",
      "Grato es contar la historia\nmas bella que escuche,\nmas áurea, mas hermosa\nque cuanto yo soñé.\nContarla siempre anhelo,\npues hay quien nunca oyó\nque, para redimirle,\nel buen Jesús murió.",
      "Grato es contar la historia\nque placentera es,\ny es mas, al repetirla,\npreciosa cada vez.\nLa historia, pues, que canto,\noíd con atención,\nporque es mensaje santo\nde eterna salvación.",
      "Grato es contar la historia\nde todas la mejor,\nque cuanto mas se escucha,\ninfunde mas amor.\nY cuando allá en la gloria\nentone mi cantar,\nserá la misma historia\nque tanto supe amar."
    ],
    coro: "¡Cuán bella es esta historia!\nMi tema allá en gloria\nserá ensalzar la historia\nde Cristo y de su amor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_329.mp3"
    }
  },
  {
    id: 330,
    numero: 330,
    categoria: "A",
    copyright: false,
    titulo: "Feliz el Día!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Feliz el día en que escogí\nservirte, mi Señor y Dios!\nPreciso es que mi gozo en ti\nlo muestre hoy con obra y voz.",
      "Del mundo oscuro ya salí:\nde Cristo soy y mío es él;\nsus sendas con placer seguí,\nresuelto a serle siempre fiel.",
      "Reposa, débil corazón,\na tus contiendas por ya fin;\ntendrás más noble posesión\ny parte en superior festín."
    ],
    coro: "¡Soy feliz! ¡Soy feliz!\nY en su favor me gozaré.\nEn libertad y luz me vi\ncuando triunfó en mi la fe,\ny el raudal carmesí,\nsalud de mi alma enferma fue.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_330.mp3"
    }
  },
  {
    id: 331,
    numero: 331,
    categoria: "A",
    copyright: false,
    titulo: "En el Seno de mi Alma",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el seno de mi alma una dulce quietud\nSe difunde embargando mi ser\nUna calma infinita que solo podrán\nLos amados de Dios comprender.",
      "¡Qué tesoro yo tengo en la paz que me dio!\nEn el fondo de mi alma ha de estar\nTan seguro que nadie quitarlo podrá\nMientras vea los siglos pasar.",
      "Esta paz inefable consuelo me da\nPues descanso tan solo en Jesús\nY en peligro mi alma ya nunca estará",
      "Alma triste que en rudo conflicto te ves\nSola y débil, tu senda al seguir\nHaz de Cristo tu amigo que fiel siempre es\nY su paz tu podrás recibir."
    ],
    coro: "Paz, paz, cuán dulce paz\nla que da nuestro Padre eternal\nLe ruego que inunden por siempre mi ser\nSus ondas de amor celestial.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_331.mp3"
    }
  },
  {
    id: 332,
    numero: 332,
    categoria: "A",
    copyright: false,
    titulo: "Con Sin Igual Amor (Now I Belong to Jesus)",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con sin igual amor Cristo me ama,\nsu dulce paz en mi alma derrama,\ny por salvarme su vida dio:\nya pertenezco a El.",
      "Por mis pecados fui condenado,\nmas hoy por Cristo soy perdonado;\ndel hondo abismo me levantó:\nya pertenezco a Él.",
      "Mi corazón palpita de gozo,\nCristo es de Dios el don mas precioso;"
    ],
    coro: "Ya pertenezco a Cristo,\n¡cuán pura es su amistad!\nPor las edades durará,\ny por la eternidad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_332.mp3"
    }
  },
  {
    id: 333,
    numero: 333,
    categoria: "A",
    copyright: false,
    titulo: "Dicha Grande",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dicha grande es la del hombre\ncuyas sendas rectas son,\nLejos de los pecadores,\nlejos de la tentación.\nA los malos consejeros\ndeja por temor al mal;\nHuye de la gente impía,\nburladora e inmoral.",
      "Antes en la ley divina\ncifra su mayor placer,\nMeditando día y noche\nen su divinal saber.\nEste, como el árbol verde,\nbien regado, y en sazón\nFrutos abundantes rinde,\ny hojas que perennes son.",
      "Cuanto emprende es prosperado,\nduradero le es el bien.\nMuy diverso resultados\nsacan los que nada creen,\nPues se pierden como el tamo\nque el ciclón arrebató,\nque a millones destruyó.",
      "En el juicio ningún malo,\npor lo tanto, se alzará.\nEntre justos congregados\ninsensatos nunca habrá,\nPorque Dios la vía mira\npor la cual los suyos van.\nOtra es la de los impíos:\na la nada volverán."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_333.mp3"
    }
  },
  {
    id: 334,
    numero: 334,
    categoria: "A",
    copyright: false,
    titulo: "Gran Gozo hay en mi Alma Hoy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Gran gozo hay en mi alma hoy:\nJesús conmigo está;\ncontento con su amor estoy,\nsu dulce paz me da.",
      "En mi alma hay melodías hoy,\ncanciones a mi Rey.\nFeliz y libre en Cristo soy\ny salvo por la fe.",
      "Paz plena tengo en mi alma hoy,\npues Cristo me salvó.\nMis hierros rotos quedan ya:",
      "En mi alma hoy reina gratitud\ny loores a Jesús.\nEn su presencia hay virtud,\nhay gozo en su luz."
    ],
    coro: "Brilla el sol de Cristo en mi alma;\ncada día voy feliz así.\nSu faz sonriente al contemplar,\n¡cuánto gozo siento en mí!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_334.mp3"
    }
  },
  {
    id: 335,
    numero: 335,
    categoria: "A",
    copyright: false,
    titulo: "Dulce Comunión",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dulce comunión\nla que gozo ya\nEn los brazos de mi Salvador.\n¡Qué gran bendición\nen su paz me da!\n¡Oh! yo siento en mi su tierno amor.",
      "¡Cuán dulce es vivir,\ncuán dulce es gozar\nEn los brazos de mi Salvador!\nQuiero estar con Él\nen su eterno hogar,\nSiendo objeto de su tierno amor.",
      "No habré de temer\nni aun desconfiar,\nen los brazos de mi Salvador.\nEn Él puedo yo\nbien seguro estar\nde los lazos del vil tentador."
    ],
    coro: "Libre, salvo\nde cuitas, penas y dolor;\nLibre, salvo,\nEn los brazos de mi Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_335.mp3"
    }
  },
  {
    id: 336,
    numero: 336,
    categoria: "A",
    copyright: false,
    titulo: "Mi Redentor es Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi Redentor es Cristo,\nmi gozo y mi canción;\nme salva, y me consuela\nen horas de aflicción.",
      "En todos mis afanes\nalivio y luz me das;\naunque ande en negras sombras\nno dudaré jamás.",
      "Jesús, en ti confío,\namigo y guía fiel;\nte quiero más que al mundo",
      "Serás de mi alma el gozo\naquí donde hay maldad;\ntambién serás mi dicha\nallá en la eternidad."
    ],
    coro: "¡Oh Salvador bendito,\nmi canto elevo a ti;\ncual tú no tengo amigo\nque me ame tanto aquí!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_336.mp3"
    }
  },
  {
    id: 337,
    numero: 337,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, tú Prometes",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, tú prometes complacido estar\ndonde dos o tres te vienen a adorar.\nHoy te imploramos: Oye la oración;\nven a concedemos amplia bendición.",
      "Cristo, en el pasado fuiste siempre fiel;\nsé pues con nosotros, como con Daniel.\nTe imploramos gracia y tu salvación,\noye tú el ruego de esta oración.",
      "Danos tú firmeza para resistir\nduras pruebas que perturban el vivir.\nGracias mil por tu presencia y protección.\nGuía nuestros pies a la eterna Sion."
    ],
    coro: "Ven a bendecir a los que en este lugar\nculto a tu nombre quieren tributar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_337.mp3"
    }
  },
  {
    id: 338,
    numero: 338,
    categoria: "A",
    copyright: false,
    titulo: "¡Silencio! ¡Silencio!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Silencio! ¡silencio!\nen este lugar\n¡Silencio! silencio\nhabéis de guardar.",
      "¡Silencio! ¡silencio!\nEs tiempo de orar\nLa gracia divina\npodréis disfrutar.",
      "¡Silencio! ¡silencio!\nSu amor recordad\nA Dios, pues, postrados,"
    ],
    coro: "Quedad en silencio\nen este lugar\nSilencio, silencio\nguardad al orar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_338.mp3"
    }
  },
  {
    id: 339,
    numero: 339,
    categoria: "A",
    copyright: false,
    titulo: "Primero Oré por Luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Primero oré por luz\npara la senda hallar,\ndonde pudiera con la cruz\nen pos de Cristo andar.",
      "Luego imploré valor\npara a la lucha ir\nsiempre resuelto y sin temor\nel mal a combatir.",
      "Siempre pedí más fe:\npues si confío en Dios,\nhasta montañas traspondré\nal ir del cielo en pos.",
      "Hoy le suplico amor\nhacia la humanidad:\nquiero en el nombre del Señor\ntratarla con bondad.",
      "Luz de Dios, fe y valor,\ntodo lo tengo aquí,\npues cuando oré por el amor,\nyo todo conseguí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_339.mp3"
    }
  },
  {
    id: 340,
    numero: 340,
    categoria: "A",
    copyright: false,
    titulo: "Bendiciones Ricas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bendiciones ricas, libres,\ncual copiosas lluvias das,\nrefrescando a los sedientos.\nCristo amante, ¡oh dámelas!\nDámelas, dámelas;\nCristo amante, ¡oh dámelas!",
      "No me pases, Padre amante,\naunque es vil mi corazón,\nVen, oh Dios, en este instante,\ndame aquí tu bendición.\nBendición, bendición,\ndame, oh Dios, tu bendición.",
      "He dormido en el pecado,\ntu bondad no aprecié;\nen el mundo he confiado,\n¡oh, perdona y sálvame!\n¡Sálvame, sálvame!\n¡Oh, perdona y sálvame!",
      "Santo Espíritu divino,\ntú que vista al ciego das,\ndame el mérito de Cristo,\nhabla a mí alma dulce paz.\nhabla a mi alma dulce paz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_340.mp3"
    }
  },
  {
    id: 341,
    numero: 341,
    categoria: "A",
    copyright: false,
    titulo: "Aparte del Mundo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Aparte del mundo, Señor, me retiro,\nDe lucha y tumultos ansioso de huir;\nDe escenas horribles do el mal victorioso\nExtiende sus redes y se hace servir.",
      "El sitio apartado, la sombra tranquila,\nConvienen al culto de ruego y loor;\nTu mano divina los hizo, sin duda,\nEn bien del que humilde te sigue, Señor.",
      "Allí, si tu aliento inspira a mi alma,\nY llega la gracia mi pecho a tocar,\nmis labios podrán en tu altar encendidos\nCantar alabanza a tu gloria sin par.",
      "Te debo tributos de amor y de gracias\nPor este abundante y glorioso festín,\nY cantos que puedan oírse en los cielos\nPor años sin cuento, por siglos sin fin."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_341.mp3"
    }
  },
  {
    id: 342,
    numero: 342,
    categoria: "A",
    copyright: false,
    titulo: "Sed Puros y Santos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sed puros y santos, mirad al Señor,\nPermaneced fieles, orad sin cesar;\nY que la Palabra del buen Salvador\nOs lleve en la vida a servir y amar.",
      "Sed puros y santos, Dios nos juzgará;\nOrad en secreto; respuesta vendrá.\nSu Espíritu Santo revela a Jesús,\nY su semejanza en nos El pondrá.",
      "Sed puros y santos, Cristo nos guiará;\nSeguid su camino, en El confiad;\nEn paz o en zozobra, la calma dará\nQuien nos ha salvado de nuestra maldad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_342.mp3"
    }
  },
  {
    id: 343,
    numero: 343,
    categoria: "A",
    copyright: false,
    titulo: "A Mí Venid",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A mi venid en la oscuras horas\ncuando abatido el corazón esté.\nBuscando alivio del eterno Padre,\na mí venid, descanso yo os daré.",
      "Muchas mansiones se hallan preparadas,\nbellas moradas libres del pesar;\ndulce es el ritmo de arpas cadenciosas,\nsuave se entona el célico cantar.",
      "Almas heridas, vidas despreciadas,\nfloreceréis en el celeste Edén.\nA mí venid, dejando las tristezas,\na mí venid, descanso yo os daré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_343.mp3"
    }
  },
  {
    id: 344,
    numero: 344,
    categoria: "A",
    copyright: false,
    titulo: "Dulce Oración",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dulce oración, dulce oración,\nde toda influencia mundanal\nelevas tu mi corazón\nal tierno Padre celestial.\n¡Oh cuántas veces tuve en ti\nauxilio en ruda tentación!\n¡Y cuántos bienes recibí\nmediante ti, dulce oración!",
      "Dulce oración, dulce oración,\nal trono excelso de bondad\ntú llevarás mi petición\na Dios, que escucha con piedad.\nCreyendo espero recibir\ndivina y plena bendición,\ny que me ayudes a vivir\njunto a mi Dios, dulce oración.",
      "Dulce oración, dulce oración,\naliento y gozo al alma das;\nen este valle de aflicción\nconsuelo siempre me serás.\nTan sólo el día cuando esté\ncon Cristo en la celeste Sión,\nfeliz, de ti, dulce oración."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_344.mp3"
    }
  },
  {
    id: 345,
    numero: 345,
    categoria: "A",
    copyright: false,
    titulo: "Jesús, te Necesito",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús, te necesito,\npues soy tan pobre y vil,\nrecorro, peregrino,\nun mundo muy hostil.\nTu amor será mi apoyo;\nme anima ver tu faz;\nen medio del peligro\ndescanso en tu paz.",
      "Jesús. te necesito,\nanhelo a ti servir;\namargas aflicciones\ntú puedes compartir.\nTu Espíritu me ayuda\nen cada tentación,\nme da en cada trance\nconsuelo y salvación.",
      "Jesús, te necesito;\nmuy pronto te veré,\ny en calles celestiales\ncontigo andaré.\nY con los redimidos\nelevaré mi voz\nmi Salvador, mi Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_345.mp3"
    }
  },
  {
    id: 346,
    numero: 346,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Lleguen Pruebas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando lleguen las pruebas, Cristo, ven a mí.\nHaz que nunca ceda a la tentación\ny por sus halagos yo te deje a ti,\ny al abismo vaya de la perdición.",
      "Al cruzar el mundo, me fascinará\nsu riqueza vana o el falaz placer;\nmas entonces presto mi alma a ti vendrá\na buscar ayuda, gracia, luz poder.",
      "Si la prueba enviaras a mi vida aquí,\ncon dolor y pena, luto y aflicción,\nhaz que nunca dude que vendrás a mí\ny que tú lo cambias todo en bendición."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_346.mp3"
    }
  },
  {
    id: 347,
    numero: 347,
    categoria: "A",
    copyright: false,
    titulo: "Sol de mi Ser",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sol de mi ser, mí Salvador,\ncontigo vivo sin temor;\nno quieras esconder jamás\nde mí la gloria de tu faz.",
      "Al sueño blando al entregar\nmi cuerpo para descansar,\nen tu promesa confiaré:\n\"Ven, hijo, te protegeré\".",
      "Dame, oh Señor, al despertar,\ngracia divina y bienestar,\ny al caminar a tu mansión,\ncólmame tú de bendición."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_347.mp3"
    }
  },
  {
    id: 348,
    numero: 348,
    categoria: "A",
    copyright: false,
    titulo: "Quiero, Jesús, Contigo Andar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Quiero, Jesús, contigo andar,\ny en tu servicio trabajar;\ndime el secreto de saber\nllevar mis cargas con placer.",
      "Haz que mi lengua sepa hablar\nsólo el lenguaje del amor,\ny al extraviado pueda guiar\nhasta el redil de mi Pastor.",
      "Teme a tu lado, enséñame\na ser paciente, noble y fiel;\nque en tus pisadas pueda andar,\ny al abatido consolar.",
      "Dame del cielo aquella fe\nque en la tormenta ve la luz.\nColme mi alma tu bondad,\ny viva siempre con tu paz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_348.mp3"
    }
  },
  {
    id: 349,
    numero: 349,
    categoria: "A",
    copyright: false,
    titulo: "Oh, qué Amigo nos es Cristo!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, qué amigo nos es Cristo!\nEl sintió nuestra aflicción\nY nos manda que llevemos\ntodo a Dios en oración\n¿Vive el hombre desprovisto\nde consuelo y protección?\nEs porque no tiene dicho\ntodo a Dios en oración.",
      "¿Vives débil y cargado\nde temor y tentación?\nA Jesús, tu amigo eterno,\ncuenta todo en oración\n¿Te desprecian tus amigos?\nDilo a El en oración\nEn sus brazos cariñosos\npaz tendrá tu corazón.",
      "Jesucristo es nuestro amigo,\nde esto pruebas mil mostró\nAl sufrir el cruel castigo\nque el culpable mereció\nY su pueblo redimido\nhallará seguridad\ny esperando en su bondad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_349.mp3"
    }
  },
  {
    id: 350,
    numero: 350,
    categoria: "A",
    copyright: false,
    titulo: "Marcharé en la Divina Luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Marcharé en la divina luz,\nmarcharé, siempre marcharé;\nen las huellas del buen Jesús,\nsiempre marcharé.",
      "Marcharé con mi Guía fiel,\nmarcharé, siempre marcharé;\ntriunfaré por la fe en él,\nsiempre marcharé.",
      "Marcharé almas a buscar,\nmarcharé, siempre marcharé;\nlos perdidos a rescatar,",
      "Por Jesús más que vencedor,\nmarcharé, siempre marcharé;\nal hogar de mi Salvador,\nsiempre marcharé."
    ],
    coro: "Vestido blanco yo tendré,\nCorona eterna ceñiré;\nfeliz allí podré gozar,\nen el Edén sin par.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_350.mp3"
    }
  },
  {
    id: 351,
    numero: 351,
    categoria: "A",
    copyright: false,
    titulo: "Yo Quiero Trabajar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo quiero trabajar por el Señor,\nCreyendo en su Palabra y en su amor\nQuiero, si, cantar y orar,\ny ocupado siempre estar\nEn la viña del Señor.",
      "Yo quiero cada día trabajar\nY esclavos del pecado libertar,\nLlevarlos a Jesús,\nnuestro gula, nuestra luz,\nEn la viña del Señor.",
      "Yo quiero ser obrero de valor,\nConfiando en el poder del Salvador.\nQuien quiera trabajar\nhallará también lugar\nEn la viña del Señor."
    ],
    coro: "Trabajar y orar\nEn la viña, en la viña del Señor,\nSi, mi anhelo es orar\ny ocupado siempre estar\nEn la viña del Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_351.mp3"
    }
  },
  {
    id: 352,
    numero: 352,
    categoria: "A",
    copyright: false,
    titulo: "Levántate, Cristiano",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Levántate, cristiano, levántate y trabaja;\nno dejes que tu vida se pase en la inacción.\nEl que en el ocio vive a su Hacedor ultraja,\nno lleva sus deberes, ni cumple su misión.",
      "Si quieres que la vida te ofrezca mil encantos,\nsi quieres que la dicha te inspire paz y amor,\ntrabaja con ahínco, sin miedo ni quebrantos;\ny un cielo de ventura verás en tu redor.",
      "Trabaja por el mundo, trabaja por el cielo,\nsembrando buenas obras, sembrando bendición.\nVirtud es el trabajo, alivio y fiel consuelo;\ny sólo en él se encuentra la paz del corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_352.mp3"
    }
  },
  {
    id: 353,
    numero: 353,
    categoria: "A",
    copyright: false,
    titulo: "Centinelas del Maestro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Centinelas del Maestro,\npor doquiera pregonad\nde la cruz las buenas nuevas,\nde Jesús y su bondad.",
      "Por la cima de los montes,\npor los valles, por el mar,\npor doquier el Evangelio\nhoy os toca proclamar.",
      "A los antros del pecado,\ndondequiera haya aflicción,\nid con las alegres nuevas",
      "Proclamad a los cautivos:\nDía es de libertad.\nAl cansado y desvalido,\na su Salvador llamad."
    ],
    coro: "Centinelas del Maestro,\nla trompeta haced oir;\ny que el hombre que la escuche,\nvida pueda recibir.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_353.mp3"
    }
  },
  {
    id: 354,
    numero: 354,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh! Cuánto Necesita",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh! cuánto necesita obreros el Señor,\nque vayan presurosos al campo de labor.\nAlegre yo le digo, con todo mi valor:\nConmigo cuenta tú, Señor.",
      "Ahora, en la batalla, ven, cíñeme, Señor;\ntu célica armadura dé aliento, fe y valor.\nPara vencer las huestes del fiero tentador,\nconmigo cuenta tú, Señor.",
      "La carga que soporta la pobre humanidad,\ncon todos mis esfuerzos yo debo aliviar;\npara salvar las almas, doquier me toque estar,"
    ],
    coro: "Voy, Señor; voy, Señor,\na trabajar alegre y con fervor.\nSi, voy, Señor, voy, Señor;\nconmigo cuenta tú, Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_354.mp3"
    }
  },
  {
    id: 355,
    numero: 355,
    categoria: "A",
    copyright: false,
    titulo: "¿Os Pusisteis a Arar?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Os pusisteis a arar? Pues seguid, seguid,\naunque duro el terreno encontréis.\nLuchad con tesón, firme el corazón\ny al fin rico pago tendréis.\nLos campos fecundos reverdecerán\ny áurea gloria revestirán;\ncon gozo veréis cosechar la mies;\nentonad, pues, con brío el refrán:",
      "¿Os llamó Dios a su obra? Seguid, seguid,\naunque densa la oscuridad.\nDe Cristo Jesús vendrá clara luz,\nen su lumbre gloriosa andad.\nEn aquel fausto día de gozo y solaz,\nen la patria de luz y amor,\nceleste mansión, feliz galardón\nos dará bondadoso el Señor."
    ],
    coro: "Cansados, no vaciléis.\nVenciendo, al fin alegre festín\nCon Cristo gozaréis.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_355.mp3"
    }
  },
  {
    id: 356,
    numero: 356,
    categoria: "A",
    copyright: false,
    titulo: "Despliegue el Cristiano su Santa Bandera",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Despliegue el cristiano su santa bandera\ny muéstrela ufano del mundo a la faz;\nsoldados valientes, el triunfo os espera,\nseguid vuestra lucha constante y tenaz.",
      "Despliegue el cristiano su santa bandera\ny luzca en el frente de audaz torreón;;\nel monte y el valle, la hermosa pradera\ncontemplen ondeando tan bello pendón.",
      "Despliegue el cristiano su santa bandera,\npredique a los pueblos el Libro inmmortal;\npresente a los hombres la luz verdadera\nque vierte ese claro, luciente fanal.",
      "Despliegue el cristiano su santa bandera\ny muéstrese bravo, batiéndose fiel;\npara él no habrá fosos, para él no hay barrera,\npues lucha a su lado el divino Emmanuel."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_356.mp3"
    }
  },
  {
    id: 357,
    numero: 357,
    categoria: "A",
    copyright: false,
    titulo: "Soy Peregrino Aquí",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Soy peregrino aquí, no hallo do morar\nen áurea playa está mi muy lejano hogar;\nyo soy embajador del reino allende el mar;\nembajador soy de mi Rey.",
      "Mi Rey implora a los de senda mundanal\nque se arrepientan del pecado tan fatal;\nque presten atención al ruego celestial;\nembajador soy de mi Rey.",
      "Mas bello es mi hogar que el valle de Sarón;\nhay plena paz y amor en toda su extensión;\ny porque allí tengáis eterna posesión,"
    ],
    coro: "Mensaje traigo que anunciar,\nque aun ángeles quisieran dar.\n\"Reconciliaros hoy\", es la divina voz,\n\"reconciliaos hoy con Dios\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_357.mp3"
    }
  },
  {
    id: 358,
    numero: 358,
    categoria: "A",
    copyright: false,
    titulo: "¡El Salvavidas!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡El salvavidas deprisa lanzad!\n¡Echad la cuerda al bravísimo mar!\nAllá en las olas, en la oscuridad\nnaufraga un hermano que habéis de salvar.",
      "¡El salvavidas, con mano veloz!\n¿Por qué tardando tranquilos quedáis?\n¡Ved, ya se hunde en el vórtice atroz!\n¡Lanzad, pues, el bote! ¡Tardios no seáis!",
      "A los perdidos llevad salvación.\n¿No habréis sentido jamás tal pavor?\nLas ondas de ayes y de tentación",
      "Es corto el tiempo en que se han de salvar;\npronto irán a la ruina eternal.\n¡Salid pues presto, y sin vacilar\nllevadles la cuerda de vida inmortal!"
    ],
    coro: "¡Lanzad la cuerda del salvavidas!\n¡Ved, se lo lleva el mar!\n¡Lanzad la cuerda del salvavidas!\n¡Id al perdido a salvar!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_358.mp3"
    }
  },
  {
    id: 359,
    numero: 359,
    categoria: "A",
    copyright: false,
    titulo: "¡Trabajad! ¡Trabajad!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Trabajad! ¡trabajad! somos siervos de Dios;\nseguiremos la senda que Cristo trazó.\nRenovando las fuerzas con bienes que da.\nel deber que nos toca cumplido será.",
      "¡Trabajad! ¡Trabajad! Hay que dar de comer\nal que pan de la vida quisiera tener,\nhay enfermos que irán a los pies del Señor\nal saber que de balde los sana su amor.",
      "¡Trabajad! ¡Trabajad! Fortaleza pedid;\nel reinado del mal con valor combatid;\nconducid sus cautivos al Libertador"
    ],
    coro: "¡Trabajad! ¡trabajad!\n¡Esperad y velad!\n¡Confiad! ¡Siempre orad!\nQue Cristo pronto volverá",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_359.mp3"
    }
  },
  {
    id: 360,
    numero: 360,
    categoria: "A",
    copyright: false,
    titulo: "Cerca un Alma Agobiada Está",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cerca un alma agobiada está,\nve y ayúdala hoy;\nHazle algún acto de pura amistad,\nve y ayúdala hoy.",
      "¿Ves a un vecino sin fuerza y valor?\nVe y ayúdale hoy;\nhabla a su oído palabras de amor,\nve y ayúdale hoy.",
      "¿Otro confronta una cruel tentación?\nVe y ayúdale hoy;\nclama al Señor en ferviente oración;",
      "Hay quien ya busca el camino del bien.\nVe y ayúdale hoy;\ndi con la Esposa y Espíritu: \"Ven\".\nVe y ayúdale hoy."
    ],
    coro: "Ve y ayúdale hoy.\nNo tardes, mas di: \"Ya voy\".\nAl débil sé escudo y viste al desnudo.\n¡Oh, ve y ayúdale hoy!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_360.mp3"
    }
  },
  {
    id: 361,
    numero: 361,
    categoria: "A",
    copyright: false,
    titulo: "Exparcid la Luz de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Esparcid la luz de Cristo\nen la densa oscuridad.\nAlumbrad a quien no ha visto\nmás que el mundo de maldad.",
      "Alumbradles el sendero\nde la eterna salvación,\ny que acepten del Cordero\nla promesa de expiación.",
      "Como un barco zozobrante\nen las ondas de la mar,\nnuestro mundo tambaleante"
    ],
    coro: "Esparcid la luz de Cristo,\ndad las nuevas de la cruz,\npues hay muchos que no han visto\ntodavía al buen Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_361.mp3"
    }
  },
  {
    id: 362,
    numero: 362,
    categoria: "A",
    copyright: false,
    titulo: "Un Día más por Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un día más por Cristo,\ny menos por vivir;\nmas hoy el cielo,\nque tanto anhelo,\nmás cerca está que ayer.\nColmada mi alma está de luz y amor.",
      "Un día más por Cristo,\npor mi glorioso Rey;\npues mis deberes\nya son placeres:\nsu amor proclamaré.\nJesús murió; mi vida así compró.",
      "Un día más por Cristo;\ncuán grato es para mí\ncontar la historia,\nmostrar la gloria\ndel que me salva aquí.\nMi corazón rebosa en bendición.",
      "¡Oh cuán bendita obra\nde Cristo mi Señor!\nTras prueba dura,\nun alma pura\nme da su santo amor.\nY esto sé: con Cristo reinaré."
    ],
    coro: "Un día más por Cristo,\nun día más por Cristo,\nun día más por Cristo,\ny menos por vivir.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_362.mp3"
    }
  },
  {
    id: 363,
    numero: 363,
    categoria: "A",
    copyright: false,
    titulo: "¿Quién está por Cristo?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Quién está por Cristo? ¿Quién le servirá?\nA salvar a otros ¿quién le ayudará?\n¿Quién dejando el mundo contra el error\nluchará por siempre al lado del Señor?.",
      "No por la corona, ni el galardón\nentro en esta lucha y alzo el pendón.\nPor los pecadores Cristo se entregó;\nen llevarlos a sus pies me gozo yo.",
      "No con oro o plata Cristo nos compró,\nsino con la sangre que en la cruz vertió.\nLos que a El acuden bendecidos son,",
      "Rudo el conflicto sigue con Satán,\nmas lo venceremos, Cristo es Capitán.\nSu verdad eterna es nuestro pabellón;\nsu presencia aviva todo corazón."
    ],
    coro: "Por su magna gracia,\nsu profundo amor\nYo estoy por Cristo,\nes mi Rey, Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_363.mp3"
    }
  },
  {
    id: 364,
    numero: 364,
    categoria: "A",
    copyright: false,
    titulo: "Hoy Gozoso Medito",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy gozoso medito en la tierra mejor\ndo al ponerse mi sol llegaré.\nCuando me haye por gracia con Cristo el Señor,\n¿la Corona de estrellas tendré?",
      "De la fuerza de Dios esperando el poder,\ntrabajar quiero siempre y orar\npor las almas, y al fin, cual estrellas saber\nque en mi sienes irán a brillar.",
      "¡Oh! Qué gozo en los cielos será para mi\ny tener en mi frente Corona que allí\nornen joyas de tal brillantez."
    ],
    coro: "¿Una bella Corona de estrellas tendré\npor las almas que a Cristo llevé?\nCuando llegue al hogar\nde la dicha sin par,\n¿la Corona de estrellas tendré?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_364.mp3"
    }
  },
  {
    id: 365,
    numero: 365,
    categoria: "A",
    copyright: false,
    titulo: "Solitarios Corazones",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Solitarios corazones que podemos consolar,\nde cansancio y desengaños van rendidos, al pasar.\nInfundámosles valor en la senda terrenal.\n¿Les negamos nuestro amor?\n¡Ay!, ¿por qué egoísmo tal?",
      "Con desprecio no miremos su sendero al transitar;\nlas heridas de sus almas acudamos a vendar.\nEse bálsamo de paz, eficaz, consolador,\nen sus llagas hoy verted\ncomo ofrenda del amor.",
      "Se deslizan, y perdemos, eslabón tras eslabón,\nMas el sembrador del bien, fruto bueno ha de segar.\n¡A los campos blancos, pues!\nY por Cristo, ¡a trabajar!"
    ],
    coro: "Rescatad de su mal\ny salvad al mortal;\nsocorredlo con amor,\ny llevadlo al Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_365.mp3"
    }
  },
  {
    id: 366,
    numero: 366,
    categoria: "A",
    copyright: false,
    titulo: "Tocad Trompeta Ya",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tocad trompeta ya,\nalegres en Síon;\nal mundo proclamad\nla eterna redención.",
      "A Cristo predicad;\ndecid que ya murió\ny con su potestad\nla muerte destruyó.",
      "Vosotros que el favor\ndel cielo despreciáis,\nved que por el amor\nde Cristo lo alcanzáis.",
      "Llamadles con amor;\nid, ofrecedles paz.\nEs tarde, apresurad;\nque vuelvan a su faz."
    ],
    coro: "Este es el año de bondad,\nvolved a vuestra libertad,\nvolved a vuestra libertad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_366.mp3"
    }
  },
  {
    id: 367,
    numero: 367,
    categoria: "A",
    copyright: false,
    titulo: "¿Qué estás haciendo por Cristo?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Qué estás haciendo por Cristo\nmientras vida él te da?\n¿Sembrando estás su Palabra\no te hallas durmiendo quizá?",
      "¿Qué estás haciendo por Cristo,\ntu gran Rey y Señor?\n¿Cuidas el alma afligida\ncon gracia, ternura y amor?",
      "¿Qué estás haciendo por Cristo?\nPronto anochecerá."
    ],
    coro: "¿Qué estás haciendo hoy para Cristo?\n¿Qué estás haciendo? ¿Hoy esperarás?\n¿Qué estas haciendo hoy para Cristo?\nTe dio su gracia; tú ¿que le darás.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_367.mp3"
    }
  },
  {
    id: 368,
    numero: 368,
    categoria: "A",
    copyright: false,
    titulo: "Ama a tus Prójimos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ama a tus prójimos, piensa en sus almas\ndiles la historia de Cristo, el Señor;\ncuida del huérfano, hazte su amigo.\nCristo le es Padre y fiel Salvador.",
      "Aunque rechácenle, tiene paciencia\nhasta que puédales dar la salud.\nVenles los ángeles desde los cielos,\nvigilaránles con solicitud",
      "Dentro del corazón triste, abatido,\nobra el Espíritu transformador,\nque lo conducirá arrepentido,",
      "Salva a tus prójimos, Cristo te ayuda;\nfuerza de Dios será tuya en verdad.\nEl te bendecirá en tus esfuerzos;\ncon El disfrutarás la eternidad."
    ],
    coro: "Salva al incrédulo,\nmira el peligro\nDios le perdonará,\nDios le amará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_368.mp3"
    }
  },
  {
    id: 369,
    numero: 369,
    categoria: "A",
    copyright: false,
    titulo: "Vivo por Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Vivo por Cristo, confiando en su amor,\nvida me imparte, poder y valor;\ngrande es el gozo que tengo por Él,\nes de mi senda Jesús guía fiel.",
      "Vivo por Cristo, murió, pues, por mí;\nsiempre servirte yo quisiera aquí;\nporque me ha dado tal prueba de amor\nquiero rendirme por siempre al Señor.",
      "Vivo por Cristo, doquiera que esté;\nya por su ayuda sus obras haré;\npruebas hoy llevo con gozo y amor,",
      "Vivo sirviendo, siguiendo al Señor;\nquiero imitar a mi buen Salvador.\nBusco a las almas hablándoles de Él,\ny es mi deseo ser constante y fiel."
    ],
    coro: "¡Oh Salvador bendito! me doy tan solo a ti,\nporque tu en el Calvario te diste allí por mi;\nno tengo mas Maestro, yo fiel te seguiré;\na ti me doy, pues tuyo soy, de mi alma eterno Rey.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_369.mp3"
    }
  },
  {
    id: 370,
    numero: 370,
    categoria: "A",
    copyright: false,
    titulo: "Muy Constante es Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Muy constante es Jesús;\nsiempre te amará.\nSi caminas en su luz,\nél te sostendrá.",
      "Cuando haya que luchar,\nfuerza te dará.\nNunca debes desmayar,\nél te ayudará.",
      "Si la vida es como hiel,\nCristo aliento da.\nSi el amigo te es infiel,"
    ],
    coro: "Cristo es siempre fiel,\nCristo es siempre fiel.\nCielo y tierra pasarán,\nmas Cristo es siempre fiel.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_370.mp3"
    }
  },
  {
    id: 371,
    numero: 371,
    categoria: "A",
    copyright: false,
    titulo: "Dame la Fe de mi Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dame la fe de mí Jesús,\nes mi oración, oh buen Señor:\nla fe que al alma da la paz,\nla fe que salva de temor;\nfe de los santos galardón,\ngloriosa fe de salvación.",
      "Dame la fe que trae poder,\nque a los demonios da terror;\nque fieras no podrán vencer,\nni dominarla el opresor;\nfe de los santos galardón,\ngloriosa fe de salvación.",
      "Dame la fe que vencerá,\nbendita fe de mi Jesús.\nDame la fe que fijará\nmi vista en su divina cruz;\nfe de los santos galardón,\ngloriosa fe de salvación.",
      "Dame la fe que da el valor,\nque ayuda al débil a triunfar,\nque todo sufre con amor\ny puede en el dolor cantar;\ngloriosa fe de salvación."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_371.mp3"
    }
  },
  {
    id: 372,
    numero: 372,
    categoria: "A",
    copyright: false,
    titulo: "Tentado, no Cedas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tentado, no cedas; ceder es pecar;\nmás fácil sería luchando triunfar.\n¡Valor!, pues, resuelto domina tu mal;\nDios puede librarte de asalto mortal.",
      "Evita el pecado, procura agradar\na Dios, a quien debes por siempre ensalzar;\nno manche tus labios impúdica voz;\npreserva tu vida de ofensas a Dios.",
      "Amante, benigno y enérgico sé;\nen Cristo, tu amigo, pon toda tu fe;\nrinde a Dios tu vida, ríndele tu ser;"
    ],
    coro: "En Jesús, pues, confía;\nen sus brazos tu alma\nhallará dulce calma;\nél te hará vencedor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_372.mp3"
    }
  },
  {
    id: 373,
    numero: 373,
    categoria: "A",
    copyright: false,
    titulo: "Nunca Estéis Desanimados",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nunca estéis desanimados:\ngracia divina obtendréis;\nCristo os sostiene en la lucha,\ny en su poder triunfaréis.",
      "¿Qué hay sí os oprimen las cargas?\n¿Qué hay sí es sombrío el vivir?\nVed hacia el lado risueño,\nvuestro camino al seguir.",
      "Nunca estéis desanimados:\nsu brazo os apoyará;\nsiempre confiad en su gracia;\nvuestro luchar premiara."
    ],
    coro: "Nunca os rindáis, nunca os rindáis,\nnunca os rindáis en las pruebas;\nCristo las desterrará;\nfiad en Jesús, fiad en Jesús;\ncuanto más duras las luchas,\ntanto más gracia os dará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_373.mp3"
    }
  },
  {
    id: 374,
    numero: 374,
    categoria: "A",
    copyright: false,
    titulo: "Los Hijos del Reino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Los hijos del reino preséntanse ya:\nresuena guerrera la voz de Jehová.\nConflictos terribles Satán provocó;\n¡las armas tomemos, que ya comenzó!",
      "La hueste contraria se apresta a la lid,\nmas no la temáis, con valor embestid.\nDios es nuestra fuerza, es nuestra canción:\nresueltos marchemos alzando pendón.",
      "Soldados valientes, al triunfo marchad:\ncon Cristo por jefe, ¿quién vacilará?\nBlandiendo la espada del Verbo de Dios,\nresueltos seguid de su lábaro en pos.",
      "Mil luchas y pruebas nos han de costar\nlas áureas Coronas que hemos de usar;\nornarán refulgentes, con gran esplendor,\nla frente de aquellos que tienen valor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_374.mp3"
    }
  },
  {
    id: 375,
    numero: 375,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Rey eterno, avanza!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh Rey eterno, avanza!\nEs tiempo de marchar;\ncontigo en la contienda\nhabremos de triunfar;\nllevamos la coraza\nque has dado, buen Señor;\ncontigo avanzaremos,\noh gran Conquistador.",
      "¡Oh Rey eterno, avanza!\nTú, Capitán serás,\ny al fin entonaremos\nel himno de la paz.\nNo con humana fuerza,\nmas con tu santo amor\nse gana la victoria\nen la lucha del Señor.",
      "¡Oh Rey eterno, avanza!\nSeguimos sin temor,\nse ven en lontananza\nlas luces del albor.\nSeguimos con firmeza\nla enseña de la cruz;\nal magno Rey, Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_375.mp3"
    }
  },
  {
    id: 376,
    numero: 376,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh, hermanos!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, hermanos!, en los cielos\nved la enseña ya.\nHay refuerzos, muy segura\nla victoria está.\n\"Voy allá, estad, pues, firmes\",\nclama el Salvador.\nFirmes por tu gracia estamos;\nella da valor.",
      "No importa si asedian\ncon rugiente afán\nlas legiones aguerridas\ndel traidor Satán.\nNo os arredre su fiereza,\nved en derredor\ncómo caen sus guerreros\ncasi sin valor.",
      "Tremolando se divisa\nel marcial pendón,\ny se escucha de trompetas\nel guerrero son.\nEn el nombre del que viene,\nnuestro Capitán,\ncon temor huirán.",
      "Sin descanso, ruda sigue\nla furiosa lid.\n¡Ya!, hermanos, ved cercano\nnuestro Adalid.\nPoderoso Cristo viene,\nsalvará su grey.\n¡Oh, hermanos! ¡Alegría!\n¡Viva nuestro Rey!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_376.mp3"
    }
  },
  {
    id: 377,
    numero: 377,
    categoria: "A",
    copyright: false,
    titulo: "No te dé Temor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No te dé temor hablar por Cristo,\nhaz que brille en ti su luz;\nal que te salvó confiesa siempre\ntodo debes a Jesús.",
      "No te dé temor vivir por Cristo\ncuanto de tu parte está;\nobra con amor, con fe y constancia:\ntus trabajos premiará.",
      "No te dé temor sufrir por Cristo\nlos reproches, o el dolor;\nsufre con amor tus pruebas todas,",
      "No te dé temor morir por Cristo:\nvida y verdad es Él;\nÉl te llevará con gran ternura\na su célico vergel."
    ],
    coro: "No te dé temor, no te dé temor,\nnunca, nunca, nunca.\nEs tu Salvador amante,\nnunca, pues, te de temor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_377.mp3"
    }
  },
  {
    id: 378,
    numero: 378,
    categoria: "A",
    copyright: false,
    titulo: "¡Firmes y Adelante!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Firmes y adelante, huestes de la fe,\nsin temor alguno, que Jesús nos ve!\nJefe soberano, Cristo al frente va\ny la regia enseña tremolando está.",
      "Al sagrado nombre de nuestro Adalid,\ntiembla el enemigo y huye de la lid.\nNuestra es la victoria, dad a Dios loor,\ny óigalo el averno lleno de pavor.",
      "Muévese potente el pueblo del gran Dios,\npues de su gran Jefe marcha siempre en pos.\nEs un solo cuerpo y uno es el Señor,\nuna la esperanza y uno es el amor.",
      "Tronos y coronas pueden perecer;\nde Jesús la iglesia firme ha de ser.\nNada en contra de ella prevalecerá,\nporque la promesa nunca faltará."
    ],
    coro: "¡Firmes y adelante, huestes de la fe,\nSin temor alguno que Jesús nos ve!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_378.mp3"
    }
  },
  {
    id: 379,
    numero: 379,
    categoria: "A",
    copyright: false,
    titulo: "¡De pie, de pie, cristianos!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡De pie, de pie, cristianos!,\nsoldados de la cruz.\nSeguid el estandarte\nde vuestro Rey, Jesús,\npues victoriosamente\nsus huestes mandará,\ny al fiero enemigo,\npujante, vencerá.",
      "¡De pie, de pie, cristianos!,\npues suena ya el clarín\nllamando al conflicto\nal bravo paladín.\nSoldados varoniles,\nhenchíos de valor,\nportaos en la lucha\ncon bríos y vigor.",
      "¡De pie, de pie, cristianos!,\nen Dios la fuerza está;\nel débil brazo humano\nbien pronto os faltará.\nTomando la armadura\nde Dios, con oración,\nid presto con tesón.",
      "¡De pie, de pie, cristianos!,\nal fin el galardón;\nsi hoy la lucha es recia,\nmañana habrá canción.\nQuien salga victorioso\nCorona obtendrá,\ny con el Rey de gloria\npor siempre vivirá."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_379.mp3"
    }
  },
  {
    id: 380,
    numero: 380,
    categoria: "A",
    copyright: false,
    titulo: "Contendamos Sempre por Nuestra Fe",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Contendamos siempre por nuestra fe,\naunque ruja el mundo en derredor;\nnunca el tentador nos podrá vencer,\npues nos librará el Señor.",
      "No seamos tibios de corazón,\nni dejemos nunca el primer amor;\nmantengamos firme la profesión\nde la fe del Salvador.",
      "Procuremos todos la santidad,\nsin la cual ninguno verá al Señor;"
    ],
    coro: "Si sufrimos aquí, reinaremos allí,\nen la gloria celestial;\nsí llevamos la cruz por amor de Jesús,\nla corona él nos dará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_380.mp3"
    }
  },
  {
    id: 381,
    numero: 381,
    categoria: "A",
    copyright: false,
    titulo: "¡Despertad, Despertad, oh Cristianos!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡ Despertad, despertad, oh cristianos!\nVuestro sueño funesto dejad;\nque el crüel enemigo os acecha,\ny cautivos os quiere llevar.\n¡Despertad!, las tinieblas pasaron;\nde la noche no sois hijos ya,\nmas lo sois de la luz y del día,\ny tenéis el deber de luchar.",
      "Despertad y bruñid vuestras armas,\nvuestros lomos ceñid de verdad,\ny calzad vuestros pies, aprestados\ncon el grato Evangelio de paz.\nBasta ya de profundas tinieblas,\nbasta ya de pereza mortal;\n¡revestid, revestid vuestro pecho\ncon la cota de fe y caridad!",
      "La gloriosa armadura de Cristo\nacudid con valor a tomar,\nconfiando en que el dardo enemigo\nimpotente se ha de quebrar.\n¡Oh cristianos, antorchas del mundo!,\ny sin miedo corred a luchar.",
      "No temáis, pues de Dios revestidos,\n¿que enemigo venceros podrá,\nsi tomáis por espada la Biblia,\nla Palabra del Dios de verdad?\nEn la cruz hallaréis la bandera,\nen Jesús hallaréis Capitán;\nen el cielo obtendréis la Corona:\n¡A luchar! ¡A luchar! ¡A luchar!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_381.mp3"
    }
  },
  {
    id: 382,
    numero: 382,
    categoria: "A",
    copyright: false,
    titulo: "Aquí mis Días ya se Van",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Aquí mis días ya se van,\nde pobre peregrino.\nQue vuelen, pues llevarme han\na mi feliz destino.\nLlegamos a la orilla ya,\nmuy pronto pasaremos,\ny enfrente deslumbrante está\nla patria que buscamos.",
      "Ceñid los lomos con valor,\nleales compañeros;\ndelante ved el resplandor\nde valles placenteros.\nDe nuestro Jefe oíd la voz:\n\"Que toda lámpara arda;\nsé fiel; haz prosperar tu don,\ny lo que tienes guarda\".",
      "Aunque amenace el porvenir,\nconstantes cantaremos.\nDespués de tanto aquí sufrir,\nen Dios reposaremos\nJamás mundana tempestad\nperturbará el reposo;\nde incomparable gozo."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_382.mp3"
    }
  },
  {
    id: 383,
    numero: 383,
    categoria: "A",
    copyright: false,
    titulo: "Sale a la Lucha el Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sale a la lucha el Salvador\nCorona a conquistar;\nsu insignia luce por doquier,\nflameante al frente va.\nSu cáliz ¿quién lo beberá,\ntriunfando del dolor?\nAquel que lleva aquí su cruz,\nde Cristo es seguidor.",
      "El mártir con gloriosa fe\nla muerte despreció;\npor su Maestro salvo fue,\nsu nombre él invocó.\nCual Cristo, compasión sintió\nPor el que le hizo mal\ny a su enemigo perdonó.\n¿Quién, pues, hará igual?",
      "Al fin, la gran congregación,\ndel trono en derredor\nlevantará al Señor Jesús\nsus voces de loor.\nPeligros, luchas y dolor\npudieron soportar.\nla gracia de ir allá!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_383.mp3"
    }
  },
  {
    id: 384,
    numero: 384,
    categoria: "A",
    copyright: false,
    titulo: "Voy al Cielo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Voy al cielo, soy peregrino,\na vivir eternamente con Jesús;\npues él abrió ya amplio camino,\nal expirar sobre amarga cruz.",
      "Duelo, muerte, amarga pena,\nnunca, nunca más se encontrarán allá;\npreciosa vida, de gozo llena,\nel alma mía disfrutará.",
      "¡Tierra santa, hermosa y pura!,\nentraré en ti, salvado por Jesús;\ny gozaré siempre la ventura,\niluminado con santa luz."
    ],
    coro: "Voy al cielo, soy peregrino,\na vivir eternamente con Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_384.mp3"
    }
  },
  {
    id: 385,
    numero: 385,
    categoria: "A",
    copyright: false,
    titulo: "Los que Aman al Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Los que aman al Señor\nelevan su canción,\nque en dulces notas de loor,\nque en dulces notas de loor,\nascienda a su mansión,\nascienda a su mansión.",
      "Unida está, oh Dios,\ntu fiel y amada grey;\ny cantan todos a una voz,\ny cantan todos a una voz,\nlos hijos del gran Rey,\nlos hijos del gran Rey.",
      "En Sion disfrutaréis\nla gracia del Señor\nque hoy os promete la tendréis,\nque hoy os promete la tendréis,\ndel trono en derredor,\ndel trono en derredor.",
      "Cantemos con fervor,\ndejemos el pesar,\nmarchemos libres de temor,\nmarchemos libres Ue temor,\nal mas feliz hogar,\nal mas feliz hogar."
    ],
    coro: "A Sion caminamos,\nnuestra ciudad tan gloriosa;\nmarchando todos cantamoos\nde Dios y la bella mansión.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_385.mp3"
    }
  },
  {
    id: 386,
    numero: 386,
    categoria: "A",
    copyright: false,
    titulo: "Peregrinos en Desierto",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Peregrinos en desierto,\nguíanos, Señor Jehová;\nsomos débiles: tu diestra\nfuerte nos apoyará.\nPan del cielo, pan del cielo\na tu errante pueblo da,\na tu errante pueblo da, pueblo da,\na tu enante pueblo da.",
      "Tú, la fuente misma, danos\nagua viva, espiritual;\nnuestra suerte está en tus manos,\ny la herencia del mortal.\nDios benigno, Dios benigno,\nlíbranos de todo error,\nlíbranos de todo error, todo error,\nlíbranos de todo error.",
      "Desvanece los terrores\nde la orilla del Jordán;\npor ti más que vencedores\nhaz que entremos en Canaan.\nTus bondades, tus bondades\ntema eterno nos serán,\ntema eterno nos serán."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_386.mp3"
    }
  },
  {
    id: 387,
    numero: 387,
    categoria: "A",
    copyright: false,
    titulo: "La Senda Ancha Dejaré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La senda ancha dejaré,\nyo quiero por la angosta andar,\ny muchos no sabrán por qué,\nmas voy a mí celeste hogar.",
      "Algunos quieren verme ir\npor el sendero del pecar;\noír no puedo su llamar,\npues voy a mi celeste hogar.",
      "¿Por qué no quieres tú buscar,\nsiguiendo en pos del Salvador,\nla hermosa tierra más allá?"
    ],
    coro: "No puede el mundo ser mí hogar,\nno puede el mundo ser mi hogar;\nen gloria tengo mí mansión,\nno puede el mundo ser mi hogar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_387.mp3"
    }
  },
  {
    id: 388,
    numero: 388,
    categoria: "A",
    copyright: false,
    titulo: "Soy Peregrino Aquí",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Soy peregrino aquí.\nAl cielo voy.\nEs, pues, mi canto así:\nAl cielo voy.\nTu muerte en la cruz\nme lleva a la luz\nDo te veré, Jesús.\nAl cielo voy.",
      "Si penas tengo aquí,\nal cielo voy;\nno las veré allí,\nal cielo voy.\nContigo, mi Señor,\nen gloria y amor\nno sentiré dolor.\nAl cielo voy.",
      "Del mundo de dolor,\nal cielo voy.\nCon calma y valor,\nal cielo voy.\n¡Qué dicha al fin será\nver a Jesús allá!\nAl cielo voy."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_388.mp3"
    }
  },
  {
    id: 389,
    numero: 389,
    categoria: "A",
    copyright: false,
    titulo: "El Camino es Escabroso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El camino es escabroso,\ny los pies sangrantes van.\n¿Cuánto dista Canaán?\n¿Cuánto dista Canaán?\nPor su amparo suspiramos\ncada día más y más.\n¿Cuánto aún, cuánto dista Canaán?",
      "Por el árido desierto\nes penoso el caminar.\n¿Dista mucho Canaán?\n¿Dista mucho Canaán?\nEn la arena están las huellas\nde los que pasaron ya.\n¿Cuánto aún, cuánto dista Canaán?",
      "¡Oh, cuán dulce el descanso\nha de ser en nuestro hogar!\n¡Ya se acerca Canaán!\n¡Ya se acerca Canaán,\ndonde todas nuestras penas\nya no volverán jamás!\n¡Cerca ya, ya se acerca Canaán!"
    ],
    coro: "Muy cansados, tan cansados,\nmuy cansados de vagar\npor el desierto estamos ya.\nMuy cansados, tan cansados.\n¿Cuánto aún, cuánto dista Canaán?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_389.mp3"
    }
  },
  {
    id: 390,
    numero: 390,
    categoria: "A",
    copyright: false,
    titulo: "Busquemos la Patria",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Busquemos la patria de justos y santos,\ndo mora la dicha, do reina el amor.\nDejad, pecadores, fugaces encantos\nque os ciegan y os llenan de eterno dolor.",
      "Hermanos viajeros, felices marchemos,\ndelicias eternas allí Dios dará;\npues sobre collados de gloría andaremos,\ny herencia esa tierra de todos será.",
      "Deseamos, hermano, en camino llevarte.\nPor ti detenidos estamos; ¡oh ven!\nEn Cristo confía que anhela salvarte\ny hacerte morar en su célico Edén.",
      "Tal vez desconfiado, te estás preguntando:\n\"¿Quién puede mi negra conciencia limpiar?\"\nJesús es el único; ven, pues, orando:\n\"Señor, haz que pueda a tu reino llegar\"."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_390.mp3"
    }
  },
  {
    id: 391,
    numero: 391,
    categoria: "A",
    copyright: false,
    titulo: "Muy Lejos el Hogar Está",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "\"¿Muy lejos el hogar está?\",\ncon ansía al guarda pregunté.\n\"Muy pronto el día llegará\nde Coronar al Rey\",\nme contestó; \"no llores más,\ncercano está del viaje el fin;\nalegre entonces entrarás\nal celestial festín\".",
      "Señales muchas se ven ya,\nen cielo, tierra y en el mar;\nla aurora luego rayará,\ndel anhelado hogar.\nConsuélate, no llores más;\nel Redentor enjugará\ndel siervo fiel las lágrimas;\ndescanso le dará.",
      "Jesús en breve volverá,\n¡qué pensamiento alentador!\nLa creación ansiosa está\nde ver al Creador.\nEntonces ya terminará\ntristeza, muerte y dolor;\nal pueblo del Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_391.mp3"
    }
  },
  {
    id: 392,
    numero: 392,
    categoria: "A",
    copyright: false,
    titulo: "Hay Tan Sólo Dos Sendas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay tan solo dos sendas en que andar;\nuna es la estrecha de vida y luchar;\nmas la otra desciende al caos del error;\nsu amor es engaño, su gozo es dolor,\nsu gozo es dolor, su gozo es dolor",
      "Hay tan solo dos gulas para el viador:\nCristo el amante y benigno Pastor,\ny el fiero maligno con saña infernal,\nQue oculta entre flores veneno mortal,\nveneno mortal, veneno mortal.",
      "Hay también dos moradas: la áurea ciudad,\nlibre por siempre de toda maldad;\nla otra del malo la paga final,\nla muerte segunda, la ruina eternal,\nla ruina eternal, la ruina eternal.",
      "Entra presto en la senda de vida y paz,\ny huye el camino mundano, falaz;\nacude al convite del Consolador,\nque espérate amante tu fiel Salvador,\ntu fiel Salvador, tu fiel Salvador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_392.mp3"
    }
  },
  {
    id: 393,
    numero: 393,
    categoria: "A",
    copyright: false,
    titulo: "Aprendi el Gran Secreto",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Aprendí el gran secreto\nde morar en el Señor;\nmí descanso es completo,\nsin afán y sin dolor.\nVivo ya en su fortaleza,\nme sostiene el Salvador;\nya no siento mi flaqueza,\nfortaléceme su amor.",
      "Este mundo ya no sigo;\nCristo vive en mí por fe.\nSu presencia está conmigo:\ndel pecado me aparté.\nEs Jesús mi fundamento.\nHeredero soy con él;\nde mi gozo es el aliento,\nsu Palabra es como miel.",
      "Su presencia es muy preciosa;\nmis pesares ya quitó;\nen la santidad gloriosa\npor su sangre vivo yo.\nEl Espíritu me ha dado\nque me guía al Redentor,\ny mi vida ha llenado\ncon su paz y puro amor."
    ],
    coro: "Moro en Cristo, el Salvador,\ny me gozo en el Señor;\nhoy mi vida se renueva\nen el seno de su amor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_393.mp3"
    }
  },
  {
    id: 394,
    numero: 394,
    categoria: "A",
    copyright: false,
    titulo: "Puedo Oír Tu Voz Llamando",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Puedo oír tu voz llamando,\nsuavemente susurrando,\nque a mi alma está hablando:\n\"Trae tu cruz y ven en pos de mi\".",
      "Yo te seguiré en el huerto,\ny también por el desierto,\ny aun sediento y casi muerto,\nsufriré contigo, mi Jesús.",
      "Sufriré por ti, Maestro.\nSi el camino es siniestro\ntú serás refugio nuestro;",
      "Me darás la gracia y gloria\nde obtener la gran victoria,\ny contar la dulce historia;\nque por mi Jesús su vida dio."
    ],
    coro: "Seguiré do tu me guíes,\nseguiré do tu me guíes,\nseguiré do tu me guíes,\ndondequiera, fiel, te seguiré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_394.mp3"
    }
  },
  {
    id: 395,
    numero: 395,
    categoria: "A",
    copyright: false,
    titulo: "La Cruz No es Mayor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La cruz no es mayor que la gracia\nque el Señor Jesús me da;\nsu rostro el nublado más negro\nesconder jamás podrá.",
      "Si espinas agudas me hieren,\nde ellas él se Coronó;\nsi amarga es mi copa, en el huerto\ncáliz peor él apuro.",
      "La luz de su amor más reluce\nen la senda de aflicción;\nno siento el afán cuando llevo",
      "Andando a su vista me gozo\nen cumplir su voluntad;\nsu sangre mi vida ha limpiado\ny me guarda en la verdad."
    ],
    coro: "La cruz no es mayor que su bondad;\nno oculta su faz la tempestad; satisfáceme saber\nque confiando en el poder\nde Jesús, podré vencer.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_395.mp3"
    }
  },
  {
    id: 396,
    numero: 396,
    categoria: "A",
    copyright: false,
    titulo: "Meditar en Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Meditar en Jesús ha de ser mi afán\nme amó siendo yo un pecador;\nél ganó para mi la diadema celestial,\nen la cruz do mostróme su amor.",
      "Consultar a Jesús ha de ser mi afán,\ny Jesús me dará su clara luz.\nSin Jesús, y por mi, nada quiero practicar;\nmis acciones inspire Jesús.",
      "Predicar a Jesús ha de ser mi afán,\ny Jesús me dará fuerza y poder.\nSin Jesús y su amor vano fuera trabajar;",
      "Imitar a Jesús ha de ser mi afán.\nEn Jesús quiero mi dechado ver.\nSin mirar a Jesús, nada bueno puedo hacer,\nmas fijándoine en El todo es bien."
    ],
    coro: "Ven, ven, buen Jesús.\nMora en mi corazón,\nlléname de santidad,\npues contigo deseo andar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_396.mp3"
    }
  },
  {
    id: 397,
    numero: 397,
    categoria: "A",
    copyright: false,
    titulo: "A los Pies de Jesucristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A los pies de Jesucristo,\n¡qué palabras me habla a mí!\n¡Sitio tan feliz, precioso,\ncada día encuentre aquí!\nContemplando lo pasado,\nvuelvo a ver hoy la visión\ndel amor tan puro y santo\nque ganó mi corazón.",
      "A los píes de Jesucristo,\n¡cuánto bien se puede hallar!\nDejo aquí mi mal, mis penas,\ny hallo grato descansar.\nA los pies de Cristo, humilde,\nlloro y gózome en orar,\ny anhelo gracia diaria\nde su plenitud sacar.",
      "¡Oh Jesús bendito, dame\ntu divina y santa paz!\nMira con amor a tu hijo,\nvea yo tu dulce faz.\nDame el ánimo de Cristo,\nhazme santo, justo y fiel;\nporque mí justicia es él."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_397.mp3"
    }
  },
  {
    id: 398,
    numero: 398,
    categoria: "A",
    copyright: false,
    titulo: "Sólo Anhelo, Cristo Amado",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sólo anhelo, Cristo amado,\nen tus leyes caminar;\nsiempre hacer lo que es tu agrado,\ntus acciones imitar.\nMas soy débil y cargado\ncon mi mucha iniquidad,\npues, oh Dios, yo he faltado\na tu santa voluntad.",
      "Ten piedad, oh Cristo amado,\nde este pobre pecador.\nLímpiarne de mi pecado,\noh, bendito Salvador.\nNo permitas que me venza\notra vez el tentador.\n¡Oh mí Dios!, con gran vergüenza\nte lo pido por tu amor.",
      "Al que pide, es tu promesa\ndarle lo que ha menester.\nYo anhelo tu pureza,\ntu limpieza, tuyo ser.\nY en tu reino, cuando vengas,\nten memoria aún de mí,\ny me lleves junto a ti."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_398.mp3"
    }
  },
  {
    id: 399,
    numero: 399,
    categoria: "A",
    copyright: false,
    titulo: "Cristo Está Conmigo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo está conmigo: ¡qué consolación!\nSu presencia aleja todo mi temor.\nTengo la promesa de mí Salvador:\n\"No te dejaré yo, pues contigo estoy\".",
      "Fuertes enemigos siempre cerca están;\nCristo está más cerca, guárdame del mal.\n\"Ten valor\" me dice, \"soy tu Defensor;\nno te dejaré yo, pues contigo estoy\".",
      "El que guarda mi alma nunca dormirá.\nSí mí píe resbala, él me sostendrá.\nEn mi vida diaria es mí Protector;\nfiel es su palabra: \"Yo contigo estoy\"."
    ],
    coro: "Cristo está conmigo: ¡qué consolación!\nSu presencia aleja todo mi temor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_399.mp3"
    }
  },
  {
    id: 400,
    numero: 400,
    categoria: "A",
    copyright: false,
    titulo: "Ando con Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ando con Cristo, somos amigos,\ny mantenemos fiel comunión;\nya de su lado nunca me aparto;\n¡cuánto me alienta su comprensión!",
      "Los oropeles vanos del mundo\nabandonélos sin vacilar.\nSiendo su amor tan caro y profundo,\nllena de encanto nuestra amistad.",
      "Hasta las pruebas que en mí camino\nquieren quitarme todo valor,\nsólo son ayos que me conducen"
    ],
    coro: "Ando con Cristo, somos amigos,\ntodas mis cuitas las llevó a él.\nAndo con Cristo, marcho a su lado,\noigo la suave voz de Emmanuel.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_400.mp3"
    }
  },
  {
    id: 401,
    numero: 401,
    categoria: "A",
    copyright: false,
    titulo: "Concédeme, Jesús, Poder",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Concédeme, Jesús, poder,\ny gracia para comprender\ncuán dulce es el amar;\ny haz que pueda en santidad,\ndel cielo la felicidad\ncontigo aquí gozar.",
      "La santa sed impárteme\nde conocerte a ti, y tendré\nentonces la virtud\nde tu perfecta salvación,\ny gozará mí corazón,\nde amor la plenitud.",
      "¡Oh, santifícame, Señor!\nMí alma llena de tu amor,\ny haz que pueda oir\ntu voz, tu rostro contemplar,\nen tu hermosura meditar,\ny en ti, por ti vivir."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_401.mp3"
    }
  },
  {
    id: 402,
    numero: 402,
    categoria: "A",
    copyright: false,
    titulo: "Hoy me Llama el Mundo en Vano",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy me llama el mundo en vano,\nquiero ser cual Cristo;\nya no sirvo a lo mundano,\nquiero ser cual Cristo.",
      "Mis cadenas Cristo ha roto,\nquiero ser cual Cristo;\nsu servicio haré, devoto,\nquiero ser cual Cristo.",
      "Ya que al cielo él va a llevarme,\nquiero ser cual Cristo;"
    ],
    coro: "¡Ser como él de corazón!,\nes mí sola aspiración;\nen cualquiera condición\nquiero ser cual Cristo.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_402.mp3"
    }
  },
  {
    id: 403,
    numero: 403,
    categoria: "A",
    copyright: false,
    titulo: "Hay un Lugar do Quiero Estar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay un lugar do quiero estar,\ncerca de ti, Señor;\nallí podré yo descansar\nen tu divino amor.\nOh, ven, Jesús bendito,\nlléname de tu amor;\nmanténme siempre firme\ncerca de ti, Señor.",
      "Hay un lugar de dulce paz,\ncerca de ti, Señor.\nVivir yo quiero donde estás,\nquerido Salvador.\nOh, ven, Jesús bendito,\nlléname de tu amor;\nmanténme siempre firme\ncerca de ti, Señor.",
      "Sólo hay segura salvación\ncerca de ti, Señor;\nhay gozo y luz y bendición\ncerca de ti, Señor.\nOh, Salvador bendito,\nrecibe a un pecador,\nde paternal amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_403.mp3"
    }
  },
  {
    id: 404,
    numero: 404,
    categoria: "A",
    copyright: false,
    titulo: "Prefiero mi Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Prefiero mí Cristo al vano oropel;\nprefiero su gracia a riquezas sin fin.\nA casas y tierras prefiérole a él;\nserá de mi alma fuerte paladín.",
      "No quiero el aplauso del mundo falaz;\nprefiero en las filas de Cristo servir.\nLa fama del mundo es liviana y fugaz;\nprefiero por siempre a Jesús seguir.",
      "Más bello que el lirio en su níveo blancor,\nmi Cristo es más dulce aun que la miel.\nSu paz a mi alma dará el Señor;"
    ],
    coro: "Antes que ser rey de cualquier nación\ny en pecado gobernar,\nprefiero a mi Cristo, sublime don\ncual el mundo no ha de dar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_404.mp3"
    }
  },
  {
    id: 405,
    numero: 405,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh! ¡Maestro y Salvador!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh! ¡Maestro y Salvador!\nno me dejes desmayar;\nen tu gracia y en tu amor\nsólo fío sin cesar,\nsólo fío sin cesar.",
      "Pobre y débil se que soy,\nlo confieso, mi Señor.\nA tus pies rendido estoy,\ndame fuerzas y valor,\ndame fuerzas y valor.",
      "Dime tu lo que he de ser,\nlas palabras que he de hablar,\nLo que siempre debo hacer,\nmientras voy hacia el hogar,\nmientras voy hacia el hogar.",
      "Sólo así feliz seré\nen mi vida espiritual;\nsólo así morar podré\nen la patria celestial,\nen la patria celestial."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_405.mp3"
    }
  },
  {
    id: 406,
    numero: 406,
    categoria: "A",
    copyright: false,
    titulo: "Más de Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Más de Jesús deseo saber,\nmás de su gracia conocer,\nmás de su salvación gozar,\nmás de su dulce amor gustar.",
      "Más de Jesús deseo oír,\nmás de su santa ley cumplir,\nmás de su voluntad saber,\nmás de su Espíritu tener",
      "Más de Jesús, mas oración,\nmás cerca estar en comunión\nmás su Palabra meditar,",
      "Más de Jesús allá veré,\nmás semejante a Él seré\nmás de su gloria he de gozar,\nmás su gran nombre he de alabar."
    ],
    coro: "Más quiero amarle,\nmás quiero honrarle\nmás de su salvación gozar,\nmás de su dulce amor gustar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_406.mp3"
    }
  },
  {
    id: 407,
    numero: 407,
    categoria: "A",
    copyright: false,
    titulo: "No me Pases",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No me pases, no me olvides,\ntierno Salvador;\nmuchos gozan tus mercedes,\noye mi clamor.",
      "Ante el trono de tu gracia\nhallo dulce paz;\nnada aquí mi alma sacia,\ntú eres mí solaz.",
      "Sólo fío en tus bondades,\nguíame en tu luz,\ny mí alma no deseches,",
      "Fuente viva de consuelo\neres para mi;\nmi alma pone en ti su anhelo,\nsolamente en ti."
    ],
    coro: "Cristo, Cristo,\noye tú mi voz;\nSalvador, tu gracia dame,\noye mi clamor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_407.mp3"
    }
  },
  {
    id: 408,
    numero: 408,
    categoria: "A",
    copyright: false,
    titulo: "Más Cerca, oh Dios, de Ti",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Más cerca, oh Dios, de ti quiero morar;\naunque sobre una cruz me hayan de alzar.\nEntonaré allí este himno con fervor;\nmás cerca, oh Dios, de ti, más cerca, sí.",
      "Si cual viajero voy con ansiedad,\nmedroso al ver cerrar la oscuridad,\naun en mí soñar me harás sentir que estoy\nmás cerca, oh Dios, de ti, más cerca, sí.",
      "Después, al despertar, a ti por fe\nde mi aflicción altar elevaré.\nY cuanto sufro aquí me hará sentir que estoy\nmás cerca, oh Dios, de ti, más cerca, sí.",
      "Camino encuentro aquí que al cielo va,\npues sé que allí tu amor me sostendrá.\nCercano sentíré el ángel del Señor.\nMás cerca, oh Dios, de ti, más cerca, sí.",
      "Y cuando a tu mansión me llevarás,\ny estrellas, luna y sol yo deje atrás,\ngozoso entonaré canción eterna allí;\nMás cerca, oh Dios, de ti, más cerca, sí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_408.mp3"
    }
  },
  {
    id: 409,
    numero: 409,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh! Quién Pudiera Andar con Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh! quién pudiera andar con Dios,\nsu dulce paz gozar,\nvolviendo a ver de nuevo el sol\nde santidad y amor.",
      "¡Oh tiempo aquel en que lo vi!\n¡Beatífica visión!\nSu fiel acento de amor\noyó mi corazón.",
      "Aquellas horas de solaz,\n¡cuán caras aún me son!\nDel mundo halagos no podrán\nsuplir su falta, no.",
      "Paloma santa, vuelve a ml.\n¡Oh, Paracleto, ven!\nPerdona el pecado vil\ncon que te contristé."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_409.mp3"
    }
  },
  {
    id: 410,
    numero: 410,
    categoria: "A",
    copyright: false,
    titulo: "Mi Mano Ten",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi mano ten, Señor, me siento débil;\nsin ti no puedo riesgos afrontar;\ntenla Señor, mi vida el gozo llene\nde verme libre así de todo azar.",
      "Mi mano ten, permite que me animen\nmi regocijo, mi esperanza en ti;\ntenla Señor, y compasivo impide\nque caiga en mal cual una vez caí.",
      "Mi mano ten, mi senda es tenebrosa\nsi no la alumbra tu radiante faz;\nPor fe si alcanzo a percibir tu gloria,\n¡cuán grande gozo!, ¡cuán profunda paz!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_410.mp3"
    }
  },
  {
    id: 411,
    numero: 411,
    categoria: "A",
    copyright: false,
    titulo: "Más Santidad Dame",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Más santidad dame, más odio al mal,\nmás calma en las penas, más alto ideal;\nmás fe en el Maestro, más consagración,\nmás celo en servirte, más fe en la oración.",
      "Más prudente hazme, más sabio en El,\nmás firme en su causa, más fuerte y mas fiel;\nmás recto en la vida, más triste al pecar,\nmás humilde hijo, más pronto en amar.",
      "Más pureza dame, más fuerza en Jesús,\nmás de su dominio, más paz en la cruz;\nmás rica esperanza, más obras aquí,\nmás ansia del cielo, más gozo allí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_411.mp3"
    }
  },
  {
    id: 412,
    numero: 412,
    categoria: "A",
    copyright: false,
    titulo: "Salvador, mi Bien Eterno",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Salvador, mi bien eterno,\nmás que vida para mí,\nen mi fatigosa senda\ntenme siempre junto a ti;\njunto a ti, junto a ti,\njunto a ti, junto a ti;\nen mí fatigosa senda\ntenme siempre junto a ti.",
      "No me afano por placeres,\nni renombre busco aquí;\nvengan pruebas o desdenes,\ntenme siempre junto a ti;\njunto a ti, junto a ti,\njunto a ti, junto a ti;\nvengan pruebas o desdenes,\ntenme siempre junto a ti.",
      "No te alejes en el valle\nde la muerte, sino allí,\nantes y después del trance,\ntenme siempre junto a ti;\njunto a ti, junto a ti,\njunto a ti, junto a ti;\ntenme siempre junto a ti."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_412.mp3"
    }
  },
  {
    id: 413,
    numero: 413,
    categoria: "A",
    copyright: false,
    titulo: "Habla, Señor, a mi Alma",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Habla, Señor, a mi alma,\nhable tu dulce voz;\nsusurre en tiernas notas:\n\"Tu no estás solo, no\".\nMi corazón prepara,\npresto a escuchar tu ley;\ncanciones mi alma llenen\nde gratitud y fe.",
      "Habla a tus hijos siempre,\ndales tu santidad;\nllénalos de tu gozo,\nenséñales a orar.\nA ti consagren todo,\ntraigan tu reino pronto,\nvean tu rostro aquí.",
      "Habla cual en lo antiguo\ndiste tu santa Ley.\nTus testimonios siempre\nquiero guardar por fe.\nQuiero magnificarte,\nquiero a tu gloria dar\nEl grato testimonio\nde obedecer y amar."
    ],
    coro: "Háblame en dulces notas,\nháblame con amor:\n\"Ya la victoria es tuya,\nno tengas mas temor\".\nHáblame cada día,\nhable tu tierna voz;\nsusurre en mis oídos:\n\"Tu no estás solo, no\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_413.mp3"
    }
  },
  {
    id: 414,
    numero: 414,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, Tú Eres Para Mí",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, tú eres para mí\nmás que vida en este mundo aquí.\nPor tu sangre limpio soy\ny a tu lado ya seguro estoy.",
      "En la vida tan fugaz\ncon tu mano siempre me guiarás;\ny confiando en ti, yo sé\nque el camino nunca perderé.",
      "Más y más te quiero amar,\ny contigo siempre anhelo andar;\ny tu inagotable amor"
    ],
    coro: "Cada día, Señor,\nsé mí fuerte protector.\nQue tu tierno amor en mí\nme sostenga siempre junto a ti.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_414.mp3"
    }
  },
  {
    id: 415,
    numero: 415,
    categoria: "A",
    copyright: false,
    titulo: "Donde me Guíe, Seguiré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Donde me guíe, seguiré;\npongo en Jesús mí humilde fe.\nLo que sufrió en Getsemaní\ny en el Calvario fue por mí.",
      "Grato es su voluntad hacer\ny por su mano guiado ser.\nEn sus pisadas quiero ir,\nsiéndole fiel hasta el morir.",
      "Sigo adelante sin temor,\nfiando por siempre en mi Señor.\nFeliz un día yo veré"
    ],
    coro: "Cristo por siempre vivirá,\nme cuidará y me guiará.\nEl es mi amigo fiel, yo sé,\nporque al Calvario por mí fue.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_415.mp3"
    }
  },
  {
    id: 416,
    numero: 416,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, mi Piloto Sé",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo mi piloto sé\nen el tempestuoso mar.\nFieras ondas mi bajel\nvan a hacerlo zozobrar.\nMas si tú conmigo vas,\npronto al puerto llegaré.\nCarta y brújula hallo en ti.\n¡Cristo mi piloto sé!",
      "Todo agita el huracán\ncon indómito furor;\nmas los vientos cesarán\nal mandato de tu voz.\nY al decir que haya paz,\ncederá sumiso el mar.\nDe las aguas, tu el Señor,\neres mi piloto fiel.",
      "Cuando al fin cercano esté\nde la playa celestial,\nsi el abismo ruge aún\nentre el puerto y mi bajel,\nEn tu pecho al descansar\nquiero oír tu voz decir:\ntu piloto siempre soy\"."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_416.mp3"
    }
  },
  {
    id: 417,
    numero: 417,
    categoria: "A",
    copyright: false,
    titulo: "En Brazos del Maestro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En brazos del Maestro,\nsegura y sin temor,\nreposa el alma mía\nen su eternal amor.\nQue rujan tempestades\ny recio vendaval,\n¡mi Dios está conmigo,\nno temeré el mal!\n¡Mi Dios está conmigo,\nno temeré el mal!",
      "Donde el Señor me guíe\ncontento siempre iré.\nA mi Pastor amante,\nconfiado seguiré.\nSu voz me reconforta,\nsu faz es cual la luz.\nRecorro mi camino\nsiguiendo al buen Jesús;\nrecorro mi camino\nsiguiendo al buen Jesús.",
      "Veré las deleitosas\nPraderas del Edén,\ncual nunca aquí se ven.\nMi alma lo desea;\nes grande el galardón,\nJesús, mí don preciado,\nme da su salvación;\nJesús, mi don preciado,\nme da su salvación."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_417.mp3"
    }
  },
  {
    id: 418,
    numero: 418,
    categoria: "A",
    copyright: false,
    titulo: "Siempre el Salvador Conmigo!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Siempre el Salvador conmigo!\nNada soy sin su poder.\nSu presencia necesito:\nvoy, sin él, a perecer.",
      "¡Siempre el Salvador conmigo!\nPuédeme la fe faltar.\nSus palabras me consuelan;\ncual él nadie puede hablar.",
      "¡Siempre el Salvador conmigo!\nIlumíneme su faz\nen la calma, en la tormenta,",
      "¡Siempre el Salvador conmigo!\nSus consejos me guiarán\nhasta que esté en la orilla\nanhelada del Jordán."
    ],
    coro: "Me guiará mi Salvador;\nhoy en él confiaré.\nCon amor donde él me lleve\nsus pisadas seguiré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_418.mp3"
    }
  },
  {
    id: 419,
    numero: 419,
    categoria: "A",
    copyright: false,
    titulo: "Cerca, más Cerca",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cerca, más cerca, Cristo, de ti,\nfiel Salvador y mi eterno solaz;\nguárdame junto a tu corazón;\nsiempre me abrigue ese Puerto de paz,\nsiempre me abrigue ese Puerto de paz.",
      "Cerca, más cerca; nada traeré,\nnada de mérito, aI pie de tu cruz;\nsólo mi herido y vil corazón,\nporque en tu sangre lo limpies, Jesús,\nporque en tu sangre lo limpies, Jesús.",
      "Cerca, más cerca: tuyo seré;\ndejo con gozo el pecado falaz,\ntodo su orgullo, pompa y placer;\nCristo inmolado es mi eterno solaz,\nCristo inmoIado es mi eterno solaz.",
      "Cerca, más cerca hasta el fin,\nhasta que ancle en el Puerto de amor,\ndo por los siglos viva feliz,\ncerca, más cerca, de mi Salvador,\ncerca, más cerca, de mi Salvador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_419.mp3"
    }
  },
  {
    id: 420,
    numero: 420,
    categoria: "A",
    copyright: false,
    titulo: "Cariñoso Salvador",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cariñoso Salvador\nhuyo de la tempestad\na tu seno protector,\nfiándome de tu bondad.\nSálvame, Señor Jesús,\nde las olas, del turbión;\nHasta el puerto de salud\nguía tu mi embarcación.",
      "Otro asilo aqul no hay,\nindefenso acudo a ti;\nMi necesidad me trae,\nporque mi peligro vi.\nSolamente en ti, Señor,\nhallo paz, consuelo y luz;\nVengo lleno de temor\na los pies de mi Jesús.",
      "Cristo, encuentro en ti poder,\ny no necesito más;\nMe levantas, al caer;\ndébil, ánimo me das.\nAl enfermo das salud,\nvista das al que no ve.\ntu bondad ensalzaré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_420.mp3"
    }
  },
  {
    id: 421,
    numero: 421,
    categoria: "A",
    copyright: false,
    titulo: "Nada puede ya faltarme",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nada puede ya faltarme,\nporque Dios mis pasos guía\na la tierra saludable,\nen divinos frutos rica.\nDulce néctar de reposo\nson sus aguas cristalinas;\nellas dan, salud al alma\ny la llenan de delicias.",
      "Por la senda me conduce\nde su ley, con mano pía,\npor amor a su gran nombre,\nfuente viva de justicia.\nCuando el tenebroso valle\ncruce de la muerte fría,\nno tendré temor alguno\nsiendo Dios el que me guía.",
      "Con su vara y su cayado\nme dará consuelo y vida,\ny ante los que me persiguen\nmesa me pondrá, surtida.\nCon el bálsamo divino\nmi cabeza aromatiza,\nque me colma de alegría.",
      "La misericordia santa\nseguirá la senda mía,\ny de Dios en las mansiones\nmoraré por largos días.\nNada puede ya faltarme\nporque Dios mis pasos guía\na la tierra saludable,\nen divinos frutos rica."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_421.mp3"
    }
  },
  {
    id: 422,
    numero: 422,
    categoria: "A",
    copyright: false,
    titulo: "Divina Luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Divina Luz, con tu esplendor benigno guarda mi pie,\ndensa es la noche y áspero el camino; mi guía se.\nHarto distante de mi hogar estoy;\nque al dulce hogar de las alturas voy.",
      "Amargos años hubo en que tu gracia no supliqué;\nde mi valor fiando en la eficacia, no tuve fe;\nmas hoy deploro aquella ceguedad;\npréstame, oh Luz, tu grata claridad.",
      "Al guiarme tú por noche esplendente, yo cruzaré\nel valle, el monte, el risco y el torrente, con firme píe;\nhasta que empiece el día a despuntar.\nY entre yo en mí celeste hogar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_422.mp3"
    }
  },
  {
    id: 423,
    numero: 423,
    categoria: "A",
    copyright: false,
    titulo: "Jesús me Guía",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús me guía. ¡Cuánta paz\nhe hallado en dicho tan veraz!\nEn todo afán seguro estoy,\npues Dios me guarda; suyo soy.",
      "Ayer tinieblas y vaivén;\nmañana un florido Edén.\nBonanza en torno o tempestad,\nme ampara siempre su bondad.",
      "Señor, la mano que me das,\ncontento tomo de hoy en más.\nAcepto alegre el porvenir,",
      "Y terminado mi quehacer,\nen mí probado tu poder,\nla muerte misma no huiré,\npues aun allí contigo iré."
    ],
    coro: "Jesús me guía, esto sé;\nsu propia mano me guiará.\nEn toda senda oscura aquí\nel Salvador conmigo va.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_423.mp3"
    }
  },
  {
    id: 424,
    numero: 424,
    categoria: "A",
    copyright: false,
    titulo: "Nunca Desmayes",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nunca desmayes, que en el afán\nDios cuidará de ti;\nsus fuertes alas te cubrirán;\nDios cuidará de ti.",
      "En duras pruebas y en aflicción,\nDios cuidará de ti;\nen tus conflictos y en tentación,\nDios cuidará de ti.",
      "De sus riquezas te suplirá;\nDios cuidará de ti;\njamás sus bienes te negará;",
      "Que vengan pruebas o cruel dolor,\nDios cuidará de ti;\ntus cargas pon sobre el Salvador;\nDios cuidará de ti."
    ],
    coro: "Dios cuidará de ti;\nvelando está su tierno amor;\nsí, cuidará de ti,\nDios cuidará de ti.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_424.mp3"
    }
  },
  {
    id: 425,
    numero: 425,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, Tu Voluntad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, tu voluntad\nhágase siempre en mí.\nConfiado en tu bondad,\nsiempre andaré aquí.\nEn medio del dolor,\no en medio de la paz,\nme rodeará tu amor\ny la gloria de tu faz.",
      "Cristo, tu voluntad\nhago sin vacilar.\n¡Oh!, quita mi maldad\ny en tu senda hazme andar.\nLloraste tú también;\nconfiado a ti iré.\n¡Oh Salvador, mi bien,\nconsuelo mío sé!",
      "Cristo, tu voluntad\ngustoso acataré.\nLo haré con lealtad\ny en ti yo viviré.\nMe gozo en recorrer\ntus sendas de bondad,\ny hacer tu voluntad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_425.mp3"
    }
  },
  {
    id: 426,
    numero: 426,
    categoria: "A",
    copyright: false,
    titulo: "Alma Mía, Espera en tu Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Alma mía, espera en tu Señor;\ntoda tu confianza pon en su amor.\nEl te dará su infinita paz;\ntodos tus pesares él disipará,\ny en la tormenta te sostendrá.\nPronto la mañana de luz vendrá.",
      "Alma mía, espera en tu Señor;\ntoda tu confianza pon en su amor.\nCuando el dolor hiera sin piedad,\necha en él tu carga y descansarás.\nEn la zozobra y en el pesar,\nsólo Jesucristo te ofrece paz.",
      "Alma mía, espera en tu Señor;\ntoda tu confianza pon en su amor.\nPronto el dolor ha de terminar,\ny los sufrimientos no tendrán lugar.\nEterno gozo él te dará\ny la tierra nueva será tu hogar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_426.mp3"
    }
  },
  {
    id: 427,
    numero: 427,
    categoria: "A",
    copyright: false,
    titulo: "¿Oyes cómo Jesucristo?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Oyes cómo Jesucristo\nal cansado ofrece paz?\nPues segura, oh alma mía,\nla promesa a ti se da.\nBien alguno en mí no veo;\ncorrupción tan sólo hay;\nyo, cansado y afligido,\nbusco alivio con afán.",
      "En el arca la paloma\nencontró do reposar;\npara mi alma atribulada\narca el Señor será.\nCombatido vengo, y crece\nel diluvio sin cesar;\nabre, Cristo, y en vano\nrugirá la tempestad.",
      "Amparada ya en tus brazos\npuede el alma respirar;\nel reposo que prometes\nsiempre da segura paz.\n¡Oh!, cuán dulce en mis oídos\nfue tu acento celestial;\nsólo en mí podrás hallar\"."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_427.mp3"
    }
  },
  {
    id: 428,
    numero: 428,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Jesús, Pastor divino!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh Jesús, Pastor divino!\nAcudimos a rogar\nque desciendas amoroso\ntus corderos a buscar.\n¡Oh Pastor!, ven, tu rebaño\nte reclama sin cesar,\nte reclama sin cesar.",
      "Al herido del pecado\nno le dejes sucumbir;\nal que va por otra senda\ndéjale tu voz oir.\n¡Ven, Pastor!, el lobo llega\ny nos quiere destruir,\ny nos quiere destruir.",
      "Guíanos por tus senderos\nal aprisco del amor;\nllévanos cual corderitos\nen tu seno bienhechor.\nGuía, sí, a tus corderos,\namantísimo Pastor,\namantísimo Pastor.",
      "Oye, Cristo, nuestro ruego,\nven, ampara a tu rebaño\ncon tu santa protección.\nTe lo piden tus corderos\ncon humilde corazón,\ncon humilde corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_428.mp3"
    }
  },
  {
    id: 429,
    numero: 429,
    categoria: "A",
    copyright: false,
    titulo: "Paso a Paso Dios me Guía",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Paso a paso Dios me guía;\n¿qué más puedo ya pedir?\nNunca dudo de su gracia,\npues conmigo puede ir.",
      "Paso a paso Dios me guía;\ngozo siempre al alma da;\nfuerza da al que es tentado;\nlo alimenta del maná.",
      "Paso a paso Dios me guía.\nDe mi afán fatigador,\nel descanso ha prometido\nen su reino mi Señor."
    ],
    coro: "Paz divina y consuelo\nal confiar en él tendré,\npues si algo sucediere,\nCristo lo sabrá muy bien;\npues si algo sucediere,\nCristo lo sabrá muy bien.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_429.mp3"
    }
  },
  {
    id: 430,
    numero: 430,
    categoria: "A",
    copyright: false,
    titulo: "Si la Fe me Abandonare",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si la fe me abandonare,\nÉl me sostendrá.\nSi el mal me amenazare,\nÉl me sostendrá.",
      "Nunca yo podrá afirmarme\ncon tan débil fe;\nMas El puede dirigirme,\ny me sostendrá.",
      "Son su gozo y complacencia\ncuantos Él salvó,\nY al salvarme su clemencia,\nÉl me sostendrá.",
      "Él no quiso ver perdida\nmi alma en la maldad;\nDio su sangre por mi vida,\ny Él me sostendrá."
    ],
    coro: "Él me sostendrá,\nÉl me sostendrá.\nPorque me ama el Salvador,\nÉl me sostendrá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_430.mp3"
    }
  },
  {
    id: 431,
    numero: 431,
    categoria: "A",
    copyright: false,
    titulo: "Tengo en Dios un Grande Amor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tengo en Dios un grande amor;\nquiero en él tan sólo fiar,\npues así mi corazón\nnunca habrá de desmayar.",
      "Si hay tormenta en derredor,\nsí es furioso su bramar,\nsiempre fiando en ti, Señor,\nnunca habré de desmayar.",
      "Lleva mi alma, buen Pastor,\nhaz tu rostro en mí brillar;\nque al abrigo de tu amor\nnunca pueda desmayar.",
      "¡Oh querido Redentor!,\nno me dejes extraviar.\nAunque viva en el dolor,\nnunca quiero desmayar"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_431.mp3"
    }
  },
  {
    id: 432,
    numero: 432,
    categoria: "A",
    copyright: false,
    titulo: "Si la Carga es Pesada",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si la carga es pesada\nmirad a Dios;\nsí vuestra alma está cansada,\nmirad a Dios.",
      "El deber os llama, hermanos,\nmirad a Dios;\npues dejad placeres vanos,\nmirad a Dios.",
      "Cuando el mal parece fuerte,\nmirad a Dios;\nsi os espanta aún la muerte,"
    ],
    coro: "Levantad la vista al cielo,\nmirad a Dios;\nsí vuestra alma está cansada,\nmirad a Dios.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_432.mp3"
    }
  },
  {
    id: 433,
    numero: 433,
    categoria: "A",
    copyright: false,
    titulo: "Contigo Quiero Andar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Contigo quiero andar, oh Dios,\ndel fiel Enoc siguiendo en pos.\nMi temblorosa mano ten;\ntu dulce voz calme el vaivén.\nLa senda oscura al transitar,\nJesús, contigo quiero andar.",
      "No puedo solo andar, Señor:\ntormentas rugen en redor,\nrodéanme engaños mil,\nme acosa el enemigo vil.\n¡Oh, calma el borrascoso mar!\nJesús, contigo quiero andar.",
      "Mi mano ten, pues; de hoy en más,\ndel mundo el bien dejando atrás,\nvaliente seguiré tu luz,\ncon la bandera de la cruz.\nEspero en Síon poder entrar,\ndo yo contigo quiero andar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_433.mp3"
    }
  },
  {
    id: 434,
    numero: 434,
    categoria: "A",
    copyright: false,
    titulo: "Guíame, ¡oh Salvador!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Guíame, ¡oh Salvador!\nPor la senda de salud.\nA tu lado no hay temor;\nsolo hay gozo, paz, quietud.",
      "No me dejes, ¡oh Señor!\nMientras en el mundo esté.\nHaz que arribe, sin temor,\ndonde en ti descansaré.",
      "Tu, de mi alma salvación\nen la ruda tempestad\nAl venir la tentación"
    ],
    coro: "¡Cristo! ¡Cristo!\n¡No me dejes, oh Señor!\nSiendo tu mi guía fiel,\nsaldré más que vencedor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_434.mp3"
    }
  },
  {
    id: 435,
    numero: 435,
    categoria: "A",
    copyright: false,
    titulo: "¡Cuán Firme es de Tu Iglesia!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Cuán firme es de tu iglesia\nel cimiento, oh Dios de luz,\npues es tu amado Hijo,\nel bendito Rey Jesús!\nEl trono de los cielos\nde grado abandonó,\ny por su amada iglesia\nsu vida entregó.",
      "Es una la esperanza\ny una es nuestra fe,\ny uno es el bautismo\ndoquiera que se esté.\nDe todas las naciones.\nunidos, oh Señor,\ntus hijos hoy te buscan\ny cantan tu loor.",
      "Astutos enemigos\nla quieren destruir;\nfundada en la Roca\nla vemos resistir.\nTus hijos te suplican\nque no demores más.\nen gloría volverás.",
      "En medio de aflicciones\ny luchas por doquier\ntu iglesia alerta aguarda:\ntu gloria anhela ver;\ny cuando aparecieres\nen gloria y majestad,\ntu iglesia victoriosa\ntendrá la libertad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_435.mp3"
    }
  },
  {
    id: 436,
    numero: 436,
    categoria: "A",
    copyright: false,
    titulo: "Sagrado es el Amor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sagrado es el amor\nque nos ha unido aquí\nA los que oímos del Señor\nla voz que llama así.",
      "A nuestro buen Jesús\nrogamos con fervor;\nQue alúmbrenos la misma luz,\nnos una el mismo amor.",
      "Nos vamos a separar,\nmas nuestra firme unión\nJamás podráse quebrantar\npor la separación.",
      "Nos hemos de encontrar\nen celestial reunión;\nQue nadie haya de faltar\nen la eterna Sión."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_436.mp3"
    }
  },
  {
    id: 437,
    numero: 437,
    categoria: "A",
    copyright: false,
    titulo: "Oh Dios, Escucha con Bondad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Dios, escucha con bondad\nla férvida oración\nque eleva al trono de piedad\nesta congregación.",
      "A cada miembro de tu grey\nmantén en tu fervor;\nque acepte, oh Dios, tu santa ley,\nque siga al buen Pastor.",
      "Propicio, danos gracia y luz\nque abunden más y más;\nque alcemos con valor la cruz\nsin desmayar jamás.",
      "Doquier, y en toda tentación,\nsosténganos tu amor.\nConcédenos la salvación\ny el gozo del Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_437.mp3"
    }
  },
  {
    id: 438,
    numero: 438,
    categoria: "A",
    copyright: false,
    titulo: "Iglesia de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Iglesia de Cristo,\nreanima tu amor\ny espera, velando,\na tu augusto Señor.\nJesús, el Esposo,\nvestido de honor,\nviniendo se anuncia\ncon fuerte clamor.",
      "Si falta en algunos\nel santo fervor,\nla fe sea en todos\nel despertador.\nVelad, compañeros,\nvelad sin temor,\nque está con nosotros\nel Consolador.",
      "Quien sigue la senda\ndel vil pecador,\nse entrega en los brazos\nde un sueño traidor.\nMas para los siervos\ndel buen Salvador,\nes su anhelo mejor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_438.mp3"
    }
  },
  {
    id: 439,
    numero: 439,
    categoria: "A",
    copyright: false,
    titulo: "En tu Nombre Comenzamos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En tu nombre comenzamos\nesta escuela, ¡oh Señor!\nCon fervor te suplicamos\nseas nuestro Director.",
      "Esta escuela nos enseña\ntu Palabra a obedecer,\nY tu Ley en nuestra vida\nante el mundo a enaltecer.",
      "Ven, Señor, a enseñarnos\ntus preceptos a cumplir\nYa reunidos, esperamos"
    ],
    coro: "Cada sábado venimos\na tu escuela, ¡oh Jesús!\nVen, Señor, a instruirnos\nen la ciencia de la cruz.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_439.mp3"
    }
  },
  {
    id: 440,
    numero: 440,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh, Cuánto me eres Cara!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, cuánto me eres cara,\nescuela del Señor!\nMi alma está ligada\na ti por el amor.\nEn esta escuela todos\nloamos a Jesús,\nquien nuestra deuda enorme\npagó allá en la cruz.",
      "Se estudia el Evangelio,\nde Dios la salvación\nSe adora al que nos brinda\ncompleta redención,\nPor ti, querida escuela,\ndoy gracias a mi Dios,\nPues tú por vez primera\nme hiciste oír su voz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_440.mp3"
    }
  },
  {
    id: 441,
    numero: 441,
    categoria: "A",
    copyright: false,
    titulo: "Oigo del Señor la Voz Llamando",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oigo del Señor la voz llamando:\n\"¿Quíén irá este día a trabajar?\"\n¿Quién me traerá a los perdidos?\n¿Quién la senda angosta mostrará?\"",
      "Cuando el mismo Dios tocó al profeta,\ndándole un nuevo corazón,\ny éste oyó la voz que le llamaba:\n\"Heme aquí\", él pronto contestó.",
      "Muchos miles y millones mueren,\nen la más completa oscuridad;\nanda pronto tú a rescatarlos;",
      "Pronto ya no habrá misericordia\npara esta pobre humanidad,\ny entonces se oirá al Maestro\nque dirá: \"Bien hecho, siervo fiel\"."
    ],
    coro: "Habla, oh Dios, háblame;\nhabla, y pronto te contestaré;\nhabla, oh Dios, háblame,\nhabla, y yo respondo: \"Heme aquí\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_441.mp3"
    }
  },
  {
    id: 442,
    numero: 442,
    categoria: "A",
    copyright: false,
    titulo: "En la Montaña Podrá no Ser",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la montaña podrá no ser,\nni sobre rugiente mar;\npodrá no ser en la ruda lid\ndo Cristo me quiera emplear.\nMas si él me ordenare seguir aquí\nsenderos que yo ignoré,\nsumiso a él, le diré: \"¡Señor,\ndo tú quieras que vaya iré!\"",
      "Quizá hay palabras de santo amor\nque Cristo me ordena hablar,\ny en los caminos do reina el mal\na algún pecador salvar.\nSeñor, si quisieres mi guía ser;\nmi oscura senda andaré,\ntu fiel mensaje podré anunciar\ny así lo que quieras diré.",
      "El vasto mundo lugar tendrá\ndo pueda con noble ardor\ngastar la vida que Dios me da\npor Cristo mi Salvador.\nY siempre confiando en tu gran bondad\ntus dones todos tendré,\ny alegre haciendo tu voluntad,\nlo que quieras que sea, seré."
    ],
    coro: "\"Do tú necesites que vaya iré,\na los valles, los montes o el mar.\nDecir lo que quieras, Señor, podré,\nlo que quieras que sea, seré!\"",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_442.mp3"
    }
  },
  {
    id: 443,
    numero: 443,
    categoria: "A",
    copyright: false,
    titulo: "Cristo está Buscando Obreros",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo está buscando obreros hoy\nque quieran ir con él.\n¿Quién dirá: \"Señor, contigo voy,\nyo quiero serte fiel\"?",
      "Cristo quiere mensajeros hoy\nque anuncien su verdad.\n¿Quién dirá: \"Señor, yo listo estoy,\nharé tu voluntad\"?",
      "Hay lugar sí quieres trabajar\npor Cristo en su labor.\nPuedes de su gloria al mundo hablar,",
      "¿Vives ya salvado por Jesús?\n¿Su amor conoces ya?\n¡Habla pues, anuncia que en la luz\nde Cristo vives ya!"
    ],
    coro: "¡Oh Señor!, es mucha tu labor,\ny obreros faltan ya;\ndanos luz, ardiente fe y valor,\ny obreros siempre habrá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_443.mp3"
    }
  },
  {
    id: 444,
    numero: 444,
    categoria: "A",
    copyright: false,
    titulo: "Si en Valles de Peligros",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si en valles de peligros\nyo tengo que pasar,\no si por altas cumbres\nen paz me toca andar;\nYa que seguro estoy\nsi en sol o sombra voy,\nA cualquiera parte,\niré con Jesús.",
      "Si el agua de la vida\nes mi deber llevar,\nAl pecador rendido\npor yermo al transitar;\nllevar su amor allí,\nCon tal que El me guíe,\niré con Jesús.",
      "Mas si es mi suerte en casa\nla santa cruz llevar,\nCuando otros la pregonan\nallende el ancho mar;\npor prueba de mi fe,\nsu fallo aceptaré\ny do Él me acompañe\niré con Jesús.",
      "De cuando manda Cristo\nno debo yo dudar;\nmás bien seguir fielmente\nla voz que me ha de guiar.\nSi quedo, pues, o voy,\ncontento siempre estoy,\npues doquiera tengo\nconmigo a Jesús."
    ],
    coro: "A cualquiera parte, iré\ncon Jesús;\ndoquiera que esté,\ndel cielo tendré\nla santa luz.\nEs mi privilegio aquí\nllevar su cruz;\niré, pues, a cualquiera parte\ncon Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_444.mp3"
    }
  },
  {
    id: 445,
    numero: 445,
    categoria: "A",
    copyright: false,
    titulo: "Pronto la Noche Viene",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Pronto la noche viene,\ntiempo es de trabajar;\nlos que lucháis por Cristo,\nno hay que descansar,\ncuando la vida es sueño,\ngozo, vigor, salud,\ny es la mañana hermosa\nde la juventud.",
      "Pronto la noche viene,\ntiempo es de trabajar;\npara salvar al mundo\nhay que batallar,\ncuando la vida alcanza\ntoda su esplendidez,\ncuando es el mediodía\nde la madurez.",
      "Pronto la noche viene,\ntiempo es de trabajar;\nSi el pecador perece,\nidle a rescatar,\naun a la edad provecta,\ndébil y sin salud,\nde la senectud.",
      "Pronto la noche viene,\n¡listos a trabajar!\n¡Listos!, que muchas almas\nhay que rescatar.\n¿Quién de la vida el día\npuede desperdiciar?\n\"Viene la noche cuando\nnadie puede obrar\"."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_445.mp3"
    }
  },
  {
    id: 446,
    numero: 446,
    categoria: "A",
    copyright: false,
    titulo: "De Heladas Cordilleras",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De heladas cordilleras,\nde playas de coral,\nde etiópicas riberas,\ndel mar meridional,\nnos llaman afligidas,\na darles libertad,\nnaciones sumergidas\nen densa oscuridad.",
      "Nosotros, alumbrados\nde celestial saber,\n¿a tantos desgraciados\nveremos perecer?\nA todos, pues, llevemos\ngratuita salvación;\nel Nombre proclamemos\nque trae la redención.",
      "Llevada por los vientos\nla historia de la cruz,\ndespierte sentimientos\nde amor al buen Jesús;\nprepare corazones,\nenseñe su verdad\nsegún su voluntad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_446.mp3"
    }
  },
  {
    id: 447,
    numero: 447,
    categoria: "A",
    copyright: false,
    titulo: "Escuchad, Jesús nos Dice",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Escuchad, Jesús nos dice:\n\"¿Quiénes van a trabajar?\nCampos blancos hoy aguardan\nque los vayan a segar\".\nEl nos llama, cariñoso,\nnos constriñe con su amor.\n¿Quién responde a su llamada:\n\"Heme aquí, voy yo, Señor\"?",
      "Si por tierras o por mares\nno pudieres transitar,\npuedes encontrar hambrientos\nen tu puerta que auxiliar.\nSí careces de riquezas.\nlo que dio la viuda da;\npues si por Jesús lo dieres,\nél te recompensará.",
      "Sí como elocuente apóstol\nno pudieres predicar,\npuedes de Jesús decirles\ncuánto al hombre supo amar.\nSi no logras que sus culpas\nreconozca el pecador,\nal benigno Salvador."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_447.mp3"
    }
  },
  {
    id: 448,
    numero: 448,
    categoria: "A",
    copyright: false,
    titulo: "¡Ve, ve oh Sion!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Ve, ve oh Sion! tu gran destino cumple;\nque Dios es luz al mundo proclamad;\nque el Hacedor de las naciones quiere\nque nadie muera en densa oscuridad.",
      "Ve cuántos miles yacen todavía\nen las oscuras cárceles del mal;\nno saben que de Cristo la agonía\nfue para darles vida celestial.",
      "Es tu deber que salves de la muerte\nlas almas por las cuales El murió.\nSé fiel, si no culpable quieres verte\nDe que se pierda lo que Dios compró.",
      "Tus hijos manda con el gran mensaje;\ncon tu caudal impulso a ellos da.\nEn oración sustenta, fiel, sus almas,\nque cuanto gastes Cristo pagará."
    ],
    coro: "Alegres nuevas al mundo dad,\nnuevas de redención, de amor y libertad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_448.mp3"
    }
  },
  {
    id: 449,
    numero: 449,
    categoria: "A",
    copyright: false,
    titulo: "¡Señor!, la Mies es Mucha",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Señor!, la mies es mucha,\nson pocos los obreros;\nlevanta misioneros\nen ésta, tu nación;\ny haz que tu Evangelio\nresuene por doquiera,\ny toda la ancha tierra\nobtenga salvación.",
      "Las sombras disipando\nde todos los errores,\nesparza sus fulgores\ncual esplendente luz,\ny anuncie a los mortales\nque borra su pecado\nel que menospreciado\nmurió sobre la cruz.",
      "No más profanos ritos,\nno más supersticiones;\na Dios los corazones,\npues suyos son, se den.\nDel Hijo sacrosanto\nse alabe el dulce nombre,\nsalud, reposo y bien."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_449.mp3"
    }
  },
  {
    id: 450,
    numero: 450,
    categoria: "A",
    copyright: false,
    titulo: "Hay Lugar en la Amplia Viña",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay lugar en la amplia viña\npara todo labrador;\nven y ayuda en la campiña\ndel amante Salvador.\nHoy esperan muchas almas\nla salud espiritual;\ndiles que Jesús las llama\na su reino celestial.",
      "Quiero ser un buen maestro\ncomo fuera el Redentor;\ndar la Biblia al mundo entero,\ndonde encuentre salvación.\nA los que le han conocido\na salvar a los perdidos\npor los cuales él murió.",
      "Con las huestes celestiales\nante el trono de Jesús\nhan de unirse los mortales\nredimidos por la cruz.\nY con gozo allá en la gloria\ncantaremos la canción\nde los triunfos y victorias\nque nos dieron redención."
    ],
    coro: "Un lugar propicio quiero\ndonde pueda trabajar;\naunque humilde, yo prefiero\nir de Cristo a predicar;\ndarla luz de Cristo al mundo\nque se encuentra en perdición,\nha de ser celo profundo\nque domine el corazón.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_450.mp3"
    }
  },
  {
    id: 451,
    numero: 451,
    categoria: "A",
    copyright: false,
    titulo: "La Historia de Cristo Contemos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La historia de Cristo contemos,\nque dará al mundo la luz;\nla paz y el perdón anunciemos,\ncomprados en cruenta cruz,\ncomprados en cruenta cruz.",
      "La historia de Cristo daremos\nal mortal que ignora su amor;\nnos dio Dios su Hijo, diremos,\nhallamos en él favor,\nhallamos en él favor.",
      "A Jesús todos confesaremos,\nsus méritos invocaremos,\ny Dios nos dará el perdón,\ny Dios nos dará el perdón."
    ],
    coro: "Rescatónos de las tinieblas,\ndisipó nuestra oscuridad;\nél nos salvó, nuestra paz compró,\nnos dio luz y libertad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_451.mp3"
    }
  },
  {
    id: 452,
    numero: 452,
    categoria: "A",
    copyright: false,
    titulo: "Escuchamos tu Llamada",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Escuchamos tu llamada,\nrespondemos con placer\nUna lealtad constante,\nnuestro voto debe ser.",
      "Dondequiera tu nos guíes,\nvengan pruebas o desdén,\nseguiremos tu llamado;\nsolo da la orden: \"Ven\".",
      "Tu nos diste aptitudes,\nque debemos emplear;\nnuestro tiempo todo es tuyo,",
      "Danos una gran tarea;\nla esperamos hoy, Señor.\nCon placer la cumpliremos,\ncon arrojo y sin temor."
    ],
    coro: "A ti, oh Jesús, damos todo nuestro ser,\npues la juventud redimiste para ti.\nCon talentos consagrados, empeñados en servir,\nla juventud del mundo de Cristo ha de ser.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_452.mp3"
    }
  },
  {
    id: 453,
    numero: 453,
    categoria: "A",
    copyright: false,
    titulo: "Jesús está Buscando Voluntarios Hoy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús está buscando voluntarios hoy,\nque a la ruda lucha luego puedan ir;\n¿quién está dispuesto a escuchar su voz\nsiendo voluntario, listo a combatir?",
      "Nos cercan las tinieblas densas del error,\nvamos sobre abismos hondos de maldad,\ny para destruirlas llama el Salvador\nmuchos voluntarios que amen la verdad.",
      "La lucha es contra el vicio, la pereza, el mal,\ncontra la ignorancia de la ley de Dios;",
      "El triunfo significa que domine el bien,\nque los hombres se amen, y que la verdad\nreine en las conciencias, siendo su sostén,\ny ha de ser, sí ayudas, una realidad."
    ],
    coro: "De Cristo voluntario tú puedes ser;\notros ya se alistan, hazlo tú;\nCristo es nuestro jefe, no hay por qué temer.\n¿Quieres ser un voluntario de Jesús?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_453.mp3"
    }
  },
  {
    id: 454,
    numero: 454,
    categoria: "A",
    copyright: false,
    titulo: "Honra al Hombre de Valor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Honra al hombre de valor,\npronto a obedecer\nel mandato del Señor,\ntal cual lo fue Daniel.",
      "Muchos yacen sin valor,\nque pudieran ser\nNobles héroes del Señor,\ntal cual lo fue Daniel.",
      "Lucha en nombre del Señor\nsin desfallecer\nSe en la lucha vencedor,"
    ],
    coro: "A Daniel imita;\ndalo a conocer;\nmuéstrate resuelto y firme,\naunque solo estés.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_454.mp3"
    }
  },
  {
    id: 455,
    numero: 455,
    categoria: "A",
    copyright: false,
    titulo: "Hoy nos Toca Trabajar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy nos toca trabajar,\nhay batallas que ganar\ny nos pide el Capitán:\nvoluntad, voluntad.\nAl sonido del clarín,\npresurosos acudid,\njóvenes, jóvenes,\nM.V.",
      "Los soldados de Satán\nderrotados quedarán.\nCerca el triunfo vemos ya,\n¡voluntad, voluntad!\nLa armadura hoy vestid,\nadelante proseguid,\nJóvenes, jóvenes,",
      "La victoria es nuestra ya,\nSatanás vencido está.\nA ninguno ha de faltar\nvoluntad, voluntad.\nSi este triunfo obtenéis,\nel laurel alcanzaréis,\njóvenes, jóvenes,\nM.V."
    ],
    coro: "Cristo es nuestro Capitán,\nfirmes avanzad.\nAlmas hay que rescatar,\nid sin vacilar,\njóvenes, jóvenes,\nM.V.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_455.mp3"
    }
  },
  {
    id: 456,
    numero: 456,
    categoria: "A",
    copyright: false,
    titulo: "Habla a tu Dios de Mañana",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Habla a tu Dios de mañana,\nháblale al mediodía;\nhabla a tu Dios en la noche,\ny dale tu corazón.",
      "Oye a tu Dios de mañana,\nóyele al mediodía;\noye a tu Dios en la noche,\ny dale tu corazón.",
      "Venga el Señor de mañana,\nvenga en el mediodía;\nvenga el Señor en la noche,\nprepara tu corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_456.mp3"
    }
  },
  {
    id: 457,
    numero: 457,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Jóvenes, Venid!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, jóvenes, venid!\nSu brillante pabellón\nCristo ha desplegado\nante la nación.\nA todos en sus filas\nos quiere recibir,\nY consigo a la pelea\nos hará salir.",
      "¡Oh, jóvenes, venid!\nEl Caudillo Salvador\nquiere recibiros\nen su derredor;\ncon El a la batalla\n¡Vamos presto, compañeros,\nvamos a luchar!",
      "Las armas invencibles\ndel Jefe Guiador\nson el Evangelio\ny su gran amor.\nCon ellos revestidos\ny llenos de poder,\n¡compañeros, acudamos,\nvamos a vencer!",
      "Quien venga a la pelea\nsu voz escuchará;\nCristo la victoria\nle concederá;\nSalgamos, compañeros,\nluchemos bien por él;\ncon Jesús conquistaremos\ninmortal laurel."
    ],
    coro: "¡Vamos con Jesús,\nalistados sin temor!\n¡Vamos a la lid,\ninflamados de valor!\nJóvenes, luchemos\ntodos contra el mal,\nque en Jesús tenemos\nnuestro General.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_457.mp3"
    }
  },
  {
    id: 458,
    numero: 458,
    categoria: "A",
    copyright: false,
    titulo: "Yo Tengo Gozo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo tengo gozo, gozo, en mi corazón;\nen mi corazón, en mi corazón;\nyo tengo gozo, gozo, en mi corazón.\n¡Gloria sea a nuestro Dios!.",
      "Yo tengo gozo, paz y alegría en mi corazon;\nen mi corazón, en mi corazón;\nyo tengo gozo, paz y alegría en mi corazón.\n¡Gloria sea a nuestro Dios!",
      "Yo tengo a Cristo, Cristo, en mi corazón;\nen mi corazón, en mi corazón;\nyo tengo a Cristo, Cristo en mi corazón.\n¡Gloria sea a nuestro Dios!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_458.mp3"
    }
  },
  {
    id: 459,
    numero: 459,
    categoria: "A",
    copyright: false,
    titulo: "Voluntario del Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Voluntario del Señor,\nlisto a servir,\na llevar el Evangelio\ny almas redimir.",
      "Quiero a mi Salvador\npresto escuchar;\ndebo siempre en su obra\nfirme trabajar.",
      "En su viña quiero obrar\ny ocupado estar,\nhasta que la salvación\nno haya que anunciar.",
      "Cuando venga el Señor,\nél me premiará,\ny su tierna voz: \"Bien hecho\nsiervo fiel\", dirá."
    ],
    coro: "Voluntad, voluntad,\nCristo me pidió.\nVoluntad, voluntad,\neso ofrezco yo;\npara Cristo quiero ser\nfiel trabajador,\nmisionero voluntario\npara el Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_459.mp3"
    }
  },
  {
    id: 460,
    numero: 460,
    categoria: "A",
    copyright: false,
    titulo: "Corazones Siempre Alegres",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Corazones siempre alegres,\nrebosando gratitud,\nsomos los que a Dios amamos,\nredimida juventud.",
      "Dios nos guía de la mano,\nnos ampara su poder;\nes su brazo poderoso\ny nos quiere defender.",
      "Si en la lucha desmayamos\no nos sitia la maldad,\ncon su gracia nos anima,",
      "Con sus fuerzas llevaremos\nmuy gozosos cruenta cruz;\nVictoriosos cantaremos\nen la gloria de su luz."
    ],
    coro: "Siempre alegres vamos todos,\nllenos de felicidad;\nhermosísimo es el camino,\nhacia la eternidad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_460.mp3"
    }
  },
  {
    id: 461,
    numero: 461,
    categoria: "A",
    copyright: false,
    titulo: "La Fuente Veo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La fuente veo carmesí,\nel ancho manantial,\nque de Jesús, mi Salvador,\nemana perennal.",
      "Soy nueva criatura en él;\nme hizo renacer,\ny el hombre viejo nunca más\nhabrá de contender.",
      "Gozoso espero ir con Jesús\na mí celeste hogar;\nallí, cual fuente, de la cruz",
      "Levántome en la luz a andar\nsobre el mundano error;\ndeseo un limpio corazón\nque agrade al Salvador."
    ],
    coro: "La fuente veo carmesí;\ncon su poder me limpia a mí.\n¡Oh, gloría a Dios! me limpia a mí,\nme limpia, ¡oh sí!, me limpia a mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_461.mp3"
    }
  },
  {
    id: 462,
    numero: 462,
    categoria: "A",
    copyright: false,
    titulo: "En lo Profundo de la Mar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En lo profundo de la mar\nel vil pecado dejaré,\ntan solo así podré morar\ncon el divino Rey.",
      "Deseo ahora consagrar\nmi vida entera al Salvador,\ny mi pecado abandonar,\nconfiando en el Señor.",
      "Mi enorme culpa al sepultar,\na vida nueva naceré;\nY para siempre iré a morar"
    ],
    coro: "En el mar dejaré mis pecados,\ndejaré, dejaré;\nnunca mas se hallarán;\ny con Cristo viviré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_462.mp3"
    }
  },
  {
    id: 463,
    numero: 463,
    categoria: "A",
    copyright: false,
    titulo: "En las Aguas de la Muerte",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En las aguas de la muerte\nsumergido fue Jesús;\nmas su amor no fue apagado\npor las penas de la cruz.\nLevantóse de la tuumba,\nsus cadenas quebrantó,\ny triunfante y victorioso\na los cielos ascendió.",
      "En las aguas del bautismo\nhoy confieso yo mi fe;\nJesucristo me ha salvado\ny en su amor me gozaré.\nEn las aguas humillado\na Jesús siguiendo voy;\ndesde ahora para el mundo\ny el pecado muerto estoy.",
      "Ya que estoy crucificado,\n¿cómo mas podré pecar?\nPor su gracia transformado,\nvida nueva he de llevar.\nA las aguas del bautismo\nme llevó la contricción;\nal que obró mi redención."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_463.mp3"
    }
  },
  {
    id: 464,
    numero: 464,
    categoria: "A",
    copyright: false,
    titulo: "Las Manos, Padre",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Las manos, Padre, extiendo a ti;\nmi fiel ayuda sé.\nSí tú no cuidas ya de mí,\n¿a quién y adónde iré?",
      "En tu Hijo amado creo yo,\nconozco tu poder.\n¡Oh!, suple mí necesidad,\nrenueva tú mi ser.",
      "Los ojos alzo a ti, Señor,\nAutor tú de la fe.\n¡Oh!, dame el tan precioso don,"
    ],
    coro: "Yo creo que en el Gólgota\nJesús por mí murió,\ny con su sangre, del pecar\na mi alma libertó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_464.mp3"
    }
  },
  {
    id: 465,
    numero: 465,
    categoria: "A",
    copyright: false,
    titulo: "Sábado Santo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sábado santo de Jehová\nes este día de solaz.\nEn él adoro al Hacedor,\ny halla mí alma así la paz,\ny halla mí alma así la paz.",
      "Todas sus horas santas son;\nnunca las vivo para mí,\ny nada vil perturba así\nmí comunión feliz con Dios,\nmí comunión feliz con Dios.",
      "Esta delicia semanal\nes anticipo aquí de Síon;\nme acerca al trono celestial\nal alentar mi devoción,\nal alentar mí devoción.",
      "Todo pesar olvido hoy;\ndejo también mí afán cruel.\nDel sábado es autor Jesús:\nríndole entonces culto a él,\nríndole entonces culto a él."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_465.mp3"
    }
  },
  {
    id: 466,
    numero: 466,
    categoria: "A",
    copyright: false,
    titulo: "¡Cuán Dulce en este Día!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Cuán dulce en este día de paz,\nde todos el mejor,\ndejar mis cuitas, y pensar\nen Cristo y en su amor!",
      "¡Cuán dulce en oración pedir:\n\"Perdona, oh Dios, mí mal\";\ncual hijo a Jehová llamar\n\"mi Padre celestial\"!",
      "¡Cuán dulce es escuchar la voz\nde quien enjugará\nel llanto de la confesión\ny al alma limpiará!",
      "Y cuando en lucha contra mí\nel enemigo esté,\ndel que conoce el corazón\nla gracia yo tendré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_466.mp3"
    }
  },
  {
    id: 467,
    numero: 467,
    categoria: "A",
    copyright: false,
    titulo: "Ya el Fin se Acerca",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ya el fin se acerca de tu día santo;\nbenigno acoge la oración, Señor,\nque te ofrecemos en humilde canto,\ncual sacrificio de agradable olor.",
      "Por las mercedes a tu amor debidas,\npor el descanso y plácido solaz,\nmil gracias sean sólo a ti rendidas,\nRey de los reyes, Príncipe de paz.",
      "Haz que del mundo la escabrosa senda\ncorrer podamos con seguro pie;\ny en los conflictos que la duda tienda,\ntu luz alumbre nuestra débil fe.",
      "Este descanso de sagrada holgura\nes de las almas celestial festín;\nnos anticipa la sin par ventura\nde aquel reposo que será sin fin."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_467.mp3"
    }
  },
  {
    id: 468,
    numero: 468,
    categoria: "A",
    copyright: false,
    titulo: "Hoy es Día de Reposo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy es día de reposo,\ndía santo de Solaz;\nes el día venturoso\nque nos trae dulce paz.\nEs el día señalado\ncon el sello del amor;\nnuestro Dios lo ha designado:\nes el día del Señor.",
      "Hoy cantamos de alegría\nal Autor del santo don,\nque nos da el festivo día\ny se goza en el perdón.\nAceptemos, pues. con gusto\nel descanso semanal,\nesperando el día augusto\ndel reposo celestial.",
      "Los que a ti nos acercamos\npor Jesús, Dios de verdad,\nhoy alegres proclamamos\ntu justicia y tu bondad.\nEn los fastos de la historia\nsiempre se celebrará\npor los siglos durara."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_468.mp3"
    }
  },
  {
    id: 469,
    numero: 469,
    categoria: "A",
    copyright: false,
    titulo: "Otros Seis Días de Labor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Otros seis días de labor\nse van, y viene el reposar.\nEn este día que Dios dio\nvuelve, alma mía, a descansar.",
      "Bendice a Cristo, cuyo amor\nreposo dulce da al mortal;\nmayor que en días de labor\nes hoy su gracia celestial.",
      "Asciendan nuestras preces cual\nincienso grato a Cristo allá,\npues el reposo que él nos da,\nde paz nuestra alma llenará.",
      "Y la dulzura de esta paz\nes prenda de la paz mejor\nque gozará el cristiano allá,\nestando junto a su Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_469.mp3"
    }
  },
  {
    id: 470,
    numero: 470,
    categoria: "A",
    copyright: false,
    titulo: "Hoy el Sábado Glorioso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy el sábado glorioso\nnos invita a descansar.\n¡Qué tranquilo es el reposo,\ntras el arduo trabajar!",
      "Dios, que el día nos señala\ncon mil pruebas de su amor,\n\"santo sábado\" lo llama:\nes el día del Señor.",
      "Para el hombre fue apartado\nen la misma creación;\nfue por Cristo sancionado\ncon su ejemploy y bendición."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_470.mp3"
    }
  },
  {
    id: 471,
    numero: 471,
    categoria: "A",
    copyright: false,
    titulo: "En Sombras de la Tarde",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En sombras de la tarde el día ya declina,\ny el sábado se anuncia con gloria vespertina.\nCual brisa refrescante en cálido camino,\ncual palma en el desierto, alivia al peregrino.",
      "Durante la jornada que ahora ha terminado\ntrabajo honesto y arduo las horas han llenado.\nAhora a tu reposo mí alma agradecida\nse entrega, y te suplica la colmes de tu vida.",
      "En este santo día anhelo tu presencia,\npues quiero sin medida gozar de tu influencia.\nMí alma fatigada en ti hallará reposo,\ny el sábado bendito daráme santo gozo."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_471.mp3"
    }
  },
  {
    id: 472,
    numero: 472,
    categoria: "A",
    copyright: false,
    titulo: "Dia santo del Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Día santo del Señor,\n¡oh cuán pronto en pasar!\nSólo vino poco ha;\nya lo vemos terminar.\nY volando al cielo va,\nfiel testigo allí será;\ny volando al cielo va,\nfiel testigo allí será.",
      "¿Qué informe llevará\nal celeste tribunal?\n¿De maldades hablará?,\n¿de cuidado mundanal?\n¿O de santa adoración,\ncon Jesús en comunión?\n¿O de santa adoración,\ncon Jesús en comunión?",
      "¡Oh, perdónanos, Señor,\nel mal uso de tu don!\nLos preceptos de tu ley\ngraba en nuestro corazón.\nEs tu sábado, Señor,\nsello santo de tu amor;\nsello santo de tu amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_472.mp3"
    }
  },
  {
    id: 473,
    numero: 473,
    categoria: "A",
    copyright: false,
    titulo: "Oh día delicioso!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh día delicioso\nde gozo, amor y paz;\nde llantos y pesares\nel bálsamo eficaz!\nEn ti, postrados ante\nsu trono celestial,\ncantamos: \"¡Santo, santo!\",\nloando al Eternal.",
      "Seguro puerto eres\nen toda tempestad,\njardín do corren ríos\nde luz y santidad.\nDivina fuente eres\nen yermo terrenal,\nla cumbre de donde vemos\nla patria celestial.",
      "Tus horas son sagradas,\nde santa reflexión,\nen que del mundo al cielo\nse eleva la afección;\nsacando gracias nuevas\nde ti al reposar,\nen nuestro eterno hogar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_473.mp3"
    }
  },
  {
    id: 474,
    numero: 474,
    categoria: "A",
    copyright: false,
    titulo: "Oh, día del Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh, día del Señor,\ngratísimo solaz;\naliento bienhechor\nal fatigado das.\nDejando penas y aflicción\nanhelo hoy tu bendición,\nanhelo hoy tu bendición.",
      "Oh, Príncipe de paz,\ntú, fuente de bondad,\nal pecador le das\nperdón y libertad.\nEl día de hoy es la señal\nde Dios, el Padre celestial,\nde Dios, el Padre celestial.",
      "Ya viene el día final\nen forma muy veloz,\ny al Coro angelical\npronto uniré mí voz.\nEl sábado prenuncio es\nde gozo y paz que habrá después,\nde gozo y paz que habrá después."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_474.mp3"
    }
  },
  {
    id: 475,
    numero: 475,
    categoria: "A",
    copyright: false,
    titulo: "Señor, reposamos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor, reposamos en tu santo día\nCumpliendo el mandato legado por ti\nReposo buscamos, Dios nuestro, en tu seno\nQue asi ordenaste en el Sinaí\nQue así ordenaste en el Sinaí.",
      "Tus hijos se acercan, oh Dios, a tu trono\nEn santa, ferviente, sincera oración\nPidiéndote escuches su humilde plegaria\nY gocen por siempre de tu protección\nY gocen por siempre de tu protección.",
      "Alienta a tus hijos, que obtengan victoria\nQue puedan fielmente tus leyes cumplir\nY cuando vinieres, Señor, en tu gloria\nQue puedan por siempre contigo vivir\nQue puedan por siempre contigo vivir."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_475.mp3"
    }
  },
  {
    id: 476,
    numero: 476,
    categoria: "A",
    copyright: false,
    titulo: "Ya Asoma el Sol Brillante",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ya asoma el sol brillante,\nvertiendo luz, calor;\nnatura alegre canta:\nes día del Señor.",
      "Perfume de las flores\nse eleva hacia Dios.\nLos pajarillos trinan\ncon melodiosa voz.",
      "Si pájaros y flores\nte alaban, oh Señor,\ntus hijos reverentes"
    ],
    coro: "Hoy, sábado, reunidos\nen culto a ti, Señor,\ntus hijos redimidos\nte rinden su loor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_476.mp3"
    }
  },
  {
    id: 477,
    numero: 477,
    categoria: "A",
    copyright: false,
    titulo: "Santo día",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Santo día que el Señor\nen Edén santificó\ny lo dio como señal\ndel poder que nos creó.",
      "Vano tráfago hallará\nquien del mundo siga en pos.\nEl perfecto gozo está\nen la paz que ofrece Dios.",
      "En el día del Señor,\nsanta paz podrá gozar\nquien acuda, en la quietud,"
    ],
    coro: "¡Santo sábado de paz,\nbendecido del Señor!\nSiempre el sábado será\nmonumento de su amor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_477.mp3"
    }
  },
  {
    id: 478,
    numero: 478,
    categoria: "A",
    copyright: false,
    titulo: "Obediente a Tu Mandato",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Obediente a tu mandato,\nparticipa hoy tu grey\nDe la cena y gozosa\nse acerca a ti con fe.\nLo que hiciste en el Calvario\npor el pobre pecador\nAnunciamos en tu nombre,\nensalzando tu amor.",
      "Recordamos tus angustias,\n¡oh divino Redentor!\nY la copa de amargura\nque por todo pecador\nEn la cruz tu apuraste,\ndespreciando el dolor\nA tu iglesia vacilante\ndale mas de ese valor.",
      "Gracias, ¡oh Jesús! te damos,\nhoy unidos en tu amor;\ngracias mil, pues disfrutamos\nde tu amparo y tu favor\nLe debemos a tu muerte\nnuestra dicha y nuestra paz.\nnos inspire a amarte mas."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_478.mp3"
    }
  },
  {
    id: 479,
    numero: 479,
    categoria: "A",
    copyright: false,
    titulo: "El Pan de Vida Soy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "\"El pan de vida soy\", dice el Señor;\n\"ven, alma hambrienta aho-ra al Salvador;\nhambre jamás tendrá quien viene a mi,\nsed nunca sentirá quien cree en mi\".",
      "Vertiste tu por mi, buen Salvador,\ntu sangre en prueba de tu santo amor,\nCristo hazme recordar tu gran dolor,\nY aprecie yo tu amor y salvación.",
      "Hazme vivir, Señor, cerca de ti;\nla deuda de tu amor la siento en mi;\nte entrego a ti mi ser, mi corazón.\n¡Loor a ti, Señor, y bendición!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_479.mp3"
    }
  },
  {
    id: 480,
    numero: 480,
    categoria: "A",
    copyright: false,
    titulo: "Amoroso nos Convidas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amoroso nos convidas,\nCristo, a la comunión.\nLlena ahora nuestras vidas\ncon tu santa bendición.",
      "A tu grato llamamiento\nacudimos, oh Señor;\nque en tu comunión aumento\ntengan nuestra fe y amor.",
      "Por tu amor y ricos dones,\n¿qué podemos ofrecer?\nToma nuestros corazones,\nnuestras almas, nuestro ser.",
      "Hoy aquí te prometemos\nen tu santa ley vivir,\ny que fieles te seremos,\nCristo, hasta el morir."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_480.mp3"
    }
  },
  {
    id: 481,
    numero: 481,
    categoria: "A",
    copyright: false,
    titulo: "Espíritu de Santidad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Espíritu de santidad,\ndivino y eternal,\npreciosa fuente de verdad,\nven, quita nuestro mal.",
      "Con este rito que el Señor\npor siempre instituyó,\ncelebraremos su amor,\npues él por nos murió.",
      "Jesús, querido Salvador,\nen nuestro corazón\ninfunde gracia y fervor\nde celestial unción.",
      "Enciende el fuego efica\nzde fe y caridad;\nconcédenos perdón y paz,\namor y santidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_481.mp3"
    }
  },
  {
    id: 482,
    numero: 482,
    categoria: "A",
    copyright: false,
    titulo: "Amémonos, Hermanos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amémonos, hermanos,\ncon tierno y puro amor;\nPues somos la familia\nde nuestro Padre Dios.\nAmemonos, hermanos,\nlo quiere el Salvador,\nQue su preciosa sangre\npor todos derramó.",
      "Amémonos, hermanos,\nen dulce comunión,\nY paz y afecto y gracia\ndará el Consolador.\nAmémonos, hermanos,\ny en nuestra santa unión\nNo existan asperezas\nni discordante voz.",
      "Amémonos, hermanos,\ny al mundo pecador\nMostremos como viven\nlos que salvados son.\nAmémonos, hermanos,\nde todo corazón\nsu Ley es Ley de amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_482.mp3"
    }
  },
  {
    id: 483,
    numero: 483,
    categoria: "A",
    copyright: false,
    titulo: "Jesús Invita Hoy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús invita hoy\na todos a cenar,\ny el sacrificio de la cruz\nasí a conmemorar.",
      "El vino y el pan,\nemblemas del dolor\ncruel sufrido por Jesús,\ndespierten nuestro amor.",
      "El dijo así: \"Tomad\ndel pan y de la vid,\nY mientras juntos me esperáis,\nmi muerte discernid\".",
      "Muy pronto pasará\nla noche abismal,\ny a sus santos Cristo al fin\ndará otra cena igual."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_483.mp3"
    }
  },
  {
    id: 484,
    numero: 484,
    categoria: "A",
    copyright: false,
    titulo: "Hoy Venimos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy venimos cual hermanos\na la cena del Señor;\nacerquémonos, cristianos;\nque nos llene santo amor.",
      "En memoria de su muerte\ny la sangre que vertió,\ncelebremos el banquete\nque en su amor nos ordenó.",
      "Recordando las angustias\nque sufriera el Salvador,\ndividida se halla el alma\nentre el gozo y el dolor.",
      "Invoquemos la presencia\ndel divino Redentor;\nque nos mire con clemencia\ny nos llene de su amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_484.mp3"
    }
  },
  {
    id: 485,
    numero: 485,
    categoria: "A",
    copyright: false,
    titulo: "Traían en Silencio Presentes al Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Traían en silencio\npresentes al Señor;\nsu amor humilde y puro\nles daba gran valor;\nPalabras de consuelo\ny hechos de bondad,\nJesús los recibía\npor su sinceridad.",
      "Aparte de los otros\nun pobre viador\nMiraba cómo daban\ntributos al Señor.\nÉl nada poseía;\nsentía gran amor,\n¡y cuánto anhelaba\ndar algo de valor!.",
      "\"Señor\", clamó el hombre,\n\"acepta tú mi don,\nAcepta lo que tengo:\nmi triste corazón\".\nLe dijo el buen Maestro\nal pobre viador:\n\"De todos los presentes\nes éste el mejor\"."
    ],
    coro: "¿Quisieras dar a Cristo\nel más precioso don?\nDi: \"Cristo, mi Maestro,\nte doy mi corazón\".",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_485.mp3"
    }
  },
  {
    id: 486,
    numero: 486,
    categoria: "A",
    copyright: false,
    titulo: "Al Cristo Ved",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al Cristo ved,\nde Dios el Hijo eterno;\nved al Señor,\nel grande Creador;\ntodo abandona\npor vivir cual siervo,\ndel mal rodeado\ny presa del dolor.",
      "En oración\ntu alma hoy derrama\nante su trono\npor el pecador;\nlleva la luz\nde su Palabra santa\na los que ignoran\nel divino amor.",
      "Consagra fiel\ntus bienes, mayordomo,\nque del Señor\nmanejas el caudal,\npara que puedan\npor el mundo todo\nsalvarse almas\ndel poder del mal."
    ],
    coro: "Por ti todo esto\nhizo Jesús;\n¿cómo respondes\na su divino amor?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_486.mp3"
    }
  },
  {
    id: 487,
    numero: 487,
    categoria: "A",
    copyright: false,
    titulo: "Suenen las Palabras",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Suenen las palabras del buen Salvador:\n\"¡Oh!, traedme el diezmo al granero\nAclamad a Cristo dueño y Creador,\ndadle lo mejor primero.",
      "Cristo nuevamente vuelve a decir:\n\"Con el diezmo y liberal ofrenda,\nalmas el mensaje hoy podrán oír\ny hallarán la santa senda\".",
      "Dad a Dios mejor y más completo don:\nvuestra vida entera y vuestra hacienda.\nEntregad a Cristo hoy el corazón,"
    ],
    coro: "\"Oh, traedme el diezmo al granero,\nprobadme hoy\", dice Jehová;\nquien sobre tierras y dinero,\nbendiciones abundantes pondrá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_487.mp3"
    }
  },
  {
    id: 488,
    numero: 488,
    categoria: "A",
    copyright: false,
    titulo: "Predica Tú",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "\"Predica tú\", dice el Señor,\n\"el Evangelio a todo ser;\nanuncia tú que hay Salvador\nque a todos salvos quiere ver.",
      "\"Tú cumplirás mí comisión,\nmí amor al mundo anunciarás;\nofrecerás la salvación,\nmis maravillas mostrarás\".",
      "\"A todo el mundo tú irás\ny yo contigo he de estar;\nde mi poder tú hablarás,\nque a todos puede hoy salvar\".",
      "Me habló mi Dios, se elevó al cielo\nenvuelto en áurea luz.\nCumplí su orden; me ayudó;\nyo prediqué al buen Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_488.mp3"
    }
  },
  {
    id: 489,
    numero: 489,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh, Dónde se Hallará!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, dónde se hallará\ndel alma el descansar!\nEn vano fuera al polo ir,\no el mar profundizar.",
      "Libre de llanto está\nla vida celestial;\ntemor no habrá ni más dolor,\nmas gozo divinal.",
      "En Cristo, vida y luz\npodemos encontrar,\ny por la sangre que él vertió,\ngloria sin fin lograr."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_489.mp3"
    }
  },
  {
    id: 490,
    numero: 490,
    categoria: "A",
    copyright: false,
    titulo: "Jubilosas Nuestras Voces",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jubilosas nuestras voces\nelevemos con fervor,\npara dar la bienvenida\na los siervos del Señor.",
      "Bienvenidos los campeones\nde la fe y la verdad,\nA vosotros tributamos\nnuestro afecto y amistad.",
      "Bienvenidos los soldados\nde las huestes de Jesús,\nLos que luchan denodados"
    ],
    coro: "¡Bienvenidos! ¡bienvenidos!\n¡Adalides de Jehova!\nParabienes no fingidos\nla congregación os da.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_490.mp3"
    }
  },
  {
    id: 491,
    numero: 491,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Pese Nuestros Hechos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando pese nuestros hechos\nnuestro Juez con equidad,\n¿nos tendrá por oro puro,\no escoria de maldad?",
      "¿Oiremos las palabras:\n\"Bien has hecho, siervo fiel\";\no del fallo la sentencia:\n\"Eres falto, fuiste infiel\"?",
      "¿Al Espíritu oiremos\npor nosotros implorar?,\no ya tarde, ¿a Dios veremos"
    ],
    coro: "En la balanza del Señor\nfuiste pesado;\nde sus palabras a la luz,\nfalto hallado.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_491.mp3"
    }
  },
  {
    id: 492,
    numero: 492,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Junte Jesús las Naciones",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando junte Jesús las naciones\nque ante él han de comparecer;\n¡oh!,¿cómo hemos de estar en el juicio,\nel fallo del Juez al saber?",
      "¿Del Señor las palabras oiremos:\n\"Bien hecho, mi buen siervo fiel\"?\n¿O temblando de espanto, seremos\nquitados del trono por él?",
      "Mirará complacido a sus hijos,\nsu sello en sus frentes verá;",
      "Esperemos, velemos, y hagamos\nlas lámparas todas brillar,\ny al venir el Esposo a las bodas,\ngozosos podremos entrar."
    ],
    coro: "Juntará todo el trigo en su troje,\nmas al viento el tamo esparcirá.\nPues,¿cómo hemos de estar en el juicio\ndel gran día que pronto vendrá?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_492.mp3"
    }
  },
  {
    id: 493,
    numero: 493,
    categoria: "A",
    copyright: false,
    titulo: "Día Grande Viene",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Día grande viene, un día grande,\ndía grande viene y cerca está,\ncuando justos y malos\nseparados quedarán.\n¡Oh! hermano, ¿apercibido estás?",
      "Día triste viene, un día triste,\ndía triste viene y cerca está,\ncuando: \"Id, pecadores,\nno os conozco,\" el Juez dirá\n¡Oh! hermano, ¿apercibido estás?",
      "Día alegre viene, un día alegre,\nmas su luz brilla sólo en\nlos que aman al Señor.\n¡Oh! hermano, ¿apercibido estás?"
    ],
    coro: "¿Te hallas listo?, ¿te hallas listo\npara el fallo del gran tribunal?\n¿Te hallas listo?, ¿te hallas listo\npara el tribunal?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_493.mp3"
    }
  },
  {
    id: 494,
    numero: 494,
    categoria: "A",
    copyright: false,
    titulo: "No Puede el Mundo Ser mi Hogar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No puede el mundo ser mi hogar,\nsus bienes han de perecer\nAnhelo pronto a Sión llegar\ny a mi Maestro ver.",
      "La muerte allí no existirá;\ntampoco la separación;\ntristeza nunca mas habrá\nen la anhelada Sión.",
      "Con Cristo quiero allí reinar\ndejando el mundo atrás."
    ],
    coro: "Iré al hogar,\na mi eterno y dulce hogar,\nmi hogar;\nsi, iré al hogar\nque Jesús fue a preparar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_494.mp3"
    }
  },
  {
    id: 495,
    numero: 495,
    categoria: "A",
    copyright: false,
    titulo: "Hay un Feliz Edén",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay un feliz Edén\nlejos de aquí,\ny gozará del bien\nel justo allí.\nCantemos con fervor:\n\"Digno eres, oh Señor,\nde gloria y de honor;\n¡loor a ti!",
      "Marchad a aquel lugar,\npartid de aquí;\nun bello y dulce hogar\ntendréis allí.\n¡Oh, cuán feliz seré\ncuando a tu lado esté!\nBendito viviré morando en ti.",
      "Eterno resplandor\nfulgura allí.\nEterno es el amor\nde Dios por mí.\nCorramos, pues, allá:\nbello aquel hogar será,\npor siempre habitará"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_495.mp3"
    }
  },
  {
    id: 496,
    numero: 496,
    categoria: "A",
    copyright: false,
    titulo: "Jerusalén, mi Amado Hogar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jerusalén, mi amado hogar,\nanhelo en ti morar;\ntus calles de oro recorrer,\nlucientes como el sol;\ntu río cristalino ver,\nhermoso sin igual;\ny en sus verdes márgenes\ntranquilo reposar.",
      "Jerusalén, mi amado hogar,\nen ti no habrá dolor;\nel llanto no existirá,\nni muerte, ni clamor;\nallí no habrá enemistad,\npues reinará el amor,\ny solo habrá felicidad\ncon nuestro Redentor.",
      "Ansío pronto a ti llegar,\nmi celestial hogar;\ncon mis amados que perdí,\nhallarme otra vez,\ny conocer a Abrahán,\na Eva y Adán\ny contemplar el rostro\nde Jesús, mi Salvador."
    ],
    coro: "¡Jerusalén! ¡Jerusalén!\n¡Jerusalén, mi amado hogar!\n¡Oh, cuándo te veré!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_496.mp3"
    }
  },
  {
    id: 497,
    numero: 497,
    categoria: "A",
    copyright: false,
    titulo: "Jerusalén, la Excelsa",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jerusalén, la excelsa,\nllegar anhelo a ti;\nmi sueño y mí esperanza\nal transitar aquí.\nLa grey, que ya tus glorias\nen lontananza ve,\ndepone sus afanes,\ny vive por la fe.",
      "Jesús te está alumbrando,\ny tú le das honor\na Aquel que fue inmolado,\ntu Esposo y Redentor.\n¡Qué gozo me es,\ntranquila, eterna habitación,\nsaber que en ti termina\nmi peregrinación!",
      "Mi dulce patria amada,\n¿mí gozo tú serás?\nFeliz mansión soñada,\n¿contemplaré tu faz?\n¡Ten gozo, tú que gimes\ny triste siempre estás,\npor siempre reinarás!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_497.mp3"
    }
  },
  {
    id: 498,
    numero: 498,
    categoria: "A",
    copyright: false,
    titulo: "Las Montañas de Sion",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Las montañas de Sion\ndo el santo estará\nson de gloria y belleza sin par;\nde sus cumbres el ojo\nencantado verá\nlos paisajes del célico hogar;\nlos paisajes del célico hogar, hogar;\nlos paisajes del célico hogar;\nde sus cumbres el ojo\nencantado verá\nlos paisajes del célico hogar.",
      "La angustia, el dolor\ny la muerte atroz cesarán\nen la patria de Dios;\ndestruidos serán\ncuando suene el clarín,\nal oírse de Cristo la voz;\nal oírse de Cristo la voz;\ndestruidos serán\ncuando suene el clarín,\nal oírse de Cristo la voz.",
      "Mas de todos los gozos\nserá el mayor\nsiempre estar junto al dulce Jesús\ny cantarle las gracias\npor su grande amor,\npor el don de su vida en la cruz;\npor el don de su vida en la cruz, la cruz;\npor el don de su vida en la cruz;\ny cantarle las gracias.\npor su grande amor,\npor el don de su vida en la cruz."
    ],
    coro: "Cantemos del célico Edén,\nde glorias eternas sin par;\ncantemos del célico Edén\ndo el cansado reposará.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_498.mp3"
    }
  },
  {
    id: 499,
    numero: 499,
    categoria: "A",
    copyright: false,
    titulo: "De Luz Sin Par es mi Mansión",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De luz sin par es mi mansión,\nen donde muerte no habrá;\nsus calles, de oro puro son;\nallí mí alma gozará.",
      "Está el hogar feliz de Dios\nde las estrellas más allá,\ny de su luz ya voy en pos;\nallí mí alma gozará.",
      "Si otros buscan su mansión\nen este mundo terrenal,\nmi hogar se encuentra allá en Sion:\nes una patria celestial.",
      "Yo voy a Sion, yo voy a Sion,\neternamente a morar;\nyo voy a mi feliz mansión,\neternamente a morar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_499.mp3"
    }
  },
  {
    id: 500,
    numero: 500,
    categoria: "A",
    copyright: false,
    titulo: "Aunque en Esta Vida",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Aunque en esta vida fáltenme riquezas,\nsé que allá en la gloria tengo mi mansión.\nAlma tan perdida entre las pobrezas,\nde mí Jesucristo tuvo compasión.",
      "Así por el mundo yo voy caminando,\npruebas me rodean y hay tentación.\nPero Jesucristo, que me está probando,\nllevaráme salvo hasta su mansión.",
      "Cristo a cada raza del linaje humano\npuede impartirle plena salvación.\nY una bella casa hecha por su mano\nfue a prepararle a la santa Sión."
    ],
    coro: "Más allá del sol, más allá del sol,\nyo tengo un hogar, hogar,\nbello hogar más allá del sol.\nMás allá del sol, más allá del sol,\nyo tengo un hogar, hogar,\nbello hogar más allá del sol.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_500.mp3"
    }
  },
  {
    id: 501,
    numero: 501,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Célica Jerusalén!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, célica Jerusalén!,\n¡oh, cuándo te veré!\nTus glorias, que por fe se ven\n¿oh, cuándo gozaré?",
      "Amada patria celestial,\najena de dolor,\na los que agobia aquí el mal,\nconsolará tu amor.",
      "Sin sombra te contemplaré:\nhay vida y luz en ti;\ncual astro resplandeceré\neternamente allí.",
      "Del cristalino manantial\nde vida beberé;\ndel árbol de la eternidad\ngozoso comeré.",
      "Al Rey de gloría, mí Jesús,\nallí veré reinar;\nmi alma llenará de lu\nzen esa Sion sin par."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_501.mp3"
    }
  },
  {
    id: 502,
    numero: 502,
    categoria: "A",
    copyright: false,
    titulo: "A Veces Oigo un Himno",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A veces oigo un himno\ncual yo jamás oí\nes cántico divino,\nigual no conocí;\nes santa melodía\nque expresa tierno amor;\nes célica armonía\nque exalta al Creador.",
      "¡Qué dulce paz yo gozo\noyendo un canto tal!\nEl mundo tenebroso\nolvido y todo mal.\nMás dulce que las voces\ndel viento y del mar\nen el cantar que llega\ndel trono celestial.",
      "El cántico sublime\ncual sueño llega a mi;\nParéceme su ritmo\ncual brisas del jardín.\n¡Dichoso pensamiento!\nsalvado yo seré\nY con los redimidos\nel himno entonaré."
    ],
    coro: "¡Oh, música divina!\n¡Oh, canto del Edén!\nEs eco de la bella\nfeliz Jerusalén.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_502.mp3"
    }
  },
  {
    id: 503,
    numero: 503,
    categoria: "A",
    copyright: false,
    titulo: "Las Riberas de Dicha Inmortal",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Las riberas de dicha inmortal,\nla mansión de indecible placer,\nla bellísima luz celestial,\n¡cuántas glorias iremos a ver!",
      "Cada santo de Dios gozará,\ndeslumbrante en pureza y candor;\ndel Cordero en pos andará,\ncantará alabanzas de amor.",
      "De mí viaje la terminación\ntan feliz, no dílata en llegar.\nEfectuada mi transformación,"
    ],
    coro: "En aquel porvenir\nque divisa con júbilo el fiel,\nmás allá del Jordán,\nen la patria do reina Emmanuel.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_503.mp3"
    }
  },
  {
    id: 504,
    numero: 504,
    categoria: "A",
    copyright: false,
    titulo: "Del Bello País he Leído",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Del bello país he leído,\ny su hermosa ciudad capital,\ncuyas calles gloriosas son de oro,\ny de jaspe es su muro eternal;\npor el río las aguas de vida\nfluye con perenal claridad;\nmas en cuanto a toda esta excelencia\nno se ha dicho aun la mitad.",
      "Leído he de aquel las mansiones\nque el Maestro fue a preparar,\ndo los santos que aquí fueron fieles\nvan por siempre jamás a gozar;\nno habrá muerte, dolor, ni pecado,\nsino reina la inmortalidad;\nmas en cuanto a su excelsa grandeza\nno se ha dicho aún la mitad.",
      "Leído he de níveos vestidos,\nde coronas que han de ostentar\nlos que sean del Padre llamados\nde su gloria eternal a gozar;\nandarán por las calles de oro,\npues han hecho justicia y verdad;\nmas de historia tan bella y sublime\nno se ha dicho aún la mitad.",
      "Leído he de Cristo el benigno,\nque al más vil pecador limpiará,\ncómo paz y perdón le confiere\nal que humilde buscándolos va.\nHe leído cómo él nos protege,\nque se apiada de nuestra orfandad\nmas de tanta bondad pregonada\nno se ha dicho aún la mitad."
    ],
    coro: "No se ha dicho aún la mitad;\nno se ha dicho aún la mitad;\nde la santa ciudad tan gloriosa;\nno se ha dicho aún la mitad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_504.mp3"
    }
  },
  {
    id: 505,
    numero: 505,
    categoria: "A",
    copyright: false,
    titulo: "¿Nos Veremos Junto al Río?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Nos veremos junto al río\ncuyas aguas cristalinas\nfluyen puras, argentinas,\ndesde el trono de nuestro Dios?",
      "En las márgenes del río\ndo los serafines van,\ndonde hay bellos querubines,\nda la dicha eterna Dios.",
      "Antes de llegar al río,\nnuestras cargas al dejar\nLibres todos quedaremos",
      "Pronto al río llegaremos,\nnuestra peregrinación\nterminando en los acentos\nde la célica canción."
    ],
    coro: "¡Oh! si, nos congregaremos\nen la ribera hermosa del río\ncuyas aguas vivas dimanan\ndel trono de nuestro Dios.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_505.mp3"
    }
  },
  {
    id: 506,
    numero: 506,
    categoria: "A",
    copyright: false,
    titulo: "En la Tierra Adonde Iré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la tierra adonde iré\nmuerte y llanto no habrá;\ngozo eterno allí tendré,\ny no hay noche allá.",
      "Puertas bellas se abrirán\nen la Santa Ciudad;\ncalles áureas se verán,\ny no hay noche allá.",
      "Para siempre viviré\nen mí amado hogar;\nagua viva beberé,",
      "Luz de sol jamás habrá\nen el célico hogar.\nEl Cordero luz será,\ny no hay noche allá."
    ],
    coro: "Dios las penas quitará,\nmuerte no hay ni más dolor;\ntiempo no se contara,\ny no hay noche allá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_506.mp3"
    }
  },
  {
    id: 507,
    numero: 507,
    categoria: "A",
    copyright: false,
    titulo: "En la Célica Morada",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la célica morada\nde las cumbres del Edén,\ndonde toda voz ensalza\nal Autor de todo bien,\n¿el pesar recordaremos,\ny la triste nublazón,\ntantas luchas del Espíritu\ncon el débil corazón?",
      "Oración, deberes, penas,\nvías que anduvimos ya,\nposeyendo las riquezas\nque Jesús nos guarda allá,\n¿la memoria retendremos\ndel pretérito dolor,\ndel camino largo, aspérrimo,\ncon sus luchas, su temor?",
      "La bondad con que nos mira\nsin cansarse cuando ve\npoco fruto en nuestra vida,\ny tan débil nuestra fe,\n¿nos acordaremos de ella\nen aquel dichoso hogar,\nde eternal aurora espléndida\ne inefable bienestar?"
    ],
    coro: "Sí, allí será gratísímo\nconocer y alabar\nal Pastor fiel y benéfico\nque nos ayudó a llegar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_507.mp3"
    }
  },
  {
    id: 508,
    numero: 508,
    categoria: "A",
    copyright: false,
    titulo: "Al Bello Hogar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al bello hogar, allí a morar,\nde todo mal exentos,\na descansar sin un pesar,\niremos muy contentos.",
      "Encontrarán los que allí van\nlas calles de oro puro,\ngloria y solaz, eterna paz,\nel don de Dios, seguro.",
      "Si al sufrir y combatir,\ncantáis la triste endecha,\na vista alzad: tenéis ciudad;"
    ],
    coro: "Por la mansión feliz\nque nos invita\nel corazón cristiano\nfiel palpita.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_508.mp3"
    }
  },
  {
    id: 509,
    numero: 509,
    categoria: "A",
    copyright: false,
    titulo: "Todo es Bello",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Todo es bello en el hogar cuando hay amor;\nnada allí podrá dañar cuando hay amor.\nPaz y gozo se hallarán, fuerzas se restaurarán\ny el Señor será el Guardián cuando hay amor.",
      "Hasta en chozas hay placer cuando hay amor;\nodio y mal no puede haber cuando hay amor.\nCada rosa en el jardín, los claveles y el jazmín\na mis males ponen fin cuando hay amor.",
      "Tiene el labio su canción cuando hay amor;\nllega el cielo al corazón cuando hay amor,\nEl riacho al murmurar y las aves al cantar\nnos inspiran sin cesar cuando hay amor.",
      "Mi Jesús, te ruego hoy más de ese amor.\nYa que tuyo siempre soy, dame ese amor.\nLos que tienes en tu grey, siempre andan en tu Ley\nY te honran como Rey por tu gran amor."
    ],
    coro: "Con amor, con amor,\ntodo es bello en derredor cuando hay amor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_509.mp3"
    }
  },
  {
    id: 510,
    numero: 510,
    categoria: "A",
    copyright: false,
    titulo: "Hogar de Mis Recuerdos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hogar de mis recuerdos,\na ti volver anhelo;\nno hay sitio bajo el cielo\nmás dulce que el hogar.\nPosara yo en palacios,\ncorriendo el mundo entero,\na todos yo prefiero\nmi hogar, mi dulce hogar.",
      "Allí la luz del cielo\ndesciende más serena;\nde mil delicias llena\nla dicha del hogar.\nAllí las horas corren\nmás breves y gozosas;\nmemorias muy dichosas\nnos hablan sin cesar.",
      "Más quiero que placeres\nque brinda tierra extraña,\nvolver a la cabaña\nde mi tranquilo hogar.\nAllí mis pajarillos\nme alegran con sus cantos;\nallí con mil encantos\nestá la dulce paz."
    ],
    coro: "¡Mi hogar, mi hogar!\nNo hay sitio bajo el cielo\nmás dulce que mi hogar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_510.mp3"
    }
  },
  {
    id: 511,
    numero: 511,
    categoria: "A",
    copyright: false,
    titulo: "Guía a Ti, Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Guía a ti, Señor, guía a ti\nlos hijos tiernos que me has dado a mi.\n¡Oh, por tu grande amor. guíalos. Dios, a ti!",
      "Cuando del mundo vean el esplendor,\nentonces guárdalos del tentador.\nDe sus engaños ¡oh, guíalos, Dios, a ti!",
      "Los niños a salvar vino Jesús,\ny anduvo sin pecar hasta la cruz.\nSuplico por tu amor: ¡guíalos, Dios, a ti!",
      "Aunque me falte fe quiero creer\nque este precioso don quieres tener;"
    ],
    coro: "Guíalos, Dios, a ti,\nguíalos, sí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_511.mp3"
    }
  },
  {
    id: 512,
    numero: 512,
    categoria: "A",
    copyright: false,
    titulo: "Perfecto Amor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Perfecto amor del cielo descendiendo,\npor ti, Señor, enviado a este hogar;\npor este don tan noble y venturoso\nlas gracias hoy venímoste a dar.",
      "Perfecto amor, ¡oh Dios!, tu don gratuito\nsea abundante, y de este hogar solaz;\nsagrado amor que sea para siempre\nfuente de gozo, esperanza y paz.",
      "Perfecto amor, ¿qué más desea el alma,\nde bendiciones rebosando ya?\nAmor que ensalce, de tu amor la gloria,\ny que perdure por la eternidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_512.mp3"
    }
  },
  {
    id: 513,
    numero: 513,
    categoria: "A",
    copyright: false,
    titulo: "Cristo, Yo Te Seguiré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, yo te seguiré;\nóigote llamándome;\nvengo a ti con fe y amor,\ny a tu mansión, Señor.",
      "Mis ojuelos no verán;\nmis piecitos errarán;\ndébil me hallo en el vaivén;\nmas tú eres mi sostén.",
      "Cuando solo y triste estoy\nsiempre a ti, Jesús, yo voy;\ny qué gozo es para mí,\nseguirte siempre a ti!"
    ],
    coro: "Yo te seguiré, yo te seguiré,\nyo te seguiré, bendito Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_513.mp3"
    }
  },
  {
    id: 514,
    numero: 514,
    categoria: "A",
    copyright: false,
    titulo: "De su Trono, mi Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De su trono mi Jesús,\na morir aqui bajó,\ny clavado en la cruz,\nmis pecados el expió.",
      "Bien me quiere el Salvador\nque sufrió por mi maldad.\nte bendigo, mi Señor,\nreconozco tu bondad!",
      "Guarda fiel mi corazón\ntú,que velas sobre mi,\ny con toda devoción"
    ],
    coro: "Si Cristo me ama;\nSi Cristo me ama;\nSi Cristo me ama,\nla Biblia dícelo.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_514.mp3"
    }
  },
  {
    id: 515,
    numero: 515,
    categoria: "A",
    copyright: false,
    titulo: "En Este Bello Día",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En este bello día\nde gozo, amor y luz\nCantamos alabanzas\na nuestro Rey, Jesús.",
      "Amólos a los niños\nestando aún aquí\nY ahora en los cielos\nlos ama siempre así.",
      "La historia de su vida\nnos gusta escuchar;\nsu amor y mansedumbre",
      "¡Oh! Salvador bendito,\nrogámoste a ti\nNos guardes del maligno\nen nuestra senda aquí."
    ],
    coro: "Cantad cantad,\na Cristo dad loor;\ncantad cantad\nla gloria del Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_515.mp3"
    }
  },
  {
    id: 516,
    numero: 516,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Venga Jesucristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando venga Jesucristo\nen busca de joyas,\ntodo niño redimido\nsu gema será.",
      "Quiere Cristo en su corona\nbrillantes preseas;\ncada gema que le adorna\ncon sangre compró.",
      "El escoge por tesoros\nlos niños amantes,\ny en su seno los corderos",
      "Si los niños y las niñas\nacuden a Cristo,\nbellas joyas, escogidas,\nserán para él."
    ],
    coro: "Como estrellas que brillan\nson los niños que le aman;\nson tesoros que adornan\nal Rey y Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_516.mp3"
    }
  },
  {
    id: 517,
    numero: 517,
    categoria: "A",
    copyright: false,
    titulo: "¡Cuánto me alegra!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Cuánto me alegra que nuestro Señor\ndiera su vida por el pecador!\nHizo sin par maravillas aquí,\ny la más grande es que me ama a mí.",
      "Aunque vagaba olvidándome de él,\nsiempre siguióme porque siempre es fiel;\npresto a sus brazos amantes volví\nal recordar que Jesús me ama a mí.",
      "Cuando en el cielo ver pueda a Jesús,\nya revestido de gloriosa luz,\nentonaré mi himno eterno allí:"
    ],
    coro: "¡Qué maravilla! Me ama Jesús,\nme ama Jesús, me ama Jesús.\n¡Qué maravilla! Me ama Jesús;\nsí, me ama aun a mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_517.mp3"
    }
  },
  {
    id: 518,
    numero: 518,
    categoria: "A",
    copyright: false,
    titulo: "Cuando Leo en la Biblia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando leo en la Biblia\ncomo llama Jesús\ny bendice a los niños con amor,\nyo también quisiera estar,\ny con ellos descansar\nen los brazos del tierno Salvador.",
      "Ver quisiera sus manos\nsobre mí reposar,\ncariñosos abrazos de él sentir;\nsu mirada disfrutar,\nlas palabras escuchar:\n\"A los niños dejad a mí venir\".",
      "¡Cuántos hay que no saben\nde la bella mansión,\ny no quieren a Cristo recibir!\nLes quisiera yo mostrar\nque para ellos hay lugar\nen el cielo, do los convida a ir.",
      "Yo espero aquel día\nventuroso, sin fin,\nel más grande, el más lúcido, el mejor,\ncuando de toda nación,\na los brazos acudan del Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_518.mp3"
    }
  },
  {
    id: 519,
    numero: 519,
    categoria: "A",
    copyright: false,
    titulo: "Es el Amor Divino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Es el amor divino\nmi gozo y mi placer,\nallana mi camino\ny me hace obedecer.",
      "Del triste mundo lleno\nde muerte y dolor,\nquisiera yo llevar a Dios\nun pobre pecador.",
      "Y cuando vaya al cielo\ncon Cristo, mi Señor,\nallí por siempre cantarte\nde Dios y de su amor."
    ],
    coro: "Dios es amor,\nsoy su pequeñuelo;\nquiero ser santo\ncomo es él.\nEs el amor divino\nmi gozo y mi placer,\nallana mí camino\ny me hace obedecer.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_519.mp3"
    }
  },
  {
    id: 520,
    numero: 520,
    categoria: "A",
    copyright: false,
    titulo: "Yo Temprano Busco a Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo temprano busco a Cristo,\ncada día aprendo de él;\npor la senda angosta sigo\nsus pisadas, firme y fiel.",
      "Dondequiera que él me mande,\nyo con gozo presto voy;\nsé su voluntad divina\naunque niño tierno soy.",
      "A la puerta Cristo aguarda:\nél me quiere libertar;\nyo, confiando en su promesa,"
    ],
    coro: "Cristo me ama; Cristo me ama;\nCristo me ama, esto sé:\nél murió para salvarme;\nyo, ferviente, le amare.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_520.mp3"
    }
  },
  {
    id: 521,
    numero: 521,
    categoria: "A",
    copyright: false,
    titulo: "Bellas las Manitas Son",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bellas las manitas son\nque obedecen a Jesús;\nbellos ojos los que están\nllenos de célica luz.",
      "Hizo las manitas Dios,\nporque a Él podrán servir;\nhizo el tierno corazón\nen su servicio a latir.",
      "Toda boca debe orar\ncada día al Salvador,\ny los pies habrán de andar",
      "Cuanto puedas tu hacer,\nCristo te lo exigirá;\nhaz, pues, de ello tu placer\ncon el poder que El te da."
    ],
    coro: "Bellas, si, bellas las manos son,\nque obedecen a Jesús;\nbellos los ojos que siempre están\nllenos de célica luz.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_521.mp3"
    }
  },
  {
    id: 522,
    numero: 522,
    categoria: "A",
    copyright: false,
    titulo: "Tu Reino Amo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tu reino amo, ¡oh Dios!,\ntu casa de oración,\ny al pueblo que en Jesús halló\ncompleta redención.",
      "Tu iglesia, mí Señor,\nsu templo, su ritual,\nla iglesia que guiando estás\ncon mano paternal.",
      "Por ella es mí oración,\nmis lágrimas, mi amor;\nsolicitud, cuidado, afán,\npor ella son, Señor.",
      "Un gozo sin igual\nme causa en ella estar,\ny andando aquí, su comunión\nanhelo disfrutar,",
      "Tu iglesia durará,\noh Dios, cual tu verdad;\ny victoriosa, llegará\nhasta la eternidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_522.mp3"
    }
  },
  {
    id: 523,
    numero: 523,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh Santo Dios!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh santo Dios!, tu tierno amor\nes nuestro fiel consolador.\nCual Padre amante, tú nos das\nconsuelo, alivio y solaz.",
      "Tu hijo fiel, que ya durmió,\nla copa amarga apuró.\nLa vida que le diste aquí\nde nuevo la ha devuelto a ti.",
      "Sus obras acabadas ya,\nel galardón le espera allá.\nY con la hueste angelical\ntendrá la vida eternal."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_523.mp3"
    }
  },
  {
    id: 524,
    numero: 524,
    categoria: "A",
    copyright: false,
    titulo: "Ven, Alma que Lloras",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven, alma que lloras, ven al Salvador;\nen tus tristes horas dile tu dolor.\nSi, dile tu duelo, ven tal como estás;\nhabla sin recelo, y no llores más.",
      "Penas y tristuras, dilas al Señor;\ncrueles desventuras, lágrimas y error;\nen su tierno seno tu descansarás;\nven, Cristo es bueno, y no llores más.",
      "Guía al extraviado, muéstrale tu luz.\nLleva al angustiado al manso Jesús.\nLa bendita nueva de celeste paz\nal triste, pues, lleva, y no llores más."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_524.mp3"
    }
  },
  {
    id: 525,
    numero: 525,
    categoria: "A",
    copyright: false,
    titulo: "No Habrá más Llanto Allá",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No habrá más llanto allá,\nni angustia, ni dolor.\nGozoso viviré en\nel reino del amor.\nYa no, no habrá más llanto allá.",
      "No habrá enfermedad,\npenas ni luto allá.\nSalud eterna y rica\nallí florecerá.\nYa no, no habrá más llanto allá.",
      "No habrá más muerte allá,\nni hora de partir.\nLa muerte morirá;\npor siempre he de vivir.\nYa no, no habrá más llanto allá.",
      "Volviendo a recibir\nlos míos que perdí,\ncon ellos al estar,\nme arrobaré allí.\nYa no, no habrá más llanto allá."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_525.mp3"
    }
  },
  {
    id: 526,
    numero: 526,
    categoria: "A",
    copyright: false,
    titulo: "Llegaremos al Hogar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Llegaremos al hogar\nque Jesús preparó,\ndonde irán a descansar\nlos que aquí redimió.\nLlamaremos sin temor\ny a la puerta Él estará;\ncon ternura y santo amor\nbienvenida dará.",
      "Vuestro hogar aquí no está.\nCuanto veis en redor\nA la nada volverá\na la voz del Señor.\nEste mundo de maldad\ncon su fausto y su placer,\ncon su orgullo y vanidad,\nlo veréis perecer.",
      "Por el que a la tumba va\nno lloréis con dolor,\npues a vida volverá\ncuando venga el Señor.\nJunto al trono de Jesús\na los vuestros hallaréis,\nY viviendo en gracia y luz\nnunca \"adiós\" les diréis."
    ],
    coro: "Un hogar Dios nos da,\ny con Cristo en su mansión,\ntodo fiel vivirá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_526.mp3"
    }
  },
  {
    id: 527,
    numero: 527,
    categoria: "A",
    copyright: false,
    titulo: "¿Para quién será el ay?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Para quién será el ay,\nolvidada la salud?\n¿Para quién el mal vendrá,\nya perdida la virtud?",
      "¿Para quién será el dolor,\njunto al ron, vencido ya?\nAmadores del licor,\nen el ron la muerte está!",
      "¿Para quién rencilla habrá,\ndesvergüenzas, destrucción,\nla deshonra, la impiedad?",
      "Nunca el vino contempléis,\nni siquiera en su color,\nque sí fluye con placer,\ncomo sierpe morderá."
    ],
    coro: "¿Para quién será el ay?\n¿Para quién será el ay?\n¿Para quién será el ay?\nPara el que bebe alcohol.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_527.mp3"
    }
  },
  {
    id: 528,
    numero: 528,
    categoria: "A",
    copyright: false,
    titulo: "Proclamad juventud reformista",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Proclamad, juventud reformista,\nel glorioso evangelio de amor,\nque transforma del hombre la\nvida,\nproveyéndole vida mejor.\nProclamad las verdades gloriosas,\nlevantando hasta el cielo la voz;\nproclamad las verdades hermosas\nque descienden del trono de Dios.\nProclamad las verdades hermosas\nque descienden del trono de Dios.",
      "¡Adelante con Cristo, adelante!\nAdelante, febril juventud!\nCaminad victoriosa y triunfante,\nproclamando a los hombres salud.\nLevantad la bandera imponente,\nla bandera que Dios os legó,\nen el norte, en el sur y el oriente,\npues la hora del triunfo sonó.\nEn el norte, en el sur y el oriente,\npues la hora del triunfo sonó.",
      "¡Juventud fervorosa, adelante!\n¡Adelante con Cristo Jesús!\nCaminemos en marcha triunfante,\ndando al mundo irredento la luz;\nesa luz redentora que alumbra,\nque irradia con gran plenitud,\nque destruye la horrenda\npenumbra,\n¡adelante, febril juventud!\nQue destruye la horrenda\npenumbra,\nadelante, febril juventud."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_528.mp3"
    }
  },
  {
    id: 529,
    numero: 529,
    categoria: "A",
    copyright: false,
    titulo: "Sigue orando",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sí las tormentas rugen en ti,\ny en negras sombras vas;\nsi tu alma llena está de pavor\nsigue orando así",
      "Cuando tristeza llena tu ser\ny atribulado estés,\ndile a tu Padre de tu dolor\nsigue orando así.",
      "Ora confiando, Dios oirá,\nlleno de compasión.\nPues a sus hijos él cuidará\nsigue orando así."
    ],
    coro: "Sigue orando\nsí pues te contesta a ti;\nsu oferta guardará\nsigue orando confiando así.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_529.mp3"
    }
  },
  {
    id: 530,
    numero: 530,
    categoria: "A",
    copyright: false,
    titulo: "Tierra de la Palestina",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tierra bendita y divina\nes la de Palestina,\ndonde nació Jesús;\neres, de las naciones, cumbre\nbañada por la lumbre\nque derramó su luz.",
      "Cuenta la historia del pasado\nque en tu seno sagrado\nvivió el Salvador,\ny en tus hermosos olivares,\nhabló a los millares\nla palabra de amor.",
      "Quedan en ti testigos mudos,\nque son los viejos muros\nde la Jerusalén;\nviejas paredes destruidas,\nque si tuvieran vida,\nnos hablarían también."
    ],
    coro: "Eres la historia inolvidable,\nporque en tu seno se derramó\nla sangre, preciosa sangre,\ndel unigénito Hijo de Dios;\nla sangre, preciosa sangre,\ndel unigénito Hijo de Dios.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_530.mp3"
    }
  },
  {
    id: 531,
    numero: 531,
    categoria: "A",
    copyright: false,
    titulo: "La vid y los pámpanos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo soy la vid y mi Padre el\nLabrador,\nvosotros pámpanos, dice el\nSalvador.\nEstad en mí y yo en ti y fruto\nllevaréis;\nporque sin mí nada podéis hacer\njamás.\nDios nos ha puesto los frutos a\nllevar\nque permanezcan como un\ntestimonio a él.",
      "El que estuviere en la vid le\nlimpiará,\npara que frutos abunden más y\nmás.\nLuego pedid sin desmayar lo que\ndeseas tú;\nEl Dios de amor que te ama a ti te\nlo dara\nGlorificado así mi Padre es\nen que llevéis mucho fruto y seáis\nsiempre fiel.",
      "Por mis palabras vosotros limpios\nsois;\ncon el amor de mi Padre amo yo.\nDejad mi amor siempre brillar con\ntodo su fulgor;\ngrato será obedecer mi voluntad.\nTodo mi gozo en vosotros estará\ny vuestro gozo con fruto cumplido\nserá."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_531.mp3"
    }
  },
  {
    id: 532,
    numero: 532,
    categoria: "A",
    copyright: false,
    titulo: "Caminando, caminando",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Gozándome yo voy al hogar\ncelestial;\ncaminando, caminando.\nPues no me encanta más el placer\nterrenal,\ncaminando para aquel hogar.",
      "Yo quiero pecadores conmigo\nllevar;\ncaminando, caminando.\nQue en Cristo puedan ellos salud\nencontrar,\ncaminando para aquel hogar.",
      "Y entonces con mi Cristo por\nsiempre estaré;\ncaminando, caminando.\nSu nombre sacrosanto yo alabaré,\ncaminando para aquel hogar"
    ],
    coro: "Caminando, caminando\npara aquel hogar, donde está Jesús.\nCaminando, caminando\nde la mano del Señor Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_532.mp3"
    }
  },
  {
    id: 533,
    numero: 533,
    categoria: "A",
    copyright: false,
    titulo: "Todo en el altar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Anhelaste la paz y crecer en la fe?\n¿Santo loor a Jesús ofrecer?\nMas podrás descansar, recibir\nbendición,\nofreciéndote a Dios en su altar.",
      "Si caminas con Dios en la luz de\nverdad,\ntendrás paz y poder al andar, vivirás\npues feliz, gozarás libertad,\nsi tu vida está en el altar.",
      "¿Quién podrá de su amor\nla grandeza contar?\n¡Cuán feliz con tu Dios estarás!\nPues te llama el Pastor con su voz\ncelestial,\npon tu vida entera en su altar."
    ],
    coro: "¿Colocaste tu ser en servicio a\nDios?\n¿Le diste tu fiel corazón?\nEl te bendecirá y te hará descansar,\ny su paz te dará una canción.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_533.mp3"
    }
  },
  {
    id: 534,
    numero: 534,
    categoria: "A",
    copyright: false,
    titulo: "Jesús el Buen Pastor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús, el Buen Pastor, mostrando\nsu tierno amor,\ndel vil abismo me sacó;\nsu mano me extendió, del lodo\nme levantó,\nmis pasos él enderezó.",
      "Andando con Jesús, por sendas\nde gozo y luz,\nel mundo pierde su atracción;\nya pertenezco a él, y anhelo\nservirle fiel,\nel mundo es vana ilusión.",
      "Con Cristo moraré, y siempre\nle cantaré\npor toda la eternidad;\nde reyes es el Rey, tributo le\nbrindaré,\npues tiene toda potestad"
    ],
    coro: "Querido Salvador,\ncanto hoy de tu inmenso amor;\narde mi corazón de gratitud.\nSolo, no puedo andar,\na tu lado yo quiero estar;\nllévame, oh Salvador,\na la celestial mansión.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_534.mp3"
    }
  },
  {
    id: 535,
    numero: 535,
    categoria: "A",
    copyright: false,
    titulo: "¿Rumbo adónde?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Rumbo adónde, alma\nintranquila?\n¿No has tenido puerto seguro?\nEn tu barquito, pide a Cristo,\nque hoy embarque dándote calma.",
      "¿Rumbo adónde, alma cargada?\n¿No has pensado jamás en Cristo?\nEl llevará tus muchos pecados:\nlos cambiará por su paz completa.",
      "¿Rumbo a dónde, alma perdida?\n¿No has hallado faro amistoso?\nMira a Cristo allí colgado,\nen el Calvario, tu sacrificio."
    ],
    coro: "¡Busca a Cristo, el gran Piloto!\nLa incertidumbre con él se vence.\nNo habrá tinieblas más adelante;\nalcanzarás el Puerto seguro.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_535.mp3"
    }
  },
  {
    id: 536,
    numero: 536,
    categoria: "A",
    copyright: false,
    titulo: "Si hay Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Aunque el necio pensó que no\nhay Dios,\nyo he escuchado en mi alma su\nvoz.\nVeo a Dios, de este sol a la luz,\ny le veo en su Hijo Jesús.",
      "El azul firmamento es de Dios,\ny el meteoro que cruza veloz.\nLas montañas, los ríos y el mar,\nde las aves el dulce cantar.",
      "Es de Dios el bello amanecer,\nes de Dios el bello atardecer;\nesa luna apacible es de Dios;\ntodo, todo obedece a su voz.",
      "Desde el pájaro al tigre feroz,\nel gusano también es de Dios.\nEl desierto, el abismo y la flor,\ntodo, creó. Es del Dios del amor.",
      "Le he entregado yo mi corazón,\nen Jesús, él me dio salvación.\nAunque el necio pensó que no\nhay Dios,\nyo le siento y escucho su voz."
    ],
    coro: "¡Oh, sí hay Dios, sí hay Dios;\nhe escuchado su voz!\n¡Oh, sí hay Dios, sí hay Dios;\nhe escuchado su voz!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_536.mp3"
    }
  },
  {
    id: 537,
    numero: 537,
    categoria: "A",
    copyright: false,
    titulo: "Brilla en tu lugar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nunca esperes en momento de una\ngrande acción,\nni que pueda lejos ir tu luz;\nde la vida a los pequeños actos da\natención,\nbrilla en el sitio donde estés.\nbrilla en el sitio donde estés.",
      "Puedes en tu cielo alguna nube\ndisipar,\nhaz a un lado tu egoísmo cruel;\naunque sólo un corazón pudieres\nconsolar,\nbrilla en el sitio donde estés.",
      "Puede tu talento alguna cosa\ndescubrir\ndo tu luz podrá resplandecer;\nde tu mano el pan de vida puede aquí\nvenir,\nbrilla en el sitio donde estés."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_537.mp3"
    }
  },
  {
    id: 538,
    numero: 538,
    categoria: "A",
    copyright: false,
    titulo: "La mujer samaritana",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De tu cántaro dame,\ndame tú de beber,\na la samaritana,\ndijo un día Jesús.\n¿Por qué, siendo Judío\nme diriges la voz?\nrespondió con vehemencia\nla mujer que ignoraba\nla grandeza de Dios.\nRespondió con vehemencia\nla mujer que ignoraba\nla grandeza de Dios.",
      "¡Oh!, si tu conocieses\neste don que es de Dios\ny quien viene a escoger\ny quien viene a rogarte\nque le des de beber,\nquizá tú pedirías\ny él podríate dar\nagua más deleitosa,\nque en los pozos terrenos\nno podrás encontrar.\nAgua más deleitosa,\nque en los pozos terrenos\nno podrás encontrar.",
      "Quien bebiere de esta agua\nvolverá a tener sed.\nMas aquél que bebiere\nde la que le daré,\npara siempre, declaro\nque más sed no tendrá;\nmas será en él la fuente\nque para vida eterna\ncon poder saltará.\nMas será en él la fuente\nque para vida eterna\ncon poder saltará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_538.mp3"
    }
  },
  {
    id: 539,
    numero: 539,
    categoria: "A",
    copyright: false,
    titulo: "Día de juicio",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Día de juicio ya se acerca,\npronto amanecerá.\nMás seguro estoy en Cristo,\nRoca de la eternidad.",
      "Cuando el día amanezca\nsobre el mundo en su favor.\nRíos, fuentes y montañas\nse hallarán en confusión.",
      "Pecadores y los salvos,\ncada cual va a su lugar.\nMas los suyos Cristo lleva,\nsalvos por su gracia son."
    ],
    coro: "Mi querido hermano, cuando\nqueme el mundo,\n¿estarás tú listo y seguro en Cristo?\nA la Roca acude antes de la muerte,\nven a Cristo el Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_539.mp3"
    }
  },
  {
    id: 540,
    numero: 540,
    categoria: "A",
    copyright: false,
    titulo: "Señor Jehová,",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Omnipotente Dios (Himno 540):",
      "Señor Jehová, omnipotente Dios,\ntú que los astros riges con poder,\noye clemente nuestra humilde voz,\nnuestra canción hoy dígnate\natender.",
      "Eterno Padre, nuestro corazón,\na ti profesa un inefable amor;\nhazte presente en tu pueblo hoy;\ntiéndenos, pues, tu brazo protector.",
      "A nuestro templo da tu bendición;\nenséñanos tus leyes a guardar;\nalumbra la conciencia y la razón;\ndomina siempre tú en todo hogar.",
      "Defiéndenos del enemigo cruel;\nconcede a nuestras faltas\ncorrección;\nnuestro servicio sea siempre fiel;\nrodeános de tu gran protección.\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_540.mp3"
    }
  },
  {
    id: 541,
    numero: 541,
    categoria: "A",
    copyright: false,
    titulo: "Canten con alegría",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh, Señor, procuro en vano\nmi conducta reformar,\npues ningún poder humano\nsantidad me puede dar.\nEs mi vida de pecado\ndiaria ofensa para ti;\npero mi alma ha confiado\nen tu sangre carmesí.",
      "En tu reino está el contento,\nnada impuro allí entrará;\nsin el nuevo nacimiento\nningún alma lo verá.\nMira, pues, mi insuficiencia,\nmuestra en mí tu gran poder;\nmanifiesta tu clemencia\ny de nuevo hazme nacer.",
      "Ven, Espíritu divino;\nven y escucha mi oración;\nante ti mi frente inclino\npor mi regeneración.\nDe este modo mi esperanza\nno vacila y llego a creer\nque la bienaventuranza\nen el cielo he de tener"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_541.mp3"
    }
  },
  {
    id: 542,
    numero: 542,
    categoria: "A",
    copyright: false,
    titulo: "Canten con alegría",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Canten con alegría las alabanzas\nde Cristo el Rey\nanden en los caminos que nos\nmostrara su augusta grey.\nVivan los redimidos en las\nvictorias del Vencedor;\npara que todos juntos veamos las\nglorias del Redentor.",
      "Cristo es la luz del mundo, y el\nque sigue la luz tendrá;\nCristo es el pan de vida, y el que\nde el come no morirá.\nCristo es la fuente viva, y el que\nde él bebe no tendrá sed;\ny si queréis la vida, id a la fuente\ny allí bebed.",
      "Cristo es, de las ovejas que él\nredimira, su Buen Pastor;\nvino para salvarlas pero sufriendo\ncruento dolor\nY al derramar su sangre en el\nmadero de esa cruz,\nvida, paz y esperanza, y eterna\ngloriosa nos dio Jesús.",
      "Ahora ya no estoy triste sino que\nvivo siempre feliz,\ncon la dulce esperanza de que\nalgún día iré al país,\nese país amado donde moradas\nfue a preparar:\nCristo el Pastor eterno, que a sus\novejas vino a salvar\nfue a praparar:\nCristo, el Pastor eterno, que a sus\novejas vino a salvar"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_542.mp3"
    }
  },
  {
    id: 543,
    numero: 543,
    categoria: "A",
    copyright: false,
    titulo: "¡Firmes! ¡Fuertes!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Siervos de Jesús, hombres de\nverdad,\nguardas del deber, somos, sí;\nlibres de maldad, ricos en\nbondad,\nfieles en la lid seremos, sí.",
      "Cuán hermosos son los que sin\ntemor,\nlistos al llamar del clarín,\nluchan con valor, sufren sin cesar,\nguardas del deber, hasta el fin.",
      "Nuestro Capitán es ya vencedor,\nél nos redimió por su cruz.\nGuardas del deber, él nos da\npoder,\nél nos guiará hasta la luz.",
      "Invencibles son los que con afán\ncada día dan al deber.\nGrande luz tendrán y recibirán\nmagno galardón del Redentor."
    ],
    coro: "¡Firmes! ¡Fuertes!, alcen la\nbandera,\ngrande, noble emblema del deber.\n¡Prontos! ¡Bravos!, pasen la\nconsigna,\nmarchen todos, vamos a vencer.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_543.mp3"
    }
  },
  {
    id: 544,
    numero: 544,
    categoria: "A",
    copyright: false,
    titulo: "Jesús es mi Rey soberano",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús es mi Rey soberano,\nmi gozo es cantar su loor;\nes Rey, y me ve cual hermano,\nes Rey y me imparte su amor.\nDejando su trono de gloria, me\nvino a sacar de la escoria,\ny yo soy feliz,\ny yo soy feliz por él.",
      "Jesús es mi amigo anhelado,\ny en sombras o en la luz siempre\nva;\npaciente y humilde a mi lado,\nayuda y socorro me da.\nPor eso constante lo sigo, porque\nel es mi Rey y mi amigo,\ny yo soy feliz,\ny yo soy feliz por él.",
      "Señor, ¿qué pudiera yo darte\npor tanta bondad para mí;\nme basta servirte y amarte?\n¿Es todo entregarme yo a ti?\nEntonces acepta mi vida, que a ti\nsólo queda rendida,\npues yo soy feliz,\npues yo soy feliz por ti."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_544.mp3"
    }
  },
  {
    id: 545,
    numero: 545,
    categoria: "A",
    copyright: false,
    titulo: "La creación",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios ha hecho todo lo que el ojo ve;\ncada cosa de este mundo terrenal.\nTodo árbol y las plantas son de él,\nlas estrellas y el manto celestial.",
      "A su imagen Dios formo ala Hombre\nAdán,\nluego hizo una mujer tomada de él;\ny los colocó en el Jardín de Edén,\ndonde habían de seguirle siempre\nfiel.\n.\nEl perfecto gozo había en el Edén,\nellos se gozaban al andar con Dios.\nComunión completa había allá\ntambién\nal oír de Jehová la tierna voz."
    ],
    coro: "¡Sea ya la luz!, ordenó Jehová\ncon su fuerte voz, y la luz fue ya.\nHoy el buen Jesús, nuestro\nRedentor,\nbrinda al mundo luz con excelso\namor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_545.mp3"
    }
  },
  {
    id: 546,
    numero: 546,
    categoria: "A",
    copyright: false,
    titulo: "Hay una senda",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay una senda que el mundo no\nconoce,\nhay una senda que yo pude\nencontrar.\nEn Cristo tengo la salvación de mi\nalma,\nCristo es la senda que me puede\nsalvar\nEn Cristo tengo la salvación de mi\nalma,\nCristo es la senda que me puede\nsalvar.",
      "Las amistades y todos mis parientes\nfueron las gentes que yo relacioné;\nme aborrecieron por causa de su\nnombre\ncuando supieron que a Cristo me\nentregue.\nMa aborrecieron por cauca de su\nnombre,\ncuando supieron que a Cristo me\nentregue.",
      "Y aquel camino de tantos\nsufrimientos,\naquel camino que el cielo me trazó,\nfue transformado en aquel feliz\nmomento\ncuando mi Cristo al cielo me llamó.\nfue transformado en aquel feliz\nmomento\ncuando mi Cristo al cielo me llamo"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_546.mp3"
    }
  },
  {
    id: 547,
    numero: 547,
    categoria: "A",
    copyright: false,
    titulo: "Adelante, manda el Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo, nuestro jefe, nos lleva a la\nlid,\nnunca perderemos si él nos dice:\nid.\nAun su justa causa se suele\nignorar\nmas yo fiel le he de seguir.",
      "Nuestro estandarte luce por\ndoquier;\ncon poder y gloria siempre se\nha de ver.\nCristo nuestro Jefe al mundo ya\nvenció.\nY yo fiel le he de seguir.\nLa furiosa lucha larga no será,\ny a los vencedores nos\ncongregará,\ndonde entonaremos cántico\ntriunfal,\nfieles le hemos de seguir."
    ],
    coro: "¡Adelante!, manda el Señor;\n¡Adelante!, vamos sin temor.\n¡Adelante!, canta ya la grey;\nla victoria es cierta con el Rey.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_547.mp3"
    }
  },
  {
    id: 548,
    numero: 548,
    categoria: "A",
    copyright: false,
    titulo: "Grande es tu fidelidad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh, Dios Eterno, tu misericordia\nni una sombra de duda tendrá;\ntu compasión y bondad nunca\nfallan\ny por los siglos el mismo serás.",
      "La noche oscura, el sol y la luna,\nlas estaciones del año también,\nunen su canto cual fieles criaturas,\nporque eres bueno, por siempre\neres fiel.",
      "Tú me perdonas, me impartes el\ngozo,\ntierno me guías por sendas de paz;\neres mi fuerza, mi fe, mi reposo,\ny por los siglos mi Padre serás."
    ],
    coro: "¡Oh, tu fidelidad! ¡Oh, tu fidelidad!\nCada momento la veo en mí.\nNada me falta, pues todo provees,\n¡grande, Señor, es tu fidelidad!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_548.mp3"
    }
  },
  {
    id: 549,
    numero: 549,
    categoria: "A",
    copyright: false,
    titulo: "Ya llegó un año más",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ya llegó un año más, y con"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_549.mp3"
    }
  },
  {
    id: 550,
    numero: 550,
    categoria: "A",
    copyright: false,
    titulo: "Se acerca un año nuevo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Se acerca un año nuevo:\ntu voluntad será.\nVelando o trabajando,\ntu mano nos guiará.\nUn año de progreso,\nde prueba y bendición,\nmas cada día probando\ntu santa dirección.",
      "Se acerca un año nuevo,\nde gracia y de bondad.\nMirando hacia adelante\ndejamos la maldad.\nUn año más confiando\nen tu divino amor;\n¡que haya esperanza,\nsin pena ni temor!",
      "Se acerca un año nuevo\npara testificar\nde grandes bendiciones\nque tú nos quieres dar.\nSe acerca un año nuevo;\nenséñanos así:\ndo quiera que nos lleves,\n¡el año es para ti!\nAmén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_550.mp3"
    }
  },
  {
    id: 551,
    numero: 551,
    categoria: "A",
    copyright: false,
    titulo: "Oh Cristo mío",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Cristo mío, Rey de mi alma,\nsalvásteme del mal, lávame en el\nraudal\nde tu preciosa sangre purísima;\nninguna mancha ya me contamina.",
      "Cuando iba errante, tú me\nbuscaste,\nno me dejaste perder el alma;\npor plena gracia compraste mi\nsalud,\nimpartiéndome la santa virtud."
    ],
    coro: "Tanto me amaste, pues que te\ndiste,\nsacrificándote sobre una cruz\npor mi redención con tanto amor;\nsé que te amo, Cristo mi Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_551.mp3"
    }
  },
  {
    id: 552,
    numero: 552,
    categoria: "A",
    copyright: false,
    titulo: "Pies divinos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Pies divinos, pies divinos, pies\ndivinos;\npies divinos, pies divinos de Jesús,\nque en la cumbre del Calvario los\nclavaron en la cruz.\nQue en la cumbre del Calvario los\nclavaron en la cruz.",
      "Pies divinos, pies divinos, pies\ndivinos;\npies divinos, pies divinos del\nSeñor,\nque anduvieron por Judea\nderramando paz y amor.\nQue anduvieron por Judea\nderramando paz y amor.",
      "Vedlos fríos y desnudos por los\ncampos,\ncaminando, caminando sin cesar;\npor las cumbres, por los valles,\npor la orilla de la mar.\nPor las cumbre, por los valles, por\nla orilla de la mar.",
      "Van llevando por Judea la semilla del\nbendito Evangelio del amor;\ny calmando del enfermo las\ntristezas y el dolor.\nY calmando del enfermo las\ntristezas y el dolor.",
      "¡Cuán hermosos y cuán santos,\ncuán benditos,\nde Jesús el Nazareno son los pies!\n¡Oh yo quiero que a la tierra\nvengan pronto otra vez!\n¡Oh yo quiero que a la tierra\nvengan pronto otra vez!",
      "Pies divinos, pies divinos, pies\nsangrantes,\nhoradados por mi culpa sin igual; nos\nlibrasteis del pecado y del\njuicio eternal.\nNos librasteis del pecado y del\njuicio eternal."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_552.mp3"
    }
  },
  {
    id: 553,
    numero: 553,
    categoria: "A",
    copyright: false,
    titulo: "El Piloto de Galilea",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si la luz del sol se oculta\ny vacila en mí la fe,\nmi plegaria elevo y clamo:\n¡Cristo!, mi piloto sé.",
      "Siempre que mi barca boga\nen el tempestuoso mar,\npuedo fiar en mi piloto,\ny en su seno reposar.",
      "Cuando llegue a la ribera\nde la patria celestial,\nme dará la bienvenida\nmi Piloto sin igual."
    ],
    coro: "Mi piloto irá conmigo,\ny de nada temeré;\nno me espanta el mar furioso,\nsólo en él yo confiaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_553.mp3"
    }
  },
  {
    id: 554,
    numero: 554,
    categoria: "A",
    copyright: false,
    titulo: "Angeles cantando están",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Angeles cantando están\ntan dulcísima canción;\nlas montañas su eco dan\ncomo fiel contestación.",
      "Los pastores sin cesar\nsus loores dan a Dios.\n¡Cuán glorioso es el cantar\nde su melodiosa voz!",
      "Oh, venid pronto a Belén\npara contemplar con fe\na Jesús, autor del bien,\nal recién nacido Rey."
    ],
    coro: "Gloria en lo alto gloria.\nGloria en lo alto gloria a Dios.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_554.mp3"
    }
  },
  {
    id: 555,
    numero: 555,
    categoria: "A",
    copyright: false,
    titulo: "El placer de mi alma",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Quién podrá con su presencia\nimpartirme bendición?\nSólo Cristo y su clemencia\npueden dar consolación.",
      "Su amor no se limita,\nes su gracia sin igual;\nsu merced es infinita,\nmás profunda que mi mal.",
      "Redención sublime y santa\nimposible de explicar;\nque su sangre sacrosanta\nmi alma pudo rescatar.",
      "Cristo suple en abundancia\ntoda mi necesidad;\nser de él, es mi ganancia,\ninefable es su bondad."
    ],
    coro: "Sólo Cristo satisface\nmi transido corazón;\nes el lirio de los valles\ny la rosa de Sarón.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_555.mp3"
    }
  },
  {
    id: 556,
    numero: 556,
    categoria: "A",
    copyright: false,
    titulo: "Firme estaré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo guarda siempre, puedo en\nél confiar;\nno me deja nunca, puedo en él\nconfiar.\nPues, cual la Roca eterna de los\nsiglos,\nfirme estaré.",
      "Fuerte es Jesucristo, puedo en él\nconfiar;\ntodo me ha provisto, puedo en él\nconfiar.\nPues, cual la Roca eterna de los\nsiglos,\nfirme estaré.",
      "En la noche oscura, puedo en él\nconfiar;\nmi alma está segura, puedo en él\nconfiar.\nPues, cual la Roca eterna de los\nsiglos,\nfirme estaré.",
      "Muchos me abandonan, puedo en\nél confiar;\notros me engañan, puedo en él\nconfiar.\nPues, cual la Roca eterna de los\nsiglos,\nfirme estaré."
    ],
    coro: "¡Nada, no, nada me ha de mover!\n¡Nada, no, nada me ha de mover!\nPues, cual la Roca eterna de los\nsiglos,\nfirme estaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_556.mp3"
    }
  },
  {
    id: 557,
    numero: 557,
    categoria: "A",
    copyright: false,
    titulo: "En el valle florece la Rosa",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el valle florece la Rosa,\nla más bella del valle Sarón:\ny la vida en Cristo es hermosa,\nsi se acepta con el corazón.",
      "En el valle florece la Rosa,\nes hermosa y trasciende su olor:\ny el alma que en Cristo reposa,\nha encontrado la fuente de amor.",
      "Es Jesús la promesa divina,\nes la Rosa más bella que el sol.\nEs la Rosa de toda la Iglesia;\nque le sirve con el corazón."
    ],
    coro: "Yo estaré con Jesús en los cielos\ny por siempre su rostro veré.\nCon los santos en sus alabanzas,\ncon mi canto también me uniré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_557.mp3"
    }
  },
  {
    id: 558,
    numero: 558,
    categoria: "A",
    copyright: false,
    titulo: "El Cristo de Nazaret",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Soñé que en la playa de un mar\nme vi,\nera el mar de Genesaret,\nla gente seguía con frenesí\nal Cristo de Nazaret;\nNoté que los ojos del ciego abrió\ny al momento le hizo ver;\nyo vi que al cojo por fe sanó\nel Cristo de Nazaret.",
      "Su amor, su ternura y compasión,\nolvidarlos jamás podré;\nsalvóme de toda condenación\nel Cristo de Nazaret;\nsus manos heridas me señaló\ny me dijo: Por ti sufrí.\nRendido a sus plantas, mi ser\nsalvó\nel Cristo de Nazaret.",
      "Las ondas furiosas del mar calmó\nal impulso de su poder,\nla turbia corriente el mandato oyó\ndel Cristo de Nazaret;\nes dulce, bendita y serena paz\nla que inunda mi pobre ser,\nmi vida en la diestra potente está\ndel Cristo de Nazaret.",
      "Ven tú que en el mar turbulento\nestás,\nsalvación hallarás en él,\nen tu alma la dulce quietud\ntendrás\ndel Cristo de Nazaret;\nme ordena decirte el mensaje fiel,\nque de paz llenará tu ser,\nsi sólo permites que more en ti\nel Cristo de Nazaret."
    ],
    coro: "CORO (1, 2, 3)\nYo también quiero amarle por\nsiempre,\nen él mi deleite hallaré;\nme salva, me cuida y me guarda\nel Cristo de Nazaret.\nCORO (4)\nTú también has de amarle por\nsiempre,\nen él tu deleite hallarás,\nte salva, te cuida y te guarda\nel Cristo de Nazaret.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_558.mp3"
    }
  },
  {
    id: 559,
    numero: 559,
    categoria: "A",
    copyright: false,
    titulo: "¡Qué felicidad!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si tú triste estás, y no tienes paz,\ncuentáselo a él todo en oración;\nél te escuchará, te responderá\ndándote consolación.",
      "Si en la lucha sientes tú fe flaquear,\ncuéntaselo a él todo en oración;\nte dará valor y vencer podrás\nal maligno tentador.",
      "Si asechado estás por la tentación,\ncuéntaselo a él todo en oración;\ny verás que al fin participarás\nde esa gran felicidad."
    ],
    coro: "¡Qué felicidad estar con él!\n¡Qué felicidad vivir con él!\nVive siempre fiel para el Salvador,\ny serás feliz así.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_559.mp3"
    }
  },
  {
    id: 560,
    numero: 560,
    categoria: "A",
    copyright: false,
    titulo: "Pon tus ojos en Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh!, alma cansada y turbada,\n¿sin luz en tu senda andarás?\nAl Salvador mira y vive;\ndel mundo la luz es su faz.",
      "De muerte a vida eterna\nte llama el Salvador fiel.\nEn ti no domine el pecado;\nhay siempre victoria en él.",
      "Jamás faltará su promesa;\nHe aquí, yo contigo estoy.\nAl mundo perdido, aprisa,\nanuncia la salvación hoy."
    ],
    coro: "Pon tus ojos en Cristo,\ntan lleno de gracia y amor,\ny lo terrenal sin valor será\na la luz del glorioso Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_560.mp3"
    }
  },
  {
    id: 561,
    numero: 561,
    categoria: "A",
    copyright: false,
    titulo: "Jerusalén la hermosa",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Una noche con la luna,\nCristo lloraba;\ny contemplaba\nla ciudad santa.\n¡Oh, Jerusalén la hermosa!\nTú que has matado\nCuantos te ha enviado\nmi Padre Dios.",
      "Una iglesia floreciente,\nhoy ha nacido\ndel lado herido\npor mis maldades.\nY si habitas protegido\npor Jesucristo,\nte encuentras listo\npara ir con él.",
      "Y cuando Jesús moría\nen cruz clavado,\nal vil malvado\nél bendecía.\nSi tú aceptas hoy la sangre\nque ha derramado,\nserás llevado a\nJerusalén."
    ],
    coro: "¡Oh Jerusalén, Jerusalén!\nCiudad de Sión\nllora por ti hoy mi corazón:\ncomo el ave al hijo le da\nsiempre protección,\nVine yo a traerte salvación.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_561.mp3"
    }
  },
  {
    id: 562,
    numero: 562,
    categoria: "A",
    copyright: false,
    titulo: "Hay un canto nuevo en",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "mi ser (Himno 562):",
      "Hay un canto nuevo en mi ser,\nes la voz de mi Jesús,\nque me dice: Ven a descansar,\ntu paz conquisté en la cruz.",
      "Tengo de su gracia celestial,\ngozo en su santo amor;\ny riquezas fluyen a raudal,\ndesde el trono del Señor.",
      "Por las aguas hondas me llevó\npruebas en mi senda hallé;\ndo áspero sendero me guió:\nmas sus huellas seguiré.",
      "Cristo en las nubes volverá,\nbajo el bello cielo azul,\nél entonces mi alma llevará,\na vivir en gloria y luz."
    ],
    coro: "Cristo, Cristo, Cristo,\nnombre sin igual;\nllena siempre mi alma,\nde esa nota celestial.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_562.mp3"
    }
  },
  {
    id: 563,
    numero: 563,
    categoria: "A",
    copyright: false,
    titulo: "Porque él vive",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios nos envió a su hijo, Cristo;\nél es salud, paz y perdón.\nvivió y murió por mi pecado;\nvacía está la tumba porque él\ntriunfó",
      "Grato es tener a un tierno niño;\ntocar su piel gozo nos da;\npero es mejor la dulce calma\nque Cristo el Rey nos puede dar,\npues vivo está.",
      "Yo sé que un día el río cruzaré;\ncon el dolor batallaré.\nY al ver la vida triunfando invicta,\nveré gloriosas luces y veré al Rey."
    ],
    coro: "Porque el vive triunfaré mañana,\nporque el vive ya no hay temor;\nporque yo sé que el futuro es suyo,\nla vida vale más y más sólo por él.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_563.mp3"
    }
  },
  {
    id: 564,
    numero: 564,
    categoria: "A",
    copyright: false,
    titulo: "Vamos a segar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Siembra a la mañana granos y\nbondades;\nsiembra al mediodía y al atardecer.\nLa cosecha aguarda y el propicio\ntiempo,\ncuando volveremos con dorada\nmies.",
      "Siembra en el estío, siembra en el\ninvierno,\nsin temer rigor del frío ni del sol,\nque la siega llega y la obra cesa,\nal volver con gozo con dorada\nmies.",
      "Lágrimas sembráis para el Señor\ndel mundo;\nen dolor obráis para su alfolí;\npero pasará el llanto de amargura,\ny traeréis gozosos la dorada mies."
    ],
    coro: "Vamos a sembrar, vamos a\nsembrar,\ntarde y temprano, vamos a sembrar.\nVamos a segar, vamos a segar,\ntarde y temprano, vamos a segar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_564.mp3"
    }
  },
  {
    id: 565,
    numero: 565,
    categoria: "A",
    copyright: false,
    titulo: "Por una senda estrecha",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "andaba yo (Himno 565):",
      "Por una senda estrecha andaba yo,\ny allí a un extraño vi,\nla carga que llevaba a mí mostró,\nera una cruz que conocí.",
      "Clamé al Señor Jesús, y él me\nhabló,\nsus manos lastimadas vi,\nlas huellas del desprecio que él\nsufrió,\nsufrió por redimirme a mí.",
      "Tu cruz permíteme cargar,\nhablé,\ny otra cruz me señaló,\nla misma que con miedo deseché\ncuando antes él me ofreció.",
      "La senda sigo que su fin tendrá\nen gloria eterna, paz y amor.\nDo por la cruz corona me dará\nmi guía fiel, mi Salvador."
    ],
    coro: "Ven, trae tu cruz y sígueme,\noí su tierna voz llamar;\nnegarle nunca puedo a quien por mí\nsu vida quiso dar.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_565.mp3"
    }
  },
  {
    id: 566,
    numero: 566,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh, ven sin tardar!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, no rechaces la verdad!\nTus ojos hoy abre a la luz,\nrenuncia toda la maldad,\ny ven a Jesús.",
      "Tus ojos ya tal vez el sol,\nno más aquí contemplarán;\nhoy es el día de salvación,\n¡Oh, ven a Jesús!",
      "Jesús te tiene compasión,\n¿con qué su amor le pagarás?\nHoy trae a él tu corazón,\ny salvo serás.",
      "Jesús recibe al pecador,\nque quiera a él su alma unir;\nya no desprecies más su amor,\n¡oh, ven a Jesús!"
    ],
    coro: "¡Oh, ven sin tardar!\n¡Oh, ven sin tardar!\nAcepta a Jesús, y salvo serás.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_566.mp3"
    }
  },
  {
    id: 567,
    numero: 567,
    categoria: "A",
    copyright: false,
    titulo: "Pescadores de hombres",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Pescadores yo os haré,\nyo os haré, yo os haré;\npescadores yo os haré\nal seguirme a mí.\nAl seguirme a mí,\nal seguirme a mí;\npescadores yo os haré\nal seguirme a mí.",
      "Cristo llama: Venid a mí,\nvenid a mí, venid a mí,\nCristo llama: Venid a mí,\ny descansaréis.\nY descansaréis,\ny descansaréis.\nCristo llama: Venid a mí,\ny descansaréis.",
      "Cristo dice: La luz yo soy,\nla luz yo soy, la luz yo soy,\nCristo dice: La luz yo soy,\na la luz venid.\nA la luz venid,\na la luz venid.\nCristo dice: La luz yo soy,\na la luz venid."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_567.mp3"
    }
  },
  {
    id: 568,
    numero: 568,
    categoria: "A",
    copyright: false,
    titulo: "¿Soy yo soldado de Jesús?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Soy yo soldado de Jesús\ny siervo del Señor?\nNo temeré llevar su cruz,\nsufriendo por su amor.",
      "Lucharon otros por la fe;\nvaliente anhelo ser.\nPor mi Señor yo pelearé,\nconfiando en su poder.",
      "Es menester que sea fiel,\nque nunca vuelva atrás,\nque siga siempre en pos de él,\ny me guiará en paz."
    ],
    coro: "Después de la batalla nos coronará,\nDios nos coronará;\nDios nos coronará,\nDespués de la batalla nos coronará;\nen aquella santa Sión.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_568.mp3"
    }
  },
  {
    id: 569,
    numero: 569,
    categoria: "A",
    copyright: false,
    titulo: "Maravillosa gracia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Maravillosa gracia\nvino Jesús a dar,\nmás alta que los cielos,\nmás honda que la mar,\nmás grande que mis culpas\nclavadas en la cruz\nes la maravillosa gracia de Jesús.",
      "Maravillosa gracia,\ngracia de compasión,\ngracia que sacia el alma\ncon plena salvación,\ngracia que lleva al cielo,\ngracia de paz y luz\nes la maravillosa gracia de Jesús.",
      "Maravillosa gracia\nllama con dulce voz,\nllámanos a ser hechos\nhijos de nuestro Dios;\ncolma de su consuelo,\nnos llena de virtud\nes la maravillosa gracia de Jesús."
    ],
    coro: "Inefable es la divina gracia,\nes inmensurable cual la mar,\nFuente preciosa para el pecador,\nel pecador.\nPerdonando todos mis pecados\nCristo me limpió de mi maldad;\nalabaré su dulce nombre por la\neternidad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_569.mp3"
    }
  },
  {
    id: 570,
    numero: 570,
    categoria: "A",
    copyright: false,
    titulo: "Sonreíd",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay algo que anda mal en el\nmundo nuestro hoy,\npues hay quien vive en medio\ndel placer y otro en dolor.\n¿Queréis vivir contentos y gozo\nesparcir?\nPues sonreíd y vuestro rostro se\niluminará.",
      "Personas siempre tristes los\npesimistas son,\nsus muchas quejas sin cesar les\nbrotan sin razón.\n¿Deseáis a esta gente las cargas\naliviar?\nHaced los optimistas y ponedlos\na cantar.",
      "Alegres y contentos debemos\nsiempre estar,\nel genio malo desterrar, el gozo\nretener.\n¿Os duele ver tristeza, miseria y\npesar?\nMediante una sonrisa fácil os\nserá vencer."
    ],
    coro: "Sonreíd y continuad sonriendo;\nsonreíd, las nubes pasarán.\nSonreíd, buscad el sol luciente,\ny pronto las tristezas se alejarán.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_570.mp3"
    }
  },
  {
    id: 571,
    numero: 571,
    categoria: "A",
    copyright: false,
    titulo: "¡Bendiciones, cuántas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "tienes ya! (Himno 571):",
      "Cuando combatido por la adversidad\ncreas ya perdida tu felicidad;\nmira lo que el cielo para ti guardó,\ncuenta las riquezas que el Señor\nte dio.",
      "¿Andas agobiado por algún pesar?\n¿Duro te parece amarga cruz\nllevar?\nCuenta las promesas del Señor\nJesús,\ny de las tinieblas nacerá la luz.",
      "Cuando de otros veas la\nprosperidad\ny tus pies claudiquen tras de su\nmaldad,\ncuenta las riquezas que tendrás\npor fe\ndonde el oro es polvo que hollará\ntu pie."
    ],
    coro: "¡Bendiciones, cuántas tienes ya!\nBendiciones, Dios te manda más;\nbendiciones, te sorprenderás\ncuando veas lo que Dios por ti\nhará.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_571.mp3"
    }
  },
  {
    id: 572,
    numero: 572,
    categoria: "A",
    copyright: false,
    titulo: "Mi hogar celestial",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay en el cielo un dulce hogar,\ndonde prefiero yo morar;\nJesús, mi Señor, me prepara allí\nun hogar, bellísimo hogar.",
      "Con mis amados me veré,\na Cristo allí coronaré;\nloor le daré por la eternidad\nen mi hogar, bellísimo hogar.",
      "La vida es breve, pronto iré\na estar con mi glorioso Rey;\ncon clara visión puedo contemplar\nmi hogar, mi bellísimo hogar."
    ],
    coro: "Bello hogar, dulce hogar,\ndonde anhelo estar;\nmiro al fulgor de la patria de luz\nmi dulce hogar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_572.mp3"
    }
  },
  {
    id: 573,
    numero: 573,
    categoria: "A",
    copyright: false,
    titulo: "Yo sé a quién he creído",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No sé por qué la gracia del Señor\nme hizo conocer;\nni sé por qué su salvación me dio\ny salvo soy por él.",
      "No sé por qué la gracia del Señor\nen mí por fe se demostró;\nni sé por qué si sólo creo en él,\nla paz encontraré.",
      "No sé por qué el Espíritu de Dios\nconvence de pecar;\nni sé por qué revela al pecador,\ncuán negra es la maldad.",
      "No sé la hora en que el Señor\nvendrá;\nde día o en oscuridad;\n¿será en el valle o en el mar,\nque mi Jesús vendrá?"
    ],
    coro: "Mas yo sé a quién he creído,\ny es poderoso para guardarme\ny en ese día glorioso iré a morar\ncon él.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_573.mp3"
    }
  },
  {
    id: 574,
    numero: 574,
    categoria: "A",
    copyright: false,
    titulo: "Soy feliz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Vagaba por el mundo sin fe, sin\nesperanza,\nNo sabiendo que había un\nSalvador,\nque, por librar mi alma de muerte\ny pecado,\nen el Calvario murió el Buen\nPastor.",
      "Cuando desalentado me encuentro\nen esta vida,\ncon el alma imploro al Salvador,\npidiéndole me mande del cielo su\nconsuelo\npara poder soportar el cruel dolor.",
      "Eres, Jesús, el lirio que perfumó mi\nvida,\nme libraste de toda iniquidad;\npusiste en mi boca un canto de\nalabanza,\nmi solo anhelo es cumplir tu\nvoluntad.",
      "Cerca de Ti, oh Cristo, andar yo\nsiempre quiero,\nes mi amparo tu sacrosanto amor;\nsin ti la vida es triste, muy llena de\namarguras,\nmas, Cristo, tú eres mi gran\nconsolación."
    ],
    coro: "Soy feliz, yo soy feliz,\ndesde que Cristo me redimió.\nSoy feliz, yo soy feliz,\ndesde que Cristo me redimió.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_574.mp3"
    }
  },
  {
    id: 575,
    numero: 575,
    categoria: "A",
    copyright: false,
    titulo: "Es todo para mí",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el firmamento veo a Dios,\nen el viento él habla en majestad,\naunque reina sobre tierra y mar,\n¿qué es eso para mí?",
      "Yo creeré en su natividad\nque en la historia es una realidad\naunque él vino para liberar,\n¿qué es eso para mí?"
    ],
    coro: "Hasta que por fe le conocí,\ny su gran poder en mí sentí,\nno sabía que era un Dios\nde amor que vino desde allá\npara salvarme a mí.\nYo ahora pertenezco a él,\nél me ayuda con su gran poder,\nme conduce siempre a la verdad,\nes todo para mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_575.mp3"
    }
  },
  {
    id: 576,
    numero: 576,
    categoria: "A",
    copyright: false,
    titulo: "El canto de los ángeles",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Miles de ángeles del cielo cantan\nalabanza a Dios;\nal Cordero en su trono y al Padre\neternal.\nLa dulzura de sus arpas y sus\nvoces sin igual\nhoy los hombres todos deben\nimitar en su loor.",
      "Tema eterno cantaremos: Honra\ny\ngloria al Salvador\nque nos redimió y por su\nsacrificio\nnos lavó,\npues en esta vida nos sostuvo en\nprueba y dolor,\ny a través de la tribulación al\nreino\nnos llevó.",
      "Como el son de muchas aguas se\noye aquella multitud;\ncanta de la gran victoria de Jesús\ny su virtud.\nMas los ángeles que escuchan no\nconocen el cantar\nde los triunfos y victorias\nalcanzados al luchar."
    ],
    coro: "Santo, Santo, el coro angelical\ndirá, y yo a él espero unir mi\nhumilde voz.\nAl cantar yo los prodigios de su\ngran redención,\nde asombro mudo quedará frente\na tan magno amor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_576.mp3"
    }
  },
  {
    id: 577,
    numero: 577,
    categoria: "A",
    copyright: false,
    titulo: "Con Jesús Estaré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando amanezca el día y el clarín\nresonará; con Jesús, estaré.\nCon gran júbilo y gozo entraré al\nmás allá, con Jesús estaré.",
      "Cuando resucitaremos, ¡qué\nfelicidad habrá!, con Jesús estaré.\nNuestros seres bienqueridos hemos\nde encontrar allá, con Jesús, estaré.",
      "En aquel bendito día siempre yo\nme gozaré; con Jesús, estaré.\nAl Señor que tanto amó cara a"
    ],
    coro: "Con Jesús estaré ¡Amén!, y así\ncuando resucitaremos y la muerte\nesté vencida, con Jesús estaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_577.mp3"
    }
  },
  {
    id: 578,
    numero: 578,
    categoria: "A",
    copyright: false,
    titulo: "Con Jesús Estaré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando amanezca el día y el clarín\nresonará; con Jesús, estaré.\nCon gran júbilo y gozo entraré al\nmás allá, con Jesús estaré.",
      "Cuando resucitaremos, ¡qué\nfelicidad habrá!, con Jesús estaré.\nNuestros seres bienqueridos hemos\nde encontrar allá, con Jesús, estaré.",
      "En aquel bendito día siempre yo\nme gozaré; con Jesús, estaré.\nAl Señor que tanto amó cara a"
    ],
    coro: "Con Jesús estaré ¡Amén!, y así\ncuando resucitaremos y la muerte\nesté vencida, con Jesús estaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_578.mp3"
    }
  },
  {
    id: 579,
    numero: 579,
    categoria: "A",
    copyright: false,
    titulo: "A solas al huerto yo voy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A solas al huerto yo voy,\ncuando duerme aún la floresta;\ny en quietud y paz con Jesús estoy\noyendo absorto allí su voz.",
      "Tan dulce es la voz del Señor,\nque las aves guardan silencio;\ny tan sólo se oye su voz de amor,\nque inmensa paz al alma da.",
      "Con él encantado yo estoy,\naunque entorno llegue la noche;\nMas me ordena ir, y a escuchar\nyo voy,\nsu voz doquier la pena esté."
    ],
    coro: "El conmigo está, puedo oír su voz,\ny que suyo, dice, seré;\ny el encanto que hallo en él allí,\ncon nadie tener podré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_579.mp3"
    }
  },
  {
    id: 580,
    numero: 580,
    categoria: "A",
    copyright: false,
    titulo: "Entenderemos nuestras",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "angustias (Himno 580):",
      "Cuando tentado, yo he deseado\nsaber porque hay muchos aquí\nque andan sin pruebas y sin\ncuidado\nmientras el mal me acecha a mí.",
      "Hasta la muerte, dijo el\nMaestro,\nserás tú fiel y trabajarás;\ntodo tu afán tan grande dejado\ncuando al celeste hogar entrarás.",
      "Cuando vendrá Jesús de la gloria,\ntodos al cielo nos llevará;\ncuando le veamos en aquel día,\nlo entenderemos sí, más allá."
    ],
    coro: "Entenderemos nuestras angustias,\nentenderemos nuestro pesar;\nhermano mío, nunca desmayes,\ntodo en el cielo se ha de aclarar.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_580.mp3"
    }
  },
  {
    id: 581,
    numero: 581,
    categoria: "A",
    copyright: false,
    titulo: "¿Cómo podré estar triste?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Cómo podré estar triste?,\n¿cómo entre sombras ir?,\n¿cómo sentirme solo\ny en el dolor vivir?\nSi Cristo es mi consuelo,\nmi amigo siempre fiel,\nsi aún las aves tienen\nseguro asilo en él,\nsi aún las aves tienen\nseguro asilo en él.",
      "Nunca te desalientes,\noigo al Señor decir;\ny en su Palabra fiado,\nhago al dolor huir.\nA Cristo, paso a paso\nyo sigo sin cesar,\ny todas sus bondades\nme da sin limitar,\ny todas sus bondades\npor siempre me ha de dar.",
      "Siempre que soy tentado,\no si en la prueba estoy,\nmás cerca de él camino,\ny protegido voy;\nsi en mi la fe desmaya\ny sufro de ansiedad,\ntan sólo él me levanta,\nme da seguridad,\ntan sólo él me levanta,\nme da seguridad."
    ],
    coro: "¡Feliz, cantando alegre,\nyo vivo siempre aquí;\nsi el cuida de las aves,\ncuidará también de mí!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_581.mp3"
    }
  },
  {
    id: 582,
    numero: 582,
    categoria: "A",
    copyright: false,
    titulo: "El Rey ya viene",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El comercio ya ha cesado, el\nbullicio termino,\nlos talleres se han cerrado, la\ncosecha se dejo;\nen las casas no hay labores, en las\ncortes no hay ley;\nel planeta ya está listo para recibir\nal Rey",
      "En los rostros sonrientes que\nconocen la verdad,\nse ven vidas redimidas que ya\ntienen libertad;\nse ven niños y ancianitos que\nsufrieron gran dolor,\ntienen ya salud y gozo, gracias a\nsu Redentor.",
      "Oigo carros que retumban porque\nvienen a anunciar,\nla victoria de la vida y el final de\nla maldad.\nTogas reales se reparten, la\ntribuna\nlista está,\ny el gran coro de los cielos canta\ngracia, amor y paz."
    ],
    coro: "¡Oh el Rey ya viene, el Rey ya\nviene!\nYa sonó la trompeta,\ny su rostro veo ya;\n¡oh el Rey ya viene, el Rey ya\nviene!\n¡Gloria a Dios! ¡El viene por mí!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_582.mp3"
    }
  },
  {
    id: 583,
    numero: 583,
    categoria: "A",
    copyright: false,
    titulo: "Feliz cumpleaños",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Feliz, feliz cumpleaños\ndeseamos para ti,\nque el Dios omnipotente\nte quiera bendecir.",
      "A Dios le damos gracias\nque con amor sin par,\nal fin de otro año hermoso\nte permitió llegar."
    ],
    coro: "¡Feliz, feliz cumpleaños!,\nque Dios en su bondad\nte dé muy larga vida,\nsalud, felicidad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_583.mp3"
    }
  },
  {
    id: 584,
    numero: 584,
    categoria: "A",
    copyright: false,
    titulo: "El Lirio de los valles",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay un Lirio que habita en los\nvalles,\nen los valles del huerto de Dios.\nEse Lirio es Jesús, el Dueño de mi\namor;\nese Lirio es vida al corazón.",
      "Es la voz de mi amado tan dulce,\nque al oírla yo gozo de amor.\nUna vez mi Jesús a mi alma habló;\ndesde entonces conozco su voz.",
      "¡Oh qué hermoso es mi Lirio\nescogido!\npara él tengo esta dulce canción.\nHoy yo quiero cantar y a Cristo\nesperar\ncuando él venga, su iglesia a\nbuscar.",
      "¡Oh levántate!, dice mi amado,\nel invierno ha pasado ya.\nEn su dulce canción, dice a mi\ncorazón\nque a su iglesia él viene a buscar."
    ],
    coro: "Como el manzano crece en los\nprados,\nasí crece mi amado en mi ser.\nEn su sombra una vez, mi calor\nrefresqué;\ndesde entonces soy feliz con él.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_584.mp3"
    }
  },
  {
    id: 585,
    numero: 585,
    categoria: "A",
    copyright: false,
    titulo: "Yo tengo una corona",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo tengo una corona allá en el\ncielo,\nque Cristo ha preparado para mí.\nOí la voz de Cristo que me dijo:\nHijo mío, no tardes en venir.\nY yo no endurecí mi corazón;\na los pies de Cristo me humillé.\nY me dijo: Levántate, hijo mío,\nque tus manchas con mi sangre\nyo lavé.\nY me dijo: Levántate, hijo mío,\nque tus manchas con mi sangre\nyo lavé."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_585.mp3"
    }
  },
  {
    id: 586,
    numero: 586,
    categoria: "A",
    copyright: false,
    titulo: "Nítido rayo por Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nítido rayo, por Cristo,\nyo quiero siempre ser,\nen todo quiero agradarle,\ny hacerlo con placer.",
      "A Cristo quiero llegarme,\nen mi temprana edad,\npor siempre quiero amarle,\ny hacer su voluntad.",
      "Nítido rayo en tinieblas,\ndeseo resplandecer;\nalmas perdidas a Cristo,\nanhelo conducir.",
      "Una mansión en el cielo,\nfue Cristo a preparar,\nque el niño tierno y amante\nen ella pueda entrar."
    ],
    coro: "Un nítido rayo,\nnítido rayo por Cristo,\nun nítido rayo,\nnítido rayo seré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_586.mp3"
    }
  },
  {
    id: 587,
    numero: 587,
    categoria: "A",
    copyright: false,
    titulo: "Es el tiempo de la siega",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Es el tiempo de la siega y tú sin\nvacilar,\ndeclarando con holgura no hay que\ntrabajar,\nmientras tanto que el Maestro te\nvuelve a llamar,\njoven, joven, ven, trabaja ya.",
      "Las gavillas que recojas, joyas de\nesplendor,\nbrillarán en la corona que dará el\nSeñor.\nBusca pronto eternas joyas, Dios es\npremiador..\nJoven, Joven, ven, trabaja ya.",
      "Va pasando la mañana, y nunca\nvolverá,\npronto el tiempo de la siega aquí\nterminará,\nte hallarás al fin vacío ante tu\nCriador.\nJoven, Joven, ven, trabaja ya."
    ],
    coro: "Ven y ve los campos blancos, como\nestán\naguardando manos que los segarán.\nJoven, despierta!,hazlo pronto y\nalerta,\nse el primero en decirle:heme aquí\nSeñor\nPor doquier se inclina la madura\nmies,\nque las auras mueven y ¡qué bella es!\nJoven, despierta!, hazlo pronto y\nalerta,\npocos días hay que restan para el\nsegador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_587.mp3"
    }
  },
  {
    id: 588,
    numero: 588,
    categoria: "A",
    copyright: false,
    titulo: "Dios, yo quiero ser",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "cristiano (Himno 588):",
      "Dios, yo quiero ser cristiano de\ncorazón, de corazón.\nDios, yo quiero ser cristiano de\ncorazón.\nDe corazón, de corazón,\nDios, yo quiero ser cristiano de\ncorazón.",
      "Dios, yo quiero ser más santo de\ncorazón, de corazón.\nDios, yo quiero ser más santo de\ncorazón.\nDe corazón, de corazón,\nDios, yo quiero ser más santo de\ncorazón.",
      "Dios, yo quiero ser más limpio de\ncorazón, de corazón.\nDios, yo quiero ser más limpio de\ncorazón.\nDe corazón, de corazón,\nDios, yo quiero ser más limpio de\ncorazón.",
      "Dios, yo quiero amarte siempre de\ncorazón, de corazón.\nDios, yo quiero amarte siempre de\ncorazón.\nDe corazón, de corazón,\nDios, yo quiero amarte siempre de\ncorazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_588.mp3"
    }
  },
  {
    id: 589,
    numero: 589,
    categoria: "A",
    copyright: false,
    titulo: "Alcancé salvación",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De paz inundada mi senda ya\neste\no cúbrala un mar de aflicción,\nmi suerte cualquiera que sea, diré:\nalcancé, alcancé salvación",
      "Ya venga la prueba o me tiente\nSatán,\nno amenguan mi fe ni mi amor;\npues Cristo comprende mis luchas,\nmi afán\ny su sangre vertió en mi favor.",
      "Feliz yo me siento al saber que\nJesús,\nlibróme de yugo opresor;\nquitó mi pecado, clavólo en la cruz:\ngloria demos al buen Salvador.",
      "La fe tornaráse en gran realidad\nal irse la niebla veloz;\ndesciende Jesús con su gran\nmajestad,\n¡aleluya!, estoy bien con mi Dios."
    ],
    coro: "Alcancé salvación.\nAlcancé, alcancé salvación.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_589.mp3"
    }
  },
  {
    id: 590,
    numero: 590,
    categoria: "A",
    copyright: false,
    titulo: "Pecador, ven a Cristo Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Pecador, ven a Cristo Jesús,\ny feliz para siempre serás,\nque si tú le quisieres tener\nal divino Señor hallarás.",
      "Si cual hijo que necio pecó,\nvas buscando a sus pies compasión,\ntierno Padre en Jesús hallarás,\ny tendrás en sus brazos perdón.",
      "Si, enfermo, te sientes morir,\nél será tu Doctor celestial;\ny hallarás en su sangre también\nmedicina que cure tu mal.",
      "Ovejuela que huyó del redil,\n¡he aquí tu benigno Señor!\nYen los hombros llevada serás\nde tan dulce y amante Pastor."
    ],
    coro: "Ven a él, ven a él,\nque te espera tu buen Salvador;\nven a él, ven a él,\nque te espera tu buen Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_590.mp3"
    }
  },
  {
    id: 591,
    numero: 591,
    categoria: "A",
    copyright: false,
    titulo: "Sembraré la simiente",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "preciosa (Himno 591):",
      "Sembraré la simiente preciosa,\ndel glorioso evangelio de amor.\nSembraré, sembraré, mientras\nviva,\ndejaré el resultado al Señor.",
      "Sembraré en corazones sensibles\nla doctrina del Dios de perdón.\nSembraré, sembraré, mientras\nviva,\ndejaré el resultado al Señor.",
      "Sembraré en corazones de mármol\nla bendita palabra de Dios.\nSembraré, sembraré, mientras\nviva,\ndejaré el resultado al Señor."
    ],
    coro: "Sembraré, sembraré,\nmientras viva, simiente de amor.\nSegaré, segaré,\nal hallarme en la casa de Dios.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_591.mp3"
    }
  },
  {
    id: 592,
    numero: 592,
    categoria: "A",
    copyright: false,
    titulo: "La gloriosa aparición",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Día de victoria y gozo celestial,\ncuando Cristo volverá;\nqué glorioso encuentro con\nmi Salvador,\nen las nubes se verá.",
      "Día de gran gozo, día sin igual,\ncuando Cristo volverá;\nde la tierra al cielo él nos llevará,\na su seno paternal.",
      "Oye la trompeta que anunciando\nestá,\nla venida del Señor;\nya no más dolores, ya no más a\ncon Jesús triunfó el amor."
    ],
    coro: "En las nubes él vendrá,\nen las nubes él vendrá;\nCristo el Salvador muy pronto\nvolverá,\npor aquellos que él amó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_592.mp3"
    }
  },
  {
    id: 593,
    numero: 593,
    categoria: "A",
    copyright: false,
    titulo: "Mi culpa él llevó",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cansado y triste vine al Salvador,\nmi culpa él llevó,\nmi culpa él llevó;\nmi eterna dicha hallé en su amor,\nmi culpa él llevó.",
      "Borrados todos mis pecados son\nmi culpa él llevó,\nmi culpa él llevó;\na él feliz elevo mi canción,\nmi culpa él llevó.",
      "Ya vivo libre de condenación,\nmi culpa él llevó,\nmi culpa él llevó;\nsu dulce paz tengo en mi corazón,\nmi culpa él llevó.",
      "Si vienes hoy a Cristo, pecador,\ntu culpa llevará,\ntu culpa llevará,\nperdón tendrás si acudes al Señor,\ntu culpa llevará.",
      "CORO 4\nTu culpa llevará,\ntu culpa llevará,\ny limpiará tu corazón;\ny dirás feliz en tu canción:\nMi culpa el llevó."
    ],
    coro: "1, 2, 3\nMi culpa él llevó,\nmi culpa él llevó,\nalegre siempre cantaré.\nAl Señor gozoso alabaré,\nporque él me salvó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_593.mp3"
    }
  },
  {
    id: 594,
    numero: 594,
    categoria: "A",
    copyright: false,
    titulo: "Maravilloso es",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Qué grandiosa es la puesta del sol\nadmirable cual amanecer,\npero es más grandioso y\nconmovedor\nel amor que me tiene el Señor.",
      "Maravilla de un sol que se oculta;\nmaravilla aurora que vi.\nMaravilla que en mi alma resulta\nhoy\ncuando pienso que Dios me ama a\nmí.",
      "Que grandioso el verano copioso;\nlos cielos, la luna y el sol,\npero es más grandioso y\nconmovedor\nel amor que me tiene el Señor."
    ],
    coro: "Maravilloso es, maravilloso es\ncuando pienso que Dios me ama a\nmí.\nMaravilloso es, maravilloso es\ncuando pienso que Dios me ama a\nmí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_594.mp3"
    }
  },
  {
    id: 595,
    numero: 595,
    categoria: "A",
    copyright: false,
    titulo: "¡Gloria, gloria, aleluya!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Es el Dios de los ejércitos en quien\nyo confiaré;\ny con címbalos de gozo al Señor\nensalzaré.\nEl despide los relámpagos, más\nnunca temeré,\nél es mi Protector.",
      "Con ejército no gana sus victorias\nel Señor;\nni con fuerza lucha en contra de\nLuzbel, el tentador.\nLa potencia del Espíritu, ha dicho\nel Dios de amor,\nes lo que vencerá.",
      "En Belén de Palestina el Señor\nJesús nació,\ny después de treinta años en la\ncruenta cruz murió.\nPero vive para siempre, pues la\ntumba ya venció,\nsu nombre alabaré."
    ],
    coro: "¡Gloria, gloria, aleluya!\n¡Gloria, gloria, aleluya!\n¡Gloria, gloria, aleluya!\nACristo doy loor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_595.mp3"
    }
  },
  {
    id: 596,
    numero: 596,
    categoria: "A",
    copyright: false,
    titulo: "Bellas mansiones",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mansión gloriosa tengo yo en el\ncielo,\ndo las maldades nunca entrarán.\nToda tristeza cambiará en consuelo,\ny en dulce canto el dolor y afán.",
      "En este mundo predomina el\nllanto,\nsomos sujetos al dolor fatal.\nMas en el cielo cesará el quebranto\ny por lo siglos nunca habrá más\nmal.",
      "Amigo mío, cuánto anhelo yo verte\nlibre de penas y de turbación.\nA Jesucristo debes ya entregarte,\ntendrás también una bella\nmansión."
    ],
    coro: "Bellas mansiones hay allá en la\ngloria;\ntendré en la mía el gozo sin par.\nSuenan las notas de la grata\nvictoria;\nvoy pues con gozo a mi dulce\nhogar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_596.mp3"
    }
  },
  {
    id: 597,
    numero: 597,
    categoria: "A",
    copyright: false,
    titulo: "Dulces melodías cantaré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dulces melodías cantaré,\ny alabanzas al Señor,\na su nombre gloria yo daré,\npor su inefable amor.",
      "Yo vivía en sombras y en dolor,\ntriste, herido, pobre y vil,\nmas la tierna mano del Señor\nme llevó a su redil.",
      "Fuente perennal de gracia hallé\nal amparo de su amor\nsu sonriente faz me imparte fe,\nesperanza y valor.",
      "Aunque por el valle de aflicción\ntenga que pasar aquí,\nmi Jesús dará su protección,\nél se acordará de mí.",
      "La rosada aurora anuncia ya\nque Jesús por mí vendrá,\nmi alma alegre con él reinará\nen la celestial ciudad."
    ],
    coro: "De Jesús el nombre\ndulce es para mí,\ncanta el alma mía\nmelodías a mi Rey.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_597.mp3"
    }
  },
  {
    id: 598,
    numero: 598,
    categoria: "A",
    copyright: false,
    titulo: "Ya salvo soy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mis culpas todas borró Jesús\ncon infinito amor;\ncargó con ellas en cruenta cruz\nen medio de mortal dolor.",
      "En densas sombras anduve yo\ncuando en maldad viví,\ny mi alma nunca la paz halló,\nni gozo alguno yo sentí.",
      "Gloriosa vida de libertad,\ndisfruto yo por él;\nya no hay temores, no hay\nansiedad,\nporque él me guarda siempre fiel.",
      "Eterno canto en mi corazón\nelevo al Redentor;\nnegar no puedo su salvación,\nnegar, no puedo, no, su amor."
    ],
    coro: "salvo por él yo soy,\nsalvo por su poder,\na vida nueva Jesús me ha llevado;\n¡ya salvo soy!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_598.mp3"
    }
  },
  {
    id: 599,
    numero: 599,
    categoria: "A",
    copyright: false,
    titulo: "Salvador mío, como Tú eres",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Salvador mío, como tú eres\npuro y santo quiero vivir.\nDejando atrás los vanos placeres,\nen tus pisadas quiero seguir.",
      "Hazme valiente, fiel y benigno,\ndispuesto siempre a perdonar;\nquiero en mi vida ser compasivo,\nfiel proclamando tu voluntad.",
      "Quiero ser dócil, manso y\nhumilde,\nsiempre sumiso, siempre leal;\nmi ser entero gloria te rinde,\nbusca anhelante tu santidad.",
      "Hoy purifica toda mi alma\ncon fuego santo de tu altar,\nque desarraige todo lo malo\npara que tú la puedas usar."
    ],
    coro: "Hazme, oh Cristo como tú eres\nmi ser inunda con tu poder.\nVen en tu gloria, Padre bendito\ntu semejanza quiero tener.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_599.mp3"
    }
  },
  {
    id: 600,
    numero: 600,
    categoria: "A",
    copyright: false,
    titulo: "Mi Pastor es Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor Jesús, tú eres mi Pastor\ny a tu cuidado yo vivo tan feliz.\nYo te conozco pues tu voz oí\npacientemente llamándome al\nredil.",
      "La senda está colmada de\nabundancia,\nel pasto delicioso es para mí.\nSediento no he de estar pues tu\npalabra\nmuestra la fuente de salvación\naquí."
    ],
    coro: "Mi Pastor es Jesús, mi Buen Pastor\nes Jesús,\nmi Pastor es Jesús, mi Buen Pastor\nes Jesús.\nEn sus hombros, él me lleva\ncuando yo cansado estoy,\nmi Pastor es Jesús, mi Buen\nPastor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_600.mp3"
    }
  },
  {
    id: 601,
    numero: 601,
    categoria: "A",
    copyright: false,
    titulo: "Yo sólo espero ese día",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo sólo espero ese día cuando\nCristo volverá,\nyo sólo espero ese día cuando\nCristo volverá.\nAfán y todo trabajo para mí\nterminarán,\ncuando Cristo venga, a su reino me\nllevará.\nCuando Cristo venga, a su reino me\nllevará.",
      "Ya no me importa que el mundo me\ndesprecie por doquier,\nya no soy mas de este mundo ,soy\ndel reino celestial.\nYo solo espero ese día cuando me\nlevantare\nde la tumba fría con un cuerpo ya\ninmortal.",
      "Entonces allí triunfante y victorioso\nestaré\na mi Señor Jesucristo cara a cara le\nveré.\nAllí no habrá más tristezas, ni\ntrabajos para mí,\ncon los redimidos al Cordero\nalabaré.\nCon los redimidos al Cordero\nalabaré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_601.mp3"
    }
  },
  {
    id: 602,
    numero: 602,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh, bondad tan infinita!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh, bondad tan infinita,\nhacia el mundo pecador,\nDios, en Cristo revelando\nsu eternal y santo amor!",
      "Como el vasto firmamento,\ncomo el insondable mar,\nes la gracia salvadora\nque Jesús al alma da.",
      "Aunque fueran tus pecados\nrojos como el carmesí;\nen el río del calvario,\nhay limpieza para ti."
    ],
    coro: "Es Jesús para mí,\nla esperanza de salud,\nsólo en él hallaré,\nla divina plenitud.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_602.mp3"
    }
  },
  {
    id: 603,
    numero: 603,
    categoria: "A",
    copyright: false,
    titulo: "Años mi alma en",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "vanidad vivió (Himno 603):",
      "Años mi alma en vanidad vivió,\nignorando a quien por mí sufrió,\no que en el Calvario sucumbió\nel Salvador.",
      "Por la Biblia miro que pequé,\ny su ley divina quebrante;\nmi alma entonces contempló con fe\nal Salvador.",
      "Toda mi alma a Cristo ya entregué,\nhoy le quiero y sirvo como a Rey,\npor los siglos siempre cantaré\nal Salvador.",
      "En la cruz su amor Dios demostró,\ny de gracia al hombre revistió.\nCuando por nosotros se entregó\nel Salvador."
    ],
    coro: "Mi alma allí divina gracia halló\nDios allí perdón y paz me dio,\ndel pecado allí me libertó\nel Salvador.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_603.mp3"
    }
  },
  {
    id: 604,
    numero: 604,
    categoria: "A",
    copyright: false,
    titulo: "Ahora que soy niño",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ahora que soy niño, yo me entrego\na Dios;\na él le entrego vida, corazón y voz;\na él le entrego vida, corazón y voz.\nAél le entregó vida, corazón y voz.",
      "Quiero ser de Cristo, ser de mi Señor;\nquiero ser de Cristo, ser de mi Señor;\nporque Jesucristo me brindó su amor.\nPorque Jesucristo me brindó su amor.",
      "Un dichoso día dijo mi Señor;\nDejad a los niños que vengan a mí,\nporque a los niñitos, mi reino les dí.\nPorque a los niñitos, mi reino les\ndí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_604.mp3"
    }
  },
  {
    id: 605,
    numero: 605,
    categoria: "A",
    copyright: false,
    titulo: "El que habita al abrigo de Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El que habita al abrigo de Dios\nmorará bajo sombras de amor;\nsobre él no vendrá ningún mal\ny en sus alas feliz vivirá.",
      "El que habita al abrigo de Dios\nciertamente muy feliz será;\nángeles guardarán su salud\ny sus pies nunca resbalarán.",
      "El que habita al abrigo de Dios\npara siempre seguro estará;\ncaerán mil y diez mil por doquier,\nmas a él no vendrá mortandad."
    ],
    coro: "Oh, yo quiero habitar al abrigo\nde Dios,\nsólo allí encontraré paz y\nprofundo amor.\nMi delicia con él comunión disfrutar\ny yo siempre su nombre alabar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_605.mp3"
    }
  },
  {
    id: 606,
    numero: 606,
    categoria: "A",
    copyright: false,
    titulo: "A tu lado quiero andar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Débil soy, tu fuerza es tal\nque me guardarás del mal;\nsatisfecho estoy, oh sí,\nal andar, oh Señor, junto a ti.",
      "En la prueba y dolor\ncuídame, oh Buen Señor:\ny al fin en tu mansión\ngozaré de tu comunión."
    ],
    coro: "Atu lado andar Señor,\nesta es mi oración.\nCada día en tu amor\nsiempre guárdame, Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_606.mp3"
    }
  },
  {
    id: 607,
    numero: 607,
    categoria: "A",
    copyright: false,
    titulo: "Treinta piezas de plata",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No hay satisfacción en riqueza\nmundanal\nsi se niega al Salvador.\nEsta vida es sólo un sueño terrenal\ncuando andamos sin su amor.",
      "Su mansión de mármol dejó mi\nRedentor,\npor salvar al hombre vil.\nMás yo despreciaba su\nincomparable amor;\nfui hundido en males mil."
    ],
    coro: "Treinta piezas de plata dieron por\nJesús;\nTreinta piezas de plata, por\nél,\nquien es la luz.\nYo también tengo culpa de\nsu\nmuerte cruel;\ny te ruego oh Dios me\nperdones\npor ser tan infiel.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_607.mp3"
    }
  },
  {
    id: 608,
    numero: 608,
    categoria: "A",
    copyright: false,
    titulo: "¿Para qué pecar?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Para qué pecar si soy salvo,\nsi ya tengo tanta luz?\n¿Para qué pecar si la vida\nDios me ha dado en Jesús?\n¿Para qué pecar si el infierno\nsólo espera al pecador?",
      "Es mejor vivir santamente,\nvictoriosos contra el mal,\npues Jesús prepara a su santos\nuna patria eternal.\nUna patria hermosa en los cielos,\ndonde inmundo no entrará."
    ],
    coro: "¿Para qué pecar? ¿para qué\npecar?\n¿Para qué pecar contra Dios?\n¿Para qué pecar? ¿para qué\npecar?\n¿Para qué pecar contra Dios?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_608.mp3"
    }
  },
  {
    id: 609,
    numero: 609,
    categoria: "A",
    copyright: false,
    titulo: "Nuestra vida acabará",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nuestra vida acabará,\ncual las hojas caerá,\ncual el haz se ligará:\nBusca a Dios.\nVuela cada día veloz\ny volando da su voz:\nVen a dar tu cuenta a Dios:\nBusca a Dios.",
      "Pierde el hombre su vigor,\nse marchita cual la flor,\nse disipa cual vapor:\nbusca a Dios.\nComo el río aprisa va\nhasta entrar al vasto mar,\nvas así a la eternidad:\nbusca a Dios.",
      "Clama a Dios de corazón\ncon sincera contricción;\npor Jesús Dios da perdón:\nbusca a Dios.\nSi no escuchas al Señor,\nsi desprecias su perdón,\nte acarreas perdición:"
    ],
    coro: "Busca a Dios, busca a Dios;\nentre tanto tengas tiempo,\nbusca a Dios.\nSi te atreves a esperar,\nDios la puerta cerrará,\ny dirá, Es tarde ya.\nBusca a Dios",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_609.mp3"
    }
  },
  {
    id: 610,
    numero: 610,
    categoria: "A",
    copyright: false,
    titulo: "Yo soy un pobre peregrino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo soy un pobre peregrino, cargado\nde tribulación;\nmas con sincera fe espero\nla eterna gloria de la Sión.",
      "Allá en el cielo no hay pecado,\nen la presencia del Señor;\nencontraré seguro asilo\nmuy cerca de mi Redentor.",
      "El mundo no podrá quitarme\nla paz que halló mi corazón;\npues con Jesús podré gozarme\nde la más dulce comunión."
    ],
    coro: "En la hermosísima ribera\ndel río de la vida y luz\ngozaré de dicha eterna\nal lado de mi buen Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_610.mp3"
    }
  },
  {
    id: 611,
    numero: 611,
    categoria: "A",
    copyright: false,
    titulo: "Oh yo quiero andar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "con Cristo (Himno 611):",
      "¡Oh!, yo quiero andar con Cristo,\nquiero oir su tierna voz,\nmeditar en su Palabra\nsiempre andar de él en pos.\nConsagrar a él mi vida\ncumplir fiel su voluntad;\ny algún día con mi Cristo,\ngozaré la claridad.",
      "¡Oh!, yo quiero andar con\nCristo,\nél vivió en santidad;\nen la Biblia yo lo leo,\ny yo sé que es la verdad.\nCristo era santo en todo,\nel Cordero de la cruz;\ny yo anhelo ser cristiano,\nseguidor de mi Jesús.",
      "¡Oh!, yo quiero andar con Cristo,\nde mi senda él es la luz,\ndejaré el perverso mundo\ny cargar aquí mi cruz.\nEste mundo nada ofrece,\nCristo ofrece salvación;\ny es mi única esperanza\ngozar vida eterna en Sión."
    ],
    coro: "¡Oh, sí, yo quiero andar con\nCristo!\n¡Oh, sí, yo quiero vivir con\nCristo!\n¡Oh, sí, yo quiero morir con\nCristo!\nQuiero serle un testigo fiel.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_611.mp3"
    }
  },
  {
    id: 612,
    numero: 612,
    categoria: "A",
    copyright: false,
    titulo: "Manos cariñosas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Manos cariñosas, manos de Jesús;\nmanos que llevaron la pesada cruz.\nManos que supieron sólo hacer el\nbien,\n¡gloria a esas manos! ¡Aleluya,\namén!",
      "Blancas azucenas, lirios de amor,\nfueron esas manos de mi Redentor.\nManos que a los ciegos dieron la\nvisión\ncon el real consuelo de su gran\nperdón.",
      "Manos que supieron calmar el\ndolor,\n¡oh manos divinas de mi\nRedentor!\nQue multiplicaron los peces y el\npan,\nmanos milagrosas que la vida dan.",
      "Manos que sufrieron el clavo y la\ncruz;\nmanos redentoras de mi buen\nJesús.\nDe esas manos bellas yo confiado\nestoy,\nellas van guiando, pues al cielo voy.",
      "¡Oh Jesús!, tus manos yo las vi en\nvisión\ny vertí mi llanto con el corazón;\nvi sus dos heridas y la sangre vi\nque tú derramaste por salvarme a\nmí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_612.mp3"
    }
  },
  {
    id: 613,
    numero: 613,
    categoria: "A",
    copyright: false,
    titulo: "Ciertamente el bien",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "de Dios (Himno 613):",
      "Yo fui peregrino errabundo,\ny en las garras del mal me envolví.\nMas Cristo apartóme del mundo\ny por siempre mi alma le dí.",
      "Jesús mi alma triste conforta;\nnuevas fuerzas a diario tendré.\nSu fuente de paz no se agota,\ny en su hogar celestial moraré.",
      "Mas si ando en el valle de sombra,\nva conmigo mi buen Salvador.\nSi tú quieres que él te proteja,\nhoy recibe su gracia y amor."
    ],
    coro: "Ciertamente el bien y la compasión\nde Dios,\nhasta el fin, hasta el fin me\nseguirán.\nCiertamente el bien y la compasión\nde Dios,\nhasta el fin, hasta el fin me\nseguirán.\nY en la casa de Dios moraré\npor siempre; y comeré a la mesa\nde Jehová.\nCiertamente el bien y la compasión\nde Dios,\nhasta el fin, hasta el fin me\nseguirán.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_613.mp3"
    }
  },
  {
    id: 614,
    numero: 614,
    categoria: "A",
    copyright: false,
    titulo: "Oh Señor, recíbeme cual soy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh Señor, recíbeme cual soy,\nya no más, ya no quiero pecar.\nDel pecado me quiero apartar.\nJustifica mi ser, dame tu dulce paz\ny tu gran bendición.",
      "Oh Señor, toma mi corazón\ny hazlo tuyo por la eternidad.\nLléname de tu santa bondad,\ny en mi alma tú pon una nueva\ncanción de paz y dulce amor.",
      "Pecador, tú que vagas sin Dios\nven ahora y acepta al Señor,\nél te quiere impartir su perdón;\nél te quiere salvar, él te quiere\nayudar; hoy acepta el perdón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_614.mp3"
    }
  },
  {
    id: 615,
    numero: 615,
    categoria: "A",
    copyright: false,
    titulo: "Ven en pos de mí",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Viajaba en triste soledad y nadie\nme buscó,\nla carga horrible de impiedad más\ngrande se volvió;\nle dije a Jesucristo que me trataban\nmal,\nentonces le oí así decir:\nCamino del calvario mi pie\ntambién sufríó,\nla cruz que yo cargaba mi cuerpo\ndoblegó.\nProsigue, peregrino que el alba\nya vendrá;\ntu cruz levanta y ven en pos de mí.",
      "A veces dije que por él, penoso es\ntrabajar,\nque mucho yo sacrifiqué su senda\npor andar;\nMi fama y mi fortuna por ti yo la\ndejé,\nentonces le oí así decir:\nMi hogar de eterna gloria por ti\nabandoné,\nmis manos enclavadas en cruenta\ncruz miré.\nMas hoy caminaremos unidos tú\ny yo;\ntu cruz levanta y ven en pos de\nmí.",
      "Jesús, si llego a morir muy lejos\nde\nmi hogar,\nni así podría tu sufrir mi vida\ncompensar;\nmejor amor de amigo jamás podre\nhallar,\npor eso al Salvador oí decir:\nSi sólo un vaso de agua, te pido\nque has de dar,\nde ti un vaso de agua, sólo he de\ndemandar.\nMas si en tus aflicciónes un alma\nhas de ayudar,\nde ti muy cerca yo prometo\nestar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_615.mp3"
    }
  },
  {
    id: 616,
    numero: 616,
    categoria: "A",
    copyright: false,
    titulo: "Nunca, Dios mío",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nunca, Dios mío,\ncesará mi labio\nde bendecirte\ny cantar tu gloria,\nporque conservo,\nde tu amor inmenso,\nprofunda gratitud.",
      "Cuando, perdido\nen el vil pecado,\nno me cercaba\nsino niebla oscura,\ntú me miraste\ny alumbróme un rayo\nde tu purísima luz.",
      "Cuando inclinada\nmi abatida frente,\ndel mal obrar, al\noneroso yugo,\ndulce reposo\ny eficaz alivio\nconcédeme, oh Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_616.mp3"
    }
  },
  {
    id: 617,
    numero: 617,
    categoria: "A",
    copyright: false,
    titulo: "Te exaltaré, mi Dios, mi Rey",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Te exaltaré, mi Dios, mi Rey,\ny bendeciré tu nombre\neternamente y para siempre.\nCada día te bendeciré,\ny alabaré tu nombre\neternamente y para siempre.\nGrande es Jehová,\ny digno de suprema alabanza;\ny su grandeza es inescrutable.\nCada día te bendeciré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_617.mp3"
    }
  },
  {
    id: 618,
    numero: 618,
    categoria: "A",
    copyright: false,
    titulo: "Día en día",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Día en Día Cristo está conmigo,\nme consuela en medio del dolor.\nPues confiado en su poder eterno,\nno me afano, ni me da temor.\nSobrepuja todo entendimiento\nla perfecta paz del Salvador.\nEn su amor tan grande e infinito\nsiempre me dará lo que es mejor.",
      "Día en día Cristo me acompaña\ny me brinda dulce comunión.\nTodos mis cuidados él los lleva;\na él le entrego mi alma y corazón.\nNo hay medida del amor supremo\nde mi bondadoso y fiel Pastor.\nEl me suple lo que necesito\npues el pan de vida es mi Señor.",
      "Oh Señor, ayúdame este día\na vivir de tal manera aquí\nque tu nombre esté glorificado pues\nanhelo honrarte sólo a Ti.\nCon la diestra de tu gran justicia me\nsustentas en la turbación.\nTus promesas son sostén y guía\nsiempre en ellas hay consolación."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_618.mp3"
    }
  },
  {
    id: 619,
    numero: 619,
    categoria: "A",
    copyright: false,
    titulo: "En la vergonzosa cruz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la vergonzosa cruz,\npadeció por mí, Jesús;\npor la sangre que vertió,\nmis pecados él expió,\nlavará de todo mal\nese rojo manantial;\nel que abrió, por mí, Jesús,\nen la vergonzosa cruz.",
      "¡Oh, qué amor, qué inmenso\namor!\nReveló mi Salvador;\nla maldad que hice yo,\nal suplicio le llevó.\nAhora a ti mi todo doy,\ncuerpo y alma tuyo soy;\nmientras permanezca aquí,\nhazme siempre fiel a ti.",
      "Yo de Cristo sólo soy,\na seguirle pronto estoy;\nal bendito Redentor\nserviré con firme amor;\nsea mi alma ya su hogar,\ny mi corazón su altar;\nvida emana, paz y luz,\ndel Calvario, de la cruz."
    ],
    coro: "Sí, fue por mí, sí, fue por mí,\nfue por mí murió Jesús\nen la vergonzosa cruz.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_619.mp3"
    }
  },
  {
    id: 620,
    numero: 620,
    categoria: "A",
    copyright: false,
    titulo: "Con cánticos, Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con cánticos, Señor,\nmi corazón y voz\nte adoran con fervor.\nOh, trino, santo Dios.\nEn tu mansión yo te veré,\nde ti perdón feliz tendré.",
      "Tu mano paternal\nmarcó mi senda aquí;\nmis pasos, cada cual,\nvelados son por ti.\nEn tu mansión, yo te veré,\nde ti perdón feliz tendré.",
      "Innumerables son\ntus bienes y sin par;\ny por tu compasión\nlos gozo sin cesar.\nEn tu mansión yo te veré,\nde ti perdón feliz tendré.\nTú eres, ¡oh Señor!\nMi sumo, todo bien;\nmil lenguas tu amor\ncantando siempre estén.\nEn tu mansión yo te veré,\nde ti, perdón feliz tendré."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_620.mp3"
    }
  },
  {
    id: 621,
    numero: 621,
    categoria: "A",
    copyright: false,
    titulo: "El ciego Bartimeo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando el ciego escuchó que Jesús iba\na ir,\ncamino a Jericó; lo salió a recibir;\nle gritaba,¡Señor, ten piedad tú de mí!\nPorque ciego estoy yo y no puedo\nvivir.\nCristo le preguntó: ¿Qué podré por ti\nhacer?\nY con fe respondió: Haz que yo pueda\nver.\nCristo le preguntó: ¿Qué podré por ti\nhacer?\nY con fe respondió: Haz que yo\npueda ver.",
      "Al salir de allí daba gracias a Dios\nporque sano quedó, Cristo hízolo ver.\nEl Señor le mostró su amor y poder\ncuando al ciego sanó permitiéndole ver.\nEl sacólo también de otra noche sin luz,\npues su pena pagó Cristo allí en la cruz.\nEl sacólo también de otra noche sin\nluz,\npues su pena pagó Cristo allí en la\ncruz.",
      "Este mismo Jesús poderoso de\nayer,\nes el mismo que hoy te dará su\npoder;\ncomo escrito ya está, todo puede\nel Señor,\ncomo ayer, también hoy y por la\neternidad.\nSi tú vienes a él, salvación te dará.\nDale tu corazón; libre y sano te\nhará.\nSi tú vienes a él, salvación te dará.\nDale tu corazón; libre y sano te\nhará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_621.mp3"
    }
  },
  {
    id: 622,
    numero: 622,
    categoria: "A",
    copyright: false,
    titulo: "Ora a tu Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ora a tu Dios de mañana,\nél oye tu oración;\nora a tu Dios por la noche;\ncon él tienes comunión.",
      "Dios oirá, de mañana,\nél oye tu oración;\nDios oirá, por la noche;\ncon él tienes comunión.",
      "Cristo vendrá por su pueblo,\nél reinará en Sión;\npronto vendrá en las nubes;\ncon él tienes comunión."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_622.mp3"
    }
  },
  {
    id: 623,
    numero: 623,
    categoria: "A",
    copyright: false,
    titulo: "Lo entenderemos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "más allá (Himno 623):",
      "Cuántas veces en el mar de la vida\nal navegar,\ndensas nubes y huracanes nuestra\ndicha quitarán;\npero allá con mi Jesús cuando\nbrille plena luz,l\no comprenderemos todo: ¡Gloria\na Dios!",
      "Esta vida temporal no por siempre\nhe de gozar;\nalimento, casa y todo puedo aquí\nnecesitar;\nhoy vivimos por la fe y confiamos\nsiempre en él,\npero entenderemos todo más allá.",
      "Imprevista tentación nos prepara\nSatanás,\n¡Cuántas veces ya estamos casi a\npunto de caer!\nNo sabemos porqué Dios esto lo\npermitirá,\nmás lo entenderemos todo más\nallá."
    ],
    coro: "En la Sión, patria de solaz,\ngozaremos de perfecta paz.\nVeremos cara a cara al Salvador\ny lo entenderemos todo más allá.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_623.mp3"
    }
  },
  {
    id: 624,
    numero: 624,
    categoria: "A",
    copyright: false,
    titulo: "Yo vivo Señor porque",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "tu vives (Himno 624):",
      "Yo vivo, Señor, porque tú vives;\nporque tú vives, Señor, es que yo\nvivo.\nMe das consuelo, me das abrigo,\ny en la aflicción mi Señor estás\nconmigo.",
      "Soy salvo, Señor, pues me\nsalvaste,\npues me salvaste, Señor,\neternamente.\nYo voy al cielo; voy a la gloria,\nporque Señor, tú me diste la\nvictoria."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_624.mp3"
    }
  },
  {
    id: 625,
    numero: 625,
    categoria: "A",
    copyright: false,
    titulo: "Pero queda Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Por la mañana yo dirijo mi\nalabanza\na Dios que ha sido y es mi única\nesperanza.\nPor la mañana yo le invoco con el\nalma,\ny le suplico que me dé su dulce\ncalma.\nY él nos escucha, pues nos ama\ntanto,\ny nos alivia de cualquier\nquebranto.\nNos da su mano poderosa y\nfuerte,\npara librarnos de la misma\nmuerte.",
      "Cuando la noche se aproxima,\ntenebrosa,\nen elevarle mi oración mi alma se\ngoza;\nsiento su paz inagotable, dulce y\ngrata,\nporque temores y ansiedad, Cristo\nlos mata.\nTambién elevo mi cantar al cielo\ncuando a la tierra baja negro velo.\nEl sol se oculta, pero queda\nCristo,\na quien mis ojos en el sueño han\nVisto.",
      "Brilla su lumbre bienhechora\nmientras duermo;\npone su mano sobre mí si estoy\nenfermo.\nMe fortalece, me alienta con el\nsueño;\npues es mi Dios, mi Redentor y él\nes mi dueño.\nY al despertar por la mañana\nsiento\nque Dios invade mi alma y\npensamiento;\nveo a Jesús, mi Redentor amado,\npor mi pecado en una cruz\nclavado.",
      "Veo la sangre de sus manos que ha\nbrotado;\nveo la sangre borbotando en un\ncostado;\nuna corona con espinas en su\nfrente,\nla multitud escarneciéndole\ninsolente.\nPero, ¡qué dicha cuando al cielo\nsube,\nlleno de gloria en majestuosa nube!\nPero, ¡qué dicha cuando al cielo\nsube,\nlleno de gloria en majestuosa nube!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_625.mp3"
    }
  },
  {
    id: 626,
    numero: 626,
    categoria: "A",
    copyright: false,
    titulo: "La pérdida más grande",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Perder los bienes es mucho,\nperder la salud es aún más,\nperder el alma es pérdida tal,\nque no se recobra jamás."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_626.mp3"
    }
  },
  {
    id: 627,
    numero: 627,
    categoria: "A",
    copyright: false,
    titulo: "Soy la triste oveja",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Soy la triste oveja que dejó al\nPastor;\nyo andaba perdido cuando él me\nencontró.\nCon un silbo suave luego me\nllamó,\ny en sus brazos al dulce hogar me\nllevó.\nLas noventa y nueve dejó en el\nredil,\ny se fue al desierto a buscarme a\nmí.\nCon afán inmenso luego me llamó,\ny hallóme gimiendo de acervo\ndolor,\nse sentó a mi lado y al verme lloró.",
      "Ven, mi triste oveja, escucha mi\nvoz.\nNo me desconozcas, soy el Buen\nPastor.\nVamos al rebaño do reina la paz;\nallí donde mora el Rey celestial.\nSi por la fatiga no puedes andar,\nven, pues en mis brazos te puedo\nllevar.\nVen mi triste oveja, vamos al\nredil\nque muy tiernos pastos tendré\npara ti.\nConmigo por siempre tú vas a\nvivir."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_627.mp3"
    }
  },
  {
    id: 628,
    numero: 628,
    categoria: "A",
    copyright: false,
    titulo: "¡Cuán felices fuimos!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Cuán felices fuimos desde que\ncreímos\nen el Cristo amado que fuera\ninmolado!\nFue a la tumba fría, y resucitado,\nun hermoso día fue glorificado.\nFue a la tumba fría, y resucitado,\nun hermoso día fue glorificado.",
      "En la hora postrera, cuando Cristo\nfuera\nen la cruz clavado por nuestro\npecado,\ntiernamente dijo a Juan y a la madre:\nHe aquí tu hijo, he aquí tu madre.\nTiernamente dijo a Juan y a la\nmadre:\nHe aquí tu hijo, he aquí tu madre.",
      "Cuando le clavaban y le denostaban;\nimploro clemencia ,perdón y\npaciencia\nen favor de aquellos que en tinieblas\nyacen,\npues ignoran ellos, dijo, lo que\nhacen.\nEn favor de aquellos que en\ntinieblas yacen,\npues ignoran ellos, dijo, lo que\nhacen.",
      "En su angustia, llama, ¡sed yo\ntengo!, exclama;\n¿Ysabes que le hicieron? Vinagrele\ndieron.\nYaquel penitente que buscarte quiso,\nle ofreció la fuente de su paraíso.\nYaquel penitente que buscarte quiso,\nle ofreció la fuente de su paraíso.",
      "Con solemne calma encomienda\nsu alma\na su Padre amado que ya le ha dejado,\npor el vil pecado de un mundo soez;\ny clama angustiado: Consumado es!\nPor el vil pecado de un mundo soez;\ny clama angustiado :Consumado es!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_628.mp3"
    }
  },
  {
    id: 629,
    numero: 629,
    categoria: "A",
    copyright: false,
    titulo: "Un nombre nuevo en la",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "gloria (Himno 629):",
      "Una vez perdido vivía yo\nlejos y vagante en error;\nmas la voz de Cristo me alcanzó, me\nllamó con tierno amor.",
      "En la Biblia dice, que salvo soy\npor la gracia de Jesucristo;\nya por fe en su nombre a la\ngloria voy,\ndesde que me rescató.",
      "Cantos de alegría elevo hoy\na mi Rey y buen Salvador;\nes porque mis dones a Cristo doy,\nque me use por su amor."
    ],
    coro: "Hay un nombre nuevo en la gloria\nmío es, sí, mío es;\ny los ángeles cantan la historia,\nSalvo es el pecador.\nOh hay un nombre nuevo en la\ngloria,\nmío es, sí, mío es;\ntodos mis pecados ya son\nperdonados,\n¡gloria al Señor!",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_629.mp3"
    }
  },
  {
    id: 630,
    numero: 630,
    categoria: "A",
    copyright: false,
    titulo: "Mi pequeño corazón",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi pequeño corazón entrego a Cristo\nmi pequeño corazón entrego a Cristo,\nmi pequeño corazón entrego a Cristo;\na él le entrego yo mi corazón.",
      "Desde ahora yo me entrego a\nJesucristo,\ndesde ahora yo me entrego a\nJesucristo,\ndesde ahora yo me entrego a\nJesucristo;\na él entrego yo mi corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_630.mp3"
    }
  },
  {
    id: 631,
    numero: 631,
    categoria: "A",
    copyright: false,
    titulo: "No tengo temor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo está conmigo,\n¡qué consolación!\nSu presencia aleja\ntodo mi temor;\ntengo la promesa\nde mi Salvador:\nNo te dejaré nunca;\nsiempre contigo estoy.",
      "Fuertes enemigos\nsiempre cerca están;\nCristo está más cerca,\nguárdame del mal;\nten valor, me dice,\nsoy tu defensor;\nno te dejaré nunca;\nsiempre contigo estoy.",
      "El que guarda mi alma,\nnunca se dormirá;\nsi mi pie resbala,\nél me sostendrá;\nen mi vida diaria\nes mi protector;\ncuán fiel es su palabra:\nSiempre contigo estoy."
    ],
    coro: "No tengo temor,\nno tengo temor;\nJesús me ha prometido:\nSiempre contigo estoy.\nNo tengo temor,\nno tengo temor;\nJesús me ha prometido:\nSiempre contigo estoy.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_631.mp3"
    }
  },
  {
    id: 632,
    numero: 632,
    categoria: "A",
    copyright: false,
    titulo: "Sólo el poder de Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sólo el poder de Dios\npuede cambiar tu ser;\nla prueba yo te doy,\nél me ha cambiado a mí.\nNo ves que soy feliz\nsiguiendo al Señor;\nnueva criatura soy,\nnueva soy."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_632.mp3"
    }
  },
  {
    id: 633,
    numero: 633,
    categoria: "A",
    copyright: false,
    titulo: "Ven amigo a Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven amigo a Jesús, pues él murió\npor ti.\nRecibirás la luz que quiere darte a ti.\nMi buen Jesús murió para darte\nperdón;\nabre tu corazón y dulce paz tendrás.",
      "Las manos del Señor se abren\nhoy para ti;\nven y confía en él, y serás muy feliz.\nTus cuitas pon en Dios, pues él\nlas llevará;\nquitará tu pesar por su consolación."
    ],
    coro: "Día fatal vendrá cuando no habrá\nlugar;\nla puerta se abre hoy, y tú podrás\nentrar.\nMás gracia ya no habrá pues\ndespreciaste hoy,\nacepta, pecador, la salvación de\nDios.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_633.mp3"
    }
  },
  {
    id: 634,
    numero: 634,
    categoria: "A",
    copyright: false,
    titulo: "Cantar, reír, orar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Puedes tú cantar?\nGozo te dará.\nAcantar, cantar, cantar;\ngran gozo te dará.",
      "¿Puedes tú reír?\nGozo te dará.\nAreír, reír, reír;\ngran gozo te dará.",
      "¿Puedes tu orar?\nGozo te dará.\nAorar, orar, orar;\ntu Dios te escuchará.",
      "Todos a cantar\ny reír y orar;\na cantar, reír, orar;\ngran gozo nos dará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_634.mp3"
    }
  },
  {
    id: 635,
    numero: 635,
    categoria: "A",
    copyright: false,
    titulo: "Nadie pudo amarme",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "como Cristo (Himno 635):",
      "Yo quisiera hablarte del amor de\nCristo,\npues en él hallé un amigo fuerte y\nfiel,\npor su gracia transformó mi vida\nentera.\nLo que en esta vida soy lo debo a\nél.",
      "Mi alma estaba llena de ayes y\ntristezas,llena estaba de\nmiserias y dolor;\ncon ternura Cristo me tendió la\nmano,\ny me guió por el sendero del amor.",
      "Cada día viene a darme nuevo\naliento,\na mi corazón infunde dulce paz;\nno comprenderé porque vino a\nsalvarme,\nhasta que en el cielo pueda ver su\nfaz."
    ],
    coro: "Nadie pudo amarme como Cristo,\nes incomparable su amistad;\nsólo El pudo redimirme del\npecado,\npor su amor y su bondad.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_635.mp3"
    }
  },
  {
    id: 636,
    numero: 636,
    categoria: "A",
    copyright: false,
    titulo: "Cristo es la peña de Horeb",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo es la peña de Horeb, que\nestá brotando,\nagua de vida saludable para ti.\nCristo es la peña de Horeb, que\nestá brotando,\nagua de vida saludable para ti.\nVen, a tomarla que es más dulce\nque la miel;\nrefresca el alma, refresca todo tu\nser.\nCristo es la peña de Horeb, que\nestá brotando,\nagua de vida saludable para ti.\nCristo es el lirio del valle de las\nflores,\nél es la Rosa blanca y pura de\nSarón.\nCristo es la vida y amor de los\namores,\nél es la eterna fuente de la\nsalvación.\nVen, a buscarla en tu triste\ncondición,\nrefresca el alma, refresca todo tu\nser.\nCristo es el lirio del valle de las\nflores,\nEl es la Rosa blanca y pura de\nSarón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_636.mp3"
    }
  },
  {
    id: 637,
    numero: 637,
    categoria: "A",
    copyright: false,
    titulo: "Solo no estoy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Solo no estoy, Jesús está a mi lado,\nAmigo fiel que no me dejará.\nSolo no estoy en tempestad o en\ncalma,\nmi buen Jesús, su protección me da\nAunque la tempestad me azote,\ny el mundo me desprecie,\nno temeré llevar la cruz,\npues me guía con su amor.\nAsí camino con pleno gozo,\nSolo no estoy, Jesús conmigo está."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_637.mp3"
    }
  },
  {
    id: 638,
    numero: 638,
    categoria: "A",
    copyright: false,
    titulo: "Si fui motivo de dolor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si fui motivo de dolor, oh Cristo,\nsi por mi causa el débil tropezó,\nsi en tus pisadas caminar no quise,\nperdón te ruego, mi Señor y Dios.",
      "Si vana y fútil mi palabra ha sido,\nsi al que sufría en su dolor dejé,\nno me condenes tú por mi pecado,\nperdón te ruego, mi Señor y Dios."
    ],
    coro: "Escucha, oh Dios, mi confesión\nhumilde\ny líbrame de tentación sutil;\npreserva siempre mi alma en tu\nrebaño,\nperdón te ruego, mi Señor y Dios.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_638.mp3"
    }
  },
  {
    id: 639,
    numero: 639,
    categoria: "A",
    copyright: false,
    titulo: "El mundo no es mi hogar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "El mundo no es mi hogar, soy\nperegrino aquí;\nen la ciudad de luz, tendré\ntesoros, sí.\nEterno resplandor por siempre\ngozaré,\ny la vida mundana jamás desearé.",
      "Un himno entonaré a Cristo el\nSalvador,\ndigno eres oh Señor de gloria\ny honor.\nLa patria celestial por siempre\ngozaré,\ny la vida mundana jamás desearé.",
      "Ningún dolor habrá al lado de Jesús,\nquien derramo su sangre el la\ncruenta cruz.\nperfecta paz allá por siempre\ngozaré,\ny la vida mundana jamás desearé."
    ],
    coro: "Bendito Cristo, tú eres siempre fiel,\nla dicha que me das más dulce es\nque la miel,\nla célica mansión por siempre\ngozaré,\ny la vida mundana jamás desearé.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_639.mp3"
    }
  },
  {
    id: 640,
    numero: 640,
    categoria: "A",
    copyright: false,
    titulo: "Cuando en ocaso mi sol",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "se ponga (Himno 640):",
      "Cuando en ocaso mi sol se ponga,\ngloriosa aurora veré lucir;\nmañana eterna que ansioso espero\ncon mi Maestro sin fin vivir.",
      "Cuando en ocaso mi sol se ponga,\nno iré a la noche de cruel dolor.\nCon firme acento mi fe me dice\nque hay luz y dicha con el Señor.",
      "Cuando en ocaso mi sol se ponga,\nel rostro amado yo voy a ver\nde mi Maestro que ya me espera,\ny eterna dicha me va a ofrecer.",
      "Cuando en ocaso mi sol se ponga,\na los que yo amo voy a mirar,\nlos que primero de aquí se fueron\ny que con Cristo voy a encontrar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_640.mp3"
    }
  },
  {
    id: 641,
    numero: 641,
    categoria: "A",
    copyright: false,
    titulo: "Suenan melodías en mi ser",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Del Dios del cielo oí un canto\nmelodioso, arrobador;\nlo cantaré con gozo y gratitud,\ncon muy dulce y tierno amor.",
      "Amo a Jesús en el Calvario\nmis pecados ya borró;\nmi corazón se inflama en santo\namor\nque en mi ser él derramó.",
      "Será mi tema allá en la gloria,\ndel gran trono en derredor,\ncantar con gozo y con gratitud\nalabanzas al Señor."
    ],
    coro: "Suenan melodías en mi ser,\nde un canto celestial, sonoro,\nangelical;\nsuenan melodías en mi ser\nde un dulce canto celestial.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_641.mp3"
    }
  },
  {
    id: 642,
    numero: 642,
    categoria: "A",
    copyright: false,
    titulo: "He decidido seguir a Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "He decidido seguir a Cristo,\nhe decidido seguir a Cristo,\nhe decidido seguir a Cristo;\nno vuelvo atrás, no vuelvo atrás.",
      "El Rey de gloria me ha\ntransformado,\nel Rey de gloria me ha\ntransformado,\nel Rey de gloria me ha\ntransformado;\nNo vuelvo atrás, no vuelvo atrás.",
      "La vida vieja ya he dejado,\nla vida vieja ya he dejado,\nla vida vieja ya he dejado;\nno vuelvo atrás, no vuelvo atrás.",
      "Si otros vuelven yo sigo a Cristo,\nsi otros vuelven yo sigo a Cristo,\nsi otros vuelven yo sigo a Cristo;\nno vuelvo atrás, no vuelvo atrás."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_642.mp3"
    }
  },
  {
    id: 643,
    numero: 643,
    categoria: "A",
    copyright: false,
    titulo: "Canten del amor de Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Canten del amor de Cristo,\nensalzad al Redentor\ntributadle, santos todos,\ngrande gloria y loor.",
      "La victoria es segura,\na las huestes del Señor;\n¡oh, pelead con la mirada\npuesta en nuestro Protector!",
      "El pendón alzad, cristianos,\nde la cruz, y caminad;\nde victoria en victoria,\nsiempre firmes avanzad.",
      "Adelante en la lucha,\n¡oh soldados de la fe!\nNuestro el triunfo, ¡oh, escucha\nlos clamores, ¡viva el Rey!"
    ],
    coro: "Cuando estemos en gloria,\nen presencia de nuestro\nRedentor,\na una voz la historia,\ndiremos del gran vencedor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_643.mp3"
    }
  },
  {
    id: 644,
    numero: 644,
    categoria: "A",
    copyright: false,
    titulo: "¿Estamos tristes?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¿Estamos tristes? ¡No! ¡No! ¡No!\nPesares vienen, pesares van,\nen Dios confiamos, él nos guiará;\n¿estamos tristes? ¡No! ¡No! ¡No!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_644.mp3"
    }
  },
  {
    id: 645,
    numero: 645,
    categoria: "A",
    copyright: false,
    titulo: "De tal manera me amó",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Crucificado por mí fue Jesús,\nde tal manera me amó.\nSin murmurar fue llevado a la\nCruz,\nde tal manera me amó.",
      "El inocente Cordero de Dios,\nde tal manera me amó.\nY por salvarme sufrió muerte\natroz,\nde tal manera me amó.\nEn mi lugar padeció aflicción,\nde tal manera me amó.\nYa consumó mi eterna salvación,\nde tal manera me amó"
    ],
    coro: "De tal manera me amó;\nde tal manera me amó;\nCristo en la cruz del Calvario\nmurió;\nde tal manera me amó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_645.mp3"
    }
  },
  {
    id: 646,
    numero: 646,
    categoria: "A",
    copyright: false,
    titulo: "Oración matrimonial",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tú, Señor, que bendijiste\nlas bodas en Caná,\nhas que sea permanente\nnuestra felicidad.\nNuestra felicidad,\nen nuestro nuevo hogar;\nque no falten las virtudes\nde tu gracia y amor sin par.",
      "Oh dirige nuestras vidas\npor sendas de rectitud,\ny por todo que nos mandes\ntengamos gratitud.\nTengamos gratitud,\npaciencia y dulce paz.\nEn las pruebas y en las penas\ndanos gracia y tu solaz.",
      "Nos juramos mutuamente\nfidelidad y amor;\ny hasta el fin de nuestras vidas\nser fieles, oh Señor.\nSer fieles, oh Señor,\nsiguiéndote en pos;\nbajo tu divino amparo\nviviremos, oh Padre Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_646.mp3"
    }
  },
  {
    id: 647,
    numero: 647,
    categoria: "A",
    copyright: false,
    titulo: "Cuanto más le sirvo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Desde que salí hacia el reino,\ndesde que le di control,\ndesde que mi alma es suya,\ncuanto más le sirvo, más es\nsu dulzor.",
      "Mi necesidad él suple,\ny de gracia es dador,\nmi camino él ilumina,\ncuanto más le sirvo, más es\nsu dulzor."
    ],
    coro: "Cuanto más le sirvo, más es\nsu dulzor;\ncuanto más le amo, más da\nde su amor.\nMi vida es del cielo, mi gozo\nes su amor,\ncuanto más le sirvo, más es\nsu dulzor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_647.mp3"
    }
  },
  {
    id: 648,
    numero: 648,
    categoria: "A",
    copyright: false,
    titulo: "Buscad primero el reino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "de Dios (Himno 648):",
      "Buscad primero el reino de Dios\ny su perfecta justicia,\ny lo demás añadido será.\nAleluya, aleluya.\nBuscad primero el reino de Dios\ny su perfecta justicia,\ny lo demás añadido será.\nAleluya, aleluya.",
      "No sólo de pan el hombre vivirá,\nsino de toda palabra\nque sale de la boca de Dios.\nAleluya, aleluya.\nNo sólo de pan el hombre vivirá,\nsino de toda palabra\nque sale de la boca de Dios.\nAleluya, aleluya.",
      "Pedid, pedid y se os dará;\nbuscad y hallaréis\nllamad, llamad la puerta se\nabrirá.\nAleluya, aleluya.\nPedid, pedid y se os dará;\nbuscad y hallaréis\nllamad, llamad la puerta se abrirá.\nAleluya, aleluya."
    ],
    coro: "Aleluya, aleluya,\naleluya, aleluya,\naleluya.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_648.mp3"
    }
  },
  {
    id: 649,
    numero: 649,
    categoria: "A",
    copyright: false,
    titulo: "Engrandecido sea Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Engrandecido sea Dios\nen esta reunión,\nen esta reunión.\nAlegres, juntos a una voz:",
      "Durante el día que paso\nla mano del Señor,\nla mano del Señor\nde muchos males nos salvó:",
      "Pues hasta aquí nos ayudo,\ny siempre proveerá,\ny siempre proveerá.\nCon gratitud, placer y amor:",
      "A otras almas, ¡salva, oh Dios!\nDespiértalas, Señor,\ndespiértalas, Señor,\nescucha nuestra petición,"
    ],
    coro: "Dad gloria, gloria, gloria,\ngloria, dad gloria a nuestro\nDios. Amen.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_649.mp3"
    }
  },
  {
    id: 650,
    numero: 650,
    categoria: "A",
    copyright: false,
    titulo: "Los que con lágrimas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "sembraron (Himno 650):",
      "Los que con lágrimas\nsembraron,\ncon regocijo segarán;\ndonde sus lágrimas regaron,\nhermosas plantas crecerán.",
      "Trayendo al hombro sus\ngavillas,\ny en la garganta una canción;\nno se perdieron las semillas,\nmas dieron fruto en bendición."
    ],
    coro: "Andando irán,\nllorando irán,\npero felices volverán;\nandando irán,\nllorando irán,\npero felices volverán.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_650.mp3"
    }
  },
  {
    id: 651,
    numero: 651,
    categoria: "A",
    copyright: false,
    titulo: "La mañana gloriosa",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuán gloriosa será la mañana\ncuando venga Jesús el Salvador;\nlas naciones unidas como\nhermanas,\nbienvenida daremos al Señor.",
      "Esperamos la mañana gloriosa\npara dar la bienvenida al Dios de\namor\ndonde todo será color de rosa\nen la santa fragancia del Señor.",
      "El cristiano fiel y verdadero\ny también el obrero de valor\ny la iglesia, esposa del Cordero,\nestarán en los brazos del Señor."
    ],
    coro: "No habrá necesidad de la luz el\nresplandor,\nni el sol dará su luz, ni tampoco\nsu calor;\nallí llanto no habrá, ni tristeza, ni\ndolor,\nporque entonces Jesús el Rey del\ncielo\npara siempre será Consolador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_651.mp3"
    }
  },
  {
    id: 652,
    numero: 652,
    categoria: "A",
    copyright: false,
    titulo: "Es Cristo el Amigo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "de los niños (Himno 652):",
      "Es Cristo el amigo de todos\nlos niños;\nlos lleva consigo por sendas\nde paz.",
      "Al grupo de amigos fue Cristo\nquien dijo:\nDejad a los niños que vengan\na mí.",
      "Vayamos nosotros al lado de\nCristo,\nllevemos a otros muy cerca de él."
    ],
    coro: "Jesús, el amigo,\nbendice a los niños\ny dice que de ellos\nsu reino será.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_652.mp3"
    }
  },
  {
    id: 653,
    numero: 653,
    categoria: "A",
    copyright: false,
    titulo: "No hay senda sino El",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si en esta vida andas sin gozo sin\nrumbo,\nsi encuentras sólo penas aquí;\nven, busca a Jesucristo, quien es el\ncamino;\nperfecta paz te ofrece a ti.",
      "Aunque te vengan penas y mil\naflicciones,\naunque aquí te hagan sufrir,\nseré contigo siempre, el Salvador\ndice;\nte invita en sus pisadas seguir."
    ],
    coro: "No, no, no hay senda sino él.\nNo, no, no hay otro que es tan fiel.\nSi en esta vida andas con Cristo\nhacia el cielo,\ntendrás felicidad eternal.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_653.mp3"
    }
  },
  {
    id: 654,
    numero: 654,
    categoria: "A",
    copyright: false,
    titulo: "La nave ‘evangelista’",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La nave Evangelista,\nmarcha, marcha:\nla nave Evangelista\nmarcha para Canaán.\nLos que embarcarse quieran,\nquieran, quieran,\nlos que embacarse quieran,\nbienvenidos, sí, serán.",
      "Desembarcaron miles,\nmiles, miles;\ndesembarcaron miles,\nal buen puerto siglos ha;\ny miles más navegan\nhoy navegan,\ny miles más navegan\npor las mismas aguas ya.",
      "Con viento en popa vuelan:\nvuelan, vuelan;\ncon viento en popa vuelan\nhacia aquel florido hogar;\nfelices voces se oyen,\nse oyen, se oyen;\nfelices voces se oyen\nresonando por la mar.",
      "Embárcate conmigo,\nsí, conmigo;\nembárcate conmigo,\ntú, cansado de pecar;\ndescanso te prometo,\nte prometo,\ndescanso te prometo\nen aquel feliz lugar."
    ],
    coro: "Gloria en las alturas\nlos de a bordo cantan\ndulcemente:\nGloria en las alturas\na nuestro Capitán.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_654.mp3"
    }
  },
  {
    id: 655,
    numero: 655,
    categoria: "A",
    copyright: false,
    titulo: "Hermoso país",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hermoso manto real;\nbello país de luz,\nhermoso y dulce hogar\nhabrá allá con Jesús;\ncorona allí tendré\nbrillando en derredor\nen la eternal mansión\nadonde iré.",
      "En la mansión de Dios\nlindas cosas veré,\ny alegre el corazón,\ntesoros miraré;\nallí no habrá maldad,\nni muerte llegará,\nno habrá dolor ni mal\nsiempre jamás.",
      "Gran gozo es para mí,\nque para siempre allí,\nestaré con Jehová,\nlibre de todo mal,\nsin penas ni temor,\nmucho gozaré yo.\n¡Déjame, oh Dios, llegar\nal dulce hogar!"
    ],
    coro: "Manto real, bello país\nun dulce hogar, pueblo\nfeliz,\ncorona habré yo de\nesplender,\nen la mansión de Dios\nadonde iré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_655.mp3"
    }
  },
  {
    id: 656,
    numero: 656,
    categoria: "A",
    copyright: false,
    titulo: "Amor, amor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amor, amor, amor, amor,\nhermano mío, gózate.\nAma a tu prójimo como\na ti mismo.\nDios es amor.\nAmor, amor, amor, amor,\nhermano mío, gózate.\nAma a tú prójimo como\na ti mismo.\nDios es amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_656.mp3"
    }
  },
  {
    id: 657,
    numero: 657,
    categoria: "A",
    copyright: false,
    titulo: "No tengo cuidados",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No tengo cuidados ni tengo temor\nde lo que me espera aquí,\nconfío tan sólo en mi buen\nSalvador\nel cual cuida siempre de mí.",
      "Vendrán tempestades, lo sé yo\nmuy bien,\nla fuerza del sol faltará,\namigos dejarme lo pueden\ntambién,\nJesús siempre me sostendrá.",
      "Un día vendrá otra vez el Señor,\nal cielo él nos llevará,\nallí cesarán el afán y el dolor,\npues Dios todo dominará."
    ],
    coro: "Vivo por fe, en mi Salvador,\nno temeré, es fiel mi Señor,\nen dura lid, nunca me dejará,\nyo vivo por fe, él me sostendrá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_657.mp3"
    }
  },
  {
    id: 658,
    numero: 658,
    categoria: "A",
    copyright: false,
    titulo: "Mi Dios y yo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi Dios y yo andamos por su prado\namigos íntimos con gran amor,\nme habla él, le cuento mis pesares;\nmi Dios y yo charlamos al andar.\nMe habla él, le cuento mis pesares;\nmi Dios y yo charlamos al andar.",
      "Me cuenta de los años de antaño\ndo en plan celeste fui incluido yo;\nmi existencia él ha otorgado,\nya gozo de la vida que me dio,\nmi existencia él ha otorgado,\nya gozo de la vida que me dio.",
      "Mi Dios y yo, por siempre\nandaremos,amigos íntimos en comunión;\nel mundo pasa con sus vanidades\nmi Dios y yo, eterno y sin fin.\nEl mundo pasa con sus vanidades\nmi Dios y yo, eterno y sin fin."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_658.mp3"
    }
  },
  {
    id: 659,
    numero: 659,
    categoria: "A",
    copyright: false,
    titulo: "Mi Dios y yo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi Dios y yo andamos por su prado\namigos íntimos con gran amor,\nme habla él, le cuento mis pesares;\nmi Dios y yo charlamos al andar.\nMe habla él, le cuento mis pesares;\nmi Dios y yo charlamos al andar.",
      "Me cuenta de los años de antaño\ndo en plan celeste fui incluido yo;\nmi existencia él ha otorgado,\nya gozo de la vida que me dio,\nmi existencia él ha otorgado,\nya gozo de la vida que me dio.",
      "Mi Dios y yo, por siempre\nandaremos,amigos íntimos en comunión;\nel mundo pasa con sus vanidades\nmi Dios y yo, eterno y sin fin.\nEl mundo pasa con sus vanidades\nmi Dios y yo, eterno y sin fin."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_659.mp3"
    }
  },
  {
    id: 660,
    numero: 660,
    categoria: "A",
    copyright: false,
    titulo: "Bellas palabras de vida",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bellas palabras de vida,\nson las de Cristo Jesús.\nEllas alientan mi alma;\ndan fortaleza y luz.\nBellas palabras de vida,\ndan salvación y poder.\nBellas palabras que\ncambian la vida\ny llenan de gozo mi ser.\nBellas palabras que\ncambian la vida.\nYllenan de gozo mi ser."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_660.mp3"
    }
  },
  {
    id: 661,
    numero: 661,
    categoria: "A",
    copyright: false,
    titulo: "La gracia que me levantó",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "De Dios la gracia alabaré\ninmensa como el mar;\nel dulce mar ensalzaré\nque me logró salvar.\nVivía yo en oscuridad,\nhasta que Cristo me salvó:\nloor le rindo por la eternidad\nporque él me levantó.",
      "En el madero mi Jesús\nsu sangre derramó,\nmurió doliente en una cruz\npara probar su amor.\nMi ser sus alabanzas da\npues su promesa fiel cumplió:\nloor le rindo por la eternidad\nporque él me levantó.",
      "Bendita gracia sin igual,\nla de Jesús el Rey,Bellas palabras de vida,\nson las de Cristo Jesús.\nEllas alientan mi alma;\ndan fortaleza y luz.\nBellas palabras de vida,\ndan salvación y poder.\nBellas palabras que\ncambian la vida\ny llenan de gozo mi ser.\nBellas palabras que\ncambian la vida.\nYllenan de gozo mi ser."
    ],
    coro: "Su dulce amor me levantó\nsu dulce amor me levantó\nsu amor me hizo fiel\nsu amor salvó mi ser\nsu amor, su amor, me levantó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_661.mp3"
    }
  },
  {
    id: 662,
    numero: 662,
    categoria: "A",
    copyright: false,
    titulo: "Si no hubiera sido por",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "el Señor (Himno 662):",
      "Si no hubiera sido por el Señor;\nsi no hubiera sido por el Señor;\nmi alma se hubiera perdido si no\nhubiera sido por el Señor;\nmi alma se hubiera perdido si no\nhubiera sido por el Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_662.mp3"
    }
  },
  {
    id: 663,
    numero: 663,
    categoria: "A",
    copyright: false,
    titulo: "Un dulce canto en tu ser",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si no hubiera sido por el Señor;\nsi no hubiera sido por el Señor;\nmi alma se hubiera perdido si no\nhubiera sido por el Señor;\nmi alma se hubiera perdido si no\nhubiera sido por el Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_663.mp3"
    }
  },
  {
    id: 664,
    numero: 664,
    categoria: "A",
    copyright: false,
    titulo: "Yo tengo gozo en mi alma",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo tengo gozo en mi alma, gozo\nen mi alma,\ngozo en mi alma y en mi ser.\nEs como ríos de agua viva, ríos\nde agua viva,\nríos de agua viva en mi ser."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_664.mp3"
    }
  },
  {
    id: 665,
    numero: 665,
    categoria: "A",
    copyright: false,
    titulo: "¿Has oído Señor mis",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "oraciones? (Himno 665):",
      "¿Has oído, Señor, mis oraciones?\n¿Por ventura, has oído mi clamor?\nPues derrama tus ricas bendiciones,\ndame fe y alegría, oh Señor.\nNo pretendo riquezas con polilla\ncual los bienes terrenos que se van;\nquiero, sí, que me des sabiduría,\nasí como le diste a San Juan.\nQuiero, sí, que me des sabiduría,\nasí como le diste a San Juan.",
      "No pretendo, Señor, cosas terrenas;\nno pretendo, mi Dios, más que tu\namor;\nque me enseñes las cosas que son\nbuenas,\nque edifican, dan vida y dan valor.\nYo no dudo, Señor, que tú has oído\nmis humildes querellas, mi\noración;\nno lo dudo, Señor, porque he\nsentido\nque me has dado tu amor y tu\nperdón.\nNo lo dudo, Señor, porque he\nsentido\nque me has dado tu amor y tu\nperdón.",
      "Yo ya sé que tú quieres corazones\nhumillados, sin sombras de\nmaldad;\ntú no quieres orgullos ni pasiones,\nquieres fe, mansedumbre, paz,\nbondad.¡Oh, Señor!, tu piedad es infinita;\nla he sentido latir dentro de mi ser;\naquí estoy a tus pies, Padre\nbendito,\nno permitas que vuelva yo a caer.\nAquí estoy a tus pies, Padre\nbendito,\nno permitas que vuelva yo a caer.",
      "Yo no quiero caer; la vieja historia\nno recuerdes y dame tu perdón;\nquiero estar con los tuyos en la\ngloria,\ndisfrutando de eterno galardón.\nSi contestas, mi Dios, mis\npeticiones,\nno caeré ya jamás dentro del mal;\ny al final de la vida en las\nmansiones\nme veré en tu reino celestial.\nYal final de la vida en las\nmansiones\nme veré en tu reino celestial."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_665.mp3"
    }
  },
  {
    id: 666,
    numero: 666,
    categoria: "A",
    copyright: false,
    titulo: "Somos soldaditos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Somos soldaditos,\nsiervos del Señor;\nvamos en defensa de nuestro\nevangelio.\nTa, ta, ta, ta, ta, ta, ta\ny ganaremos la victoria con Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_666.mp3"
    }
  },
  {
    id: 667,
    numero: 667,
    categoria: "A",
    copyright: false,
    titulo: "En pecados y temor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En pecados y temor el Salvador\nme vio,\nauque indigno pecador sin\nmerced de amor;\nel calvario al morir mi vida\nrescato.\nmi salud fue consumada en la\ncruz.",
      "De la tumba ya surgió, mi\nRedentor Jesús;\na la muerte derrotó, dándonos\nplena luz\nvida eterna el pecador goza\npor fe en el,\ny los muertos han de oír su\ndulce voz.",
      "Alos cielos ascendió Cristo\ntriunfante Rey,\na la diestra de Jehová está\ntu Mediador,\nintercede en tu favor, no te\ndetengas, pues;\nno desprecies esta voz: es tu Señor."
    ],
    coro: "Ven al Señor, Oh pecador!\nEl es tu amigo Fiel, ven pecador\nVen al Señor, Oh pecador!\nEl es tu amigo fiel, ven pecador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_667.mp3"
    }
  },
  {
    id: 668,
    numero: 668,
    categoria: "A",
    copyright: false,
    titulo: "Levanten la bandera",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Levanten la bandera, los hijos del\nSeñor;\nlevanten la bandera, los hijos del\nSeñor.\nCuando Cristo venga; todo sera canto,\ntodos cantaremos: Gloria al Señor\nCuando Cristo venga, todo sera canto,\ntodos cantaremos gloria al Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_668.mp3"
    }
  },
  {
    id: 669,
    numero: 669,
    categoria: "A",
    copyright: false,
    titulo: "Victoria en Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oí bendita historia,\nde Jesús quien de su gloria,\nal calvario decidió venir\npara salvarme a mí.\nSu sangre derramada\nse aplicó feliz a mi alma,\nme dio victoria sin igual cuando\nme arrepentí.",
      "Oí que en amor tierno,\nél sanó a los enfermos;\na los cojos los mandó correr,\nal ciego lo hizo ver.\nEntonces suplicante\nle pedí al Cristo amante,\nle diera a mi alma la salud\ny fe para vencer.",
      "Oí que allá en la gloria,\nhay mansiones de victoria,\nque su santa mano preparó\npara los que él salvó.\nEspero unir mi canto\nal del grupo sacrosanto,\nque victorioso rendirá tributo\nal Redentor."
    ],
    coro: "Ya tengo la victoria,\npues Cristo me salva.\nBuscóme y compróme\ncon su divino amor.\nMe imparte de su gloria,\nsu paz inunda mi alma;\nVictoria me concedió cuando\npor mí murió.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_669.mp3"
    }
  },
  {
    id: 670,
    numero: 670,
    categoria: "A",
    copyright: false,
    titulo: "Hay sólo un camino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay sólo un camino, camino,\ncamino\nhay sólo un camino para hacernos\nrenacer.",
      "Cristo es el Camino, Camino,\nCamino.\nCristo es el Camino para\nhacernos renacer.",
      "Vamos por el Camino, Camino,\nCamino,\nvamos por el camino para\nhacernos renacer."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_670.mp3"
    }
  },
  {
    id: 671,
    numero: 671,
    categoria: "A",
    copyright: false,
    titulo: "Cual pendón hermoso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cual pendón hermoso\ndespleguemos hoy\nla bandera de la cruz,\nla verdad del evangelio de perdón\ndel soldado de Jesús.",
      "Prediquemos siempre lo que dice\nDios\nde la sangre de Jesús,\ncómo limpia del pecado al mortal\ny le da su plenitud.",
      "En el mundo proclamemos con\nfervor\nesta historia de la cruz;\nbendigamos sin cesar al Redentor,\nquien nos trajo paz y luz.",
      "En el cielo nuestro cántico será\nalabanzas a Jesús;\nnuestro corazón allí rebosará\nde amor y gratitud."
    ],
    coro: "Adelante, adelante,\nen pos de nuestro Salvador.\nNos da gozo y fe nuestro Rey,\nadelante con valor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_671.mp3"
    }
  },
  {
    id: 672,
    numero: 672,
    categoria: "A",
    copyright: false,
    titulo: "La Fuente de arriba",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La Fuente de arriba fluyendo está;\nel agua de vida tu sed saciará.\nSi tomas de ella la paz hallarás\ny el gozo del cielo tú recibirás.\nLa fuente de arriba fluyendo está;\nel agua de vida tu sed saciará.\nSi tomas de ella la paz hallarás\ny el gozo del cielo tú recibirás."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_672.mp3"
    }
  },
  {
    id: 673,
    numero: 673,
    categoria: "A",
    copyright: false,
    titulo: "Su gracia es mayor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Su gracia es mayor si las cargas\naumentan,\nsu fuerza es mayor si las pruebas es\nmas cruel.\nsi es grande la lucha mayor es su\ngracia,\nsi mas son las penas, mayor es su\npaz.",
      "Si nuestros recursos se habrán\nagotado,\nsi fuerzas nos faltan para terminar,\nsi al punto ya estamos de\ndesanimarnos,\nel tiempo ha llegado"
    ],
    coro: "Su amor no termina,\nsu gracia no acaba,\nun límite no hay al poder de Jesús;\npues de sus inmensas riquezas en\ngloria\nabundan sus dones, abunda su\namor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_673.mp3"
    }
  },
  {
    id: 674,
    numero: 674,
    categoria: "A",
    copyright: false,
    titulo: "Un hogar tengo en el cielo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tan bendita es mi esperanza,\nque me libra del afán:\nJesucristo ha prometido,\nque un eterno hogar tendré.",
      "Pronto pasarán las pruebas,\nya no lágrimas habrá;\nlágrimas no habrá en el cielo,\nsólo gozo y paz tendré.",
      "Con los santos redimidos,\ngozaré la eternidad,\ny en presencia de mi Cristo\ngozaré por siglos mil.",
      "En el mundo hay mucha pena,\nsufre el hombre gran dolor;\nmas por fe en Jesucristo\ntodo un día cambiará.",
      "En las rosas hay espinas,\ny en la vida hay dolor;\ncuando cruce la rivera\nsólo gozo encontraré."
    ],
    coro: "Un hogar tengo en el cielo,\nbello hogar, mansión de paz;\npor los siglos sempiternos\nmoraré con mi Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_674.mp3"
    }
  },
  {
    id: 675,
    numero: 675,
    categoria: "A",
    copyright: false,
    titulo: "A la imagen de Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A la imagen de Dios nos creó el\nSeñor,\ncon el fin divinal de su gloria\nmostrar,\nmas por senda del mal escogimos\nandar,\ndespreciando el amor del divino\nSeñor.\nDesde la eternidad nos vio Jesús,\nsu vida ofrecio: ¡Murió en la cruz!\nJesucristo escogió a este mundo\nvenir;\ncon poder nos transformó\na la imagen de Dios.",
      "Ahora creo en Jesús, mi bendito\nSeñor,\nél la culpa del mal con su sangre\nquitó;\nCon amor serviré a Jesús nuestro\nRey;\n¡oh que gran Salvador, a su nombre\nloor!\nNunca comprenderé su gran amor:\nde carne se vistió, por mí sufrió.\n¡Oh que gran salvación ofreció mi\nSeñor!\n¡Con poder nos transformó\na la imagen de Dios!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_675.mp3"
    }
  },
  {
    id: 676,
    numero: 676,
    categoria: "A",
    copyright: false,
    titulo: "La ventana al cielo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Al diseñar el arca\nque el gran Noé formó,\nJehová muy bien sabía,\nque no tendría sol.\nPor eso en la cubierta,\nuna ventana abrió,\npara que en las tinieblas,\nNoé mirara a Dios.",
      "Quizá la lucha cruenta,\nte quiera destruir,\no bien quizá te sientas\na punto de morir.\nNo temas ni desmayes,\ntu vista eleva fiel\ny a Dios por tu ventana,\ngozoso habrás de ver.",
      "Quizá perdieras todo\ntu material valer,\ntu casa, tu dinero,\ntu influencia, tu saber;\nmas no tendrás tristeza\nsi en gratitud y fe,\npor esta tu ventana,\na Dios anhelas ver.",
      "Quizá del ser amado\nte habrás de separar,\ny muy desconsolado\nte sientas desmayar.\nMas debes de gozarte\nque en medio del dolor\npor esta tu ventana\nverás a tu Señor."
    ],
    coro: "No temas, hijo mío;\nsi sopla tempestad\nsi miras hacia arriba,\ntu Redentor verás.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_676.mp3"
    }
  },
  {
    id: 677,
    numero: 677,
    categoria: "A",
    copyright: false,
    titulo: "Como los ríos van",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Como los ríos van hacia los mares,\nvienen los novios a tus altares;\nbuscando, oh Señor, con reverencia\nque selles su amor con tu presencia.",
      "Como los cerros son firmes y\nfuertes,\nsea su mutuo amor hasta la muerte.\nTengan felicidad todos los días;\nsus horas colmarás de alegría.",
      "Como los campos en la primavera,\nsu nuevo hogar, Señor, guarda y\nprospera.\nQue la virtud y paz siempre\nflorezcan,\ny en tu divino amor que\npermanezcan."
    ],
    coro: "Tu dulce bendición derrama en esta\nunión;\nsea siempre bendecida toda la vida.\nDales paz sin igual y dicha celestial.\nSea siempre bendecida toda la vida.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_677.mp3"
    }
  },
  {
    id: 678,
    numero: 678,
    categoria: "A",
    copyright: false,
    titulo: "Ven a los pies de Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven a los pies de Jesús,\nven, no desprecies su cruz.\nVen por la senda de luz,\npor la senda de luz que es\ntan sólo Jesús, quien tomando\nsu cruz, te brindó salvación;\nmira al monte de Sión.\nPor la senda de luz que es\ntan sólo Jesús, quien tomando\nsu cruz, te brindó salvación;\nmira al monte de Sión.",
      "Oye la voz del Señor,\nmira su inmenso dolor.\nPiensa en que Dios es amor,\nen que Dios es amor, sufrió\nintenso dolor por hacerte el\nfavor de brindarte salud\nen su gran plenitud.\nEn que Dios es amor, sufrió\nintenso dolor por hacerte el\nfavor de brindarte salud\nen su gran plenitud.",
      "Vuelve tus ojos a Dios,\nvuelve, escucha su voz.\nY ya no mas serán dos,\nuno solo con Dios, uno\nsolo con Dios; ven y busca\nveloz aquel bello país\ndo serás más feliz.\nUno solo con Dios,\nuno solo con Dios; ven y busca\nveloz aquel bello país\ndo serás más feliz.",
      "Abrele tu corazón\na quien te ofrece perdón.\nQuien que con su crucificción\nconsumó redención, ofreciendo\nel perdón y la consolación\ndel que quiso morir\npara hacernos vivir.\nConsumó redención ofreciendo\nel perdón y la consolación\ndel que quiso morir\npara hacernos"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_678.mp3"
    }
  },
  {
    id: 679,
    numero: 679,
    categoria: "A",
    copyright: false,
    titulo: "Qué bella historia",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Qué bella historia!\nDe su excelsa gloria\nbajó el Salvador,\nJesús, mi Redentor.\nNació en pesebre,\ndespreciado y pobre,\nvarón de lágrimas y\nde dolor.",
      "¡Qué gran misterio\ntan incomprensible!\nEl Verbo se encarnó,\ny al mundo descendió:\nel plan oculto\nrevelóse al hombre,\ny por su tierno amor\nme levantó.",
      "¡Don admirable,\ntan incomparable!\nDe plena salvación,\ny eterna redención.\nEl Sol divino\nbrilla en mi camino;\nsu luz alumbrará mi\ncorazón."
    ],
    coro: "¡Oh cuánto le amo!\nY fiel le adoro;\nél es mi vida,\nmi Redentor;\nel Rey de gloria\nvino a salvarme,\ny a revelarme\nal Dios de amor",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_679.mp3"
    }
  },
  {
    id: 680,
    numero: 680,
    categoria: "A",
    copyright: false,
    titulo: "Nuevas alegres",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nuevas alegres para decirles\ntengo ahora\ny estas son: que mis pecados son\nperdonados,\ny con Jesús tendré galardón.\nYque también aún queda lugar\nen el palacio celestial,\npara aquellos los que quisieren\nla salvación aceptar.",
      "Goces mundanos ya he dejado,\nno quiero más tan falso placer:\npaz prometieron, mas engañaron;\nno me pudieron satisfacer.\nMas bien estoy con mi Salvador,\nal cielo voy por su favor,\nCristo me guía todos los días en\nsu amor y verdad.",
      "Ya no me importa lo que dijeron\nlos enemigos de mi Señor:\nél me ha buscado y me ha salvado\nvoy a la gloria, reino de amor.\nSiempre yo tengo luchas aquí,\ndulce descanso tengo allí,\noh que gran gozo para mi alma\ncuando me llame el Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_680.mp3"
    }
  },
  {
    id: 681,
    numero: 681,
    categoria: "A",
    copyright: false,
    titulo: "Más profundo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Más profundo llévame oh Cristo,\nen tu santo amor.\nAunque sufra duras aflicciones,\nno tendré temor.",
      "Más profunda devoción a Cristo\nquiero hoy tener,\ny crecer en gracia es mi anhelo,\ndame oh Dios poder.",
      "Más profunda santificación yo\nnecesito oh Dios,\npara ser un atalaya tuyo y\nseguirte en pos."
    ],
    coro: "Oh más profundo amor, deseo\noh Señor\ntu santa voluntad quiero hacer\nen humildad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_681.mp3"
    }
  },
  {
    id: 682,
    numero: 682,
    categoria: "A",
    copyright: false,
    titulo: "¿Has contado el costo?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando llegue el momento de tu\ndecisión\nno lo dejes por alto pasar;\nsi lo haces, estás en peligro mortal.\n¿Has pensado lo que puede costar?",
      "La inmortal dicha tú puedes\nsacrificar\npor andar en la senda del mal,\nsi al Espíritu ahogas, te puedes\nperder.\n¿Has pensado lo que te ha de\ncostar?",
      "El te llama aún en su grande amor\ntodavía te invita a entrar;\n¿no te dejas salvar? ¿No le dices:\nYa voy,\nhe contado lo que puede costar?"
    ],
    coro: "El pecado te hace tu alma perder.\nAuque el mundo se postre a tus\npies\npuede ser que la puerta cerrándose\nesté.\n¿Has pensado lo que puede costar?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_682.mp3"
    }
  },
  {
    id: 683,
    numero: 683,
    categoria: "A",
    copyright: false,
    titulo: "Mi tierno Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Fue profunda la paz que por fin\nencontré,\nsanto gozo que el mundo no da;\ncuando vine con fe, cuerpo y alma\nentregué\na mi tierno, bendito Jesús.",
      "Te suplico mis pasos ordenes\naquí,\nque domines mi cruel voluntad;\npues anhelo servir, tus deseos\ncumplir,\nmi bendito, mi tierno Jesús.",
      "Atus pies mis talentos gozoso\npondré\ntu cariño mi premio será.\nNada quiero guardar, todo quiero\nentregar\na mi tierno, bendito Jesús.",
      "Eres Verbo de vida, Cordero de\nDios,\nel Anciano de Días, mi paz.\nDigno eres, Señor, de mi honra y\nloor,\nmi bendito, mi tierno Jesús."
    ],
    coro: "Bendito Jesús, bendito Jesús,\nloado por célicas huestes en luz:\nme postro en amor, divino Señor\nmi tierno, bendito Jesús.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_683.mp3"
    }
  },
  {
    id: 684,
    numero: 684,
    categoria: "A",
    copyright: false,
    titulo: "Galilea, bello mar",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Los trinos de los pájaros,\nperfumes de la linda flor;\nque dulces son, recuérdanme\nde Galilea, bello mar.",
      "Y cada flor en el vergel\ny lindo pájaro que hay,\nrecuérdanme por su primor\nde Galilea, bello mar.",
      "Y cuando leo yo de él\nque por las olas de la mar\nanduvo, o anhelo yo\nestar con él, oh bello mar."
    ],
    coro: "Oh bello mar, tranquilo mar,\ndo quiso Cristo meditar,\noh bello mar, tranquilo mar,\nsuspiro yo por tu cantar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_684.mp3"
    }
  },
  {
    id: 685,
    numero: 685,
    categoria: "A",
    copyright: false,
    titulo: "Testifica",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si sientes compasión por tus\namigos\nentonces háblales de tu Señor.\nSi sientes compasión por tus\namigos\nentonces háblales de tu Señor.\nHáblales de Cristo; cuenta a tus\namigos\nlo que el Salvador hizo por ti.\nHáblales de Cristo cuenta a tus\namigos\nlo que el Salvador hizo por ti.\nTestifica, testifica,\ntestifica de Cristo por doquier.\nTestifica, testifica,\ntestifica de Cristo por doquier."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_685.mp3"
    }
  },
  {
    id: 686,
    numero: 686,
    categoria: "A",
    copyright: false,
    titulo: "Grande amor de Dios",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Grande amor los cielos cantan,\nmil estrellas lo declaman:\ngrande amor, cantemos a una voz;\nmonte y valle proclaman,\ny los mares lo declaran:\ngrande amor, sí grande amor de\nDios.\nEn el canto de las aves se podrá oír;\ny en la risa de la brisa se oye repetir.\ncielo y tierra en sinfonía\ncantan hoy con alegría:\ngrande amor, sí, grande amor de\nDios.",
      "Grande amor, te has revelado,\nDios en Cristo humanado,\ngrande amor, cantemos a una voz,\nal mortal en su pecado,\nen la cruz has perdonado,\ngrande amor, sí grande amor de\nDios.\nCon la creación entono canto de\nloor;\nmelodía de alegría elevo al\nSalvador.\nGrande amor, mis labios cantan,\ny con todos lo proclamen:\ngrande amor, sí, grande amor de\nDios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_686.mp3"
    }
  },
  {
    id: 687,
    numero: 687,
    categoria: "A",
    copyright: false,
    titulo: "Estoy contento porque",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "soy de Cristo (Himno 687):",
      "Estoy contento porque soy de\nCristo;\nestoy contento porque soy de\nCristo;\nestoy contento porque soy de\nCristo.\n¡Aleluya! ¡Gloria a Dios!",
      "No soy del mundo porque soy\nde Cristo;\nno soy del mundo porque soy\nde Cristo;\nno soy del mundo porque soy\nde Cristo.\n¡Aleluya! ¡Gloria a Dios!",
      "Yo canto alegre porque soy de\nCristo;\nyo canto alegre porque soy de\nCristo;\nyo canto alegre porque soy de\nCristo.\n¡Aleluya! ¡Gloria a Dios!",
      "Yo voy al cielo porque soy de\nCristo;\nyo voy al cielo porque soy de\nCristo;\nyo voy al cielo porque soy de\nCristo.\n¡Aleluya! ¡Gloria a Dios!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_687.mp3"
    }
  },
  {
    id: 688,
    numero: 688,
    categoria: "A",
    copyright: false,
    titulo: "Al amparo de la roca",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "salvo estoy (Himno 688):",
      "Aunque ruda la tormenta\nse desate en derredor,\nal amparo de la Roca salvo estoy.\nAunque el cielo este sombrío\nno me invadirá temor,\nal amparo de la Roca salvo estoy.",
      "Aunque ruja el mar furioso\ny agitado está el turbión,\nal amparo de la Roca salvo estoy.\nEn el puerto de reposo\ny velando en oración,\nal amparo de la Roca salvo estoy.",
      "Con ternura Dios me cuida\ndel peligro y del dolor,\nal amparo de la Roca salvo estoy.\nEl mis penas dulcifica,\nsoy objeto de su amor;\nal amparo de la Roca salvo estoy."
    ],
    coro: "Al amparo de la Roca salvo estoy,\nal amparo de la Roca salvo estoy.\nSi a mi lado está el Señor,\nno tendré ningún temor,\nal amparo de la Roca salvo estoy.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_688.mp3"
    }
  },
  {
    id: 689,
    numero: 689,
    categoria: "A",
    copyright: false,
    titulo: "Si en verdad eres salvo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Si en verdad eres salvo, di:\n¡amén!\nSi en verdad eres salvo, di:\n¡amén!\nSi en verdad eres salvo, testificará\ntu vida,\nsi en verdad eres salvo, di:\n¡amén!.\nMío, mío, mío, Jesús es mío.\nMío en la tristeza, mío en la alegría.\nMío, mío, mío, Jesús es mío,\nmío para siempre, amén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_689.mp3"
    }
  },
  {
    id: 690,
    numero: 690,
    categoria: "A",
    copyright: false,
    titulo: "El gran día del juicio",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Soñé que el gran día del juicio llegó,\ny sonó el clarín;\nsoñé ver los pueblos reunidos\npara oír de su suerte sin fin.\nDel cielo bajó un gran ángel,\ny parado en tierra en mar,\njuró con su diestra alzada,\nque el tiempo ya no más será.",
      "El rico llegó, mas su oro se fue,\ny se desvaneció,\ncual pobre parose ante el trono,\nde sus deudas a Dios se acordó.\nEl grande también, mas la muerte\nle había quitado su honor:\ny el ángel abriendo los libros,\nno halló nada en su favor.",
      "Vino el moralista al juicio,\nmas vana fue su pretensión;\ntambién los que a Cristo mataron\nhicieron moral profesión.\nYel alma que daba la excusa\nhoy no, otro día mejor,\nhallóse en el día del juicio,\nperdido por su gran error."
    ],
    coro: "Con llanto y duelo entonces,\nlos perdidos su cuenta darán;\nclamarán a las rocas, cubridnos,\noraran, pero tarde será.\nClamarán a las rocas, cubridnos,\norarán, pero tarde será.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_690.mp3"
    }
  },
  {
    id: 691,
    numero: 691,
    categoria: "A",
    copyright: false,
    titulo: "Solamente en Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Solamente en Cristo, solamente en él,\nla salvación se encuentra en él.\nNo hay otro nombre dado a los\nhombres;\nsolamente en Cristo, solamente en él."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_691.mp3"
    }
  },
  {
    id: 692,
    numero: 692,
    categoria: "A",
    copyright: false,
    titulo: "¡Cuánto le amo!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En el Calvario Amigo hallé\nque mi alma transformó.\nMe perdonó y me salvó\npor su bendito amor.",
      "Cuando estoy solo y en temor\nle busco en ansiedad,\nes tal su amor y su candor\npues junto a mí está.",
      "Cuando del alba al despuntar\nmi alma goce fiel,\nse que conmigo ha de estar\nel santo Emmanuel."
    ],
    coro: "¡Cuánto le amo! Jesús de\nNazareth.\n¡Cuánto le amo!, quien al\nCalvario fue.\nComo él no hay otro, Santo y\namoroso.\n¡Cuánto le amo!, pues él murió\npor mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_692.mp3"
    }
  },
  {
    id: 693,
    numero: 693,
    categoria: "A",
    copyright: false,
    titulo: "Rostro Divino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Rostro divino de mi Señor,\nrostro divino, lleno de amor,\naunque ultrajado, siempre apacible,\nsiempre apacible ante el dolor.\nRostro divino de mi Jesús,\nSanto y sublime lleno de luz,\n¡cómo le inspiras paz a mi alma,\ny dulce calma al corazón!\n¡Cómo le inspiras paz a mi alma,\ny dulce calma al corazón!",
      "Sobre tus sienes corre el sudor,\nque manifiesta tu cruel dolor.\nGotas de sangre inmaculada,\nque es derramada en mi favor.\nEnsangrentado rostro sin par,\nal contemplarte debo llorar,\nviendo tus ojos mirando al cielo,\nmientras el velo se parte en dos.\nViendo tus ojos mirando al cielo,\nmientras el velo se parte en dos.",
      "La maravilla de tu poder,\naún hoy día yo puedo ver,\ncuando aunque el bulgo te zahería,\ny te escupía a su querer.\nsiempre impregnado de compasión,\ndiste a los hombres tu corazón,\nque fue partido por una lanza,\ndando esperanza de salvación.\nQue fue partido por una lanza,\ndando esperanza de salvación.",
      "Rostro divino, si he de vivir,\ntodos mis días quiero sentir\nlas impresiones de tu ternura\ny las honduras de tu gemir.\nRostro divino, mírame más;\ntransmite a mi alma dulce solaz.\nNunca te apartes de mi sendero,\nbello lucero de vida y paz.\nNunca te apartes de mi sendero,\nbello lucero de vida y paz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_693.mp3"
    }
  },
  {
    id: 694,
    numero: 694,
    categoria: "A",
    copyright: false,
    titulo: "Contento estoy en",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "mi corazón (Himno 694):",
      "Contento estoy, en mi corazón;\nde Cristo soy, esta es mi canción.\nContento estoy, en mi corazón;\nal cielo voy, esta es mi canción.\n¡Gloria aleluya!, al Salvador,\nal cielo voy esta es mi canción.\n¡Gloria aleluya!, al Salvador,\nal cielo voy esta es mi canción."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_694.mp3"
    }
  },
  {
    id: 695,
    numero: 695,
    categoria: "A",
    copyright: false,
    titulo: "Nada sé sobre el futuro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Nada sé sobre el futuro,\ndesconozco lo que habrá,\nes probable que las nubes,\nmi luz venga a opacar.\nNada temo del futuro\npues Jesús conmigo está,\nyo le sigo decidido\npues él sabe lo que habrá.",
      "Mi sendero es más brillante\ncuando gozo de su amor;\nmás ligeras son mis cargas\ncuando voy a mi Señor.\nCuando llegue a las mansiones\nque en la gloria preparó,\nya no más tendré temores,\ndesengaños ni dolor.",
      "Nada sé sobre el futuro,\ndesconozco lo que habrá;\nmas si él cuida de las aves,\nél también me cuidará.\nYal andar por mi camino,\nen la prueba o tempestad,\nsé que Cristo irá conmigo,\nsé que guarda su bondad."
    ],
    coro: "Muchas cosas no comprendo\ndel mañana con su afán,\nmas un dulce Amigo tengo,\nque mi mano sostendrá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_695.mp3"
    }
  },
  {
    id: 696,
    numero: 696,
    categoria: "A",
    copyright: false,
    titulo: "Mi ser entero transformó",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Mi Salvador y Redentor!\nSu santo amor me redimió.\nEl me llamó con compasión:",
      "El me ofreció sin par solaz,\nme libertó de mi maldad;\nsuplió mi gran necesidad,",
      "Buscóme fiel su dulce amor,\nhasta que vine al Salvador;\nbendita paz mi alma halló"
    ],
    coro: "Mi ser entero transformó.\nMe rescató, me transformó;\nde él yo soy y mío es él;\ndescanso dio, perfecto amor;\npor siempre viviré con él.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_696.mp3"
    }
  },
  {
    id: 697,
    numero: 697,
    categoria: "A",
    copyright: false,
    titulo: "Despreciemos el pecado",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Despreciemos el pecado, amigo mío;\ndespreciemos el pecado, por favor.\nYa no es tiempo de vagar por los\ndesvíos\ninventados por el viejo engañador.\nDespreciemos el pecado para\nsiempre;\nresolvamos consagrarnos a Jesús\ny vayamos por todito el continente,\nproclamando el gran mensaje de\nla cruz.",
      "¿Dónde están los beneficios del\npecado?\n¿Dónde están los beneficios del error?\n¿No es verdad que Satanás nos ha\nengañado,\napartándonos de Cristo el Redentor?\nPues rompamos con Satán ahora\nmismo;\ncon el mundo y toda sombra de\nmaldad,\nproclamando a viva voz el\ncristianismo,\nproclamando a viva voz la santidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_697.mp3"
    }
  },
  {
    id: 698,
    numero: 698,
    categoria: "A",
    copyright: false,
    titulo: "Quédate Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Quédate Señor, quédate Señor,\nquédate Señor en cada corazón.\nQuédate Señor, quédate Señor,\nquédate Señor en mí.\nOh Cristo mío, haz en mi alma\nun altar\npara adorarte con devoción.\nOh Cristo mío, haz en mi alma\nun altar\npara adorarte de todo corazón."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_698.mp3"
    }
  },
  {
    id: 699,
    numero: 699,
    categoria: "A",
    copyright: false,
    titulo: "A la casa de Jairo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ala casa de Jairo iba Jesús;\nuna gran multitud iba tras él.\nYuna pobre mujer llena de fe,\nno miró la multitud, mas le tocó",
      "Aquel pueblo inmenso le escuchó;\nuna parte creía al Señor;\npero el resto furioso rechazó\na este mensajero del excelso amor.",
      "Jesucristo, fui yo quien te tocó;\nmi mal ningún doctor pudo\nquitar;\nmas tu mano potente me sanó;\nya mi alma y cuerpo traigo a tu\naltar."
    ],
    coro: "Haz tú cual la mujer que le tocó\nel borde del vestido del Señor.\nVirtud salió de él, y ella sanó;\ny si le tocas tú, salvo serás.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_699.mp3"
    }
  },
  {
    id: 700,
    numero: 700,
    categoria: "A",
    copyright: false,
    titulo: "Toma por favor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Toma por favor mi vida, Señor,\ncontigo quiero ir.\nCon sangre aquí pagaste por mí;\nte quiero hoy seguir.\nAnhelo poder lo malo vencer,\ny en santidad vivir.\nToma por favor mi vida, Señor,\ncontigo quiero ir."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_700.mp3"
    }
  },
  {
    id: 701,
    numero: 701,
    categoria: "A",
    copyright: false,
    titulo: "Su rostro allí contemplaré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ignoro yo cuando será\nque a mi mansión he de llegar;\nno puedo ver cuando será\nque por sus puertas he de\nentrar;\npero es mejor vivir así\nsi el tiempo vuela para mí;\nmas esto sé: que al arribar,\nsu rostro allí podré mirar.",
      "Tiende a pasar todo en redor.\nPasa el calor, pasa la flor,\ny aunque el gozar es temporal\nhay menos mal, menos afán.\nNo importa ya si he de reír\nno importa ya si he de sufrir,\nmas esto sé: que al arribar\nsu rostro allí podré mirar."
    ],
    coro: "Ami Señor contemplaré,\ny con los santos viviré,\nsí, cara a cara le veré\ny eternamente le amaré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_701.mp3"
    }
  },
  {
    id: 702,
    numero: 702,
    categoria: "A",
    copyright: false,
    titulo: "Cristo abre el camino",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo abre el camino,\nCristo abre el camino.\nCristo abre el camino;\nun día lo abrió, ¡oh gloria!\nUna vez perdido fui,\nmas Jesús hallóme y así, un día\nél lo abrió para mí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_702.mp3"
    }
  },
  {
    id: 703,
    numero: 703,
    categoria: "A",
    copyright: false,
    titulo: "¡Qué gozo es caminar con",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesucristo! (Himno 703):",
      "Andaba yo sin paz, siguiendo a\nSatanás,\nmas un buen día el Salvador me\nhalló.\nHundido en la maldad y lleno de\nansiedad,\nel grande amor de Cristo me\nalcanzó.",
      "Del lodo de maldad y negra\niniquidad,\nJesús me levantó con tierno amor.\nMe encuentro hoy feliz\ny voy a aquel país do para siempre\ncantaré al Señor."
    ],
    coro: "Que gozo es caminar con Jesucristo\ndulce comunión con Él yo tengo\nsiempre oye mi clamor\npues es mi fiel Consolador\nSi vienen penas mil y aflicciones\nmiro al Salvador y con canciones\nle doy alabanzas por su amor que es.\nsin igual.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_703.mp3"
    }
  },
  {
    id: 704,
    numero: 704,
    categoria: "A",
    copyright: false,
    titulo: "Marcharé con Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Marcharé con Jesús,\npor la senda de la luz,\nla victoria con Cristo a ganar.\nMarcharé sin temor,\ninflamado de valor, y por\nsiempre su nombre ensalzar.\nEs el vencedor, Jesús, el Salvador,\nIncomparable y sin par.\nCon él Capitán vamos a triunfar,\nla victoria con Cristo a ganar.\nLa victoria con Cristo a ganar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_704.mp3"
    }
  },
  {
    id: 705,
    numero: 705,
    categoria: "A",
    copyright: false,
    titulo: "Dios descendió",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Día tan grande no puedo olvidar,\ndía de gloria sin par;\ncuando en tinieblas al verme andar,\nvino a salvarme el Señor.\nGran compasión tuvo Cristo de mí,\nde gozo y paz me lleno.\nQuitó las sombras o gloria a su\nnombre,\nla noche en día cambió.",
      "Nací de nuevo en virtud de Jesús,\na la familia de Dios.\nJustificado por Cristo el Señor,\ngozo la gran redención.\nBendito sea mi Padre y Dios,\nque cuando vine con fe,\nfui adoptado por Cristo el amado,\nloores por siempre daré.",
      "Tengo esperanza de gloria eternal,\nme regocijo en Jesús;\nme ha preparado un bello rincón,\nen la mansión celestial.\nSiempre recuerdo con fe y gratitud,\nal contemplarle en la cruz,\nque sus heridas me dieron la vida,\n¡alabo al bendito Jesús!"
    ],
    coro: "Dios descendió, de gloria me lleno,\ncuando Jesús por gracia me salvó;\nfui ciego, me hizo ver,\ny en él renacer,\nDios descendió y de gloria me lleno.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_705.mp3"
    }
  },
  {
    id: 706,
    numero: 706,
    categoria: "A",
    copyright: false,
    titulo: "Con Cristo en tu barco",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con Cristo en tu barco todo marcha\nfeliz, marcha feliz, marcha feliz,\ncon Cristo en tu barco todo marcha\nfeliz, el viento pasará.\nNo tendrás temor, no tendrás temor,\ncon Cristo en tu barco todo marcha\nfeliz, el viento pasará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_706.mp3"
    }
  },
  {
    id: 707,
    numero: 707,
    categoria: "A",
    copyright: false,
    titulo: "Cristo habita en mi ser",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En mi ser tengo paz, una célica\npaz\nque el mundo no puede quitar;\nen la prueba fatal o en la lucha\nmortal\ntengo paz inefable y sin par.",
      "Cuando vine a Jesús, encontré\nplena luz,\nsu paz a mi alma inundó;\nla tristeza acabó y la noche pasó\nporque Cristo Jesús me salvó.",
      "Esta paz sin igual que me libra de\nmal,\nsublime, sin par, eternal;\nno la quiero dejar, pues me ha de\nllevar\na mi eterna mansión celestial."
    ],
    coro: "En mi ser habita, Cristo el Señor;\nen mi ser habita; ¡oh que amor!\nEl no me desampara,\npues promete fiel\nque estará conmigo\nmi Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_707.mp3"
    }
  },
  {
    id: 708,
    numero: 708,
    categoria: "A",
    copyright: false,
    titulo: "Demos gracias al Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Demos gracias al Señor,\ndemos gracias,\ndemos gracias por su amor.\nDemos gracias al Señor,\ndemos gracias,\ndemos gracias por su amor.\nPor las mañanas las aves cantan\nlas alabanzas de Cristo el Salvador.\nYtú, amigo, ¿por qué no cantas\nlas alabanzas de Cristo el Salvador?"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_708.mp3"
    }
  },
  {
    id: 709,
    numero: 709,
    categoria: "A",
    copyright: false,
    titulo: "Jubilosas nuestras voces",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jubilosas nuestras voces\nelevamos con fervor,\npara dar la bienvenida\na los siervos del Señor.\nBienvenidos los campeones\nde la fe y de la verdad,\na quien nuestros corazones\nhoy les brindan su amistad.",
      "Bienvenidos los soldados\nde las huestes de Jesús,\nlos que luchan denodados\npor el triunfo de la luz.\nUno solo es nuestro anhelo\ntrabajamos con tesón\npara hacer que el Rey del cielo\nreine en cada corazón."
    ],
    coro: "Bienvenidos, bienvenidos,\nadalides de Jehová;\nparabienes no fingidos,\nparabienes no fingidos,\nparabienes no fingidos,\nla congregación os da.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_709.mp3"
    }
  },
  {
    id: 710,
    numero: 710,
    categoria: "A",
    copyright: false,
    titulo: "Yo tengo un amigo que",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "me ama (Himno 710):",
      "Yo tengo un amigo que me ama,\nme ama, me ama.\nYo tengo un amigo que me ama:\nsu nombre es Jesús.",
      "Tú tienes un amigo que te ama,\nte ama, te ama.\nTú tienes un amigo que te ama:\nsu nombre es Jesús.",
      "Tenemos un amigo que nos ama,\nnos ama, nos ama.\ntenemos un amigo que nos ama:\nsu nombre es Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_710.mp3"
    }
  },
  {
    id: 711,
    numero: 711,
    categoria: "A",
    copyright: false,
    titulo: "Hay un precioso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "manantial (Himno 711):",
      "Hay un precioso manantial,\nde sangre de Emmanuel,\nque purifica a cada cual,\nque se sumerge en él.",
      "El malhechor se convirtió,\npendiente de una cruz;\nél vio la fuente y se lavó,\ncreyendo en Jesús.",
      "Y yo también mi pobre ser,\nallá logré lavar;\nla gloria de su gran poder,\nme gozo ensalzar.",
      "¡Eterna fuente carmesí!\n¡Raudal de puro amor!\nSe lavará por siempre en ti,\nel pueblo del Señor."
    ],
    coro: "Sí, salvo soy, sí, salvo soy,\nsí, salvo soy, sí, salvo soy;\npor la sangre de Cristo mi Señor,\npor la sangre de Cristo, mi Señor,\npor la sangre de Cristo, mi Señor,\nla sangre de su cruz.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_711.mp3"
    }
  },
  {
    id: 712,
    numero: 712,
    categoria: "A",
    copyright: false,
    titulo: "La clase ha terminado",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La clase ha terminado y vamos al\nhogar.\nAdiós, adiós, sed fieles al Señor.\nAdiós, adiós, sed fieles al Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_712.mp3"
    }
  },
  {
    id: 713,
    numero: 713,
    categoria: "A",
    copyright: false,
    titulo: "Muéstranos Jesús tu rostro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Muéstrame Jesús tu rostro;\nlíbrame de mi maldad.\nhazme puro y hazme limpio.\nDame, Cristo, tu piedad.\n(Solo)\nMe hallo triste y agobiado\ny te pido dulce paz.\nAnte ti me postro, y ruego:\nMuéstrame, Jesús, tu faz.",
      "Muéstrame, Jesús, tu rostro.\nEl temor me llena el ser,\nmas cual sombra se disipa,\nsi por fe te puedo ver.\n(Solo)\nEn mi angustia, oye, ¡oh! Cristo\nmi humilde petición.\nTu promesa cumple, ¡oh! Dios.\nDame plena salvación.",
      "Muéstrame, Jesús, tu rostro\nen la gloria de tu luz.\nHazme oír tu voz tan dulce\nsusurrar tu amor, Jesús.\n(Solo)\nMi confianza en ti reposa;\ntu darás divina paz.\nEl perdón de mis pecados\ntrae a mi alma gran solaz."
    ],
    coro: "Muéstrame, Jesús, tu rostro;\nlíbrame de mi maldad.\nHazme puro y hazme limpio;\ndame Cristo tu piedad.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_713.mp3"
    }
  },
  {
    id: 714,
    numero: 714,
    categoria: "A",
    copyright: false,
    titulo: "Mi corazón contento está",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi corazón contento está,\nmi corazón contento está,\nporque el Señor ya me salvó.\nMi corazón contento está,\nmi corazón contento está,\nporque el Señor ya me salvó.\n¡Oh, qué feliz, oh qué feliz se\nsiente el alma con Jesús,\npor la paz que ningún otro puede\ndar.\n¡Oh, qué feliz, oh qué feliz se\nsiente el alma con Jesús,\npor la paz que ningún otro puede\ndar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_714.mp3"
    }
  },
  {
    id: 715,
    numero: 715,
    categoria: "A",
    copyright: false,
    titulo: "Cristo me salvó",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Canto feliz de Cristo Jesús;\nsalvo soy, salvo soy\nde mis pecados ya me libertó\nCristo me salvó.",
      "Mi Salvador es Cristo, el Rey,\nsalvo soy, salvo soy\nen plena gloria con él estaré\nCristo me salvó."
    ],
    coro: "Salvo soy por el Señor,\ngloria, gloria, suyo soy.\nTodo a él ahora doy\nCristo me salvó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_715.mp3"
    }
  },
  {
    id: 716,
    numero: 716,
    categoria: "A",
    copyright: false,
    titulo: "Ya viene la carroza",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando a la tierra vuelva en gloria;\nde este mundo pronto saldré;\nyo cantaré la bella historia;\nde este mundo pronto saldré.",
      "Cristo el Señor está a mi lado;\nde este mundo pronto saldré;\ny me dará palacio de oro;\nde este mundo pronto saldré."
    ],
    coro: "Ya viene la carroza;\nde este mundo pronto saldré.\nYa viene la carroza;\nde este mundo pronto saldré.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_716.mp3"
    }
  },
  {
    id: 717,
    numero: 717,
    categoria: "A",
    copyright: false,
    titulo: "Bendito seas Jehová",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bendito seas, Jehová, la Roca\npor toda la eternidad;\nmi escondedero y mi refugio\neres tú, bendito Jehová.\nEn tu palabra esperaré,\ny mi confianza en Ti pondré.\n¡Oh gloria, oh aleluya!\n¡Amén, amén, amén, amén!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_717.mp3"
    }
  },
  {
    id: 718,
    numero: 718,
    categoria: "A",
    copyright: false,
    titulo: "No hay Dios tan grande",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No hay Dios tan grande como tú;\nno lo hay, no lo hay.\nNo hay Dios tan grande como tú;\nno lo hay, no lo hay.\nNo hay Dios que puede hacer las\nobras,\ncomo las que haces tú.\nNo hay Dios que puede hacer las\nobras,\ncomo las que haces tú."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_718.mp3"
    }
  },
  {
    id: 719,
    numero: 719,
    categoria: "A",
    copyright: false,
    titulo: "No es con espada",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No es con espada, ni con ejército,\nmas con tu Santo Espíritu.\nNo es con espada, ni con ejército,\nmas con tu Santo Espíritu.\nYmuchas almas se salvarán,\ny muchas almas se salvarán,\ny muchas almas se salvarán,\ncon tu Santo Espíritu.\nYesos montes se moverán,\ny esos montes se moverán,\ny esos montes se moverán,\ncon tu Santo Espíritu."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_719.mp3"
    }
  },
  {
    id: 720,
    numero: 720,
    categoria: "A",
    copyright: false,
    titulo: "La iglesia sigue caminando",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la lucha y en la prueba,\nla iglesia sigue caminando;\nen la lucha y en la prueba,\nla iglesia sigue caminando,\nsólo se detiene para predicar.\nOh, gloria, aleluya,\nla iglesia sigue caminando;\noh gloria, aleluya,\nla iglesia sigue caminando,\nsólo se detiene para predicar"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_720.mp3"
    }
  },
  {
    id: 721,
    numero: 721,
    categoria: "A",
    copyright: false,
    titulo: "Cristo rompe las cadenas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo rompe las cadenas,\nCristo rompe las cadenas,\ny me libra a mí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_721.mp3"
    }
  },
  {
    id: 722,
    numero: 722,
    categoria: "A",
    copyright: false,
    titulo: "Con pluma de oro",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con pluma de oro escrito está,\nescrito está, escrito está;\ncon pluma de oro escrito está,\nescrito está, escrito está;\nmi nombre más allá.\nMás allá mi nombre escrito está;\nmás allá mi nombre escrito está."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_722.mp3"
    }
  },
  {
    id: 723,
    numero: 723,
    categoria: "A",
    copyright: false,
    titulo: "Jesús me pastorea",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús me pastorea,\nyo voy con él hasta el fin;\nJesús me pastorea,\nyo voy con él hasta el fin.\nYo voy con él, yo voy con él\nhasta el fin;\nYo voy con él, yo voy con él\nhasta el fin."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_723.mp3"
    }
  },
  {
    id: 724,
    numero: 724,
    categoria: "A",
    copyright: false,
    titulo: "Y si todos ofrendamos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Y si todos ofrendamos unidos,\nunidos,\ny si todos ofrendamos,\n¡qué gozo será!\nTu ofrenda es mi ofrenda,\nnuestra ofrenda es de Dios,\ny si todos ofrendamos\n¡qué gozo será!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_724.mp3"
    }
  },
  {
    id: 725,
    numero: 725,
    categoria: "A",
    copyright: false,
    titulo: "Feliz el día sábado es",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Feliz el día sábado es,\nno importa el tiempo cómo esté,\nsi cae la lluvia\no brilla el sol,\nel día Sábado es el mejor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_725.mp3"
    }
  },
  {
    id: 726,
    numero: 726,
    categoria: "A",
    copyright: false,
    titulo: "Mi pequeñita luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Mi pequeñita luz, la dejaré brillar.\nMi pequeñita luz, la dejaré brillar.\nBrillará, brillará, brillará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_726.mp3"
    }
  },
  {
    id: 727,
    numero: 727,
    categoria: "A",
    copyright: false,
    titulo: "Oración",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Toma, oh Jesús, toma oh Jesús\nmi corazón tal cual está;\npurifica del pecado,\npurifica del pecado,\nsantifícame Señor.\nQuiero servirte, íntegramente,\nhabita en mí, querido Salvador\npara gozarme de tu presencia,\nyo seguiré para siempre a tu voz,\noye grande Dios mi petición.\nAmén, Amén"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_727.mp3"
    }
  },
  {
    id: 728,
    numero: 728,
    categoria: "A",
    copyright: false,
    titulo: "Canta alegrías al Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cuando tu camino muy pesado y\nlargo esté,\ncanta alegrías al Señor;\nen las más sombría noche pon en\nél tu fe,\ncanta alegrías al Señor.\nLleno está el mundo de tristeza\ny maldad,\nmás tenemos en el Salvador\ntranquilidad.\nNuestro Soberano Rey nos libra\ndel temor,\ncanta alegrías al Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_728.mp3"
    }
  },
  {
    id: 729,
    numero: 729,
    categoria: "A",
    copyright: false,
    titulo: "Cada paso que das",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cada paso que das\npor la senda del mal\nhay un Dios que te ve.\nCada paso que das\npor la senda del mal,\nhay un Dios que te ve.\nDios te ve, Dios te ve\nmira bien el camino en que vas\nDios te ve, Dios te ve\nnunca a él le podrás engañar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_729.mp3"
    }
  },
  {
    id: 730,
    numero: 730,
    categoria: "A",
    copyright: false,
    titulo: "Tres veces oraba Daniel",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Tres veces oraba Daniel en el día.\nTres veces oraba el Profeta Elías\nDaniel en el foso un ángel veía.\nEl profeta oraba y la lluvia caía."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_730.mp3"
    }
  },
  {
    id: 731,
    numero: 731,
    categoria: "A",
    copyright: false,
    titulo: "Dios bendiga la ofrenda",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Dios bendiga la ofrenda\nDios bendiga al que la da con\namor.\nDios bendiga la ofrenda\nDios bendiga al que la da con\namor.\nPorque la obra de Dios tendrá\nque seguir.\nPorque la obra de Dios tendrá\nque seguir\nYel evangelio de paz el mundo\nentenderá.\nYel Evangelio de paz el mundo\nentenderá."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_731.mp3"
    }
  },
  {
    id: 732,
    numero: 732,
    categoria: "A",
    copyright: false,
    titulo: "Yo se que Cristo hará",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "camino (Himno 732):",
      "Yo se que Cristo hará camino\npara mí,\nyo se que Cristo hará camino\npara mí;\nsi yo vivo en santidad, sigo el\nbien y dejo el mal.\nYo se que Cristo hará camino\npara mí.",
      "Yo sé que Cristo siempre me\nayudará,\nyo se que Cristo siempre me\nayudará;\nsi consagro todo a él y si vivo\nsiempre fiel.\nYo sé que Cristo siempre me\nayudará."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_732.mp3"
    }
  },
  {
    id: 733,
    numero: 733,
    categoria: "A",
    copyright: false,
    titulo: "La esclavitud de Egipto",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En Egipto esclavo fui sí, sí, oh ,sí,\nEn Egipto esclavo, fui del vil\nFaraón\nTriste muy triste estaba mi\ncorazón lloraba hazme libre\nSeñor. (bis)\nMoisés fue a Faraón sí, sí, oh, sí\nMoisés fue a Faraón y le dijo así:\nDeja ir a mi pueblo, para\nrendirme culto ha dicho el Señor.\n(bis)\nFaraón se endureció sí, sí, oh, sí,\nFaraón se endureció y no nos dejó\nir\nDios envió diez plagas\ndesenvainó su espada y nos dio la\nlibertad. (bis)\nLibre, tú me hiciste libre, tú me\nhiciste libre, libre Señor. (bis)\nAhora que libre estoy, sí, sí,\noh, sí,\nAhora que libre estoy,\nlibre para ti.\nQuiero rendirte culto, quiero\ncantarte gloria gloria a ti Señor.\n(bis)\nGloria, gloria, Aleluya, gloria,\naleluya, a ti, Señor. (bis)\nLibre, tú me hiciste libre, tú me\nhiciste libre, libre, Señor. (bis)"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_733.mp3"
    }
  },
  {
    id: 734,
    numero: 734,
    categoria: "A",
    copyright: false,
    titulo: "Una mirada de fe",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Una mirada de fe,\nuna mirada Señor, es la que puede\nsalvar al pecador.\nY si tú vienes a Cristo Jesús,\nél te perdonará,\nporque una mirada de fe\nes la que te puede salvar.\nY si tú vienes a Cristo Jesús,\nél te perdonará,\nporque una mirada de fe\nes la que te puede salvar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_734.mp3"
    }
  },
  {
    id: 735,
    numero: 735,
    categoria: "A",
    copyright: false,
    titulo: "Un palacio tengo allá",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un palacio tengo allá, más lindo\nque el sol,\nun palacio tengo allá, más lindo\nque el sol,\nun palacio tengo allá, más lindo\nque el sol,\ncon mi buen Jesús.",
      "Si tú quieres ir al cielo, ven al\nSeñor,\nSi tú quieres ir al cielo, ven al\nSeñor.\nSi tú quieres ir al cielo, ven al\nSeñor.\nVen, sin demorar."
    ],
    coro: "Bendito Cristo, contigo estaré,\nBendito Cristo, contigo estaré.\nBendito Cristo, contigo estaré\nen el más allá.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_735.mp3"
    }
  },
  {
    id: 736,
    numero: 736,
    categoria: "A",
    copyright: false,
    titulo: "¿Cuántas veces Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "perdonaré? (Himno 736):",
      "¿Cuántas veces Señor perdonaré?\nYo quiero perdonar y estar cerca\nde ti\n¿cuántas veces Señor perdonaré?\nSetenta veces siete, setenta veces\nsiete\nson las veces que debes perdonar;\ncomo Dios te perdonó, tú debes\nperdonar,\n¿cuantas veces Señor perdonaré?\nSi tu hermano pecaré contra ti,\nsi tu hermano pecare contra ti\ntú debes perdonar y estar cerca de\nDios\ntodo el día tú debes perdonar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_736.mp3"
    }
  },
  {
    id: 737,
    numero: 737,
    categoria: "A",
    copyright: false,
    titulo: "Te recomiendo a Jesús",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Te recomiendo a Jesús,\nte recomiendo a Jesús.\nEl te puede salvar,\nél te puede sanar:\nTe recomiendo a Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_737.mp3"
    }
  },
  {
    id: 738,
    numero: 738,
    categoria: "A",
    copyright: false,
    titulo: "A ti oh Jehová",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A ti oh, Jehová levantaré mi alma\na ti oh, Jehová levantaré mi alma.\nDios mío en ti confío no sea\navergonzado,\nno se burlan de mí mis enemigos.\nEl ángel de Jehová acampa\nalrededor\nde los que temen y los defiende."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_738.mp3"
    }
  },
  {
    id: 739,
    numero: 739,
    categoria: "A",
    copyright: false,
    titulo: "Sin Dios nada somos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sin Dios nada somos en el\nmundo,\nsin Dios nada podemos hacer,\nni las hojas de los árboles se\nmueven,\nsi no es por su poder.\nNi las hojas de los árboles se\nmueven\nsi no es por su poder."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_739.mp3"
    }
  },
  {
    id: 740,
    numero: 740,
    categoria: "A",
    copyright: false,
    titulo: "Amo yo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Amo yo, amo yo, a Jesús el\nSalvador\na Jesús sigo yo, él es mi pastor;\npor los campos al andar\ncon sus corderitos va;\na Jesús sigo yo, él es mi pastor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_740.mp3"
    }
  },
  {
    id: 741,
    numero: 741,
    categoria: "A",
    copyright: false,
    titulo: "Jesús no es tempestad",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús no es tempestad\nJesús es roca mía\nen el vendaval\nJesús mi Salvador\nes mi guía.",
      "Y cantaré y cantaré\ntu grande amor\ntu grande amor\nque sólo en Cristo\nhay salvación."
    ],
    coro: "Te seguiré, te seguiré\nte seguiré Señor.\nTe alabaré, te alabaré\nte alabaré, Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_741.mp3"
    }
  },
  {
    id: 742,
    numero: 742,
    categoria: "A",
    copyright: false,
    titulo: "Yo tengo gozo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo tengo gozo,\ngozo, gozo, gozo\nes tan hermoso\nque mi alma canta,\ncanta de alegría\nCristo está conmigo\nCristo está conmigo\ncada día más."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_742.mp3"
    }
  },
  {
    id: 743,
    numero: 743,
    categoria: "A",
    copyright: false,
    titulo: "Aleluya",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Alelu, alelu, aleluya\ngloria a Dios,\nAlelu, alelu, aleluya\ngloria a Dios.\nGloria a Dios, aleluya.\nGloria a Dios, aleluya.\nGloria a Dios, aleluya.\nGloria a Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_743.mp3"
    }
  },
  {
    id: 744,
    numero: 744,
    categoria: "A",
    copyright: false,
    titulo: "Esta alegría",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Esta alegría no va salir,\nno va a salir,\nesta alegría no va salir,\nno va salir,\nesta alegría no va salir,\nporque está dentro\nde mi corazón,\nel fuego cae, cae, cae,\nlos males salen, salen, salen\ny el creyente alaba a su Señor.\nel fuego cae, cae, cae,\nlos males salen, salen, salen\ny el creyente alaba a su Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_744.mp3"
    }
  },
  {
    id: 745,
    numero: 745,
    categoria: "A",
    copyright: false,
    titulo: "Una linda canción",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Quiero cantar una linda canción\nde aquel que mi vida cambió,\nquiero cantar una linda canción\nde aquel que me transformó.\nEs mi amigo Jesús,\nes mi amigo Jesús,\nél es Dios, él es Rey\nes Amor y es verdad,\nsólo en él encontré\nesa paz que busqué\nsólo en él encontré\nla felicidad, la felicidad."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_745.mp3"
    }
  },
  {
    id: 746,
    numero: 746,
    categoria: "A",
    copyright: false,
    titulo: "Yo tengo un abogado",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo tengo un Abogado\nque me defiende,\nEl nunca está ocupado\nsiempre me atiende.\nEl nunca pierde un caso\ntodos los gana,\nquieres saber su nombre\nJesús se llama siempre nos ama."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_746.mp3"
    }
  },
  {
    id: 747,
    numero: 747,
    categoria: "A",
    copyright: false,
    titulo: "Subamos, subamos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cristo nos manda,\nque subamos más,\nque subamos más,\nmirando al mundo\nbajaremos más,\nbajaremos más,\nporque subiendo y bajando\nnunca llegaremos\nsubamos, subamos\nmirando a Cristo\ncada día más, cada día más."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_747.mp3"
    }
  },
  {
    id: 748,
    numero: 748,
    categoria: "A",
    copyright: false,
    titulo: "Oh ven a conocer",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Oh, ven a conocer a mi Salvador,\na mi Salvador, a mi Salvador.\nOh, ven a conocer a mi Salvador\ny tendrás su dulce paz."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_748.mp3"
    }
  },
  {
    id: 749,
    numero: 749,
    categoria: "A",
    copyright: false,
    titulo: "Señor Jesús, buscándote estoy",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Señor Jesús buscándote estoy\nmi corazón te entrego yo a ti\nmi corazón te entrego yo a ti\nYo quiero paz, yo quiero tu amor\nyo quiero paz yo quiero tu amor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_749.mp3"
    }
  },
  {
    id: 750,
    numero: 750,
    categoria: "A",
    copyright: false,
    titulo: "Estoy alegre",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Estoy alegre, alegre muy alegre,\nestoy alegre\nporque Cristo me salvó.\npor eso canto, yo canto aleluya\npor eso canto\naleluya gloria a Dios."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_750.mp3"
    }
  },
  {
    id: 751,
    numero: 751,
    categoria: "A",
    copyright: false,
    titulo: "Solo Dios hace feliz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Sólo Dios hace al hombre feliz\nsólo Dios hace al hombre feliz;\nla vida es nada todo se acaba\nsólo Dios hace al hombre feliz.",
      "Cristo quiere que tú seas feliz\nCristo quiere que tú seas feliz;\nla vida es mala, todo se acaba\nCristo quiere que tú seas feliz.",
      "Soy feliz Cristo me salvó,\nsoy feliz Cristo me salvó,\nsoy feliz Cristo me salvó.\nGloria aleluya Cristo me salvó."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: true,
      url: "https://pub-655e19ffdd104042b2e1bebc1202dd02.r2.dev/audio/hymn_751.mp3"
    }
  },
  {
    id: 752,
    numero: 752,
    categoria: "A",
    copyright: false,
    titulo: "Un hombre que anduvo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un hombre que anduvo en Galilea\nse llamaba Jesús de Nazareth\ny ahora está conmigo\nrenueva si mi vida\ny aumenta cada día más y más mi\nfe.\nFe más fe, amor más amor,\nquién no puede amar al Salvador;\nfe sin fe, amor sin amor\nno puede agradar al Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 753,
    numero: 753,
    categoria: "A",
    copyright: false,
    titulo: "En esta reunión",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En esta reunión Cristo está\nEl ha prometido estar,\ndonde dos ó tres\ncongregados estén\nallí estaré, allí estaré, allí estaré.\nYo lo siento en mí,\nyo lo siento en mí,\nporque su Espíritu me hace\ncantar.\nYo lo siento en mí,\nyo lo siento en mi\nporque su Espíritu me hace\ncantar."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 754,
    numero: 754,
    categoria: "A",
    copyright: false,
    titulo: "¡Qué hogar feliz!",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Con Cristo en la familia\n¡Qué hogar feliz!\n¡Qué hogar feliz!\n¡Qué hogar feliz!\nCon Cristo en la familia\n¡Qué hogar feliz!\n¡Qué hogar feliz!",
      "Con mami en la familia,\n¡Qué hogar feliz!\n¡Qué hogar feliz!\n¡Qué hogar feliz!\nCon mami en la familia,\n¡Qué hogar feliz!\n¡Qué hogar feliz!",
      "Con papi en la familia,\n¡Qué hogar feliz!\n¡Qué hogar feliz!\n¡Qué hogar feliz!\nCon papi en la familia,\n¡Qué hogar feliz!\n¡Qué hogar feliz!",
      "Con nene en la familia,\n¡Qué hogar feliz!\n¡Qué hogar feliz!\n¡Qué hogar feliz!\nCon nene en la familia,\n¡Que hogar feliz!\n¡Que hogar feliz!"
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 755,
    numero: 755,
    categoria: "A",
    copyright: false,
    titulo: "Santo Espíritu",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Santo Espíritu llena mi vida\npues contigo deseo andar.\nSanto Espíritu llena mi vida\núsame las almas a salvar."
    ],
    coro: "Alabanzas, alabanzas,\nalabanzas doy a Cristo el Rey.\nAlabanzas, alabanzas,\nalabanzas doy al Rey.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 756,
    numero: 756,
    categoria: "A",
    copyright: false,
    titulo: "Cristo te necesita para",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "amar (Himno 756):",
      "Cristo te necesita para amar,\npara amar;\nCristo te necesita para amar.",
      "Al que viene de lejos dale amor\ndale amor,\nal que viene de lejos dale amor."
    ],
    coro: "No te importe la raza ni el color\nde la piel\nama a todos como hermanos y\nhaz el bien",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 757,
    numero: 757,
    categoria: "A",
    copyright: false,
    titulo: "Yo pensaba",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo pensaba que el hombre era\ngrande por su saber,\ngrande por su poder,\ngrande y me equivoqué.\nYo pensaba que el hombre era\ngrande por su saber,\ngrande por su poder,\ngrande y me equivoque.\nPues grande es sólo Dios.\nSube hasta el cielo y lo verás\nque pequeñito el hombre es;\nsube hasta el cielo y lo verás,\nque cual juguete de cristal\nque con cariño hay que cuidar;\nsube hasta el cielo y lo verás."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 758,
    numero: 758,
    categoria: "A",
    copyright: false,
    titulo: "Muchas cosas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Muchas cosas en los cielos\nlos niños tendrán\npreparados por su Rey Jesús\nropas blancas\ncoronas de oro tendrán\nlindas arpas las que tocarán.",
      "En cielo las calles\nde oro serán\ny los niños allí andarán\ny felices como ángeles\ncantarán al Cordero\nque nos rescató.",
      "Junto al río de la vida\nse alegrarán\nel pan de vida tendrán\nno existe ya noche,\nni muerte ni dolor,\npues los cuida Jesús\ncon su amor.",
      "De los niños el reino\nde los cielos será,\ny en los brazos de Jesús,\ndescansarán,\ncantarán sin cesar\nen presencia del Señor,\ncantarán recordando\nsu amor."
    ],
    coro: "Muchas cosas habrá\nmuchas cosas tendrán\nmuchas cosas tendremos\nallá ¡oh, que felicidad!\ncuando estemos allá\ncuántas cosas serán para mí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 759,
    numero: 759,
    categoria: "A",
    copyright: false,
    titulo: "Cantemos todos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Cantemos todos alegremente\na nuestro Padre, nueva canción;\npor él tenemos a Jesucristo\nal mundo dado por bendición.",
      "Nosotros somos el pueblo amado\ndel Redentor que nos rescató.\nTan alta gloria Jesús amante\ncon su martirio nos conquistó.",
      "Serán eternas sus maravillas,\ninagotable su santo amor;\ny los que canten sus alabanzas\nbenditos siempre por el Señor."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 760,
    numero: 760,
    categoria: "A",
    copyright: false,
    titulo: "La historia de Ruth",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la historia de la Biblia,\nla más bella es la de Ruth\nporque de esa línea viene\nnuestro Salvador Jesús."
    ],
    coro: "No me ruegues que te deje,\nporque no te dejaré;\ntu pueblo será mi pueblo\ny tu Dios, será mi Dios.\nEste ejemplo de amor;\nhermana debes aprender\nsiendo fiel hasta la muerte\ncomo Cristo te enseñó.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 761,
    numero: 761,
    categoria: "A",
    copyright: false,
    titulo: "Perdóname Señor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Perdóname Señor, a ti sólo pequé,\nrecíbeme por tu amor,\nperdóname Señor.\nAti sólo pequé y de ti me aparte,\nmucho he pecado Santo Dios,\nperdóname Señor.",
      "Perdóname Señor, escucha mi\noración.\nEn ti ¡Oh Dios! descansa aquel que\ngime por perdón.\nJesús, oh Salvador, inútil es mentir,\npues todo tú lo sabes bien.\nPerdóname, Señor.",
      "Perdóname Señor, pues vengo a\ntu pies.\nTe ruego laves hoy mi ser,\nperdóname Señor.\nJesús, mi Salvador me diste\nsalvación;\nasí en los brazos de tu amor\nhallé consolación."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 762,
    numero: 762,
    categoria: "A",
    copyright: false,
    titulo: "¿A quién iré?",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En este mundo lleno de dolor,\nrodeado estoy de pruebas mil.\nSoy incapaz lidiar con Satanás\nen esta lucha tan hostil.",
      "Cristo es la vida y él es la verdad;\nmi gozo es caminar con él\nCristo es el único camino a Dios,\na mí más dulce es que la miel.",
      "Hambre y sed en mi alma tengo yo;\nla satisface mi Jesús.\nYen ningún otro hay salud y paz,\nCristo es el Príncipe de luz."
    ],
    coro: "¿Aquién iré, oh, a quién iré?\n¿Aquién iré sino a Jesús?\nEl me salvó y mi alma transformó.\n¿Aquién iré sino a Jesús?",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 763,
    numero: 763,
    categoria: "A",
    copyright: false,
    titulo: "Juventud",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Guerras, hambres todos ven,\nterremotos por doquier,\nmás pecados y maldad,\nson señales ya del fin.",
      "Como en tiempos de Noé,\nla venida de Jesús\nlos impíos morirán\ny los justos vivirán.",
      "Reformistas unidad\nes pedido del Gran Rey,\nla Reforma brillará\ncon el gran poder de Dios."
    ],
    coro: "Juventud, oh, juventud\nadelante sin temor\npregonad en alta voz\nel mensaje del Señor.",
    posicion_coro: 0,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 764,
    numero: 764,
    categoria: "A",
    copyright: false,
    titulo: "Divino, compañero del",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "camino (Himno 764):",
      "Divino compañero del camino\ntu presencia siento yo al transitar,\nven a disiparme toda sombra,\nya tengo luz, divina luz de tu\namor.",
      "La sombra de la noche se\naproxima en ellas el ladrón me\nacechará.\nNo me dejes solo en el camino\nayúdame, ayúdame, hasta llegar.",
      "Contigo la jornada se hace corta\nla sed, ni el sol fatigará,\ncalma tú todas las amenazas\ny más gozoso sobre ellas andaré."
    ],
    coro: "Quédate Señor ya se hace tarde\nte doy mi corazón para posar\nhazlo tu morada permanente,\nacéptalo, acéptalo; oh Salvador",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 765,
    numero: 765,
    categoria: "A",
    copyright: false,
    titulo: "Tras la montaña siempre",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "hay un valle (Himno 765):",
      "Tras la montaña\nsiempre hay un valle\ny tras la noche\nun albor despertar,\ntras la tormenta\nhay siempre un arco iris\ny tras la muerte\nhay vida en Jesús.",
      "Tras el invierno\nsiempre hay primavera\ny tras la siembra la cosecha está;\ntras la fatiga\nsiempre hay un reposo\ny tras las penas\nCristo da solaz.",
      "Yal sembrar\nlas lágrimas regadas,\nal despedir al ser que tanto amé\nsé que la tumba ha de entregarle\nresurrección en Cristo esperaré."
    ],
    coro: "No hay que llorar\nque en Cristo hay consuelo;\nlo que hoy no sé\ncomprenderé después\ny tras la noche con su negro velo\nestá la luz de un bello amanecer.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 766,
    numero: 766,
    categoria: "A",
    copyright: false,
    titulo: "Da la luz",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Un llamado llega desde el turbio\nmar,\nda la luz, da la luz;\nalmas hay a quienes hay que\nrescatar,\nda la luz, da la luz.",
      "Si este llamamiento quieres\ncontestar,\nda la luz, da la luz;\nuna buena ofrenda debes tú de\ndar;\nda la luz, da la luz.",
      "Que la gracia abunde; pide en\noración,\nda la luz, da la luz,\ny que Cristo reine en cada corazón,\nda la luz, da la luz.",
      "Nunca nos cansemos de esta gran\nlabor,\nda la luz, da la luz,\nllevaremos joyas para el Salvador\nda la luz, da la luz."
    ],
    coro: "Da la luz del Evangelio fiel\nhaz que brille por doquier;\nque la senda alumbre del infiel\ncon sus rayos de poder.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 767,
    numero: 767,
    categoria: "A",
    copyright: false,
    titulo: "La isla",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hay una isla llena de encanto\ndo iré a morar,\nbella y fragante donde el Maestro\nbaja a soñar;\nhay en mi isla aves que cantan\ntrinos de amor\ny reclinado por los jardines se\nve al Señor.",
      "Dicen que el cielo sus calles de\noro prepara ya,\ny que sus pórticos engalanados\nlistos están;\ndicen que un ángel mu presuroso\ny con mucho afán,\nprepara el libro donde el Maestro\nha de llamar."
    ],
    coro: "La isla de mis ensueños\nde oro,\nla isla donde está el Señor.\nLa isla do mi alma adora,\na mi Rey a mi Salvador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 768,
    numero: 768,
    categoria: "A",
    copyright: false,
    titulo: "El himno de la reforma",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Predicamos la verdad protestamos\ncontra el mal,\naceptamos la reforma del Señor,\ndesechamos la invención que es\ndel hombre tradición;\nque es contra la palabra del Señor.",
      "El mensaje que la Biblia tiene para el\npecador,\nBabilonia con su error lo confundió,\nmás ahora el Señor tiene la\nreformación\npara proclamarla en alta y viva voz.",
      "Un tercer mensaje es que nos toca\nproclamar\nantes del regreso en gloria del Señor\nmás un cuarto ángel hay que lo\nviene a reforzar\npara con poder la obra terminar.",
      "Este dice a viva voz: Babilonia ya\ncayó,\nsu clamor se oye por el mundo hoy.\n¡Salid de ella pueblo mío,\napártate! dice el Señor,\n¡o sus duras plagas vas a recibir!."
    ],
    coro: "¡A la ley y al testimonio! ellos\ndicen la verdad.\nEl espíritu de Dios enseñar\nprométenos\nla luz que a la reforma hará triunfar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 769,
    numero: 769,
    categoria: "A",
    copyright: false,
    titulo: "En la tierra entona su loor",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "La tierra entona su loor, aleluya;\ncantando himnos al Señor,\naleluya;\nlos ángeles cantan más allá,\naleluya;\ncantemos todos gloria a Dios,\naleluya.",
      "Los campos tienen mayor verdor\naleluya;\nlas plantas dan mas fruto\ny flor, aleluya;\nlas aves cantan arrebol, aleluya\nla luz y el esplendor del sol,\naleluya.",
      "Los cielos brillan rayos mil,\naleluya;\nla tierra luz primaveral, aleluya;\npues todo canta a Dios loor,\naleluya;\ncantando himnos al Señor,\naleluya."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 770,
    numero: 770,
    categoria: "A",
    copyright: false,
    titulo: "En santa unión",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En Santa Unión y recíproco amor\nhelos aquí estos dos, oh Señor,\njuntos resuelven su vida pasar,\ndales ventura en su nuevo hogar.",
      "Sus corazones colmados de bien,\nque para siempre unidos estén;\nni los placeres, ni cruel tentación\nnunca alteren su santa unión."
    ],
    coro: "Pon sobre ellos tu santo favor,\ndales doquier bendiciones Señor,\nescucha, oh Dios,\nnuestra humilde oración:\nllena sus vidas de tu bendición.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 771,
    numero: 771,
    categoria: "A",
    copyright: false,
    titulo: "Almas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "No escucháis el triste acento\nque enternece nuestro corazón,\nson millones de almas\nque claman a Dios.\nAlmas hay de Cristo amadas\ncon su sangre redimidas,\na Luzbel rendidas\nsin fe y sin Dios\nQuién no siente el celo\ndentro del pecho\nbullir el Santo ardor;\nquién velar no anhela\nen busca de almas\nque rindan culto a Dios.\nCuántas pobres almas\nviven sin su Dios;\ncuántas almas mueren\nsin fe y religión.\nPronto estoy; llámame Señor\nsi he de sufrir,\npor mí sufriste más;\nsi he de morir,\nfeliz muerte será."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 772,
    numero: 772,
    categoria: "A",
    copyright: false,
    titulo: "Celeste Sión",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Celeste Sión, Celeste Sión;\nde santos mil, feliz mansión\nde eterna paz, de eterno amor\nvuele hacia a ti mi corazón.",
      "Celeste Sión, Celeste Sión;\nquisiera estar en tu mansión,\ncual serafín en tu jardín,\ncantara yo dulce canción.",
      "Celeste Sión, Celeste Sión;\neterno fin de la aflicción,\nen este Edén de santo bien\nencuentre yo consolación."
    ],
    coro: "Vergel de amor do mi Señor\nprepara ya mi habitación.\nOh, cuán feliz en tu mansión\nhe de vivir, mi dulce Sión.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 773,
    numero: 773,
    categoria: "A",
    copyright: false,
    titulo: "Los ciento cuarenta y",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "cuatro mil (Himno 773):",
      "Los ciento cuarenta y cuatro mil\nen vida temporal\nguardaron fiel la santa Ley\nvencieron todo mal.",
      "La gran paciencia es su señal\nla fe de Cristo aquí,\nel testimonio de Jesús\ndarán su entrada allí.",
      "Al bello monte de Sion\nsellados con señal;\npasando van y cantarán\nlas aguas de cristal.",
      "Al gran Cordero traerán\nsus alabanzas, sí\ny el bello himno cantarán\ntambién del fiel Moisés.",
      "Aquí amaron a Jesús\ny allí lo amarán,\nsiguieron siempre su gran luz\ny en Jesús están.",
      "¡Oh! qué delicia perennal\nqué gozo fraternal;\nallí por siempre gozarán\nen vida eternal."
    ],
    coro: "Allá estarán y siempre cantarán,\nallá anclarán con arpas loarán.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 774,
    numero: 774,
    categoria: "A",
    copyright: false,
    titulo: "Los tiempos de",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "quebranto (Himno 774):",
      "Hemos llegado a los tiempos\nde quebranto;\nhemos llegado a los tiempos de\ndolor\ncuando el hombre se encuentra\nen esta vida,\ncontrovertido por su gran\ncondenación.",
      "Vendrá el Señor y a su regreso\nno habrá excusa\npara librarnos de esta gran\ncondenación.\nQue has hecho tú del talento que\nte he dado.\nNo has hecho nada siervo malo,\nte dirá."
    ],
    coro: "Donde está mi pueblo santo\ny rescatado,\ndonde están los atalayas del ayer,\ndonde están los que en mi\nnombre recibieron,\nse han detenido y tendrá que\nperecer.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 775,
    numero: 775,
    categoria: "A",
    copyright: false,
    titulo: "¡Oh! Jehová",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "¡Oh! Jehová escucha mi palabra\nconsidera mi meditación\nestá atento a la voz de mi alma\nsé propicio a esta oración.",
      "Mi pecado, siempre está delante\nde mi mente no puedo borrar\nsólo Cristo que fue inocente\ncon su sangre me puede limpiar."
    ],
    coro: "Siento mucho el haberte ofendido\nme propongo mas nunca pecar\nsin ti yo me siento perdido\nven, consuélame, oh, Dios de\nbondad",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 776,
    numero: 776,
    categoria: "A",
    copyright: false,
    titulo: "Sí, yo sé",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Yo vagué en noche oscura,\npecador perdido fui\ncaminé por senda dura\nmás Jesús hallóme a mí.",
      "De mi Dios yo soy un hijo\nsu poder me transformó,\ncon amor me satisfizo\ncon su paz me consoló.",
      "Ven a mí Jesús invita\nsoy tu amigo y Redentor,\nsu merced es infinita\nhacia todo pecador."
    ],
    coro: "Y yo sé, sí, yo sé que Jesús\nquiere salvar al malhechor,\ny yo sé, sí, yo sé\nque su sangre limpia\nal más vil pecador.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 777,
    numero: 777,
    categoria: "A",
    copyright: false,
    titulo: "El sábado lluvioso",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Hoy en la madrugada\ncayó la lluvia así\nllenó las florecillas,\ndoquiera fango ví.",
      "Desayuné temprano,\nel día santo fue\nabrí mis paragüitas\ny al templo camine.",
      "Abrimos los himnarios\ncantamos con fervor,\nalegres y gozosos\na Dios rendimos loor.",
      "Un rato muy alegre\npasando todos, sí,\nel sábado entrante\nme encontraré aquí."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 778,
    numero: 778,
    categoria: "A",
    copyright: false,
    titulo: "Volver al mundo jamás",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "podré (Himno 778):",
      "Volver al mundo jamás podré\nandar en sendas del mal que dejé,\ntomar la vida antigua no,\nyo he mirado a Cristo.",
      "Volver al mundo ahora sí\ncon el mensaje de vida y luz\na los que andan sin Dios y sin paz\nyo he mirado a Cristo.",
      "Ven, oh amigo, al pie de la cruz\ndonde he mirado a Cristo Jesús;\npuedes tener su perdón y su luz,\nven, pues, oh, ven conmigo."
    ],
    coro: "Hoy es la vida más dulce en mí,\nlibre de penas y cuitas yo fui,\nlleno de gozo y paz me sentí,\nyo he mirado a Cristo.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 779,
    numero: 779,
    categoria: "A",
    copyright: false,
    titulo: "Paz en el valle",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Pues cansado estoy mas tendré\nque seguir\nhasta que Cristo me llame al cielo,\noh, sí.\nTodo allá resplandece y el cordero\nes la luz\npero la noche es tan negra cual el\nmar, oh, sí.",
      "Manso entonces el oso y el lobo\ntambién\ny el león con el cordero dormirán,\noh, sí\ny el niño pequeño con la bestia\nferoz,\nllena será toda la tierra de esa paz,\noh, sí."
    ],
    coro: "Sólo habrá paz en el valle algún\ndía, yo sé,\nsólo habrá paz en el valle lo sé\npara mí\nno habrá tristezas, ni penas, ni\nluchas allí,\nSólo habrá paz en el valle para mí,\noh, sí.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 780,
    numero: 780,
    categoria: "A",
    copyright: false,
    titulo: "Cristo te llama a",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "ser colportor (Himno 780):",
      "Un amigo muy dulce y amante hoy\nte llama a ser colportor,\nnoble obra es tomar el prospecto\ny llevar el mensaje de amor.",
      "Los proyectos, la ciencia\nconfirman no sabiendo el fin que\ntendrán; cuantas almas hoy\nmueren sin verte,\ny en el cielo que cuenta darás.",
      "Venid jóvenes que Cristo os\nllama no dudando, ¡ay de mi!\n¿Qué será?\nvengan llenos de fe y esperanza,\nque comida y vestido él dará.",
      "La bandera de Cristo alcemos y\nfelices marchemos en pos;\na los cielos que al fin llegaremos\na la excelsa presencia de Dios."
    ],
    coro: "No rechaces la voz tan amante,\nde Jesús tu benigno Señor.\nEn su obra anhelante te espera\ncon el don de un fiel colportor.",
    posicion_coro: 2,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 781,
    numero: 781,
    categoria: "A",
    copyright: false,
    titulo: "La samaritana",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "En la ciudad de Samaria\nen la fuente de Jacob\nmuy precioso platicaba\nuna mujer y el Señor.",
      "Jesús entonces le dice\nsi tú supieras quien es\nAquel que habla contigo\ntú le darías de beber.",
      "Yo soy el agua de vida\nque habla contigo mujer\ny si de ella bebieres\nnunca jamás tendrás sed.",
      "Ella escuchó con ternura\nlas palabras del Señor\ny con esa fe tan pura\nobtuvo la salvación."
    ],
    coro: "Jesús le dice mujer dame agua\nporque estoy cansado y quiero\nbeber,\ny ella le dice no hay con que\nsacarla\ny con Samaritana no debes tratar.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 782,
    numero: 782,
    categoria: "A",
    copyright: false,
    titulo: "Siguiendo a Cristo",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Siguiendo a Cristo yo quiero\nallegarme\nsiguiendo yo a Cristo yo quiero\nvivir\nyo nunca pensaba en la vida de\nCristo\nporque no sabía amarle en verdad.",
      "Amigo rendido, entrégate a Cristo\nconvence a tu alma, si dudas de él\nun día muy triste oí su palabra\nque dijo a mi alma, busca a tu\nDios."
    ],
    coro: "Si yo amo al mundo tendré que\nmorir\nporque yo sin Cristo no puedo\nvivir.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 783,
    numero: 783,
    categoria: "A",
    copyright: false,
    titulo: "A los montes miraré",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Alos montes miraré\ndonde está la salvación,\nmi socorro está en Dios\nel supremo Creador.",
      "Por medio de peligros\nno te dejará caer,\nquien a Israel guardaba\nno durmió ni dormirá.",
      "El Señor es quien te guarda,\na tu diestra siempre está,\nni de día ni de noche\nluna y sol te ofenderá."
    ],
    coro: "El Señor es quien te guarda\nguardará de todo mal,\ntu entrada y salida desde\nahora, hasta el final.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 784,
    numero: 784,
    categoria: "A",
    copyright: false,
    titulo: "Allá en los olivos",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Allá en los Olivos,\nse oyó una plegaria\nde un hombre postrado,\nen humilde oración.\nEn ella imploraba,\nel amparo divino,\nque amarga la pena\nde su corazón.",
      "Así fue llevada\nla cruz al Calvario,\nasí el pecado\nde la humanidad.\nPor darnos la vida\nle dieron la muerte\npor sus beneficios\nvinagre al tomar."
    ],
    coro: "En soledad, en aquella\namarga agonía,\nse dio por su amor.\nSólo allí, con las aves\nformó su concierto\nalzando su voz.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 785,
    numero: 785,
    categoria: "A",
    copyright: false,
    titulo: "Jesús Nazareno",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Jesús Nazareno clavado en la cruz\nun velo de sangre su rostro\ncubrió;\nsu cuerpo doliente en santo\nmartirio\ncorona de espinas el pueblo le\ndio.",
      "Con manto de grana y caña en sus\nmanos\nsoldados azotan a Cristo Jesús,\n¡Rey de los Judíos!, gritaba la turba\ndoblan las rodillas burlándose de él.",
      "Y crucificado el divino Maestro\nvinagre con hiel diéronle a beber.\nSoldados se parten el santo\nvestuario\ny sobre sus capas la suerte se dio."
    ],
    coro: "Eli, Eli, Eli, lama sabactani,\nclamaba el excelso divino Jesús;\nel gran Redentor de nuevo clamó\ncon fuerzas potentes su espíritu\ndio.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 786,
    numero: 786,
    categoria: "A",
    copyright: false,
    titulo: "Bajo el cielo azul de Israel",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Bajo el cielo azul de Israel;\nbrillan, brillan las estrellas\ny la noche está serena,\nbrilla la luna en el mar.\nDe lo alto se divisa\nla grande Jerusalén,\nla ciudad de los profetas\nde los reyes de Israel.",
      "Lo más grande de su gloria,\nver al Santo de Israel\nel Mesías prometido,\nque a su pueblo escogió.\nSube a cuestas al Calvario,\nresistiendo Cristo va;\nde sus sienes va sangrando\ny a su cruz se abraza más.",
      "Hijo mío, no te olvides,\nque mi sangre derramé,\npor el precio de tu alma\nya mi vida entregué.\nYo te ruego Padre mío,\ndesde el árbol de la cruz\nque tú guardes a los míos\nde este mundo de maldad."
    ],
    coro: "Jerusalén, Jerusalén;\n¡ay de ti, Jerusalén!\nJerusalén, Jerusalén;\n¡ay de ti, Jerusalén!",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 787,
    numero: 787,
    categoria: "A",
    copyright: false,
    titulo: "Misionero que vas",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Misionero que vas\na cumplir tu misión,\ntú que anuncias la paz\nen extraña región;\na los campos que vas;\nanunciando su amor;\nque mi Cristo te guarde\ny él te sostenga fiel\nhasta volvernos a ver.",
      "Misionero que vas\na los campos de labor\nanunciando las nuevas\nde Cristo el Salvador\nOraremos por ti,\nque te guarde el Señor,\ny que te de su gracia\ny te fortalezca, bien\ny te vista de valor."
    ],
    coro: "¡Cuán hermosos son los pies\nsobre los montes,\ndel que publica la paz,\ndel que alegres nuevas trae,\ndel que anuncia salud,\ndel que trae nuevas del bien\ndel que dice a Sion, tu Dios\npara siempre reinará,\npor los siglos. Amén.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 788,
    numero: 788,
    categoria: "A",
    copyright: false,
    titulo: "Proclamando están",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "los cielos (Himno 788):",
      "Proclamando están los cielos\nal divino creador\ny hoy anuncia el firmamento\ntodas tus obras Señor,\nincesantes noche y día\ndan señal de tu poder,\nsin palabras proclamando:\nDios excelso del saber.",
      "Majestuoso el sol camina,\npor los cielos con esplendor,\nexaltando en su camino\nllena el mundo de calor\ny tu ley que es preciosa,\nbrilla más que clara luz\nesclarece nuestras mentes\nguía las almas a Jesús."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 789,
    numero: 789,
    categoria: "A",
    copyright: false,
    titulo: "A la lucha",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "A la lucha Cristo te invita;\nhueste juvenil,\na la lid que urgente necesita tu\npoder viril\nno desmayes ni te envuelvas en\ntemor,\npues contigo está tu capitán.\nSé valiente lucha con ardor\ny las huestes del mal caerán.",
      "Aunque acechen con furor los\ndardos en tu derredor.\nSé un joven fuerte y gallardo,\nfiel a tu Señor.\nno desmayes ni te envuelvas en\ntemor\npues contigo está tu Capitán.\nSé valiente y lucha con ardor\ny las huestes del mal caerán.",
      "Sé leal pues tuya es la victoria al\ncesar la lid\nen los cielos te dará la gloria\ncélico Adalid\nNo desmayes ni te envuelvas en\ntemor.\npues contigo está tu Capitán,\nSé valiente y lucha con ardor\ny las huestes del mal caerán."
    ],
    coro: "Esta lid juvenil, nos depara otro fin\nmejor,\nque librar a los cautivos, de este\nmundo vil\ny llevarlos en pos del Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 790,
    numero: 790,
    categoria: "A",
    copyright: false,
    titulo: "La ciudad santa",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Anoche tuve un sueño, un sueño\nsin igual,\nme hallaba en Jerusalén la celestial\nciudad.\nLos niños entonaban con gozo una\ncanción\ny en coro contestaban los ángeles\nde Dios.\nY en coro contestaban los ángeles\nde Dios.\nJerusalén, Jerusalén oye a los\nángeles:\nhosanna en las alturas, hosanna\na tu Rey.",
      "Después distinto el sueño fue, y\ntriste se tornó,\ncallaron las hosannas y el júbilo\ncesó\nel sol veló su rostro y escondió su\nluz\ny se pudo a lo lejos ver la sombra\nde una cruz.\nY se pudo a lo lejos ver la sombra\nde una cruz\nJerusalén, Jerusalén recibe a tu\nRey,\nhosanna en lo alto, hosanna a tu\nRey.",
      "Cambió el sueño otra vez, la nueva\ntierra ví\ny junto al mar tranquilo la célica\nciudad,\nlas calles brillan cual cristal sus\npuertas perlas son\ny quien desea puede entrar en esa\nnueva Sión,\nestrellas, luna y sol allí no hay\nnecesidad,\npues brilla eterna claridad en la\nciudad de Sion;\nen la ciudad Jerusalén por siempre\ndurará.\nJerusalén, Jerusalén la noche ya\npasó,\nhosanna en lo alto, hosanna por\nsiempre al Rey,\nhosanna en las alturas,\nhosanna por siempre. Amén."
    ],
    coro: null,
    posicion_coro: null,
    temas: [],
    palabras_clave: [],
    audio: {
      tiene_audio: false,
      url: null
    }
  },
  {
    id: 791,
    numero: 791,
    categoria: "A",
    copyright: false,
    titulo: "Ven al campo verde",
    autor_letra: "Desconocido",
    autor_musica: "Desconocido",
    versos: [
      "Ven al campo verde deja la ciudad\nven al monte bello de felicidad.\nTodas las estrellas para ti serán\npara ti serán.\nEntre tanta gente como preso estás\nsólo entre los valles tendrás\nlibertad\ntodas las montañas para ti serán\npara ti serán.",
      "Entre tanto ruido la mano tendrás\ny al andar con Cristo te invita la\npaz.\nEl nunca te falla te hará meditar, te\nhará meditar.\nY cada mañana cuando al\ndespertar\nun inmenso cielo te iluminará,\ntodos sus caminos para ti serán,\npara ti serán.",
      "Ven al campo verde deja la ciudad\nsólo el aire libre vida te dará.\nTodas sus frescuras para ti serán,\npara ti serán,\ncerca de las fuentes la paz hallarás\nporque al Dios del cielo allí\nencontrarás,\ntodas sus bondades para ti serán,\npara ti serán"
    ],
    coro: "Las aves que volando van\ncon dulces trinos, imitando están.\nVen al campo verde a vivir entre\nlas flores,\na vivir entre los frutos y más cerca\ndel Señor.",
    posicion_coro: 1,
    temas: [],
    palabras_clave: [],
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