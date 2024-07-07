<template>
  <div v-if="errorFeat"> {{ errorFeat }} </div>
  <div v-if="postFeat" class="post">
    <h3> {{ postFeat.title }}</h3>
    <p class="pre"> {{ postFeat.desc }}</p>
  </div>
</template>

<script>
import getPost from'../composables/getPost'

export default 
{
    props: ['id'],
    setup(props)
    {
        const {postFeat, errorFeat, loadFeat} = getPost(props.id);
        loadFeat();

        return { postFeat, errorFeat};
    }
}
</script>

<style>

</style>