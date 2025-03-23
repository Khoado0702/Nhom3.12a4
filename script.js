// Đóng lời chào đầu trang
window.onload = function() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    popup.style.display = 'flex';

    closePopup.onclick = function() {
        popup.style.display = 'none';
    };
};

// Con AI liên hệ
const aiAssistant = document.getElementById('aiAssistant');
aiAssistant.onclick = function() {
    alert('Bạn có thể liên hệ với chúng tôi qua email: nhom3.12a4.annghia@gmail.com - hotline nhóm trưởng: 0981xxxxxx');
};

// Chia sẻ cảm nghĩ
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.onsubmit = function(event) {
    event.preventDefault(); // Ngừng gửi biểu mẫu để thực hiện kiểm tra
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const thoughts = document.getElementById('thoughts').value;

    // Ktra điều kiện
    if (name === "" || email === "" || thoughts === "") {
        alert("Vui lòng điền đầy đủ thông tin trước khi gửi.");
        return;
    }

    // Ktra email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Nhập gmail hợp lệ đi má.");
        return;
    }

    // Nếu hợp lệ thì hiển thị cảm ơn
    alert("Cảm ơn bạn đã gửi cảm nghĩ nhé :33 !");
};

// Ẩn danh
const anonymousButton = document.getElementById('anonymousButton');
anonymousButton.onclick = function() {
    alert('Cảm ơn bạn đã gửi cảm nghĩ ẩn danh nhé :33 !');
};
