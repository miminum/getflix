import api from './init' 

function searchContent(query){
  return api.get(`/?t=${query}&apikey=5a0085e`)
    .then((res) => res.data)
}

export default searchContent
