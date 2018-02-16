import Utils from './Utils'


const UTILS = new Utils();
const TransitionObj = {
    beforeEnter(el) {
        UTILS.addCls(el, 'transition');
        el.style.height = '0';
        console.log('tt beforeEnter');
        debugger
    },

    enter(el) {
        console.log('tt enter');

        el.style.height = (el.scrollHeight !== 0) ? el.scrollHeight + 'px' : '';
        el.style.overflow = 'hidden';

    },

    afterEnter(el) {
        // for safari: remove class then reset height is necessary
        UTILS.removeCls(el, 'transition');
        debugger;
        el.style.height = '';
        console.log('tt afterEnter');

    },

    beforeLeave(el) {
        UTILS.addCls(el, 'transition');
        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';

        console.log('tt beforeLeave');

    },

    leave(el) {
        if (el.scrollHeight !== 0) {
            el.style.height = 0;
        }

        console.log('tt leave');

    },

    afterLeave(el) {
        UTILS.removeCls(el, 'transition');
        el.style.height = '';
        console.log('tt afterLeave');
    }
};

export default {
    name: 'compoTransition',
    functional: true,
    render(h, {children}) {
        const data = {
            on: TransitionObj
        };
        return h('transition', data, children);
    }
};
