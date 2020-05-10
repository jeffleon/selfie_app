
async function setup()
        {
            noCanvas();
            var entry, longi, lati;
            const video = await createCapture(VIDEO);
            video.id("video");
            video.size(250,250);
            video.class("border border-dark  bg-dark");
            const boton_play = document.getElementById("Play");
            boton_play.addEventListener('click', async=>{
                video.show();
                video.play();
            });
            const boton_pause = document.getElementById("Pause");
            boton_pause.addEventListener('click', async=>{
                video.stop();
                video.pause();
                video.hide();
            });
            const container_video = document.getElementById("container_video");
            const videos_ = document.getElementById("video");
            container_video.append(videos_);
            const button = document.getElementById("onClick");
            button.addEventListener('click', async event =>{
                    video.loadPixels();
                    const image64 = video.canvas.toDataURL();
                    entry = document.getElementById('entry').value;
                    console.log(entry);
                    const data = {longi, lati, entry, image64};
                    const options = {
                    method: "POST",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    };
                    const response = await fetch('/api',options);
                    const json = await response.json();
                    console.log(json);
            });
            if ("geolocation" in navigator)
            {
                
                console.log("geolocation is available");
                navigator.geolocation.getCurrentPosition(async position=>{
                    console.log(position);
                    longi = position.coords.longitude;
                    lati = position.coords.latitude;
                    document.getElementById("lati").textContent = longi;
                    document.getElementById("longi").textContent = lati;
                }); 
            }
            else
            {
                console.log("geolocation is not available");
            }
            
        }

        function clearThis(target){
            target.value= "";
        }
        function geolocation()
        {
           
        }