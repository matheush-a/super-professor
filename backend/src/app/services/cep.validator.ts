import axios from "axios";

export default async function cepValidator (cep: string) {
  const viaCepUrl = 'https://viacep.com.br/ws/';
  const apiUrl = viaCepUrl + cep + '/json';

  const response = await axios.get(apiUrl)
    .then(response => response.data)
    .catch((error) => console.log(error));

  return response;
}