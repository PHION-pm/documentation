
Phion is an all-in-one rice manager. By using this program, you can easily create, store, manage, install, and even share your rice packages.

The main motivation behind this project was that I've had issues with managing a lot of dots and configurations. Keeping them on Github is okay and gets the job done (somewhat) but copy pasting configs becomes a repetitive task. Phion aims at easing that monotonous process. Phion will allow you to switch between dots way more easily and manage them in a way more organized manner.

To see what WMs and programs are going to be supported check out [Support](Support/Overview.md)

I have broken down various its various functions into multiple segments.

- ## Create

	While starting out with ricing, it may as well be a daunting task. Looking at documentations and configs may overwhelm people. If all a user wants is to change a few keybinds, border colors, wallpaper, accents and terminal colors, PHION can be quite useful for this purpose as it can be used to generate basic configurations, similar to how `pywal` or `wal` works.

	PHION doesn't discourage people from diving into documentations or advanced stuff. Mainly because of its simplicity. PHION will only provide the most basic configuration options. Somewhat like a quick template. In order to customize it further the user has to dive deeper into ricing. 

- ## Store and Manage

	While creating basic configs is nice to have, what I want PHION's main functionality to be is to store and manage multiple rices. When creating a rice, you would have the option to either generate a basic rice by just providing a wallpaper and a color scheme or import an existing rice by providing the necessary files.

	These rices can be also exported as a full package `.phkg` file for easy management.

- ## Install & Setup

	PHION will also contain a collection of scripts which would facilitate setting up of the rice of your preferred Window Manager and tools. It would also take care of your existing configurations by creating the necessary backup files in case anything goes wrong.
	
	For people looking to make packages for PHION please check out the [packaging section](Packaging/Package%20Structure.md)

- ## Share

	Since `.phkg` is one single package, you can easily share it other people without having to link your Github Repositories or creating any symlinks or anything. 

	### Plans for Future

	If this project works out, I may as well create an online service along with an API that people can use to share, similar to how [gnome-looks](https://www.gnome-look.org/) works. 




