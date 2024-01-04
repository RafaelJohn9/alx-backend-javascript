/* eslint-disable prefer-promise-reject-errors */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        state: 200,
        message: 'Success',
      });
    } else {
      reject('The fake API is not working currently');
    }
  });
}
export default getFullResponseFromAPI;
