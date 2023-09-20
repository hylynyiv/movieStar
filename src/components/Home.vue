<template>
  <div>
    <h1>My Favourite Movies</h1>
    <ul>
      <li v-for="movie in favouriteMovies" :key="movie.imdbID">
        <h3>{{ movie.Title }}</h3>
        <img :src="movie.Poster" alt="movie poster">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    favouriteMovies() {
        const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        return watchlist.filter(movie => movie.rating === 3);
    }
  }
};
</script>
