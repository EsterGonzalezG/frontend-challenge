export const setTitleDescription = (description) => {
  const keyArray = [
    'brand',
    'model',
    'price',
    'cpu',
    'ram',
    'os',
    'displayResolution',
    'battery',
    'primaryCamera',
    'secondaryCmera',
    'dimentions',
    'weight',
  ];

  let descriptionArray = [];

  Object.keys(description).forEach((key) => {
    keyArray.filter((item) => {
      if (item === key) {
        descriptionArray = [
          ...descriptionArray,
          { id: key.charAt(0).toUpperCase() + key.slice(1), value: description[key] },
        ];
      }
    });
  });
  return descriptionArray;
};
