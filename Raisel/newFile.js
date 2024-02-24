<script>
    // Education image and achievements functionality
    const educationImage = document.getElementById('educationImage');
    const achievementsSection = document.getElementById('achievements');
    const toggleAchievementsButton = document.getElementById('toggleAchievements');

    educationImage.addEventListener('mouseover', function () {alert('Explore my educational journey!')});

    toggleAchievementsButton.addEventListener('click', function () { }
    if (achievementsSection.style.display === 'none') {achievementsSection.style.display = 'block'}
    toggleAchievementsButton.textContent = 'Hide Achievements';
         else {achievementsSection.style.display = 'none'})
    toggleAchievementsButton.textContent = 'Show Achievements'
</script>;
