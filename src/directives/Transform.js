import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, bindind, vnode) {

        let current = 0;
        el.addEventListener('dblclick', function() {
            let incremento = bindind.value.incremento || 90;
            let animacao = bindind.value.animacao || false;
            current += incremento;

            if (animacao) {
                el.style.transition = 'transform 0.5s';
            }

            el.style.transform = `rotate(${current}deg)`
        });
    }

});