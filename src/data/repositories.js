export const repositories = [
  // {
  //   name: "2022s1-Grupo01",
  //   collaborators: ["nfgarilli", "camiruiz", "jnvillalba"],
  // },
  // {
  //   name: "2022s1-Grupo02",
  //   collaborators: ["francogarcino", "lziege", "tcowes"],
  // },
  // {
  //   name: "2022s1-Grupo03",
  //   collaborators: ["lautacoria18", "enadialopez", "fabriciomarote"],
  // },
  // {
  //   name: "2022s1-Grupo04",
  //   collaborators: ["MattFerzz", "germangrecoventura", "pablospizzamiglio"],
  // },
  // {
  //   name: "2022s1-Grupo05",
  //   collaborators: ["axeljaguero", "NicolasFernandez925", "FedericoFGP"],
  // },
  // {
  //   name: "2022s1-Grupo06",
  //   collaborators: ["PedroJavierAraoz", "pablonicolas17", "juancruz12"],
  // },
  // {
  //   name: "2022s1-Grupo07",
  //   collaborators: ["federicoCampero", "NicoFernandez-Dev", "juancruzcds"],
  // },
  {
    name: "2022s1-Grupo08",
    collaborators: ["JPContardo", "matiasaduco"],
  },
  {
    name: "2022s1-Grupo09",
    collaborators: ["valentinferreyra", "MatiasS14"],
  },
];

export const milestones = ['TP-1-ARENA', 'TP-2-API', 'TP-3-REACT'];

export const labels = [
  {
    name: 'Grave',
    color: 'a30000',
  },
  {
    name: 'Corregir',
    color: 'e7ee00',
  },
  {
    name: 'Menor',
    color: '007fc0',
  },
  {
    name: 'Cosmetico',
    color: '93539d',
  }
]

export const issues = [
  {
    name: "2022s1-Grupo07",
    issues: [
      {
        title: "Falta tag",
        body: "No se realizo la entrega formal",
        milestone: "1",
        labels: ["Grave"],
      },
    ],
  },
  {
    name: "2022s1-Grupo08",
    issues: [
      {
        title: "Carpeta de más",
        body: "En la carpeta `root` existe una carpeta `.idea` que no tendria que existir.",
        milestone: "1",
        labels: ["Menor"],
      },
      {
        title: "Faltan titulos",
        body: "En todas las ventanas de la app no tienen titulos, estaria genial que los titulos cuando estas editando o creando sean distintos.",
        milestone: "1",
        labels: ["Menor"],
      },
      {
        title: "Contenido relacionado",
        body: "Al editar una pelicula se puede agregar a si misma como contenido relacionado",
        milestone: "1",
        labels: ["Corregir"],
      },
      {
        title: "Errores de ui",
        body: "Se muestra de forma fea la duracion (40.03333333333333 minutes) (si se muestran las duraciones en minutos, en toda la app se tiene que mostrar en minutos, es feo ver dos tipos de duracion)",
        milestone: "3",
        labels: ["Corregir"],
      },
      {
        title: "OperationStatus",
        body: "Tinene un operation status que no aporta nada a la app, ademas que tienen un timeout (timer) que espera 1 segundo para cambiar una variable, no esta bueno manejar estados con timers, no escala",
        milestone: "1",
        labels: ["Observacion"],
      },
    ],
  },
  {
    name: "2022s1-Grupo09",
    issues: [
      {
        title: "Contenido relacionado",
        body: "Al editar una pelicula se puede agregar a si misma como contenido relacionado",
        milestone: "1",
        labels: ["Corregir"],
      },
      {
        title: "Creacion de Categories y Movies",
        body: "Es incorrecto crear Category y Movie al momento de hacer `updateMovie`, se resuelve guardando como variable la categoria o la pelicula en sus ViewModels (`MovieViewModel`, `CategoryViewModel`)",
        milestone: "1",
        labels: ["Grave"],
      }
    ],
  },
];
