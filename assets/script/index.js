'use strict';
import { Profile} from "./user.js";
import { onEvent, select, selectAll, selectById, create} from "./utilites.js";

const logo = select('.logo');
const model = selectById('model');
const modalContainer = select('.modal-container');
const userinfo = select('.userinfo');
const showImg = selectById('show-image');
const btnFile = selectById('btn-file');
const btnPost = selectById('btn-post');
const news = selectById('news');
const output = select('.output');

var selectedFile;

const users = new Profile('1001', 'Angie', 'Young' ,'Angie@gmail.com',
 ['https://github.com/xiaofang82','https://www.linkedin.com/in/xiaofang-yang-37144a285/'], ['Web Develop', 'Student', 'MITT'], true);

onEvent('click', logo, function(){
    const userDetail = users.getInfo();

    modalContainer.classList.add('model_show');
    model.classList.add('modal-transform');
    userinfo.innerHTML = `<p><span>ID</span>: ${userDetail.id}</p>`;
    userinfo.innerHTML += `<p><span>Name</span>: ${userDetail.name}</p>`;
    userinfo.innerHTML += `<p><span>UserName</span>: ${userDetail.userName}</p>`;
    userinfo.innerHTML += `<p><span>Email</span>: ${userDetail.email}</p>`;
    userinfo.innerHTML += `<p><span>Pages</span></p>`;
    for(let value of userDetail.pages){
        userinfo.innerHTML += `<p>${value}</p>`;
    }
    userinfo.innerHTML += `<p><span>Groups</span></p>`;
    for(let value of userDetail.groups){
        userinfo.innerHTML += `<p>${value}</p>`;
    }
    userinfo.innerHTML += `<p><span>Monetize</span>: ${userDetail.canMonetize==true? 'Yes':'No'}</p>`;
})

onEvent('click', window, function(){
    if(event.target == modalContainer){
        modalContainer.classList.remove('model_show');
        model.classList.remove('modal-transform');
    }
})

onEvent('change', btnFile, function(event){
    selectedFile = this.files[0];

    if (selectedFile) {
      let fileName = selectedFile.name;
      showImg.innerText = fileName;
    }
      
});

onEvent('click', btnPost, function(){
    if(news.value.trim() == '' && showImg.innerText.trim() == ''){
        news.focus();
    } else {
        const today = new Date();
        let formattedDate = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }).format(today);

        
        const newInfo = create('div');
        newInfo.classList.add('message');
        newInfo.innerHTML = `<div class="flexbox">
        <div class="msg-logo"><img src="./assets/image/photo.png" class="logo"></div>
        <div class="msg-name">Angie</div>
        <div class="msg-date">${formattedDate}</div>
        </div>`;
        if(news.value.trim()!='') {
            newInfo.innerHTML += `<div>${news.value}</div>`;
        }
        if(showImg.innerText.trim()!='') {
            
        
            //hiddenpic.prepend(imgEle);
            //console.log(hiddenpic.innerHTML);
            newInfo.innerHTML += `<div></div>`;
        }
        output.prepend(newInfo);
        

        if(showImg.innerText.trim()!='') {
            const divs = selectAll('.message');
            const messages = divs[0].querySelectorAll('div');
            const lastDiv = messages[messages.length-1];
            
            console.log(lastDiv.innerHTML);
            const imgEle = create('img');
            const reader = new FileReader();

            reader.onload = function(event) {
                imgEle.src = event.target.result;
            };
            reader.readAsDataURL(selectedFile);
            imgEle.classList.add('message-img');
            lastDiv.prepend(imgEle);

        }
        
        showImg.innerText = '';
        news.value = '';
    }
})