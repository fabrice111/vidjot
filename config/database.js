if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://fabryrukundo:rukundo111@ds121896.mlab.com:21896/vidjot-prod'}
} else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-de'}
}