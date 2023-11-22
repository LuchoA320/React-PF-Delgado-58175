import dellInspiron15 from "/images/dell-inspiron-15inch.jpg";
import lenovoV15 from "/images/lenovo-v15.jpg";
import motoE22 from "/images/motorola-e22-64gb.jpg";
import galaxyA04 from "/images/samsung-a04-64gb.jpg";
import samsungTV50 from "/images/samsung-tv-50.jpg";
import skyworthTV65 from "/images/skyworth-tv-65.jpg";
const products = [
  {
    id: `1`,
    name: `NOTEBOOK 15" DELL INSPIRON 3520`,
    brand: `Dell`,
    price: 757.609,
    category: `Notebooks`,
    image: dellInspiron15,
    stock: 25,
    description: `
    Cuenta con un Procesador Intel Core i3-1115G4 (6M Cache, hasta 4.1 GHz) de con 2 núcleos y 4 hilos |

    Memoria física para ejecutar aplicaciones de 8GB DDR4 (1x8) trabajando a 2666 Mhz. |
   
    Disco 256 GB, M.2 2280, PCIe NVMe Gen3 x4 |
    NO Incluye lectograbadora de DVD |

    Pantalla de 15.6” Anti-glare LED Backlit 
    Con una resolución de pantalla nativa en FullHD 1920 x 1080 |
    Placa de vídeo Intel UHD integrada con conexión HDMI 1.4 |`,
  },
  {
    id: `2`,
    name: `NOTEBOOK 15" LENOVO V15 G3`,
    brand: `Lenovo`,
    price: 708.399,
    category: `Notebooks`,
    image: lenovoV15,
    stock: 15,
    description: `
    Cuenta con un Procesador AMD Ryzen 5 5625U (19M Cache, hasta 4.30 GHz)
    de con 6 núcleos y 12 hilos |

    
    Memoria física para ejecutar aplicaciones de 8GB DDR4 (1x8 integrados + 1 slot libre) trabajando a 3200Mhz. (Memoria máxima: 16 gb) |
    
    
    Disco 512GB SSD M.2 2242 PCIe® x4 NVMe® |
    No Incluye lectograbadora de DVD |
    
    Pantalla de 15.6" TN 250nits Anti-glare
    Con una resolución de pantalla nativa en FullHD 1920 x 1080 |
    Placa de vídeo AMD Radeon™ Graphics integrada con conexión HDMI 1.4b |`,
  },
  {
    id: `3`,
    name: `Celular Motorola E22 4GB Ram 64GB`,
    brand: `Motorola`,
    price: 89.999,
    category: `Celulares`,
    image: motoE22,
    stock: 18,
    description: `Celular libre Motorola E22 Quartz Black |
    Pantalla de 6,5" |

    Memoria RAM 4GB |

    64 GB de almacenamiento interno |

    Sistema de camaras 16MP con Inteligencia Artificial |

    Lector de huella digital lateral con control tactil |
 
    Android 12 |
    `,
  },
  {
    id: `4`,
    name: `Celular Samsung Galaxy A04 64G`,
    brand: `Samsung`,
    price: 97.999,
    category: `Celulares`,
    image: galaxyA04,
    stock: 21,
    description: `Celular Libre Samsung Galaxy A04 64G Black |
    Pantalla de 6,5" |

    Memoria RAM 4GB |

    64 GB de almacenamiento interno |

    Increible camara de 50 + 2MP |

    Diseño sofisticado de primer nivel |

    Android 12 |
    `,
  },
  {
    id: `5`,
    name: `Smart TV 50 Samsung 4K Ultra HD`,
    brand: `Samsung`,
    price: 431.999,
    category: `Televisores`,
    image: samsungTV50,
    stock: 12,
    description: `
    Elevá tus momentos de entretenimiento a un nuevo nivel con el Smart TV 50" Samsung 4K. Este televisor combina la impresionante claridad de la resolución 4K con la inteligencia de un sistema Smart TV, brindándote una experiencia visual envolvente y una conectividad sin igual. Desde películas hasta juegos y transmisiones en línea, este televisor es tu ventana a un mundo de contenido rico y vibrante. |

    Marca: Samsung |

    Modelo: 50AU7000 |

    Serie 7 |

    Tamaño de pantalla 50" |

    Resolución 3,840 x 2,160 |
    `,
  },
  {
    id: `6`,
    name: `Smart TV Skyworth 65" LED 4K UHD Frameless`,
    brand: `Skyworth`,
    price: 542.999,
    category: `Televisores`,
    image: skyworthTV65,
    stock: 14,
    description: `
    Sumérgete en la experiencia visual definitiva con el Smart TV Skyworth de 65 pulgadas, una maravilla tecnológica que redefine tus momentos de entretenimiento. Equipado con la última tecnología de pantalla LED 4K UHD, cada imagen cobra vida con una claridad impresionante y colores vibrantes. |

    Marca: Skyworth |

    Modelo: SK065UHD |

    Tamaño de pantalla 65" |

    Resolucion 3,840 x 2,160 |
    `,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
