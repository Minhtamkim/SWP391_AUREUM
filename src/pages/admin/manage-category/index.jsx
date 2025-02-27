import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../../../services/api.category";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { toast } from "react-toastify";

function ManageCategory() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [form] = useForm();

  const fetchCategories = async () => {
    const data = await getCategory();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, record) => {
        return (
          <>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                form.setFieldsValue({
                  ...record, // chấm hỏi ? đằng sau chữ "record?" là để không hiện bảng báo lỗi (tránh crack webweb)
                  //lệnh kiểm tra (?. là optional chaining). Nếu record.categories tồn tại,
                  // nó sẽ lấy tất cả các id từ danh sách categories của record và
                  // lưu vào trường categoryID. Nếu không có categories, nó sẽ gán
                  // một mảng rỗng ([]). Việc sử dụng optional chaining giúp tránh
                  // lỗi khi record.categories không tồn tại.
                  categoryID: record?.categories ? record?.categories?.map((item) => item.id) : [],
                });
              }}
            >
              Edit
            </Button>

            <Popconfirm
              title="Delete the product"
              description="Are you sure want to delete the product ?"
              onConfirm={() => handleDelete(id)}
            >
              <Button danger type="primary">
                Delete
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const handleDelete = async (id) => {
    const response = await deleteCategory(id);

    if (response) {
      fetchCategories();
    }
  };

  const handleSubmit = async (formValues) => {
    // có id thì update, không có thì tạo mới
    if (formValues.id) {
      const response = await updateCategory({ id: formValues.id, category: formValues });
      console.log(response);
      toast.success("Successfully update category!");
    }

    // tạo mới
    else {
      const response = await createCategory(formValues);
      console.log(response);
      toast.success("Successfully create new category!");
    }

    setOpen(false);
    form.resetFields();
    fetchCategories();
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Create New Category
      </Button>
      <Table columns={columns} dataSource={categories.filter((category) => !category.deleted)} />

      <Modal title="Create New Category" open={open} onCancel={() => setOpen(false)} onOk={() => form.submit()}>
        <Form labelCol={{ span: 24 }} form={form} onFinish={handleSubmit}>
          <Form.Item label="Id" name="id" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Name can not be empty!",
              },
              {
                min: 3,
                message: "Name must be at least 3 characters!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ManageCategory;
