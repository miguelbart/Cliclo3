const {VueLoaderPlugin}=require('vue-loader');

module.exports={
    entry:'./src/app/index.js',
    output:{
        path:__dirname +'/src/public/js',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },{
                test:/\.vue$/,
                loader:'vue-loader'
                
            },{
                test: /\.css/,
                use: ['vue-style-loader', 'css-loader'] // ¡AMBOS son necesarios!
              }
        ]
        
    },
    externals: {
        // require ("jquery") es externo y está disponible
        // en la var global jQuery
        "jquery": "jQuery"
        },
    plugins:[
        new VueLoaderPlugin()
    ]
};