// ตะกร้าของผู้ใช้
let cart = [];

// ฟังก์ชันในการเพิ่มสินค้าไปที่ตะกร้า
function addToCart(name, price) {
    // เพิ่มสินค้าลงในตะกร้า
    cart.push({ name: name, price: price });

    // อัปเดตรายการในตะกร้า
    updateCart();
}

// ฟังก์ชันในการอัปเดตตะกร้า
function updateCart() {
    // หาตัวแปรที่จะแสดงรายการสินค้าในตะกร้า
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count'); // เพิ่มตัวแปรสำหรับจำนวนสินค้าในตะกร้า

    // ลบรายการเดิมทั้งหมด
    cartItems.innerHTML = '';

    // แสดงรายการใหม่ในตะกร้า
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ฿${item.price}`;
        cartItems.appendChild(li);

        // สร้างไอคอนกากบาทแทนปุ่มลบ
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-times"></i>'; // ใช้ Font Awesome ไอคอนกากบาท
        removeButton.classList.add('remove-item');
        
        // เพิ่มเหตุการณ์การลบสินค้า
        removeButton.addEventListener('click', function() {
            removeFromCart(index); // ลบสินค้าตาม index
        });

        li.appendChild(removeButton);
        total += item.price;
    });

    // อัปเดตยอดรวม
    totalPrice.textContent = `฿${total}`;

    // อัปเดตจำนวนรายการในตะกร้า
    cartCount.textContent = cart.length; // จำนวนสินค้าในตะกร้า
}

// ฟังก์ชันในการลบสินค้าจากตะกร้า
function removeFromCart(index) {
    // ลบสินค้าจากตะกร้า
    cart.splice(index, 1);

    // อัปเดตรายการในตะกร้า
    updateCart();
}

// เพิ่มการจับเหตุการณ์สำหรับปุ่ม "หยิบลงตะกร้า"
const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach((button) => {
    button.addEventListener('click', function() {
        // หาชื่อสินค้าและราคา
        const itemName = this.closest('.menu-item').querySelector('p').textContent.split(' - ')[0];
        const itemPrice = parseInt(this.closest('.menu-item').querySelector('p').textContent.split(' - ')[1].replace('฿', '').trim());

        // เพิ่มสินค้าไปที่ตะกร้า
        addToCart(itemName, itemPrice);
    });
});
// ฟังก์ชันแสดง/ซ่อนฟอร์มสั่งอาหาร
const orderButton = document.getElementById('order-button');
const orderForm = document.getElementById('order-form');

// เพิ่มเหตุการณ์การคลิกปุ่ม "สั่งอาหาร"
orderButton.addEventListener('click', function() {
    // แสดงฟอร์มกรอกข้อมูล
    orderForm.style.display = 'block';
});

// ฟังก์ชันการยืนยันการสั่ง
const orderDetailsForm = document.getElementById('order-details');
orderDetailsForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // รับข้อมูลจากฟอร์ม
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // แสดงข้อมูลที่กรอกไว้
    alert(`ข้อมูลการสั่งอาหาร:\nชื่อ: ${name}\nที่อยู่: ${address}\nเบอร์โทร: ${phone}`);

    // ทำการส่งข้อมูลหรือกระทำเพิ่มเติมที่ต้องการ (เช่น บันทึกข้อมูลลงฐานข้อมูล ฯลฯ)
    
    // ซ่อนฟอร์มหลังจากที่กดส่ง
    orderForm.style.display = 'none';
});
// เมื่อกดปุ่ม "สั่งอาหาร"
document.getElementById('order-button').addEventListener('click', function() {
    // แสดงฟอร์มกรอกข้อมูล
    document.getElementById('order-form').style.display = 'block';
    // แสดงพื้นหลังมืดๆ
    document.getElementById('order-form-overlay').style.display = 'block';
});

// เมื่อคลิกที่พื้นหลังมืดๆ จะปิดฟอร์ม
document.getElementById('order-form-overlay').addEventListener('click', function() {
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('order-form-overlay').style.display = 'none';
});
