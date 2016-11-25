# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.box = "Hivee/box"
    config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.hostname = "Hivee"

    config.vm.synced_folder "./admin", "/var/www/admin"
    config.vm.synced_folder "./api", "/var/www/api"
    config.vm.synced_folder "./blog", "/var/www/blog"
    config.vm.synced_folder "./client", "/var/www/client"

    config.ssh.forward_agent = true
    config.ssh.username = 'vagrant'
    config.ssh.password = 'vagrant'

end
