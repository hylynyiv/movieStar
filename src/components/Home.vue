<template>
  <div>
    <h1>Movies List</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: JSON.parse(localStorage.getItem('movies') || '[]')
    };
  }
};
</script>
