<template>
    <div class="Portfolio">
      <div class="List">
        <!--div v-if ="error"> {{ error }}</div-->
        <div v-if="posts.length">
          <PostList :posts="posts"/>
        </div>
      <!--div v-else>Loading...</div-->
      </div>
    </div>
      
  </template>
  
  <script>

  import PostList from'../components/PostList.vue'
  //automatically knows its a js file
  import getPosts from '../composables/getPosts'
  import postData from '../assets/db.json'


  export default {
    name: 'Portfolio',
    components: { PostList},
    setup() 
    {
      //runs first
      //const { posts, error, load} = getPosts()
      //load()
      const posts = postData.posts;
      console.log(posts.length);
      return{posts}
      //return { posts, error}
    },
    created()
    {

    },
    mounted()
    {

    }
  }
  </script>

  <style>
  .portfolio
  {
    display:grid;
    grid-template-areas:
    'header header header header header header'
    'posts posts posts posts posts sidebar'
    'posts posts posts posts posts sidebar'
    'footer footer footer footer footer footer';
  }
  .tagArea
  {
    grid-area: [sidebar];
    float:right;
    width:17.5%;
  }
  .active
  {
    width:100%;
  }
  .active button
  {
    text-align: center;
    align-content: center;
    align-self: center;
  }
  .posts
  {
    text-align: center;
    border: 2px solid black; 
    display:flex;
    flex-wrap: wrap;
    margin-left: 2.5%;
    margin-right: 2.5%;
    justify-content: center;
    grid-area: [posts];
    
  }
  .post
  {
    border: 2px solid plum; 

    width: 27em;
    height: 23em;
    font-size: .85em;
    

  }

  .post h3
  {
    line-height: 1;
    margin:3%;
    margin-top:1%;
  }
  .post img
  {
    width:75%;
    height:65%;
    object-fit: cover;
    margin:0%;
  }
  .post p
  {
    margin:2%;
    margin-bottom:1%;
    font-weight: bold;
  }

  .tagContainer
  {
    color:rgb(45, 47, 187);
    margin-left: 5%;
    margin-right: 5%;
  }
  </style>
  