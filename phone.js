const phoneInput = document.querySelector("#phone");
const btn = document.querySelector("#submit-btn");
const checkbox = document.querySelector('.checkbox');
const successBlock = document.querySelector('.success');
const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
});

phoneInput.addEventListener("input", phoneInputHandler);
checkbox.addEventListener("change", phoneInputHandler);
btn.addEventListener("click", btnHandler);

function phoneInputHandler() {
    btn.disabled = !(phoneMask.masked.isComplete && checkbox.checked);
}

async function btnHandler(e) {
    e.preventDefault();
    alert(document.querySelector('#phone').value);
    callbackBlock.classList.add('hidden');
    successBlock.classList.remove('hidden');
    phoneInput.value = '';
}