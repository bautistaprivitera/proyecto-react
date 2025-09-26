const products = [
  {
    "id": 1,
    "title": "Camisa Oxford Blanca",
    "price": 85.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Camisa+Oxford+Blanca",
    "category": "camisas",
    "stock": 25,
    "description": "Camisa de algodón Oxford blanca, corte slim fit, ideal para eventos formales."
  },
  {
    "id": 2,
    "title": "Camisa Celeste Seda Italiana",
    "price": 120.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Camisa+Celeste+Seda+Italiana",
    "category": "camisas",
    "stock": 18,
    "description": "Camisa de seda italiana en tono celeste, con botones nacarados y acabado premium."
  },
  {
    "id": 3,
    "title": "Camisa Negra de Algodón Premium",
    "price": 95.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Camisa+Negra+de+Algodon+Premium",
    "category": "camisas",
    "stock": 30,
    "description": "Camisa negra elegante de algodón premium, perfecta para cenas nocturnas."
  },
  {
    "id": 4,
    "title": "Camisa Azul Marino Clásica",
    "price": 89.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Camisa+Azul+Marino+Clasica",
    "category": "camisas",
    "stock": 22,
    "description": "Camisa de tono azul marino, corte recto, con costuras reforzadas."
  },
  {
    "id": 5,
    "title": "Camisa Blanca con Puño Francés",
    "price": 130.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Camisa+Blanca+con+Puno+Frances",
    "category": "camisas",
    "stock": 15,
    "description": "Camisa blanca de puño francés, ideal para usar con gemelos en eventos de gala."
  },
  {
    "id": 6,
    "title": "Pantalón de Vestir Gris Oxford",
    "price": 140.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Pantalon+de+Vestir+Gris+Oxford",
    "category": "pantalon",
    "stock": 20,
    "description": "Pantalón de vestir gris Oxford, confeccionado en lana ligera."
  },
  {
    "id": 7,
    "title": "Pantalón Slim Fit Negro",
    "price": 135.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Pantalon+Slim+Fit+Negro",
    "category": "pantalon",
    "stock": 28,
    "description": "Pantalón elegante negro de corte slim fit, versátil para toda ocasión."
  },
  {
    "id": 8,
    "title": "Pantalón Beige Elegante",
    "price": 125.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Pantalon+Beige+Elegante",
    "category": "pantalon",
    "stock": 26,
    "description": "Pantalón de vestir beige, perfecto para climas cálidos y outfits sofisticados."
  },
  {
    "id": 9,
    "title": "Pantalón Azul Marino Premium",
    "price": 150.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Pantalon+Azul+Marino+Premium",
    "category": "pantalon",
    "stock": 19,
    "description": "Pantalón azul marino de corte recto con terminación italiana."
  },
  {
    "id": 10,
    "title": "Pantalón Gris Claro Moderno",
    "price": 132.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Pantalon+Gris+Claro+Moderno",
    "category": "pantalon",
    "stock": 24,
    "description": "Pantalón gris claro de confección europea, elegante y moderno."
  },
  {
    "id": 11,
    "title": "Saco Azul Marino Clásico",
    "price": 320.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Saco+Azul+Marino+Clasico",
    "category": "sacos",
    "stock": 14,
    "description": "Saco azul marino clásico con solapa de muesca, imprescindible en cualquier armario elegante."
  },
  {
    "id": 12,
    "title": "Saco Negro Slim Fit",
    "price": 350.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Saco+Negro+Slim+Fit",
    "category": "sacos",
    "stock": 12,
    "description": "Saco negro slim fit, confeccionado en lana fina, ideal para eventos formales."
  },
  {
    "id": 13,
    "title": "Saco Gris Oxford",
    "price": 340.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Saco+Gris+Oxford",
    "category": "sacos",
    "stock": 16,
    "description": "Saco gris Oxford de corte europeo, con forro de seda interior."
  },
  {
    "id": 14,
    "title": "Saco Azul Claro Moderno",
    "price": 310.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Saco+Azul+Claro+Moderno",
    "category": "sacos",
    "stock": 20,
    "description": "Saco azul claro con textura sutil, estilo moderno y fresco."
  },
  {
    "id": 15,
    "title": "Saco Negro Clásico de Gala",
    "price": 400.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Saco+Negro+Clasico+de+Gala",
    "category": "sacos",
    "stock": 10,
    "description": "Saco negro de gala con solapa de raso, diseñado para ocasiones especiales."
  },
  {
    "id": 16,
    "title": "Camisa Blanca Casual Premium",
    "price": 90.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Camisa+Blanca+Casual+Premium",
    "category": "camisas",
    "stock": 27,
    "description": "Camisa blanca de algodón casual premium, adaptable para looks semi-formales."
  },
  {
    "id": 17,
    "title": "Pantalón Marrón Elegante",
    "price": 128.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Pantalon+Marron+Elegante",
    "category": "pantalon",
    "stock": 23,
    "description": "Pantalón marrón de vestir con acabado mate y corte europeo."
  },
  {
    "id": 18,
    "title": "Saco Beige Texturizado",
    "price": 330.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Saco+Beige+Texturizado",
    "category": "sacos",
    "stock": 13,
    "description": "Saco beige texturizado de lino, ideal para climas cálidos y eventos elegantes."
  },
  {
    "id": 19,
    "title": "Camisa Rayas Azul y Blanca",
    "price": 105.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Camisa+Rayas+Azul+y+Blanca",
    "category": "camisas",
    "stock": 21,
    "description": "Camisa de rayas azul y blanca, estilo clásico renovado."
  },
  {
    "id": 20,
    "title": "Saco Azul Príncipe de Gales",
    "price": 360.00,
    "img": "https://placehold.co/600x400/2C3E50/FFFFFF?text=Saco+Azul+Principe+de+Gales",
    "category": "sacos",
    "stock": 11,
    "description": "Saco azul con patrón Príncipe de Gales, sofisticación y estilo en una sola prenda."
  }
];

export default products;
