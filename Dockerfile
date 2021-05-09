FROM archlinux:base-20210228.0.16308

RUN pacman -Syyu --noconfirm --needed neovim git fish nodejs npm
RUN useradd -G wheel -s /bin/fish -m archlinux

USER archlinux

WORKDIR /home/archlinux

RUN npm config set prefix /home/archlinux/.npm
RUN npm install --global htmlhint eslint stylelint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
RUN ls -alh /home/archlinux/.npm

RUN mkdir -p /home/archlinux/.config/nvim/pack/github/start/
RUN mkdir -p /home/archlinux/src
RUN git clone https://github.com/vim-airline/vim-airline /home/archlinux/.config/nvim/pack/github/start/vim-airline.vim
RUN git clone https://github.com/pangloss/vim-javascript /home/archlinux/.config/nvim/pack/github/start/javascript.vim
RUN git clone https://github.com/preservim/nerdtree /home/archlinux/.config/nvim/pack/github/start/nerdtree.vim
RUN git clone https://github.com/othree/html5.vim /home/archlinux/.config/nvim/pack/github/start/html5.vim
RUN git clone https://github.com/ap/vim-css-color /home/archlinux/.config/nvim/pack/github/start/css-color.vim
RUN git clone https://github.com/lepture/vim-css /home/archlinux/.config/nvim/pack/github/start/css3.vim
RUN git clone https://github.com/MaxMEllon/vim-jsx-pretty /home/archlinux/.config/nvim/pack/github/start/jsx.vim
RUN git clone https://github.com/haishanh/night-owl.vim /home/archlinux/.config/nvim/pack/github/start/nightowl.vim
RUN git clone https://github.com/ctrlpvim/ctrlp.vim /home/archlinux/.config/nvim/pack/github/start/ctrlp.vim
RUN git clone https://github.com/dag/vim-fish /home/archlinux/.config/nvim/pack/github/start/fish.vim
RUN git clone https://github.com/dense-analysis/ale /home/archlinux/.config/nvim/pack/github/start/ale.vim
RUN git clone https://github.com/plasticboy/vim-markdown /home/archlinux/.config/nvim/pack/github/start/markdown.vim
RUN git clone https://github.com/ElmCast/elm-vim /home/archlinux/.config/nvim/pack/github/start/elm.vim
RUN git clone https://github.com/neovimhaskell/haskell-vim /home/archlinux/.config/nvim/pack/github/start/haskell.vim
RUN git clone https://github.com/ekalinin/Dockerfile.vim /home/archlinux/.config/nvim/pack/github/start/dockerfile.vim
RUN git clone https://github.com/hashivim/vim-terraform /home/archlinux/.config/nvim/pack/github/start/terraform.vim
RUN git clone https://github.com/nikvdp/ejs-syntax /home/archlinux/.config/nvim/pack/github/start/ejs.vim
RUN git clone https://github.com/posva/vim-vue /home/archlinux/.config/nvim/pack/github/start/vue.vim
RUN git clone https://github.com/leafgarland/typescript-vim /home/archlinux/.config/nvim/pack/github/start/typescript.vim
RUN git clone https://github.com/vim-python/python-syntax /home/archlinux/.config/nvim/pack/github/start/python.vim

COPY ./neovim/init.vim /home/archlinux/.config/nvim/init.vim
COPY ./javascript/.eslintrc.js /home/archlinux/.eslintrc.js
COPY ./css/stylelintrc.json /home/archlinux/.stylelintrc.json
COPY ./html/htmlhintrc.json /home/archlinux/.htmlhintrc

WORKDIR /home/archlinux/src

ENV TERM=xterm-256color
ENV COLORTERM=truecolor
ENV EDITOR=nvim
ENV PATH=$PATH:/home/archlinux/.npm/bin

ENTRYPOINT ["nvim"]
