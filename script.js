// API KEY 2eb8dae5e1988df3f72f80c01551e09a

// Fetching
const getNowPlaying = async () => {
    try {
        let data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=2eb8dae5e1988df3f72f80c01551e09a&language=en-US&page=1&region=ID');
        data = await data.json();
        let {results} = data;
        results = results.filter(el => el.poster_path !== null).slice(0,5);
        results.forEach(el => document.getElementsByClassName('now_playing')[0].insertAdjacentHTML('afterbegin', renderNowPlaying(el)))
    } catch (error) {
        console.log(error)
    }
}

const getUpcoming = async () => {
    try {
        let data = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=2eb8dae5e1988df3f72f80c01551e09a&language=en-US&page=1&region=ID');
        data = await data.json();
        let {results} = data;
        results = results.filter(el => el.poster_path !== null).slice(0,5);
        results.forEach(el => document.getElementsByClassName('upcoming')[0].insertAdjacentHTML('afterbegin', renderUpcoming(el)))
    } catch (error) {
        console.log(error);
    }
}

// Component
const renderNowPlaying = (data) => {
    const html = `<div class="relative w-40 m-2 hover:shadow-2xl hover:border-4 hover:border-gray-500">
    <div onclick="specificMovie('${data.id}')" class="text-left w-32 component mx-auto my-4">
    <img class="w-32" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}" alt="">
    <p class="text-base bg-red-600 text-white text-center">Now Playing</p>
    <h1 class="text-lg font-bold w-32">${data.original_title}</h1>
    <p class="w-32">${data.vote_average > 0 ? data.vote_average : 'Unrated'}</p>
    <p class="text-xs text-gray-400 w-32">${data.release_date}</p>
    </div>
    </div>
    `
    return html;
}

const renderUpcoming = data => {
    const html = `<div class="relative w-40 m-2 hover:shadow-2xl hover:border-4 hover:border-gray-500">
                <div onclick="specificMovie('${data.id}')" class="text-left w-32 component mx-auto my-4">
                    <img class="w-32" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}" alt="">
                    <p class="text-base bg-blue-600 text-white text-center">Upcoming</p>
                    <h1 class="text-lg font-bold w-32">${data.original_title}</h1>
                    <p class="w-32">${data.vote_average > 0 ? data.vote_average : 'Unrated'}</p>
                    <p class="text-xs text-gray-400 w-32">${data.release_date}</p>
                </div>
            </div>
    `
    return html;
}

// Click Event

// Other Function

// Invoking
getNowPlaying();
getUpcoming();