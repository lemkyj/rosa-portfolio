export const state = () => ({
  navisOpen: false,
  email: "lia8488@gmail.com",
  facebook: "https://www.facebook.com/rosa8488",
  instagram: "https://www.instagram.com/rosalee8488/",
  twitter: "https://twitter.com/lia8488",
  list: {
    package: {
      id: "package",
      name: "PACKAGE DESIGN",
      tag: ["Coffee Shop", "Gift Pack", "Wine Bottle"],
      contents: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                amet autem eius obcaecati illo, tempora quam natus architecto
                sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
                dicta est?`,
      img: "img-index/preview-package.png",
      css: "packagePos",
    },
    print: {
      id: "print",
      name: "PRINT DESIGN",
      tag: ["Book", "Infographic", "Album"],
      contents: `prints Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                amet autem eius obcaecati illo, tempora quam natus architecto
                sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
                dicta est?`,
      img: "img-index/preview-print.png",
      css: "printPos",
    },
    illustration: {
      id: "illustration",
      name: "ILLUSTRATION",
      tag: ["Animals", "Card", "Skateboard"],
      contents: `illusts Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                amet autem eius obcaecati illo, tempora quam natus architecto
                sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
                dicta est?`,
      img: "img-index/preview-illust.png",
      css: "illustPos",
    },
    photography: {
      id: "photography",
      name: "PHOTOGRAPHY",
      tag: ["Photos"],
      contents: `photos Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                amet autem eius obcaecati illo, tempora quam natus architecto
                sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
                dicta est?`,
      img: "img-index/preview-photo.png",
      css: "photoPos",
    },
    logo: {
      id: "logo",
      name: "LOGO DESIGN",
      tag: ["Sketch", "Logos"],
      contents: `logos Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                amet autem eius obcaecati illo, tempora quam natus architecto
                sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
                dicta est?`,
      img: "img-index/preview-logo.png",
      css: "logoPos",
    },
    others: {
      id: "others",
      name: "OTHERS",
      tag: ["Sculpture"],
      contents: `others Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                amet autem eius obcaecati illo, tempora quam natus architecto
                sequi qui earum facere cumque, excepturi totam ipsum voluptatem ex
                dicta est?`,
      img: "img-index/preview-others.png",
      css: "otherPos",
    },
  },
});

export const mutations = {
  navisOpen: (state, payload) => {
    state.navisOpen = !state.navisOpen;
  },
};

export const getters = {
  getterValue: (state) => {
    return state.value;
  },
};
