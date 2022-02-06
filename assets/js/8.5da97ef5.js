(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{407:function(e,t,a){"use strict";a.r(t);var i=a(56),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[e._v("#")]),e._v(" Parser")]),e._v(" "),a("p",[e._v("Since our packaging files will have a set structure, we would also require a parser to read such files and then add them to PHION rice list or in other words, extract it.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("phion.parser")]),e._v(" module will provide such functionality. It would have a separate GUI as well CLI driven layouts. Running arguments such as")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ phion-parser "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path/to/package.phkg"')]),e._v("\n")])])]),a("p",[e._v("Should result in the extraction of the package to "),a("code",[e._v("$HOME/.config/phion/rices")]),e._v(" directory. This directory is checked by PHIOS for extracted packages which would then show up in the rices list.\nDoing so will add this to "),a("code",[e._v("rices.db")]),e._v(" which will most likely use sqlite3. This database file will be modified by the parser with the relative database changes. This means that simply adding a folder to the won't do anything until the database is updated.\nThis will be expanded upon more in the database section.")]),e._v(" "),a("h2",{attrs:{id:"working-of-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-of-parser"}},[e._v("#")]),e._v(" Working of Parser")]),e._v(" "),a("p",[e._v("There are only 3 main functions of parser. "),a("strong",[e._v("Extraction")]),e._v(", "),a("strong",[e._v("verification")]),e._v(" and "),a("strong",[e._v("updation")]),e._v(" "),a("em",[e._v("(Yes that's a valid word, I checked)")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("**Note: ** The parser will note be handling the installation process of rices.")])]),e._v(" "),a("h3",{attrs:{id:"extraction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extraction"}},[e._v("#")]),e._v(" Extraction")]),e._v(" "),a("p",[e._v("Extraction includes extracting the files to the "),a("code",[e._v("phion/rices")]),e._v(" directory. The following can be the possible error cases during extraction:")]),e._v(" "),a("ul",[a("li",[e._v("In case the folder is not present, the parser will recheck the installation of PHION and then create a folder for it, which shouldn't happen in a normal installation.")]),e._v(" "),a("li",[e._v("Absence of read/write permissions.")]),e._v(" "),a("li",[e._v("If somehow, the "),a("code",[e._v(".phkg")]),e._v(" has invalid headers or the script is not able to extract, then it will give show the required error as well.")])]),e._v(" "),a("h3",{attrs:{id:"verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),a("p",[e._v("Before updating the database we need to make sure that the structure of the parser matches that of the "),a("RouterLink",{attrs:{to:"/Packaging/package_structure.html"}},[e._v("boilerplate  "),a("code",[e._v(".phkg")])]),e._v(". This includes checking each for each file, searching for redundant and missing files, etc.\nThe next sub-step would be to try and read the PHION config file ("),a("code",[e._v(".phn")]),e._v("). This would be a pickle dump and so, would be handled by the pickle module. More about this config file will be explained in another section.\nError cases:")],1),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v(".phn")]),e._v(" file would be read first. If this file turns out to be empty or corrupted (commonly by editing it in a text editor) then the rice will not be added.")]),e._v(" "),a("li",[e._v("In case there are redundant files, the user will be warned about them and as per the choice, they will most likely be deleted.")])]),e._v(" "),a("blockquote",[a("p",[e._v("**NOTE: ** In case there are multiple files in WM folders or program folders, they will not be considered as redundant files as long as they are mentioned in the "),a("code",[e._v(".phn")]),e._v(" config file.")])]),e._v(" "),a("ul",[a("li",[e._v("If the files specified in the config are not found, then the user will be given a warning about the package being broken but the user will still have the ability to add the rice to the database.")])]),e._v(" "),a("h3",{attrs:{id:"updation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updation"}},[e._v("#")]),e._v(" Updation")]),e._v(" "),a("p",[e._v("This process is fairly straightforward. After the package's integrity is verified, we can then add it to our collection's database. The metadata for the package will be read from the config file and then added to the data tables accordingly.")])])}),[],!1,null,null,null);t.default=r.exports}}]);