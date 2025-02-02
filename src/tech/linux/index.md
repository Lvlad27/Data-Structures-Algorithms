# Make user

1. Update software
2. Create a new user
3. Make that user a super user
4. Enable login for new user
5. Disable root login

Update software
`apt update`

Upgrade software
`apt upgrade`

Add new user
`adduser $USERNAME`

Add user to "sudo" group
`usermod -aG sudo $YOUR_USERNAME`

Switch user
`su $YOUR_USERNAME`

Check sudo accesss
`sudo cat /var/log/auth.log`
