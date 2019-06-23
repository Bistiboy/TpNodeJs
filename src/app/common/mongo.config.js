const mongoose = require('mongoose');
const url = 'mongodb+srv://tpnode_usr:tpnode_pwd@cluster1-z8flf.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
});
