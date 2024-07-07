<template>
    <div class="postList">
        <div class="tagArea">
            <div class="active">
                <label>Current Filter: {{ activeTag }}</label>
            </div>
            <div class="active">
                <button @click="activeTag=''">Clear Filter</button>
            </div>
            <button @click="activeTag='Game'">Game</button>
            <button @click="activeTag='JavaScript'">JavaScript</button>
            <button @click="activeTag='3D'">3D</button>
            <button @click="activeTag='Unity'">Unity</button>
            <!--button @click="activeTag='Blender'">Blender</button-->
            <button @click="activeTag='Programming'">Programming</button>
            <button @click="activeTag='C#'">C#</button>
            <button @click="activeTag='Videogame'">Videogame</button>
            <button @click="activeTag='Gamedesign'">Gamedesign</button>
            <button @click="activeTag='Rigging'">Rigging</button>
            <button @click="activeTag='Texturing'">Texturing</button>
            <button @click="activeTag='Animating'">Animating</button>
        </div>
        <div class="posts">
            <div v-for="post in posts" :key="post.id">
                <!--h3>{{ post.title }}</h3-->
                <div v-if="activeTag==''">
                    <SinglePost :post="post" />
                </div>
                <div v-else-if="searchTag(activeTag, post.id)">
                    <SinglePost :post="post"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { computed, ref } from 'vue'
export default {
    props: ['posts'],
    components: {SinglePost},
    setup(props)
    {
//        onMounted(() =>console.log('component mounted'))
        const activeTag = ref('')
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

</style>