import { element, by } from "protractor";

export class UploadSheet_Repository {

    public static browseFilesButton = element(by.xpath("//span[.='Browse file']"))
    public static uploadButton = element(by.xpath("//button[.='Upload']"))


}
