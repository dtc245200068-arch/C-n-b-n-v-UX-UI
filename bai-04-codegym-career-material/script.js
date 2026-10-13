(function(){
  'use strict';
  var form=document.getElementById('consultForm');
  var message=document.getElementById('formMessage');
  if(!form||!message)return;
  form.addEventListener('submit',function(event){
    event.preventDefault();
    var name=document.getElementById('fullName');
    var phone=document.getElementById('phone');
    var email=document.getElementById('email');
    message.className='form-message';
    if(!name.value.trim()||!phone.validity.valid||!email.validity.valid){
      message.classList.add('error');
      message.textContent='Vui lòng nhập họ tên, số điện thoại 9–11 chữ số và email hợp lệ.';
      if(!name.value.trim())name.focus();else if(!phone.validity.valid)phone.focus();else email.focus();
      return;
    }
    message.classList.add('success');
    message.textContent='Đã kiểm tra thông tin thành công (bản demo). Không có dữ liệu nào được gửi đi.';
    form.reset();
  });
  if(window.jQuery){window.jQuery('.navbar-nav .nav-link').on('click',function(){window.jQuery('#mainNav').collapse('hide');});}
})();
