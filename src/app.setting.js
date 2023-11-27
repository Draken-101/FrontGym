const setting = {
    server_host: "127.0.0.1",
    server_port: 3030,
    server_protocol: "http",
    server_uri: null
}

setting.server_uri = `${setting.server_protocol}://${setting.server_host}:${setting.server_port}`

export default setting;