<template>
  <body>
    <nav class="header">
    <div class="logo">
      <router-link to="/" ><img src='./assets/logo.jpg' width="200px"> </router-link>   
    </div>
    <div class="navLinks">
      <router-link to="/" class="navRight">Home</router-link>&emsp;&emsp;
      <router-link to="/portfolio" class="navRight">Portfolio</router-link>&emsp;&emsp;
      <router-link to="/cv" class="navRight">CV</router-link>  &emsp;&emsp;
      <router-link to="/about" class="navRight">About</router-link>
      </div>
  </nav>
  </body>
  <router-view/>
  <!-- <h1>FLEX TEST</h1>
  <ul class="container">
    <li class="item">YO</li>
    <li class="item">YO</li>
    <li class="item">YO</li>
    <li class="item">YO</li>
  </ul> -->
</template>

<script>
export default
{

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
h1
{
  text-align: center;
}
.header
{
  text-align: center;
  margin: 0%;
  width: 100%;
}
.about
{
  text-align: center;
}

nav
{
  padding-top: 0px;
  padding-bottom: 10px;

}
.navLinks
{
  background-color: #BCBCBC;
  padding: 5px;
  width: 100%;

}

.logo
{
  vertical-align: middle;
  text-align: left;
  padding-top: 5px;
  padding-bottom: 0px;
  padding-left: 30px;
  
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
body
{
  width: 100%;
  margin: 0%;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.projectPage
{
  margin-left: 10%;
  margin-right: 10%;
  background-color: antiquewhite;
}
.projectPage h1
{
  margin-bottom:0%;
}
.projectPage p
{
  margin-left: 5%;
  margin-right: 5%;
}
.projectPage h2
{
  margin-left: 10%;
  margin-top:0%;
  font-size:large;
}
h5
{
  margin-top: 0%;
}
.projectIMG
{
  text-align: center;
  
}
</style>
