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
      $('.btn_toggle_menu').on('click', function(){
        console.log('toggle menu was pressed');

      });*/

    });


