# NGINX

## Begginer's Guide

> nginx has one master process and several worker processes. The main purpose of the master process is to read and evaluate configuration, and maintain worker processes. Worker processes do actual processing of requests. nginx employs event-based model and OS-dependent mechanisms to efficiently distribute requests among worker processes. The number of worker processes is defined in the configuration file and may be fixed for a given configuration or automatically adjusted to the number of available CPU cores (see worker_processes).

## Questions

1. What is the purpose of setting up a FASTCGI Proxy?
2. What is the purpose of setting up a Proxy?

## Commands

### Start, stopping and reloading config

`nginx -s stop` - fast shutdown
`nginx -s quit` - graceful shutdown
`nginx -s reload` - reloading the configuration file
`nginx -s reopen` - reopening the log files
`ps -ax | grep nginx` - get a list of all running nginx processes

## Configuration File Structure

Directives => Modules => Context (nested directives)

Example of directives: `events`, `http`, `server`, `location`

- simple Directives (name and params separated by `;` )
- block Directives (same as simple, but surrounded by `{}`)
- anything after `#` is a comment

```nginx

# This is a working configuration of a server that listens on the standard port 80:

server {
    location / {
        root /data/www;
    }

    location /images/ {
        root /data;
    }
}
```

In response to requests with URIs starting with `/images/`, nginx will serve files from the `/data/images` directory. For example, a request for `http://localhost/images/example.png` will return the file `/data/images/example.png`. If such file doesn't exist, nginx will send a response indicating the 404 error.

Requests with URIs not starting with `/images/` will be served from the `/data/www` directory. For example, in response to the `http://localhost/some/example.html` request nginx will send `/data/www/some/example.html` file.

> In case something does not work as expected, you may try to find out the reason in `access.log` and `error.log` files in the directory `/usr/local/nginx/logs` or `/var/log/nginx`.

## Setting up a Simple Proxy Server

### Basic server

```nginx

server {
    listen 8080;
    root /data/up1;

    location / {
    }
}
```

### Proxy Server

```nginx

server {
  location / {
      proxy_pass http://localhost:8080;
  }

# The parameter is a regular expression matching all URIs ending with .gif, .jpg, or .png. A regular expression should be preceded with ~. The corresponding requests will be mapped to the /data/images directory.

  location ~ \.(gif|jpg|png)$ {
      root /data/images;
  }
}
```
