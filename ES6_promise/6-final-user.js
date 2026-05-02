import uploadPhoto from './5-photo-reject';
import signUpUser from "./4-user-promise";

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const rtn = [];
  try {
    const user = await signUpUser(firstName, lastName);
    rtn.push({ status: 'fulfilled', value: user })
    await uploadPhoto(fileName);
  } catch (err) {
    rtn.push({ status: 'rejected',value: err.toString() });
  }
  return rtn;
};

