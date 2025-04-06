import { Helmet } from 'react-helmet';
import { TitleSuffix } from '@/components/Text';
import { Tree, Button, Flex, Form, Input } from 'antd';
import { FileProtectOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

// 页面基础配置
const config = {
  title: '角色管理',
  headerTitle: '角色管理 / ROLE MANAGEMENT.'
};

// 页面顶部说明
const PageDescription = () => {
  return (
    <>
      <div>角色是系统的核心资产之一，也是用户权限的载体，所以对于角色的管理，系统提供了以下的要求和建议，请知悉：</div>
      <ul>
        <li>系统内置了超管，管理员，运维，访客 4 个默认角色，默认角色不支持做任何修改，如果权限不满足你的要求，请创建新的角色。</li>
        <li>超管是系统最高权限拥有者，可以做任何操作，包括可配置权限之外的其他管理。所以保护好超管账号，就是保护系统安全。</li>
        <li>角色和权限绑定，所以在分配角色权限的时候，应该根据实际业务需求，以最小化合理分配为原则。</li>
      </ul>
    </>
  );
};

// 角色管理页面
const Role = () => {
  const treeData = [
    {
      title: '超级管理员',
      key: '1',
      children: [
        {
          title: '用户授权',
          key: 'user-1',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: 'menu-1',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: 'api-1',
          icon: <FileProtectOutlined />
        }
      ]
    },
    {
      title: '管理员',
      key: '2',
      children: [
        {
          title: '用户授权',
          key: 'user-2',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: 'menu-2',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: 'api-2',
          icon: <FileProtectOutlined />
        }
      ]
    },
    {
      title: '运维',
      key: '3',
      children: [
        {
          title: '用户授权',
          key: 'user-3',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: 'menu-3',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: 'api-3',
          icon: <FileProtectOutlined />
        }
      ]
    },
    {
      title: '访客',
      key: '4',
      children: [
        {
          title: '用户授权',
          key: 'user-4',
          icon: <FileProtectOutlined />
        },
        {
          title: '菜单授权',
          key: 'menu-4',
          icon: <FileProtectOutlined />
        },
        {
          title: '接口授权',
          key: 'api-4',
          icon: <FileProtectOutlined />
        }
      ]
    }
  ];

  // 编辑角色表单
  const [editRoleForm] = Form.useForm();

  // 选中的角色
  const [selectedRoleKey, setSelectedRoleKey] = useState('1');

  // 点击角色
  const onRoleMenuSelect = (selectedKeys, info) => {
    // 获取选中的节点
    const keyStr = selectedKeys[0];
    // 如果不包含 -，则表示访问的是角色本身，否则表示访问的是角色菜单，需要进行切割
    if (!keyStr.includes('-')) {
      setSelectedRoleKey(keyStr);
      console.log('角色ID:', keyStr);
    } else {
      const keyArr = keyStr.split('-');
      const roleMenuName = keyArr[0];
      const roleKey = keyArr[1];
      setSelectedRoleKey(roleKey);

      // 判断选中的节点是否是菜单
      if (roleMenuName === 'user') {
        console.log('用户授权');
      } else if (roleMenuName === 'menu') {
        console.log('菜单授权');
      } else if (roleMenuName === 'api') {
        console.log('接口授权');
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{config.title + TitleSuffix}</title>
      </Helmet>
      {/* 页面头部介绍 */}
      <div className="stellar-page-header">
        <div className="stellar-page-title">{config.headerTitle}</div>
        <div className="stellar-page-desc">
          <PageDescription />
        </div>
      </div>

      <div className="stellar-page-content">
        <div className="stellar-page-row">
          <Flex align="flex-start">
            <div className="stellar-page-row-tree">
              <Button type="primary" block icon={<PlusOutlined />} style={{ marginBottom: 10 }}>新增角色</Button>
              <Tree 
                showLine 
                showIcon 
                multiple={false}
                defaultExpandedKeys={[selectedRoleKey]} 
                onSelect={onRoleMenuSelect} 
                treeData={treeData} 
              />
            </div>
            <div className="stellar-page-row-content">
              <div className="stellar-page-row-content-title">
                <span>超级管理员</span>
              </div>
              <div className="stellar-page-row-content-body">
                <div className="stellar-page-row-content-body-form">
                  <Form form={editRoleForm}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ width: 400 }}
                    onFinish={() => { }}>
                    <Form.Item label="角色ID" name="id" hidden>
                      <Input />
                    </Form.Item>
                    <Form.Item label="角色名称" name="name" rules={[{ required: true, message: '请输入角色名称' }]}>
                      <Input placeholder="请输入角色名称" />
                    </Form.Item>
                    <Form.Item label="角色描述" name="description" rules={[{ required: true, message: '请输入角色描述' }]}>
                      <Input placeholder="请输入角色描述" />
                    </Form.Item>
                    <Form.Item label="创建人" name="creator">
                      <Input disabled />
                    </Form.Item>
                    <Form.Item label="创建时间" name="createdAt">
                      <Input disabled />
                    </Form.Item>
                    <Form.Item label="更新时间" name="updatedAt">
                      <Input disabled />
                    </Form.Item>
                    <Form.Item label={null}>
                      <Button type="primary" block htmlType="submit">保存修改</Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Role;
