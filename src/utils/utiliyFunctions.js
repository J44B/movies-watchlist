// utility functions to use over the application

// turn release date from yyyy-mm-dd to dd-mm-yyyy

function convertReleaseDate(releaseDate) {
    const splitDate = releaseDate.split('-'); // returns an array like ["2024", "10", "03"]
    const reversedDate = splitDate.toReversed();
    const joinedDate = reversedDate.join('.');
    return joinedDate.toString();
}

export { convertReleaseDate };