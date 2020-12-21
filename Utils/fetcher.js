import axios from 'axios';

const fetcher = url => {
  return axios(url)
  .then((res) => res)
  .catch((err) => console.log(err))
}

export default fetcher;