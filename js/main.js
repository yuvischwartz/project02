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

    });


/*
    const fetchStickers = (searchQuery) => {
        let sticker_url = `https:/api.giphy.com/v1/stickers/search?api_key=UWdRaAwStnkl2S2IJ9L9JGiUWjtYYu8q&q=${searchQuery}`
        console.log(sticker_url);

        fetch(sticker_url)
        .then((response) => response.json())
        .then((data) => {
            console(log)(data);
            let html = "";
            for(let img of data.data){
                console.log(img.images.original.url);
                let str = `<img src=${img.images.original.url} />`;
                html = html + str;
            }
            console.log(html);
            $('#result').html(html);
        });
    };  */ 


  


    /*
    $('#serach-stickers-button').on('click',function(){
        console.log('search stickers was pressed');
        let searchQuery = $('#search-input').val();
        console.log('searchQuery is:',searchQuery);
        fetchStickers(searchQuery);
    });





    const fetchGifs = (searchQuery) => {
        let gif_url = `https://api.giphy.com/v1/gifs/search?api_key=UWdRaAwStnkl2S2IJ9L9JGiUWjtYYu8q&q=${searchQuery}`
        console.log(gif_url);
        console.log(searchQuery);
        
        fetch(gif_url)
        .then((response) => response.json())
        .then((data) => {
            /*console.log(data);
            console.log('data array is:', data.data);
            console.log('first result in the result array is:', data.data[0]);
            console.log('url the originak images in the results array are:', data.data[0].images.original.url);
            
            let html = ""; 
            for(let img of data.data){
                console.log(img.images.original.url);
                let str = `<img src=${img.images.original.url} />`;
                html = html + str;
            }
            console.log(html);
            $('#result').html(html);
        });
    };

    $('#serach-gif-button').on('click', (event) => {
        console.log('button was clicked!');
        let searchQuery = $('#search-input').val();
        console.log(searchQuery);
        fetchGifs();

        
        fetch('https://api.giphy.com/v1/gifs/search?api_key=UWdRaAwStnkl2S2IJ9L9JGiUWjtYYu8q&q=corona')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log('data array is:', data.data);
            console.log('first result in the result array is:', data.data[0]);
            console.log('url the originak images in the results array are:', data.data[0].images.original.url);
            
            let html = "";
            
            for(let img of data.data){
                //console.log(img);
                console.log(img.images.original.url);
                let str = `<img src=${img.images.original.url} />`;
                html = html + str;
            }
            
            console.log(html);
            $('#result').html(html);

        }); 
    });*/
