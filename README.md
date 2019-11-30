# mpv-takeSsSequence
Take a sequence of equispaced screenshots. You can configure the number of screenshots and the video fragment to which it will be applied (you can configure 100% of the video).

By default, the script is bind to "Ctrl + Alt + s"
# Configure
By default the script takes 12 screenshots, change the **variable "N"** (line 9) to the number of screenshots you want. The **variable "start"** (line 10) defines the first screenshot, by default at 5% of the video. The **variable "end"** (line 11) by default 95% does not define exactly the last screenshot, this variable is used to define how often a screenshot is taken (step variable), so the last capture is at = end - step.

# Installation
Put the script in your scripts folder (usually "~/.config/mpv/scripts/" or "%APPDATA%\mpv\scripts" in Windows).

Be sure to set the desired settings for the screenshot, in your configuration file (mpv.conf), https://mpv.io/manual/master/#screenshot.
