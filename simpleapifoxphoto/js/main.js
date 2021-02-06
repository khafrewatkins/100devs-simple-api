//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://randomfox.ca/floof/")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.image)
      document.querySelector("img").src = data.image
    })
    .catch(err => {
        console.log(`error ${err}`)

        
    });



fetch("https://aws.random.cat/meow")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector(data).src = data
    })
    .catch(err => {
        console.log(`error ${err}`)
    });