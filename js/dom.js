document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow';
})

// একাধিক এলিমেন্ট থাকলে এভাবে for of দিয়ে করা যায়। 
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue'
    }
}

// নতুন div তৈরি content সহ 
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Animi, voluptate.</p>
    `
    container.appendChild(friendDiv);
})

