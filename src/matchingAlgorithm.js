export const algorithm = (inputValue, setResult) => {
    const data = require('./data/data.json')

    const selectedImageName = inputValue;
    const selectedImage = {};
    const rankedImages = [];
    const alteredData = JSON.parse(JSON.stringify(data));

    // The below 'if' statement removes the selectedImage from the collection.
    if (alteredData.hasOwnProperty(selectedImageName)) {
        selectedImage[selectedImageName] = alteredData[selectedImageName];
        delete alteredData[selectedImageName];
    } else {
        alert("Input image is not in the image list")
    }

    // The first loop below loops through each 'jpg' in the 'alteredData' collection 
    // The second loop loops through each of the key values in the 'selectedImage'
    // The third loop loops through each of the 'selectedValueObj' in the 'selectedValue'. From here, grab the description and score for each to use in the next loop.
    // The final loop loops through each of the values from the current jpg from the 'alteredData' collection.
    // If any of the current jpg's descriptions match the current 'selectedValue' descriptions, would then multiply the scores and add it to the 'similarityScore'
    // I then push the 'key' (e.g '2.jpg') and the similarity score that has been build up throughout the loop, and sort these values to rank them.
    for (const [key, value] of Object.entries(alteredData)) {
        let similarityScore = 0
        for (const [selectedKey, selectedValue] of Object.entries(selectedImage)) {
            for (const selectedValueObj of selectedValue) {
                const description = selectedValueObj.description;
                const selectedImageScore = selectedValueObj.score;
                for (const item of value) {
                    if (item.description === description) {
                        similarityScore += (selectedImageScore * item.score);
                        break;
                    }
                }
            }
        }
        rankedImages.push({
            id: key,
            similarityScore: similarityScore,
        })
    }
    rankedImages.sort((a, b) => b.similarityScore - a.similarityScore);
    setResult(rankedImages);
}