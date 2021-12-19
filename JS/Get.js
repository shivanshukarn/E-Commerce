console.log("Welcome")

const fetchData = db.ref('Products/');
fetchData.on('child_added', function (snapshot){
    const data = snapshot.val();
    var token = 'cb76c710-e9ef-4db3-825c-7c201337cc7b'
    var imgNm = data.Name
    const print = `<div class="col">
<div class="card shadow-sm">
    <img class="bd-placeholder-img card-img-top" src="https://firebasestorage.googleapis.com/v0/b/e-commerce-cd29d.appspot.com/o/images%2F${imgNm}?alt=media&token=${token}" />

    <div class="card-body">
    <h5 class="card-title">${data.Name}</h5>
        <p class="card-text">${data.Desc}</p>
        <div class="d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-sm btn-secondary" disabled>₹${data.Price}</button>
            <small class="text-muted">${data.Cat}</small>
        </div>
    </div>
</div>
</div>`

  document.getElementById('itemsDiv').innerHTML += print
})

// var token = 'cb76c710-e9ef-4db3-825c-7c201337cc7b'
// var imgNm = ''
// `https://firebasestorage.googleapis.com/v0/b/e-commerce-cd29d.appspot.com/o/images%2F${imgNm}?alt=media&token=${token}`
