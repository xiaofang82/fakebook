# Fake Book
This project is a comprehensive social system designed to enable users to share text and images, reminiscent of platforms like Facebook.

## Features:

Text and Image Posting: Users can create posts containing both text and images, fostering a rich and diverse content-sharing experience.

Code snippet for determining and displaying images:
```JavaScript
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

```

## Demo Link

[DEMO LINK](https://xiaofang82.github.io/fakebook/)