module.exports = (api) => {
    const isTest = api.env('test');
    const env = api.cache.forever();

    const presets = [
        [
        "next/babel",
        {
            "preset-env": { 
                "targets": {
                    "node": "current",
                },
                "modules": isTest ? 'commonjs' : false, 
            },
            "preset-typescript": {},
            "plugin-proposal-class-properties": {},
            "plugin-proposal-object-rest-spread": {}
        }
        ]
    ];
    const plugins = [ 
        [ "@babel/plugin-proposal-decorators", { "legacy": true } ]
    ];

    return { 
        env: env, 
        presets: presets, 
        plugins: plugins 
    };
}


