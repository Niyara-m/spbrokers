var nav = document.getElementById('nav');
var newDate = new Date();
var year = newDate.getUTCFullYear();

document.getElementById("year").innerHTML = year;

window.onscroll = function () { 
	"use strict";
	if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
		nav.classList.add("bg-black", "opacity-75", "transition", "duration-1000", "ease-in-out");
		nav.classList.remove("bg-transparent");
	} 
	else {
		nav.classList.add("bg-transparent");
		nav.classList.remove("bg-black", "opacity-75");
	}
};

//const axios = require('axios');

new Vue({
  el: '#app',
  data: {
   form: {
   	fio: '',
   	phone: '',
   	email: '',
   	comment: '',
   	success: false,
   },
   validation: {
   	fio: true,
   	phone: true
   }
  },
  methods: {
    send: function (event) {
      this.validation.fio = (this.form.fio.length > 0);
      this.validation.phone = (this.form.phone.length > 0);     

      if (!this.validation.fio || !this.validation.phone) {
      	return false;
      }
	
	var data = new FormData();
	data.append('fio', this.form.fio);
	data.append('number', this.form.phone);
	data.append('email', this.form.email);
	data.append('comment', this.form.comment);

		axios({
		  method: 'post',
		  url: 'send.php',
		  data: data
		}).then(() => {
			this.form.success = true;
		}).catch(() => {
		})

    }
  }
})