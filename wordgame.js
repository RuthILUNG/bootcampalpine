// wordFunctions.js

// Function to find the longest word in a sentence
function longestWord(sentences) {
    let words = sentences.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// Function to find the shortest word in a sentence
function shortestWord(sentences) {
    let words = sentences.split(' ');
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}

// Function to calculate the total length of all words in a sentence
function wordLengths(sentences) {
    let totalLength = 0;
    let words = sentences.split(' ');
    for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
    }
    return totalLength;
}

// Alpine.js component definition
Alpine.data('sentenceAnalyzer', function() {
    return {
        sentence: '',
        longest: '',
        shortest: '',
        totalLength: 0,
        analyzeSentence: function() {
            this.longest = longestWord(this.sentence);
            this.shortest = shortestWord(this.sentence);
            this.totalLength = wordLengths(this.sentence);
        }
    };
});
