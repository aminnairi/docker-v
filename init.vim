set shiftwidth=2
set tabstop=2
set softtabstop=2
set background=dark
colorscheme one
set termguicolors
set autoindent
set expandtab
set shiftround
set hlsearch
set ignorecase
set incsearch
set smartcase
set complete-=i
set lazyredraw
set display+=lastline
set encoding=utf8
set linebreak
set scrolloff=1
set sidescrolloff=5
syntax enable
set nowrap
set laststatus=2
set ruler
set wildmenu
set tabpagemax=50
set cursorline
set number
set relativenumber
set noerrorbells
set visualbell
set title
set foldmethod=indent
set foldnestmax=3
set nofoldenable
set autoread
set backspace=indent,eol,start
set formatoptions+=j
set hidden
set history=1000
set noswapfile
set wildignore+=node_modules,.git
set magic
autocmd FocusGained,BufEnter * checktime

" NERDTree
autocmd VimEnter * NERDTree
nnoremap <C-n> :NERDTreeToggle<CR>

" ALE
let g:ale_fixers = {"javascript": ["eslint"]}
nnoremap <leader>af :ALEFix<cr>
