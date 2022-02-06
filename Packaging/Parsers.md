# Parser

Since our packaging files will have a set structure, we would also require a parser to read such files and then add them to PHION rice list or in other words, extract it.

The `phion.parser` module will provide such functionality. It would have a separate GUI as well CLI driven layouts. Running arguments such as 
```bash
$ phion-parser "path/to/package.phkg"
```
Should result in the extraction of the package to `$HOME/.config/phion/rices` directory. This directory is checked by PHIOS for extracted packages which would then show up in the rices list.
Doing so will add this to `rices.db` which will most likely use sqlite3. This database file will be modified by the parser with the relative database changes. This means that simply adding a folder to the won't do anything until the database is updated.
This will be expanded upon more in the database section.

## Working of Parser
There are only 3 main functions of parser. **Extraction**, **verification** and **updation** *(Yes that's a valid word, I checked)*.

> **Note: ** The parser will note be handling the installation process of rices.

### Extraction
Extraction includes extracting the files to the `phion/rices` directory. The following can be the possible error cases during extraction:
- In case the folder is not present, the parser will recheck the installation of PHION and then create a folder for it, which shouldn't happen in a normal installation. 
- Absence of read/write permissions.
- If somehow, the `.phkg` has invalid headers or the script is not able to extract, then it will give show the required error as well.

### Verification
Before updating the database we need to make sure that the structure of the parser matches that of the [boilerplate  `.phkg`](package_structure.md). This includes checking each for each file, searching for redundant and missing files, etc. 
The next sub-step would be to try and read the PHION config file (`.phn`). This would be a pickle dump and so, would be handled by the pickle module. More about this config file will be explained in another section.
Error cases:
- The `.phn` file would be read first. If this file turns out to be empty or corrupted (commonly by editing it in a text editor) then the rice will not be added.
- In case there are redundant files, the user will be warned about them and as per the choice, they will most likely be deleted. 
> **NOTE: ** In case there are multiple files in WM folders or program folders, they will not be considered as redundant files as long as they are mentioned in the `.phn` config file.
- If the files specified in the config are not found, then the user will be given a warning about the package being broken but the user will still have the ability to add the rice to the database.

### Updation
This process is fairly straightforward. After the package's integrity is verified, we can then add it to our collection's database. The metadata for the package will be read from the config file and then added to the data tables accordingly.

