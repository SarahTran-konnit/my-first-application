const imagesData = [{
    photo: './images/pexels-david-bartus-1166209.jpg',
    title: 'image 1',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',
},
{
    photo: './images/pexels-eberhard-grossgasteiger-730981.jpg',
    title: 'image 2',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',
},
{
    photo: './images/pexels-ezra-comeau-2387418.jpg',
    title: 'image 3',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',

},
{
    photo: './images/pexels-francesco-ungaro-2325446.jpg',
    title: 'image 4',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',
},
{
    photo: './images/pexels-jaime-reimer-2662116.jpg',
    title: 'image 5',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',
},
{
    photo: './images/pexels-ricky-esquivel-1586298.jpg',
    title: 'image 6',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',
},
{
    photo: './images/pexels-simon-berger-1266810.jpg',
    title: 'image 7',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',
},
{
    photo: './images/pexels-tobi-675764.jpg',
    title: 'image 8',
    description: 'Curabitur at ex ac nunc porttitor consectetur vel quis massa. Ut consectetur diam sed sapien iaculis, ac tempus purus tempor. Aenean a fringilla ex.',
},
];
let currentPhoto = 0;

const loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').html(imagesData[photoNumber].title);
    $('#photo-description').html(imagesData[photoNumber].description);

}

loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
    currentPhoto++;
    if (currentPhoto > 7) {
        currentPhoto = 0;
    }
 
    loadPhoto(currentPhoto);
    $('#right-arrow').addClass('clicked');
    $('#thumbnail'+ currentPhoto).addClass('clicked');
    let previousThumbnail = currentPhoto -1;

    if(previousThumbnail>=0){
        $('#thumbnail'+ previousThumbnail).removeClass('clicked');
     }
     else{
        previousThumbnail =7;
        $('#thumbnail'+ previousThumbnail).removeClass('clicked');
     }
})

$('#left-arrow').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = 7;
    }
    loadPhoto(currentPhoto);

    $('#right-arrow').addClass('clicked');
    $('#thumbnail'+ currentPhoto).addClass('clicked');
    let previousThumbnail = currentPhoto +1;

    if(previousThumbnail<=7){
        $('#thumbnail'+ previousThumbnail).removeClass('clicked');
     }
     else{
        previousThumbnail =0;
        $('#thumbnail'+ previousThumbnail).removeClass('clicked');
     }

})

imagesData.forEach((imageData, index) => {
const thumbnail = document.createElement('div');//create an img element
thumbnail.style.backgroundImage = `url(${imageData.photo})`;

thumbnail.classList.add('thumbnail'); //create a class name for thumbnail
thumbnail.setAttribute('data-index', index);
thumbnail.setAttribute('id', 'thumbnail'+index);
const tooltip = document.createElement('div');
tooltip.innerText = imageData.title;
tooltip.classList.add('tooltip');
thumbnail.appendChild(tooltip);
if(index ===0){
    thumbnail.classList.add('clicked');
}

$('#image-container').append(thumbnail); //put a child element aka img element into thumbnail image


});

let previousThumbnail;

$('.thumbnail').click(function(event){
    if(previousThumbnail){
        $('#'+ previousThumbnail).removeClass('clicked');
     }
    const indexClicked = $(event.target).attr('data-index');
    previousThumbnail = $(event.target).attr('id');
   $(event.target).addClass('clicked');
    loadPhoto(indexClicked);

})


  