// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      minScore = scores[i];
    } else if (minScore > scores[i]) {
      minScore = scores[i];
    }
  }
  
console.log(minScore);
