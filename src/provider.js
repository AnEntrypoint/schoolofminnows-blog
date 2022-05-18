import loader from './loader.js';
window.posts = new Promise(async res=>{
  window.iterator = await window.postsIterator(window.location.host.split('.')[0]);
  console.log(window.iterator);
  window.posts = window.iterator.next();
  window.author = window.iterator.account;
})
  
export default window.posts;
