const path = require("path");

module.exports = {
    entry : './src/app.js', 
    output : {
        path : path.join(__dirname, 'public'), 
        filename : 'bundle.js'
    }, 
    module: {
        rules : [{
            loader : 'babel-loader', 
            test : /\.js$/, 
            exclude : /node_modules/
        }, {
            test : /\.s?css$/, 
            use : [
                'style-loader', 
                'css-loader', 
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', 
    devServer : {
        contentBase: path.join(__dirname, "public"), 
        historyApiFallback: true
    }
};

//devtool Para ver los errores en la consola, directamente en el componente...
//loader, personaliza el comportamiento de WebPack....
//historyApiFallback Para que funcione el SPA