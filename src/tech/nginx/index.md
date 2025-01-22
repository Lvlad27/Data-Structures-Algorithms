# NGINX

## Begginer's Guide

> nginx has one master process and several worker processes. The main purpose of the master process is to read and evaluate configuration, and maintain worker processes. Worker processes do actual processing of requests. nginx employs event-based model and OS-dependent mechanisms to efficiently distribute requests among worker processes. The number of worker processes is defined in the configuration file and may be fixed for a given configuration or automatically adjusted to the number of available CPU cores (see worker_processes).

## Questions



## Commands

`nginx -s stop` - fast shutdown
`nginx -s quit` - graceful shutdown
`nginx -s reload` - reloading the configuration file
`nginx -s reopen` - reopening the log files
`ps -ax | grep nginx` - get a list of all running nginx processes

## Configuration




