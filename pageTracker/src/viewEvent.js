/**
 * Created by Yixi on 6/8/15.
 */

import {sendToServer,convertToQuery} from './util.js';



function viewEventHook(){
    console.log('change');
    var doc = window.document,
        referrer = doc.referrer,
        domain = window.location.host,
        path = window.location.pathname,
        search = window.location.search,
        hash = window.location.hash;

    var query  = convertToQuery({
        referrer:referrer,
        domain:domain,
        path:path,
        search:search,
        hash:hash
    });

    sendToServer(query);

}

export {viewEventHook};
