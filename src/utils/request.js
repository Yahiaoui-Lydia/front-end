const request= async(methode,url)=>{
/* On récupère le token CSRF depuis le localStorage */
let csrfToken = localStorage.getItem('csrfToken');
if (!csrfToken) {
  /* Traitement dans le cas où le token CSRF n'existe dans le localStorage */
  localStorage.setItem('role','')
  window.location.href='/login'
}
/* Le localStorage stocke les données sous forme de chaines de caractères nous transformons donc la donnée en JSON */

 
/* On créer l'en-tête x-xsrf-token contenant le token CSRF */
const headers = new Headers();
headers.set('Authorization', csrfToken);
console.log(headers)
return headers
 
// const options = {
//   mode: 'cors',
//   headers,
//   withCredentials: true,
// };
 
// /* On effectue la requête */
// return (
//     console.log(methode.axios(url, options)))
    
//     // await methode.axios(url, options)) 

}
export default request