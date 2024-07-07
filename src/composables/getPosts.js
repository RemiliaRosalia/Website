import { ref } from 'vue'

const getPosts = () =>
    {
        const posts = ref([])
        const error = ref()

        const load = async() => 
        {
          try 
          {
            //make sure to run npx json-server --watch data/db.json
            //probably will run from a pastebin/github file or smth in the future?
            let data = await fetch("http://localhost:3000/posts");
            //let data = await fetch("db.json");
            if(!data.ok)
            {
              throw Error("No posts available");
            }
            posts.value = await data.json();
            //posts.value = posts.value.reverse();
          }
          catch (err)
          {
            error.value = err.message;
            console.log(error.value);
          }
        }
        return { posts, error, load}
    }

    export default getPosts;
