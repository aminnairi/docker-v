FROM archlinux:base-20210228.0.16308

RUN pacman -Syyu --noconfirm neovim git fish nodejs
RUN useradd -G wheel -s /bin/fish -m archlinux

USER archlinux

WORKDIR /home/archlinux

RUN mkdir -p /home/archlinux/.config/nvim/pack/github/start/
RUN mkdir -p /home/archlinux/src
RUN git clone https://github.com/pangloss/vim-javascript /home/archlinux/.config/nvim/pack/github/start/javascript.vim
RUN git clone https://github.com/preservim/nerdtree /home/archlinux/.config/nvim/pack/github/start/nerdtree.vim
RUN git clone https://github.com/othree/html5.vim /home/archlinux/.config/nvim/pack/github/start/html5.vim
RUN git clone https://github.com/ap/vim-css-color /home/archlinux/.config/nvim/pack/github/start/css-color.vim
RUN git clone https://github.com/lepture/vim-css /home/archlinux/.config/nvim/pack/github/start/css3.vim
RUN git clone https://github.com/MaxMEllon/vim-jsx-pretty /home/archlinux/.config/nvim/pack/github/start/jsx.vim
RUN git clone https://github.com/rakr/vim-one /home/archlinux/.config/nvim/pack/github/start/one.vim
RUN git clone https://github.com/ryanoasis/vim-devicons /home/archlinux/.config/nvim/pack/github/start/vi-devicons.vim
RUN git clone https://github.com/vwxyutarooo/nerdtree-devicons-syntax /home/archlinux/.config/nvim/pack/github/start/nerdtree-devicons-syntax.vim
RUN git clone https://github.com/ctrlpvim/ctrlp.vim /home/archlinux/.config/nvim/pack/github/start/ctrlp.vim
RUN git clone https://github.com/dag/vim-fish /home/archlinux/.config/nvim/pack/github/start/fish.vim
RUN git clone https://github.com/dense-analysis/ale /home/archlinux/.config/nvim/pack/github/start/ale.vim
RUN git clone https://github.com/plasticboy/vim-markdown /home/archlinux/.config/nvim/pack/github/start/markdown.vim
RUN git clone https://github.com/ElmCast/elm-vim /home/archlinux/.config/nvim/pack/github/start/elm.vim

COPY ./init.vim /home/archlinux/.config/nvim/init.vim

WORKDIR /home/archlinux/src

ENV TERM=xterm-256color
ENV COLORTERM=truecolor

ENTRYPOINT ["nvim"]
