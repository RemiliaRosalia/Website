<template>
    <div class="post">
      <!--router-link :to="{name: 'project', params: {id: post.id}}"-->
      <router-link :to="{name: post.url}">
        <h3> {{ post.title }}</h3>
        <img :src="post.icon" >
      </router-link>
      <p>{{ snippet }}</p>
      <span v-for="tag in post.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  export default 
  {
      props: ['post'],
      setup(props)
      {
          const snippet = computed(() => 
          {
              if(props.post.desc.length >100)
              {
                  return props.post.desc.substring(0,100) + '...'
              }
              else
                  return props.post.desc
          })
  
          const getIcon = ()=>
          {
            console.log(props.post.icon + "  |  ../assets/JNJFotG.png");
            //return props.post.icon;
            return "../assets/JNJFotG.png"
            //return '../../assets/logo.png'
            //return "https://cdn.discordapp.com/attachments/275753578327441408/1254232426171994112/image.png?ex=667c0a38&is=667ab8b8&hm=763f9ff84b6ccce695f85bd8aa3c4ea506bfedd9c803c3cd4c4407fc6f1eaa0e&"
            
          }
          return {snippet, getIcon}
      }
  }
  </script>
  
  <style>
  
  </style>