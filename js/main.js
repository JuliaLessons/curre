var app = new Vue({
    el: '#accordion',
    data: {},
    methods: {
        accordion: function (event) {
            event.target.classList.toggle('active');
        }
    }
});