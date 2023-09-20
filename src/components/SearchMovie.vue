<template>
    <div>
        <h2>Search Movies by Title</h2>
        <input type="text" v-model="keyword" placeholder="Enter keyword">
        <br>
        <input type="text" v-model="API_Key" placeholder="Enter your OMDB API key">
        <br>
        <button @click="searchMovies">Search</button>

        <ul v-if="movies && movies.length">
            <li v-for="movie in movies" :key="movie.imdbID">
                <h3> {{ movie.Title }} ({{ movie.Year }}) </h3>
                <img :src="movie.Poster" alt="Movie Poster" v-if="movie.Poster !== 'N/A'"/>
                <button @click="addToWatchList(movie)">Add to my watch list</button>
            </li>
        </ul>
        <p v-if="error"> {{ error }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                keyword: "",
                API_Key: "",
                movies: [],
                error: ""

            }
        },
        methods: {
            async searchMovies(){
                try{
                    const response = await fetch (
                        `https://www.omdbapi.com/?s=${this.keyword}&type=movie&apikey=${this.API_Key}`
                    );

                    const data = await response.json();

                    if(data.Response === "True"){
                        this.movies = data.Search;
                        this.error = "";
                    } else {
                        this.movies = [];
                        this.error = data.Error;
                    }
                }catch (error){
                this.error = "Failed to fetch movies.";
                }
            },
            addToWatchList(movie){
                let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]')
                // Check if the movie already exists in the watchlist 
                if (!watchlist.some(item => item.imdbID === movie.imdbID)){
                    movie.watched = false // Track if the movie has been watched
                    movie.rating = 0; // Initial rating
                    watchlist.push(movie)
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                }
            }
        }
    }
</script>

<style>
</style>