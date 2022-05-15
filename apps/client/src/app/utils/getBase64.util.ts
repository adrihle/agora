import { RcFile } from "antd/lib/upload";

export function getBase64(file?: RcFile): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (file){
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
      }
      reader.onerror = error => reject(error);
    });
  }
  