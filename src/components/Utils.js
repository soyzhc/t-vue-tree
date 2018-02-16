/**
 * Created by ty on 18/2/16.
 */
class Utils{
    constructor(){}

    /**
     * 给指定元素加上指定class类名
     * @param el
     * @param clsName
     * @returns Undefined
     */
    addCls(el, clsName){
        if(!el || !clsName){
            return false;
        }
        let newClsNames = '';
        let oldClsNames = el.getAttribute("class");

        if(oldClsNames){
            newClsNames = `${oldClsNames} ${clsName}`;
        }else{
            newClsNames = `${clsName}`;
        }
        el.setAttribute("class", newClsNames);
        // el.className= newClsNames;
    }

    //todo 未完
    removeCls(el, clsName){
        if(!el || !clsName){ return false; }

        let oldClsNames = el.getAttribute("class");
        if(!oldClsNames){ return false; }

        let newClsNames = oldClsNames.replace(clsName, '');
        el.setAttribute("class", newClsNames);

    }
}

export default Utils;