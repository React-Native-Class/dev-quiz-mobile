import {quizAPI} from '../../src/configuration/Axios.configuration';

export const getLoginData = async (values) => {
  try {
    const response = await quizAPI.post('/login', {
      Email: values.email,
      Password: values.password,
    });
    if (response.data === 'Wrong Email or Password.') {
      return {token: null, error: response.data};
    }
    return {token: response.data, error: false};
  } catch (error) {
    console.log(error);
  }
};
