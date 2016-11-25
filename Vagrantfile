# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.box = "Hivee/box"
    config.vm.network "private_network", ip: "192.168.33.10"
    config.vm.hostname = "Hivee"

    config.vm.synced_folder "./adminHivee", "/var/www/adminHivee"
    config.vm.synced_folder "./apiHivee", "/var/www/apiHivee"
    config.vm.synced_folder "./blogHivee", "/var/www/blogHivee"
    config.vm.synced_folder "./clientHivee", "/var/www/clientHivee"

    config.ssh.forward_agent = true
    config.ssh.username = 'vagrant'
    config.ssh.password = 'vagrant'

end
