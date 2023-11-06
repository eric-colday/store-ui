export const Products = [
  {
    id: 1,
    title: "JEAN",
    description: "Jean skinny",
    price: "19.99",
    image: [
      "/home/jean-flarebootcut.webp",
      "/home/veste-matelassee.webp",
      "/home/tennis-lacets.webp",
    ],
    slug: "jean-skinny",
    catSlug: "jeans",
    cat: "jeans",
    size: ["S", "M", "L"],
    color: ["white", "black", "blue"],
    inStock: true,
    active: true,
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "T-SHIRT",
    description: "T-shirt en coton",
    price: "10",
    image: [
      "/home/t-shirt-en-coton.webp",
      "/home/jean-flarebootcut.webp",
      "/home/veste-matelassee.webp",
    ],
    slug: "jean-levis-comment-choisir",
    catSlug: "t-shirts",
    cat: "t-shirts",
    size: ["S", "M", "L"],
    color: ["white", "black"],
    inStock: true,
    active: true,
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: 3,
    title: "VESTE",
    description: "Veste en jean",
    price: "19.99",
    image: [
      "/home/veste-matelassee.webp",
      "/home/tennis-lacets.webp",
      "/home/t-shirt-en-coton.webp",
    ],
    slug: "veste-en-jean",
    catSlug: "vestes",
    cat: "vestes",
    size: ["S", "M", "L"],
    color: ["white", "black", "blue"],
    inStock: true,
    active: true,
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: 4,
    title: "TENNIS",
    description: "Tennis en toile",
    price: "19.99",
    image: [
      "/home/tennis-lacets.webp",
      "/home/t-shirt-en-coton.webp",
      "/home/jean-flarebootcut.webp",
    ],
    slug: "tennis-en-toile",
    catSlug: "chaussures",
    cat: "chaussures",
    size: ["S", "M", "L"],
    color: ["white", "black", "blue"],
    inStock: true,
    active: true,
    createdAt: "2021-05-01T00:00:00.000Z",
  },
];

export const CategoriesProducts = [
  {
    id: 1,
    slug: "jeans",
    title: "Jeans",
    img: "",
    Products: [
      {
        id: 1,
        title: "JEAN",
        description: "Jean skinny",
        price: "19.99",
        image: [
          "/home/jean-flarebootcut.webp",
          "/home/veste-matelassee.webp",
          "/home/tennis-lacets.webp",
        ],
        slug: "jean-skinny",
        catSlug: "jeans",
        cat: "jeans",
        size: ["S", "M", "L"],
        color: ["white", "black", "blue"],
        inStock: true,
        active: true,
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: 2,
    slug: "t-shirts",
    title: "T-shirts",
    img: "",
    Products: [
      {
        id: 1,
        title: "T-SHIRT",
        description: "T-shirt en coton",
        price: "10",
        image: [
          "/home/t-shirt-en-coton.webp",
          "/home/jean-flarebootcut.webp",
          "/home/veste-matelassee.webp",
        ],
        slug: "t-shirt-en-coton",
        catSlug: "t-shirts",
        cat: "t-shirts",
        size: ["S", "M", "L"],
        color: ["white", "black"],
        inStock: true,
        active: true,
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: 3,
    slug: "vestes",
    title: "Vestes",
    img: "",
    Products: [
      {
        id: 1,
        title: "VESTE",
        description: "Veste en jean",
        price: "19.99",
        image: [
          "/home/veste-matelassee.webp",
          "/home/tennis-lacets.webp",
          "/home/t-shirt-en-coton.webp",
        ],
        slug: "veste-en-jean",
        catSlug: "vestes",
        cat: "vestes",
        size: ["S", "M", "L"],
        color: ["white", "black", "blue"],
        inStock: true,
        active: true,
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: 4,
    slug: "chaussures",
    title: "Chaussures",
    img: "",
    Products: [
      {
        id: 1,
        title: "TENNIS",
        description: "Tennis en toile",
        price: "19.99",
        image: [
          "/home/tennis-lacets.webp",
          "/home/t-shirt-en-coton.webp",
          "/home/jean-flarebootcut.webp",
        ],
        slug: "tennis-en-toile",
        catSlug: "chaussures",
        cat: "chaussures",
        size: ["S", "M", "L"],
        color: ["white", "black", "blue"],
        inStock: true,
        active: true,
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
];

export const CategoriesPosts = [
  {
    id: 1,
    slug: "jeans",
    title: "Jeans",
    img: "",
    Posts: [
      {
        id: 1,
        image: "/home/2.jpg",
        title: "Jean Levis Comment choisir ?",
        description:
          "Le jean est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.",
        slug: "jean-levis-comment-choisir",
        catSlug: "jeans",
        cat: '{"id":1,"slug":"jeans","title":"Jeans","img":"","Posts":[{"id":1,"image":"/home/2.jpg","title":"Jean Levis Comment choisir ?","description":"Le jean est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.","slug":"jean-levis-comment-choisir","catSlug":"jeans","cat":"jeans","active":true,"createdAt":"2021-05-01T00:00:00.000Z"}],"Products":[{"id":1,"title":"JEAN","description":"Jean skinny","price":"19.99","image":["/home/jean-flarebootcut.webp","/home/veste-matelassee.webp","/home/tennis-lacets.webp"],"slug":"jean-skinny","catSlug":"jeans","cat":"jeans","size":["S","M","L"],"color":["white","black","blue"],"inStock":true,"active":true,"createdAt":"2021-05-01T00:00:00.000Z"}],"active":true,"createdAt":"2021-05-01T00:00:00.000Z"}',
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: 2,
    slug: "t-shirts",
    title: "T-shirts",
    img: "",
    Posts: [
      {
        id: 1,
        image: "/home/1.jpg",
        title: "Comment choisir son t-shirt ?",
        description:
          "Le t-shirt est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.",
        slug: "comment-choisir-son-t-shirt",
        catSlug: "t-shirts",
        cat: '{"id":2,"slug":"t-shirts","title":"T-shirts","img":"","Posts":[{"id":2,"image":"/home/1.jpg","title":"Comment choisir son t-shirt ?","description":"Le t-shirt est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.","slug":"comment-choisir-son-t-shirt","catSlug":"t-shirts","cat":"{\\"id\\":2,\\"slug\\":\\"t-shirts\\",\\"title\\":\\"T-shirts\\",\\"img\\":\\"\\",\\"Posts\\":[{\\"id\\":2,\\"image\\":\\"/home/1.jpg\\",\\"title\\":\\"Comment choisir son t-shirt ?\\",\\"description\\":\\"Le t-shirt est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.\\",\\"slug\\":\\"comment-choisir-son-t-shirt\\",\\"catSlug\\":\\"t-shirts\\"}]}"}]}',
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: 3,
    slug: "vestes",
    title: "Vestes",
    img: "",
    Posts: [
      {
        id: 1,
        image: "/home/4.jpg",
        title: "Comment choisir sa veste ?",
        description:
          "La veste est un incontournable de la garde-robe masculine. Il est donc important de bien la choisir.",
        slug: "comment-choisir-sa-veste",
        catSlug: "vestes",
        cat: '{"id":3,"slug":"vestes","title":"Vestes","img":"","Posts":[{"id":3,"image":"/home/4.jpg","title":"Comment choisir sa veste ?","description":"La veste est un incontournable de la garde-robe masculine. Il est donc important de bien la choisir.","slug":"comment-choisir-sa-veste","catSlug":"vestes","cat":"{\\"id\\":3,\\"slug\\":\\"vestes\\",\\"title\\":\\"Vestes\\",\\"img\\":\\"\\",\\"Posts\\":[{\\"id\\":3,\\"image\\":\\"/home/4.jpg\\",\\"title\\":\\"Comment choisir sa veste ?\\",\\"description\\":\\"La veste est un incontournable de la garde-robe masculine. Il est donc important de bien la choisir.\\",\\"slug\\":\\"comment-choisir-sa-veste\\",\\"catSlug\\":\\"vestes\\"}]}"}]}',
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: 4,
    slug: "chaussures",
    title: "Chaussures",
    img: "",
    Posts: [
      {
        id: 1,
        image: "/home/3.jpg",
        title: "Comment choisir ses chaussures ?",
        description:
          "Les chaussures sont un incontournable de la garde-robe masculine. Il est donc important de bien les choisir.",
        slug: "comment-choisir-ses-chaussures",
        catSlug: "chaussures",
        cat: '{"id":4,"slug":"chaussures","title":"Chaussures","img":"","Posts":[{"id":4,"image":"/home/3.jpg","title":"Comment choisir ses chaussures ?","description":"Les chaussures sont un incontournable de la garde-robe masculine. Il est donc important de bien les choisir.","slug":"comment-choisir-ses-chaussures","catSlug":"chaussures","cat":"{\\"id\\":4,\\"slug\\":\\"chaussures\\",\\"title\\":\\"Chaussures\\",\\"img\\":\\"\\",\\"Posts\\":[{\\"id\\":4,\\"image\\":\\"/home/3.jpg\\",\\"title\\":\\"Comment choisir ses chaussures ?\\",\\"description\\":\\"Les chaussures sont un incontournable de la garde-robe masculine. Il est donc important de bien les choisir.\\",\\"slug\\":\\"comment-choisir-ses-chaussures\\",\\"catSlug\\":\\"chaussures\\"}]}"}]}',
        createdAt: "2021-05-01T00:00:00.000Z",
      },
    ],
  },
];

export const Posts = [
  {
    id: 1,
    image: "/home/2.jpg",
    title: "Jean Levis Comment choisir ?",
    description:
      "Le jean est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.",
    slug: "jean-levis-comment-choisir",
    catSlug: "jeans",
    cat: '{"id":1,"slug":"jeans","title":"Jeans","img":"","Posts":[{"id":1,"image":"/home/2.jpg","title":"Jean Levis Comment choisir ?","description":"Le jean est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.","slug":"jean-levis-comment-choisir","catSlug":"jeans","cat":"jeans","active":true,"createdAt":"2021-05-01T00:00:00.000Z"}],"Products":[{"id":1,"title":"JEAN","description":"Jean skinny","price":"19.99","image":["/home/jean-flarebootcut.webp","/home/veste-matelassee.webp","/home/tennis-lacets.webp"],"slug":"jean-skinny","catSlug":"jeans","cat":"jeans","size":["S","M","L"],"color":["white","black","blue"],"inStock":true,"active":true,"createdAt":"2021-05-01T00:00:00.000Z"}],"active":true,"createdAt":"2021-05-01T00:00:00.000Z"}',
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: 2,
    image: "/home/1.jpg",
    title: "Comment choisir son t-shirt ?",
    description:
      "Le t-shirt est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.",
    slug: "comment-choisir-son-t-shirt",
    catSlug: "t-shirts",
    cat: '{"id":2,"slug":"t-shirts","title":"T-shirts","img":"","Posts":[{"id":2,"image":"/home/1.jpg","title":"Comment choisir son t-shirt ?","description":"Le t-shirt est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.","slug":"comment-choisir-son-t-shirt","catSlug":"t-shirts","cat":"{\\"id\\":2,\\"slug\\":\\"t-shirts\\",\\"title\\":\\"T-shirts\\",\\"img\\":\\"\\",\\"Posts\\":[{\\"id\\":2,\\"image\\":\\"/home/1.jpg\\",\\"title\\":\\"Comment choisir son t-shirt ?\\",\\"description\\":\\"Le t-shirt est un incontournable de la garde-robe masculine. Il est donc important de bien le choisir.\\",\\"slug\\":\\"comment-choisir-son-t-shirt\\",\\"catSlug\\":\\"t-shirts\\"}]}"}]}',
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: 3,
    image: "/home/4.jpg",
    title: "Comment choisir sa veste ?",
    description:
      "La veste est un incontournable de la garde-robe masculine. Il est donc important de bien la choisir.",
    slug: "comment-choisir-sa-veste",
    catSlug: "vestes",
    cat: '{"id":3,"slug":"vestes","title":"Vestes","img":"","Posts":[{"id":3,"image":"/home/4.jpg","title":"Comment choisir sa veste ?","description":"La veste est un incontournable de la garde-robe masculine. Il est donc important de bien la choisir.","slug":"comment-choisir-sa-veste","catSlug":"vestes","cat":"{\\"id\\":3,\\"slug\\":\\"vestes\\",\\"title\\":\\"Vestes\\",\\"img\\":\\"\\",\\"Posts\\":[{\\"id\\":3,\\"image\\":\\"/home/4.jpg\\",\\"title\\":\\"Comment choisir sa veste ?\\",\\"description\\":\\"La veste est un incontournable de la garde-robe masculine. Il est donc important de bien la choisir.\\",\\"slug\\":\\"comment-choisir-sa-veste\\",\\"catSlug\\":\\"vestes\\"}]}"}]}',
    createdAt: "2021-05-01T00:00:00.000Z",
  },
  {
    id: 4,
    image: "/home/3.jpg",
    title: "Comment choisir ses chaussures ?",
    description:
      "Les chaussures sont un incontournable de la garde-robe masculine. Il est donc important de bien les choisir.",
    slug: "comment-choisir-ses-chaussures",
    catSlug: "chaussures",
    cat: '{"id":4,"slug":"chaussures","title":"Chaussures","img":"","Posts":[{"id":4,"image":"/home/3.jpg","title":"Comment choisir ses chaussures ?","description":"Les chaussures sont un incontournable de la garde-robe masculine. Il est donc important de bien les choisir.","slug":"comment-choisir-ses-chaussures","catSlug":"chaussures","cat":"{\\"id\\":4,\\"slug\\":\\"chaussures\\",\\"title\\":\\"Chaussures\\",\\"img\\":\\"\\",\\"Posts\\":[{\\"id\\":4,\\"image\\":\\"/home/3.jpg\\",\\"title\\":\\"Comment choisir ses chaussures ?\\",\\"description\\":\\"Les chaussures sont un incontournable de la garde-robe masculine. Il est donc important de bien les choisir.\\",\\"slug\\":\\"comment-choisir-ses-chaussures\\",\\"catSlug\\":\\"chaussures\\"}]}"}]}',
    createdAt: "2021-05-01T00:00:00.000Z",
  },
];

export const Comments = [
  {
    id: 1,
    user: "Tobby",
    userEmail: "tobby@gmail.com",
    commentaire:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus!",
    postSlug: "",
    post: "",
    createdAt: "2021-05-01T00:00:00.000Z",
  },
];

export const Slides = [
  {
    id: 1,
    image: "/home/slide1.jpg",
    title: "TENDANCE",
    description: "Découvrez notre collection de t-shirts",
  },
  {
    id: 2,
    image: "/home/slide2.jpg",
    title: "TENDANCE",
    description: "Découvrez notre collection de jeans",
  },
  {
    id: 3,
    image: "/home/slide3.jpg",
    title: "TENDANCE",
    description: "Découvrez notre collection de vestes",
  },
];

export const Orders = [
  {
    id: 1,
    createdAt: "2021-06-08T09:47:48.000Z",
    total: "20",
    products: [
      {
        id: 1,
        title: "T-shirt",
        price: "10",
        image: "/home/1.jpg",
        quantity: 1,
      },
      {
        id: 2,
        title: "Jean",
        price: "10",
        image: "/home/2.jpg",
        quantity: 1,
      },
    ],
    status: "En cours",
    intent_id: "aaaa",
  },
  {
    id: 2,
    createdAt: "2021-06-08T09:47:48.000Z",
    total: "50",
    products: [
      {
        id: 1,
        title: "T-shirt",
        price: "10",
        image: "/home/1.jpg",
        quantity: 1,
      },
      {
        id: 2,
        title: "Jean",
        price: "10",
        image: "/home/2.jpg",
        quantity: 1,
      },
      {
        id: 3,
        title: "Veste",
        price: "30",
        image: "/home/4.jpg",
        quantity: 1,
      },
    ],
    status: "Terminé",
    intent_id: "aaaa",
  },
];
