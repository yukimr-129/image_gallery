const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Looping through images */
for (const img of imgList) {
    const newImage = document.createElement('img');
    const path = `images/${img}`
    newImage.setAttribute('src', path);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', path)
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const currentClass = this.getAttribute('class')
    if (currentClass === 'dark'){
        this.setAttribute('class', 'light')
        this.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        this.setAttribute('class', 'dark')
        this.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
})


