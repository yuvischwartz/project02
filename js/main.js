$( document ).ready(function() {
    console.log( "ready!" );

    $('#serach-gif-button').on('click', (event) => {
        console.log('button was clicked!');
        
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




    });


});