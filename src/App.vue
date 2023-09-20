<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/watchlist">My Watchlist</router-link> |
      <router-link to="/search">Search</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
  body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    background-color: rgb(77, 87, 87);
  }

  h1, h2, h3, h4{
    text-transform: uppercase;
  }

  a {
    text-decoration: none; 
  }

  nav a {
    color: #c7b1e6;
    font-size: larger;
    text-transform: uppercase;
  }

  input {
      margin: 5px 0px;
    }

  .watched {
    margin: 5px 0px;
  }

  input, button {
    border-radius: 2px;
    border-style: none;
  }

  button {
    color: rgb(134, 99, 250);
    background-color: #c7b1e6;
    margin-right: 2px;
  }
</style>




