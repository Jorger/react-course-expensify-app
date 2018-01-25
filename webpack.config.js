const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    //console.log("env: ", env);
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry : './src/app.js', 
        output : {
            path : path.join(__dirname, 'public', 'dist'), 
            filename : 'bundle.js'
        }, 
        module: {
            rules : [{
                loader : 'babel-loader', 
                test : /\.js$/, 
                exclude : /node_modules/
            }, {
                test : /\.s?css$/, 
                use : CSSExtract.extract({
                    use : [
                        {
                            loader : 'css-loader', 
                            options : {
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'sass-loader', 
                            options : {
                                sourceMap : true
                            }
                        }
                    ]
                })
            }]
        },
        plugins : [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', 
        devServer : {
            contentBase: path.join(__dirname, "public"), 
            historyApiFallback: true, 
            publicPath : '/dist/'
        }
    }
};


//devtool Para ver los errores en la consola, directamente en el componente...
//loader, personaliza el comportamiento de WebPack....
//historyApiFallback Para que funcione el SPA