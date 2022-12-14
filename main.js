// Sorry for using javascript (this is a note to myself)

//defining variables

  allImgs = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    ];


//creating functions

// Returns 3 random digit numbers that fit in the "allImgs" array.

function return_indexlist(){
    index = Math.floor(Math.random()*allImgs.length);
    if (index > allImgs.length-2){
        index = index-2;
    }
    list = [index, index+1]
    return list
}

// Use the return_indexlist function to get a random element on the allImgs array.

function get_random_imgs(){

 lists = return_indexlist();
 random_index1 = lists[0]
 random_index2 = lists[1]

 selImg1 = allImgs[random_index1];
 selImg2 = allImgs[random_index2];

 images = [selImg1, selImg2];

 return images;

}

// Apply the images selected by the get_random_imgs function.

function apply_new_image(){

  imgs = get_random_imgs();
  img1 = imgs[0];
  img2 = imgs[1];


  document.getElementById('images_1').src = `sources/${img1}`
  document.getElementById('images_2').src = `sources/${img2}`

}
