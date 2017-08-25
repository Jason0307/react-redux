import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Table, Button, Modal, Form, Input } from 'antd';
import * as actions from '../actions/ScopeAction';
const FormItem = Form.Item;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedInfo: {},
            filteredInfo: {},
            scopes: [],
            loading: true,
            locale: {
                emptyText: 'No data'
            },
            addModal: false
        };
    }

    handleChange (pagination, filters, sorter) {
        this.setState({
          filteredInfo: filters,
          sortedInfo: sorter,
        });
    }
    componentDidMount() {
        // this.props.actions.loadScopes();
    }

    addScope() {
        this.setState({addModal: true});
    }

    editScope() {

    }

    deleteScope() {

    }

    setAddModalVisible(addModal) {
        this.setState({ addModal });
    }
        
    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="#">{text}</a>,
            }, 
            {
                title: 'Key',
                dataIndex: 'key',
                key: 'key',
                sorter: (a, b) => a.key.length - b.key.length,
                sortOrder: sortedInfo.columnKey === 'key' && sortedInfo.order
            }, 
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
                sorter: (a, b) => a.description.length - b.description.length,
                sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
            }
        ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', 
            }),
        };

        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };

        return (

            <div>
                <div className="table-operations">
                    <Button onClick={this.addScope.bind(this)}>Add</Button>
                    <Button onClick={this.editScope.bind(this)}>Edit</Button>
                    <Button onClick={this.deleteScope.bind(this)}>Delete</Button>
                </div>
                <Table loading={this.state.loading} locale={this.state.locale} rowSelection={rowSelection} dataSource={this.props.scopes} columns={columns} onChange={this.handleChange.bind(this)}/>
                <Modal
                    title="Add New Scope"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.addModal}
                    onOk={() => this.setAddModalVisible(false)}
                    onCancel={() => this.setAddModalVisible(false)}>
                    <FormItem {...formItemLayout} label="Name">
                          {(
                            <Input placeholder="Please input your name" />
                          )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Key">
                          {(
                            <Input placeholder="Please input scope key" />
                          )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Description">
                          {(
                            <Input placeholder="Please input scope description" />
                          )}
                    </FormItem>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
  if (state.scopes.length > 0) {
    return {
      scopes: state.scopes
    };
  } else {
    return {
      scopes: []
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);