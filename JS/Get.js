const fetchData = db.ref('Products/');
fetchData.on('child_added', function (snapshot){
    const data = snapshot.val();
    var token = 'cb76c710-e9ef-4db3-825c-7c201337cc7b'
    var imgNm = data.Name
    const print = `<div class="card">
<div class="img"><img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-cd29d.appspot.com/o/images%2F${imgNm}?alt=media&token=${token}" alt=""></div>
<div class="con">
    <h3 id="name">${data.Name}</h3>
    <p id="desc">${data.Desc}</p>
    <div class="oth">
        <button id="cat" disabled>${data.Cat}</button> <button id="price" disabled>₹${data.Price}</button>
    </div>
</div>
</div>`

  document.getElementById('itemsDiv').innerHTML += print
})

// var token = 'cb76c710-e9ef-4db3-825c-7c201337cc7b'
// var imgNm = ''
// `https://firebasestorage.googleapis.com/v0/b/e-commerce-cd29d.appspot.com/o/images%2F${imgNm}?alt=media&token=${token}`
