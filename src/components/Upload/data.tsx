import { UploadFile } from "./upload";

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("file too big");
    return false;
  }
  return true;
};

const filePromise = (file: File) => {
  const newFile = new File([file], "egg: change name", { type: file.type });
  return Promise.resolve(newFile);
};

const defaultFileList: UploadFile[] = [
  { uid: "123", size: 1234, name: "yep.md", status: "uploading", percent: 30 },
  { uid: "122", size: 1234, name: "yep2.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "yep3.md", status: "error", percent: 30 },
];

export { checkFileSize, filePromise, defaultFileList };
