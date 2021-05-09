.PHONY: build fish

DOCKER_IMAGE_TAG_NAME=aminnairi/vim

build:
	docker build --tag $(DOCKER_IMAGE_TAG_NAME) .

fish:
	cp ./fish/v.fish $HOME/.config/fish/functions/v.fish
