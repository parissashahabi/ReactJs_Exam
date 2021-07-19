import { Input, Form, Button, Space } from "antd";
import { FormikInput } from "./components/formik-input";

import {
  Formik,
  useFormik,
} from "formik";
const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial
  //const initialValues: IForm = { username: "", password: "" };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values: IForm) => {
      console.log(values);
    },
  });
  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <Formik initialValues={formik.initialValues} onSubmit={formik.submitForm}>
        <form onSubmit={formik.handleSubmit}>
          {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
          <FormItem label="Username" name="username">
            <FormikInput
              type="text"
              error={formik.touched.username}
              value={formik.values.username}
              onChange={formik.handleChange}
              className="text-input"
            />
          </FormItem>
          {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
          <FormItem label="Password" name="password">
            <FormikInput
              type="password"
              error={formik.touched.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              className="text-input"
            />
          </FormItem>
          <Space>
            <Button type="primary" htmlType="submit">
              submit
            </Button>
            <Button
              htmlType="reset"
              onClick={() => {
                // TODO: reset form with formik
                formik.handleReset;
              }}
            >
              reset
            </Button>
          </Space>
        </form>
      </Formik>
    </div>
  );
}
