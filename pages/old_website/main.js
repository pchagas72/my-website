// I DONT KNOW HOW TO CODE IN JAVASCRIPT WAAAAAAAAAAAAAAAAA

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
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img15.jpg',
    'img16.jpg',
    'img17.jpg',
    'img18.jpg',
    'img19.jpg',
    'img20.jpg',
    ];



//creating functions

function return_indexlist(){
    index = Math.floor(Math.random()*allImgs.length);
    if (index > allImgs.length-3){
        index = index-2;
    }
    list = [index, index+1, index+2]
    return list
}

function get_random_imgs(){

 lists = return_indexlist();
 random_index1 = lists[0]
 random_index2 = lists[1]
 random_index3 = lists[2]

 selImg1 = allImgs[random_index1];
 selImg2 = allImgs[random_index2];
 selImg3 = allImgs[random_index3];

 images = [selImg1, selImg2, selImg3];

 return images;

}
function apply_new_image(){

  imgs = get_random_imgs();
  img1 = imgs[0];
  img2 = imgs[1];
  img3 = imgs[2];


  document.getElementById('intro_imgs1').src = `sources/images/${img1}`
  document.getElementById('intro_imgs2').src = `sources/images/${img2}`
  document.getElementById('intro_imgs3').src = `sources/images/${img3}`

}
