import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { axiosWithAuth } from "@/lib/api";
import { FormItemProps } from "antd";

interface FileUploadInputProps extends Omit<FormItemProps, "name"> {
  name: string;
  maxCount?: number;
  accept?: string;
  value?: string;
}

export const getValueFromEvent = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList?.[0]?.response || e?.fileList?.[0]?.url;
};

export const FileUploadInput = ({
  name,
  maxCount = 1,
  accept = "image/*",
  value,
  ...props
}: FileUploadInputProps) => {
  const customRequest = async ({ file, onSuccess, onError }: any) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await axiosWithAuth.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onSuccess(data.url);
    } catch (error) {
      onError(error);
    }
  };

  return (
    <Upload.Dragger
      name="file"
      listType="picture"
      maxCount={maxCount}
      accept={accept}
      customRequest={customRequest}
      fileList={
        value
          ? [{ uid: "-1", name: "image.png", status: "done", url: value }]
          : undefined
      }
      {...props}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single upload. Strictly prohibited from uploading company
        data or other banned files.
      </p>
    </Upload.Dragger>
  );
};
