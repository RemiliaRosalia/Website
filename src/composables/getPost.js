import { ref } from 'vue'

const getPost = (id) =>
    {
        const postFeat = ref(null)
        const errorFeat = ref()

        const loadFeat = async() => 
        {
          try 
          {
            //make sure to run npx json-server --watch data/db.json
            //probably will run from a pastebin/github file or smth in the future?
            let data = await fetch("http://localhost:3000/posts/" + id);
            if(!data.ok)
            {
              throw Error("Post with id: " + id + " does not exist");
            }
            postFeat.value = await data.json()
          }
          catch (err)
          {
            errorFeat.value = err.message;
            console.log(errorFeat.value);
          }
        }

        return { postFeat, errorFeat, loadFeat}
    }

    export default getPost;
