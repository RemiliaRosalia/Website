<template>
    <div class="GameRow">
        <h3>Games</h3>
        <div class="HomePosts">
            <div v-for="post in posts" :key="post.id" >
            <!--h3>{{ post.title }}</h3-->
                <div v-if="searchTag('Game', post.id)">
                    <SmallSinglePost :post="post" />
                </div>        
            </div>
        </div>

    </div>
    <div class="ModelRow">
        <h3>3D Models & More</h3>
        <div class="HomePosts">
            <div v-for="post in posts" :key="post.id" >
            <!--h3>{{ post.title }}</h3-->
                <div v-if="searchTag('3D', post.id)">
                    <SmallSinglePost :post="post" />
                </div>        
            </div>
        </div>
    </div>
    <div class="ArtRow">
        <h3>Art(TEMP JAVASCRIPT)</h3>
        <div class="HomePosts">
            <div v-for="post in posts" :key="post.id" >
            <!--h3>{{ post.title }}</h3-->
                <div v-if="searchTag('JavaScript', post.id)">
                    <SmallSinglePost :post="post" />
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
import SmallSinglePost from './SmallSinglePost.vue'
import { computed, ref } from 'vue'
export default {
    props: ['posts'],
    components: {SmallSinglePost},
    setup(props)
    {
//        onMounted(() =>console.log('component mounted'))
        const activeTag = ref('3D')
        const searchTag = (tag, postId)=>
        {
            //for(var i=0;i<props.posts.length;i++)
            //{
                var realId = props.posts.length - postId;
                for(var j=0;j<props.posts[realId].tags.length;j++)
                {
                    if(props.posts[realId].tags[j].match(tag))
                    {
                        console.log(props.posts[realId]);
                        return true;
                    }   
                }
            //}
        }
        return {activeTag,searchTag}
    },
}
</script>

<style>
  .HomePosts
  {
    text-align: center;
    border: 2px solid black; 
    display:flex;
    flex-wrap: wrap;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  h3
  {
    margin-bottom: .25em;
  }


</style>