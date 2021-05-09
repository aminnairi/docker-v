# docker-v

Neovim on Docker with extra configuration for the Fish Shell

## Requirements

- GNU/Linux
- Git
- Fish
- Docker
- GNU/Make

## Installation

```console
$ git clone https://github.com/aminnairi/docker-v.git
$ cd docker-v
```

## Build

*This will build the docker image locally using the `aminnairi/vim` tag. Update the [`makefile`](./makefile) to use your own naming convention.*

```console
$ make build
```

## Fish Function

*This will copy the [`fish/v.fish`](./fish/v.fish) in the Fish Shell standard folder for functions.*

```fish
make fish
```

## Usage

*This will allow you to open `neovim` using the previously built image in the current directory.*

```console
$ v
```
