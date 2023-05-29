export const shopData = {
  AVT09_women: {
    title: "Women",
    routeName: "women",
    items: [
      {
        id: "women-AVT0900",
        name: "Purple Drift Top",
        imageUrl:
          "https://img.freepik.com/free-photo/cropped-close-up-body-fit-woman-wearing-shorts-sport-top-showing-slim-beautiful-stomach-abs-diet-fitness-healthy-lifestyle-concept-isolated-grey-background-brunette-sexy-fitness_639032-178.jpg?w=740&t=st=1674371638~exp=1674372238~hmac=34b6363f47b86a35e4e98d5bd2118f9f1501460498ab336f12a0f9b1c57f9769",
        price: 30,
      },
      {
        id: "women-AVT0904",
        name: "White Sportstyle Short Sleeve",
        imageUrl:
          "https://img.freepik.com/free-photo/young-woman-basketball-player-isolated_1303-20247.jpg?w=740&t=st=1674372581~exp=1674373181~hmac=390b0ccc51a8c6408c12d5e53d92aac6b6294c0d8d753fc9a2b50ce44e1b501e",
        price: 45,
      },

      {
        id: "women-AVT0907",
        name: "Sprt No-Slip Leggings",
        imageUrl:
          "https://img.freepik.com/free-photo/athlete-doing-home-workout-living-room-with-rubber-band-yoga-mat-back-muscles_482257-2251.jpg?w=900&t=st=1674373801~exp=1674374401~hmac=6d1aea1d6e2b216ed2fbe1af6c8f6effb482987467f9855b105a54a0e2a024ca",
        price: 55,
      },
    ],
  },
  IYT27_sneakers: {
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: "sneakers-IYT2701",
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: "sneakers-IYT2703",
        name: "Nike Yellow High Tops",
        imageUrl:
          "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 160,
      },
      {
        id: "sneakers-IYT2704",
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
    ],
  },
  GFO36_kids: {
    title: "Kids",
    routeName: "kids",
    items: [
      {
        id: "kids-GFO3602",
        name: "Cloud Crewneck & Skirt",
        imageUrl:
          "https://images.pexels.com/photos/8224649/pexels-photo-8224649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 65,
      },
      {
        id: "kids-GFO3606",
        name: "Blue Pullover",
        imageUrl:
          "https://images.pexels.com/photos/7207756/pexels-photo-7207756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 70,
      },
      {
        id: "kids-GFO3609",
        name: "Wave Jersey",
        imageUrl:
          "https://images.pexels.com/photos/264384/pexels-photo-264384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 30,
      },
    ],
  },
  KJZ18_men: {
    title: "Men",
    routeName: "men",
    items: [
      {
        id: "men-KJZ1800",
        name: "Sprt Long-Sleeve",
        imageUrl:
          "https://img.freepik.com/free-photo/man-winter-park-african-guy-training-outside_1157-46411.jpg?w=740&t=st=1675154264~exp=1675154864~hmac=69a581febc4f091e68c392cf09b1248f88045fd8dacb09f6b85730c2e1dbad15",
        price: 40,
      },
      {
        id: "men-KJZ1803",
        name: "Sprt Gray Training Shorts",
        imageUrl:
          "https://img.freepik.com/free-photo/stretching_23-2148023818.jpg?w=740&t=st=1675154737~exp=1675155337~hmac=f795e0f6b07e42db5e71fb4682da5c62b3731d280c4b5fcbfb1bd0db0c4a6cd1",
        price: 35,
      },
      {
        id: "men-KJZ1808",
        name: "Sprt Orange Pullover",
        imageUrl:
          "https://img.freepik.com/free-photo/teenager-posing-basketball-field_23-2148800875.jpg?w=740&t=st=1675155510~exp=1675156110~hmac=93ed6772bf6bbc2e72e3eaab245b1aff06b37f552b4ee246e9ba9992135d5995",
        price: 70,
      },
    ],
  },
  SDF45_accessories: {
    title: "Accessories",
    routeName: "accessories",
    items: [
      {
        id: "accessories-SDF4502",
        name: "Women's Sprt Pink Cap",
        imageUrl:
          "https://images.pexels.com/photos/3819775/pexels-photo-3819775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 30,
      },
      {
        id: "accessories-SDF4507",
        name: "Sprt Wireless Over-The-Ear Headphones",
        imageUrl:
          "https://images.pexels.com/photos/3756890/pexels-photo-3756890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 149,
      },
      {
        id: "accessories-SDF45011",
        name: "Football Ball",
        imageUrl:
          "https://images.pexels.com/photos/10923077/pexels-photo-10923077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 75,
      },
    ],
  },
};

const transformedCollections = {};

const newShopData = (data) => {
  Object.keys(data).forEach((key) => {
    const { title, routeName, items } = data[key];
    transformedCollections[routeName] = { id: key, title, routeName, items };
  });
};

newShopData(shopData);

export default transformedCollections;
