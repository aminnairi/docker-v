.PHONY: build fish

build:
	docker build --tag aminnairi/vim .

fish:
	cp v.fish $HOME/.config/fish/functions/v.fish
