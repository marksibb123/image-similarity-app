# Image Similarity App

### The App

This is an application used to rank your selected image against the list of images that are stored in 'data.json'.

It makes use of the 'description' and 'score' to compare against each of the other images in the 'data.json'. Resulting in a list from most, to least similar.

### To Run

Once the repo is cloned, cd into it, and then it should be able to run using 'npm install' followed by 'npm start'.

### Trade-off's

Some trade-off's made to fit the time limit include:
- More time testing the algorithm itself, unit tests would be useful here.
- This application is built in a React project, so I would of liked to have several React components (e.g a parent app container, text input component, and a list/image output component).
- Improving the user interface, for example, it currently outputs a list of each jpg name and the similarity score. An improvement on this would be to show the similar images as a JPG. And only show the images that are above a certain level of similarity.
- I would of liked to break up the 'algorithm' code into seperate functions for readability and simplicity.

### Deploying to Production Considerations

Before deployment to production I would:
- Ensure all the 'Trade-off' points are met, particularly having tests in place.
- Make the algorithm more scalebale. If there is a larger image list in the future, the extensive looping algorithm could consume too much time, and memory when run. Therefore testing of this algorithm with larger 'data.json' files should be considered.
- Configure the front-end to fetch the 'data.json' from an API, and only fetch the required fields.
