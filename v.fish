function v
  docker run --rm --interactive --tty --volume "$PWD:/home/archlinux/src" aminnairi/vim $argv
end
