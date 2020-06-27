import Slider from './slider';

let sliderText= document.querySelector("#slider-text");
let sliderTitle= document.querySelector("#slider-title");
let sliderSubTitle= document.querySelector("#slider-subtitle");
let sliderImage= document.querySelector("#slider-image");

let slider = new Slider({
    elements:[
        {
            title:'Lorem Ipsum',
            subtitle: 'Ipsum',
            image: '../images/4.jpg',
            text: 'Lorem centra ratur garfe sidentr fisie'
        },
        {
            title:'Lorem Ipsum 2',
            subtitle: 'Ipsum 2',
            image: '../images/3.jpg',
            text: '2 Contrary Lorem centra ratur garfe sidentr fisie'
        }
    ],
    animationFunc: function(element){
       sliderTitle.innerHTML = element.title;
       sliderSubTitle.innerHTML=element.subtitle;
       sliderText.innerHTML= element.text;
       sliderImage.src=element.image;
    },
    speed:2000
});

//slider.play();