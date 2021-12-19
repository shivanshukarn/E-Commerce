const storage = firebase.storage();
document.getElementById('SubmitForm').addEventListener('submit', SubmitForm);
function SubmitForm(e) {
    e.preventDefault();
    const id = Date.now();
    const img = document.getElementById('img').files;
    const name = document.getElementById('name').value;
    const desc = document.getElementById('desc').value;
    const price = document.getElementById('price').value;
    const cat = document.getElementById('cat').value;
    db.ref('Products/' + id).set({
        Name: name,
        Desc: desc,
        Price: price,
        Cat: cat,
        Img: img
    })
    // Create file metadata including the content type
    var metadata = {
        contentType: 'image/jpeg',
    };
    storage.ref('images/' + name).put(img[0], metadata)


    console.log("Form submitted")
}