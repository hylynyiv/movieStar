<template>
    <div>
        <h1>Add a New Movie</h1>
        <input v-model="newMovie" placeholder="Enter movie name" />
        <button @click="addMovie">Add Movie</button>
    </div>

    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
        <button @click="deleteMovie(movie.id)">Delete</button>
      </li>
    </ul>


</template>
  
  <script>
  export default {
    data() {
      return {
        newMovie: '',
        movies: JSON.parse(localStorage.getItem('movies') || '[]')
      };
    },
    methods: {
      addMovie() {
        // const movies = JSON.parse(localStorage.getItem('movies') || '[]');
        // movies.push({ id: Date.now(), title: this.newMovie });
        const movie = { id: Date.now(), title: this.newMovie };
        this.movies.push(movie); // Update the component's data
        localStorage.setItem('movies', JSON.stringify(this.movies));
        this.newMovie = ''; // Clear the input field
      },
      deleteMovie(movieId) {
      this.movies = this.movies.filter(movie => movie.id !== movieId);
      localStorage.setItem('movies', JSON.stringify(this.movies));
    }
    }
  };
  </script>