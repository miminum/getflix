import api from 'api'

export function searchContent(query){
  return api.get(`/?t=${query}&apikey=5a0085e`)
    .then((res) => res.data)
}
