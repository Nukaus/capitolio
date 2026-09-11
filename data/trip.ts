export const trip = {
  destination: "Capitólio",
  dates: "25 — 27 de setembro de 2026",
  distance: "≈ 280 km",
  route: ["Belo Horizonte", "Itaúna", "Divinópolis", "Formiga", "Piumhi", "Capitólio"],
  stops: [
    { city: "Itaúna", note: "Primeiro trecho importante da viagem.", position: "~75 km", icon: "route" },
    { city: "Divinópolis", note: "Boa opção para pausa, abastecimento ou alimentação.", position: "~120 km", icon: "coffee" },
    { city: "Formiga", note: "Referência importante para uma parada no caminho.", position: "~190 km", icon: "map" },
    { city: "Piumhi", note: "Última grande referência antes de chegar.", position: "~250 km", icon: "flag" },
    { city: "Capitólio", note: "Destino final.", position: "chegada", icon: "mountain" },
  ],
  accommodation: {
    name: "Casa Gaivotas 95",
    subtitle: "Escarpas do Lago",
    airbnb: "https://www.airbnb.com.br/rooms/47268884",
    stats: ["15 hóspedes", "5 quartos", "10 camas", "6 banheiros"],
    features: ["Piscina com cascata", "Ofurô aquecido", "Sauna", "Churrasqueira", "Cervejeira", "Cozinha completa", "Wi-Fi", "Ar-condicionado nos quartos", "Garagem para até 6 carros", "Vista para montanhas", "Vista para o lago", "Pet friendly"],
  },
  experiences: [
    { id: "paua", name: "Parque Pauá + Mirante dos Canyons", tag: "Vistas épicas", image: "/images/passeios/paua.jpg", description: "Cânions, cachoeiras, mirantes e águas da Serra da Canastra em um só circuito.", duration: "Dia de aventura", price: "A partir de R$ 81", level: "Intenso", details: ["Tirolesas com mais de 600 m e quase 100 m de altura", "Ponte pênsil a aproximadamente 110 m", "Piscinas naturais e Mirante Escondido", "Valores informados no planejamento: ingresso R$ 81; visitação + tirolesa R$ 171; lancha R$ 115 por pessoa."] },
    { id: "top-tour", name: "Top Tour — Passeio de Lancha", tag: "Água", image: "/images/passeios/top-tour.jpg", description: "Três horas navegando entre cachoeiras, cânions e o Lago de Furnas.", duration: "3 horas", price: "A partir de R$ 120", level: "Leve", details: ["Cachoeira Lagoa Azul, Canyons de Furnas e Vale dos Tucanos", "Cachoeira da Gruta, Orquídeas e Bar Flutuante", "Privativo inclui Pedra da Sogra, playlist e Bluetooth", "Valores planejados: compartilhado R$ 120/pessoa; privativo R$ 1.440 até 12 pessoas."] },
    { id: "capivara", name: "Cachoeira da Capivara", tag: "Relax", image: "/images/passeios/capivara.jpg", description: "Trilhas, ofurôs e piscinas naturais para desacelerar em meio à serra.", duration: "Dia inteiro", price: "A partir de R$ 69,90", level: "Moderado", details: ["Trilha de aproximadamente 900 m e poço com cerca de 16 m", "Cachoeira da Pedra Ancorada a cerca de 200 m do estacionamento", "Ofurôs, piscinas naturais e área para relaxar", "Valores do material: entrada R$ 69,90 a R$ 89,90; UTV a partir de R$ 380."] },
    { id: "canastra", name: "Ecoparque Coração da Canastra", tag: "Natureza", image: "/images/passeios/canastra.jpg", description: "Um convite para sentir a força da natureza mineira.", duration: "A combinar", price: "R$ 60 por pessoa", level: "Leve", details: ["Ingresso informado no planejamento: R$ 60 por pessoa", "Pagamento somente em dinheiro, conforme material recebido."] },
    { id: "viking", name: "Retiro Viking", tag: "Aventura", image: "/images/passeios/viking.jpg", description: "Uma parada diferente para quem quer adicionar aventura ao roteiro.", duration: "A combinar", price: "R$ 40 por pessoa", level: "Moderado", details: ["Ingresso informado no planejamento: R$ 40 por pessoa via Pix."] },
    { id: "canela", name: "Canela de Ema", tag: "Natureza", image: "/images/passeios/canela-de-ema.jpg", description: "Trilha aquática, piscinas naturais, ofurô e culinária mineira.", duration: "Dia inteiro", price: "A partir de R$ 63", level: "Moderado", details: ["Trilha Verde com aproximadamente 650 m dentro da água", "Cachoeira No Limite, rapel e restaurante mineiro", "Entrada + almoço R$ 108; trilha alta com almoço R$ 399."] },
  ],
  itinerary: [
    { date: "25 SET", title: "Chegada", items: ["Saída de Belo Horizonte", "Viagem e paradas pelo caminho", "Chegada em Capitólio", "Check-in e conhecer a casa", "Noite livre"] },
    { date: "26 SET", title: "Aventura", items: ["Escolher o passeio do dia", "Viver Capitólio sem pressa", "Voltar para a casa e descansar"] },
    { date: "27 SET", title: "Último dia", items: ["Café da manhã", "Aproveitar a casa", "Último passeio ou parada", "Check-out e retorno para Belo Horizonte"] },
  ],
  foods: ["Canoa Bonita Bar", "Beat Burger", "Sô Bello", "Restaurante Bistrô Capitólio", "Restaurante do Turvo", "Restaurante Salvatore", "Restaurante Hud's", "Restaurante Tropeiro", "Restaurante Panorama"],
  checklist: ["Documento", "Dinheiro / cartão", "Protetor solar", "Repelente", "Roupa de banho", "Toalha", "Chinelo", "Tênis", "Roupas leves", "Carregador", "Power bank", "Medicamentos pessoais", "Óculos de sol", "Capa de chuva"],
}

export type Experience = (typeof trip.experiences)[number]

export const legalNote = "Valores e condições sujeitos a alteração. Confirme diretamente com o estabelecimento antes da viagem."

export const mapsUrl = "https://www.google.com/maps/dir/Belo+Horizonte,+MG/Capit%C3%B3lio,+MG"
export const wazeUrl = "https://www.waze.com/ul?q=Capit%C3%B3lio%2C%20MG&navigate=yes"

export const galleryImages = [
  { src: "/images/casa/casa-01.jpg", alt: "Vista aérea da casa em Escarpas do Lago, com piscina e área externa" },
  { src: "/images/casa/casa-02.jpg", alt: "Piscina e deck de madeira da casa, com vista para o entorno" },
  { src: "/images/casa/casa-03.jpg", alt: "Área gourmet coberta da casa, com churrasqueira e cozinha externa" },
]

export const placeholderImage = "/placeholder.svg"

export const imageAvailable = true

export const tripHeroImage = "/images/capitolio/lago-de-furnas.jpg"

export const extraAdventures = ["4x4", "Lancha", "Quadriciclo", "Voo de balão", "Asa delta", "Jetski — R$ 120 a cada 10 minutos"]

export const morroDoChapeu = ["aproximadamente 1.300 m de altitude", "vista panorâmica do Lago de Furnas", "possibilidade de observar Guapé, Alpinópolis e São José da Barra", "aproximadamente 12 km do centro de Capitólio"]

export const routeNotes = ["BR-381", "BR-262", "MG-050"]

export const tripIntro = "Três dias para desacelerar, conhecer lugares incríveis, aproveitar a natureza e curtir bons momentos juntos."

export const days = [
  { date: "25 SET", label: "Chegada", accent: "areia" },
  { date: "26 SET", label: "Aventura", accent: "agua" },
  { date: "27 SET", label: "Despedida", accent: "oliva" },
]

export const heroHighlights = ["3 dias", "natureza", "aventura", "descanso"]

export const tripTitle = "Uma pausa para viver Minas."

export const foodCategory = "Sugestão para consultar"

export const accommodationFeaturesNote = "Próxima ao Porto de Escarpas, ponto de embarque para passeios de barco."

export const itineraryEditableNote = "O roteiro está aberto para edição conforme as escolhas do grupo."

export const routeDistanceNote = "Aproximadamente 280 km e cerca de 4 horas sem considerar as paradas. A rota e a distância podem variar conforme o ponto de saída e o caminho escolhido."

export const routeSequence = trip.route

export const footerCopy = "Uma viagem para guardar na memória."

export const heroImageFallback = "/stunning-tropical-beach-paradise-with-crystal-clea.jpg"

export const accommodationImageFallback = "/placeholder.jpg"

export const experienceImageFallback = "/images/passeios/paua.jpg"

export const arrivalDate = new Date("2026-09-25T00:00:00-03:00")

export const menuItems = ["Início", "Viagem", "Trajeto", "Casa", "Passeios", "Roteiro", "Comidas", "Checklist"]

export const sectionIds = ["inicio", "viagem", "trajeto", "casa", "passeios", "roteiro", "comidas", "checklist"]

export const houseStats = trip.accommodation.stats

export const houseFeatures = trip.accommodation.features

export const stopSuggestions = trip.stops

export const experienceData = trip.experiences

export const foods = trip.foods

export const checklistItems = trip.checklist

export const itinerary = trip.itinerary

export const routeCities = trip.route

export const adventureNote = "Escolha com liberdade. O melhor roteiro é o que faz sentido para o grupo."

export const mapLabel = "Representação visual do trajeto, sem escala."

export const tripDateLabel = trip.dates

export const destinationLabel = trip.destination

export const accommodationName = trip.accommodation.name

export const accommodationSubtitle = trip.accommodation.subtitle

export const airbnbUrl = trip.accommodation.airbnb

export const tripDistance = trip.distance

export const returnDistance = "≈ 560 km"

export const tripRouteLabel = "BH → Capitólio"

export const optionalStopLabel = "sugestão de parada"

export const priceDisclaimer = legalNote

export const noAddressNote = "O endereço residencial exato não é exibido por privacidade."

export const heroEyebrow = "GUIA DIGITAL PRIVADO"

export const heroScrollLabel = "Explorar a viagem"

export const accommodationTag = "NOSSO REFÚGIO"

export const experiencesEyebrow = "PARA VIVER JUNTOS"

export const routeEyebrow = "PELA ESTRADA"

export const foodEyebrow = "SABORES DE MINAS"

export const checklistEyebrow = "ANTES DE SAIR"

export const itineraryEyebrow = "SEM PRESSA"

export const homeEyebrow = "A CASA DA VIAGEM"

export const adventureEyebrow = "PARA DEPOIS"

export const morroEyebrow = "UM HORIZONTE ABERTO"

export const distanceEyebrow = "NO CAMINHO"

export const countdownLabel = "Faltam"

export const defaultCountdownMessage = "A viagem começou. Aproveitem cada momento."

export const housePlaceholderCopy = "Fotos da casa serão adicionadas aqui."

export const galleryPlaceholderCopy = "Estrutura preparada para receber as fotos da hospedagem."

export const instagramUnavailable = "Instagram não informado"

export const noSchedulesNote = "Horários não informados no planejamento."

export const noRatingsNote = "Sem avaliações ou preços adicionais informados."

export const mapDestination = "Capitólio, MG"

export const topLabel = "Voltar ao topo"

export const menuLabel = "Abrir menu"

export const closeLabel = "Fechar menu"

export const previousLabel = "Foto anterior"

export const nextLabel = "Próxima foto"

export const closeModalLabel = "Fechar detalhes"

export const viewDetailsLabel = "Ver detalhes"

export const openAirbnbLabel = "Ver acomodação no Airbnb"

export const openRouteLabel = "Abrir rota no Google Maps"

export const openWazeLabel = "Abrir no Waze"

export const allPhotosLabel = "Ver todas as fotos"

export const selectAdventureLabel = "Escolher esta ideia"

export const routeHeading = "Nosso trajeto"

export const routeSubheading = "A estrada também faz parte da história."

export const stopHeading = "Paradas pelo caminho"

export const stopSubheading = "Sugestões de parada, não um roteiro confirmado."

export const accommodationHeading = "Nossa casa em Capitólio"

export const experienceHeading = "Experiências que podemos viver"

export const itineraryHeading = "O que fazer em cada dia"

export const foodHeading = "Onde comer"

export const checklistHeading = "Checklist da viagem"

export const distanceHeading = "Quanto vamos rodar?"

export const morroHeading = "Morro do Chapéu"

export const extraHeading = "Outras aventuras"

export const footerHeading = "CAPITÓLIO 2026"

export const footerDate = "25 — 27 DE SETEMBRO"

export const daysCount = 3

export const routeKm = 280

export const totalKm = 560

export const houseCapacity = "15 hóspedes"

export const houseRooms = "5 quartos"

export const houseBeds = "10 camas"

export const houseBaths = "6 banheiros"

export const targetYear = 2026

export const targetMonth = 8

export const targetDay = 25

export const currentYear = 2026

export const brandShort = "CAP"

export const brandName = "Capitólio"

export const brandTagline = tripTitle

export const sectionNote = "Planejamento pessoal — confirme informações antes de sair."

export const menuAriaLabel = "Navegação principal"

export const galleryAriaLabel = "Galeria da hospedagem"

export const experienceModalTitle = "Detalhes da experiência"

export const noImageCopy = "Imagem para adicionar"

export const mapAlt = "Trajeto ilustrado entre Belo Horizonte e Capitólio"

export const mobileHint = "Deslize para explorar"

export const desktopHint = "Arraste ou use as setas"

export const localStorageKey = "capitolio-checklist"

export const noBackendNote = "Tudo aqui funciona localmente no seu dispositivo."

export const routeButtonLabel = "Navegar"

export const groupLabel = "Para o grupo"

export const adventureLabel = "Nível de aventura"

export const priceLabel = "Planejamento"

export const durationLabel = "Duração"

export const tagsLabel = "Categoria"

export const removeItemLabel = "Desmarcar"

export const completeLabel = "concluídos"

export const allDoneCopy = "Tudo pronto para viver Minas."

export const tripOverviewTitle = "A viagem"

export const tripOverviewSubtitle = "Pequenos planos, grandes memórias."

export const routeMapTitle = "Mapa do caminho"

export const routeMapSubtitle = "Uma representação simples para consultar durante a estrada."

export const checklistSubtitle = "Marque o que já está na mala."

export const foodSubtitle = "Lugares para descobrir, sem pressa."

export const distanceSubtitle = "A distância real pode variar conforme o ponto de saída, deslocamentos e paradas."

export const accommodationDescription = "Um refúgio para desacelerar entre montanhas, água e bons encontros."

export const noConfirmedBooking = "Nenhuma reserva ou passeio está confirmado nesta página."

export const finalCta = "Que essa viagem comece antes mesmo da estrada."

export const ctaButton = "Começar a explorar"

export const tripStatus = "Planejamento aberto"

export const contentLanguage = "pt-BR"

export const timezone = "America/Sao_Paulo"

export const mapDisclaimer = "Mapa ilustrativo, não representa escala ou trajeto exato."

export const imagePolicy = "As imagens da casa devem ser adicionadas posteriormente, respeitando os direitos de uso."

export const privateGuideLabel = "Guia privado"

export const travelMood = "água • montanhas • Minas"

export const landingTitle = "Capitólio 2026"

export const landingDescription = "Guia digital privado para uma viagem de 3 dias a Capitólio, Minas Gerais."

export const sourceNote = "Dados organizados a partir do planejamento da viagem."

export const lastSection = "checklist"

export const firstSection = "inicio"

export const navScrollOffset = 80

export const legalShort = "Confirme antes de viajar."

export const footerDisclaimer = legalNote

export const mobileMenuNote = "Navegue pelo guia"

export const noPhotoLabel = "Foto em breve"

export const journeyLabel = "Jornada"

export const locationLabel = "Minas Gerais"

export const localDataLabel = "Dados locais"

export const offlineFriendlyLabel = "Consulta rápida"

export const heroDate = trip.dates

export const routeOrigin = "Belo Horizonte"

export const routeDestination = "Capitólio"

export const transportLabel = "carro"

export const tripTypeLabel = "escapada"

export const natureLabel = "natureza"

export const adventureTag = "aventura"

export const restTag = "descanso"

export const routePrimaryLabel = "BR-381 • BR-262 • MG-050"

export const noFixedNumbers = "Os números são aproximados e podem variar."

export const experienceDisclaimer = "Valores informados no planejamento da viagem, não preços garantidos atuais."

export const houseDisclaimer = "Não mostrar endereço residencial exato."

export const itineraryDisclaimer = "Horários não foram definidos."

export const foodDisclaimer = "Não foram adicionados preços, horários ou avaliações."

export const mapServiceDisclaimer = "Os botões abrem serviços externos de navegação."

export const calloutLabel = "Nota importante"

export const safeTravelCopy = "Boa estrada e bons encontros."

export const scrollCue = "role para descobrir"

export const endMark = "fim do guia"

export const dataVersion = "1.0"

export const language = "Português"

export const guideOwner = "grupo da viagem"

export const dataSource = "planejamento local"

export const allLocal = true

export const versionLabel = "2026"

export const builtFor = "celular e desktop"

export const noApi = true

export const noAuth = true

export const noDatabase = true

export const editable = true

export const isPrivateGuide = true

export const routeStopsCount = trip.stops.length

export const experienceCount = trip.experiences.length

export const foodCount = trip.foods.length

export const checklistCount = trip.checklist.length

export const dayCount = trip.itinerary.length

export const cityCount = trip.route.length

export const heroTitle = "CAPITÓLIO"

export const heroSubtext = tripTitle

export const heroMeta = "25 — 27 de setembro de 2026"

export const overviewCopy = tripIntro

export const houseCopy = accommodationDescription

export const footerTagline = footerCopy

export const readyCopy = "Tudo preparado para consultar no caminho."

export const preparedCopy = "O essencial à mão, sem complicar."

export const planningCopy = "Planeje o suficiente. Viva o resto."

export const mapCopy = mapLabel

export const travelCopy = "A estrada também faz parte da experiência."

export const natureCopy = "Entre água, pedra e céu aberto."

export const mineiroCopy = "Sabor, calma e paisagens de Minas."

export const localFirst = true

export const showPlaceholderImages = true

export const useImageFallbacks = true

export const legalBanner = legalNote

export const homeSectionId = "inicio"

export const tripSectionId = "viagem"

export const routeSectionId = "trajeto"

export const houseSectionId = "casa"

export const experiencesSectionId = "passeios"

export const itinerarySectionId = "roteiro"

export const foodSectionId = "comidas"

export const checklistSectionId = "checklist"

export const nextTripDate = arrivalDate

export const heroImageAlt = "Paisagem de água e montanhas que inspira a viagem a Capitólio"

export const cardImageAlt = "Imagem ilustrativa da experiência"

export const imageFolderNote = "/public/images/capitolio, /public/images/casa, /public/images/passeios, /public/images/comidas"

export const editLater = "Edite os objetos neste arquivo para atualizar o guia."

export const end = true
