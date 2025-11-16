# chocolatey_setup
This repository is intended for installing Chocolatey on your Windows computer, as it does not support the fully native Bash scripting process used in Linux.
# [Landing page](https://aeronjechocolateysetup.vercel.app/)
```
aeronje/
└──chocolatey_setup/
    ├── api
    │   └── index.js
    ├── aeronje_style_chocolatey_setup.ps1
    ├── vercel.json
    └── README.md
```
# Panuto
```Instructions in Filipino language```

```
1.
# Kung nababasa mo na ang panuto na ito, maaari mo na i-download ng deretso ang aeronje_style_chocolatey_setup.ps1
```
[aeronje_style_chocolatey_setup.ps1](https://aeronjechocolateysetup.vercel.app/)
```
2.
# Kapag matagumpay mo natapos ang pag-download ng aeronje_style_chocolatey_setup.ps1 ay maaari mo na i-run ang PowerShell from the start menu or search.
# Huwag kalimutan i-run as administrator. Mahalaga na ang PowerShell ay running as administrator.

3.
# Kapag nasa loob ka na ng PowerShell, mag-change directory ka kung saan mo ni-saved ang aeronje_style_chocolatey_setup.ps1 kanina sa step 1.
# Kalimitan ito ay nasa Downloads.
```
```
Halimbawa:
PS C:\Windows\system32> cd C:\Users\donna\Downloads
```
```
# Ganunpaman, iba pa rin ang magiging path kung ni-saved mo ito sa ibang folder or directory.

4.
# Kapag nasa tamang path ka na kung saan mo ni-saved ang aeronje_style_chocolatey_setup.ps1 ay maaari mo na i-run ang command na .\aeronje_style_chocolatey_setup.ps1
```

```
Halimbawa:
PS C:\Users\donna\Downloads> .\aeronje_style_chocolatey_setup.ps1
```

```
5.
# Intayin lamang na matapos ang lahat ng stages, aabot ng halos kalahating oras lahat ng ito.
# Huwag kalimutang i-restart ang iyong Windows computer kapag tapos na ang lahat ng proseso.
```
# Bonus: SSH tips you will eventually need

As you continue leveling up your scripting skills, you will eventually reach the stage where your work moves beyond simple .sh or .ps1 files running locally. Once you start automating deployments, remote tasks, or interacting with servers, SSH naturally becomes your second nature.

That is usually the moment new scripters realize that shell work is not just about loops and variables. It grows into real-world tasks like connecting to remote machines, transferring files, or running automated jobs over the network. And when you get to that phase, you may encounter this familiar warning:
```
WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!
```
This happens because every machine you connect from keeps a record of the remote server’s host key inside a file called ```known_hosts```. That is how SSH protects you from attackers pretending to be your server.

**Why This Happens**

SSH saves the identity of every server you have connected to. When the current host key does not match the one saved previously, it assumes something suspicious might be happening.

**How to fix it?**

```
ssh-keygen -R hostname or the IP address.
```
Then try again reconnecting.

# Tech content
You may watch [TC5](https://web.facebook.com/share/v/1CukzS4a56/) for more context. ```The video is in Filipino language```

