import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TitleSuffix } from '@/components/Text';
import { Form, Row, Col, Button, Space, Dropdown, Table, Avatar, Popconfirm } from 'antd';
import {
  SearchOutlined,
  ClearOutlined,
  DownOutlined,
  PlusOutlined,
  DownloadOutlined,
  ClockCircleOutlined,
  UploadOutlined,
  CloudDownloadOutlined,
  EditOutlined,
  DisconnectOutlined
} from '@ant-design/icons';
import { GenerateFormItem } from '@/components/Form';

// 页面基础配置
const config = {
  title: '用户管理',
  headerTitle: '用户管理 / USER MANAGEMENT.',
  expandFilterItemCount: 4
};

// 页面顶部说明
const PageDescription = () => {
  return (
    <>
      <div>用户是系统的核心资产之一，也是许多其它资源的强制依赖，所以对于用户的管理，系统提供了以下的要求和建议，请知悉：</div>
      <ul>
        <li>系统内置的超级管理员账户（super）涉及到系统的基础逻辑判断，不允许从数据库中物理删除，用户在初始化完成之后需要对其基础信息进行修改，以此保障系统安全性。</li>
        <li>为了保障数据的安全性和可靠性，系统选择通过禁用用户来替代删除用户，禁用用户将无法登录系统，但是数据会仍然被保留，可以随时恢复。</li>
        <li>针对某些特殊的用户，例如老板、高管等，系统建议您隐藏其联系方式，做好保护隐私保护。</li>
      </ul>
    </>
  );
};

// 用户管理页面
const User = () => {
  // 搜索表单
  const [filterForm] = Form.useForm();

  // 搜索表单定义
  const filterFormFields = [
    { label: '用户名', name: 'username', placeholder: '使用用户名进行筛选过滤', type: 'input', rules: [{ max: 30, message: '筛选用户名长度不能超过 30 个字符' }] },
    { label: '中文名', name: 'cnName', placeholder: '使用中文名进行筛选过滤', type: 'input', rules: [{ max: 30, message: '筛选中文名长度不能超过 30 个字符' }] },
    { label: '英文名', name: 'enName', placeholder: '使用英文名进行筛选过滤', type: 'input', rules: [{ max: 30, message: '筛选英文名长度不能超过 30 个字符' }] },
    { label: '邮箱', name: 'email', placeholder: '使用邮箱进行筛选过滤', type: 'input', rules: [{ max: 50, message: '筛选邮箱长度不能超过 50 个字符' }] },
    { label: '手机号', name: 'phone', placeholder: '使用手机号进行筛选过滤', type: 'input', rules: [{ max: 11, message: '筛选手机号长度不能超过 11 个字符' }] },
    { label: '状态', name: 'status', placeholder: '通过选择状态进行筛选过滤', type: 'select', search: true, tree: false, multiple: false, allowClear: true, data: [], rules: [] },
    { label: '性别', name: 'gender', placeholder: '通过选择性别进行筛选过滤', type: 'select', search: true, tree: false, multiple: false, allowClear: true, data: [], rules: [] },
    { label: '角色', name: 'systemRole', placeholder: '通过选择角色进行筛选过滤', type: 'select', search: true, tree: false, multiple: false, allowClear: true, data: [], rules: [] }
  ];

  // 是否展开更多筛选
  const [filterFormExpand, setFilterFormExpand] = useState(false);

  // 生成搜索表单
  const generateFilterFormItems = () => {
    return filterFormFields.slice(0, filterFormExpand ? filterFormFields.length : config.expandFilterItemCount).map((field) => (
      <Col span={6} key={field?.name}>
        {GenerateFormItem(field)}
      </Col>
    ));
  };

  // 批量操作下拉菜单
  const multiOperationDropdownMenuItems = [
    {
      label: '禁用选定用户',
      key: '1',
      danger: true
    },
    {
      label: '启用选定用户',
      key: '2'
    },
    {
      label: '更新选定用户',
      key: '3'
    }
  ];

  // 数据列
  const tableColumns = [
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 60,
      align: 'center',
      fixed: 'left',
      render: (url) => <Avatar src={url} />
    },
    {
      title: '中文名',
      dataIndex: 'cnName',
      key: 'cnName',
      width: 80,
      fixed: 'left'
    },
    {
      title: '英文名',
      dataIndex: 'enName',
      key: 'enName',
      width: 120,
      fixed: 'left'
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: '邮箱地址',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: '操作',
      dataIndex: '',
      fixed: 'right',
      key: 'x',
      width: 150,
      align: 'center',
      render: () => {
        return (
          <Space className="stellar-table-action-btn-group">
            <Button type="link" icon={<EditOutlined />}>编辑</Button>
            <Popconfirm
              placement="topRight"
              title="确定要禁用该用户吗？"
              okText="确定"
              cancelText="取消"
              className="stellar-table-action-btn-group-popconfirm"
              okButtonProps={{ style: { backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' } }}
              onConfirm={() => {}}
            >
              <Button type="link" danger icon={<DisconnectOutlined />}>禁用</Button>
            </Popconfirm>
          </Space>
        );
      }
    }
  ];

  // 数据源
  const tableData = [
    {
      key: 1,
      avatar: '/images/avatar/default.png',
      cnName: '张三',
      enName: 'John Brown',
      gender: '男',
      phone: '13100000001',
      email: 'zhangsan@gmail.com',
      role: '管理员',
      description: 'My name is John Brown'
    },
    {
      key: 2,
      avatar: '/images/avatar/default.png',
      cnName: '李四',
      enName: 'Jim Green',
      gender: '女',
      phone: '13100000002',
      email: 'lisi@gmail.com',
      role: '访客',
      description: 'My name is Jim Green.'
    }
  ];

  // 多选行配置
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name
    })
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
        {/* 搜索栏 */}
        <div className="stellar-page-search">
          <Form form={filterForm} name="filterForm" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} colon={false} onFinish={() => {}} autoComplete="off">
            <Row gutter={24}>
              {generateFilterFormItems()}
              <Col span={24} key="x" style={{ textAlign: 'right' }}>
                <Space>
                  <Button icon={<SearchOutlined />} htmlType="submit">
                    条件筛选
                  </Button>
                  <Button icon={<ClearOutlined />} onClick={() => {}}>
                    清理条件
                  </Button>
                  {filterFormFields.length > config.expandFilterItemCount && (
                    <a style={{ userSelect: 'none' }} onClick={() => setFilterFormExpand(!filterFormExpand)}>
                      <DownOutlined rotate={filterFormExpand ? 180 : 0} /> {filterFormExpand ? '收起条件' : '展开更多'}
                    </a>
                  )}
                </Space>
              </Col>
            </Row>
          </Form>
        </div>

        {/* 表格 */}
        <div className="stellar-page-body">
          {/* 表格按钮组 */}
          <div className="stellar-page-table-btn-group">
            <Space>
              <Button icon={<PlusOutlined />} type="primary" onClick={() => {}}>
                新增用户
              </Button>
              <Dropdown menu={{ items: multiOperationDropdownMenuItems }}>
                <Button>
                  <Space>
                    <DownOutlined />
                    批量操作
                  </Space>
                </Button>
              </Dropdown>
            </Space>
            <Space>
              <Button icon={<DownloadOutlined />} onClick={() => {}}>
                模板下载
              </Button>
              <Button icon={<UploadOutlined />} onClick={() => {}}>
                用户导入
              </Button>
              <Button icon={<ClockCircleOutlined />} onClick={() => {}}>
                导入记录
              </Button>
              <Button icon={<CloudDownloadOutlined />} onClick={() => {}}>
                导出用户
              </Button>
            </Space>
          </div>
          {/* 表格内容 */}
          <div className="stellar-page-table-content">
            <Table
              size="small"
              rowSelection={{
                type: 'checkbox',
                ...rowSelection
              }}
              columns={tableColumns}
              dataSource={tableData}
              expandable={{
                expandedRowRender: (record) => <div>{record?.description}</div>,
                rowExpandable: (record) => record?.name !== 'Not Expandable'
              }}
              pagination={{
                pageSize: 1,
                current: 1,
                total: 2,
                showTotal: (total) => `总共 ${total} 条记录`,
                // 是否隐藏分页器，当只有一页时隐藏
                // hideOnSinglePage: true,
                // 是否允许修改显示数量
                showSizeChanger: true,
                // 是否显示快速跳转
                showQuickJumper: true,
                // 页码变化时触发
                onChange: (page, pageSize) => {
                  console.log(page, pageSize);
                }
              }}
              scroll={{
                x: 'max-content'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
