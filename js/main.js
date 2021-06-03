var acc = document.getElementsByClassName('group-btn')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var group__list = this.nextElementSibling
    if (group__list.style.maxHeight) {
      group__list.style.maxHeight = null
    } else {
      group__list.style.maxHeight = group__list.scrollHeight + 'px'
    }
  })
}

var bcc = document.getElementsByClassName('footer-title')
var j

for (j = 0; j < bcc.length; j++) {
  bcc[j].addEventListener('click', function () {
    this.classList.toggle('active')
    var footer__list = this.nextElementSibling
    if (footer__list.style.maxHeight) {
      footer__list.style.maxHeight = null
    } else {
      footer__list.style.maxHeight = footer__list.scrollHeight + 'px'
    }
  })
}
