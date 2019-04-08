//while waiting for something to continue, go do other things, important for server calls
//2016 promises
//es7

const posts=[
{title:"post one"},
{title:"post two"}
]

function getPosts(){
  setTimeout(()=>{
    post.forEach((post,index)=>{
      output+= `<li> ${post.title}</li>`
    })
    document.body.innerHTML=output;
  }, 1000)
}
function createPost(post){
  setTimeout(()=>{
    posts.push(post);
  },2000)
}

getPosts();
createPost({title:"post three"})

// post one, post two
//by time ran createpost, getposts alread run

function createPost2(post, callback){
  setTimeout(()=>{
    posts.push(post);
    callback();
  },2000)
}

createPost2({title:"post 4"}, getPosts);

// Promises

function createPost(post){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      posts.push(post);
      const error=false;
      if(error){
        reject(`error: ${error}`)//string template
      }else{
        resolve();
      }
    });
  })
}

createPost({title:"hello"}).then(getPosts).catch(err=>{
  console.log(err);
});

const promise1=Promise.resolve("hello words")
const promise2=10;
const promise3 = new Promise((resolve, reject)=>{
  setTimeout(resolve, 2000, "Goodbye")
})

// Take length of longest promise
Promise.all([promise1, promise2, promise3]).then(vals=>{
  console.log(vals)
})
//fetch returns obj needs to be processed by promse .json(),
const promise4= fetch('..').then(res=> res.json()).then(res=> console.log(res));

// Async / await- waits for async process to complete
async function init(){
  await createPost({title:"post 4"})
  getPosts();
}

async function fetchdata(){
  const res = await fetch("...")
  const data = await res.json();
  console.log(data)
}



