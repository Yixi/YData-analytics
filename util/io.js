/**
 * Created by Yixi on 6/9/15.
 */

'use strict';

import SocketIo from 'socket.io';
import express from 'express';


var io = new SocketIo(express());

export default io;