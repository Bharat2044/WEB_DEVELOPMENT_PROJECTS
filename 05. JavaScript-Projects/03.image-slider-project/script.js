const image = document.querySelector('#image');
const preBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');

const imageSource = ["https://images.pexels.com/photos/15859215/pexels-photo-15859215.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/3944006/pexels-photo-3944006.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/9470551/pexels-photo-9470551.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/1144241/pexels-photo-1144241.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/2485336/pexels-photo-2485336.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/4630000/pexels-photo-4630000.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/6396082/pexels-photo-6396082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/5851046/pexels-photo-5851046.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/988941/pexels-photo-988941.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/3030282/pexels-photo-3030282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/10936282/pexels-photo-10936282.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/3646851/pexels-photo-3646851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/9665646/pexels-photo-9665646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/2271643/pexels-photo-2271643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/9665646/pexels-photo-9665646.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/4942380/pexels-photo-4942380.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/15778613/pexels-photo-15778613.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/10390686/pexels-photo-10390686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14366597/pexels-photo-14366597.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14178168/pexels-photo-14178168.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14678545/pexels-photo-14678545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14527225/pexels-photo-14527225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14608918/pexels-photo-14608918.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/13997659/pexels-photo-13997659.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/13781341/pexels-photo-13781341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/13164423/pexels-photo-13164423.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/15850737/pexels-photo-15850737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/15113030/pexels-photo-15113030.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/15851331/pexels-photo-15851331.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/12509875/pexels-photo-12509875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/13725030/pexels-photo-13725030.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14155606/pexels-photo-14155606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/12900912/pexels-photo-12900912.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/15387997/pexels-photo-15387997.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/10566926/pexels-photo-10566926.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/14213532/pexels-photo-14213532.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/9828304/pexels-photo-9828304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/6819588/pexels-photo-6819588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/2394979/pexels-photo-2394979.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/15349308/pexels-photo-15349308.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/11576197/pexels-photo-11576197.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/10536106/pexels-photo-10536106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/13862328/pexels-photo-13862328.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/6307205/pexels-photo-6307205.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/5122606/pexels-photo-5122606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/4254013/pexels-photo-4254013.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"];

let index = 0;

preBtn.addEventListener("click", () => {
    if(index === 0)
        index = imageSource.length;
    index--;
    image.src = imageSource[index];
});

nextBtn.addEventListener("click", () => {
    if(index === imageSource.length-1)
        index = -1;
    index++;
    image.src = imageSource[index];
})