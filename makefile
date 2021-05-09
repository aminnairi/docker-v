.PHONY: build fish

build:
	docker build --tag aminnairi/vim .

fish:
	cp ./fish/v.fish $HOME/.config/fish/functions/v.fish
