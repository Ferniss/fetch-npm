const fetch = require('node-fetch');

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
        // AMD 
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
        // CommonJS
    } else {
        root.myFetch = factory(root.jquery);
        // browser context
    }
})(this, function ($) {
    /* vores egen del af modulet  */
    // init
    function init(options) {
        this.APIAddress = options.address
        this.APIKey = options.key
        return this;
    }
    // get
    async function get(resource) {
        try {
            if (typeof fetch === "function") {
                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    }
                })
                return await response.json();
            } else if (typeof XMLHttpRequest === "function") {
                let xhttp = new XMLHttpRequest();
                xhttp.open("GET", this.APIAddress + resource, true);
                xhttp.send();
                return await new Promise(function (resolve, reject) {
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            resolve(JSON.parse(xhttp.responseText));
                        }
                    }
                });
            } else {
                const nodeFetch = require("node-fetch");
                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    },
                    method: "GET",
                    body: JSON.stringify(data)
                });
                return await response.json();
            }
        } catch (error) {
            throw error;
        }

    }
    // post
    async function post(resource, data) {
        try {
            if (typeof fetch === "function") {
                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                });
                return await response.json();
            } else if (typeof XMLHttpRequest === "function") {
                let xhttp = new XMLHttpRequest();
                xhttp.open("POST", this.APIAddress + resource, true);
                xhttp.setRequestHeader("Content-Type", "application/json")
                xhttp.setRequestHeader("Authorization", this.APIKey)
                xhttp.send(JSON.stringify(data));
                return await new Promise(function (resolve, reject) {
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                            resolve(JSON.parse(xhttp.responseText));
                        }
                    }
                });
            } else {
                const nodeFetch = require("node-fetch");
                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                });
                return await response.json();
            }

        } catch (error) {
            throw error;
        }
    }
    // PUT 
    async function put(resource, data) {
        try {
            if (typeof fetch === "function") {
                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                    },
                    method: "PUT",
                    body: JSON.stringify(data)
                });
                return await response.json();
            } else if (typeof XMLHttpRequest === "function") {
                let xhttp = new XMLHttpRequest();
                xhttp.open("PUT", this.APIAddress + resource, true);
                xhttp.setRequestHeader("Content-Type", "application/json")
                xhttp.setRequestHeader("Authorization", this.APIKey)
                xhttp.send(JSON.stringify(data));
                return await new Promise(function (resolve, reject) {
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                            resolve(JSON.parse(xhttp.responseText));
                        }
                    }
                });
            } else {
                const nodeFetch = require("node-fetch");
                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                    },
                    method: "PUT",
                    body: JSON.stringify(data)
                });
                return await response.json();
            }

        } catch (error) {
            throw error;
        }
    }
    // DELETE 
    async function remove(resource) {
        try {
            if (typeof fetch === "function") {
                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey,
                        "Content-Type": "application/json"
                    },
                    method: "DELETE"
                });
                return await new Promise(function (resolve, reject) {
                    resolve(response.status);
                });
            } else if (typeof XMLHttpRequest === "function") {
                let xhttp = new XMLHttpRequest();
                xhttp.open("DELETE", this.APIAddress + resource, true);
                xhttp.setRequestHeader("Content-Type", "application/json")
                xhttp.setRequestHeader("Authorization", this.APIKey)
                xhttp.send();
                return await new Promise(function (resolve, reject) {
                    xhttp.onreadystatechange = function () {
                        resolve(xhttp.status);
                    }
                });
            } else {
                const nodeFetch = require("node-fetch");
                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    },
                    method: "DELETE"
                });

                return await new Promise(function (resolve, reject) {
                    resolve(response.status);
                });
            }

        } catch (error) {
            throw error;
        }
    }

    return {
        init,
        get,
        post,
        put,
        remove
    }
});