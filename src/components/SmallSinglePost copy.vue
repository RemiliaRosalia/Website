<template>
    <div class="smallPost">
      <router-link :to="{name: post.url}">
          <img :src="post.icon"  class="smallPostImg">
          <h3 width="100%" class="smallPostTitle"> {{ post.title }}</h3>
      </router-link>
    </div>
  </template>
  
  <script>
  export default 
  {
    props: ['post'],
      setup(props)
      {
          // const snippet = computed(() => 
          // {
          //     if(props.post.desc.length >100)
          //     {
          //         return props.post.desc.substring(0,100) + '...'
          //     }
          //     else
          //         return props.post.desc
          // })
  
          const getIcon = ()=>
          {
            console.log(props.post.icon + "  |  ../assets/JNJFotG.png");
            //return props.post.icon;
            return "../assets/JNJFotG.png"
            //return '../../assets/logo.png'
            //return "https://cdn.discordapp.com/attachments/275753578327441408/1254232426171994112/image.png?ex=667c0a38&is=667ab8b8&hm=763f9ff84b6ccce695f85bd8aa3c4ea506bfedd9c803c3cd4c4407fc6f1eaa0e&"
            
          }
         // return {snippet, getIcon}
         return {getIcon}
      }
  }
  </script>
  
  <style>
  .smallPost
  {
    /* background-color: rgb(202, 176, 147); */
    border: 2px solid black; 
    width: 17em;
    height: 14.5em;
  
  }
  .smallPostTitle
  {
    font-size: 1em;
    margin: 0%;
    /* background-color: rgb(238, 213, 184); */
  }
  .smallPostImg
  {
    /* width: 15em;
    height: 12em; */
    width:90%;
    height:80%;
    object-fit: cover;
  }
  </style>