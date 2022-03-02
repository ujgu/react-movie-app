const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "34ef3e4c23c00e643943fd87beace9d5",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
