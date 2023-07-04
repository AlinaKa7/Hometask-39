const emojis = ['😃', '🙂', '😐', '🙁', '😣'];
const count = new Array(emojis.length).fill(0);
const votingContainer = document.getElementById('votingContainer');

function updateVoteCount(index) {
  count[index]++;
  displayResults();
}

function displayResults() {
  votingContainer.innerHTML = '';

  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];

    const emojiElement = document.createElement('span');
    emojiElement.className = 'emojis';
    emojiElement.innerHTML = emoji;
    emojiElement.onclick = function() {
      updateVoteCount(i);
    };

    const countElement = document.createElement('span');
    countElement.innerHTML = count[i];

    const votingResult = document.createElement('div');
    votingResult.className = 'voting-result';
    
    votingResult.appendChild(emojiElement);
    votingResult.appendChild(countElement);
    votingContainer.appendChild(votingResult);
  }
}

displayResults();