function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: 'Hello from the API!' };
      resolve(data);
    }, 1000);
  });
}

export default getResponseFromAPI;
