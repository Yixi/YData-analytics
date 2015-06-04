/**
 * Created by Yixi on 6/4/15.
 */

import log4js from 'log4js';

log4js.configure({
    appenders:[
        {type:"console"}
    ]
});

export default function(name){
    var logger = log4js.getLogger(name);
    logger.setLevel('DEBUG');
    return logger;
}

