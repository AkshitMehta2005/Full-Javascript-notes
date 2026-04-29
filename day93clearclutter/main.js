import fs from "fs/promises";
import fsn from "fs";
import path from "path";

// clear clutter

let files;
let dir = "C:\\web dev\\day93clearclutter";

try {
    files = await fs.readdir(dir);
    console.log(files);
} catch (error) {
    console.error("Error reading directory:", error);
}

for (const item of files) {
    console.log("Items running for ", item);
    let ext = item.split(".")[item.split(".").length - 1];

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        if (fsn.existsSync(path.join(dir, ext))) {
            // then move to clutter
            fs.rename(path.join(dir, item), path.join(dir, ext, item));

        }
        else {
            fs.mkdir(ext);
            fs.rename(path.join(dir, item), path.join(dir, ext, item));
        }

    }

}