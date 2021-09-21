function getHashTags(headline) {
    const words = headline.split(" ");
    let tags = ["", "", ""];
    for (let i=0; i<words.length; i++) {
        let word = words[i];
        word = word.replace(/\W/g, "");
        let j = 0;
        while (j < 3 && word.length <= tags[j].length) {
            j++;
        }
        if (j < 3) {
            for (let k=2; k>j; k--) {
                tags[k] = tags[k-1];
            }
            tags[j] = word;
        }   
    }
    let result = [];
    for (let i=0; i<3; i++) {
        if (tags[i]) {
            result.push("#" + tags[i]);
        }
    }
    return result;
}