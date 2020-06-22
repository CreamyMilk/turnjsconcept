const imagesection =document.querySelector('.pagelocation');
async function postData(url = 'https://localhost/me', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
       
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return response.json(); 
}

postData('http://localhost:9020/directory', { username:'john' })
    .then(data => {
        renderimages(data);
        console.log(data);
    });

function renderimages(paths){
    paths.forEach(path => {
        let imgpath = document.createElement('img');
        imgpath.src = "john/"+path;
        imagesection.appendChild(imgpath);
    });
}


function a(){
a(document).on("change", "#image-mapper-file", function() {
    var c = this.files[0]
      , d = new FileReader;
    d.onloadend = function(d) {
        var e = b(d.target.result);
        a("#image-map").imageMapper("update", {
            src: "data:" + c.type + ";base64," + e,
            file: c.name
        })
    }
    ,
    c ? d.readAsArrayBuffer(c) : a("#image-map").imageMapper("update", {
        src: "",
        file: ""
    })
})
}