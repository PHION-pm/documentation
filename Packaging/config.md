# PHION Config

After taking a look at [[package_structure]], you may have noticed a `config.phn` file. This file contains the metadata for the rice package. This file essentially is a pickle dump of the package object that PHION has defined in the core library. 

Apart from metadata, the config decides where each file is to be linked to when being extracted. During this process if it finds a file with the same filename, then it will append `.bak` to the original file as well as warn the user.

The metadata from this object is then used to update the database.

# Package Class

The package class is used to define a new `Package` object by PHION. Used to define a package.

## Properties

| Property Name | Property Description    | Type   |
| ------------- | ------------------------| ------ |
| Name          | The name of the package | string |
| Author        | Package Author Name     | string |

