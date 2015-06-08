/**
 * Created by Yixi on 6/8/15.
 */

import {on} from './util.js';
import {viewEventHook} from './viewEvent.js';


function bindViewEvent(){
    on(window,'hashchange',viewEventHook);
    viewEventHook(); //hook when enter page.
}


function start(){
    console.log('script running...');

    bindViewEvent();

}


start();

