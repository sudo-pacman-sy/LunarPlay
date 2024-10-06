import axios from "axios"

const card_url = 'https://api.themoviedb.org/3/movie/519182?language=en-US';
const card_img = 'https://api.themoviedb.org/3/movie/519182/images'
const options = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmZjVjYzZmOTNiNDMyM2NkYTA5MjQ4ZDY4NmEzMiIsIm5iZiI6MTcyNzIxMTAwMi40MDE5MzcsInN1YiI6IjY2ZWE1YTdmYjI5MTdlYjE4MDBiNDNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvARcWgeDRaQPgPynSYoycKokoalaHO3qI5GbNl82l4'
  }
};

//This function returns the card details
async function card_data() {
  try {
    const { data } = await axios.get(card_url, options)
    const title = data.original_title
    const overview = data.overview
    const release_date = data.release_date
    const adult = data.adult

    const movie = {
      title: title,
      overview: overview,
      release_date: release_date,
      adult: adult,
    }
    return movie;
    
  }
  catch (error) {
    console.error('Error:', error);
  }
}

//This function returns the card image
async function card_image() {
  try {
    const { data } = await axios.get(card_img, options)
    if (data && data.posters.length > 0) { //Checks if there is any data in the image array returned
      const poster_path = data.posters[1].file_path; // Gets the poster path
      return poster_path;
  } else {
      console.error('No posters found or unexpected data structure:', data);
      return null; // Return null if no posters are found
  }
  }
  catch (error) {
    console.error('Error:', error);
  }
}

export { card_data, card_image }
