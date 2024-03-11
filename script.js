var arr = [];
function Save() {
    var a = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        code: document.getElementById('code').value,
        image: document.getElementById('image').files[0],
        price: document.getElementById('price').value,
    };
    console.log(a);
    arr.push(a);
}

function Show() {
  var html = '';
  for (let i = 0; i < arr.length; i++) {
      var html = '<div class="col-3">';
      html += '<div class="card" style="width: 18rem;margin-bottom: 20px;">';
      var img = new Image();
      // tao doi tuong URL duyet qua tung phan tu image
      if (arr[i].image) {
          img.src = window.URL.createObjectURL(arr[i].image)
          img.classList.add("card-img-top");
          img.style.height = "200px";
          // img.style.width = "200px";
          //noi anh vao o
          html += '<div>';
          html += img.outerHTML;
          html += '</div>';
         
      }
      // html += '<img src="'+arr[i].image+'" class="card-img-top" style="height: 400px;">';
      html += '<div class="card-body">';
      html += '<div class="card-title">'+arr[i].name + '</h5>';
      html += "<p class='card-text'>Price: " + arr[i].price + "</p>";
      html += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
  }
  document.getElementById('tbl').innerHTML += html;
}

function Reset() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('code').value = '';
    document.getElementById('image').files[0] = '';
    document.getElementById('price').value = '';
}

