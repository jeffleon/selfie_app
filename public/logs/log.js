getdata();
        async function getdata(){
            const response = await fetch('/getdata');
            const json = await response.json();
            for (item of json){
                const geo = document.createElement('div');
                const root = document.getElementById("container");
                const mod = document.createElement('div');
                const time = document.createElement('div');
                const image = document.createElement('img');
                const negrita = document.createElement('strong');
                const negrita_1 = document.createElement('strong');

                geo.appendChild(negrita);
                time.appendChild(negrita_1);
                mod.textContent = `mood: ${item.entry}`;
                negrita.textContent = `${item.lati}, ${item.longi}`;
                const dateString = new Date(item.time_stamp).toLocaleString();
                negrita_1.textContent = dateString;
                console.log(item.image64);
                image.src = item.image64;

                root.append(mod, geo, time, image);
                geo.append(negrita);
              //  document.body.append(root);
            }
            console.log(json);
        }