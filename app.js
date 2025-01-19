const previewContainer = document.getElementById('previewContainer')
const backImage = document.getElementById('imageContainer')

//new array structure
let images = [
    {
        src: "https://media.istockphoto.com/id/1446199740/photo/path-through-a-sunlit-forest.jpg?s=612x612&w=0&k=20&c=DuozAED7qfI5E6PcVb4bHtFJ_uM_n1duok56j_liLEA=",
        alt: 'image of a path passing through trees in a forest',
    },
    {
        src: "https://static.vecteezy.com/system/resources/thumbnails/038/982/943/small_2x/ai-generated-vibrant-autumn-leaves-create-a-picturesque-forest-scene-generated-by-ai-photo.jpg",
        alt: 'image of leaves near the forest floor'
    },
    {
        src: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
        alt: 'image of light shining through the forest canopy'
    },
    {
        src: "https://research2reality.com/wp-content/uploads/2016/04/Bark-biorefinery-feature.jpg",
        alt: 'close up image of bark on a tree'
    },
    {
        src: "https://media.istockphoto.com/id/518777930/photo/new-life-growing.jpg?s=612x612&w=0&k=20&c=SunGSERPd16He17UGtGacQS9SLa-S8RNkMA8IwGDO6w=",
        alt: 'image of a small sapling'
    },
    {
        src: "https://images.pexels.com/photos/18004684/pexels-photo-18004684.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
        alt: 'image of moss growing on a tree trunk'
    }
]

createBigImage(images[0])

function createPreviewContainer(image) {
    images.forEach(function (image) {
        let imageElem = document.createElement('img');

        imageElem.src = image.src;
        imageElem.alt = image.alt;

        imageElem.addEventListener('click', function() {
            console.log(image);
            createBigImage(image);        
        })

        imageElem.setAttribute('tabindex', '0');
        previewContainer.appendChild(imageElem);
    })
}

function createBigImage(img) {
    backImage.innerHTML = '';
    const bigImage = document.createElement('img');
    bigImage.src = img.src;
    bigImage.alt = img.alt;
    backImage.appendChild(bigImage);
    bigImage.setAttribute('id', 'bigImg');
}

createPreviewContainer()

let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

rightButton.addEventListener('click', function() {
    changeImage(1)
}); 

leftButton.addEventListener('click', function() {
    changeImage(-1)
});

let currentImageIndex = 0;

function changeImage (index) {
    currentImageIndex += index
    
    if (currentImageIndex >= images.length) currentImageIndex = 0
    if (currentImageIndex < 0) currentImageIndex = images.length - 1
    
    createBigImage (images[currentImageIndex])
    
} 

//why does this make right button not function? ^^

/*else if (currentImageIndex === 5) {
    currentImageIndex = images[0]
} */

/*  if (currentImageIndex === 0) {
    currentImageIndex = images.length

this makes right button dysfunctional because it applies to both buttons.
if first image is shown, right button is pressed and index = 6 which
doesnt exist. 

how to apply above if statement to individual buttons?
*/
