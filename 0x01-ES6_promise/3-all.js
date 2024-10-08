import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

// export default async function handleProfileSignup() {
//   try {
//     const photo = await uploadPhoto();
//     const user = await createUser();
//     console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
//   } catch (err) {
//     console.log('Signup system offline');
//   }
// }
