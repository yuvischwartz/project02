$( document ).ready(function() {
    console.log( "ready!" );

    const fetchGifs = (searchQuery) => {
        let gif_url = `https://api.giphy.com/v1/gifs/search?api_key=UWdRaAwStnkl2S2IJ9L9JGiUWjtYYu8q&q=${searchQuery}`
        console.log(gif_url);
        
        fetch(gif_url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let html = ""; 
            for(let img of data.data){
                console.log(img.images.fixed_height_downsampled.url);
                let str = `<img src=${img.images.fixed_height_downsampled.url} />`;
                html = html + str;
            }
            console.log(html);
            $('#result').html(html);
    
        });
    };

    $('#search-gifs-button').on('click', function(){
        console.log('search gif was pressed');
        let searchQuery = $('#search-input').val();
        console.log('searchQuery is:',searchQuery);
        fetchGifs(searchQuery);
      });

      /*
      /*
      A way of changing the border color:
       
      let html = ""; 
      let style = border: 10px solid #fe53bb //pink
      for(let img of data.data){
      console.log(img.images.fixed_height_downsampled.url);
      if(style == "border: 10px solid #fe53bb")
                {
                  style= "border: 10px solid #f5d300"; //to yellow
                  let str = `<img src=${img.images.fixed_height_downsampled.url} style=${style}/>`;
                  html = html + str;
                }
                else if(style == "border: 10px solid #f5d300"){ //yellow
                  style= "border: 10px solid #08f7fe"; //to blue
                  let str = `<img src=${img.images.fixed_height_downsampled.url} style=${style}/>`;
                  html = html + str;
                }
                else { //blue
                  style= "border: 10px solid #fe53bb"; //to pink
                  let str = `<img src=${img.images.fixed_height_downsampled.url} style=${style}/>`;
                  html = html + str;
                }
     }
              console.log(html);
            $('#result').html(html);
                */


    });


