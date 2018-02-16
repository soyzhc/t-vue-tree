import Utils from './Utils'


const UTILS = new Utils();
const TransitionObj = {
    beforeEnter(el) {
        UTILS.addCls(el, 'transition');
        el.style.height = '0';
    },

    enter(el) {
        el.style.height = (el.scrollHeight !== 0) ? el.scrollHeight + 'px' : '';
        el.style.overflow = 'hidden';
    },

    afterEnter(el) {
        UTILS.removeCls(el, 'transition');
        el.style.height = '';
    },

    beforeLeave(el) {
        UTILS.addCls(el, 'transition');
        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },

    leave(el) {
        if (el.scrollHeight !== 0) {
            el.style.height = 0;
        }
    },

    afterLeave(el) {
        UTILS.removeCls(el, 'transition');
        el.style.height = '';
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
