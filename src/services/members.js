import axios from 'axios';
import fixEnvApiUrl from './helpers';

// GET All Members
export const getAllMembers = async () => {
  try {
    // const API_URL_FIXED =  await fixEnvApiUrl();
    const API_URL_FIXED =  'http://localhost:3000';
    const response =  await axios.get(`${API_URL_FIXED}/members`);
    const members = response.data;
    return members;
  } catch (e) {
    console.log(e);
    this.errors.push(e);
  }
};

// // GET members by Id
// export const getmembersById = async membersPayload => {
//   try {
//     const API_URL_FIXED = await fixEnvApiUrl();
//     const response = await axios.get(
//       `${API_URL_FIXED}/memberss/${membersPayload.assetId}/${
//         membersPayload.id
//       }`
//     );
//     const members = response.data;
//     return members;
//   } catch (e) {
//     console.log(e);
//     this.errors.push(e);
//   }
// };

