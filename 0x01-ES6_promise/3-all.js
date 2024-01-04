/* eslint-disable import/extensions */
const { uploadPhoto } = require('./utils.js');
const { createUser } = require('./utils.js');

function handleProfileSignup() {
  const photoUpdate = uploadPhoto();
  photoUpdate
    .then((response) => {
      process.stdout.write(response.body);
    })
    .catch(() => {
      console.log('Signup system offline');
    });

  const user = createUser();
  user
    .then((response) => {
      console.log(` ${response.firstName} ${response.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
