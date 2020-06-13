module.exports = (api) => {
    const env = api.cache(true);

    const presets = [
        [
        "next/babel",
        {
            "preset-env": { 
                "targets": {
                    "node": "current"
                } 
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


