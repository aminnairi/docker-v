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
set conceallevel=0

" https://github.com/pangloss/vim-javascript
let g:javascript_plugin_jsdoc = 1

" NERDTree
autocmd VimEnter * NERDTree
nnoremap <C-n> :NERDTreeToggle<CR>

" ALE
let g:ale_fixers = {"javascript": ["eslint", "remove_trailing_lines", "trim_whitespace"]}
nnoremap <leader>af :ALEFix<cr>
nnoremap <leader>an :ALENext<cr>
nnoremap <leader>ap :ALEPrevious<cr>

" https://github.com/rakr/vim-one
let g:one_allow_italics = 1

" https://github.com/plasticboy/vim-markdown
let g:vim_markdown_folding_level = 6
let g:vim_markdown_fenced_languages = ['jsx=javascript']

" https://github.com/ElmCast/elm-vim
let g:elm_setup_keybindings = 0

" https://github.com/posva/vim-vue
let g:vue_pre_processors = 'detect_on_enter'

" https://github.com/leafgarland/typescript-vim
let g:typescript_indent_disable = 1

" https://github.com/vim-python/python-syntax
let g:python_highlight_all = 1
