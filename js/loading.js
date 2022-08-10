let images = document.querySelectorAll('img')

for(let i = 0; i < images.length; i++){
    images[i].addEventListener('loadedmetadata', function(){
        loading.style.display = 'flex'
        fullBox.style.display = 'none'
    })
}
