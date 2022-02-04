
const btn           = document.querySelector('.btn')
const modal_section = document.querySelector('.modal-sectiion');
const modal         = document.querySelector('.modal');
const modal_close   = document.querySelector('.modal-close-btn');
const modal_btn   = document.querySelector('.modal-btn');

const alert_modal_box   = document.querySelector('.alert_modal_box');
const modal_alert   = document.querySelector('.modal_alert');
const alert_close_btn = document.querySelector('.alert-close-btn');
const keep          = document.querySelector('.Keep');
const discard       = document.querySelector('.Discard');


btn.addEventListener('click', function(){
    modal_section.classList.add('active')
    modal.classList.add('act')
})

modal_close.addEventListener('click',function(){
    modal_alert.classList.add('modal_alert_active')
    alert_modal_box.classList.add('active')
})

alert_close_btn.addEventListener('click',function(){
    modal_alert.classList.remove('modal_alert_active')
    alert_modal_box.classList.remove('active')
})
keep.addEventListener('click',function(){
    modal_alert.classList.remove('modal_alert_active')
    alert_modal_box.classList.remove('active')
})
modal_btn.addEventListener('click',function(){
    modal_section.classList.remove('active')
    modal.classList.remove('act')
})
discard.addEventListener('click',function(){
    modal_section.classList.remove('active')
    modal.classList.remove('act')
    modal_alert.classList.remove('modal_alert_active')
    alert_modal_box.classList.remove('active')
})

modal_section.addEventListener('click',function(e){
    if(e.target == this){
        modal_section.classList.remove('active')
        modal.classList.remove('act')
    }
})

// ================= Accoordion =================

const accordion_title = document.querySelectorAll('.accourdion-title')
 
accordion_title.forEach(item => {
    item.addEventListener('click',function(){
        accordion_title.forEach(item => {
            if (item != this) {
                item.classList.remove('active');
                item.nextElementSibling.style.height = '0px';
            }
        });
        item.classList.toggle('active')
        
        if(item.classList.contains("active")){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + "px"
        }else{
            item.nextElementSibling.style.height = "0px"
        }
    })
})