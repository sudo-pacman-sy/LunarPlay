# Movie Discovery App

A web application that allows users to browse, search, and manage their favorite movies. Discover detailed information, ratings, and reviews to enhance your movie-watching experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Movie Recommendations**: Receive personalized movie recommendations based on your preferences.
- **View Movie Details**: Get comprehensive information about each movie, including ratings, genres, and reviews.
- **User-Friendly Interface**: Simple and intuitive layout for a seamless experience.

## Installation

To get started with the Movie Database App, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sudo-pacman-sy/LunarPlay.git
   ```
2. **Get your TMDB API key**

- Visit [TMDB](https://developer.themoviedb.org/docs/getting-started) and sign up for an account.
- Navigate to your account settings and find your API key.

3. **Create a .env file:**

- In the root directory of the project, create a .env file.
- Add your TMDB API key to the .env file:

  ```bash
  VITE_TMDB_KEY=your_api_key_here
  ```

- Or use default api key as given below:

  ```bash
  VITE_TMDB_KEY=Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNmZjVjYzZmOTNiNDMyM2NkYTA5MjQ4ZDY4NmEzMiIsIm5iZiI6MTcyNzIxMTAwMi40MDE5MzcsInN1YiI6IjY2ZWE1YTdmYjI5MTdlYjE4MDBiNDNjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XvARcWgeDRaQPgPynSYoycKokoalaHO3qI5GbNl82l4
  ```

4. **Install all dependencies:**

   ```bash
   npm install
   ```

5. **Run the project:**

   ```bash
   npm run dev
   ```

6. **Access the app:**

- Open your browser and navigate to `http://localhost:5173`

## Screenshots

- **HomePage**

![Homepage](images/homepage1.png)

![Homepage](images/homepage2.png)

- **Movie Details**

![Movie Details](images/details1.png)

![Movie Details](images/details2.png)

## Live Demo

Check out the live version of the project hosted on **Vercel**:  
👉 [Movie Discovery Platform - LunarPlay](https://moviediscoveryplatform-sudo-pacman-sys-projects.vercel.app/)

## Usage

Use the application to explore recommended movies and click on a movie to view detailed information.

## Contributing

Contributions are welcome! To contribute to the Movie Database App, fork the repository, create a new branch, make your changes, and commit them. After that, push to the branch and open a pull request.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
