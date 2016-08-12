import React, {PropTypes} from 'react';
import { Select,Input,Button} from '../common';
const Option = Select.Option;
import './style/index.less';
export default class IndexSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <div>
            <div className="index-search">
                <Select defaultValue="全部类别" className="index-search-before">
                  <Option value="医疗器械">医疗器械</Option>
                  <Option value="独家代理">独家代理</Option>
                </Select>
              <Input className="index-search-input" size="large" placeholder="请输入关键信息" defaultValue="" />
              <Button type="primary" className="index-search-btn">搜索</Button>
            </div>
          </div>
    );
  }
}

IndexSearch.propTypes = {
};
