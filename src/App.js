
import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form, Input,Image } from 'antd';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data , SetData] = useState([])

  //fetch Data 
  useEffect(()=>{
    fetchData ()
     },[])

    const fetchData =async()=>{
    const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag')
    const jsonData = await response.json()
    SetData(jsonData)
   
}
  const onFinish = (values) => {
    console.log('Success:', values);
    setLoggedIn(true); // Set the loggedIn state to true upon successful login
  };

  const onLogout = () => {
    setLoggedIn(false); // Set the loggedIn state to false upon logout
  };

  if (loggedIn) {
    // Render the "Home" component when the user is logged in
    return (
    //   <div>
    //    <h1>Listing Country Details</h1>
    //     <Button onClick={onLogout}>Logout</Button>
    //     <div>
    //    {data.map((item,i)=>(
    //     <div>
    //         <ul key ={i}>
    //             <li> Country Name: {item.region}</li>
    //             <p>Place Name :{item.name}</p>
    //             {/* listing Image and Details  */}
    //             <Image
    //                 preview={true}
    //                 src={item.flag}
    //                 width={200}
    //               />
    //             <li>Independent Yet : {item.independent ? 'Yes' : 'No'}</li>
    //         </ul>
    //     </div>
    //    ))}
    // </div>
    //   </div>
    <div>
    <h1>Listing Country Details</h1>
    <Button onClick={onLogout}>Logout</Button>
    <table >
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Place Name</th>
          <th>Flag</th>
          <th>Independent</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.region}</td>
            <td>{item.name}</td>
            <td>
            <Image
              preview={true}
              src={item.flag}
                width={200}
              />
            </td>
            <td>{item.independent ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    );
  }

  // Render the login form when the user is not logged in
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"  
    >
      <h2>Sign In</h2>
      <h4>New User <a href=''>Create an account</a></h4>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
