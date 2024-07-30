<template>

  <div class="home">
    <!--div v-if="errorFeat"> {{ errorFeat }} </div-->
    <div class="featured" v-if="postFeat">
      <img src='../assets/JNJFotG.png' width="33%" class="featuredImg">
      <div class="featuredText">
        <h1>{{ postFeat.title }}</h1>
        <h2>
        Part 3 Released!
        </h2>
        <h3>Part 3 of Journeys and Jazz: The Fruits of the Gods has been released for free on itch.io!</h3>
        <p>{{ postFeat.desc }}</p>
      </div>
    </div>

    <div>
      <!--div v-if ="error"> {{ error }}</div-->
      <div v-if="posts.length">
        <HomePostList :posts="posts"/>
      </div>
      <!--div v-else>Loading...</div-->
    </div>

  </div>


</template>

<script>
  import PostList from'../components/PostList.vue'
  import HomePostList from'../components/HomePostList.vue'
  //automatically knows its a js file
  import getPosts from '../composables/getPosts'
  import getPost from '../composables/getPost'
  import postData from '../assets/db.json'


export default 
{
  name: 'HomeView',
  components: { HomePostList},
  props: ['id'],
  setup() 
    {
      //runs first
      // const{ postFeat, errorFeat, loadFeat} = getPost(1);
      // loadFeat()
      // const { posts, error, load} = getPosts()
      // load()

      // return {posts, error, postFeat, errorFeat}
      const posts = postData.posts
      const postFeat = posts[2]
      return{posts, postFeat}
    },
}
</script>

<style>
.featured
{
  background-color: aqua;
  width: 60%;
  align-self: center;
  margin: 0 auto;

}
.featuredImg
{

  vertical-align: top;
  display: inline-block;
}
.featuredText
{
  background-color: aquamarine;
  display: inline-block;
  margin-left: 1%;
  width:66%
}
.Rows  
{
  
}
.GameRow
{
  background-color: aquamarine;

}
.ModelRow
{
  background-color: lavender;


}
.ArtRow
{
  background-color:aliceblue;

}
h3
{
  margin-left: 2%;
}
.Container
{
 /* We first create a flex layout context */
 display: flex;
  
  /* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
  flex-flow: row wrap;
  
  /* Then we define how is distributed the remaining space */
  justify-content: space-around;
  
  padding: 0;
  margin: 0;
  list-style: none;
}
.item
{
  background: tomato;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
</style>
