<template>
    <div>
        <h1>Watchlist</h1>
        <ul>
            <li v-for="movie in movies" :key="movie.imdbID">
                <h4>{{ movie.Title }}</h4>
                <input type="checkbox" v-model="movie.watched" @change="updateWatchlist" class="watched"> Watched
                <img :src="movie.Poster" alt="Movie Poster">
                <br>
                <span v-if="movie.watched">
                    Rating:
                    <span v-for="n in 3" :key="n">
                        <button @click="rateMovie(movie,n)">
                            {{ n <= movie.rating ? '★' : '☆'  }}
                        </button>
                    </span>
                </span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: JSON.parse(localStorage.getItem('watchlist') || '[]')
            }
        },
        methods: {
            updateWatchlist() {
                localStorage.setItem('watchlist', JSON.stringify(this.movies));
            },
            rateMovie(movie, rating) {
                movie.rating = rating;
                this.updateWatchlist();
            }
        }
    }
</script>

<style>
</style>