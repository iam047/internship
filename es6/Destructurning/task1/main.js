let go = (options) => {
    let {speed = 4,
        enable: {hyperdrive = true,
            frobnifier = true}} = options;
    console.log("speed=", speed,
        "hyperdrive:", hyperdrive,
        "frobnifier:", frobnifier)
};

go({speed: 5, enable: { hyperdrive : true} });